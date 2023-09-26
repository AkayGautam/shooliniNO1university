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

                    <div class="sec-title z-index-9"><h2 class="text-dark"> EXCHANGE PROGRAM </h2>
                      <p class="text-dark">Shoolini University offers a dynamic Exchange Program that benefits both outbound and inbound students. This program facilitates the seamless exchange of students between partner institutions, promoting an enriching academic experience for participants.</p>
                      <p> Through this mutually beneficial initiative, Shoolini actively contributes to the global advancement of education, creating an interconnected and diverse academic landscape. </p>
                      </div>

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
                      <h4> Outbound Students </h4>
                      <div className="hgContents">
                      <p> The Shoolini University Exchange Program offers an excellent chance for students to study abroad at partner universities worldwide. With diverse destination choices, students seamlessly continue their studies while earning credits towards their Shoolini degree. Embracing unfamiliar academic environments, they foster cross-cultural competencies, adaptability, and appreciation for diversity.
                          <br /> <br />
                         Engaging in educational activities at partner institutions enables immersion in varied learning methodologies, research practices, and intellectual discourses, nurturing comprehensive academic development. </p>
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
              <Col md="8">
                  <div className="card-box">
                      <div className="table-responsive">
                          <table className="table table-striped table-bordered">
                              <thead>
                                  <tr className="bg-reds">
                                    <th> University Name  </th> 
                                    <th> Country </th> 
                                    <th> Fall Semester </th> 
                                    <th> Spring Semester </th> 
                                  </tr>
                                </thead>
                                <tbody>
                                    <tr> 
                                      <td> Cheng Shiu University </td>
                                      <td> Taiwan </td>
                                      <td> September to February  </td>
                                      <td> February to July</td>
                                    </tr>
                                    <tr> 
                                      <td>CQ University Australia </td>
                                      <td>Australia </td>
                                      <td> September to February  </td>
                                      <td> February to July</td>
                                    </tr>
                                    <tr> 
                                      <td> Chieti University </td>
                                      <td> Italy </td>
                                      <td> September to February  </td>
                                      <td> February to July </td>
                                    </tr>
                                    <tr> 
                                      <td> Sunway University </td>
                                      <td> Malaysia </td>
                                      <td> September to February  </td>
                                      <td> February to July </td>
                                    </tr>
                                    <tr> 
                                      <td> Universitas Muhammadiyah Yogyakarta Indonesia </td>
                                      <td> Indonesia </td>
                                      <td> September to February </td>
                                      <td> February to July </td>
                                    </tr>
                                    <tr> 
                                      <td>University of Melbourne </td>
                                      <td> Australia</td>
                                      <td> September to February </td>
                                      <td> February to July </td>
                                    </tr>
                                    <tr> 
                                      <td>Universitas Diponegoro </td>
                                      <td> Indonesia </td>
                                      <td> September to February </td>
                                      <td> February to July </td>
                                    </tr>
                                    <tr> 
                                      <td>University of Taipei </td>
                                      <td> Taiwan </td>
                                      <td> September to February </td>
                                      <td> February to July </td>
                                    </tr>
                                    <tr> 
                                      <td> Universiti Sains Malaysia </td>
                                      <td> Malaysia </td>
                                      <td> September to February </td>
                                      <td> February to July </td>
                                    </tr>
                                    <tr> 
                                      <td> Daffodil International University </td>
                                      <td>  Bangladesh</td>
                                      <td> September to February </td>
                                      <td> February to July </td>
                                    </tr>
                                    <tr> 
                                      <td>  Asia University </td>
                                      <td> Taiwan </td>
                                      <td> September to February </td>
                                      <td> February to July </td>
                                    </tr>
                                    <tr> 
                                      <td> National Formosa University  </td>
                                      <td> Taiwan  </td>
                                      <td> September to February </td>
                                      <td> February to July </td>
                                    </tr>
                                    <tr> 
                                      <td> Western Sydney University </td>
                                      <td>Australia </td>
                                      <td> September to February </td>
                                      <td> February to July </td>
                                    </tr>
                                    <tr> 
                                      <td>University of Naples  </td>
                                      <td> Italy </td>
                                      <td> September to February </td>
                                      <td> February to July </td>
                                    </tr>
                                    <tr> 
                                      <td> Taipei Medical University  </td>
                                      <td> Taiwan  </td>
                                      <td> September to February </td>
                                      <td> February to July </td>
                                    </tr>
                                    <tr> 
                                      <td > National Dong Hwa University  </td>
                                      <td> Taiwan </td>
                                      <td> September to February </td>
                                      <td> February to July </td>
                                    </tr>
                                    <tr> 
                                      <td> Kaohsiung Medical University </td>
                                      <td> Taiwan </td>
                                      <td> September to February </td>
                                      <td> February to July </td>
                                    </tr>
                                    <tr> 
                                      <td> Cheng Gung University </td>
                                      <td> Taiwan </td>
                                      <td> September to February </td>
                                      <td> February to July </td>
                                    </tr>
                                    <tr> 
                                      <td> Ga chon University  </td>
                                      <td> South Korea </td>
                                      <td> September to February </td>
                                      <td> February to July </td>
                                    </tr>
                                    <tr> 
                                      <td> Inha University </td>
                                      <td> South Korea </td>
                                      <td> September to February </td>
                                      <td> February to July </td>
                                    </tr>
                                    <tr> 
                                      <td> University of Arkansas </td>
                                      <td> USA </td>
                                      <td> September to February </td>
                                      <td> February to July </td>
                                    </tr>
                                    <tr> 
                                      <td> Ankara University </td>
                                      <td> Turkey  </td>
                                      <td> September to February </td>
                                      <td> February to July </td>
                                    </tr>
                                    <tr> 
                                      <td> University of British Columbia </td>
                                      <td> Canada </td>
                                      <td> September to February </td>
                                      <td> February to July </td>
                                    </tr>
                                    <tr> 
                                      <td> Royal Holloway University of London  </td>
                                      <td> UK </td>
                                      <td> September to February </td>
                                      <td> February to July </td>
                                    </tr>
                                    <tr> 
                                      <td> University of Bath </td>
                                      <td> UK </td>
                                      <td> September to February </td>
                                      <td> February to July </td>
                                    </tr>
                                   
                                   
                                </tbody>
                          </table>
                      </div>
                  </div>
                </Col>
                <Col md="4">

                <div className="card-box">
                    <div className="StoriesData">
                      <h4> Tution Fees </h4>
                      <div className="hgContents">
                      <p> The host university is committed to supporting international students participating in exchange programs by providing a stipend to eligible students. This stipend eases the financial burden and facilitates a rewarding academic experience during the exchange period. Additionally, exchange programs have established agreements that enable students to pay their home university's tuition fees while pursuing studies abroad. This arrangement ensures that students can continue their educational journey seamlessly, embracing the diverse learning opportunities the host institution offers without incurring additional tuition costs.  </p>
                      </div>
                    </div>
                  </div>

                  <div className="card-box mt-3">
                    <div className="StoriesData">
                      <h4> Scholarship</h4>
                      <div className="hgContents">
                      <p> Prospective exchange students can apply for these scholarships through the official exchange program application process. Detailed information about each scholarship, including eligibility criteria and application requirements, will be provided on the host university's website or through the international office. Applicants are typically required to submit a scholarship application and supporting documents such as academic transcripts, letters of recommendation, and a personal statement.  </p>
                      </div>
                    </div>

              

                  </div>

                </Col>

              </Row>
            </Container>
          </section>

          <section id="fees" className="student-voices">
              <div className="container">
                <div class="pagetitle text-center mb-4"><h2> Eligibility Criteria </h2></div>
                <div className="row">
                  <div className="col-md-6 mb-xs-20">
                    <div className="card-box">
                    
                      <h5> Enrolment at a Recognised Institution:  </h5>
                      <p> Full-time Shoolini students can apply. </p>

                      <h5> Academics  </h5>
                      <p> Students should meet the minimum 6.5 GPA requirements set by the exchange program or host university. </p>

                      <h5> Language Proficiency:   </h5>
                      <p> Depending on the language of instruction at the host university, students may need to demonstrate proficiency in the language of study. This may involve providing language test scores (e.g., TOEFL, IELTS) or participating in a language assessment. </p>
                      
                      <h5> Program-Specific Requirements:   </h5>
                      <p> Some exchange programs may have specific requirements based on the academic field or discipline. For example, certain programs may be limited to students who want to enrol in specific majors or participate in specific courses. </p>
                      
                     
                      
                      <h5> Availability of Spots:   </h5>
                      <p> The number of available spots for exchange students may be limited, and students may need to compete for a spot based on their qualifications. </p>
                      
              
                    </div>
                  </div>

                  <div className="col-md-6 mb-xs-20">
                    <div className="card-box">
      
                      <h5> Good Conduct and Character:   </h5>
                      <p> Students should have a positive disciplinary record and demonstrate good character throughout their academic journey. </p>
                      
                      <h5> Financial Capacity:   </h5>
                      <p> Students may be required to demonstrate sufficient financial capacity to cover living expenses, travel costs, and other associated expenses during the exchange period. </p>
                      <h5> Health and Medical Clearance:   </h5>
                      <p> Some exchange programs may require students to provide medical clearance to ensure they are in good health and can participate in the program without any health-related issues. </p>
                      <h5> Visa and Immigration Requirements:   </h5>
                      <p> International students may need to fulfill visa and immigration requirements to study in the host country legally. </p>
              
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

       
            </Styles>

            <Footer />
            </Suspense>
    
    </>
  )
}

export default Blogs