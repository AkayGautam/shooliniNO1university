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
import Schema from "@/components/Schema";
import { GetNavigationSchema, GetFaq } from "@/Api";
import Slider from "react-slick";
import { TryRounded } from "@mui/icons-material";


const Mbas = (props) => {
  useEffect(() => {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://widgets.nopaperforms.com/emwgts.js";
    document.body.appendChild(s);
  }, []);

  const data = [
    {
      title: "Who teaches MBA at Shoolini University?",
      content:
        "The faculty at Shoolini University's business school comprises experts in all areas of management studies. Most members have either completed their Doctoral studies at leading universities or have worked in corporate companies at leadership positions. The experienced team hails from the University of Berkeley, IIT, IIM, ISB and other reputed universities in India and abroad. Apart from regular full-time faculty, our visiting faculty comprises corporate leaders who augment the learning with their practical experience. Passionate about what they do, the teachers of all MBA modules are deeply involved in teaching, research, and consultancy, and they are teachers by choice ",
    },

    {
      title: "Tell me about the curriculum for MBA at Shoolini University?",
      content:
        "Shoolini MBA curriculum is based on inputs from industry, alumni and academia. The first four quadmesters cater to the understanding of the fundamental concepts in business management, communications, research, analytics and legal aspects of the business. Students undergo a compulsory two-month summer internship after completion of the first year. In their second year -- quadmester 5 onwards -- students select their major and a minor specialisation. The specialisation choices available to the students are marketing, finance, human resource management, digital, biotechnology, pharmaceutical and healthcare management, rural management, international business and analytics. The course curriculum is dynamic in nature and continuously updated to incorporate the latest developments in the field. Overall, the Shoolini MBA curriculum focuses on knowledge of concepts in business management, development of practical skills for success in the real world and development of responsible business leaders.",
    },

    {
      title:
        "What are the future opportunities after completing MBA from Shoolini University?",
      content:
        "Shoolini MBA graduates have a world of opportunities available to them. Our meticulously designed placement process ensures each student gets a great career opportunity in leading Indian and global corporates. Where few students get a pre-placement offer in their summer internship, others participate in Placement Week. During the Placement season, students have the option to choose jobs that offer packages of more than Rs 8 lakh per annum. Shoolini MBA graduates have been continuously getting absorbed into the public sector. Our alumni have established start-ups in India, Australia, the Middle East, New Zealand and the US. Students have also been extremely successful in corporate leadership positions and others have joined professional NGOs to contribute to society. Our students have also joined reputed institutions of higher learning for their Doctoral studies, while some have opted out of campus placements and joined their family establishments to give them a more professional outlook.         ",
    },

    {
      title: "How do you expose MBA students to industry experience?",
      content:
        "Students of Shoolini University regularly interact with experts from industry through guest lectures, workshops and seminars to get updated on contemporary concepts in business management. Our skill enhancement program SPRINT offers an excellent platform for hands-on workshops with corporates. Each course understanding is augmented with a masterclass by subject matter experts from the industry for deeper and comprehensive understanding. The students also undergo compulsory two months summer internship where they are mentored by leaders in the corporate sector. Students collaborate to solve live problems of the business world by undertaking research projects and participate in consultancy projects led by the faculty.         ",
    },

    {
      title:
        "What are the job prospects after completing MBA? ",
      content:
        "After completing this program, students have a wide range of job opportunities in the commercial sectors, multinational companies and organisations at the global level.         ",
    },

    {
      title: "Why is Shoolini a fully residential MBA?   ",
      content:
        "Experts and academicians from the field believe that the best management education is experienced in a residential programme. Hence, the MBA programme is 100% residential for 24*7 learning. By spending two years on the campus, students can gain a lifetime of experience. The live-in facility offers intensive learning to MBA students, who mostly join after some experience or even a bachelor’s degree.    ",
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

  const slidesetting = {
    dots: true,
    infinite: true,
    speed: 500,
    fade:true,
    slidesToShow:1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,

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

  return (
    <>
      <Suspense>
        <Head>
          <title>
            MBA Course, Eligibility, Fees, Admissions 2024 | Shoolini
          </title>
          <meta
            name="description"
            content="Get admission in MBA at India's No.1 Private University - Shoolini. Check Course details, Eligibility, Fee, Placements and MBA specialisations available."
          />
          <meta
            name="keywords"
            content="master of business administration,mba, mba specialisation, mba courses, mba fees, mba eligibility, mba admissions 2024, shoolini admissions, admissions 2024, data science, agri business management, logistics and supply chain management, tourism, biotechnology, food technology, banking and insurance, business analytics, finance, financial markets, pharma and healthcare management, human resources, marketing, digital marketing, operations, retail management, strategy and consulting, communications, shoolini university, no.1 private university in India"
          />
        </Head>
        <Schema navigation={props.schema} faq={props.faq} />

        <div id="mbaPage">
          <Header />
        </div>

        <Styless>
          <Modal className="" show={show} onHide={handleClose}>
            <Modal.Body>
               <div id="scholarships" className="col-md-12 mt-0">
                                    <div className="card-box">
                                      <h4 className="title-default text-center mod-titlt">
                                        {" "}
                                        Annual Tuition Fee 2024-25
                                      </h4>{" "}
                                

                                  <div className="table-responsive">                
                                  <table className="table table-striped">
                                    <thead>
                                    
                                    </thead>
                                    <tbody className="text-left">
                                    <tr>
                                      
                                      <th  className="text-left" scope="row">
                                      </th>
                                    <th>Annual Fee (HP) </th>
                                    <th>Annual Fee (Others) </th>
                                    <td>   </td>
                                   
                                  </tr>
                                      <tr>
                                      
                                          <th  className="text-left" scope="row">
                                          MBA Finance</th>
                                        <td>Rs 3,50,000 </td>
                                        <td>Rs 3,95,000 </td>
                                        <td> + Hostel </td>
                                       
                                      </tr>

                                      <tr>
                                     
                                        <th  className="text-left" scope="row">MBA Business Analytics</th>
                                        <td>Rs 3,50,000 </td>
                                        <td>Rs 3,95,000 </td>
                                        <td> + Hostel </td>
                                       
                                      </tr>

                                      <tr>
                                        <th  className="text-left" scope="row">MBA Marketing  </th>
                                        <td>Rs 3,25,000 </td>
                                        <td>Rs 3,80,000 </td>
                                        <td> + Hostel </td>
                                    </tr>
                                    <tr>
                                        <th  className="text-left" scope="row">MBA HR </th>
                                        <td>Rs 3,25,000 </td>
                                        <td>Rs 3,80,000 </td>
                                        <td> + Hostel </td>
                                    </tr>
                                    <tr>
                                        <th  className="text-left" scope="row">MBA Pharma {'&'} Healthcare  </th>
                                        <td>Rs 3,25,000 </td>
                                        <td>Rs 3,80,000 </td>
                                        <td> + Hostel </td>
                                    </tr>

                                   
                                    </tbody>
                                  </table>
                                  <p className="smalltext"> <i>*Hostel Mandatory for all students <br />
                                  *Fee is approved by the Govt. Of Himachal Pradesh <br />
*There is 5% annual escalation in the tuition fee
                                  
                                     </i></p>

                                      </div>
                                       </div>
                                       </div> 
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
            {/* <section id="shooliniMBA" className="heroBanner">
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <div className="leftCatd">
                      <h1 className="mb-0">
                        {" "}
                        <span>
                          {" "}
                          Top-ranked <strong> MBA </strong>{" "}
                        </span>{" "}
                        <br /> Mentored by the Top 1%
                      </h1>
                      <div className="noretype">
                        <p className="border-right-1">
                          {" "}
                          at India's No.1 <br /> Private University{" "}
                        </p>
                        <p className="text-center rankinglogos py-0">
                          <Image
                            src="/assets/images/theLogo.png"
                            alt="THE Logo"
                            width={120}
                            height={54}
                          />
                           <Image
                            src="/assets/images/qs-rankingNew.png"
                            alt="THE Logo"
                            width={120}
                            height={45}
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

                      <div className="px-0 btn btn-grad-red xs-none">
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
                    <div className="row my-md-5">
                      <div className="col-4">
                        <div className="placeVal">
                          <h3>
                            <strong> 100% </strong> <br /> Placements{" "}
                          </h3>
                        </div>
                      </div>
                  
                      <div className="col-4">
                        <div className="placeVal">
                          <h3>
                            <strong> 250+ </strong> <br /> Global Alliances{" "}
                          </h3>
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
            </section> */}

            <section className="p-0 bg-white topbanner-fac-section">
            <Slider {...slidesetting}>
              <div className="custom-container">
                <div className="row">
                  <div className="col-md-7 flex-wrap d-flex align-items-center xs-order-2 pad-y">
                    <div className="bannerbody pt-4">
                        <p> Our mission is to be a  <strong> Top 20 B-School.</strong> The Shoolini Business School experience goes much beyond the classroom <span className="text-red">  here you are taught by CXOs</span> and learn through live projects {'&'} business simulations. </p>
                    </div>
                    
                    <div className="bannerId mt-4">
                        <p> <strong> Munish Sehrawat </strong> <br />
                       <strong>  President {'&'} Dean, School of Business Management</strong> <br />
                       ex-HSBC | Citibank | ANZ
                        </p>
                    </div>

                  </div>
                  <div className="col-md-5 mba-banner2nd xs-order-1">
                    <div className="bannerimages">

                    </div>
                  </div>
                </div>
              </div>

              <div className="custom-container">
                <div className="row">
                  <div className="col-md-7 flex-wrap d-flex align-items-center xs-order-2 pad-y">
                    <div className="bannerbody pt-4">
                        <p> <strong> The Shoolini MBA</strong> is one of India's highest ROI programs. It’s where you learn to <strong> think globally, execute strategically</strong> and <span className="text-red"> become a leader who dares to dream bigger.”</span></p>
                    </div>
                    
                    <div className="bannerId mt-4">
                        <p> <strong> Atul Khosla </strong> <br />
                       <strong>  Founder {'&'} VC, Shoolini University</strong> <br />
                        ex-McKinsey | CEO Oliver Wyman | IIT (K) Alumnus 
                        </p>
                    </div>

                  </div>
                  <div className="col-md-5 mba-banner xs-order-1">
                    <div className="bannerimages">

                    </div>
                  </div>
                </div>
              </div>
              </Slider>
            </section>








            {/* section  */}

            <section id="mentorship" className="mba_tabs pt-md-5">
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
                              <a href="#fees">Fees </a>
                            </li>
                            <li>
                              <a href="/mba-merit-scholarships">Scholarships </a>
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
                                      The <span>
                                        {" "}
                                        Shoolini MBA
                                      </span> Experience{" "}
                                    </h2>
                                  </div>

                                  <div className="mt-3">
                                    <p>
                                      The MBA Program offered by the{" "}
                                      <strong>
                                        {" "}
                                        School of Business Management
                                      </strong>{" "}
                                      at Shoolini University is designed for the
                                      future leaders of the corporate world. In
                                      the prestigious NIRF Rankings (2023), the
                                      Shoolini Management School figured among
                                      the 101-125 best Indian institutions.
                                      Shoolini offers an innovative and unique
                                      curriculum that delivers transformative
                                      educational experiences with cutting-edge
                                      specialisations that equip students to
                                      excel in an array of job profiles in the
                                      corporate world.
                                    </p>
                                    <div
                                      className={isActive ? "allLogos " : null}
                                      style={{ display: "none" }}
                                    >
                                      <p>
                                      The program combines theoretical knowledge with practical experiences, internships, and campus placements to develop well-rounded professionals. Shoolini University is the first university in Himachal Pradesh to receive the prestigious <strong> NBA accreditation. </strong>Moreover, it is approved by <strong> HPPERC</strong> (Govt of HP) and <strong>UGC </strong>.
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
                                      Duration <strong> 2yrs</strong>
                                    </li>
                                    <li>
                                      {" "}
                                      <img src="assets/images/icon2.png" />{" "}
                                      Degree <strong>Fully Residential MBA</strong>
                                    </li>
                                    {/* <li> <img src="assets/images/icon3.png" /> Mode <strong> Fully
                                                                        Residential, on Campus</strong></li> */}
                                  </ul>
                                </div>

                                <div className="row mt-md-5">
                                  <div className="col-md-6">
                                    <div
                                      id="specialization"
                                      className="student-voices"
                                    >
                                      <div className="row">
                                        <div className="col-md-12">
                                          <div className="card-box">
                                            <h3 className="title-default">
                                              Top-Notch MBA Placements {"&"}{" "}
                                              Internships
                                            </h3>

                                            <p className="text-18">
                                              The MBA program at Shoolini
                                              University has seen a 100%
                                              placement record year-on-year,
                                              with top corporate companies
                                              hiring Shoolini's capable
                                              students. Our Placement{" "}
                                              <strong> 'Mission 130' </strong>{" "}
                                              aims at 100% employability with
                                              30% great jobs. <br />
                                              The dedicated and proactive
                                              Placement Cell, including career
                                              coaches, employer engagement
                                              specialists and events and data
                                              management experts, is committed
                                              to help you{" "}
                                              <strong>
                                                {" "}
                                                maximise your career goals.
                                              </strong>{" "}
                                            </p>

                                            <div className="text-center">
                                              <div className="row">
                                                <div className="col-6 inRow">
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
                                                      <strong> 100% </strong>{" "}
                                                      <br /> Placements{" "}
                                                    </h3>
                                                  </div>
                                                </div>

                                                <div className="col-6 inRow">
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
                                                      <strong> 100% </strong>{" "}
                                                      <br /> Paid Internships{" "}
                                                    </h3>
                                                  </div>
                                                </div>

                                                {/* <div className="col-6 inRow">
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
                                                      <strong> 18LPA </strong>{" "}
                                                      <br /> Highest CTC{" "}
                                                    </h3>
                                                  </div>
                                                </div> */}

                                                <div className="col-6 inRow">
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
                                                      <strong> 250+ </strong>{" "}
                                                      <br /> Recruiting
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
                                  </div>

                                  <div className="col-md-6 pr-md-0 order-xs-1">
                                    <div className="card-box">
                                      <h3 className="title-red">
                                        {" "}
                                        Start Your MBA Application
                                      </h3>
                                      <p className="lightTexty">
                                        Please fill in the registration form
                                        below: <br />
                                        <small>
                                          {" "}
                                          (fields with * are mandatory)
                                        </small>
                                      </p>
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

                                      <div
                                        class="npf_wgts"
                                        data-height="450px"
                                        data-w="6ecc20f484a5111a5bc1e4b3bc04c426"
                                      ></div>

                                    </div>
                                  </div>

                                  <div
                                    id="placements"
                                    className="mba-placements mt-5"
                                  >
                                    <div className="container">
                                      <div className="row">
                                        <div className="col-md-12">
                                          <div className="card-box">
                                            <h3 className="title-default">
                                              250+ Top MBA{" "}
                                              <span> Hiring Partners </span>
                                            </h3>
                                            <p>
                                              {" "}
                                              <strong>
                                                {" "}
                                                Unlock Career Opportunities at
                                                Multinational Companies.{" "}
                                              </strong>{" "}
                                              <br />
                                              Join the Elite Ranks of our MBA
                                              Alumni Network{" "}
                                            </p>

                                            <div className="row">
                                              <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                  <Image
                                                    src="/assets/images/management/accenture.png"
                                                    width={174}
                                                    className="img-responsive"
                                                    height={46}
                                                  />
                                                </div>
                                              </div>

                                              <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                  <Image
                                                    src="/assets/images/logos/deloitte.jpg"
                                                    width={200}
                                                    className="img-responsive"
                                                    height={100}
                                                  />
                                                </div>
                                              </div>

                                              <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                  <Image
                                                    src="/assets/images/logos/ericsson.png"
                                                    width={165}
                                                    className="img-responsive"
                                                    height={51}
                                                  />
                                                </div>
                                              </div>

                                              <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                  <Image
                                                    src="/assets/images/logos/ici.png"
                                                    width={200}
                                                    className="img-responsive"
                                                    height={100}
                                                  />
                                                </div>
                                              </div>

                                              <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                  <Image
                                                    src="/assets/images/logos/kpmg.jpg"
                                                    width={200}
                                                    className="img-responsive"
                                                    height={100}
                                                  />
                                                </div>
                                              </div>

                                              <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                  <Image
                                                    src="/assets/images/logos/l1.png"
                                                    width={200}
                                                    className="img-responsive"
                                                    height={100}
                                                  />
                                                </div>
                                              </div>

                                              <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                  <Image
                                                    src="/assets/images/management/mercer.png"
                                                    width={200}
                                                    className="img-responsive"
                                                    height={130}
                                                  />
                                                </div>
                                              </div>

                                              <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                  <Image
                                                    src="/assets/images/logos/adani.jpg"
                                                    width={200}
                                                    className="img-responsive"
                                                    height={100}
                                                  />
                                                </div>
                                              </div>

                                              <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                  <Image
                                                    src="/assets/images/logos/grant.jpg"
                                                    width={200}
                                                    className="img-responsive"
                                                    height={100}
                                                  />
                                                </div>
                                              </div>

                                              <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                  <Image
                                                    src="/assets/images/logos/loreal.jpg"
                                                    width={200}
                                                    className="img-responsive"
                                                    height={100}
                                                  />
                                                </div>
                                              </div>

                                              <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                  <Image
                                                    src="/assets/images/logos/piramal.jpg"
                                                    width={200}
                                                    className="img-responsive"
                                                    height={100}
                                                  />
                                                </div>
                                              </div>
                                              <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                  <Image
                                                    src="/assets/images/logos/hind.png"
                                                    width={200}
                                                    className="img-responsive"
                                                    height={100}
                                                  />
                                                </div>
                                              </div>
                                            </div>

                                            <div
                                              className={
                                                isActive
                                                  ? "allLogoss row position-relative "
                                                  : null
                                              }
                                              style={{ display: "none" }}
                                            >
                                              <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                  <Image
                                                    src="/assets/images/management/AdityaBirla.jpg"
                                                    width={200}
                                                    className="img-responsive"
                                                    height={100}
                                                  />
                                                </div>
                                              </div>

                                              <div className="col-md-2 col-3">
                                                <div className="logo-file">
                                                  <Image
                                                    src="/assets/images/logos/america.jpg"
                                                    width={200}
                                                    className="img-responsive"
                                                    height={100}
                                                  />
                                                </div>
                                              </div>

                                              <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                  <Image
                                                    src="/assets/images/logos/genpact.jpg"
                                                    width={200}
                                                    className="img-responsive"
                                                    height={100}
                                                  />
                                                </div>
                                              </div>

                                              <div className="col-md-3 col-3">
                                                <div className="logo-file">
                                                  <Image
                                                    src="/assets/images/logos/american.jpg"
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
                                                  className={
                                                    isActive
                                                      ? "btnView "
                                                      : "nullRotate"
                                                  }
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
                                  </div>

                                  {/* <div id="scholarships" className="col-md-12 mt-5">
                                    <div className="card-box">
                                      <h3 className="title-default">
                                        {" "}
                                        MBA Merit Scholarships
                                      </h3>{" "}
                                      <p> A total of 20 scholarships will be awarded to selected students. The application is open to candidates who have achieved a 90 percentile on the NMAT, 80 percentile on the CAT, a GMAT score of 600, or who are ranked in the top 10 on the Shoolini Management Aptitude Reasoning Test (SMART). After acceptance, qualified MBA candidates must participate in a scholarship interview to demonstrate their abilities and potential. </p>

                                  <div className="table-responsive">                
                                  <table className="table table-striped">
                                    <thead>
                                      <tr className="bg-reds">
                                        <th scope="col">Merit Type</th>
                                        <th className="text-center" scope="col">Tuition Fee</th>
                                        <th className="text-center"  scope="col">Hostel Fee</th>
                                        <th className="text-center"  scope="col">School %</th>
                                        <th className="text-center"  scope="col">Annual School Amt</th>
                                        <th className="text-center"  scope="col">Number of Scholarships</th>
                                     
                                      </tr>
                                    </thead>
                                    <tbody className="text-center">
                                      <tr>
                                        <th  className="text-left" scope="row">Chancellors' MBA Merit Scholarship (100% T+R)</th>
                                        <td>297500</td>
                                        <td>297500</td>
                                        <td>100%</td>
                                        <td>2,97,500</td>
                                        <td>3</td>
                                       
                                      </tr>

                                      <tr>
                                        <th  className="text-left" scope="row">Dean's MBA Merit Scholarship(50%T)</th>
                                        <td>297500</td>
                                        <td>297500</td>
                                        <td>50%</td>
                                        <td>1,48,750</td>
                                        <td>5</td>
                                       
                                      </tr>

                                      <tr>
                                        <th  className="text-left" scope="row">Chancellors' MBA Merit Scholarship (100% T+R)</th>
                                        <td>297500</td>
                                        <td>297500</td>
                                        <td>20%</td>
                                        <td>59,500</td>
                                        <td>10</td>
                                      
                                      </tr>

                                      <tr>
                                        <th  className="text-left" scope="row"> </th>
                                        <td> </td>
                                        <td> </td>
                                        <td> </td>
                                        <td> </td>
                                        <td></td>
                                     
                                      </tr>
                                   
                                    </tbody>
                                  </table>
                                      </div>
                                       </div>
                                       </div> */}

                                  <div className="col-md-6 mt-5 order-xs-3">
                                    <div className="card-box">
                                      <h3 className="title-default">
                                        {" "}
                                        MBA that Gets You Industry-Ready with
                                        India's{" "}
                                        <span> Top Mentorship Program </span>
                                      </h3>{" "}
                                      <br />
                                      <p>
                                        {" "}
                                        Designed and{" "}
                                        <strong>
                                          {" "}
                                          mentored by business leaders from the
                                          world’s top 1% companies{" "}
                                        </strong>
                                        like McKinsey, PwC, Citi and
                                        institutions like the IITs, IIMs, ISB,
                                        the Shoolini MBA gets you industry ready
                                        from the get go. <br />
                                        <br />
                                        As a full-time MBA student, you will develop{" "}
                                        <strong>
                                          {" "}
                                          strong general management and
                                          leadership abilities through a
                                          rigorous experience-based curriculum.{" "}
                                        </strong>
                                        Our multidisciplinary approach empowers
                                        you with the tools to think critically
                                        and make sound decisions.
                                        <br />
                                        <br />
                                        Join a collaborative community of
                                        faculty, alumni, and peers who will
                                        support your success every step of the
                                        way. <br /> <br />
                                        <strong>
                                          {" "}
                                          Invest in your future
                                        </strong>.{" "}
                                        <strong>
                                          {" "}
                                          <span className="text-red">
                                            {" "}
                                            Join our MBA program today!
                                          </span>
                                        </strong>
                                      </p>
                                    </div>
                                  </div>

                                  <div className="col-md-6 pl-md-0 mt-5 order-xs-4">
                                    <div className="voices-image position-relative">
                                      <Image
                                        src="/assets/images/munish.jpg"
                                        width={548}
                                        className="img-responsive"
                                        height={607}
                                      />
                                      <div className="namedes">
                                        <h4> Munish Sahrawat</h4>
                                        <h5>
                                          {" "}
                                          President {'&'} Dean, Faculty of Management Sciences{" "}
                                        </h5>
                                        <p> 25-year experience in Financial Services </p>
                                        <p> Higher Education {'&'} Startups in India</p>
                                        <p> Middle East, Hong Kong</p>
                                      </div>
                                    </div>
                                  </div>



                                    <section id="special" className="spiecalisation pb-0">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="card-box">
                      <h3 className="title-default">
                        {" "}
                        <span className="text-red"> Shoolini MBA:</span> Pick a
                        Specialisation
                      </h3>
                      <p>
                        {" "}
                        Our future-ready MBA specialisations are{" "}
                        <strong>
                          {" "}
                          designed by leading industry experts from the world’s
                          top 1% companies{" "}
                        </strong>{" "}
                        to help you succeed in a dynamic, fast-changing business
                        landscape.{" "}
                      </p>

                      <div className="courselist">
                        <ul className="p-0">
                          <li>
                            {" "}
                            <a
                              target="_blank"
                              href="https://shooliniuniversity.com/mba-marketing"
                            >
                              {" "}
                          <strong>  Marketing  </strong> 
                              <p> (Digital Marketing, Brand Management & Retail)
 </p> 
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              target="_blank"
                              href="https://shooliniuniversity.com/mba-finance"
                            >
                              {" "}
                              <strong>   Finance  </strong>  {" "}
                             <p> (FinTech, Venture Capital, BFSI, Financial Derivatives)
 </p>
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              target="_blank"
                              href="https://shooliniuniversity.com/mba-human-resource"
                            >
                              {" "}
                              <strong>   Human Resources  </strong>  {" "}
                            </a>{" "}
                          </li>
                        
                          <li>
                            {" "}
                            <a
                              target="_blank"
                              href="https://shooliniuniversity.com/mba-pharma"
                            >
                              {" "}
                              <strong>   Pharma and Healthcare  </strong>  {" "}
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              target="_blank"
                              href="https://shooliniuniversity.com/mba-business-analytics"
                            >
                              {" "}
                              <strong>  Business Analytics  </strong>  {" "}
                            </a>{" "}
                          </li>
                          
                        </ul>
                      </div>

                      <div className="px-0 btn btn-grad-red">
                        {" "}
                        <a target="_blank" href="https://admissions.shooliniuniversity.com/">
                          {" "}
                          Need Help? Consult MBA Mentor
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card-box">
                      <h3 className="title-default">
                        {" "}
                        Skill Development for Life-Long Learning{" "}
                      </h3>
                      <p className="text-18">
                        {" "}
                        <strong> SPRINT </strong> <br /> Skill Progression
                        through Rapid, Intensive & Innovative Training (SPRINT)
                        is a week-long program focusing on industry exposure,
                        and hands-on training through workshops, games and guest
                        lectures. <br />
                        <br />
                        <strong> Advanced Training Program (ATP) </strong>{" "}
                        <br />
                        The School of Business Management launched the fully
                        residential Advanced Training Program (ATP). This 21-day
                        program equips students with strong problem-solving
                        skills and conceptual knowledge.
                        <br />
                        <br />
                        <strong> Leadership Through Mentorship</strong>
                        <br />
                        This connects MBA students with the corporate world. The innovative program brings together top industry experts like CEOs, CHROs, CLOs, and other country heads to provide career guidance and networking opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>               
                                   

                                  <div className="col-md-12 mt-5">
                                    <div className="card-box">
                                      <h3 className=" text-dark text-center">
                                        {" "}
                                        Accreditations {"&"} Rankings{" "}
                                      </h3>

                                      <div className="row">
                                        <div className="col-md-3">
                                          <div className="row my-4">
                                            <div className="col-12">
                                              <div className="sb_logo">
                                                <Image
                                                  src="/assets/images/logo3.jpg"
                                                  width={80}
                                                  className="img-responsive"
                                                  height={81}
                                                />
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="sb_text">
                                                <h4> Approved by UGC </h4>
                                                <p>
                                                  {" "}
                                                  University Grants Commission
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-3">
                                          <div className="row my-4">
                                            <div className="col-12">
                                              <div className="sb_logo">
                                                <Image
                                                  src="/assets/images/logo4.jpg"
                                                  width={80}
                                                  className="img-responsive"
                                                  height={81}
                                                />
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="sb_text">
                                                <h4> NBA Accreditation </h4>
                                                <p>
                                                  {" "}
                                                  1st university in Himachal
                                                  Pradesh to be granted NBA
                                                  Accreditation for its MBA
                                                  Program
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-3">
                                          <div className="row my-4">
                                            <div className="col-12">
                                              <div className="sb_logo">
                                                <Image
                                                  src="/assets/images/logo1.jpg"
                                                  width={80}
                                                  height={54}
                                                  className="img-responsive"
                                                />
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="sb_text">
                                                <h4>
                                                  {" "}
                                                  #101-125 in Management{" "}
                                                </h4>
                                                <p>
                                                  {" "}
                                                  NIRF India Rankings 2024{" "}
                                                  <br /> Ministry of Education,
                                                  Government of India
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-3">
                                          <div className="row my-4">
                                            <div className="col-12">
                                              <div className="sb_logo">
                                                <Image
                                                  src="/assets/images/logo2.jpg"
                                                  width={80}
                                                  className="img-responsive"
                                                  height={81}
                                                />
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="sb_text">
                                                <h4> Approved by HP PERC </h4>
                                                <p>
                                                  HP Private Educational
                                                  Institutions Regulatory
                                                  Commission, Govt of HP
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

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

            <section id="fees" className="student-voices">
              <div className="container">
                {/* <div class="pagetitle text-center mb-4"><h2> Curriculum {'&'}  Fees </h2></div> */}
                <div className="row">
                  <div className="col-md-6 mb-xs-20">
                    <div className="card-box">
                      <h3 className="title-default"> Fees </h3>
                      <table className="table table-responsive">
                        <thead>
                          <tr>
                            <td>
                              {" "}
                              <strong> Tuition Fee  </strong>{" "}
                            </td>
                            {/* <td> ₹221000 </td> */}
                            <td> <a className="viewFeeDetail" onClick={handleShow} href="javascript:void(0)"> Click for Details </a>  </td>
                          </tr>
                        </thead>
                        <tbody>
                        
                          <tr>
                            <td> Duration </td>
                            <td> 2 Years </td>
                          </tr>

                          <tr>
                            <td>
                              <strong>Eligibility: </strong>{" "}
                            </td>
                            <td> </td>
                          </tr>
                          <tr>
                            <td>
                              {" "}
                              A bachelor’s degree (any discipline) with minimum 55% marks
                            </td>
                            <td> </td>
                          </tr>

                          <tr>
                            <td>
                              <strong>Admission Criteria: </strong>{" "}
                            </td>
                            <td> </td>
                          </tr>
                          <tr>
                            <td>
                            GMAT{'>'}=550 OR NAMT{'>'}=160 OR CAT/XAT-{'>'}=50 percentile or MAT/CMAT/HPUMAT-70 percentile or Shoolini University's multiple choice entrance test, and faculty interaction
                            </td>
                            <td> </td>
                          </tr>
                       
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="voices-image position-relative ht-100">
                    <div className="card-box ">
                                             <div className="courselist">
                                               <h3> <span className="text-red"> Shoolini MBA:</span> Where Dreams Get Down <br />to Business </h3> <br />
                                               <h5 className="title-default"> <strong> Bigger Exposure </strong>  </h5>
                        <ul className="p-0 no-link">
                          {/* <li>
                            {" "}
                            <a
                              target="_blank"
                              href=""
                            >
                              {" "}
                             1+1 Program in Australia, UK, USA, Italy, Indonesia, UAE, Taiwan  
                             
                            </a>{" "}
                          </li> */}
                          <li>
                            {" "}
                            <a
                              target="_blank"
                              href=""
                            >
                              {" "}
                              Global Immersion Program & global internships    {" "}

                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              target="_blank"
                              href=""
                            >
                              {" "}
                              Taught by CXOs from Top MNCs   {" "}
                            </a>{" "}
                          </li>
                          
                        </ul>

                        <h5 className="title-default"> <strong>  Bigger Impact  </strong> </h5>
                        <ul className="p-0 no-link">
                          <li>
                            {" "}
                            <a
                              target="_blank"
                              href=""
                            >
                              {" "}
                              100% placements in top corporates
                             
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              target="_blank"
                              href=""
                            >
                              {" "}
                              Fully Residential Program for 24x7 learning  {" "}

                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              target="_blank"
                              href=""
                            >
                              {" "}
                              Unique MBA with one of the highest average packages {" "}
                            </a>{" "}
                          </li>
                          
                        </ul>
                         <i> Select MBA students can avail global immersion tours and internships *On Paid Basis  </i>             
                      </div>
                      </div>
                      {/* <Image
                        src="/assets/images/girlstudent.jpg"
                        width={558}
                        className="img-responsive"
                        height={550}
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <section className="  allFaculty mb-5">
            <div className="container">
              <div className=" pagetitle text-center">
                <h2 class=" mb-4">Testimonials  </h2>
              
              </div>
              <div className="mentorss">
                <Slider {...setting}>
                
                      <div>
                        <div  className="allFac-Card">
                          <div className="fac-mem"  >
                            <div className="fac-img">
                              <img
                                src="assets/images/shivamverma.jpg" className="img-fluid"
                              />
                            </div>
                            <div className="fac-list">
                              <h5>Shivam Verma,<br /> MBA </h5>
                            </div>
                          </div>
                          <div className="fac-list p-0">  <p className="m-0">
                          I'm proudly carrying Shoolini's flag at Universitas Muhammadiyah Yogyakarta, Indonesia, through the Student Exchange Program. Now, I look forward to the most of this enriching experience in Indonesia.
                              </p> </div>
                        </div>
                        </div>
                        <div>
                        <div  className="allFac-Card">
                          <div className="fac-mem"  >
                            <div className="fac-img">
                              <img
                                src="assets/images/Deepika.jpg"
                              
                                className="img-fluid"
                              />
                            </div>
                            <div className="fac-list">
                              <h5>Deepika Dahiya,<br /> MBA </h5>
                            </div>
                          </div>
                          <div className="fac-list p-0">  <p className="m-0">
                          The Shoolini MBA program gave diverse learning experiences, from competing with IIM grads in national contests to finding entrepreneurial confidence in Startbuzz. Shoolini is my home away from home. 
                              </p> </div>
                        </div>
                        </div>
                        <div>
                        <div  className="allFac-Card">
                          <div className="fac-mem"  >
                            <div className="fac-img">
                              <img
                                src="assets/images/Achyut.jpg"
                              
                                className="img-fluid"
                              />
                            </div>
                            <div className="fac-list">
                              <h5>Achyut Kaul,<br /> MBA </h5>
                            </div>
                          </div>
                          <div className="fac-list p-0">  <p className="m-0">
                          Shoolini's Student Exchange Program gave me a chance to study and broaden my horizons at Universitas Muhammadiyah Yogyakarta. I thank all my professors for all the exceptional guidance.
                              </p> </div>
                        </div>
                        </div>
                        <div> 
                        <div  className="allFac-Card">
                          <div className="fac-mem"  >
                            <div className="fac-img">
                              <img
                                src="assets/images/palak.jpg"
                              
                                className="img-fluid"
                              />
                            </div>
                            <div className="fac-list">
                              <h5>Palak Bankotia,<br /> MBA </h5>
                            </div>
                          </div>
                          <div className="fac-list p-0">  <p className="m-0">
                          As a Shoolinian, I've honed my personal and professional skills through diverse masterclasses and the SPRINT programs. My experience here enhanced my public speaking, project management, and leadership abilities.
                              </p> </div>
                        </div>
                        </div>
                        <div>
                       
                        <div  className="allFac-Card">
                          <div className="fac-mem"  >
                            <div className="fac-img">
                              <img
                                src="assets/images/firdos.jpg"
                              
                                className="img-fluid"
                              />
                            </div>
                            <div className="fac-list">
                              <h5>Firdos Saifi,<br /> MBA </h5>
                            </div>
                          </div>
                          <div className="fac-list p-0">  <p className="m-0">
                          My professors helped me imbibe management knowledge & skills that landed me up at the Bank Of America. Everyone here supports us in shaping a strong future. I’ll always remember the valuable lessons learned here.
                              </p> </div>
                        </div>
                      </div>
                      
                 
                </Slider> */}

                 

{/* 
              </div>
            </div>


          </section> */}

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
                                    className={`accordion-title ${open ? "accordion-active" : ""
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
  const faq = await GetFaq("master-of-business-administration-mba");

  return {
    props: {
      schema,
      faq,
    },
  };
};

export default Mbas;
