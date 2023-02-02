import React from 'react'
import "./CourseLesson.css";

const ReactLesson1 = () => {
  return (
    <div className="course__lesson">
    <h1 className="lesson__title">Lesson 1: React Introduction</h1>
    <p className="lesson__para">
      Let's begin learning React and discuss how this section of the course will be structured.
    </p>
    <div className="video__frame">Insert Video Here.</div>
    <a className="btn__wrapper" href="/section-4/lesson-2">
      <button className="next__lesson--btn">Proceed to Lesson 2 </button>
    </a>
  </div>
  )
}

export default ReactLesson1