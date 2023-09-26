import React, { useState, Suspense, useEffect } from 'react'
import Header from '../../components/Header'
import Styless from './style/style'
import Footer from '../../components/Footer'
import { Modal, Button, Form } from "react-bootstrap";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import Image from "next/legacy/image";
import Head from 'next/head';
import Allrankings from './Allrankings';

const Minor = () => {
   
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

        useEffect(() => {

            var s=document.createElement("script"); s.type="text/javascript"; s.async=true; s.src="https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s);
            
      
        }, [])

    return (
        <>

<Suspense> 

<Head>
<title>Minor Specialisations | Ranking</title>
<meta name="description" content="Double your expertise, double your opportunities with a minor specialisation at Shoolini University. Choose from all the Minor Courses available. Enrol Now!" />
<meta name="keywords" content="Minor Specialisations | Shoolini University" />
</Head>

            <div id="mbaPage">
                <Header />
            </div>


            <Styless>

                <main className="innerBody">
                    <section id="shooliniMBA" className="heroBanner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="leftCatd">
                                        <h1 className="mb-0"> <span> The Academic Minor </span> </h1>
                                        <div className="noretype d-block">
                                            <p className="border-right-1">  Double your expertise with <br />minor Specialisations at Shoolini  </p>
                                           
                                        </div>

                                        {/* <div className="forMobile d-none">

                                            <Image
                                                src="/assets/images/mobile-banner.jpg"
                                                alt="Shoolini Banner"
                                                className="mg-responsive w-100"
                                                width={535}
                                                height={514}
                                            />

                                        </div> */}

                                        <div className="px-0 btn btn-grad-red"> <a target="_blank"
                                            href="https://admissions.shooliniuniversity.com/"> Apply Now</a>
                                        </div>
                                        {/* <div className="ugImage">
                                            <img src="assets/images/uglogos.png" />
                                        </div> */}
                                    </div>
                                    {/* <div className="row my-md-5">
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
                                    </div> */}
                                </div>
                                <div className="col-md-4">
                                    {/* <div className="rightCard">

                                        <Image
                                            src="/assets/images/heroOne.png"
                                            alt="Hero Banner"
                                            className="mg-responsive w-100"
                                            width={356}
                                            height={621}
                                        />

                                    </div> */}
                                </div>
                            </div>

                        </div>
                    </section>

                    {/* section  */}


                    <section id="allCourses" className="student-voices">
                        <div className="container">
                            <div className="pagetitle text-center mb-4"><h2>Benefits of Major + Minor Specialisations</h2>
                                       
                            </div>
                            <div className="row">
                                <div className="col-md-12 mb-xs-20">
                                    <div className="card-box">
                                        <p> Established in 2009, Shoolini University is recognised for its high quality of education and focus on research. A top-ranked university in Asia and a highly regarded name in India, Shoolini University is UGC Approved and NAAC Accredited. In addition, the National Institutional Ranking Framework (NIRF) has consistently ranked it among the leading institutes of higher education. Continuing its pursuance of excellence, the university has received outstanding accolades and recognition for parameters such as student output, research output, and academic facilities.</p>
                                        <p>
                                        In recent years, all Schools of Shoolini University have received immense recognition — School of Agriculture, School of Biotechnology, School of Bioengineering & Food Technology, School of Mechanical, Civil & Electrical Engineering, School of Business Management, Chitrakoot School of Liberal Arts, School of Journalism, School of Ancient Indian Wisdom and Yogic Sciences, School of Pharmaceutical Sciences, School of Physics & Materials Science, School of Biological & Environmental Sciences, Yogananda School of AI Computers & Data Science, School of Law, School of Advanced Chemical Sciences.
                                        </p>
                                    </div>
                                </div>

                             
                            </div>
                            
                            <div className="row cardANimated">
                            <Allrankings />
                            </div>
                           
                        </div>
                    </section>

                    <section id="allCourses" className="student-voices">
                        <div className="container">
                        <div className="pagetitle text-center mb-4"><h2>Awards</h2>
                                       
                                       </div>
                            <div className="row">
                                <div className="col-md-6 mb-xs-20">
                                    <div className="card-box">
                                        <p> Established in 2009, Shoolini University is recognised for its high quality of education and focus on research. A top-ranked university in Asia and a highly regarded name in India, Shoolini University is UGC Approved and NAAC Accredited. In addition, the National Institutional Ranking Framework (NIRF) has consistently ranked it among the leading institutes of higher education. Continuing its pursuance of excellence, the university has received outstanding accolades and recognition for parameters such as student output, research output, and academic facilities.</p>
                                      
                                    </div>
                                </div>
                                <div className="col-md-6 mb-xs-20">
                                    <div className="card-box">
                                        <p> Established in 2009, Shoolini University is recognised for its high quality of education and focus on research. A top-ranked university in Asia and a highly regarded name in India, Shoolini University is UGC Approved and NAAC Accredited. In addition, the National Institutional Ranking Framework (NIRF) has consistently ranked it among the leading institutes of higher education. Continuing its pursuance of excellence, the university has received outstanding accolades and recognition for parameters such as student output, research output, and academic facilities.</p>
                                      
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

export default Minor