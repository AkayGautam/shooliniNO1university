import Link from 'next/link.js'
import React, { useEffect, Suspense, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Header from '../../components/Header'
import BreadcrumbBox from '../../components/common/Breadcrumb'
import { Styles } from '../../components/common/styles/header'
import Head from 'next/head'
import Styless from './style/allevents'
import Footer from '../../components/Footer'
import SearchResearcher from '@/components/SearchResearcher'


const Placements = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [data, setData] = useState([])

  var result = []

  const dateFormat = (date) => {
    var options = { year: 'numeric', month: 'long', day: 'numeric' }
    var today = new Date(date)
    return today.toLocaleDateString('en-US', options)
  }

  const removeHTML = (str) => {
    var tmp = document.createElement('p')
    tmp.innerHTML = str
    return tmp.textContent || tmp.innerText || ''
  }

  useEffect(() => {
    var s=document.createElement("script"); s.type="text/javascript"; s.async=true; s.src="https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s); 
  })


  useEffect(() => {
    fetch('https://shooliniuniversity.com/media/allEventAPI', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
        // <-- Specifying the Content-Type
      }),
      body: 'auth=shoolini@999',
    })
      .then((response) => response.json())
      .then((res) => setData(res))
      .catch((error) => console.error(error))
  }, [])

  result = data?.success
  console.log(result)




  return (
    <>

      <Suspense>
        <Head>
          <title>Upcoming Events {"&"} Conferences | Shoolini University</title>
          <meta name="description" content="Find all upcoming events, conferences, seminars, webinars and workshops taking place at Shoolini University. Participate in the events and enjoy!" />
          <meta name="keywords" content="Events, latest events, upcoming events, webinars, seminars, conferences, workshops, Shoolini events, Shoolini University" />


        </Head>

        <Styles>
          {/* Main Wrapper */}
          <div className="main-wrapper allevents-page">
            {/* Header 2 */}
            <Header />

            {/* Breadcroumb */}
            <BreadcrumbBox title="Events" />

            <Styless>
              <section style={{ background: '#f9f9f9' }} className="event-page-area event-page py-5">
                <Container>
                  <div data-aos="fade-right" className="sec-title mb-5 text-left">
                    <h2>events {'&'} Conferences </h2>
                  </div>



                  <Row>
                    <Col md="8">
                    <Row>
                      {result?.map((data) => (
                        <div className="post-list-item col-md-6 px-2" key={data?.id}>


                          <div className="event-item ">
                            <div className="event-item-inner">
                              <div className="event-item-thumbnail">
                                <a href={data?.weburl} title={data?.title}>
                                  <div className="vfvfv placeholder-thumbnail-bg">
                                    <img src={data?.imgurl} alt={data?.title} />
                                  </div>
                                </a>
                              </div>

                              <div className="event-item-content">
                                <h4 className="event-title font-2"><a href={data?.weburl}>{(data?.title).replace('%', '-')}</a></h4>
                                <div className="event-meta small-meta">

                                  <span>
                                    <i className="lnr lnr-calendar-full"></i>
                                    {dateFormat(data?.date)}	</span>
                                </div>
                                <div className="event-excerpt"><p>  {removeHTML(data?.content)}</p>
                                </div>

                                <span className="btn-text"><i className="lnr lnr-calendar-full"></i> Venue : {data?.location}</span>


                              </div>

                            </div>
                          </div>





                        </div>
                      ))}
                     </Row>
                    </Col>

                    <Col md="4">
                    <div className="sidebar-content sideBarpage">
                    <SearchResearcher />

                    <div className="sideBarNew">
                    <div className="enqForm course-search">
                          <h5 className="formName"> Admissions Open: 2023 </h5>
                          <div class="npf_wgts" data-height="400px" data-w="1222078993f709a639ec1d6ca2d2d084"></div>
                      </div>
                    </div>
                  </div>   
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

export default Placements
