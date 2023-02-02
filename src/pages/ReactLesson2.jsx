import React from "react";
import "./CourseLesson.css";

const ReactLesson2 = () => {
  return (
    <div className="course__lesson">
      <h1 className="lesson__title">Lesson 2: React Crash Course</h1>
      <p className="lesson__para">
        This is the exact video that taught me React and is the best tutorial
        available.
      </p>
      <div className="video__frame">
        <iframe
        className="video"
          width="600"
          height="600"
          src="https://www.youtube.com/embed/bMknfKXIFA8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <a className="btn__wrapper" href="/section-4/lesson-3">
        <button className="next__lesson--btn">Proceed to Lesson 3 </button>
      </a>
    </div>
  );
};

export default ReactLesson2;
