const express = require("express");
const cors = require("cors");
const axios = require("axios");



const private_key = "80ef2086-ecf5-48e0-a6ec-9fe9012a067b";
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const r = await axios.put('https://api.chatengine.io/users/',
    {username:username, secret:username, first_name: username},
    {headers:{"private-key":private_key}}    
    );
    return res.status(r.status).json(r.data)


  }
    catch (e){

    return res.status(e.response.status).json(e.response.data);

    }
  
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);