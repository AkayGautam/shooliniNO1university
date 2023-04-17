import React, { useState, Suspense, useEffect } from 'react'
import Header from '../../components/Header'
import Styless from './style/style'
import Footer from '../../components/Footer'
import { Modal, Button, Form } from "react-bootstrap";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import Image from "next/legacy/image";
import Head from 'next/head'
import Link from "next/link";

const Mbas = () => {

    useEffect(() => {

        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true; s.src = "https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s);


    }, [])

    const data = [
        {
            title: "Who teaches Biotech programs at Shoolini University?",
            content: "Shoolini University has experienced research-oriented postdoc faculty from top national and international institutions such as Oxford, National Cancer Institute (USA), NIH (USA), and IISc Bangalore."
        },

        {
            title: "What are the future opportunities after completing biotech or food tech from Shoolini?",
            content: "Students can pursue a career in pharmaceuticals, biotechnology, food technology, biomedical science, agri-sciences, environmental management. Students avail international exchange opportunities at campuses like Stanford University (USA) and Gachon University (South Korea)."
        },

        {
            title: "How do you expose students to industry experience?",
            content: "Our learning programs are based on industrial applications. Industrial training is a part of the curriculum for exposure to the working environment and hands-on training for food processing technologies and maintenance of plants and machinery. Our university arranges industrial visits for real-life working scenarios. They gain advanced and industry-relevant skills that help them further their career goals.         "
        },

        {
            title: "Is practical training a part of Biotech and Food Tech programs?",
            content: "We provide competitive internships, training and placement support with various global universities and biotech/food industries. Our students engage in collaborative learning facilitated by group projects and file patents under the guidance of our faculty members. We also follow the one-student one-patent norm.         "
        },

        {
            title: "What are the placement opportunities available for students who have completed Biotech and Food Tech programs at Shoolini University?",
            content: "Our fully functional Placement Cell has tie-ups with various industry giants including Cremica, Verka, Abbott and Nestle who visit the Shoolini campus during Placement Week for on-the-spot Placements. Our 'Mission 130' aims at 100 per cent employability with 30 per cent in top companies.         "
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













    return (
        <>

            <Suspense>

                <Head>
                    <title>Biotech Course, Eligibility, Fees, Admissions 2023 | Shoolini</title>
                    <meta name="description" content="Get admission in Biotech at India’s No.1 Research University - Shoolini. Check Course details, Eligibility, Fee, Placements and Biotech programs available." />
                    <meta name="keywords" content="Biotechnology, biotech, biotech programs, biotech courses, biotechnology fees, biotechnology eligibility, biotechnology admissions 2023, shoolini admissions, admissions2023, first biotechnology university, BTech Biotechnology, BSc Biotechnology, BTech SRP, Summit Research Programs, MSc Biotech, MTech Biotechnology, PhD Biotechnology, BSc Microbiology, Faculty of Applied Sciences and Biotechnology, School of Biotechnology, School of Bioengineering and Food Technology, India’s No.1 Research University, shoolini university, no.1 private university in India" />


                </Head>

                <div id="mbaPage">
                    <Header />
                </div>


                <Styless>





                    <Modal className="" show={show} onHide={handleClose}>

                        <Modal.Body>
                            <h2>Apply Now</h2>
                            <div class="npf_wgts" data-height="400px" data-w="6ecc20f484a5111a5bc1e4b3bc04c426"></div>


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
                                    <div className="col-md-8">
                                        <div className="leftCatd">
                                            <h1 className="mb-0"> <span> Empower Your  <br /><strong> Biotech Future </strong> </span> <br /> With Next-Gen Programs</h1>
                                            <div className="noretype">
                                                <p className="border-right-1"> at India's First Biotech University </p>

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
                                                href="https://admissions.shooliniuniversity.com/"> Apply Now</a>
                                            </div>
                                            {/* <div className="ugImage">
                                            <img src="assets/images/uglogos.png" />
                                        </div> */}
                                        </div>
                                        <div className="row my-md-5">
                                            <div className="col-4">
                                                <div className="placeVal">
                                                    <h3><strong> 100% </strong> <br /> Placements </h3>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="placeVal">
                                                    <h3><strong> 18LPA </strong> <br /> Highest Salary </h3>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="placeVal">
                                                    <h3><strong> 250+ </strong> <br /> Global Alliances </h3>
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
                                                        <li ><a href="#specialization"
                                                        >Internships {'&'} Placements</a></li>
                                                        <li ><a href="#special"
                                                        >Courses</a></li>

                                                        <li ><a href="#faqs"
                                                        > FAQs</a></li>
                                                        <li ><a target="_blank" href="https://admissions.shooliniuniversity.com/" className="applyBtn"

                                                        >Apply
                                                            Now</a></li>

                                                    </ul>


                                                    <div className="tab-content mt-md-5">
                                                        <div className="tab-pane active" id="home">
                                                            <div className="tabItemData">

                                                                <div className="pagetitle text-center mb-4  ">
                                                                    <div className="pagetitle text-center">
                                                                        <h2> Be at <span> Forefront of</span> Biotech Innovation </h2>
                                                                    </div>



                                                                    <div className="mt-3">
                                                                        <p>
                                                                            Discover Shoolini University's Faculty of Applied Sciences {'&'} Biotechnology, <strong> India's first Biotech University!</strong> Our <strong> cutting-edge programs </strong> offer students unparalleled opportunities to develop <strong>ground-breaking solutions</strong> that make a real-world impact. From creating life-saving vaccines to addressing food shortages and reducing environmental pollution, our students are at the forefront of innovation in the health, food, and environment sectors.
                                                                        </p>
                                                                        <div className={isActive ? 'allLogos ' : null} style={{ display: "none" }} >
                                                                            <p>
                                                                                Our mission is to produce <strong> technically skilled </strong> and <strong> capable professionals </strong> in biotechnology and related fields. We provide a range of undergraduate, masters, and doctoral programs in <strong> Biotechnology, Microbiology, Food Technology, Nutrition and Dietetics, </strong> and more.
                                                                                <br /> <br />
                                                                                Join us to be part of a <strong>world-class educational experience</strong>. Together, we can tackle complex challenges in the biotechnology industry and make a positive impact on society.
                                                                            </p>

                                                                        </div>



                                                                    </div>

                                                                    <button onClick={toggleClass} className="btnView">

                                                                        <img className={isActive ? 'rotatebtn ' : null}
                                                                            style={{ width: '60px', height: "auto" }} src="assets/images/seemore.png" /></button>
                                                                </div>


                                                                <div className="dataBrdcrmb text-center">
                                                                    <ul className="p-0 m-0">
                                                                        <li><span> <img src="assets/images/winner.png" /> </span>
                                                                            <strong> 1st Biotech University in India</strong></li>
                                                                        <li> <img src="assets/images/mission.png" />  <strong>
                                                                            Mission 130</strong></li>
                                                                        <li> <img src="assets/images/lab.png" /> <strong> 104+ Labs</strong></li>
                                                                    </ul>
                                                                </div>

                                                                <div className="row mt-md-5">

                                                                    <div className="col-md-6 pl-md-0 order-xs-6">
                                                                        <div className="card-box">

                                                                            <h3 className=" text-dark"> Significant Milestones </h3>




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
                                                                                        <h4> Approved by UGC </h4>
                                                                                        <p> University Grants Commission
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row my-4">
                                                                                <div className="col-3">
                                                                                    <div className="sb_logo">
                                                                                        <Image
                                                                                            src="/assets/images/NAAC_LOGO.png"
                                                                                            width={60}
                                                                                            className="img-responsive"
                                                                                            height={61}
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-9">
                                                                                    <div className="sb_text">
                                                                                        <h4> NAAC Accreditation </h4>
                                                                                        <p> National Assessment And Accreditation Council

                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row my-4">
                                                                                <div className="col-3">
                                                                                    <div className="sb_logo">
                                                                                        <Image
                                                                                            src="/assets/images/Indyjskie.png"
                                                                                            width={120}
                                                                                            height={70}
                                                                                            className="img-responsive"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-9">
                                                                                    <div className="sb_text">
                                                                                        <h4> One Student One Patent </h4>

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row my-4">
                                                                                <div className="col-3">
                                                                                    <div className="sb_logo">
                                                                                        <Image
                                                                                            src="/assets/images/mofpi.png"
                                                                                            width={150}
                                                                                            className="img-responsive"
                                                                                            height={90}
                                                                                        />

                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-9">
                                                                                    <div className="sb_text">
                                                                                        <h4> Approved by HP PERC </h4>
                                                                                        <p>Himachal’s First Commercial Food Testing Laboratory: Set up with Rs 2.85 crore grant (MOFPI)
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>



                                                                        </div>
                                                                    </div>


                                                                    <div className="col-md-6 pr-md-0 order-xs-1">
                                                                        <div className="card-box">
                                                                            <h3 className="title-red"> Start Your Biotechnology Application</h3>
                                                                            <p className="lightTexty">
                                                                                Please fill in the registration form below: <br />
                                                                                <small>  (fields with * are mandatory)</small></p>
                                                                            {/* <form method="post" enctype="multipart/form-data"
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
                                                                                    className="form-btn">Enquire Now</button>

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


                                                                        </form> */}

                                                                            <div class="npf_wgts" data-height="400px" data-w="6ecc20f484a5111a5bc1e4b3bc04c426"></div>



                                                                        </div>
                                                                    </div>




                                                                    <div className="col-md-6 mt-5 order-xs-3">
                                                                        <div className="card-box">
                                                                            <h3 className="title-default"> Powerhouse Behind Your Success: Meet our Industry-Savvy Visionary Leaders</h3> <br />
                                                                            <p> Shoolini University – where nationally and internationally renowned academicians and industry leaders guide students towards achieving their dreams. Our globally recognised faculty are PhD and postdoctoral graduates from prestigious institutions across the world.
                                                                                <br /><br />
                                                                                At Shoolini, we pride ourselves on our <strong> state-of-the-art Biotechnology, Microbiology, and Food Technology labs,</strong>  which provide the perfect environment for learning and conducting groundbreaking research. We are especially proud of our <strong>  Summit Research Program,</strong> The first revolutionary BTech Biotechnology degree program in India.
                                                                                <br /><br />
                                                                                Our <strong>Industry-Savvy Visionary Leaders </strong>  ensure that Shoolini students receive the best education and guidance towards achieving their goals. Let us help you unlock your full potential and reach new heights in your academic and professional journey.
                                                                            </p>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-md-6 pl-md-0 mt-5 order-xs-4">
                                                                        <div className="voices-image position-relative">

                                                                            <Image
                                                                                src="/assets/images/sourabh.JPG"
                                                                                width={548}
                                                                                className="img-responsive"
                                                                                height={607}
                                                                            />
                                                                            <div className="namedes">
                                                                                <h4> Saurabh Kulshrestha</h4>
                                                                                <h5>Dean (Research {"&"} Development) </h5>
                                                                                <p> PhD Biosciences (Jamia Millia Islamia, New Delhi), Postdoc Assignments (University of Kentucky, USA{" &"} Max-Planck Institute for Plant Breeding Research Köln, Germany)</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                    <div className="col-md-12 order-xs-2">
                                                                        <div id="specialization" className="student-voices mt-md-5">

                                                                            <div className="row">
                                                                                <div className="col-md-12">
                                                                                    <div className="card-box">
                                                                                        <h3 className="title-default">Biotech Placements {"&"} Internships</h3>

                                                                                        <p className="text-18"> The dedicated team of experts at the Placement Cell at Shoolini University, including career coaches, employer engagement specialists and events and data management experts, is committed to helping you maximise your career goals.</p>

                                                                                        <div className="text-center">

                                                                                            <div className="row">
                                                                                                <div className="col-3 inRow">
                                                                                                    <div className="icon-image">
                                                                                                        <Image
                                                                                                            src="/assets/images/icon14.png"
                                                                                                            width={50}
                                                                                                            className="w-70"
                                                                                                            height={50}
                                                                                                        />
                                                                                                    </div>
                                                                                                    <div className="placeVal"><h3><strong> 100% </strong> <br /> Placements </h3></div></div>

                                                                                                <div className="col-3 inRow">
                                                                                                    <div className="icon-image">
                                                                                                        <Image
                                                                                                            src="/assets/images/icon13.png"
                                                                                                            width={50}
                                                                                                            className="w-70"
                                                                                                            height={35}
                                                                                                        />
                                                                                                    </div>
                                                                                                    <div className="placeVal"><h3><strong> 100% </strong> <br /> Paid Internships </h3></div></div>

                                                                                                <div className="col-3 inRow">
                                                                                                    <div className="icon-image">
                                                                                                        <Image
                                                                                                            src="/assets/images/icon12.png"
                                                                                                            width={50}
                                                                                                            className="w-70"
                                                                                                            height={35}
                                                                                                        />
                                                                                                    </div>
                                                                                                    <div className="placeVal"><h3><strong> 18LPA </strong> <br /> Highest CTC </h3></div></div>

                                                                                                <div className="col-3 inRow">
                                                                                                    <div className="icon-image">
                                                                                                        <Image
                                                                                                            src="/assets/images/icon11.png"
                                                                                                            width={50}
                                                                                                            className="w-70"
                                                                                                            height={50}
                                                                                                        />
                                                                                                    </div>
                                                                                                    <div className="placeVal"><h3><strong> 250+ </strong> <br /> Recruiting Companies </h3></div></div>
                                                                                            </div>


                                                                                        </div>


                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                        </div>
                                                                    </div>

                                                                    <section id="fees" className="student-voices">
                                                                        <div className="container">
                                                                            {/* <div class="pagetitle text-center mb-4"><h2> Curriculum {'&'}  Fees </h2></div> */}
                                                                            <div className="row">


                                                                                <div className="col-md-6">
                                                                                    <div className="card-box">
                                                                                        <h3 className="title-default"> Innovative {"&"} Ground-Breaking Research </h3>
                                                                                        <p className="text-18"> Top-ranked in BioSpectrum and recognised for excellent Biotech research by CCI and GTU, the Faculty of Applied Sciences and Biotech focuses on bio-molecular and food engineering, biosensor tech, etc.
                                                                                        </p>
                                                                                        <p className="mb-1"><strong>  Current Areas of Research </strong> </p>
                                                                                        <ul className="m-0 p-0 list-block">
                                                                                            <li>Drug discovery for cancer, diabetes, obesity  </li>
                                                                                            <li>Aging and Nutrition </li>
                                                                                            <li>Plant Host-Pathogen Interaction</li>
                                                                                            <li>Bio-fertilizers and Pest Biocontrol</li>
                                                                                            <li>Bioremediation</li>
                                                                                            <li>Metagenomics of Himalayan microflora</li>
                                                                                            <li>Microalgae research</li>
                                                                                            <li>Water purification</li>
                                                                                            <li>Probiotics</li>

                                                                                        </ul>


                                                                                    </div>
                                                                                </div>

                                                                                <div className="col-md-6">
                                                                                    <div className="card-box">

                                                                                        <div className="row">
                                                                                            <div className="col-md-12">

                                                                                                <h3 className="title-default mb-md-4"> The Faculty of Applied Sciences and Biotechnology has two schools: </h3>
                                                                                                <div className="card-boxs">
                                                                                                    <p className="title-default2 mb-0"> <Link href="/school-of-biotechnology"> <strong> School of Biotechnology </strong></Link> </p>

                                                                                                    <p className="text-18"> Biotech Studnets are trained to become future scientists by teaching them molecular tools to solve global issues. Our program also fosters innovation and entrepreneurship by providing workshops and encouraging research skills.
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>

                                                                                            <div className="col-md-12">

                                                                                                <div className="card-boxs pt-0 ">
                                                                                                    <p className="title-default2 mb-0"><Link href="/school-of-bio-engineering-and-food-technology"><strong>School of Bioengineering {"&"} Food Technology </strong> </Link> </p>

                                                                                                    <p className="text-18"> Bio-engineering and food technology students apply engineering principles to biological systems, and equips students with design, analysis, and biomedical technologies.
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>


                                                                                        </div>


                                                                                    </div>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                    </section>







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









                        <section id="faqs" className="student-voices pt-0">
                            <div className="container">
                                <div class="pagetitle text-center mb-4"><h2> Frequently Asked Questions </h2></div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card-box acordianFaq">
                                            <Accordion>
                                                {data.map((item, index) => (
                                                    <AccordionItem key={index}>
                                                        {({ open }) => (
                                                            <>
                                                                <AccordionHeader>
                                                                    <span className={`accordion-title ${open ? 'accordion-active' : ''}`}>{item.title}</span>
                                                                </AccordionHeader>

                                                                <AccordionBody>
                                                                    <div className="accordion-body">
                                                                        {item.content}
                                                                    </div>
                                                                </AccordionBody>
                                                            </>
                                                        )}
                                                    </AccordionItem>
                                                ))}
                                            </Accordion>

                                        </div>
                                    </div>


                                </div>
                            </div>
                        </section>


                        <section id="placements" className="mba-placements">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">

                                        <div className="card-box">
                                            <h3 className="title-default">250+ Top Biotech <span> Hiring Partners </span></h3>
                                            <p> <strong> Unlock Career Opportunities at India’s Top Companies. </strong> <br />
                                                Join the Elite Ranks of our Biotech Alumni Network </p>


                                            <div className="row">
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
                                                <div className={isActive ? 'allLogoss row position-relative ' : null} style={{ display: "none" }}>

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


                        <section id="special" className="spiecalisation">
                            <div className="container">
                                <div className="row">

                                    <div className="col-md-6 pr-md-0">
                                        <div className="card-box">
                                            <h3 className="title-default">Choose more with <span className="text-red"> Shoolini Biotech </span> </h3>
                                            <p> Our future-ready Biotech programs are designed by leading industry experts from the world’s top 1% companies to help you succeed in a dynamic, fast-changing professional landscape.</p>

                                            <div className="courselist">
                                                <ul className="p-0">
                                                    <li> <Link href="/b-tech-bioinformatics"> BTech Bioinformatics </Link> </li>
                                                    <li> <Link href="/b-tech-biotechnology-with-summit-research-program"> BTech Biotechnology (With/Without Research) </Link> </li>

                                                    <li> <Link href="/btech-biotechnology-leet"> BTech Biotechnology (LEET) </Link> </li>
                                                    <li> <Link href="/b-tech-food-technology-leet"> BTech Food Technology LEET </Link> </li>

                                                    <li> <Link href="/b-tech-food-technology-with-summit-research-program"> BTech Food Technology Research</Link> </li>
                                                    <li> <Link href="/bsc-hons-biotechnology"> BSc (Hons) Biotechnology </Link> </li>
                                                    <li> <Link href="/bsc-hons-food-tech"> BSc (Hons) Food Technology </Link> </li>
                                                    <li> <Link href="/bsc-hons-microbiology"> BSc (Hons) Microbiology </Link> </li>
                                                    <li> <Link href="/bsc-nutrition-and-dietetics"> BSc (Hons) Nutrition and Dietetics </Link> </li>
                                                    <li> <Link href="/mtech-biotechnology"> MTech Biotechnology </Link> </li>
                                                    <li> <Link href="/mtech-food-tech"> MTech Food Technology </Link> </li>
                                                    <li> <Link href="/msc-biotechnology-research"> MSc Biotechnology </Link> </li>
                                                    <li> <Link href="/msc-food-technology-research"> MSc Food Technology </Link> </li>
                                                    <li> <Link href="/msc-microbiology-research"> MSc Microbiology </Link> </li>
                                                    <li> <Link href="/msc-nutrition-and-dietetics"> MSc Nutrition and Dietetics </Link> </li>
                                                    <li> <Link href="/phd-biotechnology"> PhD Biotechnology </Link> </li>
                                                    <li> <Link href="/phd-cancer-biology"> PhD Cancer Biology </Link> </li>
                                                    <li> <Link href="/phd-food-technology"> PhD Food Technology </Link> </li>

                                                    <li> <Link href="/phd-genetic-engineering"> PhD Genetic Engineering </Link> </li>
                                                    <li> <Link href="/phd-genetics"> PhD Genetics </Link> </li>
                                                    <li> <Link href="/phd-microbiology"> PhD Microbiology </Link> </li>


                                                </ul>
                                            </div>

                                            <div class="px-0 btn btn-grad-red"> <button onClick={handleShow}  >Need Help? Talk to our Career Counsellor</button></div>

                                        </div>
                                    </div>

                                    <div className="col-md-6 pl-md-0">
                                        <div className="voices-image position-relative">
                                            <Image src="/assets/images/girlstudent.jpg" width={558} className="img-responsive" height={630} />

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