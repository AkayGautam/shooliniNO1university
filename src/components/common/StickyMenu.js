import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Styles } from "./styles/stickyMenu";
import Link from "next/link";
import Image from "next/legacy/image";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const StickyMenu = ({ links }) => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const stickyMenu = document.querySelector(".sticky-menu");

      if (window.scrollY > 160) {
        stickyMenu?.classList.add("sticky");
      } else {
        stickyMenu?.classList.remove("sticky");
      }
    });
  });

  return (
    <>
      <Styles>
        <section className="sticky-menu">
          <div className="container-fluid pxs-4">
            <Row>
              <Col className="d-flex" md="2">
                <div className="logo">
                  <Link href={"/"}>
                    <Image
                      src={"/assets/images/logo.png"}
                      alt=""
                      className="brandLogo"
                      width={200}
                      height={50}
                    />
                  </Link>
                </div>
            
              </Col>
              <Col md="10">
                <div className="main-menu-box">
                  <div className="menu-box d-flex justify-content-between">
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
                                              <li> <Link href="/master-of-business-administration-mba">	MBA with Specialisations </Link> </li>
                                              
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
                            <li
                              className="nav-item dropdown active"
                              key={index}
                            >
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
                                      <Link className="nav-link dropdown-toggle" target="_blank" href="https://research.shooliniuniversity.com/national-Calls">      Research Grants    </Link>
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
                                href={row.link && `/${row.link}`}
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
                                              <li
                                                className="nav-item"
                                                key={idx}
                                              >
                                                {submenu.text ===
                                                  "Test Page" ? (
                                                  <Link
                                                    href={`${submenu.link}`}
                                                    className="nav-link"
                                                  >
                                                    {submenu.text}
                                                  </Link>
                                                ) : (
                                                  <Link
                                                    href={`/${submenu.link}`}
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
                        <div className="apply-btn">
                          <a
                            href="https://shooliniuniversity.com/apply?utm_source=organic&utm_medium=admissions&utm_campaign=admissions"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Apply Now
                          </a>
                        </div>
                      </li>


                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </Styles>
    </>
  );
};

export default StickyMenu;
