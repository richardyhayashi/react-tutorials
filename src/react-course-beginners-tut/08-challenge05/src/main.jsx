//import React from 'react';
import { createRoot } from 'react-dom/client';

const page = (
  <div>
    <img src="./img/logo.png" alt="logo" width="50"/>
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walker</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
);

//document.getElementById('root').append(navbar);
createRoot(document.getElementById('root')).render(page);
