# **MovieFlix UI**

A Netflix-inspired movie browsing application built with React.js, Tailwind CSS and AppWrite 


### **Example images:**
- Available in "UI Images" folder)
  

## **Overview**

MovieFlix UI is a modern front-end web application that allows users to browse and search through thousands of movies using data from The Movie Database (TMDB) API. The project emphasizes clean UI design, responsive layouts, and efficient API-driven rendering, closely resembling the look and feel of popular streaming platforms like Netflix.

The application dynamically fetches popular and searched movies, displays them using reusable MovieCard components, and provides real-time search functionality. It also integrates Appwrite to persist analytics data such as searched keywords and frequently viewed movies.

## **Tech Stack**

- React.js – Component-based UI framework


- Tailwind CSS – Utility-first styling system


- TMDB API – Movie metadata and images


- Appwrite – Backend for tracking search counts and trending movies


- JavaScript – Application logic


## **The application provides:**

- A Netflix-style movie browsing experience


- Thousands of movies fetched from TMDB


- Real-time movie search with instant results


- Trending movie analytics powered by Appwrite

## **Features**

- Dynamic movie discovery and search


- Reusable MovieCard UI with poster, title, language, and rating


- Loading states with animated spinner feedback


- Error handling for failed API requests


- Search analytics storage using Appwrite


- Responsive and modern UI using Tailwind CSS


- Clean React architecture with hooks and effects


## **Application Architecture**

### **App.jsx**

- Main application controller

- Manages global state (search term, movies, loading, errors)

- Handles TMDB API calls and Appwrite analytics

- Uses useEffect to fetch movies dynamically on search updates

### **Components**

- **MovieCard.jsx**: Displays movie poster, title, language, and rating in a Netflix-style card

- **Search.jsx**: Controlled search input that updates results in real time

- **Spinner.jsx**: Loading indicator shown during API requests

### Supporting Files

- **main.jsx**: initializes the app
- **index.css and app.css**: provide global and layout styling

