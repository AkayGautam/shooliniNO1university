import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import BreadcrumbBox from '../../components/common/Breadcrumb'
import { Styles } from '../../components/common/styles/header'
import Footer from '../../components/Footer'
import { Styless } from './style/news'
import { Container, Row, Col, Card } from 'react-bootstrap'
import SearchResearcher from '../../components/SearchResearcher'
import Head from 'next/head'

const NewsTemplate = ({ result }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    var s=document.createElement("script"); s.type="text/javascript"; s.async=true; s.src="https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s); 
  })

  return (
    <>
      <Head>
        <title>{result?.[0].seo_title}</title>
        <meta
          name="description"
          content={result?.[0].seo_twitter_description}
        />
        <meta name="keywords" content={result?.[0].seo_keywords} />
      </Head>
      <Styles>
        {/* Main Wrapper */}
        <div className="main-wrapper visionmission-page">
          {/* Header 2 */}
          <Header />

          {/* Breadcroumb */}
          <BreadcrumbBox title={result?.[0]?.title} />
          <Styless>
            <section className="admidsionProcess my-5 pt-3 ">
              <div className="about__area about__area_one p-relative pt---100 pb---120 mb-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="section-title olList noLinkbtn tables">
                        {/* <h4>About Us</h4> */}
                       
                        {/* <h3>{re/sult?.[0]?.title}</h3> */}
                        <img  className="img-thumbnail mb-3" src={result?.[0]?.imageurl} />

                        <div className="expertContent"> <p
                          dangerouslySetInnerHTML={{
                            __html: result?.[0]?.excerpt,
                          }}
                        ></p></div>

                        <Row>
                          <Col md={12} sm={12}>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: result?.[0]?.content,
                              }}
                            ></p>
                          </Col>
                        </Row>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="sidebar-content nnn">
                        <SearchResearcher />
                      </div>

                      <div className="sideBarNew">
                      <div className="enqForm course-search">
                          <h5 className="formName"> Admissions Open: 2023 </h5>
                          <div class="npf_wgts" data-height="400px" data-w="1222078993f709a639ec1d6ca2d2d084"></div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Styless>

          <Footer />
        </div>
      </Styles>
    </>
  )
}

export default NewsTemplate
