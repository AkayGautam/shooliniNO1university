import React, { useEffect, Suspense } from "react";
import HeaderTwo from "@/components/HeaderTwo";
import Footer from "../../components/Footer";
import BreadcrumbBox from "../../components/common/Breadcrumb";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import Styles from "./css/international-students";
import Modal from "react-modal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Head from "next/head";
import Datas from "../../data/icon-box/icon-box-new.json";
import CountUp from "react-countup";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const PathwayPrograms = () => {
  useEffect(() => {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://widgets.nopaperforms.com/emwgts.js";
    document.body.appendChild(s);
  });

  const settingslider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  var settings = {
    dots: false,
    infinite: false,
    arrows: true,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  var settingsLogo = {
    dots: false,
    infinite: false,
    arrows: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `International Students | Shoolini University`;

    return () => {
      document.title = `International Students | Shoolini University`;
    };
  }, []);

  const settingslide = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Suspense>
        <Head>
          <title>International Students Program | Shoolini University</title>
          <meta
            name="description"
            content="Shoolini collaborates with Foreign Universities and Institutions providing assistance in the areas of visa affairs, insurance, housing, and academic affairs."
          />
          <meta name="keywords" content="International Students Program" />
        </Head>

        <HeaderTwo />

        <Styles>
          
        <div className="contentslider">
          <Slider {...settingslider}>
            <div>
              <div className="Heroslider">
                <div className="Herosliderimage"> 
                  <img
                    className="w-100"
                    src="assets/video/heroInternational.jpg"
                  />
                  </div> 
                  <div className="HerosliderText"> 
                      <h1> Go Global with Shoolini University </h1>
                  </div> 
              </div>
              
            </div>
            <div>
            <div className="Heroslider">
                <div className="Herosliderimage"> 
                  <img
                    className="w-100"
                    src="assets/video/heroInternational.jpg"
                  />
                  </div> 
                  <div className="HerosliderText"> 
                      <h1> Go Global with Shoolini University </h1>
                  </div> 
              </div>
            </div>
          </Slider>
        </div>

     
          <section className="icon-box-area pt-md-4 mt-2">
            <Container>
              <Row>
                {Datas.map((data, i) => (
                  <Col className="col xm-2" key={i}>
                    <div className="full-icon-box">
                      <div className="icon-box d-flex">
                        <div className="box-title">
                          <h6 className="text-red">
                            <CountUp
                              end={data.title}
                              duration={3}
                              delay={0.5}
                            />
                            +
                          </h6>
                          <p>{data.subTitle}</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </section>

          
          <section className="steps-area2 p-relative fix">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="step-img3">
                    <img src="assets/images/steps-img-3.png" alt="className image" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="step-box step-box3">
                   
                    <div className="text">
                      <div className="sec-title">
                        <h2 className="border-0 text-white">
                          <span className="text-white"> Welcome to </span> Shoolini International{" "}
                        </h2>
                      </div>
                      <p className="text-white">
                      {" "}
                      The education landscape is evolving, and Shoolini is fast
                      emerging as a global destination of learning. This new
                      paradigm calls for us to break away from differences in
                      language, culture, and nationality to participate in
                      globalisation.
                      <br />
                      <br />
                      Shoolini University develops global leaders who can
                      skillfully communicate innovative ideas across borders and
                      create a global community.
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="ResearchAtGlance-area mb-5">
            <Container>
              <Row>
                <Col md="12" className="mb-3 pb-md-4">
                  <div className="sec-title max-70 text-left">
                    <h2>Why Choose Shoolini? </h2>
                    <p>
                      {" "}
                      One of India’s most dynamic learning environments,
                      Shoolini University has the best of everything — an
                      inspiring Learning Ecosystem that offers a clean campus,
                      eco-friendly infrastructure, top global faculty, and more!
                      The hostels are managed by global player GHS and
                      multi-cuisine mess/cafeterias are available to cater to
                      the taste buds of foreign students.{" "}
                    </p>
                  </div>
                </Col>
              </Row>

              <Row>
                <Slider {...settingslide}>
                  <div className="slikdeItem">
                    <div className="item">
                      <div className="dlab-box courses-bx">
                        <div className="dlab-media">
                          <img src="http://htmldemo.zcubethemes.com/qeducato/img/blog/inner_b2.jpg" alt="" />
                        </div>
                        <div className="dlab-info">
                          <h6 className="dlab-title">
                            {" "}
                            Clean ‘n’ Green Campus{" "}
                          </h6>
                          <p>
                          Our award-winning campus is at par with international standards and in sync with nature. The watchword… Go Green… ensures everyone works tirelessly towards environmental sustainability.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slikdeItem">
                    <div className="item">
                      <div className="dlab-box courses-bx">
                        <div className="dlab-media">
                          <img src="http://htmldemo.zcubethemes.com/qeducato/img/blog/inner_b2.jpg" alt="" />
                        </div>
                        <div className="dlab-info">
                          <h6 className="dlab-title"> Picture-Perfect Climate </h6>
                          <p>
                            The cool summers and pleasant sunny winters on the
                            campus make Shoolini an ideal place to learn and
                            grow. The daytime temperature varies between 5 - 28
                            degrees Celsius.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="slikdeItem">
                    <div className="item">
                      <div className="dlab-box courses-bx">
                        <div className="dlab-media">
                          <img src="http://htmldemo.zcubethemes.com/qeducato/img/blog/inner_b2.jpg" alt="" />
                        </div>
                        <div className="dlab-info">
                          <h6 className="dlab-title">
                            {" "}
                            Safe ‘n’ Secure Dormitory{" "}
                          </h6>
                          <p>
                            The hostel life on the campus is unique, where
                            students are exposed to the diverse Indian culture.
                            The American MNC, Good Host Spaces manages the
                            hostels, providing the best facilities and
                            amenities.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="slikdeItem">
                    <div className="item">
                      <div className="dlab-box courses-bx">
                        <div className="dlab-media">
                          <img src="http://htmldemo.zcubethemes.com/qeducato/img/blog/inner_b2.jpg" alt="" />
                        </div>
                        <div className="dlab-info">
                          <h6 className="dlab-title">
                            {" "}
                            Himalayan Sustainability{" "}
                          </h6>
                          <p>
                          Shoolini has intrinsic strengths for joint research on sustainability in the Himalayan region with international counterparts. We have partnered with another 150+ global universities for research.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="slikdeItem">
                    <div className="item">
                      <div className="dlab-box courses-bx">
                        <div className="dlab-media">
                          <img src="http://htmldemo.zcubethemes.com/qeducato/img/blog/inner_b2.jpg" alt="" />
                        </div>
                        <div className="dlab-info">
                          <h6 className="dlab-title"> Scholarships </h6>
                          <p>
                          The Office of International Affairs at Shoolini University is instrumental in finding the best scholarship for inbound and outbound students. We have collaborations with top international universities.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </Row>
            </Container>
          </section>


 <section className="steps-area2 p-relative fix">
            <div className="container">
              <div className="row align-items-center">
                
                <div className="col-lg-6 col-md-12">
                  <div className="step-box step-box3">
                   
                    <div className="text pr-5">
                      <div className="sec-title">
                        <h2 className="border-0 text-white">
                        Office of International Affairs
                        </h2>
                      </div>
                      <p className="text-white">
                      {" "}
                      The Office of International Affairs (OIA) handles collaborations between Shoolini University and foreign universities & institutes. This includes creating partnerships, facilitating student & faculty exchanges, as well as organising joint research collaboration. The OIA team also offers administrative support to international students & visiting foreign faculty members so they can smoothly adapt to life in India.  
 As a one-stop service centre, the OIA provides assistance in the areas of visa affairs, insurance, housing, and academic affairs. Members of the OIA are committed and dedicated to delivering top-quality services to teachers and students.  
                    </p>

                    <p className="text-white mb-2"> <strong> Email us:</strong> <a className="text-white"  href="mailto:oia@shooliniuniversity.com"> oia@shooliniuniversity.com </a>  </p>
                    <p className="text-white"> <strong> Call us:</strong> <a className="text-white" href="tel:+917807899727"> +917807899727 </a>  </p>

                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="step-img4">
                    <img src="assets/images/steps-img-3.png" alt="className image" />
                  </div>
                </div>
              </div>
            </div>
          </section>
         

          <div id="features" class="why-choose section-padding-01">
            <div class="container">
            <div className="sec-title max-70 text-left border-0">
                    <h2 className="border-0">Main Activities </h2>
               
                  </div>
          <div className="why-choose__wrapper">
                    

                    <div className="why-choose__banner aos-init aos-animate">
                    <ul className="why-choose__list-item">
                                    <li>
                                        <span className="icon"><i className="fab fa-font-awesome"></i></span>
                                        <span className="text">Facilitate Semester Abroad with international universities.   </span>
                                    </li>
                                    <li>
                                        <span className="icon"><i className="fas fa-headset"></i></span>
                                        <span className="text">Support for exchange of faculty members. </span>
                                    </li>
                                    <li>
                                        <span className="icon"><i className="fas fa-bezier-curve"></i></span>
                                        <span className="text">Support for international activities.  </span>
                                    </li>
                                    <li>
                                        <span className="icon"><i className="fas fa-check-double"></i></span>
                                        <span className="text">Facilitating Certification Yoga programs  </span>
                                    </li>

                                    <li>
                                        <span className="icon"><i class="fa fa-graduation-cap" aria-hidden="true"></i></span>
                                        <span className="text">Support information for worldwide scholarships.  </span>
                                    </li>
                                    <li>
                                        <span className="icon"><i className="fas fa-code"></i></span>
                                        <span className="text">Support for international students and foreign visiting faculty.   </span>
                                    </li>
                                    <li>
                                        <span className="icon"><i className="fas fa-icons"></i></span>
                                        <span className="text">Faculty development programs with international support.   </span>
                                    </li>
                                  

                                   
                                </ul>
                        <div className="why-choose__banner-bg"></div>
                    </div>
                </div>
                </div>
                </div>
              

                <section className="newslater-area pt-60 pb-60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-7">
                            <div className="section-title newslater-title">
                                <div className="icon">
                                    <img src="http://htmldemo.zcubethemes.com/qeducato/img/icon/send-mail.png" alt="img" />
                                </div>
                                <div className="text">
                                    <h2>All You Need to Know</h2>
                                  
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 text-center">
                              <button type="submit" className="btn btn-custom" id="send2">Download Guidebook</button>
                        </div>
                    </div>
                   
                </div>
            </section>

          
          <section className="content2 bg-white">
            <div className="container">
             
              <div className="row">
                <Slider {...settingsLogo}>
                  <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                    <div className="picture">
                      <img
                        className="img-fluid"
                        src="assets/images/international/country-1.jpg"
                      />
                    </div>
                  </div>
                  <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                    <div className="picture">
                      <img
                        className="img-fluid"
                        src="assets/images/international/country-2.jpg"
                      />
                    </div>
                  </div>
                  <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                    <div className="picture">
                      <img
                        className="img-fluid"
                        src="assets/images/international/country-3.jpg"
                      />
                    </div>
                  </div>
                  <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                    <div className="picture">
                      <img
                        className="img-fluid"
                        src="assets/images/international/country-4.jpg"
                      />
                    </div>
                  </div>
                  <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                    <div className="picture">
                      <img
                        className="img-fluid"
                        src="assets/images/international/country-5.jpg"
                      />
                    </div>
                  </div>
                  <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                    <div className="picture">
                      <img
                        className="img-fluid"
                        src="assets/images/international/country-6.jpg"
                      />
                    </div>
                  </div>
                  <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                    <div className="picture">
                      <img
                        className="img-fluid"
                        src="assets/images/international/country-7.jpg"
                      />
                    </div>
                  </div>
                  <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                    <div className="picture">
                      <img
                        className="img-fluid"
                        src="assets/images/international/country-8.jpg"
                      />
                    </div>
                  </div>

                  <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                    <div className="picture">
                      <img
                        className="img-fluid"
                        src="assets/images/international/country-9.jpg"
                      />
                    </div>
                  </div>
                  <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                    <div className="picture">
                      <img
                        className="img-fluid"
                        src="assets/images/international/country-10.jpg"
                      />
                    </div>
                  </div>
                  <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                    <div className="picture">
                      <img
                        className="img-fluid"
                        src="assets/images/international/country-11.jpg"
                      />
                    </div>
                  </div>
                  <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                    <div className="picture">
                      <img
                        className="img-fluid"
                        src="assets/images/international/country-12.jpg"
                      />
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </section>

          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <button className="closeBtn" onClick={closeModal}>
              x
            </button>
            <div>
              {" "}
              <div className="sideBarNew mt-3">
                <div className="enqForm">
                  <div className="enqForm course-search">
                    <h5 className="formName"> Admissions Open: 2023 </h5>
                    <div
                      class="npf_wgts"
                      data-height="400px"
                      data-w="1222078993f709a639ec1d6ca2d2d084"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </Styles>
        <Footer />
      </Suspense>
    </>
  );
};

export default PathwayPrograms;
