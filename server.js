const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'src')));

mongoose.connect('mongodb://127.0.0.1:27017/deep')
  .then(() => console.log('MongoDB connection successful'))
  .catch((err) => console.log(err));

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: String,
  gmail: String,
  message: String,
});

const model = new mongoose.model('deepu', schema);

const createDoc = async (name, phone, gmail, message) => {
  try {
    const data = new model({
      name: name,
      phone: phone,
      gmail: gmail,
      message: message,
    });
    const result = await data.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};


app.post('/contact', (req, res) => {
  let body = req.body;
  let name = body.name;
  let phone = body.phone;
  let gmail = body.gmail;
  let message = body.message;
  createDoc(name, phone, gmail, message);
  res.send('Form data received successfully!');
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
