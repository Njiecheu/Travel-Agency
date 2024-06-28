import React, { useEffect } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Aos from 'aos'
import 'aos/dist/aos.css'
import './blog.scss'

//Images
import img1 from "../../assets/doul.jpeg";
import img2 from "../../assets/sport.jpeg";
import img3 from "../../assets/kribi.jpg";

const post = [
  {
    id: 1,
    postImage: img1,
    title: "Douala",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magnam libero ut reprehenderit, maxime perspiciatis! Dignissimos eaque dolorem id",
  },
  {
    id: 2,
    postImage: img2,
    title: "Yaounde",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magnam libero ut reprehenderit, maxime perspiciatis! Dignissimos eaque dolorem id",
  },
  {
    id: 3,
    postImage: img3,
    title: "Kribi",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magnam libero ut reprehenderit, maxime perspiciatis! Dignissimos eaque dolorem id",
  },
];
const Blog = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 data-aos='fade-up' data-aos-duration='2000' className="secTitle">Our Best Blog?</h2>
          <p data-aos='fade-up' data-aos-duration='2500'>An insight to the incredible experience in the world.</p>
        </div>
        <div className="mainContainer grid">
          {post.map(({ id, postImage, title, desc }) => {
            return (
              <div key={id} data-aos='fade-up' data-aos-duration='2000' className="singlePost grid">
                <div className="imgDiv">
                  <img src={postImage} alt={title} />
                </div>
                <div className="postDetails">
                  <h3 data-aos='fade-up' data-aos-duration='3000'>{title}</h3>
                  <p data-aos='fade-up' data-aos-duration='4000'>{desc}</p>
                </div>
                <a href="#" className="flex" data-aos='fade-up' data-aos-duration='4500'>
                  Read More
                  <BsArrowRightShort className="icon" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
