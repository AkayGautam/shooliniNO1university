import React, { useState, Suspense, useEffect } from "react";
import Header from "../../components/Header";
import Styless from "./style/style";
import Footer from "../../components/Footer";
import { Modal, Button, Form } from "react-bootstrap";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import Image from "next/legacy/image";
import Head from "next/head";
import Link from "next/link";
import { GetNavigationSchema, GetFaq } from "@/Api";
import Schema from "@/components/Schema";
import Slider from "react-slick";


const Engineering = (props) => {


  
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    fade:true,
    slidesToShow:1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,

    autoplaySpeed: 2500,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1 ,
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

  useEffect(() => {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://widgets.nopaperforms.com/emwgts.js";
    document.body.appendChild(s);
  }, []);

  const data = [
    {
      title: "What is the admission process of Shoolini University?",
      content:
        "Fill in your details in the form. One of our experienced programme consultants will get in touch with you for detailed information about Engineering programmes and help you with your admission process. ",
    },

    {
      title: "What are the high points of your Engineering programs?",
      content:
        "•	Industry-oriented curriculum at par with global standards       •	Advanced research centres with well-equipped laboratories       •	Third ighest Patent generator in India       •	250+ international exchange opportunities        •	Industry-academic collaborations         •	Skill enhancement ‘SPRINT’ program led by top corporate & industry leaders, entrepreneurs and professional trainers         •	Placements with industry giants             •	Students receive attractive research and overseas fellowships         •	Tie-ups with PEC-SIEMENS Centre of Excellence in Punjab Engineering College, Chandigarh, for joint research and training in latest technologies and software      ",
    },

    {
      title: "What are the Placement opportunities at Shoolini University?",
      content:
        "We have a 100% placement record for our fresh graduates. The proactive Placement Cell provides top-notch opportunities with industry giants like the Bank of America, Genpact, Vardhman, DMI Finance, etc. Summer internships are available with top companies like Nestle, Cadbury, Reliance Jio, Blue Star, Abbott, Lemon Tree, Red Fox, etc. .         ",
    },

    {
      title: "Do students get industry exposure?",
      content:
        "Workshops and seminars with experts are conducted on a regular basis. Shoolini also engages Professors of Practice for practical learning. Our skill enhancement program SPRINT involves hands-on workshops, masterclasses by subject matter experts and the development of soft skills. Students also go on paid internships where they are mentored by leaders in the corporate sector. .         ",
    },

    {
      title: "Are exchange opportunities available to Engineering students?",
      content:
        "The university has MoUs with leading universities in USA, Canada, Italy, the United Kingdom, China, South Africa and Saudi Arabia. Students can choose from a wide range of fully funded programs such as the 2+2 Study Abroad Program. .         ",
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

  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 700
        ? setStickyClass("fixedCHildNav z-50")
        : setStickyClass("relative");
    }
  };

  
  useEffect(() => {
    var s=document.createElement("script"); s.type="text/javascript"; s.async=true; s.src="https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s);
  }, []);


  return (
    <>
      <Suspense>
        <Head>
          <title>
         Engineering Courses, Placements, Admissions 2024 | Shoolini
          </title>
          <meta
            name="description"
            content="Get admission in Engineering at India's No.2 Engineering University - Shoolini. Check Course details, Placements and Engineering programs available."
          />
          <meta
            name="keywords"
            content="Engineering courses, No.2 Engineering University in India, Engineering programs, BTech CSE, Bachelors of Technology, BTech, BTech programs, BTech Biotechnology, Yogananda School of AI Computers and Data Science, Shoolini University, School of Mechanical Civil and Electrical Engineering"
          />
        </Head>
        <Schema navigation={props.schema} faq={props.faq} />

        <div id="mbaPage">
          <Header />
        </div>

        <Styless>
          <Modal className="" show={show} onHide={handleClose}>
            <Modal.Body>
              <h2>Apply Now</h2>
              <div
                className="npf_wgts"
                data-height="400px"
                data-w="6ecc20f484a5111a5bc1e4b3bc04c426"
              ></div>
            </Modal.Body>
          </Modal>

          <div className="sidebar-icons">
            <a target="_blank" href="tel:+917018007000" rel="noreferrer">
              <Image src="/assets/images/call.png" width={50} height={50} />
              <span> Talk to us</span>
              <small> Mon-Fri | 9 AM to 5 PM</small>
            </a>
            <a
              href="https://admissions.shooliniuniversity.com/?utm_source=Organic&utm_medium=MbaTraffic2023&utm_campaign=MbaTraffic2023"
              target="_blank"
            >
              <Image src="/assets/images/hands.png" width={50} height={50} />

              <span> Apply Now</span>
            </a>
          </div>
          <main className="innerBody">
            <section id="shooliniMBA" className="heroBanner bg-white">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 d-flex align-items-center">
                    <div className="leftCatrd pt-4">
 <p className="h2 pt-3 mb-0">
                        {" "}
                        <span> LEADING THE WAY  </span>  
                      </p>
                      <h1 className="noretypeS"> BEST
                       <span className="text-red"> ENGINEERING </span> <br/>
                       UNIVERSITY IN INDIA
                     
                    {/* <p className="text-left mt-3 py-0">
                          <Image
                            src="/assets/images/for.png"
                            alt="THE Logo"
                            width={74}
                            height={58}
                          />
                        </p>
                        <h2 className="L_text"> Engineering </h2> */}
                      </h1>
                        <p> From AI to Civil, explore diverse engineering courses to shape your future!</p>
                      <div className="forMobile d-md-none">
                        <Image
                          src="/assets/images/mobile-banner.jpg"
                          alt="Shoolini Banner"
                          className="mg-responsive w-100"
                          width={535}
                          height={514}
                        />
                      </div>

                      <div className="px-0 btn btn-grad-red">
                        {" "}
                        <a
                          target="_blank"
                          href="https://admissions.shooliniuniversity.com/"
                        >
                          {" "}
                          Apply Now
                        </a>
                      </div>
                   
                    </div>
                   
                  </div>
                  <div className="col-md-6 P-0">
                    <div className="rightCard">
                      <Image
                        src="/assets/images/ai-girl.png"
                        alt="Hero Banner"
                        className="img-responsive d-none w-100"
                        width={700}
                        height={650}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <section className="hero mt-0 pt-0">
              <div classname="herobannermain">
                 <img className="w-100" src="assets/images/mbaslider.jpg" />  
                 </div>
            </section> */}



            {/* section  */}

            <section id="mentorship" className="mba_tabs pt-0">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="tablist">
                      <div className="demo">
                        <div>
                          <ul
                            className={`nav tablistItems nav-tabs nav-justified nav-tabs-dropdown border-0 ${stickyClass}`}
                          >
                            <li className="active">
                              <a href="#home">Program Highlights</a>
                            </li>
                            <li>
                              <a href="#specialization">
                                Internships {"&"} Placements
                              </a>
                            </li>
                            <li>
                              <a href="#special">Specialisations</a>
                            </li>

                            <li>
                              <a href="#faqs"> FAQs</a>
                            </li>
                            <li>
                              <a
                                target="_blank"
                                href="https://admissions.shooliniuniversity.com/"
                                className="applyBtn"
                              >
                                Apply Now
                              </a>
                            </li>
                          </ul>

                          <div className="tab-content mt-md-5">
                            <div className="tab-pane active" id="home">
                              <div className="tabItemData">
                                <div className="pagetitle text-center mb-4  ">
                                  <div className="pagetitle text-center">
                                    <h2>
                                      {" "}
                                      Be Tomorrow's Innovators And Leaders!{" "}
                                    </h2>
                                  </div>

                                  <div className="mt-3">
                                    <p>
                                      Based on the latest industry-relevant
                                      pedagogies, we{" "}
                                      <strong>
                                        {" "}
                                        offer specially designed cutting-edge
                                        engineering programs{" "}
                                      </strong>{" "}
                                      with a strong emphasis on research.
                                    </p>

                                    <div
                                      className={isActive ? "allLogos " : null}
                                      style={{ display: "none" }}
                                    >
                                      <p>
                                        Our{" "}
                                        <strong>
                                          {" "}
                                          ‘Mission 130’ aims at 100%
                                          employability with 30% in top
                                          companies
                                        </strong>{" "}
                                        . Renowned academicians, scientists and
                                        business managers collaborate with us to
                                        make this mission a reality. The
                                        dedicated and student-driven{" "}
                                        <strong>
                                          {" "}
                                          proactive Placement Cell
                                        </strong>{" "}
                                        looks after all activities related to
                                        career development, training and
                                        placement of students.
                                        <br /> <br />
                                        Our One-Student, One-Patent Objective
                                        for Engineering and Science students is
                                        the first initiative in Asia. <br />{" "}
                                        <br />
                                        <strong>
                                          {" "}
                                          Join us to innovate, challenge
                                          thoughts, and stretch possibilities.{" "}
                                        </strong>
                                      </p>
                                    </div>
                                  </div>

                                  <button
                                    onClick={toggleClass}
                                    className="btnView"
                                  >
                                    <img
                                      className={isActive ? "rotatebtn " : null}
                                      style={{ width: "60px", height: "auto" }}
                                      src="assets/images/seemore.png"
                                    />
                                  </button>
                                </div>

                                <div className="dataBrdcrmb text-center">
                                  <ul className="p-0 m-0">
                                    <li>
                                      <span>
                                        {" "}
                                        <img src="assets/images/icon1.png" />{" "}
                                      </span>
                                      No.3 In India in Mech. Engg.{" "}
                                      <strong>
                                        {" "}
                                        SCImago Institutions Rankings{" "}
                                      </strong>
                                    </li>
                                    <li>
                                      {" "}
                                      <img src="assets/images/icon2.png" />{" "}
                                      No.1 in India in Engineering{" "}
                                      <strong>
                                        Times Higher Education Rankings
                                      </strong>
                                    </li>
                                    <li>
                                      {" "}
                                      <img src="assets/images/icon3.png" />
                                      101-150 in India in Engineering{" "}
                                      <strong>NIRF Rankings</strong>
                                    </li>

                                    {/* <li><span> <img src="assets/images/icon1.png" /> </span>
                                                                       <p> No.3 In India in Mechanical Engineering <strong> SCIMAGO Rankings  </strong> </p> </li> */}
                                  </ul>
                                </div>

                                <div className="row mt-md-5">
                                  <div className="col-md-6 pl-md-0">
                                    <div className="card-box">
                                      <h3 className=" text-dark">
                                        {" "}
                                        Approvals | Accreditations{" "}
                                      </h3>

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
                                            <p> University Grants Commission</p>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="row my-4">
                                        <div className="col-3">
                                          <div className="sb_logo">
                                            <Image
                                              src="/assets/images/IBM_logo.png"
                                              width={80}
                                              className="img-responsive"
                                              height={40}
                                            />
                                          </div>
                                        </div>
                                        <div className="col-9">
                                          <div className="sb_text">
                                            <h4> IBM Certifications </h4>
                                            <p> Access to latest technology</p>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="row my-4">
                                        <div className="col-3">
                                          <div className="sb_logo">
                                            <Image
                                              src="/assets/images/Micr.jpg"
                                              width={80}
                                              className="img-responsive"
                                              height={40}
                                            />
                                          </div>
                                        </div>
                                        <div className="col-9">
                                          <div className="sb_text">
                                            <h4>
                                              {" "}
                                              Microsoft {"&"} AWS Academy{" "}
                                            </h4>
                                            <p> Support from global giants</p>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="row my-4">
                                        <div className="col-3">
                                          <div className="sb_logo">
                                            <Image
                                              src="/assets/images/PEC-Logo.jpg"
                                              width={90}
                                              height={65}
                                              className="img-responsive"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-9">
                                          <div className="sb_text">
                                            <h4>
                                              {" "}
                                              PEC-SIEMENS Centre of Excellence{" "}
                                            </h4>
                                            <p>
                                              For joint research {"&"} training
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row my-4">
                                        <div className="col-3">
                                          <div className="sb_logo">
                                            <Image
                                              src="/assets/images/coursera.png"
                                              width={90}
                                              className="img-responsive"
                                              height={20}
                                            />
                                          </div>
                                        </div>
                                        <div className="col-9">
                                          <div className="sb_text">
                                            <h4> Coursera Certifications </h4>
                                            <p>Upskilling for the future</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-md-6 pr-md-0">
                                    <div className="card-box">
                                      <h3 className="title-red">
                                        {" "}
                                        Start Your Engineering Application
                                      </h3>
                                      <p className="lightTexty">
                                        Please fill in the registration form
                                        below: <br />
                                        <small>
                                          {" "}
                                          (fields with * are mandatory)
                                        </small>
                                      </p>

                                      <div class="npf_wgts" data-height="400px" data-w="d5ad466046dab12b6d16994337879962"></div>
                                    </div>
                                  </div>

                                  <div className="col-md-6 mt-5">
                                    <div className="card-box">
                                      <h3 className="title-default">
                                        {" "}
                                        The brightest minds work with you at a
                                        rigorous hub of{" "}
                                        <span> innovation and research. </span>
                                      </h3>{" "}
                                      <br />
                                      <p>
                                        {" "}
                                        Faculty members are the{" "}
                                        <strong>
                                          {" "}
                                          brightest minds from the industry and
                                          academia
                                        </strong>
                                        . They have either completed their
                                        Doctoral studies at leading universities
                                        or have worked in top-tech companies in
                                        leadership positions. <br /> <br />
                                        The experienced team hails from the
                                        University of Berkeley, IIT, IIM, ISB
                                        and other reputed universities in India
                                        and abroad. Apart from regular full-time
                                        faculty, our visiting faculty comprises
                                        corporate leaders who augment the
                                        learning with their practical
                                        experience. <br /> <br />
                                        Passionate about what they do, the
                                        teachers of all Engineering programs are
                                        deeply involved in teaching, research,
                                        and consultancy, and they are teachers
                                        by choice.
                                      </p>
                                    </div>
                                  </div>

                                  <div className="col-md-6 pl-md-0 mt-5">
                                    <div className="voices-image position-relative">
                                      <Image
                                        src="/assets/images/ruhani.jpg"
                                        width={591}
                                        className="img-responsive"
                                        height={580}
                                      />
                                      <div className="namedes">
                                        <h4> Prof Virender Rihani </h4>
                                  
                                        <p>
                                          {" "}
                                          Dean Engineering and Technology
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
                                  <h2>
                                    {" "}
                                    Top-Notch Engineering Placements {"&"}{" "}
                                    Internships{" "}
                                  </h2>
                                </div>
                                <div className="dataBrdcrmb text-center">
                                  <ul className="p-0 m-0">
                                    <li>
                                      <span>
                                        {" "}
                                        <img src="assets/images/icon1.png" />{" "}
                                      </span>
                                      Duration{" "}
                                      <strong> 2yrs | 4 semesters</strong>
                                    </li>
                                    <li>
                                      {" "}
                                      <img src="assets/images/icon2.png" />{" "}
                                      Degree <strong>Full-time MBA</strong>
                                    </li>
                                    <li>
                                      {" "}
                                      <img src="assets/images/icon3.png" /> Mode{" "}
                                      <strong>
                                        {" "}
                                        Fully Residential, on Campus
                                      </strong>
                                    </li>
                                  </ul>
                                </div>

                                <div className="row mt-md-5">
                                  <div className="col-md-6">
                                    <div className="card-box">
                                      <h3 className="title-red">
                                        {" "}
                                        Start Your MBA Application
                                      </h3>
                                      <form></form>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="card-box">
                                      <h3 className="title-default">
                                        {" "}
                                        MBA that Gets You Industry-Ready with
                                        India's{" "}
                                        <span> Top Mentorship Program </span>
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="tab-pane" id="messages">
                              <div className="tabItemData">
                                <div className="pagetitle text-center">
                                  <h2>
                                    {" "}
                                    The <span>Specializations</span>{" "}
                                  </h2>
                                </div>
                                <div className="dataBrdcrmb text-center">
                                  <ul className="p-0 m-0">
                                    <li>
                                      <span>
                                        {" "}
                                        <img src="assets/images/icon1.png" />{" "}
                                      </span>
                                      Duration{" "}
                                      <strong> 2yrs | 4 semesters</strong>
                                    </li>
                                    <li>
                                      {" "}
                                      <img src="assets/images/icon2.png" />{" "}
                                      Degree <strong>Full-time MBA</strong>
                                    </li>
                                    <li>
                                      {" "}
                                      <img src="assets/images/icon3.png" /> Mode{" "}
                                      <strong>
                                        {" "}
                                        Fully Residential, on Campus
                                      </strong>
                                    </li>
                                  </ul>
                                </div>

                                <div className="row mt-md-5">
                                  <div className="col-md-6">
                                    <div className="card-box">
                                      <h3 className="title-red">
                                        {" "}
                                        Start Your MBA Application
                                      </h3>
                                      <form></form>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="card-box">
                                      <h3 className="title-default">
                                        {" "}
                                        MBA that Gets You Industry-Ready with
                                        India's{" "}
                                        <span> Top Mentorship Program </span>
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane" id="settings">
                              <div className="tabItemData">
                                <div className="pagetitle text-center">
                                  <h2>
                                    {" "}
                                    The <span>
                                      {" "}
                                      Fees {"&"} Scholarships
                                    </span>{" "}
                                  </h2>
                                </div>
                                <div className="dataBrdcrmb text-center">
                                  <ul className="p-0 m-0">
                                    <li>
                                      <span>
                                        {" "}
                                        <img src="assets/images/icon1.png" />{" "}
                                      </span>
                                      Duration{" "}
                                      <strong> 2yrs | 4 semesters</strong>
                                    </li>
                                    <li>
                                      {" "}
                                      <img src="assets/images/icon2.png" />{" "}
                                      Degree <strong>Full-time MBA</strong>
                                    </li>
                                    <li>
                                      {" "}
                                      <img src="assets/images/icon3.png" /> Mode{" "}
                                      <strong>
                                        {" "}
                                        Fully Residential, on Campus
                                      </strong>
                                    </li>
                                  </ul>
                                </div>

                                <div className="row mt-md-5">
                                  <div className="col-md-6">
                                    <div className="card-box">
                                      <h3 className="title-red">
                                        {" "}
                                        Start Your MBA Application
                                      </h3>
                                      <form></form>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="card-box">
                                      <h3 className="title-default">
                                        {" "}
                                        MBA that Gets You Industry-Ready with
                                        India's{" "}
                                        <span> Top Mentorship Program </span>
                                      </h3>
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

            <section id="specialization" className="student-voices">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card-box">
                      <h3 className="title-default">
                        Top-Notch Engineering Placements {"&"} Internships
                      </h3>

                      <p className="text-18">
                        {" "}
                        The dedicated team of experts at the Placement Cell at
                        Shoolini University, including career coaches, employer
                        engagement specialists and events and data management
                        experts, is committed to helping you maximise your
                        career goals.{" "}
                      </p>

                      <div className="text-center">
                        <div className="row">
                          <div className="col-4 inRow">
                            <div className="icon-image">
                              <Image
                                src="/assets/images/icon14.png"
                                width={50}
                                className="w-70"
                                height={50}
                              />
                            </div>
                            <div className="placeVal">
                              <h3>
                                <strong> 100% </strong> <br /> Placements{" "}
                              </h3>
                            </div>
                          </div>

                          <div className="col-4 inRow">
                            <div className="icon-image">
                              <Image
                                src="/assets/images/icon13.png"
                                width={50}
                                className="w-70"
                                height={35}
                              />
                            </div>
                            <div className="placeVal">
                              <h3>
                                <strong> 100% </strong> <br /> Paid Internships{" "}
                              </h3>
                            </div>
                          </div>

                          {/* <div className="col-3 inRow">
                            <div className="icon-image">
                              <Image
                                src="/assets/images/icon12.png"
                                width={50}
                                className="w-70"
                                height={35}
                              />
                            </div>
                            <div className="placeVal">
                              <h3>
                                <strong> ₹18LPA </strong> <br /> Highest CTC{" "}
                              </h3>
                            </div>
                          </div> */}

                          <div className="col-4 inRow">
                            <div className="icon-image">
                              <Image
                                src="/assets/images/icon11.png"
                                width={50}
                                className="w-70"
                                height={50}
                              />
                            </div>
                            <div className="placeVal">
                              <h3>
                                <strong> 250+ </strong> <br /> Recruiting
                                Companies{" "}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>



                          {/* <section className="testimonials">
                          <div className="col-md-12  order-xs-5">
                                    <div
                                      id="hiring"
                                      className="student-voices mt-md-5"
                                    >
                                      <div className="container">
                                        <div className="row">
                                        <Slider {...setting}>
                                          <div className="col-md-12">
                                              <div className="row">

                                              <div className="col-md-6 pr-md-0">
                                            <div className="voices-image">
                                              <img
                                                className="img-responsive"
                                                src="assets/images/astha.jpg"
                                              />
                                            </div>
                                          
                                          </div>

                                              <div className="col-md-6 pl-md-0">
                                            <div className="voices-text centers card-box card-box-dark pt-5">
                                              <div class="all-center"> 
                                              <h3 className="title-default text-white">
                                                MBA graduates{" "}
                                                <span className="text-red">
                                                  {" "}
                                                  land dream jobs
                                                </span>{" "}
                                                thanks to the mentorship and
                                                placement program at Shoolini
                                                University
                                              </h3>

                                              <div className="all-discription"> 
                                              <p className="text-white text-18">
                                                {" "}
                                                From the first glance, I fell in love with Shoolini University. Its natural beauty captured my heart.  With 100% placements, outstanding faculty, skill development, and NBA Accreditation, Shoolini became the canvas where my aspirations painted a bright future.{" "}
                                              </p>

                                              <div className="text-right mt-4">
                                                <Image
                                                  src="/assets/images/lorel.png"
                                                  width={250}
                                                  className="w-70"
                                                  height={89}
                                                />
                                              </div>
                                              </div>
                                              </div>

                                            </div>
                                          </div>
                                         
                                              </div>
                                          </div>

                                          <div className="col-md-12">
                                              <div className="row">

                                              <div className="col-md-6 pr-md-0">
                                            <div className="voices-image">
                                              <img
                                                className="img-responsive"
                                                src="assets/images/anuj.jpg"
                                              />
                                            </div>
                                          
                                          </div>

                                              <div className="col-md-6 pl-md-0">
                                            <div className="voices-text centers card-box card-box-dark pt-5">
                                            <div class="all-center"> 
                                              <h3 className="title-default text-white">
                                                MBA graduates{" "}
                                                <span className="text-red">
                                                  {" "}
                                                  land dream jobs
                                                </span>{" "}
                                                thanks to the mentorship and
                                                placement program at Shoolini
                                                University
                                              </h3>
                                              <p className="text-white text-18">
                                                {" "}  I secured a placement at the leading global insurance firm. The Shoolini placement cell worked diligently to help me land this dream job. If you're considering an MBA, Shoolini is the place to be.
                                              </p>

                                            
                                              <div className="text-right mt-4">
                                                <Image
                                                  src="/assets/images/marsh.png"
                                                  width={250}
                                                  className="w-70"
                                                  height={89}
                                                />
                                              </div>
                                            </div>
                                            </div>
                                          </div>
                                         
                                              </div>
                                          </div>

                                          <div className="col-md-12">
                                              <div className="row">

                                              <div className="col-md-6 pr-md-0">
                                            <div className="voices-image">
                                              <img
                                                className="img-responsive"
                                                src="assets/images/subham.jpg"
                                              />
                                            </div>
                                          
                                          </div>

                                              <div className="col-md-6 pl-md-0">
                                            <div className="voices-text centers card-box card-box-dark pt-5">
                                            <div className="all-center"> 
                                              <h3 className="title-default text-white">
                                                MBA graduates{" "}
                                                <span className="text-red">
                                                  {" "}
                                                  land dream jobs
                                                </span>{" "}
                                                thanks to the mentorship and
                                                placement program at Shoolini
                                                University
                                              </h3>
                                              <p className="text-white text-18">
                                                {" "}  Shoolini's curriculum, faculty from top institutions, and emphasis on practical skills have been instrumental in shaping my career path. The university's commitment to industry exposure played a pivotal role in my success. 
                                              </p>
 
                                              <div className="text-right mt-4">
                                                <Image
                                                  src="/assets/images/lorel2.png"
                                                  width={250}
                                                  className="w-70"
                                                  height={89}
                                                />
                                              </div>
                                            </div>
                                            </div>
                                          </div>
                                         
                                              </div>
                                          </div>

                                          <div className="col-md-12">
                                              <div className="row">

                                              <div className="col-md-6 pr-md-0">
                                            <div className="voices-image">
                                              <img
                                                className="img-responsive"
                                                src="assets/images/hasan.jpg"
                                              />
                                            </div>
                                          
                                          </div>

                                              <div className="col-md-6 pl-md-0">
                                            <div className="voices-text centers card-box card-box-dark pt-5">
                                            <div className="all-center"> 
                                              <h3 className="title-default text-white">
                                                MBA graduates{" "}
                                                <span className="text-red">
                                                  {" "}
                                                  land dream jobs
                                                </span>{" "}
                                                thanks to the mentorship and
                                                placement program at Shoolini
                                                University
                                              </h3>
                                              <p className="text-white text-18">
                                                {" "} My MBA journey was amazing at Shoolini! The ATP program gave practical insights and prepared me well, and the top-notch faculty guided me throughout. Thanks to Shoolini.  I not only got a degree but also gained mentors for life.
                                              </p>

                                             
                                              <div className="text-right mt-4">
                                                <Image
                                                  src="/assets/images/life.png"
                                                  width={250}
                                                  className="w-70"
                                                  height={89}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          </div>
                                         
                                              </div>
                                          </div>

                                          <div className="col-md-12">
                                              <div className="row">

                                              <div className="col-md-6 pr-md-0">
                                            <div className="voices-image">
                                              <img
                                                className="img-responsive"
                                                src="assets/images/sparsh.jpg"
                                              />
                                            </div>
                                          
                                          </div>

                                              <div className="col-md-6 pl-md-0">
                                            <div className="voices-text centers card-box card-box-dark pt-5">
                                            <div className="all-center"> 
                                              <h3 className="title-default text-white">
                                                MBA graduates{" "}
                                                <span className="text-red">
                                                  {" "}
                                                  land dream jobs
                                                </span>{" "}
                                                thanks to the mentorship and
                                                placement program at Shoolini
                                                University
                                              </h3>
                                              <p className="text-white text-18">
                                                {" "} I got placed at Aditya Birla Group. All thanks to my faculty and mentors at Shoolini. The Sprint Program was a game-changer in preparing me for my interview. I recommend Shoolini to all MBA aspirants—it's not just education; it's your pathway to success.
                                              </p>

                                             
                                              <div className="text-right mt-4">
                                                <Image
                                                  src="/assets/images/birla.png"
                                                  width={250}
                                                  className="w-70"
                                                  height={89}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                         </div>
                                              </div>
                                          </div>

                                          <div className="col-md-12">
                                              <div className="row">

                                              <div className="col-md-6 pr-md-0">
                                            <div className="voices-image">
                                              <img
                                                className="img-responsive"
                                                src="assets/images/Deepika.jpg"
                                              />
                                            </div>
                                          
                                          </div>

                                              <div className="col-md-6 pl-md-0">
                                            <div className="voices-text centers card-box card-box-dark pt-5">
                                            <div className="all-center"> 
                                              <h3 className="title-default text-white">
                                                MBA graduates{" "}
                                                <span className="text-red">
                                                  {" "}
                                                  land dream jobs
                                                </span>{" "}
                                                thanks to the mentorship and
                                                placement program at Shoolini
                                                University
                                              </h3>
                                              <p className="text-white text-18">
                                                {" "}  Shoolini's curriculum, faculty from top institutions, and emphasis on practical skills have been instrumental in shaping my career path. The university's commitment to industry exposure played a pivotal role in my success. 
                                              </p>

                                              <div className="text-right mt-4">
                                                <Image
                                                  src="/assets/images/icici.png"
                                                  width={250}
                                                  className="w-70"
                                                  height={89}
                                                />
                                              </div>
                                            </div>
                                          </div> </div>
                                         
                                              </div>
                                          </div>
                                          

                                          
                                         </Slider>
                                         
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                          </section> */}
















            <section id="hiring" className="student-voices">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 pr-md-0">
                    <div className="voices-image">
                      <img
                        className="img-responsive"
                        src="assets/images/students.png"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 pl-md-0">
                    <div className="voices-text card-box card-box-dark pt-5">
                      <h3 className="title-default text-white">
                        Engineering graduates{" "}
                        <span className="text-red"> land dream jobs</span>{" "}
                        thanks to the mentorship and placement program of
                        Shoolini University
                      </h3>
                      <p className="text-white text-18">
                        {" "}
                        “ Automation Engineer, Hughes Systique Corporation Pvt.
                        Ltd, Gurgaon Shoolini provided me the perfect platform
                        to acquire the skillset for professional success. I got
                        an amazing offer from Hughes Systique Corporation in my
                        final year and today, I am proud to have a dream job as
                        an Automation Engineer at Hughes Systique Corporation
                        Pvt. Ltd, Gurgaon. I am so glad I chose Shoolini
                        University.”{" "}
                      </p>

                      <div className="text-right mt-4">
                        <Image
                          src="/assets/images/hscWeb.png"
                          width={250}
                          className="w-70"
                          height={89}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>  

            <section id="fees" className="student-voices">
              <div className="container">
                {/* <div class="pagetitle text-center mb-4"><h2> Curriculum {'&'}  Fees </h2></div> */}
                <div className="row">
                  <div className="col-md-6">
                    <div className="card-box">
                      <h3 className="title-default">
                        {" "}
                        Innovative {"&"} Ground-breaking Research{" "}
                      </h3>
                      <p className="text-18">
                        {" "}
                        Shoolini Engineering has received research and
                        infrastructural grants from agencies such as DST &
                        HIMCOSTE.
                      </p>
                      <p>
                        <strong> Current Areas of Research </strong>{" "}
                      </p>
                      <ul className="m-0 p-0 list-block">
                        <li> AI {"&"} ML </li>
                        <li> Mechatronics </li>
                        <li> Nanotechnology </li>
                        <li> Blockchain </li>
                        <li> Material Science </li>
                        <li> Hydro Turbines </li>
                        <li> Manufacturing Technology </li>
                        <li> Renewable Energy (solar, wind, biomass, etc.) </li>
                        <li> Mechanical Design </li>
                        <li> Automobile Engineering </li>
                        <li>
                          {" "}
                          Civil Engineering: Earthquake, transport, building
                          material, green building passive solar design {
                            "&"
                          }{" "}
                          engineering{" "}
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card-box">
                      <h3 className="title-default"> Centres of Excellence </h3>

                      <p>
                        Advanced research centres with well-equipped
                        laboratories{" "}
                      </p>
                      <ul className="m-0 p-0 list-block">
                        <li> Centre for Automobile Education and Research </li>
                        <li> Centre for Excellence in Renewable Energy </li>
                        <li>
                          {" "}
                          Centre for Excellence in Visionary Learning Community
                          of India (VLCI){" "}
                        </li>
                        <li> Remote Centre for IIT Bombay </li>
                        <li> Centre for Artificial Intelligence</li>
                        <li> Research Centre in Data Analytics </li>
                        <li>
                          {" "}
                          Centre of Excellence in Energy Science and Technology{" "}
                        </li>
                      </ul>
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
                      <h3 className="title-default">
                        {" "}
                        Choose More with{" "}
                        <span className="text-red">
                          {" "}
                          Shoolini Engineering{" "}
                        </span>{" "}
                      </h3>
                      <p>
                        <small> Start your Engineering Journey Today </small>
                      </p>
                      <p>
                        Our future-ready Engineering specialisations are
                        designed by leading industry experts from the world’s
                        top 1% companies to help you succeed in a dynamic,
                        fast-changing professional landscape.{" "}
                      </p>

                      <div className="courselist ht-custom">
                        <ul className="p-0">
                          <li>
                            {" "}
                            <Link href="/ba-bsc-hons-mathematics">
                              {" "}
                              BA/BSc (Hons) Mathematics (3/4 years){" "}
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="/bca-artificial-intelligence-machine-learning">
                              {" "}
                              BCA Artificial Intelligence and Machine Learning{" "}
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="/bca-full-stack-developer">
                              {" "}
                              BCA Full-stack Developer{" "}
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="/bca-gaming-graphic">
                              {" "}
                              BCA Gaming and Graphics{" "}
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="/bca-ui-ux"> BCA UI/UX </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="/b-tech-cse-artificial-intelligence-and-machine-learning">
                              {" "}
                              BTech CSE Artificial Intelligence{" "}
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="/b-tech-artificial-intelligence-summit-research-program">
                              {" "}
                              BTech Artificial Intelligence (With/Without
                              Research){" "}
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="/btech-cse-blockchain-iot">
                              {" "}
                              BTech CSE Blockchain & IoT{" "}
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="/b-tech-civil-engineering">
                              {" "}
                              BTech Civil Engineering{" "}
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="/b-tech-civil-engineering-leet">
                              {" "}
                              BTech Civil Engineering (LEET){" "}
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="/b-tech-cse-leet">
                              {" "}
                              BTech (LEET) CSE{" "}
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="/b-tech-cse-cloud-computing">
                              {" "}
                              BTech CSE Cloud Computing{" "}
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="/b-tech-cse-cyber-security">
                              {" "}
                              BTech CSE Cyber Security{" "}
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="/b-tech-cse-data-science">
                              {" "}
                              BTech CSE Data Science{" "}
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="/btech-cse-devops">
                              {" "}
                              BTech CSE DevOps{" "}
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="/btech-cse-game-design-arvr">
                              {" "}
                              BTech CSE Game Design {"&"} AR/ VR{" "}
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="/btech-mechanical-robotics-ai">
                              {" "}
                              BTech Mechanical (Robotics {"&"} AI){" "}
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="/b-tech-renewable-energy">
                              {" "}
                              BTech Renewable Energy {"&"} Sustainability{" "}
                            </Link>{" "}
                          </li>
                       
                          <li>
                            {" "}
                            <Link href="/mca"> MCA </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="/ma-msc-mathematics">
                              {" "}
                              MSc / MA Mathematics{" "}
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="/mtech-civil-engineering">
                              {" "}
                              MTech Civil Engineering{" "}
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="/phd-ai"> PhD AI </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="/phd-big-data">
                              {" "}
                              PhD Big Data{" "}
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="/phd-cloud-computing">
                              {" "}
                              PhD Cloud Computing Tech{" "}
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="/phd-civil-engineering">
                              {" "}
                              PhD Civil{" "}
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="/phd-computer-science-and-engineering">
                              {" "}
                              PhD CSE{" "}
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="/phd-cyber-security">
                              {" "}
                              PhD Cyber Security{" "}
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="/phd-data-analytics">
                              {" "}
                              PhD Data Analytics{" "}
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="/phd-data-science">  PhD Data
                            Sciences </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="/phd-disaster-management">
                              {" "}
                              PhD Disaster Management{" "}
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="/phd-electronics-communication-engineering">
                              {" "}
                              PhD ECE{" "}
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="/phd-energy"> PhD Energy </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="/phd-mathematics">
                              {" "}
                              PhD Mathematics{" "}
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="/phd-mechanical-engineering">
                              {" "}
                              PhD Mechanical{" "}
                            </Link>{" "}
                          </li>
                        </ul>
                      </div>

                      <div class="px-0 btn btn-grad-red">
                        {" "}
                        <button onClick={handleShow}>
                          {" "}
                          Need Help? Ask the Counsellor
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 pl-md-0">
                    <div className="voices-image position-relative">
                      <Image
                        src="/assets/images/eng-girl.jpg"
                        width={558}
                        className="img-responsive"
                        height={500}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="faqs" className="student-voices">
              <div className="container">
                <div class="pagetitle text-center mb-4">
                  <h2> Frequently Asked Questions </h2>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="card-box acordianFaq">
                      <Accordion>
                        {data.map((item, index) => (
                          <AccordionItem key={index}>
                            {({ open }) => (
                              <>
                                <AccordionHeader>
                                  <span
                                    className={`accordion-title ${
                                      open ? "accordion-active" : ""
                                    }`}
                                  >
                                    {item.title}
                                  </span>
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
                      <h3 className="title-default">
                        250+ Top Engineering Hiring Partners{" "}
                      </h3>
                      <p>
                        {" "}
                        Unlock Career Opportunities at India’s Top Companies.
                        Join the Elite Ranks of our Engineering Alumni Network
                      </p>

                      <div className="row">
                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/CSE/citrix.png"
                              width={200}
                              className="img-responsive"
                              height={100}
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/CSE/CodeBrew.jpeg"
                              width={200}
                              className="img-responsive"
                              height={100}
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/CSE/Cogni.jpeg"
                              width={200}
                              className="img-responsive"
                              height={100}
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/CSE/Damco.jpeg"
                              width={200}
                              className="img-responsive"
                              height={100}
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/CSE/Genpact.png"
                              width={200}
                              className="img-responsive"
                              height={100}
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/CSE/huges.png"
                              width={200}
                              className="img-responsive"
                              height={100}
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/CSE/IBM.jpeg"
                              width={200}
                              className="img-responsive"
                              height={100}
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/CSE/KhannaPaper.jpeg"
                              width={200}
                              className="img-responsive"
                              height={100}
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/CSE/Lg.png"
                              width={200}
                              className="img-responsive"
                              height={100}
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/CSE/Netsolutions.jpeg"
                              width={200}
                              className="img-responsive"
                              height={100}
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/CSE/NPF.jpeg"
                              width={200}
                              className="img-responsive"
                              height={80}
                            />
                          </div>
                        </div>
                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/CSE/orange.png"
                              width={200}
                              className="img-responsive"
                              height={70}
                            />
                          </div>
                        </div>
                      </div>

                      <div
                        className={
                          isActive ? "allLogoss row position-relative " : null
                        }
                        style={{ display: "none" }}
                      >
                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/CSE/Peoplestrong.jpeg"
                              width={200}
                              className="img-responsive"
                              height={80}
                            />
                          </div>
                        </div>

                        <div className="col-md-2 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/CSE/polariss.jpeg"
                              width={200}
                              className="img-responsive"
                              height={100}
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/CSE/TataHitachi.png"
                              width={200}
                              className="img-responsive"
                              height={100}
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/engg/havells.png"
                              width={200}
                              className="img-responsive"
                              height={80}
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/engg/Onida.png"
                              width={200}
                              className="img-responsive"
                              height={80}
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/engg/SBIcard.png"
                              width={200}
                              className="img-responsive"
                              height={100}
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/engg/Shubham.png"
                              width={200}
                              className="img-responsive"
                              height={100}
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/engg/microtek.png"
                              width={200}
                              className="img-responsive"
                              height={100}
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/CSE/citrix.png"
                              width={200}
                              className="img-responsive"
                              height={100}
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/engg/logo55.png"
                              width={200}
                              className="img-responsive"
                              height={100}
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/engg/Windowit.png"
                              width={200}
                              className="img-responsive"
                              height={100}
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/engg/xcelris.png"
                              width={200}
                              className="img-responsive"
                              height={80}
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/logos/zydu.png"
                              width={200}
                              className="img-responsive"
                              height={80}
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/logos/l1.png"
                              width={200}
                              className="img-responsive"
                              height={80}
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/logos/bio.png"
                              width={200}
                              className="img-responsive"
                              height={80}
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/logos/hind.png"
                              width={200}
                              className="img-responsive"
                              height={80}
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/management/airtel.png"
                              width={200}
                              className="img-responsive"
                              height={80}
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/management/Byjus.png"
                              width={200}
                              className="img-responsive"
                              height={60}
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/management/Lg.png"
                              width={200}
                              className="img-responsive"
                              height={100}
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/management/ICICIBAnk.png"
                              width={200}
                              className="img-responsive"
                              height={100}
                            />
                          </div>
                        </div>
                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/management/jio.png"
                              width={200}
                              className="img-responsive"
                              height={80}
                            />
                          </div>
                        </div>
                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/management/hindustantimes.png"
                              width={200}
                              className="img-responsive"
                              height={80}
                            />
                          </div>
                        </div>
                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/management/accenture.png"
                              width={200}
                              className="img-responsive"
                              height={60}
                            />
                          </div>
                        </div>
                        <div className="col-md-3 col-3">
                          <div className="logo-file">
                            <Image
                              src="/assets/images/management/airtel.png"
                              width={200}
                              className="img-responsive"
                              height={80}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="moreView">
                          <button
                            className={isActive ? "btnView " : "nullRotate"}
                            onClick={toggleClass}
                          >
                            {" "}
                            <Image
                              src="/assets/images/seemore.png"
                              width={70}
                              className="img-responsive rotatebtn"
                              height={65}
                            />
                          </button>
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
  );
};

export const getServerSideProps = async () => {
  const schema = await GetNavigationSchema();
  const faq = await GetFaq("engineering-courses");

  return {
    props: {
      schema,
      faq,
    },
  };
};

export default Engineering;
