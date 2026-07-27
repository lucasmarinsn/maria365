const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = process.env.FROM_EMAIL || 'María 365 <no-reply@pasoafuturo.com>';
const APP_URL = process.env.APP_URL || 'https://maria365.vercel.app/app.html';

async function sendAccessEmail(email, name, token) {
  const accessUrl = `${APP_URL}?token=${token}`;
  
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: 'Inter', sans-serif; background: #faf9f6; margin: 0; padding: 40px 20px; }
        .container { max-width: 500px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
        .header { background: linear-gradient(135deg, #1a365d, #2a4a7f); padding: 40px; text-align: center; }
        .header h1 { color: white; font-size: 28px; margin: 0; }
        .header .cross { color: #c9a84c; }
        .content { padding: 40px; }
        .greeting { font-size: 18px; color: #2d3748; margin-bottom: 24px; }
        .message { color: #718096; line-height: 1.6; margin-bottom: 32px; }
        .cta-button { display: block; background: #c9a84c; color: #1a365d; text-align: center; padding: 18px 32px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 16px; text-transform: uppercase; letter-spacing: 1px; }
        .features { margin: 32px 0; padding: 24px; background: #faf9f6; border-radius: 12px; }
        .feature { padding: 8px 0; color: #2d3748; }
        .footer { padding: 24px 40px; text-align: center; color: #a0aec0; font-size: 13px; border-top: 1px solid #e2e8f0; }
        .token { font-family: monospace; background: #edf2f7; padding: 8px 16px; border-radius: 6px; color: #1a365d; font-weight: 600; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1><span class="cross">✝</span> María 365</h1>
        </div>
        <div class="content">
          <p class="greeting">Olá${name ? ', ' + name : ''}!</p>
          <p class="message">
            Obrigado por comprar o <strong>María 365</strong>! Seu acesso está pronto.
          </p>
          <p class="message">
            Clique no botão abaixo para acessar suas 365 orações marianas:
          </p>
          <a href="${accessUrl}" class="cta-button">Acessar María 365</a>
          <div class="features">
            <div class="feature">✓ 365 orações marianas com áudio</div>
            <div class="feature">✓ Reflexões e versículos diários</div>
            <div class="feature">✓ Acompanhamento de progresso</div>
            <div class="feature">✓ Acesso vitalício</div>
          </div>
          <p class="message">
            <strong>Seu código de acesso:</strong><br>
            <span class="token">${token}</span>
          </p>
          <p class="message" style="font-size: 13px; color: #a0aec0;">
            Guarde este email! Você pode acessar a qualquer momento usando o link acima.
          </p>
        </div>
        <div class="footer">
          María 365 © 2026 · Todos os direitos reservados
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: email,
        subject: '✝ Seu acesso ao María 365 está pronto!',
        html: htmlContent
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('Email error:', data);
      return { success: false, error: data };
    }

    console.log('Email sent:', data.id);
    return { success: true, id: data.id };
  } catch (error) {
    console.error('Email send failed:', error);
    return { success: false, error: error.message };
  }
}

module.exports = { sendAccessEmail };
