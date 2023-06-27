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

          <DialogContentText id="alert-dialog-slide-description">
            <h4 className="text-center"> Enquire Now! </h4>
            <div class="npf_wgts" data-height="400px" data-w="b7a96773936817725d0a4442d6310f28"></div>
          </DialogContentText>
        </DialogContent>
      </Dialog>



      <div className={isActive ? 'bg-salmon2 sticky-icon showcase' : 'bg-salmon2 sticky-icon'} >

        {/* <button className={isActive ? 'bg-salmon showcase' : 'showcase'} onClick={handleClick}> 
   <span className="iconsFile"> <FaChevronLeft /> </span>
</button>    */}


        <a onClick={handleClickOpen} href="/" className="Instagram pointer-none  bg-red">
          <span className="iconsFile"> <FaFileAlt /> </span>

          <span className="icnName"> Brochure </span></a>

        <a target="_blank" href="https://shooliniuniversity.com/all-events?utm_source=organic&utm_medium=events&utm_campaign=events" className="Instagram bg-secondary">
          <span className="iconsFile"> <FaRegCalendarAlt /> </span>
          <span className="icnName">Events</span> </a>
{/* 
        <a onClick={handleClickOpen_one} href="/" className="Instagram bg-info">
          <span className="iconsFile"> <FaLandmark /> </span>
          <span className="icnName">Admissions</span> </a> */}

        <a target="_blank" href="https://admissions.shooliniuniversity.com/?utm_source=organic&utm_medium=admissions&utm_campaign=admissions" class="Instagram pointer-none">
          <span className="iconsFile"> <FaPen /> </span>
          <span className="icnName">Apply Now</span> </a>

        <a target="_blank" href="https://api.whatsapp.com/send?phone=917807899735&text=Hi%20Shoolini%20University" className="Instagram whatsApp">
          <span className="iconsFile"> <FaWhatsapp /> </span>
          <span className="icnName">whatsapp</span> </a>

      </div>




      <div className="notification-top-bar">
        <Slider {...settings}>
          <div>
            <a className="font-16"
              target="_blank"
              href="https://admissions.shooliniuniversity.com/?utm_source=organic&utm_medium=tickerweb&utm_campaign=tickerweb"
              rel="noreferrer"
            >
            Seats Filling Up Fast. Apply Now!
            </a>


        

          </div>
 </Slider>
      </div>

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
                        href="https://shoolini.online/"
                        rel="noreferrer"
                      >
                        Shoolini Online
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        target="_blank"
                        href="https://shoolini.online/distance/"
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
                                    <Link className="nav-link dropdown-toggle" target="_blank" href="https://research.shooliniuniversity.com/Benchmarks">   Benchmarks     </Link>
                                  </li>
                                  <li className="nav-item navItem_unpos">
                                    <Link className="nav-link dropdown-toggle" target="_blank" href="https://research.shooliniuniversity.com/support-researchers">   Support for Researchers     </Link>
                                  </li>
                                  <li className="nav-item navItem_unpos">
                                    <Link className="nav-link dropdown-toggle" target="_blank" href="https://research.shooliniuniversity.com/scholarship">     Scholarships      </Link>
                                  </li>
                                  <li className="nav-item navItem_unpos">
                                    <Link className="nav-link dropdown-toggle" target="_blank" href="https://research.shooliniuniversity.com/phd-programmes">      PhD Programs        </Link>
                                  </li>
                                  <li className="nav-item navItem_unpos">
                                    <Link className="nav-link dropdown-toggle" target="_blank" href="https://research.shooliniuniversity.com/National-Calls">      Research Grants    </Link>
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
                        );
                      })}
                  </ul>
                  <ul className="nav search-cart-bar">
                      <li className="nav-item side-box">
                        <div className="apply-btn btnApply">
                          <a
                          style={{background : "#fff", color:"#e33535" }} 
                            href="https://admissions.shooliniuniversity.com"
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
