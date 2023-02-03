import React from "react";
import "./CourseLesson.css";
import HTML1 from '../assets/HTML1.mp4'

const CourseLesson = () => {
  return (
    <div className="course__lesson">
      <h1 className="lesson__title">Lesson 1: HTML Introduction</h1>
      <p className="lesson__para">
        Let's begin learning HTML basics and get you building your first
        website!
      </p>
      <div className="video__frame">
      {/* <video className="video" controls id="video">
            <source src={HTML1} type="video/mp4" />
          </video> */}
      </div>
      <a className="btn__wrapper" href="/section-1/lesson-2">
          <button className="next__lesson--btn">
            Proceed to Lesson 2
          </button>
        </a>
    </div>
  );
};

export default CourseLesson;
