import React from 'react'
import "./CourseLesson.css";

const ReactLesson6 = () => {
  return (
    <div className="course__lesson">
      <h1 className="lesson__title">Lesson 6: React Summary</h1>
      <p className="lesson__para">
       Congratulations on completing the React section.
      </p>
      <div className="video__frame">
        insert vid
      </div>
      <a className="btn__wrapper" href="/section-5/lesson-1">
        <button className="next__lesson--btn">
          Proceed to Section 5: Job Preparation{" "}
        </button>
      </a>
    </div>
  )
}

export default ReactLesson6