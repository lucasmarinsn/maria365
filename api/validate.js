const { validateToken } = require('./_lib/firebase');

module.exports = async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { token } = req.query;

    if (!token) {
      return res.status(400).json({ 
        valid: false, 
        error: 'Token is required' 
      });
    }

    console.log('Validating token:', token);

    const result = await validateToken(token);
    
    console.log('Validation result:', result);

    return res.status(200).json(result);

  } catch (error) {
    console.error('Validation error:', error);
    return res.status(500).json({ 
      valid: false, 
      error: 'Internal server error' 
    });
  }
};
