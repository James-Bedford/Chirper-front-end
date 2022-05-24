In this lab, you will be building your first front-end application using ReactJS.

It's called Chirper, a platform where you can post short messages on the internet for all the world to see!

Getting Started
Create a new project with Create React App.
Delete the src and public directory and all of its contents.
Create a new public directory and a new index.html file inside of public.
Use the ! emmet shortcut to generate a fresh html document in the index.html file. Place <div id="root"></div> in the <body> of the html document you created. (like we did in earlier videos!)
Create a new src directory and a components directory inside of src.
Create an App.jsx and a index.js file inside of src.
Write the basic "entry point" code for the index.js file, avoid copy/paste so you can practice writing it yourself!

IF REACT VERSION =< 17

// inside of src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
<React.StrictMode>
<App />
</React.StrictMode>,
document.getElementById('root')
);

IF REACT VERSION >= 18

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')).render(
<React.StrictMode>
<App />
</React.StrictMode>
);

Write a simple function component that returns some JSX for your App.jsx file.
// inside of /src/App.jsx
import React from 'react';

const App = () => {
return (
<div>
<h1>Hello from App Component!</h1>
</div>
);
};

export default App;

You should now have a project structure that resembles the following:

node_modules/
public/
|- index.html
src/
|- components/
|- App.jsx
|- index.js
.gitignore
package-lock.json
package.json
README.md

Instructions
Your objective should be to create a "timeline" of Chirps -- short messages that you post on the Chirper platform.

Your timeline should load with at least three chirps.

Code a form with at least two inputs where users can submit new chirps from.

When a new chirp is submitted it should be shown back to the user in the timeline.

HINT: Don't try and code multiple components if you don't feel confident yet. Focus on building the entire functionality of this lab in a singular App.jsx file and then break it apart into smaller component files once you do so.

HINT: This lab will require array manipulation with React's immutable state. You may need to do some Google detective work to see how React state and arrays work together when "updating" them with new values.

Advanced (optional)
Look into the npm packages of uuid for generating unique keys for each chirp, moment for nicely formatting timestamps for each chirp, and react-icons to add some SVG icons to really add that cool style to your Chirper lab.
