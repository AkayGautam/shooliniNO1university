import React, { useState, Suspense, useEffect } from 'react'
import Header from '../../components/Header'
import Styless from './style/style'
import Footer from '../../components/Footer'
import Head from 'next/head'; 

const Springfest  = () => {
   
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
<title>SpringFest 2024 Registration</title>
<meta name="description" content="SpringFest 2024 Registration" />
<meta name="keywords" content="SpringFest 2024 Registration | Shoolini University" />
</Head>

            <div id="mbaPage">
                <Header />
            </div>


            <Styless>

                <main className="innerBody">
                    <section id="shooliniMBA" className="heroBanner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="leftCatd">
                                        <h1 className="mb-0"> <span> SpringFest 2024 Registration </span> </h1>
                                        <div className="noretype d-block">
                                            <p>  We are extremely excited to host the Shoolini SpringFest 2024 from the 15th to 17th of March, 2024 at our serene campus.   </p>
                                           
                                        </div>

                                        <div className="px-0 btn btn-grad-red">
                                             <a target="_blank" href="https://my.shooliniuniversity.com/shoolini_event/schoolindividual.php"> Individual Competitions<br /> (School students) </a>

                                             <a target="_blank" href="https://my.shooliniuniversity.com/shoolini_event/index.php"> Group Competitions<br /> (College/University Students) 
</a>
                                             <a target="_blank" href="https://my.shooliniuniversity.com/shoolini_event/individual.php"> Individual Competitions<br /> (College/University Students)</a>
                                        </div>
                                        <div className="downloads"> <a target="_blank" href="https://shooliniuniversity.com/media/pdf/University-Brochure.pdf"> Download University brouchure</a></div>
                                        {/* <div className="ugImage">
                                            <img src="assets/images/uglogos.png" />
                                        </div> */}
                                    </div>
                            
                                </div>
                           
                            </div>

                        </div>
                    </section>

                    {/* section  */}


                    <section id="allCourses" className="student-voices">
                        <div className="container">
                            <div className="pagetitle text-center mb-4"><h2>Points to remember </h2>
                                       
                            </div>
                            <div className="row">
                                <div className="col-md-12 mb-xs-20">
                                    <div className="card-box">
                                       <ul>
                                           <li> Each competition has a specific eligibility criteria and requirements. Please go through the brochure of the event to ensure that you have all the pre-requisites.  </li> 
                                           <li> The venue of the events is at Shoolini University's campus in Solan, Himachal Pradesh. </li> 
                                           <li> All fees are inclusive of taxes and once paid, shall not be refunded. </li> 
                                           <li> Registrations through this portal shall only be accepted. No offline registrations are accepted. </li> 
                                           <li> In case of any query while registering, contact: Mr. Naman Sharma, +91 80106 75132 (school competitions) {'&'} Mr. Gautam Sukhija, +91 93334 41313 (college/university competitions). </li> 
                                           <li> Last Date of Registration: 10PM (IST), 14th of March, 2024 </li> 
                               
                                       </ul>
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

export default Springfest