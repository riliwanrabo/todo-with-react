const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App is listening on pert ${port}`);
});
//
app.get("/api/users", (req, res) => {
  res.send(
    JSON.stringify({ data: { users: ["Yunus", "Yisa", "Ahmed", "Moses"] } })
  );
});
