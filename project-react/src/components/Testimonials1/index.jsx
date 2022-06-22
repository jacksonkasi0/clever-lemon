import React from "react";
import Split from "../Split";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import removeOverlay from "../../common/removeOverlay";
import Config from "../../configuration/home/Home_Testimonial_Config.json";

class Testimonials1 extends React.Component {
  constructor(props) {
    super(props);
  }
  renderArrows = () => {
    return (
      <div className="arrows">
        <div
          onClick={() => this.slider.slickNext()}
          className="next cursor-pointer"
        >
          <span className="pe-7s-angle-right"></span>
        </div>
        <div
          onClick={() => this.slider.slickPrev()}
          className="prev cursor-pointer"
        >
          <span className="pe-7s-angle-left"></span>
        </div>
      </div>
    );
  };
  componentDidMount() {
    removeOverlay();
  }
  render() {
    return (
      <section
        className={`testimonials section-padding ${
          this.props.withBG ? "bg-img" : ""
        } ${this.props.subBgLftstl ? "sub-bg lftstl" : ""} ${
          this.props.parallaxie ? " parallaxie" : ""
        } ${!this.props.overlay ? "noOverlay" : ""}`}
        style={{
          backgroundImage: `${
            this.props.withBG && !this.props.imgSrc
              ? "url(/img/slid/3.jpg)"
              : this.props.imgSrc
              ? `url(${this.props.imgSrc})`
              : "none"
          }`,
        }}
        data-overlay-dark={`${this.props.overlay ? "9" : "0"}`} ref={this.props.exact_ref}
      >
        <div className="container position-re">
          <div className="sec-head custom-font text-center">
            <h6 className="wow fadeIn" data-wow-delay=".5s">
              {Config.ThinHeading}
            </h6>
            <Split>
              <h3 className="wow words chars splitting" data-splitting>
                {Config.BoldHeading}
              </h3>
            </Split>
            <span className="tbg">{Config.LowOpacityHeading}</span>
          </div>
          <div
            className="row justify-content-center wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="col-lg-8">
              <Slider
                className="slic-item"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: true,
                  infinite: true,
                  arrows: true,
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 1,
                }}
              >
                {Config.Testimonials.map((i, k) => {
                  return <div className="item" key={k}>
                  <p>{i.para}</p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBGLftstlParallaxie ? (
                          <>
                            <div className="lxleft">
                              <div className="img">
                                <img src={i.img} alt="" />
                              </div>
                            </div>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                {i.name}
                              </h6>
                              <span className="author-details">
                                {i.designation}
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="img">
                              <img src={i.img} alt="" />
                            </div>
                            <h6 className="author-name custom-font">
                              {i.name}
                            </h6>
                            <span className="author-details">
                              {i.designation}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                })}
              </Slider>
            </div>
          </div>
          {this.renderArrows()}
        </div>
      </section>
    );
  }
}

export default Testimonials1;
