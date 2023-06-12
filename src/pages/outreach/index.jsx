import React, { Suspense, useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Styles from './style/outreach'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Head from 'next/head'
import Slider from "react-slick";


const settings = {
  dots: false,
  infinite: true,
  arrows: true,
  autoplay: true,
  speed: 1500,
  autoplaySpeed: 2500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const index = () => {

  useEffect(() => {
    var s = document.createElement("script"); s.type = "text/javascript"; s.async = true; s.src = "https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s);
  }, [])


  return (
    <Suspense
      fallback={
        <div className="loading">
          <div className="lds-dual-ring"></div>
        </div>
      }
    >
      <Head>
        <title>Outreach | Shoolini University</title>
        <meta name="description" content="Contact Shoolini University for admission, research, academics, or international admission inquiries by simply filling up a form. Find out the details now!" />
        <meta name="keywords" content="Contact Us | Shoolini University" />
      </Head>
      <Styles>
        {/* Main Wrapper */}
        <div className="main-wrapper visionmission-page">
          {/* Header 2 */}
          <Header />

          {/* Breadcroumb */}
          {/* <BreadcrumbBox title="Contact Us" /> */}

          <section className="hero">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="heroinner text-center">
                    <div className="hero_p">
                      <p className="m-0 text-white">Ideas that Matter</p>
                    </div>
                    <div className="hero-inner-content">
                      <h4 className="fs-1 fw-bold text-white">A Global Education Think Tank </h4>
                      <p className="m-0 text-white w-small">Imagine a world where boundaries merge, knowledge flows like a river, and
                        education transcends all barriers. That is our dream… We dream of connecting the world,
                        breaking barriers and sharing knowledge. Our mission is to innovate education, prepare
                        teachers for the new tomorrow and inspire young India to make a difference.
                      </p>
                      <div className="herobtn mt-4">
                        <a target="_blank" href="https://admissions.shooliniuniversity.com/" className="herobtn">Apply Now</a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className="weworkwith py-3 ">
            <div className="container">
              <div className="weworkwith_inner bg-white pb-3 shadow">
                <div className="row">
                  <div className="col-md-3 col-xs-12">
                    <div className="www_inner1  py-5 text-white text-center">
                      <h3 className="fw-bold fs-4">WE WORK <br /> WITH </h3>
                    </div>
                  </div>
                  <div className="col-md-2 col-xs-12">
                    <div className="wallinner py-5 text-center">
                      <p className="">1000+</p>
                      <span>Schools</span>
                    </div>
                  </div>
                  <div className="col-md-2 col-xs-12">
                    <div className="wallinner py-5 text-center">
                      <p className="">50000+</p>
                      <span>Students</span>
                    </div>
                  </div>
                  <div className="col-md-2 col-xs-12">
                    <div className="wallinner py-5 text-center">
                      <p className="">10000+</p>
                      <span>Educators</span>
                    </div>
                  </div>
                  <div className="col-md-2 col-xs-12">
                    <div className="wallinner py-5 text-center">
                      <p className="">Infinite</p>
                      <span>Ideas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className="upcoming py-3">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="heading text-center">
                    <h3 className="fw-bold">Upcoming events</h3>
                  </div>
                  <div className="headbotomborder py-3">
                    <div className="bottomline m-auto">

                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-6 p-0">
                  <div className="up2row p-3">

                    <h5 className="fw-bold">SUMMER PATENT SCHOOL </h5>
                    <p>A thought-provoking research program in the lap of nature for young idea generators, innovative thinkers, courageous leaders, and fearless researchers. </p>
                  </div>
                </div>
                <div className="col-lg-3  ">
                  <div className="up2row1sec text-center border border-danger">
                    <div className="up2row1secinner">
                      <h6 className="fw-bold text-danger fs-4">REGISTRATIONS OPEN</h6>
                      <p className="m-0"><span> Cohort 1 :</span> 4th-9th June 2023 </p>
                      <p className="m-0"><span> Cohort 2 :</span> 11th-16th June 2023</p>
                      <p className="m-0"><span> Cohort 3 :</span> 25th-30th June 2023 </p>
                      {/* <div className="up2rowlink">
                        <a href="register.html" target="_blank"
                          className="text-dark">Register Now</a>
                      </div> */}
                    </div>


                  </div>

                </div>
              </div>
              <div className="row justify-content-center py-3">
                <div className="col-lg-6 p-0">
                  <div className="up2row p-3">

                    <h5 className="fw-bold">SUMMER LAB PROGRAM</h5>
                    <p>An intellectually stimulating research experience exploring the latest advancements in Biotechnology, Internet of Things, and Fintech amidst the serene surroundings of the Himalayan Pine Forest.</p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="up2row2sec text-center border border-danger">
                    <div className="up2row2secinner">
                      <h6 className="fw-bold text-danger fs-4">COMING SOON</h6>
                      <p className="m-0"><span> Dates - to be announced</span></p>

                      {/* <div className="up2rowlink mt-3">
                        <a href="csoon.html" target="_blank"
                          className="text-dark">More Info</a>
                      </div> */}
                    </div>


                  </div>

                </div>
              </div>


            </div>
          </section>

          <section className="aboutus py-5">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="heading text-center">
                    <h3 className="fw-bold">About Ideas That Matter</h3>
                  </div>
                  <div className="headbotomborder py-3">
                    <div className="bottomline m-auto">

                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-6 col-sm-12">
                  <div className="abouthead">
                    <h2>Ideas That Matter is a Dynamic Action-Oriented Think Tank.</h2>
                    <h5>Connecting Minds, Creating Paths, Changing Things
                    </h5>
                    <p> A collaborative platform that connects research institutes, schools, academia, students,
                      scientists, industry leaders, public figures, and pop cultural icons with an <strong>Idea
                        That Matters.</strong> Our leadership team features engineers, scientists, writers,
                      thought leaders, and innovative problem-solvers, all united by our passion to transform the
                      status quo.
                      <br /><br />
                      Our mission is to inspire change in global education through bold and creative ideas. We
                      want to design policies and programs that make education accessible and exciting for
                      everyone. We welcome fresh perspectives and turn possibilities into realities. Join us in
                      our mission to create a world where everyone can learn and thrive. Together, we can make a
                      difference.

                    </p>
                    <div className="aboutbtn mt-5">
                      <a href="https://www.ideasthatmatter.in/about/" target="_blank"
                        className="text-white text-decoration-none"> know more</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="about2sec">
                    <iframe width="540" height="304" src="https://www.youtube.com/embed/FBQJ5lxHqCY"
                      title="Do You Know" frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="eveglry py-5 bg-light">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="heading text-center">
                    <h3 className="fw-bold">Event Gallery</h3>
                  </div>
                  <div className="headbotomborder py-3">
                    <div className="bottomline m-auto">

                    </div>
                  </div>
                </div>
              </div>

              <div className="row py-4">
                <div className="col-lg-4 col-sm-12">
                  <div className="glryinner mt-2">
                    <img src="assets/images/nedu.jpg" className="img-fluid" />
                    <div className="glryinrcontent p-2">
                      <p className="text-white "><a href="#"> National Educators' Workshop, 2021 <br />18 photos </a>
                      </p>

                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                  <div className="glryinner mt-2">
                    <img src="assets/images/pconclave.jpg" className="img-fluid" />
                    <div className="glryinrcontent p-2">
                      <p className="text-white "><a href="#"> Principals' Conclave, Varanasi, February 2022<br />21
                        photos </a></p>

                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                  <div className="glryinner mt-2">
                    <img src="assets/images/pconclave2.JPG" className="img-fluid" />
                    <div className="glryinrcontent p-2">
                      <p className="text-white "><a href="#">Principals' Conclave, Mandi, December 2021<br />167
                        photos</a></p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="interviews py-5 bg-light">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="heading text-center">
                    <h3 className="fw-bold">Interviews</h3>
                    <p>Stay updated on our latest news and projects in design, art, vintage, and work updates.</p>
                  </div>
                  <div className="headbotomborder py-3">
                    <div className="bottomline m-auto">

                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4 col-sm-12">
                  <div className="interviewcard border mt-2">
                    <img src="https://www.ideasthatmatter.in/wp-content/uploads/2022/03/ClOuw27Z_400x400.jpeg"
                      className="w-100" />
                    <div className="interviewcontent bg-white p-4">
                      <h5>“Private schools should be left autonomous”</h5>
                      <a target="_blank" href="https://www.ideasthatmatter.in/2022/03/21/private-schools-should-be-left-autonomous/">Read More</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                  <div className="interviewcard border mt-2">
                    <img src="https://www.ideasthatmatter.in/wp-content/uploads/2022/03/maxresdefault2-680x442.jpeg"
                      className="w-100" />
                    <div className="interviewcontent  bg-white p-4">
                      <h5>“Education system needs serious reforms”</h5>
                      <a target="_blank" href="https://www.ideasthatmatter.in/2022/03/21/education-system-needs-serious-reforms/">Read More</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                  <div className="interviewcard border mt-2">
                    <img src="https://www.ideasthatmatter.in/wp-content/uploads/2022/03/59e0a87227777-680x442.jpeg"
                      className="w-100" />
                    <div className="interviewcontent  bg-white p-4">
                      <h5>“Access to good education is the birth right of all children”</h5>
                      <a target="_blank" href="https://www.ideasthatmatter.in/2022/03/21/access-to-good-education-is-the-birth-right-of-all-children/">Read More</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="interviewbtn mt-5 text-center">
                    <a href="#">More News</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="program py-5 bg-light">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-sm-12">
                  <div className="heading text-center">
                    <h3 className="fw-bold">Programs @ Ideas That Matter</h3>
                    <p className="mt-3">At ITM, we nurture a new generation of innovative problem-solvers who aren’t
                      afraid to dream big and take risks. We believe in the power of independent thought, and we
                      value individuals who embrace diversity and are committed to making a positive impact on the
                      world. Our community comprises the brightest minds who work together to generate bold new
                      ideas that can drive real change. </p>
                    <p>So come join us and let’s show the world that ideas really do matter. </p>
                  </div>
                  <div className="headbotomborder py-3">
                    <div className="bottomline m-auto">

                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-3  col-sm-12 my-4">
                  <div className="pbtns  border p-4 bg-white shadow-sm h-100">
                    <p>
                      <a href="#" className="text-decoration-none fw-bold text-dark fs-5">Young Researcher’s
                        Program</a>
                    </p>
                    <p>YRP is a research-oriented school engagement program to nurture
                      creative problem-solving skills among high school students and guide them to translate their
                      idea into concrete products. </p>

                  </div>
                </div>
                <div className="col-lg-3 col-sm-12 my-4">
                  <div className="pbtns border p-4 bg-white shadow-sm h-100">
                    <p>
                      <a href="#" className="text-decoration-none fw-bold text-dark fs-5">Q?riosity</a>
                    </p>
                    <p>
                      Q?riosity- India’s Biggest Quiz: <br />
                      Q?riosity is one of India’s biggest annual inter-school quizzes for school students. The
                      quiz, which tests critical thinking, aptitude and general knowledge, provides students with
                      a national platform to compete and win laurels.
                    </p>

                  </div>
                </div>
                <div className="col-lg-3 col-sm-12 my-4">
                  <div className="pbtns border p-4 bg-white shadow-sm h-100">
                    <p>
                      <a href="#" className="text-decoration-none fw-bold text-dark fs-5">ITM Webinar Series</a>
                    </p>
                    <p>ITM Webinar Series- Strategies for Schools <br />
                      Top educators of the industry share their ideas on emotional intelligence, self-awareness,
                      spirituality, creativity, and more insights with the education fraternity.
                    </p>

                  </div>
                </div>
                <div className="col-lg-3 col-sm-12 my-4">
                  <div className="pbtns border p-4 bg-white shadow-sm h-100">
                    <p className="">
                      <a href="#" className="text-decoration-none fw-bold text-dark fs-5">Career Counselling
                        Series</a>
                    </p>
                    <p>Career Counselling Series <br />
                      Subject matter experts, professors and industry experts share futuristic jobs and academic
                      opportunities that align with their skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="yrp bg-light py-5">
            <div className="container">
              <div className="yprmain shadow">
                <div className="row bg-white py-5">
                  <div className="col-lg-6 col-sm-12">
                    <div className="yrp1sec">
                      <iframe width="540" height="315"
                        src="https://www.youtube.com/embed/bKuE3KL5b6I?list=PL427Ao6J-cXNB6PPuxV5up-EhTm64Mj4N"
                        title="CV Raman Young Researchers Program Cohort 1 Results" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <div className="yrp2sec p-3">
                      <img src="assets/images/yrp.png" className="img-fluid" />
                      <h4 className="my-2">Young Researcher’s Program</h4>
                      <p className="mt-3">YRP is a research focused school engagement program to nurture creative
                        problem solving skills among high school students and guide them to translate their idea
                        into concrete products.</p>
                      <div className="yrpbtn mt-4">
                        <a href="#">Know More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row bg-light py-5 justify-content-center">
                  <div className="col-md-3  col-xs-12">
                    <div className="yrp2row text-center mt-2">
                      <p className="">60+</p>
                      <span>Ideas Received</span>
                    </div>
                  </div>
                  <div className="col-md-3  col-xs-12">
                    <div className="yrp2row text-center mt-2">
                      <p className="">3</p>
                      <span>Patents filed</span>
                    </div>
                  </div>
                  <div className="col-md-3  col-xs-12">
                    <div className="yrp2row text-center mt-2">
                      <p className="">400+</p>
                      <span>Students, Lit the Spark of <br /> Innovation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="testimonial py-5">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="heading text-center mb-3">
                    <h3 className="fw-bold">Testimonials</h3>
                  </div>






                  <div className="owl-carousel owl-theme owl-loaded owl-drag ct-testimonial-carousel layout3">

                    <div className="owl-stage-outer">

                      <div className="owl-stage"  >

                        <div className="owl-item cloned bg-light p-4">
                        <Slider {...settings}>
                          <div className="item">
                            <div className="ct-testimonial-item">
                              <div className="ct-testimonial-quote fa fa-quote-right "></div>
                              <div className="ct-testimonial-holder">
                                <div className="ct-testimonial-image"><img src="https://www.ideasthatmatter.in/wp-content/uploads/2022/02/Kashish-300x300.jpeg" alt="Kashish" /></div>
                                <div className="ct-testimonial-meta">
                                  <h3 className="ct-testimonial-title">Kashish</h3>
                                  <span className="ct-testimonial-position">Finalist, Qriosity 2021 Cambridge International School, Kullu</span>
                                </div>
                              </div>
                              <div className="ct-testimonial-content"><p>I would like to thank Shoolini University for giving me this opportunity and honouring me. I would like to thank my family and my teachers for supporting me throughout this journey. My experience with Q?riosity 2021 was one of the best experience I had while quizzing. Thank you so much for inviting us to Q?rosity award ceremony in Mandi.</p>
                              </div>
                            </div>
                          </div>

                          <div className="item">
                            <div className="ct-testimonial-item">
                              <div className="ct-testimonial-quote fa fa-quote-right "></div>
                              <div className="ct-testimonial-holder">
                                <div className="ct-testimonial-image"><img src="https://www.ideasthatmatter.in/wp-content/uploads/2022/02/Kuldeep-Guleria-300x300.jpeg" alt="Mr. Kuldeep Guleria " /></div>
                                <div className="ct-testimonial-meta">
                                  <h3 className="ct-testimonial-title" >Mr. Kuldeep Guleria </h3>
                                  <span className="ct-testimonial-position">Principal-cum-Asst. Regional officer DAV Centenary Public School Jawahar Nagar, Mandi</span>
                                </div>
                              </div>
                              <div className="ct-testimonial-content" >
                                <p>The participation of our students in Qriosity 2021 organized by Shoolini University  was a great and exciting  learning  experience for our students. Quizzing  is always a wonderful way of expressing knowledge.<br />
                                I congratulate and thank Shoolini University for making us a part of this show. I am also thankful for giving me an opportunity to be a part of Principals’ Conclave 2021.</p>
                              </div>
                            </div>
                          </div>
      </Slider>










                        </div>
                      </div>
                    </div>
                    <div className="owl-nav disabled">

                    </div>

                  </div>



                </div>
              </div>
            </div>
          </section>
          <section className="contactus">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="cuscontent text-center">
                    <h3>We owe the reach and success of Ideas That Matter to our beloved school and college
                      partners, school leaders, educators and students.
                      Interested in engaging with us? <br /> <a href="" className="text-white fs-2"><span>Contact Us</span></a>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-md-2 col-xs-12">
                  <div className="cuslogo p-2 text-center">
                    <img src="https://www.ideasthatmatter.in/wp-content/uploads/2022/03/Indraprastha-Dwarka-300x128.png"
                      className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-2 col-xs-12">
                  <div className="cuslogo p-2 text-center">
                    <img src="https://www.ideasthatmatter.in/wp-content/uploads/2022/03/Learning-Paths-Mohali-300x300.jpg"
                      className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-2 col-xs-12">
                  <div className="cuslogo p-2 text-center">
                    <img src="https://www.ideasthatmatter.in/wp-content/uploads/2022/03/South-Point.jpg"
                      className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-2 col-xs-12">
                  <div className="cuslogo p-2 text-center">
                    <img src="https://www.ideasthatmatter.in/wp-content/uploads/2022/03/st.kabir-logo-300x96.png"
                      className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-2 col-xs-12">
                  <div className="cuslogo p-2 text-center">
                    <img src="https://www.ideasthatmatter.in/wp-content/uploads/2022/03/THe-Emerald-Heights-International-Indore.png"
                      className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="row mt-2 justify-content-center">
                <div className="col-md-2 col-xs-12">
                  <div className="cuslogo p-2 text-center">
                    <img src="https://www.ideasthatmatter.in/wp-content/uploads/2022/03/Bal-Bharti.png"
                      className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-2 col-xs-12">
                  <div className="cuslogo p-2 text-center">
                    <img src="https://www.ideasthatmatter.in/wp-content/uploads/2022/03/BCM-Arya.jpg"
                      className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-2 col-xs-12">
                  <div className="cuslogo p-2 text-center">
                    <img src="https://www.ideasthatmatter.in/wp-content/uploads/2022/03/Bhavan-Vidyalaya-Panchkula.png"
                      className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-2 col-xs-12">
                  <div className="cuslogo p-2 text-center">
                    <img src="https://www.ideasthatmatter.in/wp-content/uploads/2022/03/Carmel-Convent-Chandigarh.png"
                      className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-2 col-xs-12">
                  <div className="cuslogo p-2 text-center">
                    <img src="https://www.ideasthatmatter.in/wp-content/uploads/2022/03/DAV-BRS-Nagar-Ludhiana.jpg"
                      className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="Crusaders py-5">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="heading text-center">
                    <h3 className="fw-bold text-white">Crusaders</h3>
                    <p className="text-white mt-3">At the heart of Ideas That Matter is a leadership team of engineers,
                      scientists, writers, and thought leaders who share a passion for transforming the status
                      quo. We aim to generate big, bold ideas that can serve as blueprints for change in global
                      education. We’re committed to designing and advancing innovative policies and programs that
                      can make education more exciting and accessible. We’re not afraid of resistance — <br />
                      in fact, we welcome it — and we’re always looking for fresh ideas and new possibilities.
                      <br /> Join us as we work together to make a real difference.
                    </p>
                  </div>
                  <div className="headbotomborder py-3">
                    <div className="bottomline m-auto">

                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4 col-sm-12">
                  <div className="crusaders_card text-center mt-5">
                    <img src="https://www.ideasthatmatter.in/wp-content/uploads/2022/02/atul0-270x270.png"
                      className="img-fluid rounded-circle" />
                    <div className="crucardcontent text-center mt-3">
                      <h3 className="text-white fw-bold fs-4">Atul Khosla</h3>
                      <p>President and Vice-Chancellor, Shoolini University</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                  <div className="crusaders_card text-center mt-5">
                    <img src="https://www.ideasthatmatter.in/wp-content/uploads/2022/02/Vivek_Atray-scaled-1-270x270.jpg"
                      className="img-fluid rounded-circle" />
                    <div className="crucardcontent text-center mt-3">
                      <h3 className="text-white fw-bold fs-4">Vivek Atray</h3>
                      <p>Author and Ex-IAS Officer</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                  <div className="crusaders_card text-center mt-5">
                    <img src="https://www.ideasthatmatter.in/wp-content/uploads/2022/02/avnee-khosla-270x270.png"
                      className="img-fluid rounded-circle" />
                    <div className="crucardcontent text-center mt-3">
                      <h3 className="text-white fw-bold fs-4">Avnee Khosla</h3>
                      <p>Vice President, Shoolini University</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-lg-4 col-sm-12">
                  <div className="crusaders_card text-center mt-5">
                    <img src="https://www.ideasthatmatter.in/wp-content/uploads/2022/02/Shikha_Shoolini-270x270.jpg"
                      className="img-fluid rounded-circle" />
                    <div className="crucardcontent text-center mt-3">
                      <h3 className="text-white fw-bold fs-4">Shikha Sood</h3>
                      <p>Head-Outreach, Shoolini University</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                  <div className="crusaders_card text-center mt-5">
                    <img src="https://www.ideasthatmatter.in/wp-content/uploads/2022/02/sr-270x270.webp"
                      className="img-fluid rounded-circle" />
                    <div className="crucardcontent text-center mt-3">
                      <h3 className="text-white fw-bold fs-4">Sreerupa Sil</h3>
                      <p>Head - New Initiatives, Shoolini University</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                  <div className="crusaders_card text-center mt-5">
                    <img src="https://www.ideasthatmatter.in/wp-content/uploads/2022/02/naren-chirmule-270x270.png"
                      className="img-fluid rounded-circle" />
                    <div className="crucardcontent text-center mt-3">
                      <h3 className="text-white fw-bold fs-4">Narendra Chirmule</h3>
                      <p>Author, Artist and Scientist</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-lg-2 col-sm-12">
                  <div className="crusaders_card2row text-center mt-2">
                    <img src="https://www.ideasthatmatter.in/wp-content/uploads/2022/02/Prateek-Jamwal-270x270.jpeg"
                      className="img-fluid rounded-circle" />
                    <div className="crucardcontent2 text-center mt-3">
                      <h3 className="text-white fw-bold fs-5">Prateek Jamwal</h3>

                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-12">
                  <div className="crusaders_card2row text-center mt-2">
                    <img src="https://www.ideasthatmatter.in/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-17-at-6.53.45-PM-270x270.jpeg"
                      className="img-fluid rounded-circle" />
                    <div className="crucardcontent2 text-center mt-3">
                      <h3 className="text-white fw-bold fs-5">Ruchi Johari</h3>

                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-12">
                  <div className="crusaders_card2row text-center mt-2">
                    <img src="https://www.ideasthatmatter.in/wp-content/uploads/2022/02/Shashank-270x270.jpeg"
                      className="img-fluid rounded-circle" />
                    <div className="crucardcontent2 text-center mt-3">
                      <h3 className="text-white fw-bold fs-5">Shashank Shukla</h3>

                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-12">
                  <div className="crusaders_card2row text-center mt-2">
                    <img src="https://www.ideasthatmatter.in/wp-content/uploads/2022/02/vinmre-1-270x270.jpg"
                      className="img-fluid rounded-circle" />
                    <div className="crucardcontent2 text-center mt-3">
                      <h3 className="text-white fw-bold fs-5">Vinmre Kaushal</h3>

                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-12">
                  <div className="crusaders_card2row text-center mt-2">
                    <img src="https://www.ideasthatmatter.in/wp-content/uploads/2022/02/Leela-Dhar_2.jpeg"
                      className="img-fluid rounded-circle" />
                    <div className="crucardcontent2 text-center mt-3">
                      <h3 className="text-white fw-bold fs-5"> Leela Dhar</h3>

                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-12">
                  <div className="crusaders_card2row text-center mt-2">
                    <img src="https://www.ideasthatmatter.in/wp-content/uploads/2022/02/Mukesh-270x270.jpeg"
                      className="img-fluid rounded-circle" />
                    <div className="crucardcontent2 text-center mt-3">
                      <h3 className="text-white fw-bold fs-5">Mukesh Kaushal</h3>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>



          <Footer />

        </div>
      </Styles>
    </Suspense>
  )

}

export default index