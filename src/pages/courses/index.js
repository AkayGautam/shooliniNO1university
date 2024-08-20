import React, { Suspense, useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../components/Header'
import Datas from '../../data/about-us/about-us.json'
import BreadcrumbBox from '../../components/common/Breadcrumb'
import { Styles } from '../../components/common/styles/header'
import Footer from '../../components/Footer'
import Head from 'next/head'
//import SearchProgram from '../../components/SearchProgram'
// import SearchProgramShort from '@/components/SearchProgramShort'
import SelectCourse from '../../components/SelectCourse'

import Styless from './css/courses.js'
const Courses = () => {
    return (
        <>

            <Suspense
                fallback={
                    <div className="loading">
                        <div className="lds-dual-ring"></div>
                    </div>
                }
            >

                <Head>
                    <title>Courses | Shoolini University</title>
                    <meta name="description" content="" />
                    <meta name="keywords" content="" />
                </Head>

                <Styles>
                    {/* Main Wrapper */}
                    <div className="main-wrapper about-page">
                        {/* Header 2 */}
                        <Header />

                        {/* Breadcroumb */}
                        <BreadcrumbBox title="Courses" />

                        <Styless> 
                            <section className="my-4 about-us">
                                <Container>
                                    <Row>

                                        <Col md="8" className="order-xs-2">

                                            <div className="searchProgram mt-4">
                                            <h3>Discover your Perfect Program  </h3>
                                                <p> Choose from 150+ graduate, postgraduate, and doctoral programs at Shoolini University, the No.1 Private University in India (Times Higher Education World University Rankings & QS World University Rankings). This top research university offers leading-edge programs across various streams such as Engineering, Management, Sciences, Commerce, Pharmacy, Law, Agriculture, Liberal Arts, Media & Journalism, and Hospitality.  </p>

                                                <p>
                                                   <strong>  <em> Hi-tech classrooms, 104+ advanced laboratories, and top research facilities provide a dynamic learning environment for your career journey. </em> </strong>
                                                </p>

                                                <h3> Highlights </h3>

                                                <ul className="hlList">

                                                   <li>	No.1 Private University in India (Times Higher Education World University Rankings and QS World University Rankings 2024).  </li>
                                                   <li>	No.1 Research University (QS World University Rankings, Asia, 2024).  </li>
                                                   <li>	All courses are NAAC accredited and approved by UGC, BCI, and PCI.  </li>
                                                   <li>	Faculty from top organisations like McKinsey, PwC, HSBC, Citi IBM, Microsoft, IIT, IIM, IISc, Oxford, Stanford, Cambridge, and UC Berkeley. </li>
                                                   <li>	Faculty from top organisations like McKinsey, PwC, HSBC, Citi IBM, Microsoft, IIT, IIM, IISc, Oxford, Stanford, Cambridge, and UC Berkeley. </li>
                                                   <li>	‘Mission 130’: 100% placements with 30% in top organisations.  </li>
                                                   <li>	Top industry partners include IBM, Cognizant, Genpact, Mercer, Biocon, Cipla, Hindustan Unilever, L'Oréal, Deloitte, Adani, Accenture, and more.  </li>
                                                   <li>	Students receive attractive research and overseas fellowships.  </li>
                                                   <li>	One-Student-One-Patent policy that resulted in filing of 1500+ patents so far.   </li>
                                                   <li>	500+ Scholarships to deserving candidates for PhD, Postgraduate, and Undergraduate programs.  </li>
                                                   <li>	Received Government grants like PURSE, SERB, DST FIST and more. </li>
                                                   <li>	Received Government grants like PURSE, SERB, DST FIST and more. </li>
                                                   <li>	Houses the XR and AI Research Centre and BOSCH Centre.  </li>
                                                   <li>	Partnership with the ICT Academy, IBM, Microsoft, AWS Academy, Ikigai Lab, AADDOO,  NASSCOM, KPMG, NHRDN, and LIBF.  </li>

                                                </ul>
                                            </div>


                                        </Col>

                                        <Col md="4" className="order-xs-1">

                                            <div className="searchProgram">  <SelectCourse /> </div>


                                        </Col>
                                    </Row>
                                </Container>
                            </section>
                        </Styless>

                        <Footer />
                    </div>
                </Styles>


            </Suspense>

        </>
    )
}

export default Courses