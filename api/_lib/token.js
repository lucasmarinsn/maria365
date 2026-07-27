const crypto = require('crypto');

function generateToken() {
  // Generate a unique token: MARIA-XXXX-XXXX-XXXX
  const segment1 = crypto.randomBytes(2).toString('hex').toUpperCase();
  const segment2 = crypto.randomBytes(2).toString('hex').toUpperCase();
  const segment3 = crypto.randomBytes(2).toString('hex').toUpperCase();
  
  return `MARIA-${segment1}-${segment2}-${segment3}`;
}

function generateShortToken() {
  // Shorter token for URLs: 12 characters
  return crypto.randomBytes(8).toString('base64url').substring(0, 12);
}

module.exports = {
  generateToken,
  generateShortToken
};
