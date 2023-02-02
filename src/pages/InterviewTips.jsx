import React from 'react'
import "./CourseLesson.css";


const InterviewTips = () => {
  return (
    <div className="course__lesson">
      <h1 className="lesson__title">Lesson 2: Interview Tips</h1>
      <p className="lesson__para">
      Learn specifically what recruiters look for in interviews, and how you can impress them.
      </p>
      <div className="video__frame">
        insert vid
      </div>
      <a className="btn__wrapper" href="/section-5/lesson-3">
        <button className="next__lesson--btn">
          Proceed to Lesson 3
        </button>
      </a>
    </div>
  )
}

export default InterviewTips