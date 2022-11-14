import React from 'react'
import './../assets/css/style-home.css'
import Image from "./../assets/img/7a734bfde011875d0284dfbcb787ce4d 1 (1).png"


const HomePage = ({name, desc}) => {
  return (
    <>
    <section id='home'>
      <div className="container d-flex justify-content-between">
        <div className="home-text">
          <p id='txt1'>Halo, My Name is </p>
          <p id='nama'>{name}</p>
          <p id='txt2'>{desc}</p>
          <button id="get-started">Get Started</button> 
        </div>  
        <div className="img">
          <img src={Image} alt="" className="img-fluid" width={"400px"}/>
        </div>
      </div>
    </section>
    </>

  )
}

export default HomePage