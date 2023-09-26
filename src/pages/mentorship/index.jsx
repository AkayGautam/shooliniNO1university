import React, { useEffect, Suspense } from "react";
import HeaderThree from "@/components/HeaderThree";
import Footer from "../../components/Footer";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import Styles from "./css/style";
import Modal from "react-modal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Head from "next/head";

import Image from "next/image"


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

const Mentorship = () => {
  useEffect(() => {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://widgets.nopaperforms.com/emwgts.js";
    document.body.appendChild(s);
  });

  var settings_3  = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settingslider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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

  const testimonialsSLider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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


  return (
    <>
      <Suspense>
        <Head>
          <title>Mentorship | Shoolini University</title>
          <meta
            name="description"
            content="Shoolini collaborates with Foreign Universities and Institutions providing assistance in the areas of visa affairs, insurance, housing, and academic affairs."
          />
          <meta name="keywords" content="International Students Program" />
        </Head>

        <HeaderThree />

        <Styles>

          <div className="contentslider">
            <Slider {...settingslider}>
              <div>
                <div className="Heroslider">
                  <div className="Herosliderimage">
                    <img
                      className="w-100"
                      src="assets/images/girlimage2.jpg"
                    />
                  </div>
                  <div className="HerosliderText">
                    <h1> The Power of Mentorship </h1>
                    <p> The best mentors are the people in your life who push you just a little bit outside your ‘comfort zone’
                      - Leigh Curl
                    </p>
                  </div>
                </div>
              </div>

            </Slider>
          </div>


          <section className="icon-box-area pt-md-4 mt-2">
            <Container>
              <Row>
                <Col>
                  <div className="carder text-center">
                    <h3> Leadership Through Mentorship </h3>
                    <p>Shoolini University believes in nurturing the next generation of leaders and providing them with the tools and guidance to succeed in the competitive professional landscape. The unique Mentorship Program brings together top-level executives, CEOs, CHROs, CLOs, and other country heads to provide invaluable career guidance and networking opportunities. Also, this program bridges the gap between academia and the corporate world, empowering students to make informed decisions and chart their success path. </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>


          <section className="steps-area2 p-relative fix">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="step-img3">
                    <img src="assets/images/admission.webp" alt="className image" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="step-box step-box3">

                    <div className="text pl-5">
                      <div className="sec-title">
                        <h2 className="border-0">
                          <span className=""> How it Works </span>  {" "}
                        </h2>
                      </div>
                      <ul className=" m-0 p-0">
                        {" "}
                        <li className="mb-3"> <strong> Access to Top-Level Industry Professionals </strong> <br />

                        Students engage in valuable interactions with CEOs, CHROs, CLOs, and other industry leaders. This helps them gain invaluable insights into the corporate world and get a first-hand understanding of the skills and qualities required for a flourishing career. </li>

                        <li className="mb-3">  <strong> Personalized Guidance and Support </strong> <br />

                        Every student is paired with a mentor who provides personalised guidance customised to their goals and aspirations. Mentors offer advice, share experiences, and provide a supportive network to help navigate career paths. </li>

                        <li className="mb-3">  <strong> Industry Exposure and Networking Opportunities </strong> <br />
                        Students are exposed to a wide range of industries, allowing them to build a strong professional network. Through interactions with mentors, they gain insights and guidance into various career paths. </li>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="testimonialBlock py-4 mt-5 mb-5">
            <Container>
              <Row>
                <Col md="12">
                  <div className="mb-md-3 sec-title border-0 text-center">
                    <h2 className=" border-0"> Meet Our Distinguished Mentors </h2>
                  </div>
                    <Slider {...settings_3 }> 
                      <div>
                        <div className="mentorslider">
                            <div className="men_image">
                            <Image width={300} height={300} src="/assets/images/Mentorship/1.jpg" alt="" />
                            </div>
                            <h3> Vikram Bector </h3>
                            <p> President and Chief Human Resources Officer</p>
                        </div>
                      </div>
                      <div>
                      <div className="mentorslider">
                            <div className="men_image">
                            <Image width={300} height={300} src="/assets/images/Mentorship/2.jpg" alt="" />
                            </div>
                            <h3> Surajit Banerjee </h3>
                            <p> Chief People Officer <br />flybig Airlines</p>
                        </div>
                      </div>
                      <div>
                      <div className="mentorslider">
                            <div className="men_image">
                            <Image width={300} height={300} src="/assets/images/Mentorship/3.jpg" alt="" />
                            </div>
                            <h3> Sandip Adani  </h3>
                            <p> Sr. Vice President <br />Adani Total Gas Ltd.</p>
                        </div>
                      </div>
                      <div>
                      <div className="mentorslider">
                            <div className="men_image">
                            <Image width={300} height={300} src="/assets/images/Mentorship/4.jpg" alt="" />
                            </div>
                            <h3> Sonal Choithani </h3>
                            <p> Chief Brand {'&'} Comm. Officer <br />Vedanta Ltd.
</p>
                        </div>
                      </div>
                      <div>
                      <div className="mentorslider">
                            <div className="men_image">
                            <Image width={300} height={300} src="/assets/images/Mentorship/5.jpg" alt="" />
                            </div>
                            <h3> Pallavi Kar </h3>
                            <p> Designation</p>
                        </div>
                      </div>
                      <div>
                      <div className="mentorslider">
                            <div className="men_image">
                            <Image width={300} height={300} src="/assets/images/Mentorship/6.jpg" alt="" />
                            </div>
                            <h3> Panchali Mukherjee </h3>
                            <p> Lead L{"&"}OD, sales channel<br /> Axis Bank</p>
                        </div>
                      </div>
                      <div>
                      <div className="mentorslider">
                            <div className="men_image">
                            <Image width={300} height={300} src="/assets/images/Mentorship/7.jpg" alt="" />
                            </div>
                            <h3> Mohit Sharma </h3>
                            <p> Director- Head Talent Acquisition KPMG.</p>
                        </div>
                        </div>
                        <div> 
                        <div className="mentorslider">
                            <div className="men_image">
                            <Image width={300} height={300} src="/assets/images/Mentorship/8.jpg" alt="" />
                            </div>
                            <h3> Nikhil Mathur </h3>
                            <p> Designation</p>
                        </div>
                        </div>
                        <div> 
                        <div className="mentorslider">
                            <div className="men_image">
                            <Image width={300} height={300} src="/assets/images/Mentorship/9.jpg" alt="" />
                            </div>
                            <h3> Chandrashekhar Shetty </h3>
                            <p> Designation</p>
                        </div>
                        </div>
                        <div> 
                        <div className="mentorslider">
                            <div className="men_image">
                            <Image width={300} height={300} src="/assets/images/Mentorship/10.jpg" alt="" />
                            </div>
                            <h3> Colin Mendes </h3>
                            <p> Head of Human Resources<br /> VoltasBeko</p>
                        </div>
                        </div>
                        <div> 
                        <div className="mentorslider">
                            <div className="men_image">
                            <Image width={300} height={300} src="/assets/images/Mentorship/11.jpg" alt="" />
                            </div>
                            <h3> Anshula Verma </h3>
                            <p> Dir. {"& "} National head, Talent Acquisition<br /> Ernst {"&"} Young LLP</p>
                        </div>
                        </div>
                        <div> 
                        <div className="mentorslider">
                            <div className="men_image">
                            <Image width={300} height={300} src="/assets/images/Mentorship/12.jpg" alt="" />
                            </div>
                            <h3> Ankit Jhamb </h3>
                            <p> Chief Learning Officer <br />Grant Thornton Bharat LLP</p>
                        </div>
                        </div>
                        <div> 
                        <div className="mentorslider">
                            <div className="men_image">
                            <Image width={300} height={300} src="/assets/images/Mentorship/13.jpg" alt="" />
                            </div>
                            <h3> Anil Parashar </h3>
                            <p> President and CEO <br />Interglobe Technology Quotient</p>
                        </div>
                        </div>
                        <div> 
                        <div className="mentorslider">
                            <div className="men_image">
                            <Image width={300} height={300} src="/assets/images/Mentorship/14.jpg" alt="" />
                            </div>
                            <h3> Anubhav Nath </h3>
                            <p> Designation</p>
                        </div>
                    </div>
                      
                    </Slider>
                </Col>
              </Row>
            </Container>
          </section>


          <div className="testimonials mb-5">
          <div className="mb-md-3 sec-title border-0 text-center">
                    <h2 className=" border-0"> Mentees Share Inspiring Stories  </h2>
                  </div>
            <Container> 
            <Slider {...testimonialsSLider}>
              <div>
                <div className="slideItem">
                    <Row> 
                      <Col md="4"> 
                        <img src="assets/images/mentors/1.png" />
                      </Col>
                      <Col md="8"> 
                    <p> The Mentorship program has transformed my life. It provided me with the opportunity to learn from leaders with expertise {'&'} experience. The valuable sessions created a positive learning environment and helped me navigate my academic journey. </p>
                    <h4>Anmol Dhinman (MBA)  </h4>
                    </Col>
                    </Row>
                </div>
              </div>
              <div>
                <div className="slideItem">
                <Row> 
                      <Col md="4"> 
                        <img src="assets/images/mentors/arnav.jpeg" />
                      </Col>
                      <Col md="8"> 
                    <p>I believe in the power of mentorship as it allows me to learn from top industry leaders. My mentor’s advice shaped my understanding of the professional world and taught me that I have the professional freedom to choose my career path.   </p>
                    <h4> Arnav Sharma (MBA) </h4>
                    </Col>
                    </Row>
                </div>
              </div>
              <div>
                <div className="slideItem">
                <Row> 
                      <Col md="4"> 
                        <img src="assets/images/mentors/8.png" />
                      </Col>
                      <Col md="8"> 
                    <p> The Mentorship Program prepared me for the corporate world by highlighting several crucial aspects. One of the most valuable skills I learned is the art of ‘connecting with people’, a vital corporate tool. This is a sure shot way to a successful career and life. 

</p>
                    <h4> Robel Dawit (MBA)</h4>
                    </Col>
                    </Row>
                </div>
              </div>
              <div>
                <div className="slideItem">
                <Row> 
                      <Col md="4"> 
                        <img src="assets/images/mentors/19.png" />
                      </Col>
                      <Col md="8"> 
                    <p> The mentorship journey has instilled self-confidence in me. I am grateful to my mentor Mohit Sharma who brought positivity into my life. Whether it's about navigating through internships or life lessons, I feel blessed.  </p>
                    <h4> Aditi Paul (MBA) </h4>
                    </Col>
                    </Row>
                </div>
              </div>
              <div>
                <div className="slideItem">
                <Row> 
                      <Col md="4"> 
                        <img src="assets/images/mentors/5.png" />
                      </Col>
                      <Col md="8"> 
                    <p> Thanks to my mentor, now I have the wisdom and expertise to make more informed decisions, set goals {'&'} develop skills. I have learned the value of mentor-mentee relationships {'&'} their impact on personal and professional development. </p>
                    <h4>Saransh Bakshi (MBA)  </h4>
                    </Col>
                    </Row>
                </div>
              </div>
              <div>
                <div className="slideItem">
                <Row> 
                      <Col md="4"> 
                        <img src="assets/images/mentors/9.png" />
                      </Col>
                      <Col md="8"> 
                    <p>The guidance and expertise of my mentor helped me overcome my weaknesses {'&'} broaden my capabilities. I got career guidance and learnt to navigate personal growth, find work-life balance {'&'} make sound decisions aligned with my values.  </p>
                    <h4> Robel Tesfaye (MBA)  </h4>
                    </Col>
                    </Row>
                </div>
              </div>
              <div>
                <div className="slideItem">
                <Row> 
                      <Col md="4"> 
                        <img src="assets/images/mentors/21.png" />
                      </Col>
                      <Col md="8"> 
                    <p> This is an excellent way to learn new things and grow as a professional. It allowed me to share my experience {'&'} knowledge, gain new perspectives, improve my communication skills, level up my confidence, and expand my network.   </p>
                    <h4>Abha Sharma (MBA) </h4>
                    </Col>
                    </Row>
                </div>
              </div>
            
              
            </Slider>
            </Container>
          </div>


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

export default Mentorship;
