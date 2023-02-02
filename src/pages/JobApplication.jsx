import React from 'react'
import "./CourseLesson.css";

const JobApplication = () => {
  return (
    <div className="course__lesson">
      <h1 className="lesson__title">Lesson 3: Applying for Jobs</h1>
      <p className="lesson__para">
        Learn how to apply for jobs no matter what the role says!
      </p>
      <div className="video__frame">
        insert vid
      </div>
      <a className="btn__wrapper" href="/section-5/lesson-4">
        <button className="next__lesson--btn">
          Proceed to Lesson 4
        </button>
      </a>
    </div>
  )
}

export default JobApplication