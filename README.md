# Get the information about any GitHub User!🔍

This is the bakcend of the **Fullstack App** which uses GitHub API under the hood to get the data of the user one searches for

### Technologies Used 👩‍💻

In the frontend part of the app, the technologies used are as follows:

- NodeJS - As the environment for building the backend
- ExpressJS - For building the backend of this app ([backend repo](https://github.com/Lordhacker756/FyleBackend)🔗)
- GitHub API - To get the user information
- Axios - To fetch the data

### What I got to learn from this project 💡

Here are the most important points I learnt while building the frontend of this app

- Having a proper folder structure and documentation that is both developer friendly and scaleable.
- Creating controllers in backend made using ExpressJS
- Using Axios to fetch data
- GitHub - To properly maintain the codebase, and have the ability to rollback in case of any error.

### How to use this project 😄

There are two ways to access this app, one is to clone the repository and run it in your own local system and other is simply clicking on the link of the hosted app.

##### Here's how to set up the app on your local machine 💻

- Fork the [**frontend repository**](https://github.com/Lordhacker756/Fylefrontend) (If you'd also like to contribute the repo)
- Clone the repository to your local system, using the following command (Replace the URL with the URL of your forked repository) ```git clone https://github.com/{Your Username}/Fylefrontend```
- Navigate to the project directory using the following command ```cd Fylefrontend```
- Install all the dependencies using the following command ```npm install```
- Run the app using the following command ```npm start```
- The app will be running on the following URL ```http://localhost:3000```
- The app interally uses the backend which is hosted on [Render](https://render.com/https:/)

#### To view the code for the backend

- Simply fork the repo, and clone it using the command (Replace the URL with the URL of your forked repository) ```git clone https://github.com/{Your Username}/Fylebackend```
- Navigate to the project directory using the following command ```cd Fylebackend```
- Install all the dependencies using the following command ```npm install```
- Run the app using the following command ```npm start```
- The app will be running on the following URL ```http://localhost:4000```
- You can send **GET** request on the following endpoints
  - ```/{username}``` - To get the information of the use. It will return a JSON, which will consist of a msg(string), and data(object)
  - ```/{username}/repos``` - To get the repositories of the user. It will return a JSON, which will consist of a msg(string), and data(object)
  - ```/{username}/{repository}``` - To get the programming languages used in the particular repository. It will return a JSON, which will consist of a msg(string), and data(object)

##### Here's how to access the App directly!😎

Simply go to this [url](https://fylefrontend.vercel.app/https:/)
