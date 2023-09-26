import React, { Component } from 'react';
import Header from '@/components/Header.js';
import { Styles } from "./styles/coursedemo.js";
import Slider from "react-slick";
import Footer from '@/components/Footer.js';



class Coursedemo extends Component {

  render() {

 
    var settings = {
      dots: false,
      infinite: false,
      arrows: true,
      autoplay: false,
      speed: 500,
      autoplaySpeed: 2100,
      slidesToShow: 5,
      slidesToScroll: 1,
    };
    var setting = {
      dots: false,
      infinite: false,
      arrows: true,
      autoplay: false,
      speed: 500,
      autoplaySpeed: 2100,
      slidesToShow: 4,
      slidesToScroll: 1,
    };


    return (
      <>
        <Header />

        <Styles>
          {/* Main Wrapper */}
          <div className="main-wrapper about-page">


            <section className="new-header aiml-new__header js-section-track" data-track="top-banner" id="bg-image" data-init="true" data-exit="true">
              <div className="container">
                <div className="row">

                  <div className="col-md-6">
                    <div className="header-content text-left">

                      <h1 className="banner-heading-aiml">School of Pharmaceutical Sciences </h1>
                      <h3 className="banner-subheading-aiml">MPharmacy - Pharmaceutical Chemistry</h3>
                      <p className="mb-0 small-font"><strong> Eligibility :</strong>   B Pharmacy From An Institution Approved By The Pharmacy Council Of India With Minimum 55% Marks</p>
                      <ul>
                        <li>Duration : 12 Months</li>
                        <li>Admission Criteria</li>
                      </ul>


                      <div className="button-section non-js-btns " id="top-banner-button-section">
                        <div className="lc-btn-section">

                          <a href="javascript:void(0)" className="grey-transparent-button btn-style fixed-size-btn track-click-mp">
                            Apply Now
                          </a>
                        </div>


                        <div className="application-btn-section">

                          <a href="/pg-program-artificial-intelligence-course/registration" className="btn primary-button  btn-style fixed-size-btn track-click-mp" data-title="Top Banner"> Download Brochure </a>


                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="play-btn-area">
                      <div className="video-play-button" data-gl-target="experienceModal" data-videoid="oxqhi57t0w">
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="featureDiv">
              <div className="container">
                <div className="row">
                  <div className="col-md-5">

                    <img src="https://www.chitkara.edu.in/wp-content/uploads/2022/01/50907607067_26aa1f7cc6_ka.jpg" className="img-fluid" alt="Culinary Arts Chitkara University" />
                  </div>
                  <div className="col-md-7">
                    <div className="fDiv">
                      <div className="couIcon"><img src="https://www.chitkara.edu.in/wp-content/themes/chitkara/images/schools/icons/icon-park-outline_degree-hat.png" className="webIcon" /></div>
                      <div className="couCont">
                        <p>
                          <b><img className="mobIconLP" src="https://www.chitkara.edu.in/images/2021/icons/icn1a.png" />Course Duration</b>
                        </p>
                        <ul>
                          <li>2 Years of intensive learning at Shoolini University’s campus.</li>
                          <li>1 year of mandatory industrial exposure training spread over 2 stints during the course of the program.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="fDiv">
                      <div className="couIcon"><img src="https://www.chitkara.edu.in/wp-content/themes/chitkara/images/schools/icons/handicon.png" className="webIcon" /></div>
                      <div className="couCont">
                        <p>
                          <b><img className="mobIconLP" src="https://www.chitkara.edu.in/images/2021/icons/icn2a.png" />Internship Opportunity</b>
                        </p>
                        <p>Students undergo 2 stints of industrial training, one which gives them exposure in all operational departments &amp; second for department specific training in their chosen area of specialisation.</p>
                      </div>
                    </div>
                    <div className="fDiv">
                      <div className="couIcon"><img src="https://www.chitkara.edu.in/wp-content/themes/chitkara/images/schools/icons/campus-recruitment.png" className="webIcon" /></div>
                      <div className="couCont">
                        <p>
                          <b><img className="mobIconLP" src="https://www.chitkara.edu.in/images/2021/icons/icn3a.png" />Campus Recruitment</b>
                        </p>
                        <p>Assured placement in top Hotel brands and best international chains, cruises and QSR (Quick Service Restaurants) &amp; Retail companies.</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <section className="fac-mentor">
              <div className="container">
                <div className="pagetitle"> 
                 <h3 class="text-left heading-left mb-0">Top Faculty  </h3>
                 <p> Learn from leading academicians in the field of Artificial Intelligence and Machine Learning and several experienced industry practitioners from top organisations. </p>
                 </div>
                <div className="mentorss">
                  <Slider {...settings}>
                    <div> 
                    <div className="fac-mem">
                      <div className="fac-img">
                        <img src="https://shooliniuniversity.com/media/1662635734-Anjali.jpg" />
                      </div>
                      <div className="fac-list">
                        <h5>Anjali Kaushal </h5>
                        <p> Associate Professor </p>
                      </div>
                    </div>
                    </div>
                    <div> 
                    <div className="fac-mem">
                      <div className="fac-img">
                        <img src="https://shooliniuniversity.com/media/1662635734-Anjali.jpg" />
                      </div>
                      <div className="fac-list">
                        <h5> Anjali Kaushal </h5>
                        <p> Associate Professor </p>
                      </div>
                    </div>
                    </div>
                    <div> 
                    <div className="fac-mem">
                      <div className="fac-img">
                        <img src="https://shooliniuniversity.com/media/1662635734-Anjali.jpg" />
                      </div>
                      <div className="fac-list">
                        <h5> Anjali Kaushal </h5>
                        <p> Associate Professor </p>
                      </div>
                    </div>
                    </div>

                    <div> 
                    <div className="fac-mem">
                      <div className="fac-img">
                        <img src="https://shooliniuniversity.com/media/1662635734-Anjali.jpg" />
                      </div>
                      <div className="fac-list">
                        <h5> Anjali Kaushal</h5>
                        <p> Associate Professor </p>
                      </div>
                    </div>
                    </div>

                    <div> 
                    <div className="fac-mem">
                      <div className="fac-img">
                        <img src="https://shooliniuniversity.com/media/1662635734-Anjali.jpg" />
                      </div>
                      <div className="fac-list">
                        <h5> Anjali Kaushal </h5>
                        <p> Associate Professor </p>
                      </div>
                    </div>
                    </div>
                    <div> 
                    <div className="fac-mem">
                      <div className="fac-img">
                        <img src="https://shooliniuniversity.com/media/1662635734-Anjali.jpg" />
                      </div>
                      <div className="fac-list">
                        <h5> Anjali Kaushal </h5>
                        <p> Associate Professor </p>
                      </div>
                    </div>
                    </div>

                  </Slider>
                </div>
              </div>
            </section>

            <section className="overview">
              <div className="container">

                {/* <h3 class="text-center heading-left">Designed for working professionals like you</h3> */}
                <div className="row">
                  <div className="col-md-4">
                    <div className="circulum">
                      <div className="curriculum-template__head">
                        <div className="curriculum-head-container curriculum-left left-fixed">
                          <h2 className="curriculum-head__title">
                            Comprehensive Curriculum
                          </h2>
                          <p className="curriculum-head__subtitle">The curriculum has been designed by faculty from Great Lakes and UT Austin McCombs School of Business. </p>

                          <div className="curriculum-button-block lc-btn-section">
                            <a className="primary-button w-100 feeBtn btn-style text-center track-click-mp" href="javascript:void(0)">
                            Semester Fee
                            </a>
                          </div>
                          <div className="curriculum-button-block lc-btn-section">
                            <a className="primary-button btn-style w-100 text-center track-click-mp" href="javascript:void(0)">
                              Download Curriculum
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-8">
                    <div className="overview-dta">
                      <h4> Overview </h4>
                      <p> MPharmacy (Pharmaceutical Chemistry) is a postgraduate degree that delves on designing new drug molecules based on various drug design approaches. Students learn to implement and understand advanced and basic concepts of the chemistry of drug molecules with respect to their design, synthesis as well as their physicochemical characterisation. </p>
                      <p> The program focuses on theoretical concepts pertaining to medicinal, organic and plant chemistry. It also comprises wet lab practices and practical exposure. Students learn to handle various sophisticated instrumentations such as HPLC, FT-IR, UV, GC. The university has 104+ state-of-the-art specialist laboratories that allow students to work in an environment that is conducive to innovation and research. </p>
                      <p> The experienced and illustrious faculty at Shoolini guides and motivates students to achieve their dreams and reach the zenith of their potential. Students find placements in top companies. </p>
                      <p> MPharmacy at Shoolini is AICTE and PCI approved, ranked 36th among Pharmacy Colleges in India (NIRF Ranking).  </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="fac-mentor feedbacksection mb-5">
              <div className="container">
                <div className="pagetitle"> 
                 <h3 class="text-left heading-left mb-0">Learner Feedback on Mentorship  </h3>
                 <p> Learn from leading academicians in the field of Artificial Intelligence and Machine Learning and several experienced industry practitioners from top organisations. </p>
                 </div>
                <div className="mentorss">
                  <Slider {...setting}>
                    <div> 
                    <div className="fac-mem">
                      <div className="fac-img">
                        <img src="https://shooliniuniversity.com/media/1652337165-Uttam%20Joon%20(M%20Pharmacy).png" />
                      </div>
                      <div className="fac-list">
                        <h5> Uttam Joon </h5>
                        <p> M Pharmacy </p>
                      </div>
                      <div className="feedback">
                        <p> Shoolini University has contributed immensely to shaping my personality. I have developed leadership and team management skills, taking them to an all-new level. The infrastructure on the campus is one of the finest and stands out in the entire country. The best thing here is the cross-culture interaction between students from various parts of the world. The learned and globally acclaimed professors have made the university what it is today.</p>
                      </div>
                    </div>
                    </div>
                    <div> 
                    <div className="fac-mem">
                      <div className="fac-img">
                        <img src="https://shooliniuniversity.com/media/1652337165-Uttam%20Joon%20(M%20Pharmacy).png" />
                      </div>
                      <div className="fac-list">
                        <h5> Uttam Joon </h5>
                        <p> M Pharmacy </p>
                      </div>
                      <div className="feedback">
                        <p> Shoolini University has contributed immensely to shaping my personality. I have developed leadership and team management skills, taking them to an all-new level. The infrastructure on the campus is one of the finest and stands out in the entire country. The best thing here is the cross-culture interaction between students from various parts of the world. The learned and globally acclaimed professors have made the university what it is today.</p>
                      </div>
                    </div>
                    </div>
                    <div> 
                    <div className="fac-mem">
                      <div className="fac-img">
                        <img src="https://shooliniuniversity.com/media/1652337165-Uttam%20Joon%20(M%20Pharmacy).png" />
                      </div>
                      <div className="fac-list">
                        <h5> Uttam Joon </h5>
                        <p> M Pharmacy </p>
                      </div>
                      <div className="feedback">
                        <p> Shoolini University has contributed immensely to shaping my personality. I have developed leadership and team management skills, taking them to an all-new level. The infrastructure on the campus is one of the finest and stands out in the entire country. The best thing here is the cross-culture interaction between students from various parts of the world. The learned and globally acclaimed professors have made the university what it is today.</p>
                      </div>
                    </div>
                    </div>

                    <div> 
                    <div className="fac-mem">
                      <div className="fac-img">
                        <img src="https://shooliniuniversity.com/media/1652337165-Uttam%20Joon%20(M%20Pharmacy).png" />
                      </div>
                      <div className="fac-list">
                        <h5> Uttam Joon </h5>
                        <p> M Pharmacy </p>
                      </div>
                      <div className="feedback">
                        <p> Shoolini University has contributed immensely to shaping my personality. I have developed leadership and team management skills, taking them to an all-new level. The infrastructure on the campus is one of the finest and stands out in the entire country. The best thing here is the cross-culture interaction between students from various parts of the world. The learned and globally acclaimed professors have made the university what it is today.</p>
                      </div>
                    </div>
                    </div>

                    <div> 
                    <div className="fac-mem">
                      <div className="fac-img">
                        <img src="https://shooliniuniversity.com/media/1652337165-Uttam%20Joon%20(M%20Pharmacy).png" />
                      </div>
                      <div className="fac-list">
                        <h5> Uttam Joon </h5>
                        <p> M Pharmacy </p>
                      </div>
                      <div className="feedback">
                        <p> Shoolini University has contributed immensely to shaping my personality. I have developed leadership and team management skills, taking them to an all-new level. The infrastructure on the campus is one of the finest and stands out in the entire country. The best thing here is the cross-culture interaction between students from various parts of the world. The learned and globally acclaimed professors have made the university what it is today.</p>
                      </div>
                    </div>
                    </div>
                    <div> 
                    <div className="fac-mem">
                      <div className="fac-img">
                        <img src="https://shooliniuniversity.com/media/1652337165-Uttam%20Joon%20(M%20Pharmacy).png" />
                      </div>
                      <div className="fac-list">
                        <h5> Uttam Joon </h5>
                        <p> M Pharmacy </p>
                      </div>
                      <div className="feedback">
                        <p> Shoolini University has contributed immensely to shaping my personality. I have developed leadership and team management skills, taking them to an all-new level. The infrastructure on the campus is one of the finest and stands out in the entire country. The best thing here is the cross-culture interaction between students from various parts of the world. The learned and globally acclaimed professors have made the university what it is today.</p>
                      </div>
                    </div>
                    </div>

                  </Slider>
                </div>
              </div>
            </section>



            <section className="overview">
              <div className="container">

                {/* <h3 class="text-center heading-left">Designed for working professionals like you</h3> */}
                <div className="row">
                  <div className="col-md-4">
                    <div className="circulum">
                      <div className="curriculum-template__head">
                        <div className="curriculum-head-container curriculum-left text-left left-fixed">
                          <h4 className="font-18 text-left">
                          MPharmacy - Pharmaceutical Chemistry Career Opportunities
                          </h4>
                          <ul className="opp-list">
                            <li> Formulation Development (F&D) Scientist </li>
                            <li> Quality Control and Quality Assurance Executives </li>
                            <li> DRA Authorities </li>
                            <li> Academia & Higher Studies </li>
                            <li> Entrepreneurship </li>
                            <li> Production Officer (Pharma/Cosmetics/Nutraceuticals Industry) </li>

                          </ul>
                          <h4 className="font-18 text-left"> Research Opportunities </h4> 
<p className="font-14"> Natural Products/ Synthetic-based Drug Discovery: Phytochemical evaluation and Standardizations of medicinal plants, Ayurvedic or other formulations; Medicinal Chemistry and Drug Discovery Research. </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-8">
                    <div className="overview-dta">
                      
                    </div>
                  </div>
                </div>
              </div>
            </section>
            

          </div>
        </Styles>

        <Footer />
      </>
    )
  }
}

export default Coursedemo