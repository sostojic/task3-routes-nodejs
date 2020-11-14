const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;
const htmlDir = `${__dirname}/html`;
const logsDir = `${__dirname}/logs`;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Logger
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
app.use((req, res, next) => {
    const date = new Date();
    const logText = `**${date.getHours()}:${date.getMinutes()} - "${req.url}"**`;
  
    try {
      if (fs.existsSync(`${logsDir}/URL_logger.txt`)) {
        fs.appendFile(`${logsDir}/URL_logger.txt`, `\n${logText}`, (error) => {
          if (error) {
            throw Error(error);
          }
  
          next();
        });
      } else {
        fs.writeFile(`${logsDir}/URL_logger.txt`, logText, (error) => {
          if (error) {
            throw Error(error);
          }
  
          next();
        });
      }
    } catch (error) {
      throw Error(error);
    }
  });
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
  console.log(`Listening at http://localhost:${port}`);
});

