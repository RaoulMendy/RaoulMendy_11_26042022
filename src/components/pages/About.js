import React from 'react';
import Footer from "../Footer";
import Banner from '../Banner';
import backgroundTwo from "../../assets/banner-about.png"
import BodyAbout from '../../components/BodyAbout';

function About() {

  return (
    <div className="about">
      <Banner backgroundValue={backgroundTwo}/>
      <BodyAbout/>
      <Footer/>
    </div>
  );
}

export default About;
