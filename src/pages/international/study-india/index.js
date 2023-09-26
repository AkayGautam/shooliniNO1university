import React, { Suspense } from "react";
import HeaderTwo from '@/components/HeaderTwo'
import Head from "next/head";
import Styles from "../css/international-students";
import Footer from "@/components/Footer";
import BreadcrumbBox from "@/components/common/Breadcrumb";
import Image from "next/legacy/image";
import { Container, Row, Col, Dropdown } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Blogs = () => {

  var stories = {
    dots: false,
    infinite: false,
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


  return (
    <>
    
    <Suspense>
        <Head>
          <title>STUDY-INDIA | Shoolini University</title>
          <meta
            name="description"
            content="" />
          <meta name="keywords" content="" />
        </Head>

        <HeaderTwo />
        

        <Styles>


        <section className="hero-slider-area scSlider sliderForBio">
            <div className="slider-wrapper">

              <div

                className="slider-content slider-image pathwayprogramsImage"
                style={{
                  background: `url("../assets/images/bg-international.jpg") center top no-repeat;`,
                }}
              >
                <div className="slider-table">
                  <div className="slider-tablecell">
                    <Container>
                      <Row>
                        <Col md="12"></Col>
                        <Col md="6">

                        </Col>

                        <Col md="6">
                          <div className="resForm box">
                            <h4 className="text-center"> Enquire Now</h4>
                            <div class="npf_wgts" data-height="350px" data-w="1222078993f709a639ec1d6ca2d2d084"></div>
                          </div>
                        </Col>

                      </Row>
                    </Container>
                  </div>
                </div>
              </div>

            </div>
          </section>


          <section className="intros py-5">
            <Container>
              <Row>
                <Col md="12">
                  <div className="max-800">

                    <div class="sec-title z-index-9"><h2 class="text-dark"> STUDY IN INDIA PROGRAM </h2>
                      <p class="text-dark"> We offer a unique opportunity for international students to experience India's diverse cultures while pursuing quality higher education under the Study in India program.</p></div>

                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section id="Abroad" className="student-voices bg-light">
            <Container>
              <Row>
                
                <Col md="6">
                  <div className="card-box">
                    <div className="StoriesData">
                      <h4> Eligibility to Host Foreign Students </h4>
                      <div className="hgContents">
                      <p> Shoolini University is eligible to host international students under the Study in India (SII) scholarship. This means we can provide quality education to international students from the Middle East, Africa, and SAARC countries. As an eligible institution under the program, we can offer courses ranging across undergraduate, postgraduate, and PhD through the SII portal to foreign students.  </p>
                      </div>
                    </div>

                    <div className="StoriesData mt-4">
                      <h4> Organise & Participate in Educational Activities in Certified Countries</h4>
                      <div className="hgContents">
                      <p> Under the Study in India program, the host institution is eligible to organise and participate in educational activities in all certified countries. At Shoolini University, we're proud to have this opportunity to connect with students and institutions from around the world.  </p>
                      </div>
                    </div>
              

                  </div>
                </Col>
                <Col md="6">
                  <div className="card-box p-0">
                    <img className="w-100 img-thumbnail" src="../../assets/images/Foreign.jpeg" />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>


          <section id="Abroad" className="student-voices bg-light">
            <Container>
              <Row>
              <Col md="6">
                  <div className="card-box p-0">
                    <img className="w-100 img-thumbnail" src="../../assets/images/offers.jpeg" />
                  </div>
                </Col>

                <Col md="6">
                  <div className="card-box">
                    <div className="StoriesData">
                      <h4> Scholarships Available</h4>
                      <div className="hgContents">
                      <p> Shoolini offers scholarships worth USD 3,500 per year per student under the Study in India program. The scholarship covers tuition fees, accommodation (room and boarding), and canteen costs. Study in India Scholarship is awarded based on the PRAGATII exam, a standardised online exam for students seeking scholarships under the program.  </p>
                      </div>
                    </div>

                    <div className="StoriesData mt-4">
                      <h4> Duration of Scholarships</h4>
                      <div className="hgContents">
                      <ul>
                            <li>   5 years for undergraduate integrated courses </li>
                            <li>3 or 4 years for undergraduate courses, according to the course duration </li>
                            <li> 2 years for postgraduate courses or till the completion of this course, whichever is lesser. </li>
                          </ul>
                       
                      </div>
                    </div>

                  </div>
                </Col>
               
              </Row>
            </Container>
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

       
            </Styles>

            <Footer />
            </Suspense>
    
    </>
  )
}

export default Blogs