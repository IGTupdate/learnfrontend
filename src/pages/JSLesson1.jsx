import React from "react";
import "./CourseLesson.css";

const JSLesson1 = () => {
  return (
    <div className="course__lesson">
      <h1 className="lesson__title">Lesson 1: JavaScript Introduction</h1>
      <p className="lesson__para">
        This lesson you will learn the fundamentals of JavaScript. It can be intimidating but with time and practice you will be guaranteed to understand it.
      </p>
      <div className="video__frame">
      <iframe className="video" width="600" height="600" src="https://www.youtube.com/embed/hdI2bqOjy3c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <a className="btn__wrapper" href="/section-3/lesson-2">
        <button className="next__lesson--btn">Proceed to Lesson 2</button>
      </a>
    </div>
  );
};

export default JSLesson1;
