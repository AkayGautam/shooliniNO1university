import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Styles } from './style/programmes'
// import Aos from 'aos';
import 'aos/dist/aos.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BreadcrumbBox from '../../components/common/Breadcrumb'
import PopularPrograme from './PopularPrograme'
import ProgramSingle from './ProgramSingle'
import SearchResearcher from '../../components/SearchResearcher'
import { resetMetaTags, setMetaTags } from '../../helper/setMetaTags'
import SuspenseBoundary from '../../helper/SuspenseBoundary'
import Link from "next/link";
import Head from 'next/head'
function useQuery() {
  const { search } = useLocation()
  return React.useMemo(() => new URLSearchParams(search), [search])
}

const SchoolDetail = ({ id, data }) => {
  useEffect(() => {
    window.scrollTo(0, 0)

    var s = document.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.src = 'https://widgets.nopaperforms.com/emwgts.js'
    document.body.appendChild(s)
    
    document.body.setAttribute('id', `pageId-${id}`)
    return () => {
      document.body.removeAttribute('pageId')
    }
  }, [])


  useEffect(() => {
    var s=document.createElement("script"); s.type="text/javascript"; s.async=true; s.src="https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s); 
  })


  return (
    <SuspenseBoundary>
      <Head>
        <title>{data[0].seo_title}</title>
        <meta name="description" content={data[0].seo_description} />
        <meta name="keywords" content={data[0].seo_keywords} />
      </Head>
      <Styles>
        <Header />
        <BreadcrumbBox title={data[0]?.title} />

        <section className="SchoolDetail x">
          <Container>
            <Row>
              <Col md="7" lg="8" className="order-xs-1">
                <div className="su-sidebar-content my-5">
                  <div class="su-core-title-item-title-wrap">
                    <h3 class="su-core-title-item-title">Programmes</h3>
                    <div class="su-core-title-item-divider"></div>
                  </div>

                  <section class="main-section">
                    <div class="courses row">
                      {data[0]?.courses?.map((row, index) => {
                        return (
                          <div className="col-md-6">
                            <div key={index} className="cuCourse">
                              <div className="detailView">
                                <div key={index}>
                                  <h3> {row.title} </h3>
                                  <p>
                                    <strong> Eligibility </strong>
                                    {row.eligibility}{' '}
                                  </p>
                                </div>
                              </div>

                              <div className="sideOpen">
                                {/* <ProgramSingle slug={row.slug} /> */}
                                <Link
                                       href={`/${row?.slug}`}
                                      className="nav-link nav-sidebar"
                                    >
                                     View Detail
                                    </Link>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </section>

                  <div class="su-core-title-item-title-wrap">
                    <h3 class="su-core-title-item-title">Student Voices</h3>
                    <div class="su-core-title-item-divider"></div>
                  </div>
                  {data[0]?.testimonial && (
                    <section className="userTestimonial">
                      <Row>
                        {data[0]?.testimonial.map((row, index) => {
                          return (
                            <div className="col-md-6 col-12" key={index}>
                              <div className="userDetailCard">
                                <div className="row">
                                  <figure className="cj-media-left col-4">
                                    <p className="user-image">
                                      <img
                                        className="img-fluid"
                                        src={row.imageurl}
                                        alt=""
                                      />
                                    </p>
                                  </figure>
                                  <div className="userContent col-8">
                                    <h5>{row.name}</h5>
                                    <span  dangerouslySetInnerHTML={{
                                  __html: row?.content,
                                }}>
                                      </span> 
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </Row>
                    </section>
                  )}
                </div>
              </Col>
              <Col md="5" lg="4" className="order-xs-2">
                <div className="sideBarpage course-search">
                  <SearchResearcher />
                
                  <div className="sideBarNew">
                      <div className="enqForm">
                      <div className="sideBarNew">
                    <div className="enqForm">
                          <h5 className="formName"> Admissions Open: 2024 </h5>
                          <div class="npf_wgts" data-height="400px" data-w="1222078993f709a639ec1d6ca2d2d084"></div>
                      </div>
                    </div>
                      </div>
                    </div>

                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <Footer />
      </Styles>
    </SuspenseBoundary>
  )
}

export default SchoolDetail
