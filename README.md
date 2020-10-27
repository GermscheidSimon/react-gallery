# React Image Gallery 


## Description

__Weekened Project__

This is our first week utilizing React as a front end framework to build a website. The challenge of this work was to create reusable components that are generated based on how many images exist in our database. ajusting to JSX and reacts methods was defnitely a learning curve, but overall fun to try out.

I also played around with some of the tools provided by Material UI to add a bit of stying to the buttons on the site. 

__Screenshot of Site__

## Prerequisites
  >node.js (express)
  >postgresql / (pg)

## Installation 
  1. download a copy of the code (.zip) or fork/clone
  2. install dependecies using npm install 
  3. you will need postgresql on the host machine. Reference the database.sql file on how the table should be configured, and some data that is provided to test with. 
  4. to view a development instance of the site, run `npm run server` and `npm run client` to start both the express server and the react server. 
  
## Usage of the site
  - Once the site is up you can use the input form at the top to add new images (Urls) and a description. 
  - the 'trash' icon under each image allows you to delete individual images from the gallery
  - hitting the like button will increment the number of likes for that image. The likes persist as they are recoded in the SQL db. 
  
## Built With 
  - React
  - axios
  - nodejs / express
  - postgresql (PG)
