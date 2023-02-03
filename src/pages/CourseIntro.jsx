import React from "react";
import "./CourseIntro.css";
// import Intro from "../assets/INTRO.mp4";
// import { Player } from "video-react";

const CourseIntro = () => {
  return (
    <div className="course__intro">
      <div className="course__intro--container">
        <h1 className="course__intro--title">
          Welcome to Learn<span className="gold">Frontend</span>
        </h1>
        <p className="course__intro--para">
          Congratulations on starting your coding journey! You will now be on
          your way to making a <b>six-figure</b> income
          and developing <b>financial independence </b>
          in no time. Watch the following video to begin the course!
        </p>
        <div className="video__frame">
          {/* <video className="video" controls id="video">
            <source src={Intro} type="video/mp4" />
          </video> */}
        </div>
        <a className="btn__wrapper" href="/section-1/lesson-1">
          <button className="next__lesson--btn">
            Proceed to Section 1: HTML
          </button>
        </a>
      </div>
    </div>
  );
};

export default CourseIntro;
