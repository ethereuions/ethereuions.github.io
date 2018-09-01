# HPDF Week 1 Task React App
## App implements the Landing Page and Search Results of Twitter Functionality 
### As the Task of week 1, I have implemented the template and functionality of the Twitter as mentioned in the Task Documentation.

## Sections 
* [Introduction](#introduction)
* [Implementation Detials](#implementation-details)
* [Installation](#installation)
* [Cloning and Running this Application](#cloning-running-this-application)
* [Tasks Achieved & Note ](#task-achieved-&-note)

## Introduction
### One of the many great parts of React is how it makes you think about apps as you build them.React is, in our opinion, the premier way to build big, fast Web apps with JavaScript. It has scaled very well for us at Facebook and Instagram. 

### Here in this first week we made a **Basic** *React App* which implements the *Look and Feel* the **_Twitter_** 

### Here are some of the **screenshots** of the live application
### _Home | Landing Page_
![Alt text](/PreviewOne.jpg?raw=true "Landing Page | Home Page")
### _Search Results_
![Alt text](/PreviewTwo.jpg?raw=true "Landing Page | Home Page")

## Implementation Detials
 Following are the technologies used to develop the app
### [React](https://reactjs.org) A JavaScript library for building user interfaces
### [Material-UI v1.0](https://material-ui-next.com) React components that implement Google's Material Design.

- ReactJs's application generator create-react-app
- Material-Ui prerelease version 
    - [Material-Ui](https://www.npmjs.org/package/material-ui)
    - [Material-ui-icons](https://material.io/icons/)
    - [Roboto Font](https://fonts.google.com/specimen/Roboto)
### Many more *Custom* components and *Props*.
## Installation
###    For Running and Testing the application follow these installation guidence

- ReactJs's application generator create-react-app
    The application is available as a _node_ and _yarn_
     **package**

     
Create React App is the best way to start building a new React single page application. It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 6 on your machine.
**Installation**
```
npm install -g create-react-app
```

**Creating a New Application**
```
create-react-app my-app
```

**Running the Application**
```
cd my-app
npm start
```
**Adding React to an Existing Application**
    Following commands for adding the _React to an existing application_
    
_yarn users_
```
yarn init
yarn add react react-dom
```
_npm users_

```
npm init
npm install --save react react-dom
```
    
- Material-Ui prerelease version 
    - [Material-Ui](https://www.npmjs.org/package/material-ui)
    for more clear details follow [Here](https://material-ui-next.com/getting-started/installation/).
To install and save in your package.json dependencies, run:

```
npm install --save material-ui@next
npm install --save material-ui-icons
```
   
- [Roboto Font](https://fonts.google.com/specimen/Roboto)
    You can install it by typing the below command in your terminal:
```
npm install typeface-roboto --save
```
Then, you can import it in your entry-point.

```
import 'typeface-roboto'
```

## Cloning and Running this Application

By cloning this repository you will get only the project source documents but in order to run the application properly 
follow ([Here]((#installation)) for details) 
```
create-react-app react-name
```

#### For the cloning of this application, using git shell/git bash, run 
CLONE OVER HTTPS:
```
git clone https://username@bitbucket.org/teamsinspace/documentation-tests.git
```
CLONE OVER SSH
```
git clone git@bitbucket.org:teamsinspace/documentation-tests.git
```
>Important : From your created app and cloned app append the  created app directory structure with cloned app directory as follows.
```
react-app-created
└─── node_modules
└─── public
|    └───faviicon.ico
|    └───index.html
|    └───manifest.json
└─── src
|     └───components
|     |     └───AppBarNavB.js
|     |     └───CopyrightCOmp.js
|     |     └───custom.css
|     |     └───NewsFeedCard.js
|     |     └───PageBody.js
|     |     └───PostSearchBar.js
|     |     └───ProfileCard.js
|     |     └───RelatedSearches.js
|     |     └───SearchCardPrimary.js
|     |     └───SearchCardSecondary.js
|     |     └───SearchResults.js
|     |     └───TrendsForYou.js
|     |     └───WhoToFollow.js
|     └───App.css
|     └───App.js 
|     └───App.test.js
|     └───index.css
|     └───index.js
|     └───README.md 
|     └───registerServiceWorker.js    
└───.gitignore
└───package.json
└───PreviewOne.jpg
└───PreviewTwo.jpg
└───README.md     
```

**If the document structure is perfect then run, in the react-app-created directory**
```
npm run 
```

## Tasks Achieved & Note 

- Implementation of the look and feel
- The page implements all the components that are visible in links mentioned in TaskDocumentation of HPDF
- Upon the search, a new container will popop below the nav bar ( inbetween the AppBar & PageBody) and renders the search page elements same as Twitter search Results
- Used advanced CSS3 stylings and gradient for aweosome look and feel
- Non-Resposive
>This application in **NOT RESPONSIVE** and _BEST VIEWED in Google Chrome v50+ & Firefox 48+_ with minimum _1024 × 768 pixels_


>Suggestions are welcome at _j.kishor.bd@gmail.com_ or at Twitter @NanduKishorNand(https://twitter.com/NanduKishorNand). Thank You. 


## Made in :heart: with React 