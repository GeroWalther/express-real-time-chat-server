//ProjectID: 5fac749a-f7b7-4570-9b33-6053f3e9913f
//Private Key: 7cd5bb24-0116-47b6-8113-a64e49f6f024
const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

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
      { headers: { 'PRIVATE-KEY': '7cd5bb24-0116-47b6-8113-a64e49f6f024' } }
    );
    return res.status(response.status).json(response.data);
  } catch (err) {
    return res.status(err.response.status).json(err.response.data);
  }
});

app.listen(3001);
