const crypto = require('crypto');
const { saveToken, tokenExists } = require('./_lib/firebase');
const { generateToken } = require('./_lib/token');
const { sendAccessEmail } = require('./_lib/email');

module.exports = async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = req.body;
    
    console.log('Webhook received:', JSON.stringify(body, null, 2));

    // Validate Hotmart webhook signature (HMAC SHA256)
    const hottok = process.env.HOTMART_WEBHOOK_SECRET;
    const signature = req.headers['x-hotmart-signature'];
    
    if (hottok && signature) {
      const rawBody = JSON.stringify(body);
      const expectedSignature = crypto
        .createHmac('sha256', hottok)
        .update(rawBody)
        .digest('hex');
      
      if (signature !== expectedSignature) {
        console.error('Invalid signature');
        return res.status(401).json({ error: 'Invalid signature' });
      }
      console.log('Signature validated');
    }

    // Check if this is a purchase event
    const eventType = body.event || body.type;
    
    if (eventType !== 'PRODUC_PURCHASE' && eventType !== 'purchase') {
      console.log('Ignoring event:', eventType);
      return res.status(200).json({ 
        success: true, 
        message: 'Event ignored',
        event: eventType 
      });
    }

    // Extract purchase data
    const purchase = body.data || body;
    const email = purchase.buyer?.email || purchase.email;
    const name = purchase.buyer?.name || purchase.name || '';
    const productName = purchase.product?.name || purchase.product_name || 'María 365';

    if (!email) {
      console.error('No email found in webhook data');
      return res.status(400).json({ error: 'No email provided' });
    }

    console.log('Processing purchase for:', email);

    // Check if user already has access
    const existingAccess = await tokenExists(email);
    if (existingAccess) {
      console.log('User already has access:', email);
      return res.status(200).json({ 
        success: true, 
        message: 'User already has access',
        email 
      });
    }

    // Generate unique token
    const token = generateToken();
    console.log('Generated token:', token);

    // Save to Firebase
    await saveToken(token, email, name);
    console.log('Token saved to Firebase');

    // Send access email
    const emailResult = await sendAccessEmail(email, name, token);
    console.log('Email result:', emailResult);

    return res.status(200).json({
      success: true,
      message: 'Access granted and email sent',
      token,
      email,
      emailSent: emailResult.success
    });

  } catch (error) {
    console.error('Webhook error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
};
