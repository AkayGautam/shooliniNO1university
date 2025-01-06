import React, { useState, Suspense, useEffect } from 'react'
import Header from '../../components/Header'
import Styless from './style/style'
import Footer from '../../components/Footer'
import { Modal, Button, Form } from "react-bootstrap";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import Image from "next/legacy/image";
import Head from 'next/head'
import IconBox from '@/components/IconBox';
import Slider from 'react-slick'
import { Container, Row, Col } from 'react-bootstrap'
import CountUp from 'react-countup';



const International = () => {

    useEffect(() => {

        // var s = document.createElement("script"); s.type = "text/javascript"; s.async = true; s.src = "https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s);

        var s=document.createElement("script"); s.type="text/javascript"; s.async=true; s.src="https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s); 

    }, [])

    const data = [
        {
            title: "Who teaches MBA at Shoolini University?",
            content: "The faculty at Shoolini University's business school comprises experts in all areas of management studies. Most members have either completed their Doctoral studies at leading universities or have worked in corporate companies at leadership positions. The experienced team hails from the University of Berkeley, IIT, IIM, ISB and other reputed universities in India and abroad. Apart from regular full-time faculty, our visiting faculty comprises corporate leaders who augment the learning with their practical experience. Passionate about what they do, the teachers of all MBA modules are deeply involved in teaching, research, and consultancy, and they are teachers by choice "
        },

        {
            title: "Tell me about the curriculum for MBA at Shoolini University?",
            content: "Shoolini MBA curriculum is based on inputs from industry, alumni and academia. The first four quadmesters cater to the understanding of the fundamental concepts in business management, communications, research, analytics and legal aspects of the business. Students undergo a compulsory two-month summer internship after completion of the first year. In their second year -- quadmester 5 onwards -- students select their major and a minor specialisation. The specialisation choices available to the students are marketing, finance, human resource management, digital, biotechnology, pharmaceutical and healthcare management, rural management, international business and analytics. The course curriculum is dynamic in nature and continuously updated to incorporate the latest developments in the field. Overall, the Shoolini MBA curriculum focuses on knowledge of concepts in business management, development of practical skills for success in the real world and development of responsible business leaders."
        },

        {
            title: "What are the future opportunities after completing MBA from Shoolini University?",
            content: "Shoolini MBA graduates have a world of opportunities available to them. Our meticulously designed placement process ensures each student gets a great career opportunity in leading Indian and global corporates. Where few students get a pre-placement offer in their summer internship, others participate in Placement Week. During the Placement season, students have the option to choose jobs that offer packages of more than Rs 8 lakh per annum. Shoolini MBA graduates have been continuously getting absorbed into the public sector. Our alumni have established start-ups in India, Australia, the Middle East, New Zealand and the US. Students have also been extremely successful in corporate leadership positions and others have joined professional NGOs to contribute to society. Our students have also joined reputed institutions of higher learning for their Doctoral studies, while some have opted out of campus placements and joined their family establishments to give them a more professional outlook.         "
        },

        {
            title: "How do you expose MBA students to industry experience?",
            content: "Students of Shoolini University regularly interact with experts from industry through guest lectures, workshops and seminars to get updated on contemporary concepts in business management. Our skill enhancement program SPRINT offers an excellent platform for hands-on workshops with corporates. Each course understanding is augmented with a masterclass by subject matter experts from the industry for deeper and comprehensive understanding. The students also undergo compulsory two months summer internship where they are mentored by leaders in the corporate sector. Students collaborate to solve live problems of the business world by undertaking research projects and participate in consultancy projects led by the faculty.         "
        },

        {
            title: "What are the job prospects after completing MBA International Relations?",
            content: "After completing this program, students have a wide range of job opportunities in the commercial sectors, multinational companies and organisations at the global level.         "
        },

        {
            title: "Why is Shoolini a fully residential MBA?   ",
            content: "Experts and academicians from the field believe that the best management education is experienced in a residential programme. Hence, the MBA programme is 100% residential for 24*7 learning. By spending two years on the campus, students can gain a lifetime of experience. The live-in facility offers intensive learning to MBA students, who mostly join after some experience or even a bachelor’s degree.    "
        },
    ];
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // on scroll fixed

    const [stickyClass, setStickyClass] = useState('relative');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);



        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 700 ? setStickyClass('fixedCHildNav z-50') : setStickyClass('relative');
        }
    };

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
                    <title>International Admissions | Shoolini University</title>
                    <meta name="description" content="Join a global community at Shoolini University. Explore top-ranked programs, world-class faculty, and vibrant campus life. Apply now!" />
                    <meta name="keywords" content="international admissions, global programs, study in india, top university in india, top ranked courses in india, best place to study in india, study in hills, shoolini university " />


                </Head>

                <div id="mbaPage">
                    <Header />
                </div>


                <Styless>





                    <Modal className="" show={show} onHide={handleClose}>

                        <Modal.Body>
                            <h2>Apply Now</h2>
                            <div class="npf_wgts" data-height="400px" data-w="1222078993f709a639ec1d6ca2d2d084"></div>
                        </Modal.Body>

                    </Modal>

                    <main className="innerBody">
                        <section id="shooliniMBA" className="heroBanner">
                            <div className="container">


                                <div className="slideContent text-center pt-md-5">
                                    <h1 className="slideTitle"> Best Private University in India </h1><p class="slideInfo"> Join for World-Class International Programs</p>
                                </div>

                                <div className="logotype">
                                    <p className=" logotext-center">
                                        <Image
                                            src="/assets/images/theLogo.png"
                                            alt="THE Logo"
                                            width={120}
                                            height={45}
                                            className="mr-3 pr-3"
                                        />
                                        <Image
                                            src="/assets/images/qs-rankingNew.png"
                                            alt="THE Logo"
                                            width={180}
                                            height={50}
                                            className="mr-3 pr-3"
                                        />

                                        <Image
                                            src="/assets/images/naac-sticker.png"
                                            alt="THE Logo"
                                            width={150}
                                            height={50}
                                        />
                                    </p>
                                </div>

                                {/* <div className="forMobile d-md-none">

                                                <Image
                                                    src="/assets/images/sliderintermobile.jpg"
                                                    alt="Shoolini Banner"
                                                    className="mg-responsive w-100"
                                                    width={535}
                                                    height={514}
                                                />

                                            </div> */}

                            </div>
                        </section>


                

