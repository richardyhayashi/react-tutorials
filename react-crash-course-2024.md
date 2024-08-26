# React Crash Course 2024
by `Traversy Media`

YouTube: `https://www.youtube.com/watch?v=LDB4uaJ87e0&t=115s`

Source: 'https://github.com/bradtraversy/react-crash-2024'

01. Intro
02. What Is React? (Slide)
03. Why React? (Slide)
04. What Are Components? (Slide)
05. What Is State? (Slide)
06. What Are Hooks? (Slide)
07. What Is JSX? (Slide)
08. SPA, SSR, SSG (Slide)
09. Vite (Slide)
10. Project Demo
11. Setup React With Vite
12. File Explanation
13. Boilerplate Cleanup
14. Tailwind CSS Setup
15.
16.
17.
18.
19.
20.
21.
22.
23.
24.
25.
26.
27.
28.
29.
30.

## Notes

## Create React Project

`$ npm create vite@latest {react-crash-2024|.} [-- --template react]` Choose: React, JavaScript<br>
`$ cd react-crash-2024` if react-crash-2024 created<br>
`$ npm {i|install}`<br>

### Set Port

In `vite.config.js`:<br>
`export default defineConfig({`<br>
`  ...`<br>
`  server: {`<br>
`    host: "0.0.0.0",`<br>
`    port: 3000,`<br>
`  },`<br>
`  ...`<br>
`})`

### Install Tailwindcss

'https://tailwindcss.com/docs/guides/vite'

### Run Server

`$ npm run dev`