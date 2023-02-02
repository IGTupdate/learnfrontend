import React from "react";
import "./CourseLesson.css";
import HTML2 from '../assets/HTML2.mp4'

const CourseLesson2 = () => {
  return (
    <div className="course__lesson">
      <h1 className="lesson__title">Lesson 2: HTML Practice</h1>
      <p className="lesson__para">
        We will get you practicing your HTML skills in this lesson. Writing code
        yourself is the absolute BEST way to learn.
      </p>
      <div className="video__frame">
      <video className="video" controls id="video">
            <source src={HTML2} type="video/mp4" />
          </video>
      </div>
      <a className="btn__wrapper" href="/section-1/lesson-3">
        <button className="next__lesson--btn">Proceed to Lesson 3</button>
      </a>
    </div>
  );
};

export default CourseLesson2;
