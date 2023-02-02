import React from 'react'
import "./CourseLesson.css";

const Resume = () => {
  return (
    <div className="course__lesson">
      <h1 className="lesson__title">Lesson 1: Premium Resume</h1>
      <p className="lesson__para">
       You will now learn how to write the ULTIMATE resume to make recruiters want to hire you!
      </p>
      <div className="video__frame">
        insert vid
      </div>
      <a className="btn__wrapper" href="/section-5/lesson-1">
        <button className="next__lesson--btn">
          Proceed to Lesson 2
        </button>
      </a>
    </div>
  )
}

export default Resume