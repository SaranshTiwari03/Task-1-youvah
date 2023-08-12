import React from 'react'
import './Side.css';
import S1 from '../Assets/group-30275.svg'
import S2 from '../Assets/group-30276.svg'
import S3 from '../Assets/group-30277.svg'

function Side() {
  return (
    <div className='side'>
      
      <div className="frame-parent14">
        <div className="start-up-parent">
          <img className="start-up-icon" alt="" src="/start-up.svg" />
          <div className="career-opportunities">career opportunities :</div>
          <img className="group-icon" alt="" src={S2} />
        </div>
        <div className="life-time-access-container">
          <ul className="life-time-access-life-time-acc">
            <li className="life-time-access">Life time access</li>
            <li className="life-time-access">Life time access</li>
            <li className="life-time-access">Life time access</li>
          </ul>
        </div>
      </div>
      <div className="frame-parent16">
        <div className="start-up-parent">
          <img className="education-icon" alt="" src="/start-up.svg" />
          <div className="title">Skills You Will Learn :</div>
          <img className="group-icon" alt="" src={S1} />
        </div>
        <div className="content-designing-content-container">
          <ul className="life-time-access-life-time-acc">
            <li className="life-time-access">Content Designing</li>
            <li className="life-time-access">Content Adaptation</li>
            <li className="life-time-access">Content Writing as a Career</li>
            <li className="life-time-access">SEO: Understanding search engine optimization (SEO)</li>
          </ul>
        </div>
      </div>
      <div className="frame-parent15">
        <div className="start-up-parent">
          <img className="education-icon" alt="" src="/start-up.svg" />
          <div className="course-includes">Course Includes :</div>
          <img className="group-icon" alt="" src={S3} />
        </div>
        <div className="life-time-access-container">
          <ul className="life-time-access-life-time-acc">
            <li className="life-time-access">Life time access</li>
            <li className="life-time-access">Certificate of completion</li>
          </ul>
        </div>
      </div>
      <div className="frame-parent13">
        <div className="parent">
          <div className="div">₹1000</div>
          <div className="offf">
            <span className="span">{`₹2000 `}</span>50% offf
          </div>
        </div>
        <button  className="get-started">
          <div className="text1">Buy Now</div>
        </button>
      </div>
    </div>
  )
}

export default Side
