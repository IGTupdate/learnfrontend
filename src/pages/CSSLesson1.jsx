import React from "react";
import "./CourseLesson.css";
// import CSS1 from '../assets/CSS1.mp4'

const CSSLesson1 = () => {
  return (
    <div className="course__lesson">
      <h1 className="lesson__title">Lesson 1: CSS Flexbox</h1>
      <p className="lesson__para">
        This is your introduction to CSS. You will now learn how to design
        beautiful, appealing websites which will allow you to begin to earn an
        income coding!
      </p>
      <div className="video__frame">
      {/* <video className="video" controls  id="video">
            <source src={CSS1} type="video/mp4" />
          </video> */}
      </div>
      <a className="btn__wrapper" href="/section-2/lesson-2">
        <button className="next__lesson--btn">Proceed to Lesson 2</button>
      </a>
    </div>
  );
};

export default CSSLesson1;
