import React from "react";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import { handleMobileDropdown, handleSearch } from "../../common/navbar";
import Config from "../../configuration/Navbar_Config.json";

const Navbar = ({ nr, theme, action, isOtherPage }) => {
  React.useEffect(() => {
    handleSearch();
  }, []);
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link to="#">
          <a>
            {theme ? (
              theme === "themeL" ? (
                <h3
                  style={{
                    fontSize: "24px",
                    fontFamily: `"Barlow Condensed", sans-serif`,
                  }}
                >
                  {Config.Brand}
                </h3>
              ) : (
                <h3
                  style={{
                    fontSize: "24px",
                    fontFamily: `"Barlow Condensed", sans-serif`,
                  }}
                >
                  {Config.Brand}
                </h3>
              )
            ) : (
              <h3
                style={{
                  fontSize: "24px",
                  fontFamily: `"Barlow Condensed", sans-serif`,
                }}
              >
                {Config.Brand}
              </h3>
            )}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {!isOtherPage &&
              Config.NavItems.map((i, k) => {
                return (
                  <li className="nav-item" key={k}>
                    <a onClick={(e) => action(k)}>
                      <a className="nav-link">{i.text}</a>
                    </a>
                  </li>
                );
              })}
            {isOtherPage &&
              Config.NavItems.map((i, k) => {
                return (
                  <li className="nav-item" key={k}>
                    <Link to={k === 0 ? "/" : `/#${i.text.toLowerCase()}`}>
                      <a className="nav-link">{i.text}</a>
                    </Link>
                  </li>
                );
              })}
          </ul>
          <div className="search">
            <span className="icon pe-7s-search cursor-pointer"></span>
            <div className="search-form text-center custom-font">
              <Formik
                initialValues={{
                  search: "",
                }}
                onSubmit={async (values) => {
                  alert(JSON.stringify(values, null, 2));
                  // Reset the values
                  values.search = "";
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Field type="text" name="search" placeholder="Search" />
                  </Form>
                )}
              </Formik>
              <span className="close pe-7s-close cursor-pointer"></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
