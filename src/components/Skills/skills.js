import React from 'react';
import './skills.css';
import UIDevelopment from '../../assets/ui-design.png';
import WebDevelopment from '../../assets/website-design.png';
import AppDevelopment from '../../assets/app-design.png';


const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am skilled and passionate frontend developer with experience creating
        and implementing the visual and interactive components of websites and
        web applications, ensuring a user-friendly and aesthetically pleasing
        experience.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img
            src={UIDevelopment}
            alt="UIDevelopment"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2> UI Development</h2>
            <p>
              I  ensure that the web or app interface is user-friendly and
              provides a smooth and intuitive experience for users
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img
            src={WebDevelopment}
            alt="WebDevelopment"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p>
              creating the layout, visual elements, and user interactions using
              HTML, CSS, and JavaScript. They ensure that the website is
              responsive, meaning it works well on various devices and screen
              sizes.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img
            src={AppDevelopment}
            alt="AppDevelopment"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>App Development</h2>
            <p>developing the UI/UX for mobile applications</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;