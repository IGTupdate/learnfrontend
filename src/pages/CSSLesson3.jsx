import React from 'react'
import "./CourseLesson.css";
// import CSS3 from '../assets/CSS3.mp4'

const CSSLesson3 = () => {
  return (
    <div className="course__lesson">
      <h1 className="lesson__title">Lesson 3: CSS Final Project</h1>
      <p className="lesson__para">
        Now you will create your very first E-Portfolio. This is a huge milestone in your development journey and you can use this project when applying for jobs!
      </p>
      <div className="video__frame">
      {/* <video className="video" controls id="video">
            <source src={CSS3} type="video/mp4" />
          </video> */}
      </div>
      <a className="btn__wrapper" href="/section-2/lesson-4">
        <button className="next__lesson--btn">Proceed to Lesson 4</button>
      </a>
    </div>
  );
};

export default CSSLesson3