<section className="icon-box-area pb-md-4 pt-md-4 mt-2">
          <Container>
            <Row>
            <div class="col-4">
                                        <div class="placeVal text-center"><h3><strong>
                                        <CountUp start={0} end={1500} />
                                        +</strong> <br /> Patents Filed   </h3></div>
                                    </div>

            <div class="col-3">
                <div class="placeVal text-center">
                <h3><strong>  &gt;    
                    <CountUp start={0} end={140} />
                     </strong> <br /> H-Index   </h3>
                   </div>
                 </div>


                 <div class="col-5">
                 <div class="placeVal text-center"><h3><strong>
                                        <CountUp start={0} end={900} />
                                        +</strong> <br /> Global Research Collaborations </h3></div>
                 </div>    
                    
            </Row>
          </Container>
        </section>

                        <section id="specialisation" className="spiecalisation">
                            <div className="container">
                                <div className="row">

                                    <div className="col-md-6 pr-md-0 align-centered">
                                        <div className="card-box ht-auto">
                                            <h3 className="title-default"> <span className="text-red"> Your Global Education Destination:</span><br></br>Top Courses at Shoolini </h3>

                                            {/* <p> Our research-intensive BTech curriculum designed by the <strong> Top 2%</strong> Scientists of the World (Stanford University 2021), gives students a competitive edge in the industry by turning them into inventors, academicians, and entrepreneurs. This <strong>transformational program</strong> provides cutting-edge research training and <strong>develops scientific temper </strong> among young minds.  </p> */}
                                            <ul>
                                                <li>B Tech CSE with Specialisations </li>
                                                <li> B Tech/Biotech </li>
                                                <li>BBA with Specialisations </li>
                                                <li> MBA with Specialisations</li>
                                                <li> Doctoral programs </li>

                                            </ul>

                                            <div class="px-0 btn btn-grad-red"> <a target="_blank" href="https://shooliniuniversity.com/media/pdf/InternationalBrochureUSD.pdf"  > Download Brochure</a></div>

                                        </div>
                                    </div>


                                    <div className="col-md-6 pr-md-0 
                                    ">
                                        <div className="voices-image position-relative">

                                            <Image
                                                src="/assets/images/interstudent.jpeg"
                                                width={800}
                                                className="img-responsive"
                                                height={600}
                                            />


                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>


                        <section id="mentorship" className="mba_tabs pt-0">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="tablist">
                                            <div className="demo">
                                                <div>

                                                    <div className="tab-content mt-md-5">
                                                        <div className="tab-pane active" id="home">
                                                            <div className="tabItemData">

                                                                <div className="pagetitle text-center mb-4  ">
                                                                    <div className="pagetitle text-center">
                                                                        <h2>A Hub of Groundbreaking Ideas </h2>
                                                                    </div>



                                                                    <div className="mt-3">
                                                                        <p>
                                                                            Shoolini University is internationally recognised for its research excellence, attracting outstanding academics, research staff, and students from around the world. As per the QS World University Rankings, Asia, it is the <strong> top research university in India</strong> (Citations per Paper).

                                                                            Shoolini boasts over <strong> 104 research laboratories</strong>  and <strong> 11 Centres of Excellence, </strong> including an <strong> in-house Cancer Research Centre</strong> . The university is the <strong> 3rd highest patent filer</strong>  in the country, with over <strong> 1,500 patents</strong> .

                                                                            With an <strong> H-Index of {'<'} 140 </strong>, Shoolini researchers are among the top 2% scientists globally, according to the list released by Stanford University.
                                                                        </p>





                                                                    </div>
                                                                </div>




                                                                <div className="row mt-md-5">

                                                                    <div className="col-md-6 pl-md-0">
                                                                        <div className="card-box">

                                                                            <h3 className=" text-dark"> Rankings </h3>
                                                                            <p> India’s No.1 Research University as per QS Asian Rankings 2025, Shoolini has consistently been ranked among the leading institutes of higher education.
                                                                            </p>


                                                                            <div className="row my-2">
                                                                                <div className="col-3">
                                                                                    <div className="sb_logo">
                                                                                        <Image
                                                                                            src="/assets/images/wur1.png"
                                                                                            width={150}
                                                                                            className="img-responsive"
                                                                                            height={50}
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-9">
                                                                                    <div className="sb_text">
                                                                                        <h4> QS WORLD UNIVERSITY RANKINGS </h4>
                                                                                        <p className="m-0">No.1 Private University in India </p>
                                                                                        <p>  No.1 Private University (Citations Per Faculty)
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row my-2">
                                                                                <div className="col-3">
                                                                                    <div className="sb_logo">
                                                                                        <Image
                                                                                            src="/assets/images/twr2.png"
                                                                                            width={150}
                                                                                            className="img-responsive"
                                                                                            height={50}
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-9">
                                                                                    <div className="sb_text">
                                                                                        <h4> THE WORLD UNIVERSITY RANKINGS  </h4>
                                                                                        <p className="m-0"> No.1 University in India (Research Quality)</p>
                                                                                        <p> No.2 University in India (International Outlook) </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row my-2">
                                                                                <div className="col-3">
                                                                                    <div className="sb_logo">
                                                                                        <Image
                                                                                            src="/assets/images/wur1.png"
                                                                                            width={150}
                                                                                            height={50}
                                                                                            className="img-responsive"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-9">
                                                                                    <div className="sb_text">
                                                                                        <h4> QS SUSTAINABILITY RANKINGS </h4>
                                                                                        <p className="m-0"> No.5 In India (Environmental Sciences)</p>
                                                                                        <p> 112 University Globally (Environmental Sustainability)</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row my-2">
                                                                                <div className="col-3">
                                                                                    <div className="sb_logo">
                                                                                        <Image
                                                                                            src="/assets/images/tmr2.png"
                                                                                            width={150}
                                                                                            className="img-responsive"
                                                                                            height={50}
                                                                                        />

                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-9">
                                                                                    <div className="sb_text">
                                                                                        <h4> THE IMPACT RANKINGS 2024 </h4>
                                                                                        <p>Top 200 University, Globally</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div class="slide-track logosMax">

                                                                                <div class="slides"><span>  <img src="assets/images/logo2.png" alt="" /></span>
                                                                                </div>

                                                                                <div class="slides"><span>  <img src="assets/images/logo1.png" alt="" /></span>
                                                                                </div>



                                                                                <div class="slides"><span>  <img src="assets/images/logo3.png" alt="" /></span>
                                                                                </div>

                                                                                <div class="slides"><span>  <img src="assets/images/log04.png" alt="" /></span>
                                                                                </div>


                                                                                <div class="slides"><span>  <img src="assets/images/logo5.png" alt="" /></span>
                                                                                </div>

                                                                            </div>



                                                                        </div>
                                                                    </div>


                                                                    <div className="col-md-6 pr-md-0">
                                                                        <div className="card-box">
                                                                            <h3 className="title-red"> Start Your Application </h3>
                                                                            <p className="lightTexty">
                                                                                at India’s First Biotechnology University  <br />
                                                                                <small>  (fields with * are mandatory)</small></p>


                                                                            {/* <div className="npf_wgts" data-height="470px" data-w="a5c6f2dfd05619f11b2095ddcd313946"></div> */}

                                                                            <div class="npf_wgts" data-height="550px" data-w="7c25122ca95295617008627540f51b38"></div>

                                                


                                                                        </div>
                                                                    </div>




                                                                    <div className="col-md-6 mt-5">
                                                                        <div className="card-box">
                                                                            <h3 className="title-default">SHOOLINI ADVANTAGE   </h3>
                                                                            <ul className="text-light-weight">
                                                                                <li> Faculty from top institutions like NCI, NIH, IISc, IITs, PEC, and Oxford</li>

                                                                                <li> 'Mission 130': 100% placements, with 30% in top global organisations </li>
                                                                                <li>Awarded government grants, including PURSE, SERB, and DST FIST  </li>

                                                                                <li>Home to Himachal's first MOFPI-funded commercial food testing lab </li>
                                                                                <li> 24/7 Yogananda Library, 104+ labs, and a Cancer Research Centre </li>

                                                                                <li> Hosts XR and AI Research Centre and BOSCH Centre </li>
                                                                                <li>Partnerships with ICT Academy, IBM, AWS, NASSCOM, KPMG, and others  </li>

                                                                            </ul>

                                                                        </div>
                                                                    </div>

                                                                    <div className="col-md-6 pl-md-0 mt-5">
                                                                        <div className="voices-image position-relative">

                                                                            <Image
                                                                                src="/assets/images/backlightshoolini.png"
                                                                                width={800}
                                                                                className="img-responsive"
                                                                                height={600}
                                                                            />

                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="HtApply text-center bg-white pos-r pt-5 pb-5">
  <div className="container">
    <div className="row ">
        
      <div className="col-lg-12 col-md-12 ml-auto mr-auto">
        <div className="section-title">
         
          <h2 className="title">How to Apply</h2>
        </div>
      </div>
    </div>
    <div className="row bg-line">
    
      <div className="col-lg-3 col-md-12 col-6">
        <div className="work-process">
          <div className="box-loader"> <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="step-num-box">
            <div className="step-icon"><span> <img src="assets/images/resume.png" /> </span>
            </div>
            <div className="step-num">01</div>
          </div>
          <div className="step-desc">
            <h4>Click Apply Now to start your application</h4>
       
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-12 mt-5 col-6 mt-md-0">
        <div className="work-process">
          <div className="box-loader"> <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="step-num-box">
            <div className="step-icon"><span> <img src="assets/images/email.png" /></span>
            </div>
            <div className="step-num">02</div>
          </div>
          <div className="step-desc">
            <h4>Fill out the form and verify your email ID</h4>
         
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-12 mt-5 col-6 mt-md-0">
        <div className="work-process">
          <div className="box-loader"> <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="step-num-box">
            <div className="step-icon"><span> <img src="assets/images/job-application.png" /></span>
            </div>
            <div className="step-num">03</div>
          </div>
          <div className="step-desc">
            <h4>Pay the application fee and submit your application.</h4>
         
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-12 mt-5 col-6 mt-md-0">
        <div className="work-process">
          <div className="step-num-box">
            <div className="step-icon"><span> <img src="assets/images/exam.png" /></span>
            </div>
            <div className="step-num">04</div>
          </div>
          <div className="step-desc">
            <h4>Take the online entrance exam after eligibility confirmation.</h4>
        
          </div>
        </div>
      </div>

    </div>

    <div className="row bg-line2 mt-4 pt-4">
    
    <div className="col-lg-3 col-md-12 col-6 mt-0">
      <div className="work-process">
        <div className="box-loader"> <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="step-num-box">
          <div className="step-icon"><span> <img src="assets/images/teacher.png" /></span>
          </div>
          <div className="step-num">05</div>
        </div>
        <div className="step-desc">
          <h4>After the exam there will be a faculty interaction</h4>
     
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-12 mt-5 col-6 mt-md-0">
      <div className="work-process">
        <div className="box-loader"> <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="step-num-box">
          <div className="step-icon"><span> <img src="assets/images/offer-letter.png" /></span>
          </div>
          <div className="step-num">06</div>
        </div>
        <div className="step-desc">
          <h4>If successful, you will receive an offer letter</h4>
       
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-12 mt-5 col-6 mt-md-0">
      <div className="work-process">
        <div className="box-loader"> <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="step-num-box">
          <div className="step-icon"><span> <img src="assets/images/payment.png" /></span>
          </div>
          <div className="step-num">07</div>
        </div>
        <div className="step-desc">
          <h4>Pay the fee to confirm your admission</h4>
       
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-12 mt-5 col-6 mt-md-0">
      <div className="work-process">
        <div className="step-num-box">
          <div className="step-icon"><span> <img src="assets/images/passport.png" /></span>
          </div>
          <div className="step-num">08</div>
        </div>
        <div className="step-desc">
          <h4>Get an acceptance letter to apply for your student visa</h4>
      
        </div>
      </div>
    </div>

  </div>
  </div>
