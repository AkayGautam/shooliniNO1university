import React, { useState, Suspense, useEffect } from 'react'
import Header from '../../components/Header'
import Styless from './style/style'
import Footer from '../../components/Footer'
import { Modal, Button, Form } from "react-bootstrap";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import Image from "next/legacy/image";
import Head from 'next/head';
import Lateral from './Lateral';

const Minor = () => { 
    const data = [
        {
            title: "What is LEET?",
            content: "LEET (Lateral Entry Entrance Test) is an entrance exam that allows diploma holders to gain direct admission into the second year of various undergraduate degree programs at Shoolini, including engineering, pharmacy, design, biotech, and more."
        },
        {
            title: "Who can apply for LEET?",
            content: " Diploma holders in engineering, pharmacy, design, biotech, and related fields can apply for LEET at Shoolini University. Applicants must have completed their diploma from a recognised institution."
        },
        {
            title: "How is LEET beneficial to diploma holders?",
            content: "LEET offers diploma holders the opportunity to skip the first year of undergraduate studies and directly enter the second year of their desired program. This allows students to save time, complete their degrees faster, and build on the knowledge they’ve already gained in their respective fields."
        },
        {
            title: "How can I apply for LEET?",
            content: " To apply for LEET at Shoolini University, candidates can visit the university’s official website, complete the online application form, and submit the required documents. Detailed instructions are available on the website to guide applicants through the process. "
        },
        {
            title: "What is the format of the LEET exam?",
            content: "The LEET exam at Shoolini University typically consists of multiple-choice questions (MCQs) that test your knowledge in subjects relevant to your chosen program. The exam assesses your understanding of key concepts in your field and your ability to apply them to solve problems. "
        },
        {
            title: "Is there any age limit to apply for LEET?",
            content: "Shoolini University does not impose a specific age limit for applying to LEET. However, applicants must meet the educational eligibility criteria, which generally include completing a diploma in the relevant field from a recognised institution."
        } 
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

        useEffect(() => {

            var s=document.createElement("script"); s.type="text/javascript"; s.async=true; s.src="https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s);
            
      
        }, [])

    return (
        <>

<Suspense> 

<Head>
<title>Lateral Entry (LEET) Courses | Shoolini University</title>
<meta name="description" content="Advance your career with Lateral Entry (LEET) courses at Shoolini! Join top programs designed for diploma holders to fast-track their success." />
<meta name="keywords" content="lateral entry ug courses, lateral entry courses, lateral entry degree courses, LEET course, LEET, Best LEET Courses in India, B Tech LEET, B Design LEET, B Tech CSE LEET, Shoolini University" />
</Head>

            <div id="mbaPage">
                <Header />
            </div>


            <Styless>

                <main className="innerBody">
                    <section id="shooliniMBA" className="heroBanner">
                        <div className="container">
                            <div className="slideDesign"> 
                            <a target="_blank"
                                            href="https://admissions.shooliniuniversity.com/"> <img className="none-sm" src="assets/images/leet.jpg" /> </a>
                            <div className="row  non-xs">
                                <div className="col-md-8">
                                    <div className="leftCatd">
                                        <h1 className="mb-0"> <span>   Best LEET <br />Courses in India   </span> </h1>
                                        <div className="noretype d-block">
                                            <p className="border-right-1"> TURN YOUR DIPLOMA INTO A DEGREE</p>
                                           
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
                        </div>
                    </section>

                    {/* section  */}


                    <section id="fees" className="student-voices">
                        <div className="container">
                            <div className="pagetitle text-center mb-4">
                                {/* <h2>See how can you structure your degree! </h2> */}
                                        <p>Lateral Entry courses at Shoolini University offer direct entry into the second year of engineering, pharmacy, design, biotech programs, and more. These courses allow diploma holders to build on their existing knowledge and dive into advanced subjects. This pathway helps save time while opening up valuable career opportunities across various fields. </p> 
 
                            </div>
                           
                        </div>
                    </section>


                  

                    <section id="allCourses" className="student-voices pt-0">
                        <div className="container">
                            <div className="pagetitle text-center mb-4"><h2>Benefits of LEET Courses at Shoolini University</h2>
                                       
                            </div>
                            <div className="row">
                                <div className="col-md-12 mb-xs-20">
                                    <div className="card-box">
                                       
                                       <ul>
                                           <li>Direct Admission to Advanced Levels: Enter directly into the second year of your chosen program, skipping the first year. </li> 
                                           <li>Diverse Course Options: Access programs in engineering, pharmacy, design, biotech, and more.</li>
                                           <li> Utilise Prior Learning: Build on your diploma knowledge for a smoother transition to advanced coursework.</li>
                                           <li>Faster Graduation: Complete your degree in a shorter time frame, reducing time and tuition costs.</li>
                                           <li>Practical, Industry-Ready Education: Gain real-world experience focusing on skills required by employers.</li>
                                           <li>Improved Career Prospects: A full degree enhances your employability and opens doors to higher-paying job roles.</li>
                                           <li>Personalised Learning Path: Tailored options that suit your prior academic background and career goals.</li>

                                       </ul>
                                    </div>
                                </div>

                             
                            </div>
                            
                            <div className="row cardANimated">
                            <div className="pagetitle text-center mb-4"><h2>Find Your Perfect LEET Program</h2> </div>
                            <Lateral />
                            </div>
                           
                        </div>
                    </section>
 

                    <section id="faqs" className="student-voices pt-0">
                        <div className="container">
                            <div className="pagetitle text-center mb-4"><h2> Frequently Asked Questions </h2></div>
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