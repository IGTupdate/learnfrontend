import React from 'react'
import "./CourseLesson.css";

const JSLesson3 = () => {
  return (
    <div className="course__lesson">
      <h1 className="lesson__title">Lesson 3: JavaScript Challenges</h1>
      <p className="lesson__para">
         Now we will be testing your JavaScript skills with some basic questions. Practicing these will help you maintain your JavaScript knowledge.
      </p>
      <div className="video__frame">Insert Video Here.</div>
      <a className="btn__wrapper" href="/section-3/lesson-4">
        <button className="next__lesson--btn">Proceed to Lesson 4</button>
      </a>
    </div>
  );
};

export default JSLesson3