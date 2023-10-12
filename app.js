const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Manis ji welocme to express backend !");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// get
// post
//fetch
// put
//delete
// 10 -11
