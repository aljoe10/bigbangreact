import React from "react";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from './assests/img/carousel1.png';
import image2 from './assests/img/carousel2.png';
import ReactPlayer from "react-player";
import card1 from './assests/img/card1.png';
import card2 from './assests/img/card2.png';
import card3 from './assests/img/card3.png';
import card4 from './assests/img/card4.png';

const Home = () => {
  const additionalCards = [
    {
      image: card1,
      title: "Convenient learning format",
      description: "Online learning format with mentorship from industry experts"
    },
    {
      image: card2,
      title: "Dedicated career services",
      description: "Resume & interview preps with industry experts & exclusive job board"
    },

    {
      image: card3,
      title: "Learn from the best",
      description: "Award winning faculties in Full Stack domain from top IT background"
    },
    {
      image: card4,
      title: "Structured program with dedicated support ",
      description: "Dedicated program manager to ensure that students make progress and have learning outcomes"
    },
    // {
    //   image: card5,
    //   title: "Hands on learning",
    //   description: "Become job-ready by applying what you learn and build real-life projects"
    // }
  ];

  return (
    <div className="program-highlights">
      <h1 className='MyStyle'> Kick-Start Your Learning Journey </h1>
      <Carousel
        interval={3000}
        //pauseOnHover={false}
        indicators={true}
        controls={true}
        fade={true}
        className="carousel"
      >
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Explore our Centres of Clinical Excellence</h3>
            <p className="lead">Dive into the captivating world of full stack development as you witness the synergy of front-end and back-end technologies</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={image2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>The Dynamic Web: Building the Digital Ecosystem</h3>
            <p className="lead">Amalgamation of diverse programming languages, frameworks, and tools, representing the comprehensive nature of full stack development</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="video-wrapper">
            <ReactPlayer
              url="https://youtu.be/l1EssrLxt7E"
              className="video"
              width="100%"
              height="100%"
              controls={true}
              loop={true}
              muted={false}
              playing={false}
            />
          </div>
          <Carousel.Caption>
            <h3>Introduction to Web Development</h3>
            <p className="lead">Watch the video to get a basic idea of web development</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="card-container cover">
        {additionalCards.map((card, index) => (
          <div className="card cardAlt" key={index}>
            <img src={card.image} alt={card.title} />
            <div className="card-body cardBody">
              <h5 className="card-title cardTitle">{card.title}</h5>
              <p className="card-text cardText">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
