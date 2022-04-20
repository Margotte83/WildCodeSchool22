const express = require("express"); // Créer une instance de express
require("dotenv").config({ path: "./config/.env" });

const mongoose = require("mongoose"); //mongoose connection
const cors = require("cors");

const connect = require("./db/connect");
const WilderModel = require("./models/WilderModel"); //importer le modèle
const wilderController = require("./controllers/wilders");

connect();//connect to mongoDB

const app = express();

//middleware est une fonction qui permet de gérer les erreurs
app.use(express.urlencoded({ extended: true }));//express.json() permet de parser les données de la requête en JSON
app.use(express.json());//
app.use(cors());

//High order function
function runAsyncWrapper(callback) {
  //fonction qui permet de gérer les erreurs
  return function (req, res, next) {
    //req = requête, res = réponse, next = suivant
    callback(req, res, next).catch(next); // callback(req, res, next) est une fonction qui permet de gérer les erreurs
  };
}

// routes
app.get("", (req, res) => {
  console.log(req);
  res.send({ success: true, data: { title: "Welcome to my website" } });
});

app.get("/createUser", async (req, res) => {
  const wilders = new wilder({
    name: "Bertrand",
    city: "Nantes",
    skills: [
      {
        title: "Javascript",
        votes: 10,
      },
      {
        title: "NodeJS",
        votes: 15,
      },
    ],
  });

  try {
    await wilders.save();
    res.send(wilders);
  } catch (err) {
    console.error(err.message);
  }
});
//appeler la fonction runAsyncWrapper 
app.post("/api/wilder/create", runAsyncWrapper(wilderController.create));
app.get("/api/wilder/read", runAsyncWrapper(wilderController.read));
app.put("/api/wilder/update/:id", runAsyncWrapper(wilderController.update));
app.delete("/api/wilder/delete/:id", runAsyncWrapper(wilderController.delete));

//Start server
app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
