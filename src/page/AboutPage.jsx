import React from 'react'
import "./../assets/css/style-about.css"
import AboutImage from './../assets/img/20210311131246_IMG_8228 (1).jpg'
import PropTypes from 'prop-types'

function AboutPage({desc}) {
  return (
    <>
      <section id="about">
        <div class="img-about">
            <img src={AboutImage} alt="" width="300px"/>
        </div>
        <div class="about-text">
            <p class="about-text1" style={{  color:'black' }}>{desc}</p>
        </div>
      </section>
    </>
  )
}

AboutPage.PropTypes = {
  desc : PropTypes.string.isRequired
}


export default AboutPage