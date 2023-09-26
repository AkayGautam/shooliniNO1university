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
import Image from "next/legacy/image";

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
    autoplay: false,
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


  
  var stories = {
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: true,
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
  }


  var settingsLogo = {
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1500,
    slidesToShow: 8,
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
    slidesToScroll: 3,
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
          
          <section className="position-relative">

         
        <div className="contentslider">
          <Slider {...settingslider}>
            <div>
              <div className="Heroslider">
                <div className="Herosliderimage"> 
                  <img
                    className="w-100"
                    src="assets/images/international-slide.jpg"
                  />
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

          
          {/* <section className="steps-area2 p-relative fix">
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
          </section> */}

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
                          <img src="assets/images/adv.png" alt="" />
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
                          <img src="assets/images/admission.webp" alt="" />
                        </div>
                        <div className="dlab-info">
                          <h6 className="dlab-title">
                            {" "}
                            International Student Hostels{" "}
                          </h6>
                          <p>
                          There are separate hostels for international students. Managed by Good Host Spaces, an American MNC, these residences offer international cuisines, automated laundry, wifi, and a gymnasium, ensuring a comfortable and enriching stay.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="slikdeItem">
                    <div className="item">
                      <div className="dlab-box courses-bx">
                        <div className="dlab-media">
                          <img src="assets/images/social.jpg" alt="" />
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
                          <img src="assets/images/highlights.jpg" alt="" />
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


          <section className="templateHeading highLights">
          <div className="container-fluid p-0">
            <div className="row m-0">
              <div className="col-md-4 p-0">
                <Image
                  width={650}
                  height={600}
                  className="w-100"
                  src="/assets/images/int-boy.jpg"
                />
              </div>
              <div className="col-md-8 p-0">
                <div className="hgContent">
                  <div className="hgContentinner">
               
                    <div className="newData">
                    <div className="sec-title text-left"><h2 className="text-white mb-0">HighLights </h2>
                   
                    </div>
                    <div className="newData"> 
                    <p>More than 70% of research papers are published with the support of foreign collaborators </p>
                   <p>  Shoolini students go for higher education in top international universities </p> 

                   <p> Students in 30+ countries (Outbound) </p> 

                   <p> International Students from 20+ countries (Inbound) </p> 

                   <p> 50+ International Faculty </p> 

                   <p> 1000+ Joint Projects </p> 

                   <p>  Students received scholarships up to Rs 50 Crore+ so far   </p> 
</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="Abroad" className="student-voices">
                            <div className="container">
                            <div class="pagetitle text-center mb-4"><h2>International Collaborations  </h2>
                          
                            </div>
                                <div className="row">

                                <div className="col-md-6">
                                        <div className="card-box">
                                        <p className="mb-0"> Shoolini University has strong academic bonds with 250+ higher educational institutions in 28+ countries. Through meaningful collaborations, our faculty and students avail exchange opportunities in leading foreign universities under various scholarship programs.     </p>                     
                                          
                                            <div class="slide-track logosMax">
                                                <div class="slides">
                                                    <span>  <img src="/srp-lp/img/TMU_CoM_Logo.png" alt="" /></span>
                                                </div>
                                                <div class="slides">
                                                    <span> 	<img src="/srp-lp/img/Uni_Napoli_512px.png" alt="" /></span>
                                                </div>


                                                <div class="slides">
                                                    <span> 	<img src="/srp-lp/img/usa.png" alt="" /></span>
                                                </div>

                                                <div class="slides">
                                                    <span> 	<img src="/srp-lp/img/nih.jpg" alt="" /></span>
                                                </div>
                                                <div class="slides">
                                                    <span> <img src="/srp-lp/img/Gachonlogo.jpg" alt="" /></span>
                                                </div>
                                                <div class="slides">
                                                    <span> 	<img src="/srp-lp/img/lu.jpg" alt="" /></span>
                                                </div>

                                            </div>

                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="card-box twoPtwo">
                                            <h3 className="title-default"> 2+2 Study Abroad Programs </h3>
                                            <p> Study first 2 years at Shoolini University and final 2 years at a leading university abroad.   </p>
                                                <div class="slide-track ">
                                                <div class="slides">
                                                    <img src="/srp-lp/img/mlogo.png" alt="" />
                                                </div>
                                                <div class="slides">
                                                    <img src="/srp-lp/img/sheffield-hallam-university.png" alt="" />
                                                </div>
                                                <div class="slides">
                                                    <img src="/srp-lp/img/TMU_CoM_Logo.png" alt="" />
                                                </div>
                                                <div class="slides">
                                                    <img src="/srp-lp/img/University-of-Reading-Logo.png" alt="" />
                                                </div>
                                                <div class="slides">
                                                    <img src="/srp-lp/img/WSU_logo.jpg" alt="" />
                                                </div>
                                                <div class="slides">
                                                    <img src="/srp-lp/img/download.png" alt="" />
                                                </div>


                                            </div>


                                        </div>

                                    </div>

                                    
                          </div>
                            </div>
                        </section>
                        
          <section id="Stories" className="student-voices">
            <div className="container">
              <div class="pagetitle text-center mb-4"><h2> Our Globetrotters </h2>
               
              </div>

              <div className="row">
                <Slider {...stories}>
                  <div className="col-md-4 px-2">
                    <div className="cardImage">
                      <img className="img-responsive" src="https://shooliniuniversity.com/blog/wp-content/uploads/2023/06/Ananya-Manishi-Shoolini.jpeg" />
                    </div>
                    <div className="card-box">
                      <h3 className="title-default"> <a href="https://shooliniuniversity.com/blog/ananya-manishi-heads-to-essec-business-school-in-france/"> Shoolini Star Heads to ESSEC Business School in France </a></h3>

                      <p className="text-18"> Ananya Manishi, a brilliant Biotechnology student from Shoolini University, has achieved a remarkable milestone in her academic journey. She has been accepted into the prestigious Masters in Management (MIM) program at ESSEC Business School’s Cergy Campus in France.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 px-2">
                    <div className="cardImage">
                      <img className="img-responsive" src="../assets/images/aman.jpg" />
                    </div>
                    <div className="card-box">
                      <h3 className="title-default"> <a href="https://alumni.shooliniuniversity.com/f/young-water-fellowship-8267?source=view">
                        Dr Amanpreet wins International Young Water Fellowship </a> </h3>

                      <p className="text-18"> Dr Amanpreet Kaur Virk (Alumni, PhD Biotechnology, 2019) is the only Indian to win the Brussels, Belgium-based Young Water Fellowship in 2019. She achieved this for her work on Moringa-based water purification systems.
                      </p>
                    </div>
                  </div>



                  <div className="col-md-4 px-2">
                    <div className="cardImage">
                      <img className="img-responsive" src="../assets/images/Raghav-Rastogi.jpeg" />
                    </div>
                    <div className="card-box">

                      <h3 className="title-default"> <a href="https://shooliniuniversity.com/blog/from-shoolini-to-johns-hopkins/" target="_blank">  From Shoolini to Johns Hopkins </a></h3>

                      <p className="text-18"> In a momentous achievement, Raghav Rastogi, a BTech Biotechnology Summit Research Program (SRP) student of Shoolini University has been accepted into an advanced Master’s program at Johns Hopkins University in the United States.Being America’s first research university, admission to a master’s program at Johns Hopkins University is highly competitive.
                      </p>
                    </div>
                  </div>


                  <div className="col-md-4 px-2">
                    <div className="cardImage">
                      <img className="img-responsive" src="../assets/images/Global-Leader-Summit.jpg" />
                    </div>
                    <div className="card-box">

                      <h3 className="title-default"><a target="_blank" href="https://shooliniuniversity.com/blog/future-global-leader-summit-anitya-among-200-indians/"> Future Global Leader Summit: Anitya among 200 Indians! </a></h3>

                      <p className="text-18"> Anitya Gupta, a Ramanujan Research Associate from the Yogananda School of AI, Computers {'&'} Data Science at Shoolini University, was selected as one of the 200 Indian representatives for the Future Global Leader Summit hosted by Japan as part of the G20 initiative.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 px-2">
                    <div className="cardImage">
                      <img className="img-responsive" src="https://shooliniuniversity.com/blog/wp-content/uploads/2020/02/5213662_1235_uni.jpg" />
                    </div>
                    <div className="card-box">

                      <h3 className="title-default"><a target="_blank" href="https://shooliniuniversity.com/blog/a-great-learning-experience-in-italy-says-exchange-student/"> A Great Learning Experience In Italy says Exchange Student </a></h3>

                      <p className="text-18"> Sakshi Rather, a student of Masters in Food Technology who is on an exchange Programme in Italy, says it is a great learning experience in Italy and her entire perspective towards life and career has changed since she set foot in Italy.
                      </p>
                    </div>
                  </div>



                </Slider>
              </div>

            </div>
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
                    <img src="assets/images/blocks.jpg" alt="className image" />
                  </div>
                </div>
              </div>
            </div>
          </section>
         

          <div id="features" class="why-choose section-padding-01">
            <div class="container">
            <div className="pagetitle pt-md-5  max-70 text-left border-0">
                    <h2 className="border-0 text-inherit">Role of OIA</h2>
               
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
