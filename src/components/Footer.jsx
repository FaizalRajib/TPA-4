import React from 'react'
import './../assets/css/style-footer.css'
import IG from './../assets/img/Sosmed/Instagram.svg'
import tweet from './../assets/img/Sosmed/Tweet.svg'
import fb from './../assets/img/Sosmed/Facebook.svg'
import linked from './../assets/img/Sosmed/linkedin.svg'

function Footer() {
  return (
    <>
        <div id="footer" className="row align-items-start mw-100 bg-dark">
            <div id="serrum"  className="col">
                <p id="text1-serrum">Muh. Faizal Rajib</p>

                <p id="text2-serrum">Situs web ini menyajikan profile</p>

                <img src={IG} alt="" id="ig"/>
                <img src={tweet} alt="" id="tweet"/>
                <img src={fb} alt="" id="fb"/>
                <img src={linked} alt="" id="linked"/>
            </div>
            <div id="layanan" className="col">
                <p id="text1-layanan">Quick Link</p>
                <ul className="layanan-menu">
                    <li className="item-layanan">Home</li>
                    <li className="item-layanan">About</li>
                    <li className="item-layanan">Portofolio</li>
                    <li className="item-layanan">Blog</li>
                </ul>
            </div>
            <div id="about" className="col">
                <p id="text1-about">My Address</p>
                <p id="text2-about">Makassar, Sulawesi Selatan, Indonesia</p> 
            </div>
        </div>
    </>
  )
}

export default Footer