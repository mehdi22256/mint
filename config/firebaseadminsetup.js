const admin = require("firebase-admin");
const serviceAccountKey = require("./firebasekey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
  storageBucket: "gs://mint-8096c.appspot.com",
});

exports.db = admin.firestore();

exports.bucket = admin.storage().bucket();
