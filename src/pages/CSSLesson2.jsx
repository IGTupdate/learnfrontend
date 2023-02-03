import React from "react";
import "./CourseLesson.css";
import CSS2 from '../assets/CSS2.mp4'

const CSSLesson2 = () => {
  return (
    <div className="course__lesson">
      <h1 className="lesson__title">Lesson 2: CSS Practice</h1>
      <p className="lesson__para">
       Let's practice what you just learn't about CSS and get you creating your first profile page!
      </p>
      <div className="video__frame">
      {/* <video className="video" controls  id="video">
            <source src={CSS2} type="video/mp4" />
          </video> */}
      </div>
      <a className="btn__wrapper" href="/section-2/lesson-3">
        <button className="next__lesson--btn">Proceed to Lesson 3</button>
      </a>
    </div>
  );
};
export default CSSLesson2;
