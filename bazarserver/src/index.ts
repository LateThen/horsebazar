import express from "express";
import dotenv from "dotenv";
dotenv.config(); //načte .env soubor do process.env
//process
import cors = require("cors"); //na stary balicky import
import cookieparser from "cookie-parser";
import db from "./models/index";

const app = express();
app.use(express.json()); //app bude pouzivat jen json
app.use(cors()); //app bude pouzivat cors
app.use(cookieparser()); //app bude umet brat cookies

const PORT = process.env.PORT || 3000;

db.sequelize.sync({ force: true, alter: true }).then(async () => {
  const userRolesData = [
    {
      name: "user",
    },
    {
      name: "admin",
    },
  ];
 
});

app.use(`/api/v${process.env.API_VER}/horses`, require("./routes/horses"));
app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
