import React from 'react'
import "./CourseLesson.css";
import MakeMoney from '../assets/MAKEMONEY.mp4'
import EmailTemplate from '../assets/email-template.pdf'

const CSSLesson4 = () => {
  return (
    <div className="course__lesson">
      <h1 className="lesson__title">Lesson 4: Start Making Money</h1>
      <p className="lesson__para">
        You now have the skills to start earning money building websites! In this lesson you will learn how you can begin freelancing and making unlimited amounts of money coding!
      </p>
      <a href={EmailTemplate} target="_blank" className="asset">Email Template</a>
      <div className="video__frame">
      <video className="video" controls id="video">
            <source src={MakeMoney} type="video/mp4" />
          </video>
      </div>
      <a className="btn__wrapper" href="/section-3/lesson-1">
        <button className="next__lesson--btn">Proceed to Section 3: JavaScript</button>
      </a>
    </div>
  );
};

export default CSSLesson4