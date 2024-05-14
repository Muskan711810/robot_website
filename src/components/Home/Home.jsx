import "./Home.css";
import LogoEg from "../../assets/LogoEg.jpeg";
import Kid1 from "../../assets/Kid1.jpeg";
import Kid2 from "../../assets/Kid2.jpeg";
import Footer from "../Footer/Footer";
import { img1 } from "../../assets/img1.png";
import { img2 } from "../../assets/img2.png";
import { img3 } from "../../assets/img3.png";
import { img4 } from "../../assets/img4.jpeg";
import { img5 } from "../../assets/img5.png";
import { img6 } from "../../assets/img6.png";

const Home = () => {

  const cardData = [
    {
      id: 1,
      title: "Robotics & STEM Kits",
      icon: img1,
      description: "World-class partnerships like LEGO, Pluto, Arduino Education, Cretile, Flash forge & Avishkar",
    },
    {
      id: 2,
      title: "Curriculum Access",
      icon: img2,
      description: "Instill curiosity, that is the key to learning. Prepare your child for jobs of the future",
    },
    {
      id: 3,
      title: "Professional Mentors",
      icon: img3,
      description: "Make your Students the next Innovator .",
    },
    {
      id: 4,
      title: "Training Services",
      icon: img4,
      description: "Competition and Challenges.",
    },
    {
      id: 5,
      title: "Training Services",
      icon: img5,
      description: "Gain 21st Century Skills like Problem Solving, Critical Thinking, Decision Making, Empathy, Team Work!",
    },
    {
      id: 6,
      title: "Training Services",
      icon: img6,
      description: "Certified and experienced mentors with proven STEM curriculum",
    },
  ];

  return (
    <div id='home' className='container'>
      <div className='background-images'>
        <img src={Kid1} className="kid1" alt="Kids learning Robotics." />
        <img src={Kid2} className="kid2" alt="Kid learning." />
      </div>
      <div className="content">
        <div className='logo-container'>
          <img src={LogoEg} alt='Logo' className='logo' />
          <p className='slogan'>Creating the Next Innovators</p>
        </div>
        <div className="info-text">
          <div className="classes">For K-12 Schools (State Board(GOVT/IB/CBSE/ICSE/IGCSE))</div>
          <div className="field">Robotics & STEM Kits , Curriculum Access ,Professional Mentors, Training Services</div>
        </div>
        <div className="para">
          The Robot-Ed Company is dedicated to empowering students with cutting-edge robotics
          education. Our mission is to cultivate a passion for STEM (Science, Technology, Engineering,
          and Mathematics) by providing engaging, hands-on learning experiences that foster creativity,
          critical thinking, and problem-solving skills.
        </div>
        <div className="nep">
          New Education Policy (NEP 2020) & CBSE, ICSE, IGCSE, IB offers the
          integration of coding, AI, and computational thinking curriculum in schools.
        </div>
        <div className="cards">
          {cardData.map((card) => (
            <Card key={card.id} image={card.icon} description={card.description} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const Card = ({ image, description }) => {
  return (
    <div className="card">
      <div className="card-content">
        <img src={image} alt="icon" className="card-icon" />
        <p className="cardText">{description}</p>
      </div>
    </div>
  );
};

export default Home;
