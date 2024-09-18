//import React from 'react';
import { createRoot } from 'react-dom/client';

const navbar = (
  <nav>
    <h1>Bob&apos;s Bistro</h1>
    <ul>
      <li>Menu</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

//document.getElementById('root').append(navbar);
createRoot(document.getElementById('root')).render(navbar);
