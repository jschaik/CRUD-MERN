const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const SpeurtochtModel = require('./models/Speurtocht');

app.use(express.json());
app.use(cors())

mongoose.connect(
  'mongodb+srv://jsonschaik:psw1234@crud.lt8zbt4.mongodb.net/speurtocht?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
  }
);

app.post('/insert', async (req, res) => {

  const speurtochtId = req.body.speurtochtId;
  const vragenForm = req.body.vragenForm;
  const antwoorden = req.body.antwoorden;
  const correcteAntwoord = req.body.correcteAntwoord;

  const speurtocht = new SpeurtochtModel({
    speurtochtId: speurtochtId,
    vragenForm: vragenForm,
    antwoorden: antwoorden,
    correcteAntwoord: correcteAntwoord,
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
