// controllers/wilders.js
// un controller permet de gérer les routes
const { deleteOne } = require("../models/WilderModel");
const WilderModel = require("../models/WilderModel");

module.exports = {//exporter les fonctions
  // Déclaration de la requête et de la réponse
  create: async (req, res, next) => {
   //async = fonction asynchrone (promesse)
    async function runAsync() {// runAsync permet de gérer les erreurs  
      // await permet d'attendre la fin de la fonction
      await WilderModel.init();//initialisation de la base de données
      const wilder = new WilderModel(req.body);//création d'un nouveau wilder. req.body = le body de la requête
      const result = await wilder.save();// sauvegarde du wilder dans la base de données
      res.json({ success: true, result });//renvoie le résultat de la requête
    }
    runAsync().catch(next);//appel de la fonction runAsync
    res.status(400).send({error: err.message})
  },

  read: async (req, res, next) => {
    try {
      const wilders = await WilderModel.find();
      res.json({ success: true, wilders });
    } catch (err) {
      res.status(404).json({success: false, result: err});
    }
  },

  update: async (req, res) => {
    try {
      //mise à jour en temps réel
      const option = {
        new: true,// renvoie le nouveau wilder
      };
      const wilder = await WilderModel.findByIdAndUpdate(//findByIdAndUpdate permet de trouver un wilder par son id et de le mettre à jour
        req.params.id,// id = l'id du wilder
        req.body,// req.body = le body de la requête
        option // option = nouvelle valeur du wilder
      );
      res.json(wilder);
    } catch (err) {
      res.json({ success: false, result: err });
      res.status(400).json({ success: false, result: err})
    }
  },

  delete: async (req, res, next) => {
    //
    try {
      const result = await WilderModel.deleteOne({ _id: req.params.id });//
      res.json({ success: true, result });
    } catch (err) {
      res.status(400).json({ success: false, result: err})
    }
  },
};
   

