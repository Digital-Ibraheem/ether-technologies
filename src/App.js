import React, { useState, Suspense, lazy } from 'react';
import "./assets/css/root.css";
import './assets/css/home.css'
import './assets/css/blog.css'
import './assets/css/services.css'
import Percentage from './components/Percentage';
import { Route, Routes } from 'react-router-dom';
// import Blog from './pages/Blog';
import Loading from './pages/Loading';
import Submitted from './pages/Submitted';
import PageNotFound from './pages/PageNotFound';
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const Services = lazy(() => import('./pages/Services'))
const Home = lazy(() => import('./pages/Home'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {
  // window.addEventListener('scroll', () => {
  //   document.body.style.setProperty('--scroll', window.scrollY / (document.body.offsetHeight - window.innerHeight));
  // }, false);
  const [scrolled, setScrolled] = useState(false);

  return (
    <>
      <Percentage />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route exact path='/' element={<Home scrolled={scrolled} setScrolled={setScrolled} />} />
          <Route path='/services' element={<Services scrolled={scrolled} setScrolled={setScrolled} />} />
          <Route path='/contact' element={<Contact scrolled={scrolled} setScrolled={setScrolled} />} />
          <Route path='/loading' element={<Loading />} />
          <Route path='/blog' element={<Blog setScrolled={setScrolled} />} />
          <Route path='/blog/:id' element={<BlogPost setScrolled={setScrolled} />} />
          <Route path='/submitted' element={<Submitted />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
