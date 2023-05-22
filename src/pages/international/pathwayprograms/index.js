import React, { Suspense } from "react";
import HeaderTwo from '@/components/HeaderTwo'
import Head from "next/head";
import Styles from "../css/international-students";
import Footer from "@/components/Footer";
import BreadcrumbBox from "@/components/common/Breadcrumb";
import Image from "next/legacy/image";
import { Container, Row, Col, Dropdown } from 'react-bootstrap'
import Slider from "react-slick";
import { FiArrowRight } from "react-icons/fi";


const Pathwayprograms = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000
};


  return (
    <>
    
    <Suspense>
        <Head>
          <title>Pathway Program | Shoolini University</title>
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
                background: `url("https://shooliniuniversity.com/media/1653739181-biotech.jpg") center center no-repeat;`,
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


    <section classNAme="Introd">
        <div className="container">
            <div className="row">
              <div className="col-md-12"> 
            <div  class="sec-title text-center aos-init aos-animate"><h2><span>  2+2  </span> Study Abroad Program  </h2></div>
                <div className="introText">
                    <p>Under the 2+2 Study Abroad Program, students can enrol at Shoolini University and obtain a degree from a top foreign university. They get the opportunity to complete two years of their Four-Year Articulation Program in any of our partner universities. This also includes two years of work visa in the foreign country, paving way for Permanent Residency (PR). <br /><br />
  
Aspirants are required to study for two years at Shoolini University, before being transferred to a top-ranked international university of their choice for the next two years. They can complete the remaining credits and get the complete degree at the international university.    </p>
                </div>
                </div>
            </div>
        </div>
        </section>


        <section className="templateHeading highLights">
          <div className="container-fluid p-0">
            <div className="row m-0">
              <div className="col-md-4 p-0">
                <Image
                  width={506}
                  height={540}
                  className="w-100"
                  src="/assets/images/Facts.jpg"
                />
              </div>
              <div className="col-md-8 p-0">
                <div className="hgContent">
                  <div className="hgContentinner">
               
                    <div className="newData">
                    <div className="sec-title text-left"><h2 className="text-white mb-0">HighLights </h2></div>
                    <div className="newData"> 
                   <p> Part-time jobs during the program in the foreign university </p> 

                   <p>Two-year work visa after completion of degree.   </p> 

                   <p> Final degree granted by international university.  </p> 

                   <p> High chance of PR in the foreign country. </p> 

                   <p> Our partner universities:  </p> 
                  <ul className="pl-4"> 
                   <li>  Western Sydney University, Australia   </li> 
                   <li> University of Reading, UK  </li> 
                   <li> Sheffield Hallam University, UK  </li> 
                   <li> Taipei Medical University (Taiwan) </li> 
                   <li> Meiho University (Taiwan) </li> 
                   <li> British Columbia Institute of Technology  </li>
</ul></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      

       <section className="stories-area2 p-0 bg-area2">
                    <Container>
                        <Row>

                            <Col md="6">
                                <div className="StoriesData">
                                    <h4> Pre-requisites of the program:  </h4>
                                    <p className="m-0">- 6.5 CGPA with no backlogs. </p>

                                    <p className="m-0">- Language proficiency assessed by Shoolini University.  </p>

                                    <p className="m-0">- IELTS score of 6.5 with no bands less than 6.5 </p>
                                </div>
                               
                            </Col>
                            <Col md="6">
                                
                            </Col>

                        </Row>
                    </Container>
                </section>


       <section className="stories-area">
                    <Container>
                        <Row>
                            <Col md="6">
                                <div className="sec-title z-index-9">
                                    <h2 className="text-white">YOUR GATEWAY TO STUDY IN INDIA PROGRAM </h2>
                                    <p className="text-white"> We offer a unique opportunity for international students to experience India's diverse cultures while pursuing quality higher education under the Study in India program.

 </p>
                                </div>
                            </Col>
                            <Col className=" z-index-9" md="6">

                                <Slider {...settings}>
                                    <div className="sSLider">
                                        <div>
                                            <div className="StoriesData">
                                                <h4> Eligibility to Host Foreign Students  </h4>
                                                <p> Shoolini University is eligible to host international students under the Study in India (SII) scholarship. This means we can provide quality education to international students from the Middle East, Africa, and SAARC countries. As an eligible institution under the program, we can offer courses ranging across undergraduate, postgraduate, and PhD through the SII portal to foreign students.  </p>
                                               
                                            </div>
                                         
                                        </div>

                                        
                                    </div>

                                    <div className="sSLider">
                                        <div>
                                            <div className="StoriesData">
                                                <h4> Organise & Participate in Educational Activities in Certified Countries 
 </h4>
                                                <p> Under the Study in India program, the host institution is eligible to organise and participate in educational activities in all certified countries. At Shoolini University, we're proud to have this opportunity to connect with students and institutions from around the world.  </p>
                                               
                                            </div>
                                          
                                        </div>

                                        
                                    </div>

                                    <div className="sSLider">
                                        <div>
                                            <div className="StoriesData">
                                                <h4> Scholarships available

 </h4>
                                                <p> Shoolini offers scholarships worth USD 3,500 per year per student under the Study in India program. The scholarship covers tuition fees, accommodation (room and boarding), and canteen costs. Study in India Scholarship is awarded based on the PRAGATII exam, a standardised online exam for students seeking scholarships under the program </p>
                                               
                                            </div>
                                         
                                        </div>

                                        
                                    </div>

                                    
                                    <div className="sSLider">
                                        <div>
                                            <div className="StoriesData">
                                                <h4> Duration of scholarships 

 </h4>
                                                <p> Every student who has been offered the SII scholarship by the Study in India program shall receive it for a maximum period of: </p>
                                                <ul>
                                              <li>   5 years for undergraduate integrated courses </li>

                                              <li>3 or 4 years for undergraduate courses, according to the course duration </li>

                                              <li> 2 years for postgraduate courses or till the completion of this course, whichever is lesser. </li>
                                                </ul>
                                             <a className="joinBtn" href="#">  Join Us Today for a Diverse Learning Experience </a>  
                                            </div>
                                         
                                        </div>

                                        
                                    </div>


                                    

                                </Slider>


                                {/* <div data-aos="fade-up" className="StoriesData">
                                    <h4> Portable water Purifier </h4>
                                    <p> Learn how a Shoolini researcher’s innovation to provide clean drinking water is changing the world </p>
                                </div>
                                <Link className="iconArr" to="/"> <FiArrowRightCircle /> </Link> */}
                            </Col>

                        </Row>
                    </Container>
                </section>


            </Styles>

            <Footer />
            </Suspense>
    
    </>
  )
}

export default Pathwayprograms