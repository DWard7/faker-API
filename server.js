const express = require("express");
const app = express();

const {User, users} = require("./models/users")
const { Company, companies } = require("./models/company")

app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this to the browser");
});

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/users/new", (req, res) => {
  res.status(200).json(users);
});

app.get("/api/companies/new", (req, res) => {
  res.status(200).json(companies);
});

app.get("/api/user/company", (req, res) => {
  const user = new User();
  const company = new Company();
  const combine = {...company, ...user};
  res.status(200).json(combine);
});

const server = app.listen(8000, () =>
  console.log(`Locked and loaded on port ${server.address().port}!`)
);
