import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import passport from "passport";

// import { PORT } from "./config/server-config.js";
import connect from "./config/db-config.js";
import routes from "./routes/index.js";
import { passportAuth } from "./config/passport-jwt.js";

const serverSetup = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(morgan("combined"));
  passportAuth(passport);

  app.use("/api", routes);

  app.get("/", function (req, res) {
    return res.send("Welcome to GoodReads homepage");
  });

  app.listen(3000, async () => {
    console.log(`Server started at port ${3000}`);
    connect();
  });
};

serverSetup();
