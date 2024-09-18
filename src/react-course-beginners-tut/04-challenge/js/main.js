// 1. Create a new h1 element.
// 2. Give it some textContent
// 3. Give it a class name of "header".
// 4. Append it as a child of the div#root

const h1 = document.createElement('h1');
h1.textContent = 'Hi there!';
h1.className = 'header';
document.getElementById('root').append(h1);
