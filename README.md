# MapleApp

This webapp allows the user to calculate the EXP requirement to get from a given start level to a given end level. 

  MapleApp/maple-ui  <--- Contains all Frontend Code
  
  MapleApp/ExpCalc  <--- Contains all Backend API Code
  
# /maple-ui
* React.js, HTML/CSS 
* Frontend React web application which takes user input and fetches data from the backend API to display for the user. 

# /ExpCalc
* JAVA, Springboot, Maven 
* Backend API takes a starting level, ending level and character type as pathparameters and returns the EXP requirement.

# How to build:
 `cd ExpCalc` and use the command: `mvn spring-boot:run`
 
 Once the Springboot application is running, open a separate terminal, `cd maple-ui` and use the command: `npm start` (or `yarn start`)
 
 The web app should be available at: http://localhost:3000/


