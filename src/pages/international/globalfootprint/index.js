import React, { Suspense } from "react";
import HeaderTwo from '@/components/HeaderTwo'
import Head from "next/head";
import Styles from "../css/international-students";
import Footer from "@/components/Footer";
import BreadcrumbBox from "@/components/common/Breadcrumb";
import Image from "next/legacy/image";
import { Container, Row, Col, Dropdown } from 'react-bootstrap'

const Globalfootprint = () => {
  return (
    <>
    
    <Suspense>
        <Head>
          <title>International Students Program | Shoolini University</title>
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
                <div className="introText">
                    <p>Shoolini University has received numerous accolades and awards for its academic programs, research initiatives, and entrepreneurial spirit. As a result, it has established collaborations with leading universities and organisations worldwide. With a global outlook and interdisciplinary approach, we are a hub of innovation and knowledge creation, making significant contributions to the development of society and the world at large.   </p>
                </div>
            </div>
        </div>
        </section>


        <section className="templateHeading highLights">
          <div className="container-fluid p-0">
            <div className="row m-0">
              <div className="col-md-4 p-0">
                <Image
                  width={506}
                  height={435}
                  className="w-100"
                  src="/assets/images/baby2.jpg"
                />
              </div>
              <div className="col-md-8 p-0">
                <div className="hgContent">
                  <div className="hgContentinner">
               
                    <div className="newData">
                    <div className="sec-title text-left"><h2 className="text-white mb-0">HighLights </h2></div>
                    <div className="newData"> 
                   <p>  Shoolini students go for higher education in top international universities </p> 

                   <p> Students in 30+ countries (Outbound) </p> 

                   <p> International Students from 20+ countries (Inbound) </p> 

                   <p> 50+ International Faculty </p> 

                   <p> 1000+ Joint Projects </p> 

                   <p>  Students received scholarships up to Rs 50 Crore+ so far   </p> 
</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
       
            </Styles>

            <Footer />
            </Suspense>
    
    </>
  )
}

export default Globalfootprint