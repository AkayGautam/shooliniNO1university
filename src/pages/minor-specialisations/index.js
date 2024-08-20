import React, { useState, Suspense, useEffect } from 'react'
import Header from '../../components/Header'
import Styless from './style/style'
import Footer from '../../components/Footer'
import { Modal, Button, Form } from "react-bootstrap";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import Image from "next/legacy/image";
import Head from 'next/head';
import Minorcourses from './Minorcourses';

const Minor = () => { 
    const data = [
        {
            title: "How is the Minor Degree awarded?",
            content: "A minimum of 12 credits through 4 courses of 3 credits each in one of the Minor specialisations being offered is required for you to graduate with a Minor."
        },
        {
            title: "Is the choice for Minor courses totally mine?",
            content: "Yes, the choice is yours and it could be learning, or career-interest based."
        },
        {
            title: "How will graduating with a Minor help you in future?",
            content: "Graduating with a Minor will make you stand out and improve prospects of employment as it shows your ability to put in hard work and versatility in learning. A Minor also provides more security in a fast-changing job market where different skills are in demand."
        },
        {
            title: "What are the minimum requirements to complete a Minor?",
            content: "As mentioned in Answer 1 above. "
        },
        {
            title: "Can I choose a Minor Course in an area that is completely different from my degree?",
            content: "Absolutely. A Science student may choose to learn Economics or Music while an Liberal Arts student can learn Artificial Intelligence — That is the beauty of a choice-based curriculum. Rather, a Minor is offered in areas different from your core area of study (the parent domain). "
        },
        {
            title: "How is a Minor different from other subject categories (Foundation or Core/Major)?",
            content: "A core or foundation course is more about depth, and a Minor course is more exploratory and is about breadth. Minor courses will be more transdisciplinary in spirit, and you will learn them with fellow students of different streams."
        },
        {
            title: "What if I wish to take a Minor in the same subject as his/her Major/Core/Degree?",
            content: "Based on Latest UGC Norms."
        },
        {
            title: "Does every Minor course have unlimited seats? ",
            content: "No, we have capped the maximum number of seats and for each course we will fill them on a first-come-first-serve basis."
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

        useEffect(() => {

            var s=document.createElement("script"); s.type="text/javascript"; s.async=true; s.src="https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s);
            
      
        }, [])

    return (
        <>

<Suspense> 

<Head>
<title>Minor Specialisations | Shoolini University</title>
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


                    <section id="fees" className="student-voices">
                        <div className="container">
                            <div className="pagetitle text-center mb-4">
                                {/* <h2>See how can you structure your degree! </h2> */}
                                        <p>At Shoolini University students pursue minors that are not part of their core subject curriculum. So, a Science student can choose to learn Economics or Music. On the other hand, a Liberal Arts student can learn Data Mining or Cyber Laws. That is the beauty of the choice-based curriculum at Shoolini! </p> 

                                        <h2>See how can you structure your degree! </h2>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-xs-20">
                                    <div className="card-box">
                                        <h3 className="title-default title-red ">Major  </h3>
                                        <p> A Major is the primary subject you choose as the focus of your college or university degree. It’s the main specialisation demanded by a degree. For example, biotechnology, computer science, management studies, English literature, law etc</p>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="card-box">
                                        <h3 className="title-default title-red "> Minor</h3>
                                        <p className="text-18"> Students pursue a Minor as an exploratory and secondary area of interest. A minor may not align with the primary specialisation. Instead, it complements your main degree and helps you gain a new knowledge or skill. 
                                        </p>




                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>


                  

                    <section id="allCourses" className="student-voices">
                        <div className="container">
                            <div className="pagetitle text-center mb-4"><h2>Benefits of Major + Minor Specialisations</h2>
                                       
                            </div>
                            <div className="row">
                                <div className="col-md-12 mb-xs-20">
                                    <div className="card-box">
                                        <p> With a Major, you'll attain new heights in your chosen field. A Minor becomes your secret superpower to unlock a parallel expertise. Embrace this extraordinary combination or a major and a minor to conquer two domains and become the hero of your own academic adventure!</p>
                                       
                                       <ul>
                                           <li>Learning beyond the classroom because students need to choose a minor that is not a part of their core area of study </li>
                                           <li> It is exploratory & transdisciplinary</li>
                                           <li> Showcases student’s versatility, thus enhancing job prospects </li>
                                           <li> Offers better job security as companies are looking for talent with parallel skills </li>

                                       </ul>
                                    </div>
                                </div>

                             
                            </div>
                            
                            <div className="row cardANimated">
                            <div className="pagetitle text-center mb-4"><h2>Choose a Minor</h2> </div>
                            <Minorcourses />
                            </div>
                           
                        </div>
                    </section>

                    <section className="pt-0">
                        <div className="container">
                            <div className="w-100">
                            <div class="pagetitle text-center mb-4"><h2>Navigating Path to Minor Specialisations</h2></div>

                                <img className="w-100" src="assets/images/steps.jpg" />
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