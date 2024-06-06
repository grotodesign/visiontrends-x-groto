# Vision Trends

## For Installing the Project

Before installing the project on your device, please make sure you have nodejs install in your devices.

To check node is installed or not:-

```
- Open any terminal
- Run node -v
```

Also check if you have npm (node package manager) installed in your devices

```
- By running the following command
- npm -v
```

If all this is present in your device then we can proceed to install the project on device.

Follow the following steps:-

```
- Open the git repository link and click on "<> Code" button.
- Copy this link https://github.com/grotodesign/visiontrends-x-groto.git
- Open your terminal and run " git clone https://github.com/grotodesign/visiontrends-x-groto.git "
- After the code is clone, open the folder.
- Now run npm install, this will make sure all the packages are installed.
- After installation is complete, to run the project type command "npm run dev"
- This will spin up the code and open it in your default browser.
```

The above steps will work if the github credentials is all ready set in the terminal.

If the credentials are not set, then please follow the following steps.

```
- Extract the downlaoded file and open it in any code editor.
- Now run npm install, this will make sure all the packages are installed.
- After installation is complete, to run the project type command "npm run dev"
- This will spin up the code and open it in your default browser.
```

## File Structure

The project directory is organized as follows:

```
visiontrends-x-groto/
│
├── api/                            # Backend API routes
│
├── assets/                         # Static assets such as images, fonts, etc.
│
├── components/                     # Reusable components
│   ├── home-page/                  # Components specific to the home page
│   ├── sales-submission-table/     # Components for sales submission table
│   ├── shared/                     # Shared components used across different parts of the application
│   └── ui/                         # UI components like buttons, inputs, etc.
│
├── lib/                            # Utility functions and libraries
│   ├── data.js                     # Mock database for whole website
│   ├── utils.js                    # utils
│
├── pages/                          # Page components corresponding to different routes
│
├── public/                         # Publicly accessible files like favicon, etc.
│
├── .gitignore                      # Git ignore file
│
├── package.json                    # npm package configuration
│
├── README.md                       # Project documentation
```

## Reference Links 

- For Sales Submission Table :- https://ui.shadcn.com/docs/components/data-table
- UI Library :- https://ui.shadcn.com/
- TailwindCSS:- https://tailwindcss.com/docs/
- React:- https://react.dev/learn (JavaScript library for creating optimized and smooth websites)
- HTML:- https://developer.mozilla.org/en-US/docs/Web/HTML
- CSS:- https://developer.mozilla.org/en-US/docs/Web/CSS

## About React

React is a JavaScript library used for building user interfaces, particularly single-page applications where you need a smooth and dynamic experience. It allows developers to create large web applications that can update and render efficiently in response to data changes.

## React and HTML/CSS

- HTML-like Syntax: React uses a syntax extension called JSX (JavaScript XML), which allows you to write HTML-like code within JavaScript. This makes it easier to create and visualize the structure of your user interface.

- CSS Integration: React supports various ways to style components, including traditional CSS, CSS-in-JS libraries, and CSS Modules. This flexibility allows developers to choose the best styling approach for their needs.

##### Example of React Component with HTML and CSS
```
import React from 'react';
import './App.css'; // Importing CSS file

function App() {
  return (
    <div className="app-container">
      <h1>Hello, Vision Trends!</h1>
      <p>This is a simple React component styled with CSS.</p>
    </div>
  );
}

export default App;

```
#### CSS (App.css)
```
.app-container {
  text-align: center;
  padding: 20px;
}

h1 {
  color: #4CAF50;
}

p {
  font-size: 18px;
}

```

In this example, the App component uses JSX to define the HTML structure, and the App.css file contains the CSS to style the component. This integration of HTML-like syntax and CSS makes React a powerful and flexible tool for building modern web applications.