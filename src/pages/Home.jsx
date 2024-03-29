import React from "react";
import Carousel from "../components/Carousel";

function Home() {
    return (
        <main className="home">
          <>
            <h2>A personal collection of tiki mugs</h2>
            <p>These have been collected over the past 25 years,</p>
            <p>including authentic midcentury mugs as well as
            modern styles.</p>
            <p>Click on the categories to check 'em out!</p>  
            <h3 className="comments">Comments/questions:</h3>
            <h4 className="email"><a href="mailto:ryan@ryanwilsondesign.com">ryan@ryanwilsondesign.com</a></h4>
            <h4 className="website-design">
                website design by{" "}
                <a
                  href="https://www.ryanwilsondesign.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.ryanwilsondesign.com
                </a>
            </h4>
            <Carousel className="carousel" />
          </>          
        </main>
      );
}

export default Home;