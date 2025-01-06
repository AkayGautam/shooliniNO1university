import React, { useState, Suspense, useEffect } from 'react'
import Header from '../../components/Header'
import Styless from './style/style'
import Footer from '../../components/Footer'
import { Modal, Button, Form } from "react-bootstrap";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import Image from "next/legacy/image";
import Head from 'next/head'
import Slider from 'react-slick'

const index = () => {

    useEffect(() => {

        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true; s.src = "https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s);

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



                    <section className="mobilebanner">
                                    <div className="conatiner">
                                    <div className="row">   
                                <div class="mobileslideDesign">
                        <a href="https://admissions.shooliniuniversity.com/">
                         <img className="none-bannerm" src="assets/images/smc/Mobile size.jpg"/> </a></div>
                         </div></div> </section>





                        <section id="shooliniMBA" className="heroBanner">
                            <div className="container">
                                <div className="row">

                                

                                
<div className="col-md-6 d-flex align-items-center mt-5">
    <div className="leftCatrd mt-5">
    <p className="h2 pt- mb-0"> <strong> CREATE. COMMUNICATE. INSPIRE </strong></p>
    <h1 className="noretypeS"> INDIA’S TOP <span class="text-red"> MEDIA & COMMUNICATIONS</span>
     <br></br> SCHOOL</h1>
<div className="anbtn btn-grad-red"> <a target="_blank" href="https://admissions.shooliniuniversity.com/">Apply Now</a></div></div></div>
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

                                                    {/* <ul className={`nav tablistItems nav-tabs nav-justified nav-tabs-dropdown border-0 ${stickyClass}`}>
                                                        <li className="active"><a href="#home"
                                                        >Program Highlights</a></li>
                                                        <li ><a href="#Stories"
                                                        >Success Stories  </a></li>
                                                        <li ><a href="#Abroad"
                                                        >International Collaborations </a></li>


                                                        <li ><a target="_blank" href="https://admissions.shooliniuniversity.com/" className="applyBtn"

                                                        >Apply
                                                            Now</a></li>

                                                    </ul> */}


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


                                                                {/* <div className="dataBrdcrmb text-center">
                                                                    <ul className="p-0 m-0">
                                                                     <li><span> <img src="assets/images/icon1.png" /> </span>
                                                                            Duration: <strong> 4 yrs</strong>(Exit as per NEP/ UGC rules)</li> 
                                                                         <li> <img src="assets/images/icon2.png" /> Research Degree: <strong>
                                                                            BTech | BSc </strong></li> 
                                                                         <li> <img src="assets/images/icon3.png" /> Mode <strong> Full Time, with Hostel Facility</strong></li>  
                                                                    </ul>
                                                                </div> */}

                                                                <div className="row mt-md-5">

                                                                    <div className="col-md-6 pl-md-0">
                                                                        <div className="card-box">

                                                                            <h3 className=" text-dark"> Real-Life Media Experience on Campus</h3>

                                                                            <p> India’s No.1 Research University as per QS Asian Rankings 2024, Shoolini has consistently been ranked among the leading institutes of higher education.
                                                                            </p>


                                                                            <div className="row my-2">
                                                                                <div className="col-3">
                                                                                    <div className="sb_logo">
                                                                                    <a href="https://shooliniuniversity.com/newsletter" >  <Image
                                                                                            src="/assets/images/smc/newsletterr.png"
                                                                                            width={70}
                                                                                            className="img-responsive"
                                                                                            height={50}
                                                                                        /> </a>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-9">
                                                                                    <div className="sb_text">
                                                                                    <a href="https://shooliniuniversity.com/newsletter" >   <h4> Shoolini Newsletter</h4> </a>
                                                                                        <p> (English)
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row my-2">
                                                                                <div className="col-3">
                                                                                    <div className="sb_logo">
                                                                                        <Image
                                                                                            src="/assets/images/smc/patrikaa.png"
                                                                                            width={70}
                                                                                            className="img-responsive"
                                                                                            height={50}

                                                                        
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

                                                                            <div className="row my-2">
                                                                                <div className="col-3">
                                                                                    <div className="sb_logo">
                                                                                        <a href="https://youtube.com/@shoolinitv8154?feature=shared" >  <Image
                                                                                            src="/assets/images/smc/shooliniTv-logo.png"
                                                                                            width={70}
                                                                                            height={50}
                                                                                            className="img-responsive"
                                                                                        /></a>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-9">
                                                                                    <div className="sb_text">
                                                                                    <a href="https://youtube.com/@shoolinitv8154?feature=shared" >      <h4> Shoolini TV</h4> </a>
                                                                                        <p>
                                                                                    (English) 
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>


                                                                            <div className="row my-2">
                                                                                <div className="col-3">
                                                                                    <div className="sb_logo">
                                                                                        <a href="https://youtube.com/@shoolinitv8154?feature=shared"><Image
                                                                                            src="/assets/images/smc/savad.png"
                                                                                            width={70}
                                                                                            className="img-responsive"
                                                                                            height={50}
                                                                                        /></a>

                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-9">
                                                                                    <div className="sb_text">
                                                                                    <a href="https://youtube.com/@shoolinitv8154?feature=shared">    <h4> Shoolini Samvaad  </h4> </a>
                                                                                        <p> (Hindi)
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>




                                                                            <div className="row my-2">
                                                                                <div className="col-3">
                                                                                    <div className="sb_logo">
                                                                                        <a href="https://open.spotify.com/show/2K8gy8K3BhhrDYtmnZNjcs?si=83efcd5facc84926">  <Image
                                                                                            src="/assets/images/smc/radiooo.png"
                                                                                            width={70}
                                                                                            className="img-responsive"
                                                                                            height={50}
                                                                                        /></a>

                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-9">
                                                                                    <div className="sb_text">
                                                                                    <a href="https://open.spotify.com/show/2K8gy8K3BhhrDYtmnZNjcs?si=83efcd5facc84926">    <h4> Radio Shoolini </h4> </a>
                                                                                        <p> (Bilingual)
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
                                                                               Please fill in the registration form below:  <br />
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
                                                                            <p className="m-0"> The annual <strong>Media Fest and Creators </strong> Fest organised gives students a chance to interact with top media professionals and showcase their own talent. These events feature panel discussions, workshops, and creative competitions, providing students with the opportunity to collaborate with peers and industry experts. It’s the perfect space to learn, network, and grow in the media world.
                                                                            </p>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-md-6 pl-md-0 mt-5">
                                                                        <div className="voices-image position-relative">

                                                                            <Image
                                                                                src="/assets/images/smc/vipinnn.jpeg"
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


                        <section id="globalmember">
                            <div className="container">
                            <div className="row">
                                <div className="pagetitle text-center mb-3"><h2>Meet our Global Advisory Board </h2></div>
                             </div>

                               <div className="boximageglobal">
                             <div className="row ">
                                    <div className="col-md-4">
                                        <div className=" globalcard text-center">
                                            <img className="imgcardimg" src="/assets/images/smc/Nishtha Anand.jpg" width={300} height={300} />
                                            <h3>Nishtha Shukla Anand</h3>
                                            <span><strong className='hightlightprofile'>Ex-Reuters,</strong> India Today, Founder: TechThirsty.com & Pen Pundit Media, Trustee and Director, Shoolini University</span>
                                        </div>
                                    </div>


                                    <div className="col-md-4">
                                        <div className=" globalcard text-center">
                                            <img className="imgcardimg" src="/assets/images/smc/kunal_nandwani.jpg" width={300} height={300} />
                                            <h3>Kunal Nandwani</h3>
                                            <span> Co-founder & CEO of<strong className='hightlightprofile'> uTrade </strong> & Founder - Chandigarh Angels Network</span>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div class="globalcard text-center">
                                            <img className="imgcardimg" src="/assets/images/smc/Gurpreet Tuthgur.jpg" width={300} height={300} />
                                            <h3> Gurpreet Tathgur</h3>
                                            <span> AVP Non-Fiction<strong className='hightlightprofile'> (Viacom 18)</strong></span>
                                        </div>
                                    </div>

                              



                                 

                                    <div className="col-md-4">
                                        <div className="globalcard text-center mt-2">
                                            <img className="imgcardimg" src="/assets/images/smc/Namit Sharma.jpg" width={300} height={300} />
                                            <h3>Namit Sharma</h3>
                                            <span> Creator, Producer, Catalyst. CEO -<strong className='hightlightprofile'> Dreamers & Doers Co.</strong> </span>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="globalcard text-center mt-2">
                                            <img className="imgcardimg" src="/assets/images/smc/Tanvi Gandhi.jpg" width={300} height={300} />
                                            <h3>Tanvi Gandhi</h3>
                                            <span> Independent Producer, <strong className='hightlightprofile'>ex-YRF & Phantom Films</strong> </span>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                            </div>
                        </section>







                        <section id="Stories" className="student-voices">
                            <div className="container">
                                <div className="row">
                                <div class="pagetitle text-center mb-3"><h2> Shoolini Media Students Making an Impact </h2></div></div>

                                <div className="row">
                                    <Slider {...stories}>

                                        <div className="col-md-4">

                                            <div className="cardImage">
                                                <img className="img-responsive" src="/assets/images/smc/Vishakha Thakur.jpeg" />
                                            </div>
                                            <div className="card-box">
                                                <h3 className="title-default"> Vishakha Thakur</h3>

                                                <p className="text-18"> 3.0 TV
                                                    The experienced faculty guided and supported me every step of the way, bringing out the best in me. I applied my newfound skills during my paid internship and got rave reviews. Thanks to the networking and professional development at Shoolini, I got placed at 3.0 TV in Mumbai.
                                                </p>
                                            </div>

                                        </div>

                                        <div className="col-md-4">

                                            <div className="cardImage">
                                                <img className="img-responsive" src="/assets/images/smc/Gautam.jpeg" />
                                            </div>
                                            <div className="card-box">
                                                <h3 className="title-default"> Gautam Sukhija (BAJMC)</h3>

                                                <p className="text-18">
                                                    I always wanted to pursue journalism, but I was not that confident. With continuous support, I have grown from a shy student to leading the Literature and Anchoring Clubs. Shoolini has given me the confidence to embrace the spotlight and I invite others to join this enchanting journey. I applied my newfound skills during my paid internship and got rave reviews. Thanks to the networking and professional development at Shoolini, I got placed at 3.0 TV in Mumbai.
                                                </p>
                                            </div>

                                        </div>


                                        <div className="col-md-4">

                                            <div className="cardImage">
                                                <img className="img-responsive" src="/assets/images/smc/Arushi mishra.png" />
                                            </div>
                                            <div className="card-box">
                                                <h3 className="title-default"> Aarushi Mishra (BAJMC)</h3>

                                                <p className="text-18">
                                                    I take pride in telling the world that I am a student of Shoolini and have been mentored by veteran journalist Vipin Pubby. I am grateful to him for making a confident journalist out of me. Thanks to the practical training, I was placed at WebBila as Senior Marketing Executive.
                                                </p>
                                            </div>

                                        </div>



                                        <div className="col-md-4">

                                            <div className="cardImage">
                                                <img className="img-responsive" src="/assets/images/smc/mannoface.png" />
                                            </div>
                                            <div className="card-box">
                                                <h3 className="title-default">
                                                    Manan Monga, JMC ​</h3>

                                                <p className="text-18">
                                                    The comprehensive curriculum, experienced faculty with industry experience, and practical learning opportunities have shaped my career and helped my personal growth. The university's state-of-the-art facilities, industry visits, and international collaborations provided a well-rounded education. Thank you, Shoolini University for an exceptional education.
                                                </p>
                                            </div>

                                        </div>


                                        <div className="col-md-4">

                                            <div className="cardImage">
                                                <img className="img-responsive" src="/assets/images/smc/Saket.jpeg" />
                                            </div>
                                            <div className="card-box">
                                                <h3 className="title-default">
                                                    Saket Saurabh​</h3>

                                                <p className="text-18">
                                                    Photographing a landscape, person & event is something that has always stuck with me! And I am thankful for all the practical experiences I gained from Shoolini during my program & internship.
                                                </p>
                                            </div>

                                        </div>



                                        <div className="col-md-4">

                                            <div className="cardImage">
                                                <img className="img-responsive" src="/assets/images/smc/Nihit.jpeg" />
                                            </div>
                                            <div className="card-box">
                                                <h3 className="title-default">
                                                    Nihit (BAJMC)​</h3>

                                                <p className="text-18">
                                                    Studying journalism at Shoolini has been an incredible experience. I am humbled to have the chance to shape the narrative and leave my mark on the world, one frame and one post at a time. I feel prepared and confident about my skills in photography & filmmaking.
                                                </p>
                                            </div>

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
                                          
                                            <p> <strong> Internships And Placements:</strong> <br />
                                                Create Your Own Success Story </p>


                                            <div className="row">

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/smc/abp.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/smc/newindia.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>

                                              

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/smc/punjabnew.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>



                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/smc/hindustannew.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/smc/hindunews.png" width={200} className="img-responsive" height={70} />
                                                    </div>
                                                </div>

                                              

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/smc/Amarnew.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>

                                              


                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/smc/danik.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/smc/tribune.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/smc/indiaexpree.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/smc/icatchers.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/smc/bingo.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/smc/Adfactors.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                    
                                                </div>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/smc/fuzion.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/smc/newsnation.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/smc/Ptc.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                </div>

                                              

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/smc/newsX.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                    
                                                </div>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/smc/TT.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                    
                                                </div>

                                                <div className="col-md-3 col-3">
                                                    <div className="logo-file">
                                                        <Image src="/assets/images/smc/penpundit.png" width={200} className="img-responsive" height={100} />
                                                    </div>
                                                    
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
                                                    <li> <a className='journlismatag' target="_blank" href="https://shooliniuniversity.com/ba-in-journalism-and-mass-communication"> <strong>  BA Journalism & Mass Communication </strong>
                                                        <p className='adprtext'> (Event Management, Advertising & PR)</p></a> </li>
                                                    <li> <a className='journlismatag' target="_blank" href="https://shooliniuniversity.com/ma-in-journalism"> <strong>  MA Journalism & Mass Communication  </strong>  </a> </li>
                                                    <li> <a className='journlismatag' target="_blank" href="https://shooliniuniversity.com/phd-journalism"> <strong>  PhD Journalism  </strong> </a> </li>
                                                    <li> <a className='journlismatag' target="_blank" href="https://shooliniuniversity.com/phd-mass-communication"> <strong>  PhD Mass Communication </strong>  </a> </li>

                                                </ul>
                                            </div>
                                            <div class="px-0 btn btn-grad-red">
                                                <a target="_blank" href="https://admissions.shooliniuniversity.com/"> Need Help? Talk to our Career Counsellor</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 pl-md-0">
                                        <div className="voices-image position-relative">
                                            <Image src="/assets/images/smc/girlmedia.jpg" width={580} className="img-responsive" height={580} />

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

export default index