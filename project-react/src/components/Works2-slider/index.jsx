import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Split from "../Split";
import Config from "../../configuration/home/Home_Portfolio_Config.json";

SwiperCore.use([Navigation]);

const Works2Slider = ({ subBG, exact_ref }) => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    });
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <>
      <section
        className={`work-carousel section-padding caroul sub-bg ${
          subBG ? "" : ""
        } position-re`}
        ref={exact_ref}
      >
        <div className="container-fluid mt-100">
          <div className="sec-head custom-font text-center">
            <h6 className="wow fadeIn" data-wow-delay=".5s">
              {Config.ThinHeader}
            </h6>
            <Split>
              <h3 className="wow words chars splitting" data-splitting>
                {Config.BoldHeader}
              </h3>
            </Split>
            <span className="tbg">{Config.LowOpacityHeader}</span>
          </div>
          <div className="row">
            <div className="col-lg-12 no-padding">
              <div className="swiper-container">
                <div className="swiper-container">
                  {!load ? (
                    <Swiper
                      speed={1000}
                      loop={true}
                      spaceBetween={0}
                      breakpoints={{
                        320: {
                          slidesPerView: Config.MaxItemsPerViewSM,
                          spaceBetween: 0,
                        },
                        767: {
                          slidesPerView: Config.MaxItemsPerViewMD,
                          spaceBetween: 0,
                        },
                        991: {
                          slidesPerView: Config.MaxItemsPerViewLG,
                          spaceBetween: 0,
                        },
                        1024: {
                          slidesPerView: Config.MaxItemsPerViewLG,
                          spaceBetween: 0,
                        },
                      }}
                      navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                      }}
                      onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl =
                          navigationPrevRef.current;
                        swiper.params.navigation.nextEl =
                          navigationNextRef.current;
                      }}
                      onSwiper={(swiper) => {
                        setTimeout(() => {
                          swiper.params.navigation.prevEl =
                            navigationPrevRef.current;
                          swiper.params.navigation.nextEl =
                            navigationNextRef.current;

                          swiper.navigation.destroy();
                          swiper.navigation.init();
                          swiper.navigation.update();
                        });
                      }}
                      className="swiper-wrapper"
                      slidesPerView={1}
                    >
                      {Config.Sections.map((i, k) => {
                        return (
                          <SwiperSlide className="swiper-slide" key={k}>
                            <div
                              className="content wow fadeInUp"
                              data-wow-delay=".3s"
                            >
                              <div
                                className="item-img bg-img wow imago"
                                style={{
                                  backgroundImage: `url(${i.img})`,
                                }}
                              ></div>
                              <div className="cont bgbox">
                                <h6>
                                  <a>{i.heading}</a>
                                </h6>
                                <h4>
                                  <a>
                                    <a>{i.sub_heading}</a>
                                  </a>
                                </h4>
                                <Link to={i.url}>
                                  <a>
                                    <span className="icon">
                                      <i className="fas fa-plus"></i>
                                    </span>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  ) : null}

                  <div
                    ref={navigationNextRef}
                    className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
                  >
                    <i className="ion-ios-arrow-right"></i>
                  </div>
                  <div
                    ref={navigationPrevRef}
                    className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
                  >
                    <i className="ion-ios-arrow-left"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works2Slider;
