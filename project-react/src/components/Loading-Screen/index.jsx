import React from "react";
import loadingPace from "../../common/loadingPace.js";
import appData from "../../data/app.json";


export const appendScript = (scriptToAppend) => {
  const script = document.createElement("script");
  script.setAttribute("id", "pace");
  script.src = scriptToAppend;
  script.async = true;
  document.body.appendChild(script);
};

const LoadingScreen = () => {
  React.useEffect(() => {
    let bodyEl = document.querySelector("body");
    if (appData.showLoading) {
      loadingPace();

      if (bodyEl.classList.contains("hideX")) {
        bodyEl.classList.remove("hideX");
      }
    } else {
      bodyEl.classList.add("hideX");
    }
  });
  return (
    <>
      <div className={`${appData.showLoading === true ? "showX" : "hideX"}`}>
        <div id="preloader"></div>
      </div>

      {appData.showLoading ? appendScript("/js/pace.min.js") : null}
    </>
  );
};

export default LoadingScreen;
