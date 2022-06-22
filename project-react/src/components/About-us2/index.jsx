import React from "react";
import Split from "../Split";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Config from "../../configuration/home/Home_About_Config.json";

const AboutUs2 = ({ skillsTheme, exact_ref }) => {
  const cpStyle = {
    path: {
      stroke: "#75dab4",
    },
    trail: {
      stroke: skillsTheme
        ? skillsTheme == "dark"
          ? "#0f1218"
          : "#e5e5e5"
        : "",
    },
    text: {
      fill: skillsTheme ? (skillsTheme == "dark" ? "#ffffff" : "#4e4e4e") : "",
      fontSize: "16px",
    },
  };
  return (
    <section className="about section-padding sub-bg" ref={exact_ref}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="content">
              <div className="sub-title">
                <h6>{Config.Heading}</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Split>
                <h3
                  className="co-tit custom-font wow words chars splitting"
                  data-splitting
                >
                  {Config.Subheading}
                </h3>
              </Split>
              {Config.Paras.map((i, k) => {
                return (
                  <p className="wow fadeInUp mt-3" data-wow-delay=".4s" key={k}>
                    {i}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blc-img">
              <div className="bimg wow imago">
                <img src={Config.Image} alt="" />
              </div>
              <div className="skills-circle wow fadeInUp" data-wow-delay=".8">
                <div className="item">
                  <div className="skill">
                    <CircularProgressbar
                      value={Config.Skill_1.progress}
                      className="custom-font"
                      strokeWidth={2}
                      text={`${Config.Skill_1.progress}%`}
                      styles={cpStyle}
                    />
                  </div>
                  <div className="cont">
                    <span>{Config.Skill_1.thin_heading}</span>
                    <h6>{Config.Skill_1.bold_heading}</h6>
                  </div>
                </div>
                <div className="item">
                  <div className="skill">
                    <CircularProgressbar
                      value={Config.Skill_2.progress}
                      className="custom-font"
                      strokeWidth={2}
                      text={`${Config.Skill_2.progress}%`}
                      styles={cpStyle}
                    />
                  </div>
                  <div className="cont">
                    <span>{Config.Skill_2.thin_heading}</span>
                    <h6>{Config.Skill_2.bold_heading}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs2;
