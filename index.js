const express = require("express");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();
const PORT = 3001;

app.get("/info", async (req, res) => {
  console.log("/info endpoint is Called");
  const url = "https://jsonplaceholder.typicode.com/users";
  const options = {
    method: "GET",
  };

  const response = await fetch(url, options)
    .then((res) => res.json())
    .catch((e) => {
      console.error({
        message: "oh Crap!",
        error: e,
      });
    });

  console.log("RESPONSE: ", response);
  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
