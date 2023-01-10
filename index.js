const express = require("express");
const app = express();
const axios = require("axios");

// Creating a controller to get user details
// Controller is a type of callback function which fires everytime a server gets a request in a specified route just like a constructor
const getUserDetails = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  try {
    const username = req.params.user;
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    const data = await response.data;
    return res.status(200).json({
      msg: "User Found",
      data: data,
    });
  } catch (error) {
    return res.status(404).json({ msg: "No User Found.!" });
  }
};

// Controller to get repositories of the user
const getUserRepos = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  try {
    const username = req.params.user;
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    const data = await response.data;
    return res.status(200).json({
      msg: "User Repositories Found",
      data: data,
    });
  } catch (error) {
    return res.status(404).json({ msg: "No User Found.!" });
  }
};

app.get("/:user", getUserDetails);
app.get("/:user/repos", getUserRepos);

//Creating a dynamic port
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`app listening to port ${PORT}`));