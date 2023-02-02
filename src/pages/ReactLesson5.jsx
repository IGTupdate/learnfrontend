import React from "react";
import "./CourseLesson.css";

const ReactLesson5 = () => {
  return (
    <div className="course__lesson">
      <h1 className="lesson__title">Lesson 5: Amazon Clone</h1>
      <p className="lesson__para">
        Build an Amazon Clone which you will use on your final portfolio.
      </p>
      <div className="video__frame">
        <iframe
        className="video"
          width="600"
          height="600"
          src="https://www.youtube.com/embed/RDV3Z1KCBvo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <a className="btn__wrapper" href="/section-4/lesson-6">
        <button className="next__lesson--btn">
          Proceed to Lesson 6
        </button>
      </a>
    </div>
  );
};

export default ReactLesson5;
