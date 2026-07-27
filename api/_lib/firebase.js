const { initializeApp, getApps } = require('firebase/app');
const { getDatabase, ref, set, get, query, orderByChild, equalTo } = require('firebase/database');

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || "maria-365.firebaseapp.com",
  databaseURL: process.env.FIREBASE_DATABASE_URL || "https://maria-365-default-rtdb.firebaseio.com",
  projectId: process.env.FIREBASE_PROJECT_ID || "maria-365",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "maria-365.firebasestorage.app",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "594974781855",
  appId: process.env.FIREBASE_APP_ID || "1:594974781855:web:c6f6aa3c9162eb06aecdaa"
};

let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const db = getDatabase(app);

async function saveToken(token, email, name) {
  const tokenData = {
    email: email,
    name: name || '',
    createdAt: new Date().toISOString(),
    active: true,
    accessed: false
  };
  
  await set(ref(db, `tokens/${token}`), tokenData);
  return tokenData;
}

async function validateToken(token) {
  const tokenRef = ref(db, `tokens/${token}`);
  const snapshot = await get(tokenRef);
  
  if (!snapshot.exists()) {
    return { valid: false, error: 'Token not found' };
  }
  
  const data = snapshot.val();
  
  if (!data.active) {
    return { valid: false, error: 'Token deactivated' };
  }
  
  // Mark as accessed
  if (!data.accessed) {
    await set(ref(db, `tokens/${token}/accessed`), true);
    await set(ref(db, `tokens/${token}/firstAccess`), new Date().toISOString());
  }
  
  return {
    valid: true,
    email: data.email,
    name: data.name
  };
}

async function tokenExists(email) {
  const tokensRef = ref(db, 'tokens');
  const emailQuery = query(tokensRef, orderByChild('email'), equalTo(email));
  const snapshot = await get(emailQuery);
  return snapshot.exists();
}

module.exports = {
  db,
  saveToken,
  validateToken,
  tokenExists
};
