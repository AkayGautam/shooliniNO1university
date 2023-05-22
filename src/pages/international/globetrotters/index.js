import React, { Suspense } from "react";
import HeaderTwo from '@/components/HeaderTwo'
import Head from "next/head";
import Styles from "../css/international-students";
import Footer from "@/components/Footer";
import BreadcrumbBox from "@/components/common/Breadcrumb";
import Image from "next/legacy/image";
import { Container, Row, Col, Dropdown } from 'react-bootstrap'

const Globetrotters = () => {
  return (
    <>
    
    <Suspense>
        <Head>
          <title>Globetrotters | Shoolini University</title>
          <meta
            name="description"
            content="" />
          <meta name="keywords" content="" />
        </Head>

        <HeaderTwo />
        

        <Styles>

        <section className="hero-slider-area scSlider sliderForBio">
        <div className="slider-wrapper">
         
            <div className="slider-content slider-image globalfootprintImage"  >
              <div className="slider-table">
                <div className="slider-tablecell">
                  <Container>
                    <Row>
                      <Col md="12"></Col>
                      <Col md="6">
                       
                      </Col>

                      <Col md="6">
                        <div className="resForm box">
                          <h4 className="text-center"> Enquire Now</h4>
                        <div class="npf_wgts" data-height="350px" data-w="1222078993f709a639ec1d6ca2d2d084"></div>
                        </div>
                      </Col>

                    </Row>
                  </Container>
                </div>
              </div>
            </div>
         
        </div>
      </section>


    <section classNAme="Introd">
        <div className="container">
            <div className="row">
            <div  class="sec-title text-center aos-init aos-animate"><h2><span>  Success   </span> Stories  </h2></div>
            </div>
        </div>
        </section>


       
       
            </Styles>

            <Footer />
            </Suspense>
    
    </>
  )
}

export default Globetrotters