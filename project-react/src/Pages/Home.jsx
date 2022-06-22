import React, { useRef, useEffect } from "react";
import DarkTheme from "../layouts/Dark";
// import LightThem from '../layouts/Light'
import Navbar from "../components/Navbar";
import IntroWithSlider from "../components/Intro-with-slider3";
import AboutUs from "../components/About-us2";
import Services from "../components/Services3";
import Works2Slider from "../components/Works2-slider";
import Testimonials from "../components/Testimonials1";
import Footer from "../components/Footer";

const Home = () => {
  React.useEffect(() => {
    if (window.location.href.includes("#")) {
      let nextURL = window.location.href.split("#")[0];
      let type = window.location.href.split("#")[1];
      const nextTitle = "Clover Lemon";
      const nextState = { additionalInformation: "" };
      window.history.replaceState(nextState, nextTitle, nextURL);

      let refer;

      if (type === "about") {
        refer = introRef;
      } else if (type === "services") {
        refer = serviceRef;
      } else if (type === "portfolio") {
        refer = portfolioRef;
      } else if (type === "testimonials") {
        refer = testimonialRef;
      } else if (type === "contact") {
        refer = contactRef;
      } else {
        refer = sliderRef;
      }

      refer &&
        scrollToItem(
          refer && refer.current && refer.current.offsetTop
            ? refer.current.offsetTop - (type === 3 ? -50 : type === 4 ? 50 : 0)
            : 0
        );
    }
  }, []);

  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  const sliderRef = React.useRef(null);
  const introRef = React.useRef(null);
  const serviceRef = React.useRef(null);
  const portfolioRef = React.useRef(null);
  const testimonialRef = React.useRef(null);
  const contactRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  const scrollToItem = (top) => {
    window.scrollTo({
      top: top ? top : 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <DarkTheme />
      <Navbar
        nr={navbarRef}
        lr={logoRef}
        action={(type) => {
          let refer =
            type === 0
              ? sliderRef
              : type === 2
              ? serviceRef
              : type === 1
              ? introRef
              : type === 3
              ? portfolioRef
              : type === 4
              ? testimonialRef
              : contactRef;
          scrollToItem(
            refer && refer.current && refer.current.offsetTop
              ? refer.current.offsetTop -
                  (type === 3 ? -50 : type === 4 ? 50 : 0)
              : 0
          );
        }}
      />
      <IntroWithSlider
        action={(type) => {
          let refer =
            type === 0
              ? sliderRef
              : type === 2
              ? serviceRef
              : type === 1
              ? introRef
              : type === 3
              ? portfolioRef
              : type === 4
              ? testimonialRef
              : contactRef;
          scrollToItem(
            refer && refer.current && refer.current.offsetTop
              ? refer.current.offsetTop -
                  (type === 3 ? -50 : type === 4 ? 50 : 0)
              : 0
          );
        }}
        exact_ref={sliderRef}
      />
      <AboutUs skillsTheme="dark" exact_ref={introRef} />
      <Services exact_ref={serviceRef} />
      <Works2Slider subBG exact_ref={portfolioRef} />
      <Testimonials exact_ref={testimonialRef} />
      <Footer exact_ref={contactRef} />
    </>
  );
};

export default Home;
