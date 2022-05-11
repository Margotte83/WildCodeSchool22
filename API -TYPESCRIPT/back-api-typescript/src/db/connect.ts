import mongoose from 'mongoose';

// DB connection
module.exports = async function connect() {
  try {
    // const url = 'mongodb://127.0.0.1:27017/wilderdb';
    // console.log(process.env.DB_USER_PASS);
    const url = `mongodb+srv://${process.env.DB_USER_PASS}@cluster0.h7let.mongodb.net/wilderdb?retryWrites=true&w=majority`;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions

    await mongoose.connect(url);
    console.log('Connected sucessfully to MongoDB'); // eslint-disable-line
  } catch (err) {
    console.error('Error connecting to MongoDB', err); // eslint-disable-line
  }
};
