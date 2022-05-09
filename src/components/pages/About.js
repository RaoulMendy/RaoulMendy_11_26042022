import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import Banner from '../Banner';
import Dropdown from '../Dropdown';





function About() {

  return (
    <div className="About">
      <Header/>
      <Banner/>
      <Dropdown/>
      <Dropdown/>
      <Dropdown/>
      <Dropdown/>
      <Footer/>
    </div>
  );
}

export default About;
