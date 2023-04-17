import React, { Suspense, useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Styless from './styles'
import Header from '../../components/Header'
import BreadcrumbBox from '../../components/common/Breadcrumb'
import { Styles } from '../../components/common/styles/header'
import Footer from '../../components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import SearchResearcher from '../../components/SearchResearcher'
import SuspenseBounday from '../../helper/SuspenseBoundary'
import Head from 'next/head'

export const getServerSideProps = async () => {
  const data = await fetch(
    'https://shooliniuniversity.com/media/GetGraduateAPI',
    {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ auth: 'shoolini@999', type: 'graduate', id: 297 }),
    },
  ).then((response) => response.json())

  return {
    props: {
      gradeData: data?.success[0],
    },
  }
}

const GraduateAttributes = ({ gradeData }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    document.body.setAttribute('pageId', 297)
 

  }, [])

  useEffect(() => {
    var s=document.createElement("script"); s.type="text/javascript"; s.async=true; s.src="https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s); 
  })


  return (
    <SuspenseBounday>
      <Head>
        <title>{gradeData?.title}</title>
        <meta name="description" content={gradeData?.seo_description} />
        <meta name="keywords" content={gradeData?.seo_keywords} />
      </Head>

      <Styles>
        {/* Main Wrapper */}
        <div className="main-wrapper visionmission-page">
          {/* Header 2 */}
          <Header />

          {/* Breadcroumb */}
          <BreadcrumbBox title="Graduate Attributes" />

          <Styless>
            <section className="about-us">
              <Container>
                <Row>
                  <Col md="8">
                    <div className="cuCourse">
                      <div data-aos="fade-right" className="section-title">
                        <h3> {gradeData?.title} </h3>
                      </div>

                      <Row>
                        <Col md="12">
                          <div className="about-content">
                            <div
                              data-aos="fade-right"
                              dangerouslySetInnerHTML={{
                                __html: gradeData.content,
                              }}
                            />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="sideBarNew">
                      <SearchResearcher />
                              
                      <div className="enqForm course-search">
                          <h5 className="formName"> Admissions Open: 2023 </h5>
                          <div class="npf_wgts" data-height="400px" data-w="1222078993f709a639ec1d6ca2d2d084"></div>
                      </div>
                      
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>

            <Footer />
          </Styless>
        </div>
      </Styles>
    </SuspenseBounday>
  )
}

export default GraduateAttributes
