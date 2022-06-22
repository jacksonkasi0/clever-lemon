import React from "react";
import Config from "../../configuration/home/Home_Services_Config.json";

const Services3 = (props) => {
  return (
    <section className="services section-padding" ref={props.exact_ref}>
      <div className="container">
        <div className="sec-head custom-font tr-head">
          <h6>{Config.ThinHeader}</h6>
          <h3>{Config.BoldHeader}</h3>
          <span className="tbg">{Config.LowOpacityHeader}</span>
        </div>
        <div className="row">
          {Config.Services.map((i, k) => {
            return (
              <div
                className="col-lg-4 wow fadeInUp"
                data-wow-delay=".3s"
                key={k}
              >
                <div className={`step-item ${i.extra_class}`}>
                  <span className={`icon ${i.icon}`}></span>
                  <h6>{i.heading}</h6>
                  <p>{i.para}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services3;
