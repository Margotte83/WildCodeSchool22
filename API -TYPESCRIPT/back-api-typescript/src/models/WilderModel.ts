// import mongoose, { Schema } from 'mongoose';
import { model, Schema, Document } from 'mongoose';

interface IWilder extends Document {
  name: string;
  city: string;
  skills: [
    {
      title: string;
      votes: number;
    }
  ];
}

const SchemaWilder = new Schema(
  // création du schéma
  {
    name: { type: String, unique: true, required: true },

    city: String,
    skills: [{ title: String, votes: Number }],
  },
  {
    versionKey: false, // versionKey est une option qui permet de supprimer le _v dans le nom de la collection
  }
);

const WilderModel = model<IWilder>('Wilders', SchemaWilder); // création du model

export default WilderModel;
