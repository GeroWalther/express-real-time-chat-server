const express = require('express');

const cors = require('cors');
const { default: axios } = require('axios');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post('/authenticate', async (req, res) => {
  const { username } = req.body;
  try {
    const response = await axios.put(
      'https://api.chatengine.io/users/',
      {
        username,
        secret: username,
        first_name: username,
      },
      { headers: { 'PRIVATE-KEY': process.env.PRIVATE_KEY } }
    );
    return res.status(response.status).json(response.data);
  } catch (err) {
    return res.status(err.response.status).json(err.response.data);
  }
});

app.listen(3001);
