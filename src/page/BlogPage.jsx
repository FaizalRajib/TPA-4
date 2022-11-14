import React from 'react'
import './../assets/css/style-blog.css'
import ImgHTML from './../assets/img/html.png'
import ImgCSS from './../assets/img/css.png'
import ImgJS from './../assets/img/js.png'

function BlogPage() {
  return (
    <>
      <section id='articel'>
        <p style={{ fontWeight: '600', fontSize: '30px', color:'black'}} >Article</p>
        <div className="articel-cont">
            <div className="box">
                <img src={ImgHTML} alt="" width={'200px'}/>
                <h2>HTML</h2>
            </div>
            <div className="box">
                <img src={ImgCSS} alt="" width={'200px'}/>
                <h2>CSS</h2>
            </div>
            <div className="box">
                <img src={ImgJS} alt="" width={'160px'}/>
                <h2>JavaScript</h2>
            </div>
        </div>
      </section>
    </>
  )
}

export default BlogPage
