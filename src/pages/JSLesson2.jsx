import React from "react";
import "./CourseLesson.css";

const JSLesson2 = () => {
  return (
    <div className="course__lesson">
      <h1 className="lesson__title">Lesson 2: JavaScript Projects</h1>
      <p className="lesson__para">
        This lesson you practice the JavaScript skills you just learn't. Don't
        worry if you aren't fully understanding the language, over time it will
        become more clear.
      </p>
      <div className="video__frame">
        <iframe
          className="video"
          width="600"
          height="600"
          src="https://www.youtube.com/embed/JkeyKeK3V24"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <a className="btn__wrapper" href="/section-3/lesson-3">
        <button className="next__lesson--btn">Proceed to Lesson 3</button>
      </a>
    </div>
  );
};

export default JSLesson2;
