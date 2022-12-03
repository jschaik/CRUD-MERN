const express = require('express');
const mongoose = require('mongoose');
const app = express();

const SpeurtochtModel = require('./models/Speurtocht');

app.use(express.json());

mongoose.connect(
  'mongodb+srv://jsonschaik:psw1234@crud.lt8zbt4.mongodb.net/speurtocht?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
  }
);

app.get('/', async (req, res) => {
  const speurtocht = new SpeurtochtModel({
    speurtochtId: 1,
    vragenForm: 'Ik ben de beste',
    antwoorden: 'ja',
    correcteAntwoord: 'ja',
  });

  try {
    await speurtocht.save();
    res.send("inserted data")
    
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log('server is running on port 3001...');
});
