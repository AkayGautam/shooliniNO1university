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
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


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



  var faculties = {
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
          <title>Dual Degree Program | Shoolini University</title>
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
                  background: `url("../assets/images/bg-international.jpg") center top no-repeat !important`,
                }}
              >
                <div className="slider-table">
                  <div className="slider-tablecell">
                    <Container>
                      <Row>
                        <Col md="12"></Col>
                        <Col md="6">

                        </Col>


                        <script type="text/javascript"> var s=document.createElement("script"); s.type="text/javascript"; s.async=true; s.src="https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s); </script>

                        <Col md="6">
                          <div className="resForm box">
                            <h4 className="text-center"> Enquire Now</h4>
                            <div className="npf_wgts" data-height="360px" data-w="6d8b3861db29e1675127d2f605d48a7a"></div>
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

                    <div className="sec-title z-index-9"><h2 className="text-dark">Dual Degree Program with <br />The University of Melbourne  </h2>
                      <p className="text-dark"> Shoolini University offers a dual degree BSc/B Tech program where students complete 2 years at our campus and the other two at The University of Melbourne. Students spend the last 2 years in the vibrant city of Melbourne. The program integrates four core disciplines of science — Physics, Chemistry, Mathematics, and Bio Sciences — into a common mandatory curriculum for all Year 1 {'&'} 2 students. <br /><br />
                        In Year 3 {'&'} 4,students can select subjects from a diverse choice of majors at The University of Melbourne.<br /><br />
                        Shoolini University is the No.1 Private University in India, and The University of Melbourne is the No.1 University in Australia.

                      </p></div>

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
                      <h4> What The University of Melbourne Delivers </h4>
                      <div className="hgContents">
                        <ul>
                          <li>   Awards a BSc Advanced (Honours) degree after 4th year</li>
                          <li> Curriculum design {'&'} development that runs at Shoolini for the first 2 years</li>
                          <li> Last 2 years conducted at The University of Melbourne campus  </li>
                          <li> Monitoring of learning outcomes and graduate attributes </li>
                        </ul>
                      </div>
                    </div>

                    <div className="StoriesData mt-4">
                      <h4> What Shoolini University Delivers</h4>
                      <div className="hgContents">
                        <ul>
                          <li> Selects {'&'} enrols students for The University of Melbourne program </li>
                          <li> Lectures, tutorials, practical classes, and on-site support provided for the first 2 years </li>
                          <li>  Ongoing assessments such as practical reports and essavs </li>
                          <li>  Awards a BSc/B Tech degree after 4th year </li>
                        </ul>
                      </div>
                    </div>


                  </div>
                </Col>
                <Col md="6">
                  <div className="card-box p-0">
                    <img className="w-100 img-thumbnail" src="../../assets/images/DJI_0230-scaled.jpg" />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>


          <section id="Abroad" className="student-voices bg-light">
            <Container>
              <Row>
                <Col md="6">
                  <div className="card-box StoriesData ">

                    <div className="StoriesData mt-4">
                      <h4> Semester Fee</h4>
                      <div className="hgContents">
                        <ul>
                          <li>  <strong> Years 1 {'&'} 2, Shoolini University: ₹8.2 lacs per annum </strong><br /> (including hostel, tuition fee, exam fee)<br />
                          5% increase in domestic tuition fee in 2nd year   </li>
                          <li>  <strong> Years 3 {'&'} 4, The University of Melbourne </strong>:<br /><a href="https://study.unimelb.edu.au/find/courses/undergraduate/bachelor-of-science-advanced-honours/fees/#nav" target="_blank"> Click Here</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <h4>Future-Ready Majors </h4>
                    <p> Students can choose subjects from a diverse range of majors like  </p>
                    <ul className="rageCourses">
                      <li> Biochemistry and Molecular Biology </li>
                      <li> Cell and Development Biology</li>
                      <li> Chemistry</li>
                      <li> Climate and Weather</li>
                      <li> Ecosystem Science</li>
                      <li>  Food Science</li>
                      <li> Geography</li>
                      <li> Physics</li>
                      <li>  Plant Science</li>
                      <li> Agriculture Science</li>
                      <li> Human Science</li>
                      <li> Zoology</li>
                      <li> Genetics</li>
                      <li> Data Science</li>
                      <li>  Neuroscience and more</li>
                    </ul>
                  </div>
                </Col>

                <Col md="6">
                  <div className="card-box">
                    <div className="StoriesData">
                      <h4>Key Facts</h4>
                      <div className="hgContents">
                        <ul>
                          <li>After completing their studies, Indian students will be awarded a BSc/B Tech from The University of Melbourne {'&'} Shoolini University </li>
                          <li>
                            Alternative Pathway for students who wish to make a selection from a diverse range of majors or complete further studies in Australia
                          </li>
                          <li> In addition, students will get a pathway into Masters of PhD Programs </li>
                        </ul>

                      </div>
                    </div>

                    <div className="StoriesData mt-4">
                      <h4> Eligibility</h4>
                      <p> Eligibility to get into Shoolini for years 1 & 2: 10+2 in any stream with mathematics & minimum 75% marks.</p>
                      <div className="hgContents">
                        <p> Conditions for transfer to The University of Melbourne at the end of the second year</p>
                        <ul>
                          <li>  IELTS band score 6.5 at end of year 2 at Shoolini University  </li>
                          <li>7.5 CGPA at the end of year 2 at Shoolini University </li>
                        </ul>
                      </div>
                    </div>


                  </div>
                </Col>

              </Row>
            </Container>
          </section>

          <section className="py-5 d-none">
            <Container>
              <div className="pagetitle text-center mb-4"><h2> Faculty </h2>
              </div>

              <Row>
              <Slider {...faculties}>
                <Col md="4">
                  <div className="blog-card redesign2">
                    <div className="cardImage">
                      <Image
                        width={304}
                        height={380}
                        variant="top"
                        src="https://shooliniuniversity.com/media/1610701948-Dr%20Sourabh%20kulshestra%20(2).JPG"
                        className="img-responsive card-img-top"
                      />
                    </div>
                    <div className="card-body pl-3 position-relative">
                      <h5 className="card-title">  Prof Sourabh Kulshreshtha   </h5>
                      <p className="m-0"><small> Program Director  </small></p>
                      <p className="designation"> Research {'&'} Development Dean </p>
                      <p className="card-text"><strong> 
                        Shoolini Univresity </strong>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="blog-card redesign2">
                    <div className="cardImage">
                      <Image
                        width={304}
                        height={380}
                        variant="top"
                        src="/"
                        className="img-responsive card-img-top"
                      />
                    </div>
                    <div className="card-body pl-3 position-relative">
                      <h5 className="card-title">  Prof Deborah King   </h5>
                      <p className="m-0"><small> Program Director India  </small></p>
                      <p className="designation"> Director Bachelor of Science Advanced (Honours) dual degree program   </p>
                      <p className="card-text"><strong> 
                      The University of Melbourne </strong>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="blog-card redesign2">
                    <div className="cardImage">
                      <Image
                        width={304}
                        height={380}
                        variant="top"
                        src="https://shooliniuniversity.com/media/1681195510-narendra.jpg"
                        className="img-responsive card-img-top"
                      />
                    </div>
                    <div className="card-body pl-3 position-relative">
                      <h5 className="card-title">  Prof Narendra Chirmule   </h5>
                      <p className="m-0"><small> Scientific Advisor {'&'} Mentor    </small></p>
                      <p className="designation"> Co-founder {'&'} CEO SymphonyTech Biologics    </p>
                      <p className="card-text"><strong> 
                      Shoolini Univesity   </strong>
                      </p>
                    </div>
                  </div>
                </Col>
                

                <Col md="4">
                  <div className="blog-card redesign2">
                    <div className="cardImage">
                      <Image
                        width={304}
                        height={380}
                        variant="top"
                        src="/"
                      />
                    </div>
                    <div className="card-body pl-3 position-relative">
                      <h5 className="card-title"> Prof Mohindra Singh Thakur    </h5>
                      <p className="m-0"><small>     </small></p>
                      <p className="designation"> School of Mechanical, Civil {'&'} Electrical Engineering     </p>
                      <p className="card-text"><strong> 
                      Shoolini Univesity   </strong>
                      </p>
                    </div>
                  </div>
                </Col>
 

                <Col md="4">
                  <div className="blog-card redesign2">
                    <div className="cardImage">
                      <Image
                        width={304}
                        height={380}
                        variant="top"
                        src="https://shooliniuniversity.com/media/1625568270-Narender%20Verma.jpeg"
                      />
                    </div>
                    <div className="card-body pl-3 position-relative">
                      <h5 className="card-title"> Prof Narinder Verma    </h5>
                      <p className="m-0"><small> Professor {'&'} Associate Dean- Academics    </small></p>
                      <p className="designation">    </p>
                      <p className="card-text"><strong> 
                      Shoolini Univesity   </strong>
                      </p>
                    </div>
                  </div>
                </Col>

                <Col md="4">
                  <div className="blog-card redesign2">
                    <div className="cardImage">
                      <Image
                        width={304}
                        height={380}
                        variant="top"
                        src="/"
                      />
                    </div>
                    <div className="card-body pl-3 position-relative">
                      <h5 className="card-title"> Lokendar Kumar      </h5>
                      <p className="m-0"><small> Associate Professor {'&'} Academic Incharge   </small></p>
                      <p className="designation"> School of Biotechnology     </p>
                      <p className="card-text"><strong> 
                      Shoolini Univesity   </strong>
                      </p>
                    </div>
                  </div>
                </Col>

                <Col md="4">
                  <div className="blog-card redesign2">
                    <div className="cardImage">
                      <Image
                        width={304}
                        height={380}
                        variant="top"
                        src="/"
                      />
                    </div>
                    <div className="card-body pl-3 position-relative">
                      <h5 className="card-title"> Anitya Gupta   </h5>
                      <p className="m-0"><small> Ramanujan Research Associate     </small></p>
                      <p className="designation"> Yogananda School of AI, Computers & Data Science       </p>
                      <p className="card-text"><strong> 
                      Shoolini Univesity   </strong>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="blog-card redesign2">
                    <div className="cardImage">
                      <Image
                        width={304}
                        height={380}
                        variant="top"
                        src="https://shooliniuniversity.com/media/1610703195-Neeraj%20(1).JPG"
                      />
                    </div>
                    <div className="card-body pl-3 position-relative">
                      <h5 className="card-title">Neeraj Gandotra    </h5>
                      <p className="m-0"><small> Associate Professor     </small></p>
                      <p className="designation"> Yogananda School of AI, Computers & Data Science       </p>
                      <p className="card-text"><strong> 
                      Shoolini Univesity   </strong>
                      </p>
                    </div>
                  </div>
                </Col>

                <Col md="4">
                  <div className="blog-card redesign2">
                    <div className="cardImage">
                      <Image
                        width={304}
                        height={380}
                        variant="top"
                        src="/"
                      />
                    </div>
                    <div className="card-body pl-3 position-relative">
                      <h5 className="card-title">Rozy Dhanta </h5>
                      <p className="m-0"><small> Associate Director      </small></p>
                      <p className="designation"> Office of International Affairs    </p>
                      <p className="card-text"><strong> 
                      Shoolini Univesity   </strong>
                      </p>
                    </div>
                  </div>
                </Col>


                <Col md="4">
                  <div className="blog-card redesign2">
                    <div className="cardImage">
                      <Image
                        width={304}
                        height={380}
                        variant="top"
                        src="/"
                      />
                    </div>
                    <div className="card-body pl-3 position-relative">
                      <h5 className="card-title"> Shikha Sood   </h5>
                      <p className="m-0"><small> Head of Outreach    </small></p>
                      <p className="designation">     </p>
                      <p className="card-text"><strong> 
                      Shoolini Univesity   </strong>
                      </p>
                    </div>
                  </div>
                </Col>

                </Slider>
              </Row>
            </Container>
          </section>















          <section id="Stories" className="student-voices">
            <div className="container">
              <div className="pagetitle text-center mb-4"><h2> Our Globetrotters </h2>
                <h5> All you need to know </h5>
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

          <section id="faqs" className="student-voices">
            <div className="container">
              <div className="pagetitle text-center mb-4">
                <h2> Frequently Asked Questions </h2>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="card-box acordianFaq">
                    <Accordion>

                      <AccordionItem>
                        {({ open }) => (
                          <>
                            <AccordionHeader>
                              <span
                                className={`accordion-title ${open ? "accordion-active" : ""
                                  }`}
                              >
                                What is the Shoolini University {'&'} The University of Melbourne Dual Degree Program and why is this program in high demand?
                              </span>
                            </AccordionHeader>

                            <AccordionBody>
                              <div className="accordion-body">
                                <p> The University of Melbourne (UoM), ranked Australia's #1 and 14th globally (QS World University Rankings 2024), partners with Shoolini University, India's No.1 Private University. In this unique dual-degree program, students complete the first two years at Shoolini University before transitioning to UoM for the final two years, gaining world-class international education while staying close to home initially.  </p>
                                <p>  The program is unique as: </p>
                                <ul>
                                  <li> Students in India will study the UoM curriculum, taught by faculty trained by UoM faculty in a two-year residential program.  </li>

                                  <li>  They will save on tuition fees as the fee in India for the first two years is approximately one-third of the UoM international tuition fee. Additionally, they'll save on boarding and lodging costs for two years.   </li>

                                  <li>  By studying locally, students also can mature academically and personally, gaining a deeper understanding of applied education before transferring as a group for further success overseas.   </li>

                                  <li>  Students will receive mentorship or co-teaching from international faculty at Shoolini University, ensuring a high-quality education experience.   </li>

                                  <li>  Our infrastructure and technology mirror the University of Melbourne, a testament to our commitment to providing a world-class education. Shoolini University has built a separate building with new classrooms and collaborative spaces.   </li>

                                  <li>  Unlike other dual-degree programs in the country, a separate set of best teachers and researchers have been hired to teach the cohort of students under this program, at Shoolini University.  </li>
                                </ul>
                              </div>
                            </AccordionBody>
                          </>
                        )}
                      </AccordionItem>
                      <AccordionItem>
                        {({ open }) => (
                          <>
                            <AccordionHeader>
                              <span
                                className={`accordion-title ${open ? "accordion-active" : ""
                                  }`}
                              >
                                Is this a dual degree or twinning arrangement?
                              </span>
                            </AccordionHeader>

                            <AccordionBody>
                              <div className="accordion-body">
                                <p> This is a dual-degree program where students receive two degrees upon completing four years of study. They will earn a B.Sc. Advanced Honours from The University of Melbourne. Additionally, they have the option to either receive a BSc (Hons) or B Tech from Shoolini University. The University of Melbourne degree: Bachelor of Science Advanced (Honours) - abbreviated as BSc Adv. (Hons) is a four-year program of 400 credit points in The University of Melbourne system. It consists of:    </p>
                                <ul>
                                  <li> 200 points of Advanced Standing for the two years of BSc (Blended) syllabus completed in India, and </li>

                                  <li>200 points for the two years of study completed at The University of Melbourne </li>

                                  <li> Degree from Shoolini University: Shoolini University awards an equivalent degree based on a reciprocal credit recognition, i.e.: </li>

                                  <li> The two years of BSc (Blended) syllabus completed in India, and </li>

                                  <li> Advanced Standing for the two years of study completed at The University of Melbourne  </li>
                                </ul>
                              </div>
                            </AccordionBody>
                          </>
                        )}
                      </AccordionItem>

                      <AccordionItem>
                        {({ open }) => (
                          <>
                            <AccordionHeader>
                              <span
                                className={`accordion-title ${open ? "accordion-active" : ""
                                  }`}
                              >
                                What are the University Rankings for The University of Melbourne and Shoolini University?
                              </span>
                            </AccordionHeader>

                            <AccordionBody>
                              <div className="accordion-body">
                                <p>The University of Melbourne (UoM) is ranked as Australia’s #1 University and #14th in the world as per QS World University Rankings 2024. Shoolini University is ranked India’s #1 Private University as per QS World University Rankings 2024. For more rankings, visit the following links on The University of Melbourne and Shoolini University websites.    </p>
                                <p>UoM
                                  <a href="https://www.unimelb.edu.au/" target="_blank">
                                    https://www.unimelb.edu.au/
                                  </a>
                                </p>
                                <p>Shoolini University
                                  <a href="https://shooliniuniversity.com/" target="_blank">
                                    https://shooliniuniversity.com/
                                  </a>
                                </p>

                              </div>
                            </AccordionBody>
                          </>
                        )}
                      </AccordionItem>

                      <AccordionItem>
                        {({ open }) => (
                          <>
                            <AccordionHeader>
                              <span
                                className={`accordion-title ${open ? "accordion-active" : ""
                                  }`}
                              >
                                What are the eligibility criteria for admission?
                              </span>
                            </AccordionHeader>

                            <AccordionBody>
                              <div className="accordion-body">
                                <p>Given the academic rigour at the University of Melbourne and Shoolini University, this program has a higher bar for entry.  </p>
                                <ul>
                                  <li>  Condition for entry into year 1 {'&'} 2: Completion of 10+2 in any science stream* (preferably with Mathematics). For minimum scores in CBSE, State Board, ISC, IB, GCE A Levels, refer Appendix 1 and English Language Proficiency through IELTS/PTE/TOEFL/others**  </li>
                                  <li>
                                    Condition for transfer to UoM in year 3: CGPA of 7.5 or higher by the end of 2nd year, and English Language Proficiency through IELTS/PTE/TOEFL/others** </li>
                                </ul>

                              </div>
                            </AccordionBody>
                          </>
                        )}
                      </AccordionItem>


                      <AccordionItem>
                        {({ open }) => (
                          <>
                            <AccordionHeader>
                              <span
                                className={`accordion-title ${open ? "accordion-active" : ""
                                  }`}
                              >
                                Is Math mandatory?
                              </span>
                            </AccordionHeader>

                            <AccordionBody>
                              <div className="accordion-body">
                                <p>It is not mandatory to have Mathematics as a subject in +2. However, students who have not studied Math in +2 must enroll in UoM’s online, 6-week bridge program for Mathematics. The approximate cost of the same will be AUD 900. Apart from the online, UoM synchronous lectures, Shoolini University mathematics professors will hold regular tutorials to help students master the subject.  </p>


                              </div>
                            </AccordionBody>
                          </>
                        )}
                      </AccordionItem>


                      <AccordionItem>
                        {({ open }) => (
                          <>
                            <AccordionHeader>
                              <span
                                className={`accordion-title ${open ? "accordion-active" : ""
                                  }`}
                              >
                                What are the exit pathways in this dual-degree program?
                              </span>
                            </AccordionHeader>

                            <AccordionBody>
                              <div className="accordion-body">
                                <p>The University of Melbourne policy requires students to complete at least 50% of their study at Melbourne. Consequently, students in B.Sc. Adv. (Hons) program must complete both Years 3 and 4 to be awarded the University of Melbourne degree, i.e., there is no exit pathway with a University of Melbourne degree at the end of year 3.

                                  If a student who completes Years 1 and 2 in India is unable to transfer to Melbourne due to personal or other circumstances, Shoolini University will offer the below exit options:  </p>
                                <ul>
                                  <li>  Internal transfer to Shoolini University’s in-house program to complete a three-year BSc or 4-year BSc (Hons) or 4-year BTech degree.  </li>
                                  <li>
                                    External transfer to another institution to complete a degree of that institution (e.g. a B.Sc. degree in other universities in the UK, USA, Australia, or others).  </li>
                                  <li> Exit with a two-year Diploma qualification from Shoolini University.  </li>
                                </ul>

                              </div>
                            </AccordionBody>
                          </>
                        )}
                      </AccordionItem>

                      <AccordionItem>
                        {({ open }) => (
                          <>
                            <AccordionHeader>
                              <span
                                className={`accordion-title ${open ? "accordion-active" : ""
                                  }`}
                              >
                                How can I apply for this program?
                              </span>
                            </AccordionHeader>

                            <AccordionBody>
                              <div className="accordion-body">
                                <p>To apply for this dual-degree program, visit <a href="https://shooliniuniversity.com/"> https://shooliniuniversity.com/</a>. In the course dropdown, select ‘undergraduate’ and in the specialization tab, select ‘University of Melbourne (Dual Degree)’. Click on Apply Now tab and fill in your details.
                                </p>

                                <p>
                                  Once done, you will get an e-mail on your registered email ID and will be prompted to electronically fill your application, pay your application fee, and submit/upload required documents. Upon receiving your application fee and all required documents, you will hear from us on taking the online test for this program and further schedule of an interview with Dean Research at Shoolini University. </p>


                              </div>
                            </AccordionBody>
                          </>
                        )}
                      </AccordionItem>


                      <AccordionItem>
                        {({ open }) => (
                          <>
                            <AccordionHeader>
                              <span
                                className={`accordion-title ${open ? "accordion-active" : ""
                                  }`}
                              >
                                Can I meet with faculty members or advisors before applying?
                              </span>
                            </AccordionHeader>

                            <AccordionBody>
                              <div className="accordion-body">
                                <p>Yes, prospective students can meet with faculty members or academic advisors to discuss program requirements, research opportunities, and academic interests. Shoolini University campus is open for on-campus visits Mon-Sat, 9AM–5PM.  </p>


                              </div>
                            </AccordionBody>
                          </>
                        )}
                      </AccordionItem>

                      <AccordionItem>
                        {({ open }) => (
                          <>
                            <AccordionHeader>
                              <span
                                className={`accordion-title ${open ? "accordion-active" : ""
                                  }`}
                              >
                                What is the application deadline for the upcoming intake?
                              </span>
                            </AccordionHeader>
                            <AccordionBody>
                              <div className="accordion-body">
                                <p>The first cohort will only have an intake of 30 students. Therefore, it is best to fill out the application at the earliest, but before 15th June 2024. It is important to check the university's official website or contact the admissions office for the most accurate information.   </p>
                              </div>
                            </AccordionBody>
                          </>
                        )}
                      </AccordionItem>

                      <AccordionItem>
                        {({ open }) => (
                          <>
                            <AccordionHeader>
                              <span
                                className={`accordion-title ${open ? "accordion-active" : ""
                                  }`}
                              >
                                Are any scholarships available for international students in the sciences program?
                              </span>
                            </AccordionHeader>
                            <AccordionBody>
                              <div className="accordion-body">
                                <p>The fees for the first two years at the Shoolini University campus are already subsidised. It is our commitment as India’s research university to offer this transformational opportunity to students from India and the SAARC nations. There are no scholarships available for the first two years at Shoolini University.

                                  However, UoM offers various scholarships for international students. You will be required to visit the UoM website – <a href="https://scholarships.unimelb.edu.au/"> https://scholarships.unimelb.edu.au/ </a>  </p>
                              </div>
                            </AccordionBody>
                          </>
                        )}
                      </AccordionItem>

                      <AccordionItem>
                        {({ open }) => (
                          <>
                            <AccordionHeader>
                              <span
                                className={`accordion-title ${open ? "accordion-active" : ""
                                  }`}
                              >
                                Are there any internship or co-op opportunities available?
                              </span>
                            </AccordionHeader>
                            <AccordionBody>
                              <div className="accordion-body">
                                <p>Shoolini University encourages students to undertake internships opportunities through their flagship “earn while you learn” program. You can contact the Student Support Team at Shoolini University for more details.  <br />
                                  For accessing internship opportunities at UoM as an international student, we encourage you to reach out to their student support teams – <a href="https://students.unimelb.edu.au/student-support/international-student-support"> https://students.unimelb.edu.au/student-support/international-student-support </a>  </p>
                              </div>
                            </AccordionBody>
                          </>
                        )}
                      </AccordionItem>

                      <AccordionItem>
                        {({ open }) => (
                          <>
                            <AccordionHeader>
                              <span
                                className={`accordion-title ${open ? "accordion-active" : ""
                                  }`}
                              >
                                How do I know if I will be accepted by University of Melbourne after two years?
                              </span>
                            </AccordionHeader>
                            <AccordionBody>
                              <div className="accordion-body">
                                <p>You will get a conditional letter of acceptance from The University of Melbourne at the very onset of the program. The letter will mention your acceptance into their program based on your academic performance or minimum GPA requirement at Shoolini University in the first two years, among other conditions. You will be accorded 100% credits for prior learning at our university. Based on that and other transfer conditions, you will be eligible to transfer after two years.
                                  <br /><br />
                                  You may transfer by fulfilling the specified pathway requirements and obtaining your study permit from the appropriate visa authorities.
                                  <br /><br />
                                  Shoolini University will facilitate filing your study permit request with the competent visa/immigration authorities. However, it's important to note that we have no control or influence over the decision of visa authorities regarding your study permit application. For more information on study permits, you can refer to the official website of the Australian government: https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500    </p>

                                <p> Other requirements:  </p>
                                <p> Other requirements:  </p>
                                <ul>
                                  <li> Get approval from your department and complete the application form   </li>

                                  <li> Demonstrate your ability to support your stay overseas through a financial plan   </li>

                                  <li> Satisfy host institution and country entry requirements   </li>

                                  <li> Be a good ambassador for SHOOLINI UNIVERSITY  </li>
                                </ul>

                              </div>
                            </AccordionBody>
                          </>
                        )}
                      </AccordionItem>

                      <AccordionItem>
                        {({ open }) => (
                          <>
                            <AccordionHeader>
                              <span
                                className={`accordion-title ${open ? "accordion-active" : ""
                                  }`}
                              >
                                Can I transfer after one year of study at Shoolini University?
                              </span>
                            </AccordionHeader>
                            <AccordionBody>
                              <div className="accordion-body">
                                <p>This program is designed as a dual-degree program which means that Shoolini University can initiate your transfer to UoM only after the completion of two years of study with us.  </p>
                              </div>
                            </AccordionBody>
                          </>
                        )}
                      </AccordionItem>

                      <AccordionItem>
                        {({ open }) => (
                          <>
                            <AccordionHeader>
                              <span
                                className={`accordion-title ${open ? "accordion-active" : ""
                                  }`}
                              >
                                What is the Program structure for 4 years?
                              </span>
                            </AccordionHeader>
                            <AccordionBody>
                              <div className="accordion-body">
                                <p>Year 1 and Year 2 Program:  </p>
                                <ul>
                                  <li> Licensed Syllabus is mandatory for all students. </li>
                                  <li> In addition, students must complete one English language (or other language or culture) subject (based on IELTS) in each of Year 1 and Year 2. These will be credited towards the Melbourne requirements for breadth study.  </li>
                                  <li>
                                    The majority of the curriculum for years 1 and 2 is mandatory for all students. This includes:
                                    <ul>
                                      <li> the lecture course content for math, physics, chemistry, and biology.  </li>
                                      <li> six practical classes in each of physics, chemistry, and biology.  </li>
                                      <li> one computation subject in each of years 1 and 2.  </li>
                                      <li> one English language (or other language or culture) subject (based on IELTS). </li>
                                    </ul>
                                  </li>
                                </ul>
                                <p> Time allocated as flexible timetabling can be used by Shoolini University at discretion & may include extra practical in areas of student’s major discipline or institutional specialty, or extra discipline subjects.  </p>
                                <p> Year 3 and Year 4 Program:  </p>
                                <ul>
                                  <li> 1 subject = 12.5 credit points  </li>
                                  <li> Each year Level consists of 100 credit points (=8 subjects)  </li>
                                  <li> Students typically study four subjects per main semester in Melbourne, but some subjects may be available over the shorter winter and summer semesters.  </li>
                                  <li> Students must complete a Major (4×12.5 credit point subjects) selected from those available in the Melbourne Bachelor of Science for which the Program Students have completed the prerequisite study. This may mean that some Majors available to Bachelor of Science students may not be available to Program Students without some additional Level 2 study.  </li>
                                  <li> 2×12.5cp subjects chosen from Level 3 science electives to meet the requirements of 75 points Level 3 science electives (combined with 50pt major above)  </li>
                                  <li>  2×25cp subjects chosen from Level 2/3 subjects available as breadth in the Melbourne Bachelor of Science.  </li>
                                  <li> 75 credit points chosen from a range of Level 9 subjects for which the Program Student has completed the prerequisite study. These subjects will be cognate with the student's Major. </li>
                                  <li> In some instances, and with permission of the Program Director, Program Students may replace up to 25cp of Level 9 study with additional Level 3 study to expand their knowledge base in preparation for further study.  </li>
                                  <li> A minor thesis research project component (normally 10,000-12,000 words).  </li>
                                  <li> To complete the degree, students must complete 400 credit points in total, including the Partner Year 1 {'&'} Year 2 Program.  </li>
                                </ul>
                              </div>
                            </AccordionBody>
                          </>
                        )}
                      </AccordionItem>

                      <AccordionItem>
                        {({ open }) => (
                          <>
                            <AccordionHeader>
                              <span
                                className={`accordion-title ${open ? "accordion-active" : ""
                                  }`}
                              >
                                How much will I need to pay for my education under this dual-degree program?
                              </span>
                            </AccordionHeader>
                            <AccordionBody>
                              <div className="accordion-body">
                                <p>The annual fee at Shoolini University, including Tuition, hostel & exam fee is INR 8.2 lacs for year 1, INR 8.6 lacs for year 2 (5% annual increase in fee). Additionally, in case the student has not studied mathematics in +2, they will be required to enroll in UoM’s online, 6-weeks bridge program for mathematics. The approximate cost of the same will be AUD 900.
                                  <br /><br />
                                  The tuition fees at UoM are subject based, which means you’ll pay according to subjects you are studying, not your degree. The exact cost of your degree depends on the type and number of subjects you take. The current tuition fees for international students can be viewed on the link below: http://go.unimelb.edu.au/6nv8
                                  <br /><br />
                                  Please note that while UoM offers various scholarships for international students, you will be required to visit the UoM website and actively seek them and apply for the same. For more details visit the following link: https://scholarships.unimelb.edu.au/
                                  <br /><br />
                                  There are a range of expenses (other than the tuition fee) that you will need to be mindful of when budgeting for your overseas study. These may include:  </p>
                                <ul>
                                  <li>Comprehensive Travel & Health insurance fees  </li>
                                  <li> Flights and in-country transport costs </li>
                                  <li> Accommodation (on or off-campus) fees  </li>
                                  <li> Daily living expenses  </li>
                                  <li> Spending money  </li>
                                </ul>
                              </div>
                            </AccordionBody>
                          </>
                        )}
                      </AccordionItem>


                      <AccordionItem>
                        {({ open }) => (
                          <>
                            <AccordionHeader>
                              <span
                                className={`accordion-title ${open ? "accordion-active" : ""
                                  }`}
                              >
                                How does a student pay for fees – e.g. is it per semester. What is UoM fee payment cycle?
                              </span>
                            </AccordionHeader>
                            <AccordionBody>
                              <div className="accordion-body">
                                <p>Fees are payable per subject before the study period's start date (e.g. Semester 1 or Semester 2). Accordingly, fees are usually payable twice per year. If preferred, students can request to pay their fees for each semester in dual installments (two equal payments a few weeks apart).
                                  <br /><br />
                                  For information about international student fees, please refer to the links below:  </p>
                                <ul>
                                  <li>  ask.unimelb: FAQ/Paying international tuition fees </li>
                                  <li> Fees and payments-undergraduate study-international applications (unimelb.edu.au) </li>
                                </ul>
                              </div>
                            </AccordionBody>
                          </>
                        )}
                      </AccordionItem>


                      <AccordionItem>
                        {({ open }) => (
                          <>
                            <AccordionHeader>
                              <span
                                className={`accordion-title ${open ? "accordion-active" : ""
                                  }`}
                              >
                                Can I work while studying?
                              </span>
                            </AccordionHeader>
                            <AccordionBody>
                              <div className="accordion-body">
                                <p> Can I work while studying?
                                  <br />
                                  Please note the following:
                                </p>
                                <ul>
                                  <li> In Australia, you can work up to 40 hours every 2-week period once your course starts </li>
                                  <li> You can work full-time if you are on a scheduled break, such as winter and summer holidays, or a fall or spring trimester break. </li>
                                  <li>
                                    You must be a full-time student both before and after the break to work full-time.
                                  </li>
                                </ul>
                                <p> You cannot work during the break that comes before you start your very first school semester in Australia.  </p>
                              </div>
                            </AccordionBody>
                          </>
                        )}
                      </AccordionItem>


                      <AccordionItem>
                        {({ open }) => (
                          <>
                            <AccordionHeader>
                              <span
                                className={`accordion-title ${open ? "accordion-active" : ""
                                  }`}
                              >
                                Is residence/hostel available at Shoolini University?
                              </span>
                            </AccordionHeader>
                            <AccordionBody>
                              <div className="accordion-body">
                                <p>The first two years of this dual-degree program at Shoolini University are fully residential. The annual fee quoted includes the cost of boarding and lodging. For Australia, you can explore the following links:    </p>
                                <ul>
                                  <li> https://study.unimelb.edu.au/student-life/cost-of-living  </li>
                                </ul>
                                <p> Further, there is a comprehensive page that captures information called STOP1. This is a support service for new students and very useful information can be found here.  </p>
                                <ul>
                                  <li> https://students.unimelb.edu.au/student-support/advice-and-help/stop-1  </li>
                                </ul>
                              </div>
                            </AccordionBody>
                          </>
                        )}
                      </AccordionItem>

                      <AccordionItem>
                        {({ open }) => (
                          <>
                            <AccordionHeader>
                              <span
                                className={`accordion-title ${open ? "accordion-active" : ""
                                  }`}
                              >
                                When and how can I apply for an education loan?
                              </span>
                            </AccordionHeader>
                            <AccordionBody>
                              <div className="accordion-body">
                                <p>You can apply for an education loan once you have the offer letter from the partner university. The offer letter is a document that you can provide as a supporting document to the bank while applying for Education loan.   </p>
                              </div>
                            </AccordionBody>
                          </>
                        )}
                      </AccordionItem>

                      <AccordionItem>
                        {({ open }) => (
                          <>
                            <AccordionHeader>
                              <span
                                className={`accordion-title ${open ? "accordion-active" : ""
                                  }`}
                              >
                                Is visa guaranteed?
                              </span>
                            </AccordionHeader>
                            <AccordionBody>
                              <div className="accordion-body">
                                <p> Visa cannot be guaranteed by SHOOLINI or by the host university. Generally, if applicants have filled the application properly and have furnished the right documents then visa acceptance rates are very high.   </p>
                              </div>
                            </AccordionBody>
                          </>
                        )}
                      </AccordionItem>

                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="appendex">
            <div className="container">
              <div classname="row">
                <div className="col-md-12">
                  <div className="tabsAppen">
                    <Tabs>
                      <TabList>
                        <Tab>Appendix 1</Tab>
                        <Tab>Appendix 2</Tab>
                      </TabList>

                      <TabPanel>
                        <div className="table cardTable table-responsive">
                          <table class="table table-striped">
                            <thead>
                              <tr>
                                <th scope="col">Qulaification</th>
                                <th scope="col">Entryscore</th>
                                <th scope="col">Specific prerequisite requirements</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td> CBSE All India Senior School Certificate (AISSC) </td>
                                <td> 75 </td>
                                <td> CBSE All India Senior School Certificate (AISSC)
                                  75 English, Mathematics and one of Biology,
                                  Chemistry or Physics. To calculate a nal
                                  average, you should determine the average of
                                  your best four nal-year subjects. </td>
                              </tr>

                              <tr>
                                <td> Indian State Board
                                  Examinations (Three Indian
                                  State Board Examinations are
                                  accepted as a direct entry
                                  pathway: Tamil Nadu Higher
                                  Secondary Certificate (HSC),
                                  Maharashtra State Board of
                                  Secondary and Higher
                                  Secondary Education Higher
                                  (Secondary) School
                                  Certificate and Karnataka
                                  Pre-University Certificate.) </td>
                                <td> 80 </td>
                                <td> English, Mathematics and one of Biology,
                                  Chemistry or Physics. To calculate a final
                                  average, you should determine the average of
                                  your best four final-year subjects </td>
                              </tr>

                              <tr>
                                <td> CISCE Indian School
                                  Ceritcate (ISC) </td>
                                <td> 75 </td>
                                <td> English, Mathematics and one of Biology,
                                  Chemistry or Physics. To calculate a nal
                                  average, you should determine the average of
                                  your best four nal-year subjects. </td>
                              </tr>

                              <tr>
                                <td> International Baccalaureate
                                  (IB) diploma </td>
                                <td> 31 </td>
                                <td> A minimum grade of 4 in either Applications and
                                  interpretations HL, Analysis and approaches SL,
                                  or Analysis and approaches HL. A minimum
                                  grade of 4 in one of Biology, Chemistry or
                                  Physics at HL or SL. For students with English as
                                  their second language a pass in English B at the
                                  required level will be accepted as satisfying the
                                  English prerequisite. Except where specied, IB
                                  subjects must be passed to at least Grade 4
                                  Standard or Higher Level. </td>
                              </tr>

                              <tr>
                                <td> GCE A Level </td>
                                <td> BCC </td>
                                <td> Mathematics, one of Biology, Chemistry and
                                  Physics, and an approved A or AS Level English
                                  subject; or Both Mathematics and Fuher
                                  Mathematics, and an approved A or AS Level
                                  English subject. A minimum of three A Levels is
                                  required and a grade of at least C is required in
                                  prerequisite subjects unless otherwise specied.
                                  Approved GCE AS and A Level English subject
                                  are: General Paper, General Studies, English
                                  Language and Literature, English Literature,
                                  English Language. Singapore A Level subject
                                  Knowledge and Enquiry (H2) is also accepted. A
                                  grade of at least C is required to meet the
                                  University’s English language requirements. </td>
                              </tr>

                            </tbody>
                          </table>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className="cardTable pt-4">
                          <p> English Language Requirement Prior to transitioning to the University of Melbourne, students will
                            need to demonstrate English Language Proficiency at one of the following levels:  </p>

                          <p> <strong> TOEFL: </strong> Internet-based test (including TOEFL iBT at Home):
                            Total score of at least 79 and scores of 21 for writing, 18 for speaking, 13 for reading and 13 for
                            listening. To submit your scores when you apply, use our TOEFL Institution Code: 0974.Please note
                            that we don't accept the revised TOEFL paper-delivered test. </p>

                          <p> <strong> IELTS: </strong>
                            Total score of at least 6.5 in the Academic International English Language Testing System (IELTS),
                            with no bands less than 6.0. To submit your scores when you apply, please inform your testing
                            centre that you want your results to be released to the University of Melbourne. This can be done
                            on the day of your test. </p>
                          <p> <strong> Pearson Test of English Academic (including PTE Academic Online): </strong>
                            Overall score of at least 58 and no PTE communicative skills score below 50. To submit your scores
                            when you apply, please inform Pearson that you want your results shared with the University of
                            Melbourne. </p>

                          <p> <strong> Cambridge English, Advanced/Certificate in Advanced English (CAE): </strong>
                            Cambridge English Score of at least 176 with no skill below 169 </p>

                          <p> <strong> C2 Proficiency (previously called Cambridge English: Proficiency (CPE) examination) </strong>
                            Cambridge English Score of at least 180 with no skill below 180. </p>


                        </div>
                      </TabPanel>
                    </Tabs>
                  </div>
                </div>
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