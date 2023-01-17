const express = require("express");
const app = express();
const axios = require("axios");


const headers = { 'auth': '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' }
// Creating a controller to get user details
// Controller is a type of callback function which fires everytime a server gets a request in a specified route just like a constructor

const getUserDetails = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  try {
    const username = req.params.user;  // Getting the username from the request
    const response = await axios.get(
      `https://api.github.com/users/${username}`
      , headers);
    const data = await response.data;
    return res.status(200).json({
      msg: "User Found",
      data: data,
    });
  } catch (error) {
    console.log(error)
    return res.status(404).json({
      msg: "No User Found.!",
      error: error
    });
  }
};

// Controller to get repositories of the user
const getUserRepos = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  try {
    const username = req.params.user;
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
      , headers);
    const data = await response.data;
    return res.status(200).json({
      msg: "User Repositories Found",
      data: data,
    });
  } catch (error) {
    return res.status(404).json({
      msg: "error",
      error: error
    });
  }
};

// Controller to get languages used in the repositories
const getUserRepoTopics = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  try {
    const username = req.params.user;
    const repository = req.params.repo;
    const data = await axios.get(`https://api.github.com/repos/${username}/${repository}/topics`, headers);
    return res.status(200).json({
      msg: "User Repositories Found",
      data: data.data,  // data.data is used because the data is nested in the response
    });
  }
  catch (error) {
    return res.status(404).json({
      msg: "error",
      error: error
    });
  }
}

// Routes to get user details, repositories and languages used in the repositories
app.get("/:user", getUserDetails);
app.get("/:user/repos", getUserRepos);
app.get("/repos/:user/:repo/topics", getUserRepoTopics);

//Creating a dynamic port
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`app listening to port ${PORT}`)); // Listening to the port