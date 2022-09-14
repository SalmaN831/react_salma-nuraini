import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './style.css';
import pict from "./pict/logo-ALTA@2x.png";
import pict2 from "./pict/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";

function Home() {
    return (
    <body className="home-background">
    <header>
    <div className="container-fluid">
        <div className="row align-items-center">
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="alterra">
                    <a href="index.html"><img className="logo-atas img-fluid" src={pict} alt="gambarlogo"/></a>
                </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">                    <div className="row align-items-center navig">
                    <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="index.html" class="aktif">HOME</a></div>
                    <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center"><a href="about.html">ABOUT</a></div>
                    <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-left"><a href="experience.html">EXPERIENCE</a></div>
                    <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="form.html">CONTACT</a></div> 
                </div>
            </div>    
        </div>
    </div> 
    </header>
    <div className="container h-100">
            <div className="row align-items-center isi-home">
                <div className="col-lg-4 col-md-12 col-sm-12  col-12">
                    <img id="foto-profil" src={pict2} alt='gambarbodyhome'></img>
                </div>
                <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                    <div className="main-p">
                        <p className="sapaan">Hi, my name is </p>
                        <p className="nama">Salma Nuraini</p>
                        <p className="hobi">I build things for the web</p>
                        <p className="tombol"><a href="about.html">Get In Touch</a></p>
                    </div>
                </div>
            </div>
        </div>
    </body>
    )
}

export default Home;