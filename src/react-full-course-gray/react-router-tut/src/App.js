import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import NewPost from './components/pages/NewPost';
import PostPage from './components/pages/PostPage';
import About from './components/pages/About';
import Missing from './components/pages/Missing';
import { Route, Routes } from 'react-router-dom';
//import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<NewPost />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
      </div>
  );
}

export default App;
