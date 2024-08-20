import React, { Suspense, useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Head from 'next/head'

const index = () => {

  return (
    <Suspense
      fallback={
        <div className="loading">
          <div className="lds-dual-ring"></div>
        </div>
      }
    >
      <Head>
        <title>Chat with Ambassadors | Shoolini University</title>
        <meta name="description" content="Explore Shoolini University through the eyes of student Ambassadors. Gain insights, ask questions, and explore campus life. Start chatting now!" />
        <meta name="keywords" content="Chat with Ambassadors | Shoolini University" />.
        <script src="https://code.jquery.com/jquery-latest.min.js"></script>
      </Head>

      {/* Main Wrapper */}
      <div className="main-wrapper  ">
        {/* Header 2 */}
        <Header />


        <section>
          <div className="container">
            <div className="row">
              <Col md="12">

                <div class="container"> 
                  <iframe
                    src="https://shoolini.univiser.io/?wordpress=true"
                    frameBorder="0" scrolling="yes" seamless="seamless"
                     className="iframeStyle"> </iframe>
                </div>
              </Col>
            </div>
          </div>
        </section>

        <Footer />

      </div>


    </Suspense>
  )

}

export default index