import React from "react";
import "./CourseLesson.css";

const JSLesson4 = () => {
  return (
    <div className="course__lesson">
      <h1 className="lesson__title">Lesson 4: Promises & Fetching API</h1>
      <p className="lesson__para">
        The final stage of JavaScript is understanding async await and how to
        fetch an API.
      </p>
      <div className="video__frame">
        <iframe
        className="video"
          width="600"
          height="600"
          src="https://www.youtube.com/embed/Yp9KIcSKTNo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <a className="btn__wrapper" href="/section-4/lesson-1">
        <button className="next__lesson--btn">Proceed to Section 3: React</button>
      </a>
    </div>
  );
};

export default JSLesson4;
