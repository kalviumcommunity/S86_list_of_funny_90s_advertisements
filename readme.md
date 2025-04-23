# List of Funny 90's Advertisements

## Project Overview:
This project is a simple static website showcasing the funniest and most bizarre advertisements from the 90s. Users can browse categorized ads, view embedded videos, and vote on their favorites. The goal is to provide a fun and interactive experience without needing a backend.

## Key Features:
 Ad Gallery – A list of funny 90s ads with descriptions and videos
 Search & Filter – Users can filter by category (Food, Tech, Toys, Fashion, etc.)
 Random Ad Button – Click to get a surprise ad
 Fun Facts & Trivia – Each ad includes a brief description of why it was famous
 Retro 90s-Themed UI – Bright neon colors, VHS glitch effects, pixel fonts

 ## Tech Stack:  
HTML – Structure the content (ad list, search, voting buttons)
CSS – Create a cool 90s-style UI with neon colors and VHS glitch effects
JavaScript – Handle voting, filtering, and the random ad feature (using Local Storage to save votes)



## Why This Project?
 No Backend Needed – Uses only front-end tech
 Easy to Share – Can be hosted on GitHub Pages or Netlify
 Fun & Interactive – Engages users with voting and random ad selection
 Retro Vibes – A cool design challenge using CSS

# milestone 2
 Initialize npm project using npm init .
 Add a .gitignore file to exclude node_modules/ and package-lock.json/ and then added the  `.gitignore`file  and pushed the branch

# setting up endpoint using express application 
  firstly i created server by using express package by that we can open see server in localhost port 
  then we need to create a new branch name then git add . then push to github and do pull request  


## ASAP Project Deployment on Render

- Logged into Render.com and log in using your kalvium.community Google account
- Created a Web Service via Public Repository to import files
- Deployed ASAP App Project


# Deployed App:
Check out the deployed ASAP app here: https://s86-list-of-funny-90s-advertisements.onrender.com

## Bruno API Testing Requests:

This Assignment includes API requests generated and exported from Bruno, organized in a folder called docs.bruno. The requests can be used for testing APIs or further integration in the project.

- Bruno: Used to generate and export API requests.


## adding collections in mongoatlas:


I added 10 collections of my asap project in mongoatlas.

## connected to mongodb

created cluster in mongodb and return code in server.js and connected my cluster in .env file and push my code to github.

## modifying data through api

i created routes.js file to written crud operations and created models folder and written advertisement schema.


## landing page

---

### 🔹 **2. Backend Development**
- Set up an **Express server** to run on `localhost:5000`.
- Created **MongoDB Cluster** in MongoDB Atlas and connected it via `.env`.
- Defined `Advertisement` schema and model in `models/advertisements.js`.
- Created **REST API routes** (`GET`, `POST`, `PUT`, `DELETE`) in `routes.js`.
- Connected the routes to the server in `server.js`.
- Tested all APIs using **Bruno**, and exported the request collections.

---

### 🔹 **3. MongoDB Collections Added**
Added collections in MongoDB to manage different parts of the app:
- `advertisements`
- `ad comments`
- `ad media`
- `ad voting history`
- `categories`
- `fun facts`
- `random ads`
- `user preferences`
- `users`
- `votes`


### 🔹 **5. Frontend Setup**
- Created a **new branch** and scaffolded a **React app using Vite** inside the `frontend` folder.
- Built a **Landing Page** describing the ASAP project.
- Added styling with CSS using a **retro 90s aesthetic** (neon fonts, glitch effects).
- Implemented responsive layout and animations.


### 🔹 **6. Version Control & Pull Request**
- Committed frontend and backend code to separate folders.
- Pushed the changes to GitHub and created a **Pull Request (PR)**.
- Requested AI review using `@CodiumAI-Agent /review`.


## deployed frontend

- deployed link:- https://funnyadvertisements.netlify.app/

##  Designing component

- i created components folder in src and in components added adcard.jsx,adcardpage.jsx,landingpage.jsx and written code to give dummy data and in app.jsx file imported components files.

## Connect Backend & Frontend
- Ensure API calls (Axios) in frontend point to http://localhost:5000.

- Fetch and render advertisement data from MongoDB.

- Use components like AdCard to display content dynamically.

## Create a New Page with a Form
- In your React app (inside components/), you already have this in AdCardPage.jsx, but if required you can create a new file like FormPage.jsx.

- Make sure it includes input fields: title, description, videoUrl, year, category.

- Add a submit button to POST the data to your Express backend using Axios.

- After submitting, fetch all ads again to reflect the newly added entity.


##  CRUD Operations

- `GET /ads` → Fetch all advertisements
- `POST /ads` → Add a new advertisement
- `PUT /ads/:id` → Update ad by ID
- `DELETE /ads/:id` → Delete ad by ID


## ✅ Validations Added

- Title, Description, Video URL, Year, and Category are **required**.
- Shows error messages in UI if fields are left blank or invalid.


## Filtering Ads by User
- In the AdCardPage, there's a "Filter by User" dropdown.

- Selecting a user filters ads created by that user using their _id.

## 📝 Creating Ads with Creator Info
- While adding an ad, a "Select Creator" dropdown allows you to pick the user.

- This sets the created_by field, which links the ad to a specific user.


## connected to sql

- added folders and files in both backend and frontend related to connection of sql