import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../components/Header'
import BreadcrumbBox from '../../components/common/Breadcrumb'
import Styles from './style/postgraduate'
import Footer from '../../components/Footer'
import SearchResearcher from '../../components/SearchResearcher'
import { streamTemplateData } from '../undergraduate-programs'
import Link from 'next/link'
import SuspenseBoundary from '../../helper/SuspenseBoundary'
import Head from 'next/head'

export const getServerSideProps = async () => {
  const metaData = {}
  const metaReq = await fetch(
    'https://shooliniuniversity.com/media/GetTemplateNameAPI',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        auth: 'shoolini@999',
        url: 'postgraduate-programs',
      }),
    },
  ).then((response) => response.json())
  const meta = await streamTemplateData(metaReq.success[0].id).then(
    (response) => response.json(),
  )
  metaData.seo_title = meta.success[0].seo_title
  metaData.seo_description = meta.success[0].seo_description
  metaData.seo_keywords = meta.success[0].seo_keywords

  const data = await fetch('https://shooliniuniversity.com/media/programAPI', {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({ auth: 'shoolini@999', postgraduate: 2 }),
  }).then((response) => response.json())

  return {
    props: {
      metaData,
      data: data.success,
    },
  }
}




const Postgraduate = ({ metaData, data: Result }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {}
  }, [])

  useEffect(() => {
    var s=document.createElement("script"); s.type="text/javascript"; s.async=true; s.src="https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s); 
  })

  return (
    <SuspenseBoundary>
      <Head>
        <title>{metaData?.seo_title}</title>
        <meta name="description" content={metaData?.seo_description} />
        <meta name="keywords" content={metaData?.seo_keywords} />
      </Head>

      <Styles>
        {/* Main Wrapper */}
        <div className="main-wrapper postgraduate-page">
          {/* Header 2 */}
          <Header />
          {/* Breadcroumb */}
          <BreadcrumbBox title="Postgraduate Programs" />
          <section className="py-5">
            <Container>
              <Row>
                <Col md="8">
                  <Row>
                    {/* {Result?.map((data, index) => (
                        data?.visibility === '' || 'yes' ? (
                      <Col md="6" key={index} id={'courseID_'+data?.id}>
                        <div className="cuCourse" >
                          <Link href={`/${data?.slug}`} className="detailView">
                            <div className="detailView">
                              <div key={index} value={data?.id}>
                                {' '}
                                <h3> {data?.title} </h3>
                                <p>
                                  {' '}
                                  <strong> Eligibility </strong>
                                  {data?.eligibility}{' '}
                                </p>
                                <span>
                                  {' '}
                                  <strong> Duration </strong>
                                  {data?.duration}{' '}
                                </span>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </Col>
                        ) : (<> </>)
                    ))} */}

{
                      Result.map(data=>{
                        if(data.visibility === "no" || data.visibility === "NO")
                        {
                          return null
                        }

                        return (
                          <Col md="6" key={data.id} id={'courseID_' + data?.id}>
                          <div className="cuCourse dddc" >

                         
                            <Link   href={`/${data?.slug}`} className="detailView vvvvvvvvvv" >
                              <div className="detailView">
                                <div  value={data?.id}>
                                  {' '}
                                  <h3> {data?.title} </h3> 
                                  <p>
                                    {' '}
                                    <strong> Eligibility </strong>
                                    {data?.eligibility}{' '}
                                  </p>
                                  <span>
                                    {' '}
                                    <strong> Duration </strong>
                                    {data?.duration}{' '}
                                  </span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </Col>
                        )
                      })
                    }
                    
                  </Row>
                </Col>
                <Col md="4">
                  <div className="sidebar-content">
                    <SearchResearcher />

                    <div className="sideBarNew">
                    <div className="enqForm course-search">
                          <h5 className="formName"> Admissions Open: 2024 </h5>
                          <div class="npf_wgts" data-height="400px" data-w="1222078993f709a639ec1d6ca2d2d084"></div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <Footer />
        </div>
      </Styles>
    </SuspenseBoundary>
  )
}

export default Postgraduate
