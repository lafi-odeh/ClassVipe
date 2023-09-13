var messgaes = [];

async function sendData() {
  var request = await fetch("/SignUp", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: null,
  });

  var data = await request.json().then((data) => {
    console.log(data);
  });
}
