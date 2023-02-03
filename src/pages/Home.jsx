import React from "react";
import "./Home.css";
import StarIcon from "@mui/icons-material/Star";
import Logo from "../assets/mainImage.svg";
import FreedomLogo from "../assets/freedom.svg";
import BusinessLogo from "../assets/business.svg";
import LearningLogo from "../assets/learning.svg";
import Footer from '../components/Footer'

const Home = ({ darkMode }) => {

  console.log(darkMode)
  return (
    <div className="home">
      <div className="home__main">
        <figure className="text__wrapper">
          <h1 className="home__title">Earn Six Figures with <span className="gold">Code</span>  in 2023</h1>
          <p className="home__subtitle">
            Go from <b>absolute beginner</b> to a capable
            and job-ready Web Developer in just{" "}
            7 weeks!
          </p>
          <figure className="star__wrapper">
            <StarIcon className="star__icon" />
            <StarIcon className="star__icon" />
            <StarIcon className="star__icon" />
            <StarIcon className="star__icon" />
            <StarIcon className="star__icon" />
          </figure>
          <a href="/courseintro">
          <button className="get__started--btn">Get Started</button>
          </a>
          <img className="main__image" src={Logo} />
        </figure>
      </div>
      
      <div className="main">
      <hr />
        <h1 className="main__title">
          Why Learn<span className="gold">Frontend</span>
        </h1>
        <div className="main__content">
          <div className="main__content--left">
            <h1 className="main__content--title">
              Create Financial Freedom for Life.
            </h1>
            <p className="main__content--para">
              On completion of the course, you will be job-ready for $100,000+
              roles even being able to land $200,000 jobs as an absolute
              beginner with no experience. This leads to complete financial
              independence.
            </p>
          </div>
          <div className="main__content--right">
            <img
              className="main__content--img"
              src={FreedomLogo}
              alt=""
            />
          </div>
        </div>
        <div className="main__content">
          <div className="main__content--left">
            <img
              className="main__content--img"
              src={BusinessLogo}
              alt=""
            />
          </div>
          <div className="main__content--right">
            <h1 className="main__content--title">Earn an Income in 2 Weeks.</h1>
            <p className="main__content--para">
              After 2 weeks, you will be able to create fully responsive HTML & CSS websites where you can use your skills to begin freelancing for local businesses!
            </p>
          </div>
        </div>
        <div className="main__content">
          <div className="main__content--left">
            <h1 className="main__content--title">
              The Course is for Absolute Beginners.
            </h1>
            <p className="main__content--para">
              Most students who take this course have zero programming knowledge whatsoever. The course caters perfectly to complete beginners and moves slowly at the start to make sure you understand the basics.
            </p>
          </div>
          <div className="main__content--right">
            <img
              className="main__content--img"
              src={LearningLogo}
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
