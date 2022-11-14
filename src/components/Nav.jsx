import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark p-3" style={{ backgroundColor: "#1b285d" }}>
            <div className="container-fluid">
                <a className="navbar-brand" style={{  fontWeight: "700" }} href="#">Muh. Faizal Rajib</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to={"/"}><a className="nav-link" aria-current="page">Home</a></Link>
                        <Link to={"/about"}><a className="nav-link" >About </a></Link>
                        <Link to={"/portofolio"}><a className="nav-link" >Portofolio </a></Link>
                        <Link to={"/blog"}><a className="nav-link" >Blog </a></Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Nav