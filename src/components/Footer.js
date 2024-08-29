/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import EnquireForMob from "./EnquireForMob";
import { Styles } from "../components/common/styles/footer";
import Image from "next/legacy/image";
import { Diversity2 } from "@mui/icons-material";
import { Row, Col } from "react-bootstrap";


const Footer = () => {

  // useEffect(() => {
  //   var s=document.createElement("script");
  //   s.type="text/javascript";
  //   s.async=true;
  //   s.src="https://chatbot.in1.nopaperforms.com/en-gb/backend/bots/niaachtbtscpt.js/3845f35478c52082/1325773dd3dd43a7a3e8c868b32f1c35";
  //   document.body.appendChild(s);
  // }, []);


  const [pgdata, setPgata] = useState([]);

  const [isActive, setActive] = useState(false);
  const [isActive2, setActive2] = useState(false);
  const [isActive3, setActive3] = useState(false);

  const [notification, setNotification] = useState(false);


  const handleClick = event => {
    console.log("ffff")
    // 👇️ toggle isActive state on click
    setNotification(!notification);
  };


  const toggleClass = () => {
    setActive(!isActive);
  };
  const toggleClass2 = () => {
    setActive2(!isActive2);
  };
  const toggleClass3 = () => {
    setActive3(!isActive3);
  };

  var footerOne = [];
  var footerTwo = [];
  var footerThree = [];

  useEffect(() => {
    fetch("https://shooliniuniversity.com/media/GetFooterAPI", {
      method: "post",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ auth: "shoolini@999" }),
    })
      .then((response) => response.json())
      .then((res) => setPgata(res));
  }, []);

  footerOne = pgdata?.success?.footer_nav1;
  footerTwo = pgdata?.success?.footer_nav2;
  footerThree = pgdata?.success?.footer_nav3;

  return (
    <>
      <Styles>
        <footer className="footer1">
          {/* <div className="notifications position-relative">
         
           <div onClick={handleClick} className="parent">
              <span> <FaBell /> </span>
            </div>
           

            <div className={notification ? "note_hide3 not_card" : "footer_show not_card"}>
              <div className="shadowNotification">
              <h6 className="text-white m-0">Admissions 2024 Closing Soon!</h6>
               
                  <Link href="https://shooliniuniversity.com/apply?utm_source=organic&utm_medium=notificationbell&utm_campaign=notificationbell" className="reg-btn">  Apply Now    </Link>
            
              </div>
            </div>
          </div> */}



        <div className="whatsAppIconFixed">
        <a target="_blank" href="https://api.whatsapp.com/send?phone=917018007000&text=Hi%20Shoolini%20University" class="whatsapp-button"><i className="fab fa-whatsapp"></i></a>
        </div>


          <div className="container-fluid ">
            <div className="row">
              <div className="col-md-3 bg-reds">


                <div className="footerAbout text-center">
                  <div className="logosFooter">
                    <Row>
                      <div className="col-md-12 col-6">
                        <Link href="/">
                          <Image
                            src="/assets/images/footer-logo.png"
                            alt="Shoolini University"
                            className="logo-footer"
                            width={250}
                            height={130}
                          />
                        </Link>
                      </div>
                      <div className="col-6">
                        <div className="gptw for_mobile">
                          <Image
                            src="/assets/images/gptw.png"
                            alt="Shoolini University"
                            className="logo-footer"
                            width={64}
                            height={96}
                          />
                        </div>
                      </div>
                    </Row>
                  </div>

                  <h5 className="text-white">Think Learning. Think Success.</h5>
                  <ul className="social list-unstyled list-inline">
                    <li className="list-inline-item">
                      <a
                        target="_blank"
                        href="https://www.facebook.com/ShooliniUniversityOfficial"
                        rel="noreferrer"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        target="_blank"
                        href="https://twitter.com/ShooliniUniv"
                        rel="noreferrer"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/school/shooliniuniversity/"
                        rel="noreferrer"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        target="_blank"
                        href="https://www.youtube.com/channel/UCIIk_Yyimb_MwWNMr8JEDJg"
                        rel="noreferrer"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        target="_blank"
                        href="https://www.instagram.com/shooliniuniversity/"
                        rel="noreferrer"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        target="_blank"
                        href="https://api.whatsapp.com/send?phone=917807899735&text=Hi%20Shoolini%20University"
                        rel="noreferrer"
                      >
                        <i className="fab fa-whatsapp"></i>
                      </a>
                    </li>
                  </ul>




                  <div className="gptw for_desktop">
                    <Image
                      src="/assets/images/gptw.png"
                      alt="Shoolini University"
                      className="logo-footer"
                      width={70}
                      height={105}
                    />
                  </div>

                </div>
              </div>

              <div className="col-md-9">
                <div className="pt-5 leftSideFtr">
                  <div className="row">
                    <div className="col-md-3">
                      <h6 className="ftr_tgl" onClick={toggleClass2}>
                        Information About <FaAngleDown />
                      </h6>
                      <ul
                        className={isActive2 ? "footer_show" : "footer_hide2"}
                      >
                        {footerOne?.map((data, index) => (
                          <li key={index}>
                            {data.link.indexOf("http") > -1 ? (
                              <Link
                                href={`${data?.link.replace("/", "")}`}
                                target="_blank"
                                className="detailView"
                              >
                                <div key={index} value={data?.id}>
                                  <span> {data?.text} </span>
                                </div>
                              </Link>
                            ) : (
                              <Link
                                href={`/${data?.link.replace("/", "")}`}
                                className="detailView"
                              >
                                <div key={index} value={data?.id}>
                                  <span> {data?.text} </span>
                                </div>
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="col-md-3 ftrInfo">
                      <h6 className="ftr_tgl" onClick={toggleClass}>
                        Information For <FaAngleDown />
                      </h6>

                      <ul className={isActive ? "footer_show" : "footer_hide"}>
                        {footerTwo?.map((data, index) => (
                          <li key={index}>
                            {data.link.indexOf("http") > -1 ? (
                              <a
                                target="_blank"
                                href={`https://shooliniuniversity.com/${data?.link.replace(
                                  "/",
                                  ""
                                )}`}
                                className="detailView"
                                rel="noreferrer"
                              >
                                <div key={index} value={data?.id}>
                                  <span> {data?.text} </span>
                                </div>
                              </a>
                            ) : (
                              <Link
                                href={`/${data?.link.replace("/", "/")}`}
                                className="detailView"
                              >
                                <div key={index} value={data?.id}>
                                  <span> {data?.text} </span>

                                </div>
                              </Link>
                            )}

                            {data.text == "What is the Academic Bank of Credits (ABC)?" ? (
                              <a target="_blank"
                                href="https://www.youtube.com/watch?v=9AQYf9wSHXg&feature=youtu.be"
                                className="detailView onShow"
                              >
                                <div key={index} value={data?.id}>
                                  <span> {data?.text} </span>

                                </div>
                              </a>
                            ) : null}

                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="col-md-3">
                      <h6 className="ftr_tgl" onClick={toggleClass3}>
                        Quick Links <FaAngleDown />
                      </h6>
                      <ul
                        className={isActive3 ? "footer_show" : "footer_hide3"}
                      >
                        {footerThree?.map((data, index) => (
                          <li key={index}>
                            {data.link.indexOf("https") > -1 ? (
                              <Link
                                href={`${data?.link.replace("/", "/")}`}
                                className="detailView"
                              >
                                <div key={index} value={data?.id}>
                                  <span> {data?.text} </span>
                                </div>
                              </Link>
                            ) : (
                              <Link
                                href={`/${data?.link.replace("/", "/")}`}
                                className="detailView"
                              >
                                <div key={index} value={data?.id}>
                                  <span> {data?.text} </span>
                                </div>
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="col-md-3">
                      <h6 className="ftr_tgl mb-2"> Contact </h6>
                      <a
                        target="_blank"
                        className="goLive"
                        href="https://shooliniuniversity.com/contact"
                        rel="noreferrer"
                      >
                        <div>
                          <p>
                            <strong> City Office </strong> <br />
                            <span>{pgdata?.success?.cityaddress}</span>
                          </p>
                          <p>
                            <strong> Address </strong>
                            <br />
                            <span>{pgdata?.success?.mainaddress}</span>
                          </p>

                          <p>
                            <strong> Mailing Address: </strong> <br />
                            <span>{pgdata?.success?.mailingaddress}</span>
                            <br />
                          </p>
                        </div>

                      </a>
                    </div>

                    <div className="col-md-12">
                      <p className="copyrt">
                        Copyright ©2024 Shoolini Foundation of Life Sciences and Business Management
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mobileSoc">
            {/* <div className="callUS shortBtn">
              <a target="_blank" href="tel:+917018007000" rel="noreferrer">
                <FaPhoneAlt /> Call Us
              </a>
            </div> */}
            <div className="EnqlUS shortBtn">
              <EnquireForMob />
            </div>
          </div>
            <div className="hide-mobile"> 
          <div class="npf_chatbots" data-w="1325773dd3dd43a7a3e8c868b32f1c35"></div>
          </div>
        </footer>
      </Styles>
    </>
  );
};

export default Footer;
