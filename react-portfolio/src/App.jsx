import './App.scss';
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './assets/boxicons-2.1.2/css/boxicons.min.css'


import Header from "./components/Header/Header";
import Home from './pages/home/home';
import About from './pages/about/about';
import Portfolio from './pages/portfolio/portfolio';
import Contact from './pages/contact/contact';

import ToggleTheme from './components/toggleTheme/ToggleTheme';



function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    })
  }, [])
  return (
    <BrowserRouter>

      <Header/>
      <ToggleTheme/>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
