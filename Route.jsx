import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutPage from './src/page/AboutPage'
import BlogPage from './src/page/BlogPage'
import HomePage from './src/page/HomePage'
import PortofolioPage from './src/page/PortofolioPage'



function AppRoute() {
  return (
    <Routes>
        <Route path="/" element={<HomePage 
          name={"Muh. Faizal Rajib"} 
          desc={"I am Student from Makassar "}/>
        }/>
        <Route path="/about" element={<AboutPage
          desc={"I am a student at a private campus in Makassar named Megarezky University Makassar majoring in Computer Science."}/>
        }/>
        <Route path="/portofolio" element={<PortofolioPage/>} />
        <Route path="/blog" element={<BlogPage/>} />
    </Routes>
  )
};

export default AppRoute