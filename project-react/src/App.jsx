import React from "react";
import "./styles/globals.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cursor from "./components/Cursor";
import ScrollToTop from "./components/Scroll-to-top";
import LoadingScreen from "./components/Loading-Screen";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <Router>
      <Cursor />
      <LoadingScreen />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Helmet>
        <script id="wow" src="/js/wow.min.js"></script>
        <script
          strategy="beforeInteractive"
          id="splitting"
          src="/js/splitting.min.js"
        ></script>
        <script id="simpleParallax" src="/js/simpleParallax.min.js"></script>
        <script
          id="isotope"
          strategy="beforeInteractive"
          src="/js/isotope.pkgd.min.js"
        ></script>
        <script
          id="initWow"
          strategy="lazyOnload"
        >{`new WOW().init();`}</script>
      </Helmet>

    </Router>
  );
};

export default App;
