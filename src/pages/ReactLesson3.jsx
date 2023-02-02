import React from "react";
import "./CourseLesson.css";

const ReactLesson3 = () => {
  return (
    <div className="course__lesson">
      <h1 className="lesson__title">Lesson 3: YouTube Clone</h1>
      <p className="lesson__para">
        Build a YouTube clone which you will display in your final portfolio.
      </p>
      <div className="video__frame">
        <iframe
        className="video"
          width="600"
          height="600"
          src="https://www.youtube.com/embed/FHTbsZEJspU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <a className="btn__wrapper" href="/section-4/lesson-4">
        <button className="next__lesson--btn">Proceed to Lesson 4 </button>
      </a>
    </div>
  );
};

export default ReactLesson3;
