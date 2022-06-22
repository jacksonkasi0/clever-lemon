import React from "react";
import { Formik, Form, Field } from "formik";
import Config from "../../configuration/Footer_Config.json";

const Footer = (props) => {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }

  const scrollToItem = (top) => {
    window.scrollTo({
      top: top ? top : 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const sendEmail = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <footer
      className="footer-half section-padding pb-0"
      ref={props.exact_ref}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cont">
              <h3 style={{ fontSize: "24px", marginBottom: "36px" }}>
                {Config.Brand}
              </h3>
              <div className="con-info custom-font">
                <ul>
                  {Config.ContactInfo.map((i, k) => {
                    return (
                      <li key={k}>
                        <span>{i.type} : </span> {i.text}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="social-icon">
                <h6 className="custom-font stit simple-btn">
                  {Config.Heading1}
                </h6>
                <div className="social">
                  {Config.Social.map((i, k) => {
                    return (
                      <a href={i.url} className="icon" key={k}>
                        <i className={`fab ${i.icon}`}></i>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2">
            <div className="subscribe mb-50">
              <h6 className="custom-font stit simple-btn">{Config.Heading2}</h6>
              <p>{Config.Para}</p>
              <Formik
                initialValues={{
                  subscribe: "",
                }}
                onSubmit={async (values) => {
                  await sendEmail(500);
                  alert(JSON.stringify(values, null, 2));
                  // Reset the values
                  values.subscribe = "";
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="form-group custom-font">
                      <Field
                        validate={validateEmail}
                        type="email"
                        name="subscribe"
                        placeholder={Config.FieldPlaceholder}
                      />
                      {errors.email && touched.email && (
                        <div>{errors.email}</div>
                      )}
                      <button className="cursor-pointer">
                        {Config.Button}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            {Config.ShowInstagramPosts && (
              <div className="insta">
                <h6 className="custom-font stit simple-btn">Instagram Post</h6>
                <div className="insta-gallary">
                  <a href="#0">
                    <img src="/img/insta/1.jpg" alt="" />
                  </a>
                  <a href="#0">
                    <img src="/img/insta/2.jpg" alt="" />
                  </a>
                  <a href="#0">
                    <img src="/img/insta/3.jpg" alt="" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="copyrights text-center">
          <p>
            {Config.Copyright}
            <a href={Config.CompanyUrl}>{Config.CompanyName}</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
