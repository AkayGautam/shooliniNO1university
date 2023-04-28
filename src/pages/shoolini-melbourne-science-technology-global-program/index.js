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

const MelbourneGlobal = () => {
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

  return (
    <>
      <Suspense>
        <Head>
          <title>Global Science & Tech Program | Melbourne University | Shoolini</title>
          <meta name="description" content="Shoolini University & University of Melbourne now offers a 4-year Dual Degree. Spend first 2 years at Shoolini followed by two years in Melbourne. " />
          <meta name="keywords" content="Global Dual Degree Program, Global Science & Technology Program, Shoolini University, University of Melbourne, Bachelors of Science, BSci, Global program, 4-year dual degree" />
        </Head>

        <div id="mbaPage">
          <Header />
        </div>

        <Styless>
          <Modal className="" show={show} onHide={handleClose}>
            <Modal.Body>
              <h2>Apply Now</h2>
              <div
                class="npf_wgts"
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
            <section id="shooliniMBA" className="heroBanner">
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <div className="leftCatd">
                      <h1 className="mb-0">
                        {" "}
                        <span> Your Gateway to </span>
                        <br /> University of Melbourne{" "}
                      </h1>
                      <div className="noretype">
                        {/* <p className="border-right-1"> at India's No.1 <br /> Private University </p> */}
                        
                                                <p className="border-right-1"> A Dual Degree  <br /> Designed by </p>
                                                <p className="text-center py-0">
                                                <Image
                            src="/assets/images/mblogo.png"
                            alt="THE Logo"
                            width={200}
                            height={65}
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
                      {/* <div className="ugImage">
                                            <img src="assets/images/uglogos.png" />
                                        </div> */}
                    </div>
                    <div className="row my-md-5">
                      <div className="col-3">
                        <div className="placeVal">
                          <h3>
                            <strong> 4 Year</strong> <br /> Dual Degree{" "}
                          </h3>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="placeVal">
                          <h3>
                            <strong> 40+ </strong> <br /> Multidisciplinary
                            Courses{" "}
                          </h3>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="placeVal">
                          <h3>
                            <strong> 42 </strong> <br /> Majors{" "}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="rightCard">
                      <Image
                        src="/assets/images/mb-hero.png"
                        alt="Hero Banner"
                        className="mg-responsive w-100"
                        width={300}
                        height={521}
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
                          <ul
                            className={`nav tablistItems nav-tabs nav-justified nav-tabs-dropdown border-0 ${stickyClass}`}
                          >
                            <li className="active">
                              <a href="#home">Program Highlights</a>
                            </li>
                            <li>
                              <a href="#fees">
                                Fees
                              </a>
                            </li>
                            <li>
                              <a href="#special">Majors</a>
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
                                    <h2> Live in the Heart of Melbourne </h2>
                                  </div>

                                  <div className="mt-3">
                                    <p>
                                      Spend the first two years at the Shoolini
                                      campus in Kasauli Hills followed by two
                                      years in Melbourne, one of the world's
                                      most livable cities.
                                    </p>
                                    <p>
                                        Located in the state of Victoria, on the
                                        South East coast of Australia, you will
                                        be living and studying in Australia’s
                                        cultural capital. Voted one of the
                                        world’s most livable cities for nine
                                        consecutive years, Melbourne is known
                                        for its celebration of art, sport,
                                        cuisine and great public transport.{" "}
                                        <br /> <br />
                                        <strong>
                                          {" "}
                                          Study, volunteer, and create lifelong
                                          friendships with peers from all over
                                          Australia and the world.
                                        </strong>{" "}
                                      </p>
                                  </div>

                               
                                </div>

                            

                                <div className="row mt-md-5">
                                  <div className="col-md-6 pl-md-0">
                                    <div className="card-box">
                                      <h3 className=" text-dark">
                                        {" "}
                                        University of Melbourne at a Glance{" "}
                                      </h3>

                                      <div className="row my-4">
                                        <div className="col-3">
                                          <div className="sb_logo">
                                            <Image
                                              src="/assets/images/qs-rankingNew.png"
                                              width={130}
                                              className="img-responsive"
                                              height={60}
                                            />
                                          </div>
                                        </div>
                                        <div className="col-9">
                                          <div className="sb_text">
                                            <h4> #1 in Australia </h4>
                                            <p>
                                              {" "}
                                              for Psychology & Biological
                                              Science (QS World Rankings by
                                              Subject 2022){" "}
                                            </p>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="row my-4">
                                        <div className="col-3">
                                          <div className="sb_logo">
                                            {/* <Image
                                              src="/assets/images/IBM_logo.png"
                                              width={80}
                                              className="img-responsive"
                                              height={40}
                                            /> */}
                                          </div>
                                        </div>
                                        <div className="col-9">
                                          <div className="sb_text">
                                            <h4> #21 in the World</h4>
                                            <p>
                                              {" "}
                                              for Environmental Sciences (QS
                                              World Rankings by Subject 2022){" "}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <h3 className=" text-dark">
                                        {" "}
                                        Shoolini University at a Glance{" "}
                                      </h3>
                                      <div className="row my-4">
                                        <div className="col-3">
                                          <div className="sb_logo">
                                            <Image
                                              src="/assets/images/theRank.png"
                                              width={130}
                                              className="img-responsive"
                                              height={60}
                                            />
                                          </div>
                                        </div>
                                        <div className="col-9">
                                          <div className="sb_text">
                                            <h4>
                                              {" "}
                                              No.1 Private University in India{" "}
                                            </h4>
                                            <p>
                                              {" "}
                                              (Time Higher Education Rankings
                                              2023){" "}
                                            </p>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="row my-4">
                                        <div className="col-3">
                                          <div className="sb_logo">
                                            {/* <Image
                                              src="/assets/images/PEC-Logo.jpg"
                                              width={90}
                                              height={65}
                                              className="img-responsive"
                                            /> */}
                                          </div>
                                        </div>
                                        <div className="col-9">
                                          <div className="sb_text">
                                            <h4> Top 400 Globally </h4>
                                            <p>
                                              (Time Higher Education Rankings
                                              2023)
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-md-6 pr-md-0">
                                    <div className="card-box">
                                      <h3 className="title-red">
                                        {" "}
                                        Start Your Application
                                      </h3>
                                      <p className="lightTexty">
                                        Please fill in the registration form
                                        below: <br />
                                        <small>
                                          {" "}
                                          (fields with * are mandatory)
                                        </small>
                                      </p>

                                      <div
                                        class="npf_wgts"
                                        data-height="410px"
                                        data-w="6ecc20f484a5111a5bc1e4b3bc04c426"
                                      ></div>
                                    </div>
                                  </div>

                                  <div className="col-md-6 mt-5">
                                    <div className="card-box">
                                      <h3 className="title-default">
                                        {" "}
                                        Get a Global Dual Degree
                                      </h3>{" "}
                                    
                                      <p>
                                        {" "}
                                        India's #1 Private University -- Shoolini University & Australia's #1 University -- University of Melbourne now offer a 4-year Dual Degree Program. 
                                      </p>
                                      <h5>
                                        {" "}
                                        What University of Melbourne Delivers{" "}
                                      </h5>
                                      <ul className="m-0 p-0 list-block">
                                        <li>
                                          {" "}
                                          Awards a Dual Degree after 4th year{" "}
                                        </li>

                                        <li>
                                          {" "}
                                          Last 2 years conducted at University
                                          of Melbourne campus{" "}
                                        </li>

                                        <li>
                                          {" "}
                                          Monitoring of learning outcomes and
                                          graduate attributes{" "}
                                        </li>
                                      </ul><br />
                                      <h5>
                                        {" "}
                                        What Shoolini University Delivers{" "}
                                      </h5>
                                      <ul className="mt-0 p-0 list-block">
                                        <li>
                                          Selects {"&"} enrols students for the
                                          University of Melbourne program{" "}
                                        </li>

                                        <li>
                                          {" "}
                                          Lectures, tutorials, practical
                                          classes, on-site support for first 2
                                          years{" "}
                                        </li>

                                        <li>
                                          {" "}
                                          Ongoing assessments such as practical
                                          reports and essays{" "}
                                        </li>
                                      </ul>
                                    </div>
                                  </div>

                                  <div className="col-md-6 pl-md-0 mt-5">
                                    <div className="voices-image position-relative">
                                      <Image
                                        src="/assets/images/mb.jpg"
                                        width={591}
                                        className="img-responsive"
                                        height={580}
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

            <section id="hiring" className="student-voices">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 pr-md-0">
                    <div className="voices-image">
                      <img
                        className="img-responsive"
                        src="assets/images/Facts.jpg"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 pl-md-0">
                    <div className="voices-text card-box card-box-dark pt-5">
                    <h3 className="title-default text-white">
                        {" "}
                        Key Facts of Global Science and Technology Program
                      </h3>

                      <ul className="mt-4 p-0 list-block text-white">
                        <li>
                          This is a Bachelor of Science Dual Degree   </li> <br />
                          <li> After successfully completing their studies, Indian students
                          will be awarded a BSc from the University of Melbourne
                          & Shoolini University   </li><br />
                          
                          <li> Alternative pathway for students
                          who wish to choose from a diverse range of subjects
                          (42 majors) or to complete further studies in
                          Australia </li> <br />
                          <li> International students with a valid study
                          permit are allowed to work for 48 hours a week{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

        

            <section id="fees" className="student-voices">
                            <div className="container">
                                {/* <div class="pagetitle text-center mb-4"><h2> Curriculum {'&'}  Fees </h2></div> */}
                                <div className="row">
                                    <div className="col-md-6 mb-xs-20">
                                        <div className="card-box">
                                            <h3 className="title-default"> Program Details </h3>
                                            <table className="table table-responsive">
                                                <thead>
                                                    <tr>
                                                        <td> <strong> Eligibility </strong> </td>
                                                        <td> </td> </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td> 70% {'&'} above in XII </td>
                                                        <td>   </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="w-100">IELTS band SCORE 7.5 in second year  </td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td> <strong> Fee </strong>  </td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td> <strong> Year 1 {'&'} 2 at Shoolini:</strong>  </td>
                                                    </tr>
                                                    <tr>
                                                        <td> Rs 4.75 lakh per annum (including hostel)  </td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Year 3 {'&'} 4 at UoM:</strong>  </td>
                                                    </tr>
                                                    <tr>
                                                        <td> AUD 45000 tuition fee per annum </td>
                                                    </tr>
                                                   

                                                </tbody>
                                            </table>
                                            <p> <small><i> *We encourage students to publish papers or file a patent for higher chances of receiving a scholarship in Australia </i> </small> </p>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                    <div className="card-box">
                                    <h3 className="title-default">
                        {" "}
                        Why Pursue This Dual Degree
                      </h3>

                      <ul className="mt-4 p-0 list-block">
                        <li>Offers foundational training for STEM students of the future </li> <br />

                        <li>While at Shoolini, students write for highly acclaimed scientific papers </li><br />

                        <li>After completing degree at UoM, students get post study work rights for 4 years  </li><br />

                        <li> After completing 4 years, students can directly enrol into the second year of a relevant master's program </li>
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
                        Choose Your Major at {" "}<br />
                        <span className="text-red">
                          {" "}
                          University of Melbourne{" "}
                        </span>{" "}
                      </h3>
                      <p>
                      Bachelor of Science (B-Sci)
                      </p>
                   
                      <div className="courselist ht-custom">
                        <ul className="m-0 p-0 list-block">
                          <li> Agricultural Science  </li>

                          <li>Animal Health and Disease  </li>

                          <li> Animal Science and Management  </li>

                          <li> Biochemistry and Molecular Biology  </li>

                          <li> Biomedical Engineering Systems	  </li>

                          <li> Biotechnology  </li>

                          <li> Cell and Developmental Biology  </li>

                          <li> Chemical Engineering Systems  </li>

                          <li> Chemistry  </li>

                          <li> Civil Engineering Systems  </li>

                          <li> Climate and Weather  </li>

                          <li> Computing and Software Systems  </li>

                          <li> Data Science  </li>

                          <li> Ecology and Evolutionary Biology  </li>

                          <li> Ecosystem Science  </li>

                          <li> Electrical Engineering Systems  </li>

                          <li> Environmental Engineering Systems  </li>

                          <li> Environmental Science  </li>

                          <li> Food Science  </li>

                          <li> Genetics  </li>

                          <li> Geography  </li>

                          <li> Geology  </li>

                          <li> Human Nutrition  </li>

                          <li> Human Structure and Function  </li>

                          <li> Immunology  </li>

                          <li> Infection and Immunity  </li>

                          <li> Informatics  </li>

                          <li> Marine Biology  </li>

                          <li> Mathematical Physics  </li>

                          <li> Mathematics and Statistics  </li>

                          <li> Mechanical Engineering Systems  </li>

                          <li> Mechatronics Engineering Systems  </li>

                          <li> Microbiology  </li>

                          <li> Neuroscience  </li>

                          <li> Pathology  </li>

                          <li> Pharmacology  </li>

                          <li> Physics  </li>

                          <li> Physiology  </li>

                          <li> Plant Science  </li>

                          <li> Psychology  </li>

                          <li> Spatial Systems  </li>

                          <li> Zoology	  </li>

                          <li> Veterinary Bioscience  </li>

                          <li> Digital Infrastructure Engineering Systems  </li>

                          <li> Computational Biology  </li>
                        </ul>
                      </div>

                      <div class="px-0 btn btn-grad-red">
                        {" "}
                        <button onClick={handleShow}>
                          {" "}
                          Need Help? Connect With Us! 
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 pl-md-0">
                    <div className="voices-image position-relative">
                      <Image
                        src="/assets/images/melbourne.jpg"
                        width={558}
                        className="img-responsive"
                        height={600}
                      />
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

export default MelbourneGlobal;
