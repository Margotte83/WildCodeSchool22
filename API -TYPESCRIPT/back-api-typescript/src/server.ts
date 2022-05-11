import express from 'express';
import cors from 'cors';

require('dotenv').config();

// import mongoose from "mongoose";

const connect = require('./db/connect');

const wilderController = require('./controllers/wilders');

const app = express();

connect(); // connect to mongoDB

// middleware est une fonction qui permet de gérer les erreurs
app.use(express.urlencoded({ extended: true })); // express.json() permet de parser les données de la requête en JSON
app.use(express.json()); //
app.use(cors());

// High order function
function runAsyncWrapper(
  callback: (arg0: any, arg1: any, arg2: any) => Promise<any>
) {
  // fonction qui permet de gérer les erreurs
  // eslint-disable-next-line func-names
  return function (req: any, res: any, next: any): void {
    Promise.resolve(callback(req, res, next)).catch(next);
    // req = requête, res = réponse, next = suivant
    callback(req, res, next).catch(next); // callback(req, res, next) est une fonction qui permet de gérer les erreurs
  };
}

// routes
app.get(
  '',
  (
    req: any,
    res: { send: (arg0: { success: boolean; data: { title: string } }) => void }
  ) => {
    console.log(req); // eslint-disable-line no-console
    res.send({ success: true, data: { title: 'Welcome to my website' } });
  }
);

app.get(
  '/createUser',
  async (_req: any, res: { send: (arg0: any) => void }) => {
    // const wilders = new WilderModel({
    const wilders = await wilderController.createWilder({
      // création d'un nouveau wilder

      name: 'Bertrand',
      city: 'Nantes',
      skills: [
        {
          title: 'Javascript',
          votes: 10,
        },
        {
          title: 'NodeJS',
          votes: 15,
        },
      ],
    });

    try {
      await wilders.save();
      res.send(wilders);
    } catch (err) {
      res.send(err);
    }
  }
);
// appeler la fonction runAsyncWrapper
app.post('/api/wilder/create', runAsyncWrapper(wilderController.create));
app.get('/api/wilder/read', runAsyncWrapper(wilderController.read));
app.put('/api/wilder/update/:id', runAsyncWrapper(wilderController.update));
app.delete('/api/wilder/delete/:id', runAsyncWrapper(wilderController.delete));

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server started on port:${process.env.PORT}`); // eslint-disable-line no-console
});
// console.log(process.env);