</section>

<section className="pb-5">
    <div className="container">
        <div className="row">
        <div className="col-md-12 mt-5">
                                                                        <div className="card-box text-center">
                                                                            <h3 className="title-default">Scholarship Opportunities  </h3>
                                                                          <p> Pursue your academic dreams in a dynamic international environment. We offer a broad spectrum of programs across various disciplines, preparing you for global success. Eligible candidates can receive up to 50% scholarships. </p> 

                                                                        </div>
                                                                    </div>

<div className="courseTable mt-4">
<h4 className="title text-center mb-3">Eligibility Criteria</h4>
<div className="table-responsive"> 
<table class="table table-striped">
  <thead className="bg-dark text-white">
    <tr>
      <th className="text-white" scope="col">Course</th>
      <th className="text-white" scope="col">Minimum Requirements</th>
      <th className="text-white" scope="col">Documents required</th>
      <th className="text-white" scope="col">Admission Criteria</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Undergraduate</th>
      <td>	Min. 55% marks in A-level/ Grade 12/ HSC/ National Senior Certificate or as mentioned by the university on the website.</td>
      <td><ul> 
          <li>A-level/ 12th/ HSC/ NSC certificate and marksheet. </li>
<li>	O-level/ 10th / SSC/ ordinary level certificate and marksheets. </li>
<li>	Migration/ Character certificate/ School Leaving certificate.
 </li></ul></td>
      <td>Shoolini University's multiple choice entrance test, and faculty interaction.</td>
    </tr>
    <tr>
      <th scope="row">Postgraduate</th>
      <td>Minimum 50% marks in Undergraduate degree or as mentioned by the university on the website.</td>
      <td> <ul>
          <li>  All docs as mentioned for UG   </li>
 <li> Bachelor’s degree and all semester marksheets. 
