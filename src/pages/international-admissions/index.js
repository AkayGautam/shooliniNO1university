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

                            {/* <div className="modals auto-off" id="demoModal">
                            <div className="modal-dialog  modal-dialog-centered" role="document">
                                <div className="modal-content">

                                    <div className="container-fluid">


                                        <div className="row">

                                            <div className="col-md-12 text-center ">
                                                <h2>Apply Now</h2>


                                                <form method="post" enctype="multipart/form-data"
                                                    action="https://web-in21.mxradon.com/t/FormTracker.aspx"
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
                                                            <input type='email' id='EmailAddress'
                                                                name='EmailAddress' maxlength='100'
                                                                autocomplete='off' required='required'
                                                                className="form-element-field" placeholder=" "
                                                            />
                                                            <div className="form-element-bar"></div>
                                                            <label className="form-element-label"
                                                                for='EmailAddress'>Enter Email Address *</label>

                                                        </div>


                                                        <div className="form-element form-input">
                                                            <input id='Phone' name='Phone'
                                                                maxlength='10' autocomplete='off'
                                                                required='required' className="form-element-field"
                                                                placeholder="Number" type="number" />
                                                            <div className="form-element-bar"></div>
                                                            <label className="form-element-label" for='Phone'>Enter
                                                                Phone Number *</label>

                                                        </div>

                                                        <div className="form-element form-input">


                                                            <select id='mx_Course' name='mx_Course' required='required' className="form-element-field" >
                                                                <option value='' selected="true"></option>
                                                                <option value='Undergraduate' >Undergraduate</option>
                                                                <option value='Postgraduate' >Postgraduate</option>
                                                                <option value='PhD' >PhD</option></select>

                                                            <div className="form-element-bar"></div>
                                                            <label className="form-element-label" for='mx_Course'>Select Course *</label>

                                                        </div>

                                                        <div className="form-element form-input">
                                                            <input type='text' id='mx_Specialization' name='mx_Specialization' maxlength='100' autocomplete='off' required='required' className="form-element-field"
                                                                placeholder="Specialization" />
                                                            <div className="form-element-bar"></div>
                                                            <label className="form-element-label" for='mx_Specialization'>Select Specialization *</label>

                                                        </div>


                                                    </fieldset>


                                                    <div className="form-actions">
                                                        <button id="form-submit-button" type="submit"
                                                            className="form-btn">Apply</button>

                                                    </div>

                                                    <input type="hidden" name="MXHOrgCode" value="64755" />
                                                    <input type="hidden" name="MXHLandingPageId"
                                                        value="8b8c0c2f-5e98-11ed-a19b-0acc9d8b1d02" />
                                                    <input type="hidden" name="MXHFormBehaviour" value="1" />
                                                    <input type="hidden" name="MXHFormDataTransfer" value="0" />
                                                    <input type="hidden" name="MXHRedirectUrl"
                                                        value="https://shooliniuniversity.com/thankyou" />
                                                    <input type="hidden" name="MXHAsc" value="5" /> <input
                                                        type="hidden" name="MXHPageTitle" value="Enquire Now" />
                                                    <input type="hidden" name="MXHOutputMessagePosition"
                                                        value="0" />
                                                    <input type="hidden" name="MXHIsExternallyUsed" value="1" />


                                                </form>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        </Modal.Body>

                    </Modal>

                    {/* <div className="sidebar-icons">
                        <a target="_blank" href="tel:+917018007000" rel="noreferrer">
                            <Image src="/assets/images/call.png" width={50} height={50} />
                            <span> Talk to us</span><small> Mon-Fri | 9 AM to 5 PM</small>
                        </a>
                        <a href="https://admissions.shooliniuniversity.com/?utm_source=Organic&utm_medium=MbaTraffic2023&utm_campaign=MbaTraffic2023" target="_blank">
                            <Image src="/assets/images/hands.png" width={50} height={50} />

                            <span> Apply Now</span>
                        </a>
                    </div> */}
                    <main className="innerBody">
                        <section id="shooliniMBA" className="heroBanner">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8 centerDiv">
                                        <div className="leftCatd">
                                            <h1 className="mb-0"> <span> Empowering diversity</span> <br /> Driving innovation </h1>

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

