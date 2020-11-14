const express = require("express");
const app = express();
const port = 3000;
const htmlDir = `${__dirname}/html`;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Root route
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
app.get("/", (req, res) => res.sendFile(`${htmlDir}/index.html`));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// About-us
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
app.get("/about-us", (req, res) => res.sendFile(`${htmlDir}/about-us.html`));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// 404
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
app.get("*", (req, res) => res.sendFile(`${htmlDir}/404.html`));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
