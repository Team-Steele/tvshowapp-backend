# Tv Show App: Backend

With more and more streaming service becoming easier to access and the norm to watch your favorite shows. Access to a variety of options is at our fingertips. But how does one remember which show was the one with great ending in season two? How can we store information on shows across multiple entertainment services? 

The idea for the Tv Show App was to create a an app that allowed user to come in and saved shows they liked/watched and be able to leave comments about that specific show.

## Process and Thought logic

The Tv Show App was create with to individual sections. The backend and the frontend of the App. Backend source code deals with serving the request made by the users and their clients with the end result deployed via Heroku. The Back end development refers to the server side of an application and everything that communicates between the database and the browser.

In order to have a place to store and create all this new information and data our first step was to create a database using mongoDB. In order to achieve this we first set up or basic folder structure and installed various packages need for this project.

#
<br><br>Folder set up:
<br><br>
          ![This is a alt text.](https://github.com/Team-Steele/tvshowapp-backend/blob/andrew/imgAndGifs/Screen%20Shot%202021-08-04%20at%2010.08.37%20AM.png)
# 

We also developed a set of MVP goals which included:
1. A user should be able to login in with there personal userID and password.
2. A user should have access to their personal profile of tv shows.
3. A user should be able to search for a specific show with an api call to fetch data. 
4. A user should be able to add a tv show to their profile. 
5. A user should be able to perform CRUD functions on their profile of shows.


## Technologies used to create Project

Once we had a the basic file and folder set for the backend, we need to make sure we had the necessary dependencies. Using the terminal [npm](https://docs.npmjs.com/cli/v7/commands/npm-install/) to install our necessary dependencies.

```bash
npm i 
```
#
<br><br>Dependencies set up:
<br><br>
          ![This is a alt text.](https://github.com/Team-Steele/tvshowapp-backend/blob/andrew/imgAndGifs/Screen%20Shot%202021-08-03%20at%207.38.21%20PM.png)
# 

In Order turn our ideas in an actual app we needed incorporate various developer skills to render a working app on the backend. Some of the technologies used are listed below:

 CSS
   * CSS styling & layout

 JavaScript
   * JavaScript programming
   * Working within the DOM
   * JavaScript events
   * Console.log & other debugging tools


 MongoDb 
   * A database which stores data in JSON-like 
     documents with dynamic schema

 Mongoose 
   * An Object Data Modeling (ODM) library for MongoDB 
     and Node.js

## Creating routes and controllers:
For this project time constraint was a huge obstacle for the group. So it was critical to make sure we had our backend set up and our routes and controllers to access the backend working in sync. 

We created a controllers folder with contained all of our RESTFUL routes and provided functionality to the backend. Once we accomplished this we were able to input actually data and see it on our local backend database.  

#
<br><br>Data on local DB:
<br><br>
          ![This is a alt text.](https://github.com/Team-Steele/tvshowapp-backend/blob/andrew/imgAndGifs/Screen%20Shot%202021-08-03%20at%206.44.37%20PM.png)
#

## Connecting frontend and backend:
Once we were able to communicate with the database and our routes were functioning we need to connect the frontend to the backend.  

#
<br><br>Setting up connection:
<br><br>
![This is a alt text.](https://github.com/Team-Steele/tvshowapp-backend/blob/andrew/imgAndGifs/Screen%20Shot%202021-08-04%20at%2010.26.32%20AM.png)
#

## Final steps:
Finally we used Heroku to host our app and deploy our App live to the internet in conjunction with Atlas cloud to store our data and connect it to our backend database. The main branch would be used to deploy a live version on Heroku to host our app and deploy our App live to the internet in conjunction with Atlas cloud to store our data and connect it to our backend database and our frontend react app.
Getting experience using GitHub and learning how to manage different branches was a great learning opportunity and an awsome way for the group to work together and build repore. GitHub was not an esy in any form but rather required more paitence in getting issues and conflicts resolved, however, once we got the hang of it we were able to merge our branches on our own. Team pulled togethre and create a great looking app.

#
<br><br>Example of final product:
<br><br>
![This is a alt text.](https://github.com/Team-Steele/tvshowapp/blob/andrew/ImgAndGifs/Screen%20Shot%202021-08-04%20at%203.03.50%20PM.png)
#


## Issues and future stretch goals:

1. We definilty had an issue with user login and authentication. We were not able to implement this goal at this time.
2. An important part of this project was learning to work as a group. It is easy to write your own code but having to incorporate another person's code and ideas was a great learning experience. Each step in this project seemed to break down into even smaller steps. Like a link in a chain if one thing is missing or in the wrong place it can cause a headache. Working in a group exacerbated headache at times and others times helped elevate the pressure. Overall the group was a success and worked together to figure out solutions to our issues. 

3. Right from the beginning we knew connecting our users with there comments would be a challenge. Also being able to add shows from a fetch call to an API was going to prove to be a task in itself.  
4. We also had a bit of trouble deploying our app to heroku at first. Getting familiar with configuring everything and adding Config Variables to Heroku so that it would recognize our API key without sharing it with the internet. 




Finally we originally wanted to have a bit of different layout and design but with the time constraints we focused on functionality. As a Stretch goal we plan on creating more user functions and cleaning up a lot of styling and CSS issues. Overall the project was success. 