<Image
                                                        src="/assets/images/NAAC A+.png"
                                                        alt="THE Logo"
                                                        width={96}
                                                        height={90}
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
                                            {/* 
                                            <div className="px-0 btn btn-grad-red xs-none"> <a target="_blank"
                                                href="/"> Be an SRP Fellow</a>
                                            </div> */}
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
                                                        <h3><strong>  {'>'}137  </strong> <br /> H-Index  </h3>
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
                                                                        <h2> SHOOLINI UNIVERSITY: THE RESEARCH HUB </h2>
                                                                    </div>



                                                                    <div className="mt-3">
                                                                        <p>
                                                                            Shoolini University is internationally recognised for its research excellence, attracting outstanding academics, research staff, and students from around the world. As per the QS World University Rankings, Asia, it is the <strong> top research university in India</strong> (Citations per Paper).  </p>
                                                                        <p>
                                                                            Shoolini boasts over <strong> 104 research laboratories</strong>  and <strong> 11 Centres of Excellence, </strong> including an <strong> in-house Cancer Research Centre</strong> . The university is the <strong> 3rd highest patent filer</strong>  in the country, with over <strong> 1,500 patents</strong> .  </p>
                                                                        <p>
                                                                            With an <strong> H-Index of {'<'} 137 </strong>, Shoolini researchers are among the top 2% scientists globally, according to the list released by Stanford University.
                                                                        </p>





                                                                    </div>

                                                                    {/* <button onClick={toggleClass} className="btnView">

                                                                        <img className={isActive ? 'rotatebtn ' : null}
                                                                            style={{ width: '60px', height: "auto" }} src="assets/images/seemore.png" /></button> */}
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

                                                                            <h3 className=" text-dark"> Rankings </h3>

                                                                            <p> India’s No.1 Research University as per QS Asian Rankings 2025, Shoolini has consistently been ranked among the leading institutes of higher education.
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
                                                                                        <h4> QS WORLD UNIVERSITY RANKINGS </h4>
                                                                                        <p className="m-0">No.1 Private University in India </p>
                                                                                        <p>  No.1 Private University (Citations Per Faculty)
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
                                                                                        <h4> THE WORLD UNIVERSITY RANKINGS  </h4>
                                                                                        <p className="m-0"> No.1 University in India (Research Quality)</p>
                                                                                        <p> No.2 University in India (International Outlook) </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row my-4">
                                                                                <div className="col-3">
                                                                                    <div className="sb_logo">
                                                                                        <Image
                                                                                            src="/assets/images/qsw.png"
                                                                                            width={100}
                                                                                            height={36}
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
                                                                                        <h4> THE IMPACT RANKINGS 2024 </h4>
                                                                                        <p>Top 200 University, Globally</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div class="slide-track logosMax">

<div class="slides"><span>  <img src="/assets/images/logo1.png" alt=""/></span>
</div>

<div class="slides"><span>  <img src="/assets/images/logo2.png" alt=""/></span>
</div>

<div class="slides"><span>  <img src="/assets/images/logo3.png" alt=""/></span>
</div>

<div class="slides"><span>  <img src="/assets/images/log04.png" alt=""/></span>
</div>


<div class="slides"><span>  <img src="/assets/images/logo5.png" alt=""/></span>
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


                                                                            <div class="npf_wgts" data-height="470px" data-w="a5c6f2dfd05619f11b2095ddcd313946"></div>


                                                                        </div>
                                                                    </div>




                                                                    <div className="col-md-6 mt-5">
                                                                        <div className="card-box">
                                                                            <h3 className="title-default">SHOOLINI ADVANTAGE   </h3> <br />
                                                                            <ul>
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
                                                                                src="/assets/images/Aerial.jpg"
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

{/*   
                        <section id="Abroad" className="student-voices">
                            <div className="container">
                                <div class="pagetitle text-center mb-4"><h2>ACCREDITATIONS </h2>

                                </div>
                                <div className="row">

                                    <div className="col-md-12">
                                        <div className="card-box">
                                            <p className="mb-0"> Shoolini University has strong academic bonds with 250+ higher educational institutions in 28+ countries. Through meaningful collaborations, our faculty and students avail exchange opportunities in leading foreign universities under various scholarship programs.     </p>

                                            <div class="slide-track logosMax">
                                                <div class="slides">
                                                    <span>  <img src="/assets/images/PCI.png" alt="" /></span>
                                                </div>
                                                <div class="slides">
                                                    <span> 	<img src="/srp-lp/img/Uni_Napoli_512px.png" alt="" /></span>
                                                </div>


                                                <div class="slides">
                                                    <span> 	<img src="/srp-lp/img/usa.png" alt="" /></span>
                                                </div>

                                                <div class="slides">
                                                    <span> 	<img src="/srp-lp/img/nih.jpg" alt="" /></span>
                                                </div>
                                                <div class="slides">
                                                    <span> <img src="/srp-lp/img/Gachonlogo.jpg" alt="" /></span>
                                                </div>
                                                <div class="slides">
                                                    <span> 	<img src="/srp-lp/img/lu.jpg" alt="" /></span>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                   

                                </div>
                            </div>
                        </section>
 */}



                      


                        <section id="specialisation" className="spiecalisation">
                            <div className="container">
                                <div className="row">

                                    <div className="col-md-6 pr-md-0 align-centered">
                                        <div className="card-box ht-auto">
                                            <h3 className="title-default"> <span className="text-red"> Summit Research Program</span>: Join the League of Extraordinary Researchers  </h3>

                                            {/* <p> Our research-intensive BTech curriculum designed by the <strong> Top 2%</strong> Scientists of the World (Stanford University 2021), gives students a competitive edge in the industry by turning them into inventors, academicians, and entrepreneurs. This <strong>transformational program</strong> provides cutting-edge research training and <strong>develops scientific temper </strong> among young minds.  </p> */}
                                            <ul>
                                                <li>Get an Individual Guide from the 1st Year </li>
                                                <li>Conduct Real-life research program </li>
                                                <li> Get extra research credits</li>
                                                <li> Receive an SRP Certificate at the end of the program </li>

                                            </ul>

                                            {/* <div className="courselist">
                                                <ul className="p-0">
                                                    <li> <a target="_blank" href="https://shooliniuniversity.com/b-tech-biotechnology-with-summit-research-program ">  <strong> BTech Biotech </strong>  </a> </li>
                                                    <li> <a target="_blank" href="https://shooliniuniversity.com/b-tech-food-technology-with-summit-research-program "> <strong>BTech Food Tech  </strong>
                                                    </a> </li>
                                                  

                                                </ul>
                                            </div> */}

                                            <div class="px-0 btn btn-grad-red"> <a target="_blank" href="https://admissions.shooliniuniversity.com/"  > Need Help? Talk to our Career Counsellor</a></div>

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