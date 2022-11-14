import React from 'react'
import './../assets/css/style-portofolio.css'
import ImgPortofolio from './../assets/img/Untitled-1.png'

function PortofolioPage() {
  return (
    <>
      <section id="Portfolio">
        <div class="portfolio-text">
            <p id="head-portfolio">UI/UX Sistem Informasi Seni</p>
            <p id="text">san information system that can make it easier for students to learn about art as well as a place for students to exhibit their artwork and can also be a place to see various works of art </p>
        </div>
        <div class="img-portfolio">
            <img src={ImgPortofolio} alt=""/>
        </div>
      </section>
    </>
  )
}

export default PortofolioPage