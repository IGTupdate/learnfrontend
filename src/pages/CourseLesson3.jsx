import React from "react";
import "./CourseLesson.css";
// import HTML3 from '../assets/HTML3.mp4'

const CourseLesson3 = () => {
  return (
    <div className="course__lesson">
      <h1 className="lesson__title">Lesson 3: HTML Final Project</h1>
      <p className="lesson__para">
        This is the final section of HTML. Congratulations on making it this
        far, if you still feel lost don't worry, practice makes perfect.
      </p>
      <div className="video__frame">
      {/* <video className="video" controls id="video">
            <source src={HTML3} type="video/mp4" />
          </video> */}
      </div>
      <a className="btn__wrapper" href="/section-2/lesson-1">
        <button className="next__lesson--btn">Proceed to Section 2: CSS</button>
      </a>
    </div>
  );
};

export default CourseLesson3;
