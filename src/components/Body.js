
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaDatabase, FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import './Body.css';

const Body = () => {
  // Sample image URLs for the slider
  const sliderImages = [
    "https://res-console.cloudinary.com/dj36dwfvw/thumbnails/v1/image/upload/v1701248202/TUVSTl9TVEFDS18xX2ZrM2tydA==/preview",
    "https://res-console.cloudinary.com/dj36dwfvw/thumbnails/v1/image/upload/v1701248143/V2VsY29tZV90b19teV9Qb3J0Zm9saW9fMV9jeTl6cWo=/preview",
    "https://res-console.cloudinary.com/dj36dwfvw/thumbnails/v1/image/upload/v1701248939/S0lHT0dPX3BzanE0bA==/preview",
  ];
    const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 3000, // Set the transition speed in milliseconds
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 500, // Set the autoplay speed in milliseconds (1 second)
  };
  return (
    <>
      <div className="sec-zero">
        {sliderImages.length > 0 ? (
          <Slider {...sliderSettings}>
            {sliderImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`slider-${index + 1}`} />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="loader">Kigogo is Loading .... wait for it</div>
        )}
      </div>
      {/* Rest of your code */}
      <div className="sec-one">
        <h1>FullStack React Developer <br></br>Ian Lumbasi Shihundu</h1>
        <div className="container one">
            <h2>ReactJS Frontend Developer</h2>
            <h2>Express-NodeJS Backend Developer</h2>
            <div className="dev-icons">
               <FaReact size={32} color="gold"/> +  <FaNodeJs size={32} color="gold"/> + <FaDatabase size={32} color="gold"/>
            </div>

        </div>
        <h1>Databases:</h1>
        <div className="container">
            <h2>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48"><path fill="#ff8f00" d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z"></path><path fill="#ffa000" d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z"></path><path fill="#ff6f00" d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z"></path><path fill="#ffc400" d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z"></path></svg>
               Google Firebase Firestore
            </h2>
            <h2>
               <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48"><path fill="#5d4037" d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"></path><path fill="#4caf50" d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"></path><path fill="#dcedc8" d="M23 28H25V36H23z"></path><path fill="#4caf50" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"></path><path fill="#81c784" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"></path></svg>
               Mongo Database 
            </h2>
            <h2>
             Supabase Database  <FaDatabase color="darkgreen" size={32} />
            </h2>
            <h2>+ others check bio</h2>
        </div>
        <h1>Deployment and Hostings</h1>
        <div className="container three">
            <h2>Firebase Hosting</h2>
            <h2>Zeet Hosting</h2>
            <h2>Vercel Hosting</h2>
            <h2>GithubPages</h2>
            <h2>Netlify</h2>
            <h2>Render <br></br> plus others!</h2>
        </div>
     
    </div>
    <div className="sec-two">
        <h2>What I have done so far!</h2>
        The following are some of the websites i have created and deployed to various hostings. They are live on the internet , you can browse from any part of the world.
        <div className="projects">
            <div className="project">
                <h2>1. A Jumia Functionality Clone</h2>
                <img className="project-photo" src="https://res-console.cloudinary.com/dj36dwfvw/thumbnails/v1/image/upload/v1689668331/Y2xkLXNhbXBsZS0z/preview" alt="" />
                <div className="description">
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus delectus nostrum iure, illo exercitationem veritatis ullam in doloremque ab quibusdam rerum quisquam, deleniti eius officia laborum, cupiditate consequuntur sed. In.</h4>
                </div>
                <div className="browse-btn-holder">
                    <a href="/" className="browse-btn" target="_blank" rel="noopener noreferrer">Browse this Website</a>
                </div>
            </div>
            <div className="project">
                <h2>2. A Jumia Functionality Clone</h2>
                <img className="project-photo" src="https://res-console.cloudinary.com/dj36dwfvw/thumbnails/v1/image/upload/v1689668306/c2FtcGxlcy9hbmltYWxzL3RocmVlLWRvZ3M=/preview" alt="" />
                <div className="description">
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus delectus nostrum iure, illo exercitationem veritatis ullam in doloremque ab quibusdam rerum quisquam, deleniti eius officia laborum, cupiditate consequuntur sed. In.</h4>
                </div>
                <div className="browse-btn-holder">
                    <a href="/" className="browse-btn" target="_blank" rel="noopener noreferrer">Browse this Website</a>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Body;

