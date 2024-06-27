// import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { FaWifi } from "react-icons/fa";
import {
  MdAirportShuttle,
  MdBathtub,
  MdKingBed,
  MdLocationOn,
} from "react-icons/md";

import "./offers.scss";

//images
import img from "../../assets/chute.jpg";
import img1 from "../../assets/doul.jpeg";
import img2 from "../../assets/sport.jpeg";
import img3 from "../../assets/kribi.jpg";

const offer = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Douala",
    location: "Cameroon",
    price: "15000",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Yaounde",
    location: "Cameroon",
    price: "15000",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Kribi",
    location: "Cameroon",
    price: "15000",
  },
  {
    id: 4,
    imgSrc: img,
    destTitle: "Lobe",
    location: "Cameroon",
    price: "15000",
  }
];
const Offers = () => {
  return (
    <section className="offer container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">Special Offers</h2>
          <p>
            From historical cities to natural spectaculars, come see the bes of
            the world!
          </p>
        </div>
        <div className="mainContent grid">
          {offer.map(({id,imgSrc,destTitle,location,price}) => {
            return (
              <div key={id} className="singleOffer">
                <div className="destImage">
                  <img src={imgSrc} alt={destTitle} />
                  <span className="discount">30% Off</span>
                </div>
                <div className="offerBody">
                  <div className="price flex">
                    <h4>{price} Fcfa</h4>
                    <span className="status">For Rent</span>
                  </div>
                  <div className="amenities flex">
                    <div className="singleAmenity flex">
                      <MdKingBed className="icon" />
                      <small>2 Beds</small>
                    </div>
                    <div className="singleAmenity flex">
                      <MdBathtub className="icon" />
                      <small>1 Bath</small>
                    </div>
                    <div className="singleAmenity flex">
                      <FaWifi className="icon" />
                      <small>Wi-Fi</small>
                    </div>
                    <div className="singleAmenity flex">
                      <MdAirportShuttle className="icon" />
                      <small>Shuttle</small>
                    </div>
                  </div>
                  <div className="location flex">
                    <MdLocationOn className="icon" />
                    <small>450 #310, {location}</small>
                  </div>
                  <button className="btn flex">
                    View Details
                    <BsArrowRightShort className="icon" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offers;
