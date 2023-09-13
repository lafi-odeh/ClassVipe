const express = require("express");
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

const app = express();
const port = process.env.PORT || 3000;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();
let userInfo = db.collection("UserInfo");

//app.use(cors({ origin: "https://localhost:3000" }));
app.use(express.static("HTML Files"));
app.use(express.static("JS Files"));
app.use(express.static("CSS Files"));
app.use(express.static("Images"));

app.get("/", (req, res) => {
  res.sendFile("E:/Developer/Github/ClassVipe/HTML Files/SignUp.html");
});

app.post("/SignUp", (req, res) => {
  var messages = [];
  userInfo
    .get()
    .then((querysnapshot) => {
      querysnapshot.forEach((doc) => {
        messages.push(doc.data());
      });
    })
    .then(() => {
      console.log(messages);
      res.send(messages);
    });
});

app.listen(port, () => {
  console.log(`Server is running`);
});
