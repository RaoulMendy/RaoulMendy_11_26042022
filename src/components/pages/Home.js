import React from "react";
import Banner from "../Banner";
import Footer from "../Footer";
import Cards from "../Cards";
import backgroundOne from "../../assets/banner.png";

function Home() {
  return (
    <div className="Home">
      <Banner
        backgroundValue={backgroundOne}
        motto="Chez vous, partout et ailleurs"
      />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
