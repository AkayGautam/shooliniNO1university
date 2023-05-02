import React, { useEffect, Suspense } from "react";
import Header from "../../components/Header";
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

const International = () => {
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
    slidesToShow: 4,
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

        <Header />

        <div className="contentslider">
          <Slider {...settingslider}>
            <div>
              <img
                className="w-100"
                src="https://www.sparkadmissions.com/wp-content/uploads/2021/05/College-Admissions-Trends-2020-2021-scaled.jpg"
              />
            </div>
            <div>
              <img
                className="w-100"
                src="https://www.sparkadmissions.com/wp-content/uploads/2021/05/College-Admissions-Trends-2020-2021-scaled.jpg"
              />
            </div>
          </Slider>
        </div>

        <Styles>
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

          <section className="rankinglist-area">
            <Container>
              <Row>
                <Col md="12">
                  <div className="sec-title text-center">
                    <h2 className="border-0">
                      <span> Welcome to </span> Shoolini International{" "}
                    </h2>
                  </div>
                </Col>
                <Col md="12">
                  <div className="shad-card">
                    <p>
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
                </Col>
              </Row>
            </Container>
          </section>

          <section className="ResearchAtGlance-area">
            <Container>
              <Row>
                <Col md="12" className="mb-5 pb-md-4">
                  <div data-aos="fade-right" className="sec-title text-left">
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
                          <img src="assets/img/our-services/pic2.jpg" alt="" />
                        </div>
                        <div className="dlab-info">
                          <h6 className="dlab-title">
                            {" "}
                            Clean ‘n’ Green Campus{" "}
                          </h6>
                          <p>
                          Our award-winning clean and green campus is at par with international standards and in sync with nature. The watchword on the campus, Go Green, makes sure that all students, faculty, management, and staff are working tirelessly towards environment sustainability.  {" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slikdeItem">
                    <div className="item">
                      <div className="dlab-box courses-bx">
                        <div className="dlab-media">
                          <img src="assets/img/our-services/pic2.jpg" alt="" />
                        </div>
                        <div className="dlab-info">
                          <h6 className="dlab-title">
                            {" "}
                            Weather{" "}
                          </h6>
                          <p>
                          The cool summers and pleasant sunny winters on the campus make Shoolini an ideal place to learn and grow. The daytime temperature varies between 5 - 28 degrees Celsius{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="slikdeItem">
                    <div className="item">
                      <div className="dlab-box courses-bx">
                        <div className="dlab-media">
                          <img src="assets/img/our-services/pic2.jpg" alt="" />
                        </div>
                        <div className="dlab-info">
                          <h6 className="dlab-title">
                            {" "}
                            Safe ‘n’ Secure Dormitory{" "}
                          </h6>
                          <p>
                          The hostel life on the campus is unique, where students are exposed to the diverse Indian culture. The American MNC, Good Host Spaces manages the hostels, providing the best facilities and amenities.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="slikdeItem">
                    <div className="item">
                      <div className="dlab-box courses-bx">
                        <div className="dlab-media">
                          <img src="assets/img/our-services/pic2.jpg" alt="" />
                        </div>
                        <div className="dlab-info">
                          <h6 className="dlab-title">
                            {" "}
                            Himalayan Sustainability  {" "}
                          </h6>
                          <p>
                          Nestled in the Himalayas, Shoolini has developed intrinsic strengths for joint research on sustainability in the Himalayan region with international counterparts. We have also partnered with another 150+ global universities in research areas.   {" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="slikdeItem">
                    <div className="item">
                      <div className="dlab-box courses-bx">
                        <div className="dlab-media">
                          <img src="assets/img/our-services/pic2.jpg" alt="" />
                        </div>
                        <div className="dlab-info">
                          <h6 className="dlab-title">
                            {" "}
                            Scholarships {" "}
                          </h6>
                          <p>
                          The Office of International Affairs team at Shoolini is instrumental in finding the best scholarship for inbound and outbound students.   {" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </Slider>
              </Row>
            </Container>
          </section>

          <section className="content2 bg-white pt-5">
            <div className="container">
              <div class="section-title">
                <h3> LIST OF COUNTRIES </h3>
              </div>
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

export default International;
