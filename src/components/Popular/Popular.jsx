// import React from 'react'
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from "react-icons/bs";
import Aos from 'aos'
import 'aos/dist/aos.css'
import "./popular.scss";

//import the images
// import img from "../../assets/japan.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpeg";
import img4 from "../../assets/img4.jpeg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import { useEffect } from "react";

const Data = [
  {
    id: 1,
    imgSrc: img2,
    destTitle: "Garoua",
    location: "Cameroon",
    grade: "RELAX",
  },
  {
    id: 2,
    imgSrc: img3,
    destTitle: "Limbe",
    location: "Cameroon",
    grade: "RELAX",
  },
  {
    id: 3,
    imgSrc: img4,
    destTitle: "Bafoussam",
    location: "Cameroon",
    grade: "RELAX",
  },
  {
    id: 4,
    imgSrc: img5,
    destTitle: "Kribi",
    location: "Cameroon",
    grade: "RELAX",
  },
  {
    id: 5,
    imgSrc: img6,
    destTitle: "Douala",
    location: "Cameroon",
    grade: "RELAX",
  },
];

const Popular = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div data-aos='fade-right' data-aos-duration='2500' className="textDiv">
            <h2 className="secTitle">Popular Destination</h2>
            <p>
              From historical cities to natural spectaculars, come see the bes
              of the world!
            </p>
          </div>
          <div data-aos='fade-left' data-aos-duration='2500' className="iconsDiv flex">
            <BsArrowLeftShort className="leftIcon icon" />
            <BsArrowRightShort className="rightIcon icon" />
          </div>
        </div>
        <div className="mainContent grid">
          {Data.map(({id,imgSrc,destTitle,location,grade}) => {
            return (
              <div key={id} data-aos='fade-up' className="singleDestination">
                <div className="destImage">
                  <img src={imgSrc} alt="Image title" />
                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>
                    <p>{location}</p>
                    <BsArrowRightShort className="icon" />
                  </div>
                </div>
                <div className="destFooter">
                  <div className="number">0{id}</div>
                  <div className="destText flex">
                    <h6>{grade}</h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                      Dot
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
