const mongoose = require("mongoose");
//sauvegarger les données dans la base de données
const SchemaWilder = mongoose.Schema(//création du schéma
  {
    name: {type: String, unique: true},
    city: String,
    skills: [{ title: String, votes: Number }],
  },
  {
    versionKey: false,// versionKey est une option qui permet de supprimer le _v dans le nom de la collection
  }
);

const WilderModel = mongoose.model("Wilders", SchemaWilder); //création du model
//wilders est le nom de la collection

module.exports = WilderModel;
