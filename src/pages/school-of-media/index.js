import React, { useState, Suspense, useEffect } from 'react'
import Header from '../../components/Header'
import Styless from './style/style'
import Footer from '../../components/Footer'
import { Modal, Button, Form } from "react-bootstrap";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import Image from "next/legacy/image";
import Head from 'next/head'
import Slider from 'react-slick'

const Mbas = () => {

    useEffect(() => {

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
                    <title>School of Media and Communications | Shoolini University</title>
                    <meta name="description" content=" " />
                    <meta name="keywords" content=" " />


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
                                <div className="row">
                                    <div className="col-md-8 centerDiv">
                                        <div className="leftCatd">
                                        <h1 className="mb-0"> <span>  Top Media Experts,</span> <br /> <span>Real-World Projects, </span> <br/>Future-Ready Careers</h1>
                                           
                                            <div className="noretype">
                                                {/* <p className="border-right-1"> Be an SRP Fellow </p> */}
                                                <p className="text-center pb-0">
                                                    <Image
                                                        src="/assets/images/theLogo.png"
                                                        alt="THE Logo"
                                                        width={120}
                                                        height={54}
                                                        className="mr-2 pr-3"
                                                    />
                                                      <Image
                                                        src="/assets/images/qs-rankingNew.png"
                                                        alt="THE Logo"
                                                        width={220}
                                                        height={60}
                                                    />
                                                </p>
                                            </div>

                                            <div className="forMobile d-md-none">

                                                <Image
                                                    src="/assets/images/mobile-banner.jpg"
                                                    alt="Shoolini Banner"
                                                    className="mg-responsive w-100"
                                                    width={535}
                                                    height={514}
                                                />

                                            </div>

                                            <div className="px-0 btn btn-grad-red xs-none"> <a target="_blank"
                                                href="https://admissions.shooliniuniversity.com/"> Be an SRP Fellow</a>
                                            </div>
                                            {/* <div className="ugImage">
                                            <img src="assets/images/uglogos.png" />
                                        </div> */}

                                            <div className="row my-md-5">
                                                <div className="col-4">
                                                    <div className="placeVal">
                                                        <h3><strong>  1500+  </strong> <br /> Patents Filed   </h3>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="placeVal">
                                                        <h3><strong>  {'>'}115 {'+'}  </strong> <br /> H-Index  </h3>
                                                    </div>
                                                </div>
                                                <div className="col-5">
                                                    <div className="placeVal">
                                                        <h3><strong>  Top 2%   </strong> <br /> Scientists of the World  </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="rightCard">

                                            <Image
                                                src="/assets/images/heroOne.png"
                                                alt="Hero Banner"
                                                className="mg-responsive w-100"
                                                width={356}
                                                height={621}
                                            />

                                        </div>
                                    </div>
                                </div>




                            </div>
                        </section>

                        {/* section  */}
                       
   


                        <section id="mentorship" className="mba_tabs pt-0">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="tablist">
                                            <div className="demo">
                                                <div>

                                                    <ul className={`nav tablistItems nav-tabs nav-justified nav-tabs-dropdown border-0 ${stickyClass}`}>
                                                        <li className="active"><a href="#home"
                                                        >Program Highlights</a></li>
                                                        <li ><a href="#Stories"
                                                        >Success Stories  </a></li>
                                                        <li ><a href="#Abroad"
                                                        >International Collaborations </a></li>
                                                    

                                                        <li ><a target="_blank" href="https://admissions.shooliniuniversity.com/" className="applyBtn"

                                                        >Apply
                                                            Now</a></li>

                                                    </ul>


                                                    <div className="tab-content mt-md-5">
                                                        <div className="tab-pane active" id="home">
                                                            <div className="tabItemData">

                                                                <div className="pagetitle text-center mb-4  ">
                                                                    <div className="pagetitle text-center">
                                                                        <h2> Your Media Journey Begins at Shoolini</h2>
                                                                    </div>



                                                                    <div className="mt-3">
                                                                        <p>
                                                                        With the rapid growth of digital media and the constant flow of information, there is a growing need for journalists who understand the ins and outs of balanced news and new journalistic tools. <strong>Addressing this demand, Shoolini University's School of Media & Communications provides students with industry-leading expertise and practical insights.</strong>
                                                                        </p>
                                                                        <p>
                                                                        The faculty also comprises experts from various new-age mediums such as radio, films, television, and digital media. Visiting faculty from diverse communication fields, including journalism, advertising, PR, photography, graphic design, and corporate communication, regularly interact with students. Graduates receive hands-on training through projects such as the fortnightly broadsheet newspapers in English and Hindi, scripting and anchoring TV bulletins, and producing radio shows.

                                                                            </p>
                                                                      



                                                                    </div>
 
                                                                </div>


                                                                <div className="dataBrdcrmb text-center">
                                                                    <ul className="p-0 m-0">
                                                                        <li><span> <img src="assets/images/icon1.png" /> </span>
                                                                            Duration: <strong> 4 yrs</strong>(Exit as per NEP/ UGC rules)</li>
                                                                        <li> <img src="assets/images/icon2.png" /> Research Degree: <strong>
                                                                        BTech | BSc </strong></li>
                                                                        {/* <li> <img src="assets/images/icon3.png" /> Mode <strong> Full Time, with Hostel Facility</strong></li> */}
                                                                    </ul>
                                                                </div>

                                                                <div className="row mt-md-5">

                                                                    <div className="col-md-6 pl-md-0">
                                                                        <div className="card-box">

                                                                            <h3 className=" text-dark"> Real-Life Media Experience on Campus</h3>

                                                                            <p> India’s No.1 Research University as per QS Asian Rankings 2024, Shoolini has consistently been ranked among the leading institutes of higher education. 
 </p>


                                                                            <div className="row my-4">
                                                                                <div className="col-3">
                                                                                    <div className="sb_logo">
                                                                                        <Image
                                                                                            src="/assets/images/logo3.jpg"
                                                                                            width={80}
                                                                                            className="img-responsive"
                                                                                            height={81}
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-9">
                                                                                    <div className="sb_text">
                                                                                        <h4> Shoolini Newsletter</h4>
                                                                                        <p> (English)
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row my-4">
                                                                                <div className="col-3">
                                                                                    <div className="sb_logo">
                                                                                        <Image
                                                                                            src="/assets/images/NAAC_LOGO.png"
                                                                                            width={80}
                                                                                            className="img-responsive"
                                                                                            height={70}
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-9">
                                                                                    <div className="sb_text">
                                                                                        <h4> Shoolini Patrika</h4>
                                                                                        <p> (Hindi)
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row my-4">
                                                                                <div className="col-3">
                                                                                    <div className="sb_logo">
                                                                                        <Image
                                                                                            src="/assets/images/qs-rankingNew-2024.png"
                                                                                            width={100}
                                                                                            height={36}
                                                                                            className="img-responsive"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-9">
                                                                                    <div className="sb_text">
                                                                                        <h4> Shoolini TV</h4>
                                                                                        <p> 
                                                                                        </p>
                                                                                    </div>
                                                                                </div>



                                                                            </div>
                                                                            <div className="row my-4">
                                                                                <div className="col-3">
                                                                                    <div className="sb_logo">
                                                                                        <Image
                                                                                            src="/assets/images/Indyjskie.png"
                                                                                            width={150}
                                                                                            className="img-responsive"
                                                                                            height={60}
                                                                                        />

                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-9">
                                                                                    <div className="sb_text">
                                                                                        <h4> Radio Shoolini </h4>
                                                                                        <p>
                                                                                        </p>
                                                                                    </div>
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
                                                                          

<div class="npf_wgts" data-height="400px" data-w="a5c6f2dfd05619f11b2095ddcd313946"></div>


                                                                        </div>
                                                                    </div>


                                                                    <div className="col-md-6 mt-5">
                                                                        <div className="card-box">
                                                                            <h3 className="title-default">Real-World Media Exposure   </h3> 
                                                                            <p className="m-0"> 
                                                                            At the Shoolini School of Media, students get industry exposure through visits to newspaper offices, TV studios, and radio stations. These experiences give them a taste of the fast-paced newsroom environment, sharpening their practical skills and preparing them for the media landscape.
</p>

<br />

<h3 className="title-default">Events and Fests  </h3> 
<p className="m-0"> The annual Media Fest and Creators' Fest organised gives students a chance to interact with top media professionals and showcase their own talent. These events feature panel discussions, workshops, and creative competitions, providing students with the opportunity to collaborate with peers and industry experts. It’s the perfect space to learn, network, and grow in the media world.
                                                                            </p>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-md-6 pl-md-0 mt-5">
                                                                        <div className="voices-image position-relative">

                                                                            <Image
                                                                                src="/assets/images/smc/Vipin Pubby.jpeg"
                                                                                width={548}
                                                                                className="img-responsive"
                                                                                height={543}
                                                                            />
                                                                            <div className="namedes">
                                                                                <h4> Vipin Pubby </h4>
                                                                                <h5>Veteran Journalist  </h5>
                                                                                <p> Columnist with 45 years of experience ; Former Editor (The Indian Express)
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                        </div>


                                                        <div className="tab-pane" id="profile">

                                                            <div className="tabItemData">
                                                                <div className="pagetitle text-center">
                                                                    <h2> <span> Start Your Application  </span> </h2>
                                                                </div>
                                                                <div className="dataBrdcrmb text-center">
                                                                    <ul className="p-0 m-0">
                                                                        <li><span> <img src="assets/images/icon1.png" /> </span>
                                                                            Duration <strong> 2yrs | 4 semesters</strong></li>
                                                                        <li> <img src="assets/images/icon2.png" /> Degree <strong>
                                                                            Full-time MBA</strong></li>
                                                                        <li> <img src="assets/images/icon3.png" /> Mode <strong> Fully
                                                                            Residential, on Campus</strong></li>
                                                                    </ul>
                                                                </div>

                                                                <div className="row mt-md-5">
                                                                    <div className="col-md-6">
                                                                        <div className="card-box">
                                                                            <h3 className="title-red"> Start Your MBA Application</h3>
                                                                            <form>

                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="card-box">
                                                                            <h3 className="title-default"> MBA that Gets You Industry-Ready with
                                                                                India's <span> Top Mentorship Program </span></h3>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                        </div>

                                                        <div className="tab-pane" id="messages">
                                                            <div className="tabItemData">
                                                                <div className="pagetitle text-center">
                                                                    <h2> The <span>Specializations</span> </h2>
                                                                </div>
                                                                <div className="dataBrdcrmb text-center">
                                                                    <ul className="p-0 m-0">
                                                                        <li><span> <img src="assets/images/icon1.png" /> </span>
                                                                            Duration <strong> 2yrs | 4 semesters</strong></li>
                                                                        <li> <img src="assets/images/icon2.png" /> Degree <strong>
                                                                            Full-time MBA</strong></li>
                                                                        <li> <img src="assets/images/icon3.png" /> Mode <strong> Fully
                                                                            Residential, on Campus</strong></li>
                                                                    </ul>
                                                                </div>

                                                                <div className="row mt-md-5">
                                                                    <div className="col-md-6">
                                                                        <div className="card-box">
                                                                            <h3 className="title-red"> Start Your MBA Application</h3>
                                                                            <form>

                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="card-box">
                                                                            <h3 className="title-default"> MBA that Gets You Industry-Ready with
                                                                                India's <span> Top Mentorship Program </span></h3>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane" id="settings">
                                                            <div className="tabItemData">
                                                                <div className="pagetitle text-center">
                                                                    <h2> The <span> Fees {'&'} Scholarships</span> </h2>
                                                                </div>
                                                                <div className="dataBrdcrmb text-center">
                                                                    <ul className="p-0 m-0">
                                                                        <li><span> <img src="assets/images/icon1.png" /> </span>
                                                                            Duration <strong> 2yrs | 4 semesters</strong></li>
                                                                        <li> <img src="assets/images/icon2.png" /> Degree <strong>
                                                                            Full-time MBA</strong></li>
                                                                        <li> <img src="assets/images/icon3.png" /> Mode <strong> Fully
                                                                            Residential, on Campus</strong></li>
                                                                    </ul>
                                                                </div>

                                                                <div className="row mt-md-5">
                                                                    <div className="col-md-6">
                                                                        <div className="card-box">
                                                                            <h3 className="title-red"> Start Your MBA Application</h3>
                                                                            <form>

                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="card-box">
                                                                            <h3 className="title-default"> MBA that Gets You Industry-Ready with
                                                                                India's <span> Top Mentorship Program </span></h3>

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


                        <section>
                        <div className="container">
                        <div class="pagetitle text-center mb-4"><h2>Meet our Global Advisory Board </h2></div>
 {/* <div className="row">

 <div className="column">
     <div className="card card-box">
       <div className="icon-wrapper">
         <i className="fa fa-graduation-cap"></i>
       </div>
       <h3>File Patents as Students  </h3>
      
     </div>
   </div>

   <div className="column">
     <div className="card card-box">
       <div className="icon-wrapper">
         <i className="fa fa-globe"></i>
       </div>
       <h3>9 Centres of Excellence</h3>
     
     </div>
   </div>
 
   <div className="column">
     <div className="card card-box">
       <div className="icon-wrapper">
       <i class="fa fa-users" aria-hidden="true"></i>
       </div>
       <h3> Top 2% Faculty </h3>
      
     </div>
   </div>
   <div className="column">
     <div className="card card-box">
       <div className="icon-wrapper">
         <i className="fa fa-book"></i>
       </div>
       <h3>Scholarships in foreign universities</h3>
      
     </div>
   </div>
   <div className="column ">
     <div className="card card-box">
       <div className="icon-wrapper">
         <i className="fa fa-search-plus"></i>
       </div>
       <h3>24x7 Library with EBSCO Access</h3>
      
     </div>
   </div>
  
 </div> */}
 
 <div class="row">
    
      


   
    <div class="col-md-4">
    <div class="expectcontent">
    <div class="expecticon-inner text-center p-4">
    <img src=""/>
    <h3>Nishtha Shukla Anand</h3>
    <span>Ex-Reuters, India Today, Founder: TechThirsty.com & Pen Pundit Media, Trustee and Director, Shoolini University</span>
    </div>
    </div>  
    </div>
 
    <div class="col-md-4">
       <div class="expectcontent">
       <div class="expecticon-inner text-center p-4">
      <img src=""/>
       <h3>Misha Bajwa Chaudhary</h3>
         <span>News Presenter & Actor, ex-AajTak and India TodayN</span>
    
       </div>  
       </div>
       </div>
 
 
       <div class="col-md-4">
          <div class="expectcontent">
          <div class="expecticon-inner text-center p-4">
         <img src=""/>
          <h3> Gurpreet Tathgur</h3>
            <span> AVP Non-Fiction (Viacom 18) </span>
   
          </div>  
          </div>
          </div>
       </div>
 
 <div class="row mt-3">
          <div class="col-md-4">
             <div class="expectcontent">
             <div class="expecticon-inner text-center p-4">
            <img src=""/>
             <h3>Namit Sharma</h3>
               <span>Creator, Producer, Catalyst. CEO - Dreamers & Doers Co. </span>
           
             </div>  
             </div>
             </div>
 
 
 
             <div class="col-md-4">
                <div class="expectcontent">
                <div class="expecticon-inner text-center p-4">
        <img src=""/>
                <h3>Tanvi Gandhi</h3>
                  <span> Independent Producer, ex-YRF & Phantom Films </span>
              
                </div>  
                </div>
                </div>
 
 
                <div class="col-md-4">
                   <div class="expectcontent">
                   <div class="expecticon-inner text-center p-4">
            <img src=""/>
                   <h3>Kunal Nandwani</h3>
                     <span> Co-founder & CEO of uTrade & Founder - Chandigarh Angels Network</span>

                   </div>  
                   </div>
                   </div>
 
 
                </div>

 </div>
</section>


                        <section id="Stories" className="student-voices">
                            <div className="container">
                            <div class="pagetitle text-center mb-4"><h2> Our Students Who Have Gone Places...Literally </h2></div>

                                <div className="row">
                                <Slider {...stories}> 

                                <div className="col-md-4">
                                    <a target="_blank" href="https://shooliniuniversity.com/blog/meet-the-next-gen-biotechnologists-ready-to-conquer-the-world/"> 
                                        <div className="cardImage">
                                            <img className="img-responsive" src="https://shooliniuniversity.com/blog/wp-content/uploads/2023/07/BTech-Biotechnology-Graduates.png" />
                                        </div>
                                        <div className="card-box">
                                            <h3 className="title-default"> Meet the Next-gen Biotechnologists ready to Conquer the World </h3>

                                            <p className="text-18"> In a world full of dreams and determination, four exceptional individuals emerge… ready to script their success stories. Meet Shubhang Jha, Aditya Misra, Aakash K, and Geetika Khattri, talented BTech Biotechnology graduates from Shoolini University who are now ready to revolutionise the landscape of biotechnology and shape a brighter future for humanity.
                                            </p>
                                        </div>
                                        </a>
                                    </div>
                                 

                                    <div className="col-md-4">
                                        <a target="_blank" href="https://shooliniuniversity.com/blog/transforming-journey-of-bapin/"> 
                                        <div className="cardImage">
                                            <img className="img-responsive" src="assets/images/bapin-shoolini.jpg" />
                                        </div>
                                        <div className="card-box">
                                            <h3 className="title-default">Nurtured at Shoolini: Transforming Journey of Bapin </h3>

                                            <p className="text-18"> “A research-focused university and the esteemed faculty list were the compelling factors that drew me to Shoolini University for my Master’s degree. From the very beginning, I was immersed in a stimulating learning environment, where engaging lectures and meaningful interactions with the faculty became an integral part of my educational journey,” 
                                            </p>
                                        </div>
                                        </a>
                                    </div>

                                    <div className="col-md-4">
                                        <a target="_blank"  href="https://shooliniuniversity.com/blog/srp-student-prekshi-among-top-10-pitchers-at-iit/"> 
                                        <div className="cardImage">
                                            <img className="img-responsive" src="https://shooliniuniversity.com/blog/wp-content/uploads/2023/08/Prekshi-SRP-Student-Shoolini.jpg" />
                                        </div>
                                        <div className="card-box">
                                            <h3 className="title-default"> SRP Student Prekshi Among Top 10 Pitchers at IIT
 </h3>

                                            <p className="text-18"> This is a story of the determination and creativity… of Prekshi Sharma… a first-year BTech SRP student at Shoolini University. Making her mark at the ‘Carbon Zero Challenge 2023’ held at IIT Madras, she emerged as one of the top 10 pitchers among a competitive group of IITians, PhD scholars, and tech enthusiasts across India. Her idea bridges innovation and agriculture.
                                            </p>
                                        </div>
                                        </a>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="cardImage">
                                            <img className="img-responsive" src="assets/images/Arkansas.jpeg" />
                                        </div>
                                        <div className="card-box">
                                            <h3 className="title-default"> Student Exchange at the University of Arkansas, USA </h3>

                                            <p className="text-18"> Shoolini collaborates with the University of Arkansas for exchange programs and joint research. Six of our students spent 6+ months in Arkansas university labs. Dr Stephenson from Arkansas also visited Shoolini on Fulbright fellowship. 
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <a target="_blank" href="https://shooliniuniversity.com/blog/mba-2022/"> 
                                    <div className="cardImage">
                                            <img className="img-responsive" src="assets/images/aman.jpg" />
                                        </div>
                                        <div className="card-box">
                                            <h3 className="title-default"> Dr Amanpreet wins International Young Water Fellowship </h3>

                                            <p className="text-18"> Dr Amanpreet Kaur Virk (Alumni, PhD Biotechnology, 2019) is the only Indian to win the Brussels, Belgium-based Young Water Fellowship in 2019. She achieved this for her work on Moringa-based water purification systems. 
                                            </p>
                                        </div>
                                        </a>
                                    </div>

                                 

                                    <div className="col-md-4">
                                        <a target="_blank" href="https://shooliniuniversity.com/blog/from-shoolini-to-johns-hopkins/"> 
                                    <div className="cardImage">
                                            <img className="img-responsive" src="assets/images/Raghav-Rastogi.jpeg" />
                                        </div>
                                        <div className="card-box">
                                   
                                            <h3 className="title-default">From Shoolini to Johns Hopkins </h3>

                                            <p className="text-18"> In a momentous achievement, Raghav Rastogi, a BTech Biotechnology Summit Research Program (SRP) student of Shoolini University has been accepted into an advanced Master’s program at Johns Hopkins University in the United States.Being America’s first research university, admission to a master’s program at Johns Hopkins University is highly competitive. 
                                            </p>
                                        </div>
                                        </a>
                                    </div>


                                    </Slider>
                                </div>
                                
                            </div>
                        </section>

 
                

      <section id="faqs" className="student-voices">
                            <div className="container">

                                <div className="row">
                                 

                                    <div className="col-md-12">

                                        <div className="card-box">
                                            <h3 className="title-default">250+  <span> Hiring Partners </span></h3>
                                            <p> <strong> Internships And Placements:</strong> <br />
                                            Create Your Own Success Story </p>


                                            <div className="row">

                                            <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/smc/ABP.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/smc/News18 TV.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/smc/News Nation TV.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/smc/Punjab Kesari TV.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>

                                               

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/smc/HT.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/smc/Times of India.png" width={200} className="img-responsive" height={70} />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/smc/The Indian Express.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/smc/Adfactor PR.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>


                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/smc/Amar Ujala.jpg" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/smc/PTCgroup.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>


                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/smc/Dainik Bhaskar.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/smc/The Tribune.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/smc/i-Catchers PR.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/smc/Bingo Media.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/smc/fuzion.jpeg" width={200} className="img-responsive" height={100} />
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





                        <section id="specialisation" className="spiecalisation">
                            <div className="container">
                                <div className="row">

                                    {/* <div className="col-md-6 pr-md-0 align-centered">
                                        <div className="card-box ht-auto">
                                            <h3 className="title-default"> <span className="text-red"> Summit Research Program</span>: Join the League of Extraordinary Researchers  </h3>
                                          
                                        
                                            <ul>
                                                <li>Get an Individual Guide from the 1st Year </li>
                                                <li>Conduct Real-life research program </li>
                                                <li> Get extra research credits</li>
                                                <li> Receive an SRP Certificate at the end of the program </li>
                                  
                                                </ul>

                                           

                                            <div class="px-0 btn btn-grad-red"> <a target="_blank" href="https://admissions.shooliniuniversity.com/"  > Need Help? Talk to our Career Counsellor</a></div>

                                        </div>
                                    </div> */}


<div class="col-md-6">
<div class="card-box">
<h3 class="title-default"> <span class="text-red"> Get Industry-Ready with Media & Communications Programs</span></h3>
<p> <strong>Shoolini University’s Media and Communications programs </strong>are created around hands-on learning, equipping students with practical skills that impact the media industry and beyond. Through live projects like newspapers, TV bulletins, and radio shows, students are ready for the fast-paced media landscape. Combined with expert mentorship and internships, these programs prepare graduates to shape the future of communication. </p>
<div class="courselist">
<ul class="p-0">
<li> <a className='journlismatag' target="_blank" href="#"> <strong>  BA Journalism & Mass Communication with specialisations </strong>
<p> 3 years</p></a> </li>
<li> <a  className='journlismatag' target="_blank" href="#"> <strong>  MA Journalism & Mass Communication  </strong>  <p> 2 years</p></a> </li>
<li> <a className='journlismatag' target="_blank" href="#"> <strong>  PhD Journalism  </strong> <p>3 years</p> </a> </li>
<li> <a className='journlismatag' target="_blank" href="#"> <strong>  PhD Mass Communication </strong> <p>3 years</p> </a> </li>

</ul>
</div> 
<div class="px-0 btn btn-grad-red"> 
<a target="_blank" href="https://admissions.shooliniuniversity.com/"> Need Help? Talk to our Career Counsellor</a>
 </div>
 </div>
 </div>

                                    <div className="col-md-6 pl-md-0">
                                        <div className="voices-image position-relative">
                                            <Image src="/assets/images/collabs.jpg" width={558} className="img-responsive" height={420} />

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>

                    </main>

                </Styless>
                <div id="mba_footer">
                    <Footer />
                </div>

            </Suspense>

        </>
    )
}

export default Mbas