import React from 'react';
import Header from "../Header";
import Banner from "../Banner";
import Footer from "../Footer";
import Gallery from "../Gallery";




function Home() {

  return (
    <div className="Home">
      <Header/>
      <Banner/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default Home;
