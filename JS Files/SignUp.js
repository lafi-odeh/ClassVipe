var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");
const { QuerySnapshot } = require("@google-cloud/firestore");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://classvibe-25cc2-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const db = admin.firestore()

let userInfo = db.collection("UserInfo");

userInfo.get().then((querySnapshot)=>{
    querySnapshot.forEach(doc => {
        console.log(doc.data());
    });
})