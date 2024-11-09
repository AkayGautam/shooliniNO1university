import React, { useEffect, useState } from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import Search from "./common/Search";
import { Styles } from "./common/styles/header";
import StickyMenu from "./common/StickyMenu";
import MobileMenu from "./common/MobileMenu";
import Link from "next/link";
import ScrollButton from "../components/common/ScrollButton";
// import SocialShare from "./SocialShare";
import Slider from "react-slick";
import Image from "next/legacy/image";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import { FaFileAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLandmark } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
 
const settings = { 
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
};
 

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Header = () => {

  useEffect(() => {
    // download brouchure
    var s = document.createElement("script"); s.type = "text/javascript"; s.async = true; s.src = "https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s);

  }, [])



  const [open, setOpen] = React.useState(false);
  const [opens, setOpens] = React.useState(false);

  const [isActive, setIsActive] = useState(false);

  const handleClickOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClick = event => {
    setIsActive(current => !current);
  };


  const handleClickOpen_one = (e) => {
    e.preventDefault();
    setOpens(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose_one = () => {
    setOpens(false);
  };



  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetch("https://shooliniuniversity.com/media/GetTopnavAPI", {
      method: "post",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        auth: "shoolini@999",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setLinks(res?.success);
      });
  }, []);


  // console.log(links[3],"ssss")
  //   if (links[3] === 'PROGRAMS') {
  //     // Change the API value to your custom text

  //     return <p>Loading or error fetching data...</p>;

  //   } 



  return (

    
    <Styles>

  

      {/* for broucher  */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <button className="closebtn" onClick={handleClose} > x </button>
          <DialogContentText id="alert-dialog-slide-description">
            <div class="npf_wgts" data-height="400px" data-w="d095e55a1f298e67da8279133413215f"></div>
          </DialogContentText>
        </DialogContent>
      </Dialog>


      <Dialog
        open={opens}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose_one}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <button className="closebtn" onClick={handleClose} > x </button>
          <DialogContentText id="alert-dialog-slide-description">
            <h4 className="text-center"> Enquire Now! </h4>
            <div class="npf_wgts" data-height="400px" data-w="b7a96773936817725d0a4442d6310f28"></div>
          </DialogContentText>
        </DialogContent>
      </Dialog>


 {/* <section className="marText"> 
      <marquee className="marquee">
  <div className="marquee--inner">
    <span>
      <a href="/news/shoolini-ranks-high-with-19-scientists-in-stanfords-top-2?utm_source=organic&utm_medium=websiteticker&utm_campaign=19scientiststop2"> Shoolini Ranks High with 19 Scientists in Stanford University’s Top 2% List
</a>
    </span>
  </div> 
</marquee>
 
</section>  */}


      <div className={isActive ? 'bg-salmon2 sticky-icon showcase' : 'bg-salmon2 sticky-icon'} >

        {/* <button className={isActive ? 'bg-salmon showcase' : 'showcase'} onClick={handleClick}> 
   <span className="iconsFile"> <FaChevronLeft /> </span>
</button>    */}


        <a id="grad_bg2" target="_blank" href="https://shooliniuniversity.com/apply?utm_source=organic&utm_medium=admissions&utm_campaign=admissions" class="grad_bg2 Instagram pointer-none xs-design">
          <span className="iconsFile xs-d-none"> <FaPen /> </span>
          <span className="icnName">Apply Now</span> </a>

        <a onClick={handleClickOpen} href="/" className="Instagram pointer-none   xs-design grad_bg1  bg-red">
          <span className="iconsFile xs-d-none"> <FaFileAlt /> </span>

          <span className="icnName"> Brochure </span></a>

        <a target="_blank" href="https://shooliniuniversity.com/all-events?utm_source=organic&utm_medium=events&utm_campaign=events" className="Instagram bg-secondary xs-d-none">
          <span className="iconsFile"> <FaRegCalendarAlt /> </span>
          <span className="icnName">Events</span> </a>


        {/* <a target="_blank" href="https://shooliniuniversity.com/chat-with-ambassador" className="xd-none xs-design Instagram bg-info xs-d-none">
          <span className="iconsFile"><FaRocketchat /> </span>
          <span className="icnName">Chat with Ambassador</span> </a> */}

        {/* 
        <a onClick={handleClickOpen_one} href="/" className="Instagram bg-info">
          <span className="iconsFile"> <FaLandmark /> </span>
          <span className="icnName">Admissions</span> </a> */}



        {/* <a target="_blank" href="https://api.whatsapp.com/send?phone=917018007000&text=Hi%20Shoolini%20University" className="whatsAAP d-md-none Instagram whatsApp">
          <span className="iconsFile"> <FaWhatsapp /> </span>
          <span className="icnName">whatsapp</span> </a> */}

      </div>



      {/* 
      <div className="notification-top-bar">
        <Slider {...settings}>
          <div>
            <a className="font-16"
              target="_blank"
              href="https://admissions.shooliniuniversity.com/?utm_source=organic&utm_medium=tickerweb&utm_campaign=tickerweb"
              rel="noreferrer"
            >
         Admissions Open -- Few Seats Left Across Courses
            </a>
          </div>
 </Slider>
      </div> */}

      <section className="position-relative">
        <div className="top-bar">
          <div className="container-fluid">
            <Row className="m-0">
              <Col lg="12" md="12">
             
                <div className="bar-right d-md-flex xs-show justify-content-end">
                  <ul className="list-unstyled list-inline bar-login mb-0">
                    <li className="list-inline-item">
                      <a
                        target="_blank"
                        href="https://online.shooliniuniversity.com/"
                        rel="noreferrer"
                      >
                        Shoolini Online
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        target="_blank"
                        href="https://online.shooliniuniversity.com/distance/"
                        rel="noreferrer"
                      >
                        Distance Education
                      </a>
                    </li>

                    <li className="list-inline-item">
                      <a target="_blank" href="/blog">
                        Blogs
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <Link href="/contact">Contact</Link>
                    </li>

                    <li className="list-inline-item">
                      <a
                        target="_blank"
                        href="https://my.shooliniuniversity.com/"
                        rel="noreferrer"
                      >
                        SU Students
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        target="_blank"
                        href="https://alumni.shooliniuniversity.com/"
                        rel="noreferrer"
                      >
                        Alumni
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a target="_blank" href="/national-academic-depository">
                        UGC-NAD
                      </a>
                    </li>
                  </ul>
                  <ul className="list-unstyled list-inline bar-lang mb-0">
                    <li className="list-inline-item">
                      <Dropdown>
                        <Dropdown.Toggle id="123" as="a">
                          Online Payment<i className="las la-angle-down"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu as="ul">
                          <Dropdown.Item as="li">
                            <a
                              target="_blank"
                              href="https://shooliniuniversity.com/media/pay"
                              rel="noreferrer"
                            >
                              {" "}
                              Pay Tuition Fee{" "}
                            </a>{" "}
                          </Dropdown.Item>
                          <Dropdown.Item as="li">
                            <a
                              target="_blank"
                              href="https://easypay.axisbank.co.in/easyPay/makePayment?mid=NDcwNjg%3D"
                              rel="noreferrer"
                            >
                              {" "}
                              Pay Hostel Fee{" "}
                            </a>{" "}
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                  </ul>

                  <ul className="list-unstyled list-inline bar-lang mb-0">
                    <li className="list-inline-item">
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" as="a">
                          Ranking<i className="las la-angle-down"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu as="ul">
                          <Dropdown.Item as="li">
                            <Link href="/nba"> NBA </Link>
                          </Dropdown.Item>
                          <Dropdown.Item as="li">
                            <Link href="/naac-self-study-report"> NAAC </Link>{" "}
                          </Dropdown.Item>
                          <Dropdown.Item as="li">
                            <Link href="/nirf"> NIRF </Link>{" "}
                          </Dropdown.Item>
                          <Dropdown.Item as="li">
                            <Link href="/iqac"> IQAC </Link>{" "}
                          </Dropdown.Item>
                          <Dropdown.Item as="li">
                            <Link href="/nisp"> NISP </Link>{" "}
                          </Dropdown.Item>
                          <Dropdown.Item as="li">
                            <Link href="/iic"> IIC </Link>{" "}
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                  </ul>
                  <ul className="list-unstyled list-inline bar-social mb-0">
                    {/* <li className="list-inline-item">
                      <a
                        target="_blank"
                        className="su_whats"
                        href="https://api.whatsapp.com/send?phone=917807899735&text=Hi%20Shoolini%20University"
                        rel="noreferrer"
                      >
                        <i className="fab fa-whatsapp"></i>
                      </a>
                    </li> */}

                    <li className="list-inline-item">
                      <a
                        target="_blank"
                        className="su_fb"
                        href="https://www.facebook.com/ShooliniUniversityOfficial"
                        rel="noreferrer"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        target="_blank"
                        className="su_twitter"
                        href="https://twitter.com/ShooliniUniv"
                        rel="noreferrer"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        target="_blank"
                        className="su_linked"
                        href="https://www.linkedin.com/school/shooliniuniversity/"
                        rel="noreferrer"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        target="_blank"
                        className="su_insta"
                        href="https://www.instagram.com/shooliniuniversity/"
                        rel="noreferrer"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      {/* second section */}
      <section className={`logo-area main-menu`}>
        <div className="container-fluid">
          <Row>
            <Col md="2">
              <div className="logo">
                <Link href="/">
                  <Image
                    src={"/assets/images/f-logo.png"}
                    alt="brandLogo"
                    className="brandLogo"
                    width={140}
                    height={75}

                  />
                </Link>
              </div>
            </Col>

            <Col md="10">
              <div className="main-menu-box">
                <div className="menu-box d-flex justify-content-end">
                  <ul className="nav menu-nav">
                    {links &&
                      links.map((row, index) => {

                        if (row.text === "PROGRAMS") {
                          return (
                            <li className="nav-item dropdown" key={row.text}>
                              {/* Assuming PROGRAMS doesn't need a direct link but opens a submenu */}
                              <a className="nav-link dropdown-toggle">{row.text}</a>
                              {row.sub_menu?.length > 0 && (

                                <>

                                  <ul className="dropdown dek-wid list-unstyled">
                                    <Tabs>
                                      <TabList className="navTabs">
                                        <Tab> Undergraduate</Tab>
                                        <Tab>Postgraduate</Tab>
                                        <Tab>PhD </Tab>
                                        <Tab>Online Courses</Tab>
                                      </TabList>

                                      <TabPanel>
                                        <div className="row mt-3">
                                          <div className="col-md-3">
                                        

                                            <h4>BIOTECHNOLOGY </h4>
                                            <ul className="subMenus">
                                              <li> <Link href="/b-tech-biotechnology"> 	B Tech Biotechnology </Link> </li>
                                              <li> <Link href="/bsc-hons-biotechnology">  BSc (Hons) Biotechnology  </Link> </li>
                                             
                                            </ul>
                                            <h4><Link className="LinkBold" href="https://shooliniuniversity.com/international/dual-degree?utm_source=organic&utm_medium=MELBOURNE-Degree&utm_campaign=MELBOURNE-Degree"> B.Sc. (Hons) Dual degree with The University of Melbourne) </Link> </h4>
                                            <h4><strong><Link className="LinkBold" href="https://shooliniuniversity.com/srp"> B Tech (SUMMIT RESEARCH PROGRAM) </Link> </strong> </h4>
                                            <h4>LIBERAL ARTS </h4>
                                            <ul className="subMenus">
                                              <li><strong> <Link href="/ba-hons">	BA (Hons) with Specialisations </Link> </strong> </li>
                                            </ul>

                                            <h4>HOSPITALITY </h4>
                                            <ul className="subMenus">
                                              <li> <Link href="/bsc-in-hospitality-hotel-administration">	BSc Hospitality and Hotel Administration</Link> </li>
                                            </ul>

                                            <h4>Pharmacy </h4>
                                            <ul className="subMenus">
                                              <li> <Link href="/bachelor-of-pharmacy-b-pharmacy">		B Pharmacy </Link> </li>
                                            
                                            </ul>
                                        
                                          </div>

                                          <div className="col-md-3">
                                            <h4>MANAGEMENT </h4>
                                            <ul className="subMenus">
                                         
                                            <li> <Link href="/bcom">BCom (Hons) </Link> </li>
                                              <li> <Link href="/bcom-hons">BCom (Hons) Also with ACCA </Link> </li>
                                              <li> <Link href="/bachelor-of-business-administration-bba">BBA (General) Also with ACCA  </Link> </li>
                                              <li> <Link href="/bba"> BBA (Specialisations) Also with ACCA   </Link> </li>
                                            </ul>


                                            <h4>MEDIA STUDIES </h4>
                                            <ul className="subMenus">
                                              <li> <Link href="/ba-in-journalism-and-mass-communication">		BA Journalism and Mass Communication </Link> </li>
                                            </ul>
                                            <h4>NUTRITION </h4>
                                            <ul className="subMenus">
                                              <li> <Link href="/bsc-nutrition-and-dietetics">	BSc (Hons) Nutrition and Dietetics </Link> </li>
                                            </ul>

                                            <h4>AGRICULTURE </h4>
                                            <ul className="subMenus">
                                              <li> <Link href="/bsc-hons-agriculture">		BSc (Hons) Agriculture </Link> </li>
                                              
                                            </ul>
                                         

                                            <h4>CORE ENGINEERING </h4>
                                            <ul className="subMenus">
                                              <li> <Link href="/b-tech-civil-engineering">	B Tech Civil Engineering with Specialisations </Link> </li>
                                             
                                            </ul>


                                          </div>
                                          <div className="col-md-3">
                                            <h4>COMPUTER SCIENCE </h4>
                                            <ul className="subMenus">
                                              <li> <Link href="/b-tech-in-artificial-intelligence">	B Tech Artificial Intelligence with Specialisations </Link> </li>
                                              <li> <Link href="/b-tech-computer-science-engineering">	B Tech CSE with Specialisations  </Link> </li>
                                              <li> <Link href="/bachelor-of-computer-application-bca"> BCA with Specialisations </Link> </li>
                                            
                                            </ul>

                                            <h4>MICROBIOLOGY </h4>
                                            <ul className="subMenus">
                                              <li> <Link href="/bsc-hons-microbiology">		BSc (Hons) Microbiology </Link> </li>
                                            </ul>


                                            <h4>BIO INFORMATICS </h4>
                                            <ul className="subMenus">
                                              <li> <Link href="/b-tech-bioinformatics">	B Tech Bioinformatics </Link> </li>
                                         
                                            </ul>

                                            <h4>LEGAL STUDIES </h4>
                                            <ul className="subMenus">
                                              <li> <Link href="/ba-llb">		BALLB </Link> </li>
                                              <li> <Link href="/llb">		LLB </Link> </li>
                                            </ul>
                                            <h4>Yoga </h4>
                                            <ul className="subMenus">
                                              <li> <Link href="/ba-bsc-in-yoga">		BA/ BSc (Hons) Yoga </Link> </li>
                                            </ul>


                                          </div>

                                          <div className="col-md-3">
                                            <h4>FOOD TECH </h4>
                                            <ul className="subMenus">
                                              <li> <Link href="/b-tech-food-technology">	B Tech Food Technology </Link> </li>
                                              <li> <Link href="/bsc-hons-food-tech">	BSc (Hons) Food Technology  </Link> </li>
                                   
                                            </ul>

                                            <h4>PSYCHOLOGY</h4>
                                            <ul className="subMenus">
                                              <li> <Link href="/babsc-hons-with-specialisations">	BA/ BSc (Hons) with specialisations </Link> </li>
                                          
                                            </ul>
                                            <h4>Design </h4>
                                            <ul className="subMenus">
                                              <li> <Link href="/b-design">	B Design </Link> </li>
                                             
                                            </ul>
                                           
                                            <h4>Science</h4>
                                            <ul className="subMenus">
                                              <li> <Link href="/bsc">		BSc (Hons)   </Link> </li> 
                                            
                                            </ul>
                                       
                                          </div>
 
                                        </div>

                                        <div className="ddCou">
                                            <div className="row">
 
                                        <div className="col-md-12">
                                        <h4><Link className="viewBtn" href="/undergraduate-programs"> View all Undergraduate Programs &#8594;</Link> </h4>
                                        </div>
                                            </div>
                                        </div>




                                      </TabPanel>
                                      <TabPanel>
                                        <div className="row mt-3">
                                          <div className="col-md-3">
                                            <h4>BIOTECHNOLOGY </h4>
                                            <ul className="subMenus">
                                              <li> <Link href="/msc-biotechnology-research">	MSc Biotechnology  </Link> </li>
                                              <li> <Link href="/msc-microbiology">	MSc Microbiology </Link> </li>
                                              <li> <Link href="/mtech-biotechnology">	M Tech Biotechnology   </Link> </li>
                                            </ul>

                                            <h4>Engineering</h4>
                                            <ul className="subMenus">
                                              <li> <Link href="/mtech-civil-engineering">		M Tech Civil  </Link> </li> 
                                            </ul>

                                            <h4>LIBERAL ARTS </h4>
                                            <ul className="subMenus">
                                              <li> <Link href="/ma-1">	MA with Specialisations  </Link> </li> 
                                            </ul>


                                            <h4>MEDIA STUDIES </h4>
                                            <ul className="subMenus">
                                              <li> <Link href="/ma-in-journalism">		MA Journalism {'&'} Mass Communication </Link> </li>
                                            </ul>

                                            <h4>LEGAL STUDIES </h4>
                                            <ul className="subMenus">
                                              <li> <Link href="/llm">		LLM </Link> </li>
                                            </ul>
                                           
                                           
                                          </div>

                                          <div className="col-md-3">

                                          <h4>Computer Science</h4>
                                            <ul className="subMenus">
                                              <li> <Link href="/mca">	MCA with Specialisations </Link> </li>
                                              <li> <Link href="/mtech-computer-science-engineering"> M Tech CSE </Link> </li>
                                              <li> <Link href="/msc-data-science"> MSc Data Science </Link> </li>
                                             

                                            </ul>


                                            <h4>MANAGEMENT </h4>
                                            <ul className="subMenus">
                                              <li> <Link href="/master-of-business-administration-mba">	MBA with Specialisations </Link> 
                                              </li>
                                             
                                            </ul>

                                            <h4>NUTRITION </h4>
                                            <ul className="subMenus">
                                              <li> <Link href="/msc-nutrition-and-dietetics"> MSc Nutrition and Dietetics </Link> </li>
                                            </ul>


                                            <h4>Yoga </h4>
                                            <ul className="subMenus">
                                              <li> <Link href="/msc-yoga">		MA / MSc Yoga </Link> </li>
                                            </ul>
                                          </div>
                                          <div className="col-md-3">


                                            <h4>AGRICULTURE </h4>
                                            <ul className="subMenus">
                                              <li> <Link href="/msc-agriculture-agronomy"> 	MSc Agriculture (Agronomy) </Link> </li>
                                              <li> <Link href="/msc-agriculture-plant-breeding-genetics"> 	MSc Agriculture Genetics {'&'} Plant Breeding </Link> </li>
                                            </ul>
                                            <h4>Science</h4>
                                            <ul className="subMenus">
                                              <li> <Link href="/msc-botany">	MSc Botany </Link> </li>
                                              <li> <Link href="/msc-zoology">		MSc Zoology </Link> </li>
                                              <li> <Link href="/ma-msc-mathematics">	MA Mathematics </Link> </li>
                                              <li> <Link href="/msc-physics">	MSc Physics </Link> </li>
                                              <li> <Link href="/msc-chemistry">	MSc Chemistry </Link> </li>
                                            </ul>
                                          </div>

                                          <div className="col-md-3">
                                            <h4>FOOD TECH </h4>
                                            <ul className="subMenus">
                                              <li> <Link href="/msc-food-technology-research">	MSc Food Technology  </Link> </li>
                                              <li> <Link href="/mtech-food-tech"> M Tech Food Technology  </Link> </li>
                                            </ul>

                                            <h4>PSYCHOLOGY</h4>
                                            <ul className="subMenus">
                                              <li> <Link href="/mamsc-with-specialisations">		MA/ MSc with Specialisations  </Link> </li>
                                            </ul>
                                            <h4>Pharmacy</h4>
                                            <ul className="subMenus">
                                              <li> <Link href="/m-pharmacy-pharmaceutical-chemistry">	M Pharmacy Pharmaceutical Chemistry </Link> </li>
                                              <li> <Link href="/m-pharmacy-pharmaceutics">	M Pharmacy Pharmaceutics </Link> </li>
                                              <li> <Link href="/m-pharmacy-in-pharmacology">	M Pharmacy Pharmacology </Link> </li>

                                            </ul>
                                            
                                          </div>

                                        </div>
                                        <div className="ddCou">
                                            <div className="row">
 
                                        <div className="col-md-12">
                                        <h4><Link className="viewBtn" href="/postgraduate-programs"> View all Postgraduate Programs &#8594;</Link> </h4>
                                        </div>
                                            </div>
                                        </div>

                                      </TabPanel>


                                      <TabPanel>
                                        <div className="row mt-3">
                                          <div className="col-md-3">
                                            <ul className="subMenus">
                                              <li> <Link href="/phd-biotechnology">	PhD Biotechnology  </Link> </li>
                                              <li> <Link href="/phd-economics">	PhD Economics   </Link> </li>
                                              <li> <Link href="/phd-environmental-sciences">	PhD Env Science   </Link> </li> 
                                              <li> <Link href="/phd-legal-sciences">	PhD Legal Sciences   </Link> </li>
                                              <li> <Link href="/phd-microbiology">	PhD Microbiology   </Link> </li> 
                                              
                                              <li> <Link href="/phd-mathematics">	PhD Mathematics  </Link> </li>
                                              <li> <Link href="/phd-pharmaceutical-sciences">	PhD Pharma  </Link> </li> 
                                            </ul>

                                          </div>
                                          <div className="col-md-3">
                                            <ul className="subMenus">
                                              <li> <Link href="/phd-disaster-management"> PhD Disaster Management </Link> </li>
                                              <li> <Link href="/phd-english"> PhD English </Link> </li>
                                              <li> <Link href="/phd-genetics"> PhD Genetics </Link> </li>
                                              <li> <Link href="/phd-journalism"> PhD Journalism </Link> </li>
                                              <li> <Link href="/phd-mechanical-engineering"> PhD Mechanical </Link> </li>
                                              <li> <Link href="/phd-psychology">PhD Psychology  </Link> </li> 

                                              <li> <Link href="/phd-physics">	PhD Physics    </Link> </li>
                                              <li> <Link href="/phd-water-management">	PhD Water Management  </Link> </li> 

                                            </ul>
                                          </div>

                                          <div className="col-md-3">

                                            <ul className="subMenus">
                                              <li> <Link href="/phd-botany">	 PhD Botany  </Link> </li>
                                              <li> <Link href="/phd-electronics-communication-engineering">  PhD ECE </Link> </li>
                                              <li> <Link href="/phd-food-technology">	 PhD Food Technology  </Link> </li>
                                              <li> <Link href="/phd-history"> PhD History </Link> </li>
                                              <li> <Link href="/phd-management-sciences">	 PhD Management  </Link> </li>
                                              <li> <Link href="/phd-political-science"> PhD Political Science </Link> </li> 
                                              <li> <Link href="/phd-zoology"> PhD Zoology </Link> </li>

                                              <li> <Link href="/phd-yoga">	PhD Yoga   </Link> </li>
                                              <li> <Link href="/phd-data-science">	PhD Data Sciences  </Link> </li> 

                                            </ul>

                                          </div>
                                          <div className="col-md-3">

                                            <ul className="subMenus">
                                              <li> <Link href="/phd-civil-engineering">	 PhD Civil  </Link> </li>
                                              <li> <Link href="/phd-energy"> PhD Energy </Link> </li> 
                                              <li> <Link href="/phd-human-resource"> PhD Human Resource </Link> </li>
                                              <li> <Link href="/phd-mass-communication">	 PhD Mass Communication  </Link> </li>
                                              
                                              <li> <Link href="/phd-computer-science-and-engineering">	PhD CSE   </Link> </li>
                                              <li> <Link href="/phd-chemistry">	PhD Chemistry  </Link> </li> 

                                            </ul>
                                          </div>

                                        </div>
                                        <div className="ddCou">
                                            <div className="row">
 
                                        <div className="col-md-12">
                                        <h4><Link className="viewBtn" href="/doctoral-programs"> View all PhD Programs &#8594;</Link> </h4>
                                        </div>
                                            </div>
                                        </div>
                                      </TabPanel>
                                      <TabPanel>
                                        <div className="row mt-3">
                                          <div className="col-md-4">
                                            <ul className="subMenus">
                                              <li> <Link target="_blank"  href="https://online.shooliniuniversity.com/mba.php"> MBA (Master of Business Administration)  </Link> </li>
                                              <li> <Link target="_blank" href="https://online.shooliniuniversity.com/bajmc.php">	BA (Journalism and Mass Communication)   </Link> </li>
                                            </ul>
                                          </div>

                                          <div className="col-md-4">
                                            <ul className="subMenus">
                                              <li> <Link target="_blank" href="https://online.shooliniuniversity.com/ma_eng.php">	MA (English Literature)  </Link> </li>
                                              <li> <Link target="_blank" href="https://online.shooliniuniversity.com/bca.php">	Bachelor of Computer Applications    </Link> </li>
                                            </ul>
                                          </div>
                                          <div className="col-md-4">
                                            <ul className="subMenus">
                                              <li> <Link target="_blank" href="https://online.shooliniuniversity.com/bba.php">	BBA (Bachelor of Business Administration)  </Link> </li>
                                            </ul>
                                          </div>


                                        </div>
                                       
                                      </TabPanel>
                                    </Tabs>

                                  </ul>
                                </>
                              )}
                            </li>
                          );
                        }



                        return row?.sub_menu.length === 0 ? (
                          <li className="nav-item dropdown active" key={index}>
                            {row.text === "HOME" ? (
                              <Link
                                href="/"
                                className="nav-link dropdown-toggle"
                              >
                                {row.text}
                              </Link>
                            ) : (
                              <Link
                                href={`/${row.link}`}
                                className="nav-link dropdown-toggle"
                                data-toggle="dropdown"
                              >
                                {row.text}
                              </Link>
                            )}
                            {row.text === "research" ? (
                              <li> <Link
                                href="https://research.shooliniuniversity.com/"
                                className="nav-link dropdown-toggle newSearch"
                                target={"_blank"}
                              >
                                {row.text}
                              </Link>
                                <ul className="dropdown list-unstyled">
                                  <li className="nav-item navItem_unpos">
                                    <Link className="nav-link dropdown-toggle" target="_blank" href="https://research.shooliniuniversity.com/benchmarks">   Benchmarks     </Link>
                                  </li>
                                  <li className="nav-item navItem_unpos">
                                    <Link className="nav-link dropdown-toggle" target="_blank" href="https://research.shooliniuniversity.com/support-researchers">   Support for Researchers     </Link>
                                  </li>
                                  {/* <li className="nav-item navItem_unpos">
                                    <Link className="nav-link dropdown-toggle" target="_blank" href="https://research.shooliniuniversity.com/scholarship">     Scholarships      </Link>
                                  </li> */}
                                  <li className="nav-item navItem_unpos">
                                    <Link className="nav-link dropdown-toggle" target="_blank" href="https://research.shooliniuniversity.com/phd-programmes">      PhD Programs        </Link>
                                  </li>
                                  <li className="nav-item navItem_unpos">
                                    <Link className="nav-link dropdown-toggle" target="_blank" href="https://research.shooliniuniversity.com/national-calls">      Research Grants    </Link>
                                  </li>
                                  <li className="nav-item navItem_unpos">
                                    <Link className="nav-link dropdown-toggle" target="_blank" href="https://research.shooliniuniversity.com//patents">  Patents   </Link>
                                  </li>
                                </ul>
                              </li>

                            ) : (
                              <span> </span>
                            )}
                          </li>
                        ) : (
                          <li className="nav-item dropdown" key={index}>
                            <Link
                              href={row.link === "#" ? "#" : `/${row.link}`}
                              className="nav-link dropdown-toggle"
                              data-toggle="dropdown"
                            >
                              {row.text} <i className="las la-angle-down"></i>
                            </Link>

                            <ul className="dropdown list-unstyled">
                              {row?.sub_menu.map((sub, i) => {
                                return (
                                  <li
                                    className="nav-item navItem_unpos"
                                    key={i}
                                  >
                                    {sub.text ===
                                      "All Shoolini Faculty List" ? (
                                      <Link
                                        href={`${sub.link}`}
                                        className="nav-link"
                                      >
                                        {sub.text}
                                        {sub?.sub_menu?.length > 0 && (
                                          <i className="las la-angle-down"></i>
                                        )}
                                      </Link>
                                    ) : (
                                      <Link
                                        href={`/${sub.link}`}
                                        className="nav-link"
                                      >
                                        {sub.text}
                                        {sub?.sub_menu?.length > 0 && (
                                          <i className="las la-angle-down"></i>
                                        )}
                                      </Link>
                                    )}










                                    {sub?.sub_menu?.length > 0 && (
                                      <ul className="dropdown_Last list-unstyled">
                                        {sub.sub_menu.map((submenu, idx) => {
                                          return (
                                            <li className="nav-item" key={idx}>
                                              {submenu.text === "Test Page" ? (
                                                <Link
                                                  href={`${submenu.link.replace(
                                                    "/",
                                                    ""
                                                  )}`}
                                                  className="nav-link"
                                                >
                                                  {submenu.text}
                                                </Link>
                                              ) : (
                                                <Link
                                                  href={`/${submenu.link.replace(
                                                    "/",
                                                    ""
                                                  )}`}
                                                  className="nav-link"
                                                >
                                                  {submenu.text}
                                                </Link>
                                              )}
                                            </li>
                                          );
                                        })}
                                      </ul>
                                    )}
                                  </li>
                                );
                              })}
                            </ul>
                          </li>
                        )


                          ;


                      }
                      )}


                  </ul>
                  <ul className="nav search-cart-bar">
                    <li className="nav-item side-box">
                      <div className="apply-btn btnApply">
                        <a
                          style={{ background: "#fff", color: "#e33535" }}
                          href="https://shooliniuniversity.com/apply?utm_source=organic&utm_medium=admissions&utm_campaign=admissions"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Apply Now
                        </a>
                      </div>
                    </li>

                  </ul>
                  <ul className="nav search-cart-bar">
                    <li className="nav-item search-box">
                      <Search />
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* NavBar */}
      <section className="main-menu">
        <Container>
          <Row>
            <Col md="12"></Col>
          </Row>
        </Container>
      </section>

      {/* <SocialShare /> */}

      <StickyMenu links={links} />
      <ScrollButton />

      {/* <div className="enqDesktop">
        <EnquireForMob />
      </div> */}
      <MobileMenu links={links} />
    </Styles>
  );
};

export default Header;