</li>
          </ul></td>
      <td>	Shoolini University's multiple choice entrance test, and faculty interaction.</td>
    </tr>
    <tr>
      <th scope="row"> Doctorate</th>
      <td>•	Minimum 55% marks in the related field / discipline.</td>
      <td> <ul>
            <li>	All docs as mentioned for PG  </li>
<li> 	CV, Research Concept note, Master’s degree and all semester marksheets.
</li>
          </ul></td>
      <td> 	Shoolini University's multiple choice entrance test, and assessment of research aptitude through </td>
    </tr>
  </tbody>
</table>
</div>
</div>



 
        </div>
    </div>
</section>

 





                        <section id="faqs" className="student-voices">
                            <div className="container">

                                <div className="row">


                                    <div className="col-md-12">

                                        <div className="card-box">
                                            <h3 className="title-default">250+  <span> Hiring Partners </span></h3>
                                            <p> <strong> Unlock Career Opportunities at Leading Multinational Companies. </strong> <br />
                                                Join the Elite Ranks of our BTech (Biotech{" &"} Food Tech) Alumni Network. </p>


                                            <div className="row">

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/CSE/Cogni.jpeg" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/images/nestle.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/images/1631353749-nes.jpg" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/images/Abbot.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/images/Aishwarya.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/images/Alchemist.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/images/Altruist.png" width={200} className="img-responsive" height={70} />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/images/biogentek.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>


                                                <div className={isActive ? 'allLogoss row position-relative ' : null} style={{ display: "none" }}>


                                                    <div className="col-md-3 col-3">
                                                        <div className="logo-file">
                                                            <Image src="/assets/images/images/Cremica.png" width={200} className="img-responsive" height={90} />

                                                        </div>
                                                    </div>



                                                    <div className="col-md-3 col-3">
                                                        <div className="logo-file">
                                                            <Image src="/assets/images/images/Oxigen.png" width={200} className="img-responsive" height={80} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3 col-3">
                                                        <div className="logo-file">
                                                            <Image src="/assets/images/images/macro.png" width={200} className="img-responsive" height={100} />
                                                        </div>
                                                    </div>


                                                    <div className="col-md-3 col-3">
                                                        <div className="logo-file">
                                                            <Image src="/assets/images/images/thermo.png" width={200} className="img-responsive" height={100} />
                                                        </div>
                                                    </div>


                                                    <div className="col-md-3 col-3">
                                                        <div className="logo-file">
                                                            <Image src="/assets/images/images/Patanjali.png" width={200} className="img-responsive" height={80} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3 col-3">
                                                        <div className="logo-file">
                                                            <Image src="/assets/images/images/srl.png" width={200} className="img-responsive" height={70} />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-3 col-3">
                                                        <div className="logo-file">
                                                            <Image src="/assets/images/images/Sentiss.jpg" width={180} className="img-responsive" height={90} />
                                                        </div>
                                                    </div>


                                                    <div className="col-md-2 col-3">
                                                        <div className="logo-file">
                                                            <Image src="/assets/images/images/SatyamAuto.jpg" width={200} className="img-responsive" height={80} />
                                                        </div>
                                                    </div>


                                                    <div className="col-md-3 col-3">
                                                        <div className="logo-file">
                                                            <Image src="/assets/images/images/Verka.png" width={200} className="img-responsive" height={80} />
                                                        </div>
                                                    </div>


                                                    <div className="col-md-3 col-3">
                                                        <div className="logo-file">
                                                            <Image src="/assets/images/images/ZEON.png" width={200} className="img-responsive" height={100} />
                                                        </div>
                                                    </div>


                                                    <div className="col-md-3 col-3">
                                                        <div className="logo-file">
                                                            <Image src="/assets/images/images/Neptune.jpg" width={180} className="img-responsive" height={80} />
                                                        </div>
                                                    </div>


                                                    <div className="col-md-3 col-3">
                                                        <div className="logo-file">
                                                            <Image src="/assets/images/images/Panacea.png" width={200} className="img-responsive" height={100} />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-3 col-3">
                                                        <div className="logo-file">
                                                            <Image src="/assets/images/images/mcain.png" width={200} className="img-responsive" height={100} />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-3 col-3">
                                                        <div className="logo-file">
                                                            <Image src="/assets/images/images/macro.png" width={200} className="img-responsive" height={100} />
                                                        </div>
                                                    </div>


                                                </div>

                                            </div>

                                            <div className="col-md-12">
                                                <div className="moreView">

                                                    <button className={isActive ? 'btnView ' : "nullRotate"} onClick={toggleClass} >  <Image src="/assets/images/seemore.png" width={70} className="img-responsive rotatebtn" height={65} /></button>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="titlelocation">
                            <div className="container">
                                <div className="row">
                                    <div class="locationtitle text-center"><h4> Strategically Located
                                        <span className="hightlocation"> 90 mins From Chandigarh Airport</span> </h4></div>
                                </div>
                            </div>
                        </section>

                        <section id="mapsh">
                            <div className="mapback">

                                <iframe className=" shoolinimap ht-100 w-100" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13699.177242997901!2d77.1183538!3d30.8644333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6d5230f107c2117a!2sShoolini+University!5e0!3m2!1sen!2sin!4v1553939344345!5m2!1sen!2sin" allowfullscreen>
                                </iframe>
                            </div>  </section>




                    </main>

                </Styless>
                <div id="mba_footer">
                    <Footer />
                </div>

            </Suspense>

        </>
    )
}

export default International