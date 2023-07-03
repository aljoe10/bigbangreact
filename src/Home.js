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
      title: "Empowering Lives through Comprehensive Medicine",
      description: "Aljo's Care is your partner in health, offering a wide array of comprehensive medical services designed to empower and revitalize your life"
    },
    {
      image: card2,
      title: "Nurturing Health for a Vibrant Tomorrow",
      description: "Your central hub for nurturing health and well-being. Explore our website to discover a holistic approach to healthcare, where wellness programs, preventive measures, and expert guidance converge to create a vibrant tomorrow"
    },

    {
      image: card3,
      title: "Accelerating Healing with Precision Medicine",
      description: " Experience the power of precision medicine at Rapid Recovery, where cutting-edge technologies and personalized treatment plans converge to accelerate healing"
    },
    {
      image: card4,
      title: "Bridging the Gap to Holistic Healthcare",
      description: "Aljo's Hospital is your bridge to holistic healthcare, connecting you with a network of compassionate physicians, specialized treatments, and integrated therapies. Immerse yourself in our hospital carousel and embark on a transformative healthcare experience"
    },
  ];

  return (
    <div className="program-highlights">
      <marquee behavior="scroll" direction="left" scrollamount="10">
        <h1 className='MyStyle'> FREE Ambulance Service -- 1066 </h1>
      </marquee>
      <Carousel
        interval={3000}
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
            <h3>Why Choose Aljo's Healthcare?</h3>
            <p className="lead">Established in 1983, Aljo's Hospitals has a robust presence across the healthcare ecosystem. From routine wellness & preventive health care to innovative life-saving treatments and diagnostic services</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={image2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Explore our Centres of Clinical Excellence</h3>
            <p className="lead">Discover a sanctuary of healing and hope, where our dedicated team of medical experts and cutting-edge technology combine to provide unparalleled healthcare services</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="video-wrapper">
            <ReactPlayer
              url="https://youtu.be/9_2dQBdfcJY"
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
            <h3>Dive into our vast health care system</h3>
            <p className="lead">Watch the video to get an idea of our health care services</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="card-container cover">
        {additionalCards.map((card, index) => (
          <div className="card cardAlt" key={index}>
            <div className="card-image">
            <img src={card.image} alt={card.title} />
            </div>
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
