// import WilderModel from "../models/WilderModel";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Request, Response, NextFunction } from 'express';
import WilderModel from '../models/WilderModel';

module.exports = {
  // Get all wilders
  create: async (req: Request, res: Response, next: NextFunction) => {
    async function runAsync() {
      // runAsync permet de gérer les erreurs

      const wilder = new WilderModel(req.body); // création d'un nouveau wilder. req.body = le body de la requête
      const result = await wilder.save(); // sauvegarde du wilder dans la base de données
      res.json({ success: true, result }); // renvoie le résultat de la requête
    }
    runAsync().catch(next); // appel de la fonction runAsync
    res.status(400).send({ error: 'error' }); // renvoie un message d'erreur
  },

  read: async (
    _req: any,
    res: {
      json: (arg0: { success: boolean; wilders: any }) => void;
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: { (arg0: { success: boolean; result: any }): void; new (): any };
      };
    }
  ) => {
    try {
      const wilders = await WilderModel.find(); // récupération de tous les wilders
      res.json({ success: true, wilders });
    } catch (err) {
      res.status(404).json({ success: false, result: err });
    }
  },

  update: async (
    req: { params: { id: any }; body: any },
    res: {
      json: (arg0: { success: boolean; result: any }) => void;
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: { (arg0: { success: boolean; result: any }): void; new (): any };
      };
    }
  ) => {
    try {
      // mise à jour en temps réel
      const option = {
        new: true, // renvoie le nouveau wilder
      };
      const wilder: any = await WilderModel.findByIdAndUpdate(
        // findByIdAndUpdate permet de trouver un wilder par son id et de le mettre à jour
        req.params.id, // id = l'id du wilder
        req.body, // req.body = le body de la requête
        option // option = nouvelle valeur du wilder
      );
      res.json(wilder);
    } catch (err) {
      res.json({ success: false, result: err });
      res.status(400).json({ success: false, result: err });
    }
  },

  delete: async (
    req: { params: { id: any } },
    res: {
      json: (arg0: { success: boolean; result: any }) => void;
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: { (arg0: { success: boolean; result: any }): void; new (): any };
      };
    }
  ) => {
    //
    try {
      const result = await WilderModel.deleteOne({ _id: req.params.id }); // suppression du wilder par son id

      res.json({ success: true, result });
    } catch (err) {
      res.status(400).json({ success: false, result: err });
    }
  },
};
