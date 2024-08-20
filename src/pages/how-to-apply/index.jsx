import React, { Suspense, useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Styles } from '../../components/common/styles/header'
import Styless from './style/about'
import Footer from '../../components/Footer'
import Head from 'next/head' 
import Link from "next/link";
import Search from '@/components/common/Search'
import Image from "next/legacy/image";
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });




const setting = {
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToScroll: 1,
 autoplay: true,
 slidesToShow: 2,
  arrows: true,
  row: 1,
  autoplaySpeed: 1500,

  responsive: [
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        mobileFirst: true,
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
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Admissions = (props) => {

  let result_about = props?.aboutdata

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);  
  
  useEffect(() => {
    var s = document.createElement("script"); s.type="text/javascript"; s.async=true; s.src="https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s);
   
  }, []);
 
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };



 
  return (
    <Suspense
      fallback={
        <div className="loading">
          <div className="lds-dual-ring"></div>
        </div>
      }
    >
      <Head>
        <title>Admissions 2024 | Shoolini University | Apply Now</title>
        <meta name="description" content="Secure your future at Shoolini University, India's No.1 Private University. Apply now for Admissions 2024 and embark on your journey to success!"  />
        <meta name="keywords" content="Admissions 2024, shoolini admissions, shoolini courses, apply now, shoolini admissions open 2024, shoolini university, best university in india" /> 
      </Head>
      
      <Styles>
        <Styless>
          {/* Main Wrapper */}
 
          <div className="main-wrapper about-page">
            {/* Header 2 */}
        
            <Styles>
              {/* About Us */}
              {/* <section className="about-us">
                  <img className="w-100" src="assets/images/admissionLp.jpg" />
              </section> */}
 
  

           <section className={`logo-area main-menu`}>
        <div className="container">
          <Row>
            <Col xs="2">
              <div className="logo">
                <Link href="/">
                  <img alt="Shoolini University" src="assets/images/f-logo.png" />
                </Link>
              </div>
            </Col>

            <Col xs="10">
              <div className="main-menu-box">
                <div className="menu-box d-flex justify-content-end">
                  <ul className="nav menu-nav">
               
                            <li className="nav-item dropdown" > 
                              <a href="#Ranking" className="nav-link dropdown-toggle">Ranking </a>
                             </li>
                          
                             <li className="nav-item dropdown" > 
                              <a  href="#Programs" className="nav-link dropdown-toggle">Programs </a>
                             </li>
                             <li className="nav-item dropdown" > 
                              <a href="#Testimonials" className="nav-link dropdown-toggle">Testimonials </a>
                             </li>
                     

                  </ul>
                
                 
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
              <section id="home" className="bannerLp py-5">
                <Container>
                    <Row>
                        <Col md="7">
                            <div className="lpText">
                                <h1 className="display-text"> Discover<br /> Your best <br />at Shoolini </h1>
                                <img alt="Shoolini is No.1 Private University in India" className="w-100" src="assets/images/rankingLp.jpg" />
                            </div>
                        </Col>
                        <Col md="5">
                        <div  className="card-box">
                                      <h3 className="title-red">
                                      
                                      Shoolini Admission Form 2024
                                      </h3>
                                      
                                      <section className="npf_wgts" data-height="400px" data-w="b7a96773936817725d0a4442d6310f28"></section>
                                     
                                      {/* <form method="post" enctype="multipart/form-data" 
                                        className="form-card">
                                        <fieldset className="form-fieldset">
                                       <div className="form-element form-input">

                                            <input type='text' id='FirstName' name='FirstName'
                                              maxlength='100' autocomplete='off'
                                              required='required' className="form-element-field"
                                              placeholder="Name " />
                                            <div className="form-element-bar"></div>
                                            <label className="form-element-label"
                                              for='FirstName'>Enter Name *</label>
                                          </div>

                                          <div className="form-element form-input">
                                            <input id='EmailAddress'
                                              name='EmailAddress' maxlength='100'
                                              autocomplete='off' required='required'
                                              className="form-element-field" placeholder=" "
                                              type="email" />
                                            <div className="form-element-bar"></div>
                                            <label className="form-element-label"
                                              for='EmailAddress'>Enter Email Address *</label>

                                          </div>


                                          <div className="form-element form-input">
                                            <input type='text' id='Phone' name='Phone'
                                              maxlength='10' autocomplete='off'
                                              required='required' className="form-element-field"
                                              placeholder="Number" />
                                            <div className="form-element-bar"></div>
                                            <label className="form-element-label" for='Phone'>Enter
                                              Phone Number *</label>

                                          </div>


                                          <div className="form-element form-input">
										<select
                                              maxlength='100' autocomplete='off'
                                              required='required' className="form-element-field"
                                              placeholder="Name " >
                                              <option value="1"> Undergraduate</option>
                                              <option value="1"> Graduate</option>
                                              <option value="1"> Doctoral</option>
                                              <option value="1"> online</option>
                                            </select>
                                            <div className="form-element-bar"></div>
                                            <label className="form-element-label"
                                              for='FirstName'>Select COurse *</label>
                                          </div>

                                          <div className="form-checkbox form-checkbox-inline">
                                            <label for='mx_I_Agree_1'
                                              className="form-checkbox-label">
                                              <input type='checkbox' id='mx_I_Agree_1' className="form-checkbox-field"
                                                name='mx_I_Agree_1' value='1'
                                              />
                                              <i className="form-checkbox-button"></i>
                                              <span>I agree to the Terms {'&'} Conditions</span>
                                            </label>
                                          </div>

                                        </fieldset>


                                        <div className="form-actions">
                                          <button id="form-submit-button" type="submit"
                                            className="form-btn">Apply Now</button>

                                        </div>

                                      </form> */}


                                    </div>
                        </Col>
                    </Row>
                </Container>
              </section>

              <section  id="Ranking" className="py-5">
                <Container>
                  <Row>
                    <Col md="6">
                        <div className="all_ranking mb-4">
                            <div className="rankLine">
                            QS World University Rankings® 2025
                            </div>
                           <Row>
                              <Col xs="6">
                                  <div className="rankSide">
                                      <div className="number">
                                          1
                                      </div>
                                      <div className="numbrs-text">
                                          <h4>
                                          Private <br />University <br />in India
                                          </h4>
                                        
                                      </div>
                                  </div>
                              </Col>
                              
                              <Col xs="6">
                              <div className="rankSide">
                                      <div className="number">
                                          1
                                      </div>
                                      <div className="numbrs-text">
                                          <h4>
                                          Private <br />University <br />in India
                                          </h4>
                                          <p>
                                          Citations Per Faculty
                                          </p>
                                      </div>
                                  </div>
                              </Col>
                           </Row>

                           <div className="rankLine">
                           THE World University Rankings 2024
                            </div>
                           <Row>
                              <Col xs="6">
                                  <div className="rankSide">
                                      <div className="number">
                                          1
                                      </div>
                                      <div className="numbrs-text">
                                          <h4>
                                          University <br />in India
                                          </h4>
                                          <p>
                                          International Outlook
                                          </p>
                                      </div>
                                  </div>
                              </Col>
                              
                              <Col xs="6">
                                  <div className="rankSide">
                                      <div className="number">
                                          1
                                      </div>
                                      <div className="numbrs-text">
                                          <h4>
                                          In Engineering <br />In India
                                          </h4>
                                          <p>
                                          Pvt. University
                                          </p>
                                      </div>
                                  </div>
                              </Col>
                           </Row>
                           <div className="rankLine">
                           NIRF India Rankings® 2023
                            </div>
                            <p className="text-center"> Ministry of Education, GoI </p>
                           <Row>
                        
                              
                              <Col md="12">
                                  <div className="rankSide justify-content-center">
                                      <div className="number">
                                         73
                                      </div>
                                      <div className="numbrs-text">
                                          <h4 className="otherRank">
                                           In India
                                          </h4>
                                          <p>
                                          among  all universities
                                          </p>
                                      </div>
                                  </div>
                              </Col>
                           </Row>
                        </div>
                    </Col>

                    <Col md="6">
                        <div classame="right-card mt-xs-5">
                            <div className="titlePage">
                                <h2> Top Placements </h2>
                                <p> in 250+ Companies, including </p>
                            </div>

                            <p> <img alt="TOP PLACEMENTS
" className="w-100" src="assets/images/logosLp.jpg"  /> </p>


                            <div className="titlePage mt-5">
                                <h2> world class faculty </h2> 
                            </div>
                            <p className="md-text"> From world’s Top 1% organizations like <strong> McKinsey, PwC, HSBC,
Citi IBM, Microsoft,</strong> and illustrious institutions like <strong>IIT, IIM, ISB, IISc, Oxford, Stanford, Cambridge, UC Berkeley,</strong> and more.</p>
                        </div>
                      </Col>
                  </Row>
                </Container>
              </section>

              {/* <section>
                <img className="w-100" src="assets/images/showcaseLp.jpg" />
              </section> */}

              <section id="Showcase">
                  <div className="custom-flex">
                      <div className="colm-1 custom-d-none">
                      <img className="w-100" alt="Shoolini Campus Life" src="assets/images/showcase1.jpg" />
                      </div>
                      <div className="colm-1 position-relative ">
                        <h2 className="bestBuck"> best <br />bang for <br />the buck <br />university <br />in india <span><img alt="World University Rankings by THE" src="assets/images/qs-lp.png" /> </span> </h2>
                      <img className="w-100" alt="Shoolini is Best Bang For Buck University in India" src="assets/images/showcase2.jpg" />
                      </div>
                      <div className="colm-1 custom-d-none">
                      <img className="w-100" alt="Shoolini's Research Labs" src="assets/images/showcase3.jpg" />
                      </div>
                  </div> 
              </section>

<section id="Programs" className="pt-md-5 pb-5">
  <Container> 

  <div className="titlePage">
                                <h2> Programs </h2> 
                            </div>

    <Row>
      <Col md="12">
      <Tabs>
    <TabList>
      <Tab>Undergraduate </Tab>
      <Tab>Postgraduate </Tab>
      <Tab>PhD </Tab>
      <Tab>Online Courses </Tab>
    </TabList>
    <div className="tabBox"> 
    <TabPanel>
      
    <div className="row mt-3 courseTabination">
                                          <div className="col-md-3 border-rt">
                                        

                                            <h4>BIOTECHNOLOGY </h4>
                                            <ul className="subMenus">
                                              <li>  	B Tech Biotechnology   </li>
                                              <li>    BSc (Hons) Biotechnology  </li>
                                             
                                            </ul>
                                            <h4>  BSc (Hons) Dual Degree With The University Of Melbourne  </h4>
                                            <h4>   B Tech (SUMMIT RESEARCH PROGRAM)    </h4>
                                            <h4>LIBERAL ARTS </h4>
                                            <ul className="subMenus">
                                              <li> 	BA (Hons) with Specialisations   </li>
                                            </ul>

                                            <h4>HOSPITALITY </h4>
                                            <ul className="subMenus">
                                              <li>  	BSc Hospitality and Hotel Administration  </li>
                                            </ul>

                                            <h4>Pharmacy </h4>
                                            <ul className="subMenus">
                                              <li>  	B Pharmacy   </li>
                                            
                                            </ul>
                                        
                                          </div>

                                          <div className="col-md-3 border-rt">
                                            <h4>MANAGEMENT </h4>
                                            <ul className="subMenus">
                                         
                                              <li>   B Com (Hons)  </li>
                                              <li> 	BBA (General)   </li>
                                              <li>  	BBA with Specialisations   </li>
                                            </ul>


                                            <h4>MEDIA STUDIES </h4>
                                            <ul className="subMenus">
                                              <li> 	BA Journalism and Mass Communication  </li>
                                            </ul>
                                            <h4>NUTRITION </h4>
                                            <ul className="subMenus">
                                              <li>  	BSc (Hons) Nutrition and Dietetics  </li>
                                            </ul>

                                            <h4>AGRICULTURE </h4>
                                            <ul className="subMenus">
                                              <li>  	BSc (Hons) Agriculture  </li>
                                              
                                            </ul>
                                         

                                            <h4>CORE ENGINEERING </h4>
                                            <ul className="subMenus">
                                              <li>  	B Tech Civil Engineering with Specialisations  </li>
                                             
                                            </ul>


                                          </div>
                                          <div className="col-md-3 border-rt">
                                            <h4>COMPUTER SCIENCE </h4>
                                            <ul className="subMenus">
                                              <li>  	B Tech Artificial Intelligence   </li>
                                              <li>  	B Tech CSE with Specialisations  </li>
                                              <li>  BCA with Specialisations  </li>
                                            
                                            </ul>

                                            <h4>MICROBIOLOGY </h4>
                                            <ul className="subMenus">
                                              <li>  	BSc (Hons) Microbiology  </li>
                                            </ul>


                                            <h4>BIO INFORMATICS </h4>
                                            <ul className="subMenus">
                                              <li>  	B Tech Bioinformatics   </li>
                                         
                                            </ul>

                                            <h4>LEGAL STUDIES </h4>
                                            <ul className="subMenus">
                                              <li>  	BALLB   </li>
                                              <li> 	LLB   </li>
                                            </ul>
                                            <h4>Yoga </h4>
                                            <ul className="subMenus">
                                              <li>  	BA/ BSc (Hons) Yoga   </li>
                                            </ul>


                                          </div>

                                          <div className="col-md-3">
                                            <h4>FOOD TECH </h4>
                                            <ul className="subMenus">
                                              <li>  	B Tech Food Technology   </li>
                                              <li>  	BSc (Hons) Food Technology    </li>
                                   
                                            </ul>

                                            <h4>PSYCHOLOGY</h4>
                                            <ul className="subMenus">
                                              <li>  	BA/ BSc (Hons) with specialisations   </li>
                                          
                                            </ul>
                                            <h4>Design </h4>
                                            <ul className="subMenus">
                                              <li> B Design   </li>
                                             
                                            </ul>
                                           
                                            <h4>Science</h4>
                                            <ul className="subMenus">
                                              <li> 	BSc (Hons)  </li>
                                              <li> 	BA (Hons) Mathematics   </li>
                                            
                                            </ul>
                                       
                                          </div>
 
                                        </div>
 
    </TabPanel>
    <TabPanel>
    <div className="row mt-3">
                                          <div className="col-md-3 border-rt">
                                            <h4>BIOTECHNOLOGY </h4>
                                            <ul className="subMenus">
                                              <li>  	MSc Biotechnology  </li>
                                              <li>  	M Tech Biotechnology     </li>
                                            </ul>

                                            <h4>Engineering</h4>
                                            <ul className="subMenus">
                                              <li> 	M Tech Civil    </li> 
                                            </ul>

                                            <h4>LIBERAL ARTS </h4>
                                            <ul className="subMenus">
                                              <li> 	MA with Specialisations  </li> 
                                            </ul>


                                            <h4>MEDIA STUDIES </h4>
                                            <ul className="subMenus">
                                              <li> 	MA Journalism {'&'} Mass Communication   </li>
                                            </ul>

                                            <h4>LEGAL STUDIES </h4>
                                            <ul className="subMenus">
                                              <li> 	LLM  </li>
                                            </ul>
                                           
                                           
                                          </div>

                                          <div className="col-md-3 border-rt">

                                          <h4>Computer Science</h4>
                                            <ul className="subMenus">
                                              <li> 	MCA with Specialisations   </li>
                                              <li>   M Tech CSE   </li>
                                              <li>   MSc Data Science   </li>
                                             

                                            </ul>


                                            <h4>MANAGEMENT </h4>
                                            <ul className="subMenus">
                                              <li>  	MBA with Specialisations </li>
                                            </ul>

                                            <h4>NUTRITION </h4>
                                            <ul className="subMenus">
                                              <li>   MSc Nutrition and Dietetics   </li>
                                            </ul>


                                            <h4>Yoga </h4>
                                            <ul className="subMenus">
                                              <li> 		MA / MSc Yoga  </li>
                                            </ul>
                                          </div>
                                          <div className="col-md-3 border-rt">


                                            <h4>AGRICULTURE </h4>
                                            <ul className="subMenus">
                                              <li> 	MSc Agriculture (Agronomy)  </li>
                                              <li>  	MSc Agriculture Genetics {'&'} Plant Breeding  </li>
                                            </ul>
                                            <h4>Science</h4>
                                            <ul className="subMenus">
                                              <li> 	MSc Botany   </li>
                                              <li>  	MSc Zoology  </li>
                                              <li> 	MA Mathematics   </li>
                                              <li> 	MSc Physics   </li>
                                              <li>  	MSc Chemistry   </li>
                                            </ul>
                                          </div>

                                          <div className="col-md-3">
                                            <h4>FOOD TECH </h4>
                                            <ul className="subMenus">
                                              <li>  	MSc Food Technology   </li>
                                              <li>  M Tech Food Technology   </li>
                                            </ul>

                                            <h4>PSYCHOLOGY</h4>
                                            <ul className="subMenus">
                                              <li>  	MA/ MSc with Specialisations    </li>
                                            </ul>
                                            <h4>Pharmacy</h4>
                                            <ul className="subMenus">
                                              <li>  	M Pharmacy Pharmaceutical Chemistry   </li>
                                              <li> 	M Pharmacy Pharmaceutics  </li>
                                              <li>  	M Pharmacy Pharmacology  </li>

                                            </ul>
                                            
                                          </div>

                                        </div>
                                    
    </TabPanel>
    
    <TabPanel>
    <div className="row mt-3">
                                          <div className="col-md-3 border-rt">
                                            <ul className="subMenus">
                                              <li>  	PhD Biotechnology   </li>
                                              <li>  	PhD Economics   </li>
                                              <li> 	PhD Env Science    </li> 
                                              <li>  PhD Legal Sciences  </li>
                                              <li>  	PhD Microbiology   </li> 
                                              
                                              <li>  PhD Mathematics   </li>
                                              <li>  	PhD Pharma   </li> 
                                            </ul>

                                          </div>
                                          <div className="col-md-3 border-rt">
                                            <ul className="subMenus">
                                              <li>   PhD Disaster Management   </li>
                                              <li>   PhD English  </li>
                                              <li>  PhD Genetics   </li>
                                              <li>   PhD Journalism  </li>
                                              <li> PhD Mechanical   </li>
                                              <li>  PhD Psychology   </li> 

                                              <li>  	PhD Physics   </li>
                                              <li>  	PhD Water Management    </li> 

                                            </ul>
                                          </div>

                                          <div className="col-md-3 border-rt">

                                            <ul className="subMenus">
                                              <li> PhD Botany    </li>
                                              <li>   PhD ECE  </li>
                                              <li>  	 PhD Food Technology   </li>
                                              <li>  PhD History   </li>
                                              <li>  PhD Management  </li>
                                              <li>   PhD Political Science  </li> 
                                              <li>   PhD Zoology  </li>

                                              <li>  	PhD Yoga   </li>
                                              <li> 	PhD Data Sciences   </li> 

                                            </ul>

                                          </div>
                                          <div className="col-md-3">

                                            <ul className="subMenus">
                                              <li>  	 PhD Civil    </li>
                                              <li>   PhD Energy   </li> 
                                              <li>   PhD Human Resource   </li>
                                              <li>  	 PhD Mass Communication    </li>
                                              
                                              <li> 	PhD CSE    </li>
                                              <li>  	PhD Chemistry    </li> 

                                            </ul>
                                          </div>

                                        </div>
                                      
    </TabPanel>
    <TabPanel>
                                        <div className="row mt-3">
                                          <div className="col-md-4 border-rt">
                                            <ul className="subMenus">
                                              <li>   MBA (Master of Business Administration)    </li>
                                              <li>  	BA (Journalism and Mass Communication)     </li>
                                            </ul>
                                          </div>

                                          <div className="col-md-4 border-rt">
                                            <ul className="subMenus">
                                              <li> 	MA (English Literature)    </li>
                                              <li> 	Bachelor of Computer Applications      </li>
                                            </ul>
                                          </div>
                                          <div className="col-md-4">
                                            <ul className="subMenus">
                                              <li>  	BBA (Bachelor of Business Administration)    </li>
                                            </ul>
                                          </div>


                                        </div>
                                       
                                      </TabPanel>
                                    
</div>
  </Tabs>
  
      </Col>
    </Row>
  </Container>
</section>

              <section className="bg-white" id="Testimonials">
                  <Container>
                      <Row>
                          <Col md="12">
                          <div className="">
                    <div className="col-md-12">
                      <div
                        id="hiring"
                        className="student-voices"
                      >
                        <div className="py-5">

                        <div class="titlePage"><h2> Student Voices </h2> </div>

                          <div className="row">
                          <div className="mentorss">
                <Slider {...setting}>
                 
                      
                <div id="testimonial-slider" className="owl-carousel">
                    <div className="testimonial">
                        <div className="testimonial-content">
                            <div className="testimonial-icon">
                                <i className="fa fa-quote-left"></i>
                            </div>
                            <div className="discr"> 
                            <div className="t_image">
                              <img alt="Agrima Sood" src="https://shooliniuniversity.com/media/1704967831-Agrima.jpeg" />
                            </div>
                            <div className="dicCard"> 
                            <h3 className="title">Agrima Sood</h3> 
                            <p className="description">
                            As the first Biotechnology university in India, Shoolini offers <strong> research-based programs </strong> that foster learning, <strong>personal growth</strong>, and meaningful connections. Engaging with passionate professors, participating in <strong>stimulating discussions</strong>, and exploring various interests have contributed to a sense of accomplishment and fulfilment for me. It's a place where one can genuinely feel valued and inspired. 
                            </p>
                            </div>
                        </div>
                        </div>
                       
                    </div>

                    </div>  
                           
                <div id="testimonial-slider" className="owl-carousel">
                    <div className="testimonial">
                        <div className="testimonial-content">
                            <div className="testimonial-icon">
                                <i className="fa fa-quote-left"></i>
                            </div>
                            <div className="discr"> 
                            <div className="t_image">
                              <img alt="Sugandhi Ranote" src="https://shooliniuniversity.com/media/1705300464-Aayushi.jpeg" />
                            </div>
                            <div className="dicCard"> 
                            <h3 className="title">Aayushi Sharma</h3>
                            <p className="description">
                            The <strong>Centers of Excellence</strong> at Shoolini are a haven for <strong>advanced research</strong>. As a Biotech student, I've had the unique opportunity to delve into cutting-edge studies, guided by <strong>expert mentors</strong>. The <strong>state-of-the-art facilities </strong>and <strong>collaborative environment</strong> have profoundly enhanced my research skills, preparing me for a promising future in the scientific community. Shoolini truly is a hub of <strong>innovation and learning</strong>.
                            </p>
                        </div>
                        </div></div>
                         
                    </div>

                    </div> 
                          
                <div id="testimonial-slider" className="owl-carousel">
                    <div className="testimonial">
                        <div className="testimonial-content">
                            <div className="testimonial-icon">
                                <i className="fa fa-quote-left"></i>
                            </div>
                            <div className="discr"> 
                            <div className="t_image">
                              <img alt="Kartik Sharma" src="https://shooliniuniversity.com/media/1707719924-Kartik%20.png" />
                            </div>
                            <div className="dicCard"> 
                            <h3 className="title">Kartik Sharma</h3> 
                            <p className="description">
                            Shoolini campus nurtured my focus on personal goals and encouraged me to extend my boundaries. <strong>The faculty</strong>, through their unwavering support, provided abundant <strong>learning opportunities</strong>, particularly in <strong>Computer Science and Engineering (CSE)</strong>, fostering my growth into a <strong>proficient professional</strong>. I am grateful for the invaluable experiences gained and eagerly anticipate Shoolini's continued progress and success in the field of education. 
                            </p>
                        </div>
                        </div>
                        </div>
                       
                    </div>

                    </div> 

                            
                <div id="testimonial-slider" className="owl-carousel">
                    <div className="testimonial">
                        <div className="testimonial-content">
                            <div className="testimonial-icon">
                                <i className="fa fa-quote-left"></i>
                            </div>
                            <div className="discr"> 
                            <div className="t_image">
                              <img src="https://shooliniuniversity.com/media/1652342384-Sugandhi.jpeg" />
                            </div>
                            <div className="dicCard"> 
                            <h3 className="title">Sugandhi Ranote</h3> 
                            <p className="description">
                            I got ample <strong>industry exposure</strong> at Shoolini University through participation in <strong>projects & live assignments</strong>. By enhancing my <strong>leadership skills</strong> and being meticulous in my approach, I got a <strong>Gold medal</strong> & got placed at <strong>VARITE India</strong>.</p>
                        </div>
                        </div>
                        </div>
                      
                    </div>

                    </div> 
                    
                            
                <div id="testimonial-slider" className="owl-carousel">
                    <div className="testimonial">
                        <div className="testimonial-content">
                            <div className="testimonial-icon">
                                <i className="fa fa-quote-left"></i>
                            </div>
                            <div className="discr"> 
                            <div className="t_image">
                              <img alt="Shubham" src="https://shooliniuniversity.com/assets/images/subham.jpg" />
                            </div>
                            <div className="dicCard"> 
                            <h3 className="title">Shubham </h3> 
                            <p className="description">
                            Shoolini's curriculum, <strong>faculty from top institutions</strong>, and emphasis on <strong>practical skills</strong> have been instrumental in shaping my career path. The university's commitment to <strong>industry exposure</strong> played a pivotal role in my success. 
                            </p>
                        </div>
                        </div>
                        </div>
                       
                    </div>

                    </div> 
                 
                </Slider>

                {/* <div className="all-rev-btn">
                  <Link className="AppyBtn" href="/testimonials"> All Reviews </Link>
                </div> */}
              </div>
                         
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                          </Col>
                      </Row>
                  
                  </Container>
              </section>


{/* 
              <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <button className="closebtn" onClick={handleClose} > x </button>
          <DialogContentText id="alert-dialog-slide-description">
            <div class="npf_wgts" data-height="420px" data-w="d095e55a1f298e67da8279133413215f"></div>
          </DialogContentText>
        </DialogContent>
      </Dialog> */}
      
              <section className="applySection py-5">
            <Container>
              <Row>
                <Col md="8">
                  <div className="application-deadline">

                    <div className="grid">
                      <div className="text-wrapper">
                        <h2 className="heading-left mb-0">
                          Still have Queries? Contact Us
                        </h2>
                        <p>Please fill in the form and an expert from the admissions office will call you in the next 4 working hours.</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="application-deadline text-right">

                    <button className=" AppyBtn"  onClick={handleClickOpen} >Download Brochure </button>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

            </Styles>

 <footer>
   <div className="text-center">
   Copyright ©2024 Shoolini Foundation of Life Sciences and Business Management

   </div>
 </footer>

          </div>
        </Styless> 
      </Styles>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <button className="closebtn" onClick={handleClose} > x </button>
          <DialogContentText id="alert-dialog-slide-description">
            <div class="npf_wgts" data-height="420px" data-w="d095e55a1f298e67da8279133413215f"></div>
          </DialogContentText>
        </DialogContent>
      </Dialog>

      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton> 
        </Modal.Header>
        <Modal.Body> <div class="npf_wgts" data-height="400px" data-w="d095e55a1f298e67da8279133413215f"></div>
       

        </Modal.Body>
        <Modal.Footer>
 
          
        </Modal.Footer>
      </Modal> */}

    </Suspense>
  )
}

export default Admissions
