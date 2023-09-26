import React, { useEffect } from 'react'
import { Container, Row, Col, Dropdown } from 'react-bootstrap'
import 'react-animated-slider/build/horizontal.css'
import { Styles } from './common/styles/Combine'
import { useState } from 'react'
import Datas from '../data/school/school.json'
import Link from 'next/link'
import AdmissionFormSidebar from './AdmissionFormSidebar'

const Templatecourse = ({ title, img, data, id, ldJson }) => {


  
  const [bgimg, setBgimg] = useState('')
  useEffect(() => {
    // Aos.init({ duration: 2000 })
    setBgimg(img)
  }, [img])

  return (
    <Styles>

<section className="new-header aiml-new__header js-section-track"   id="bg-image" data-init="true">
              <div className="container">
              {Datas.map((data, i) => (
            <div
              key={i}
              className="slider-content slider-image"
              style={{
                background: `url('${bgimg}') no-repeat center center`,
              }}
            >
                <div className="row">
                  <div className="col-md-6">
                    <div className="header-content text-left">
                      <h1 className="banner-heading-aiml">School of Pharmaceutical Sciences </h1>
                      <h3 className="banner-subheading-aiml">{title}</h3>
                      <p className="mb-0 small-font"><strong> Eligibility :</strong> {data[0]?.eligibility}</p>
                      <ul>
                        <li>Duration : 12 Months</li>
                        <li>Admission Criteria</li>
                      </ul>
                      <div className="button-section non-js-btns " id="top-banner-button-section">
                        <div className="lc-btn-section">
                          <a href="javascript:void(0)" className="grey-transparent-button btn-style fixed-size-btn track-click-mp">
                            Apply Now
                          </a>
                        </div>
                        <div className="application-btn-section">
                          <a href="/pg-program-artificial-intelligence-course/registration" className="btn primary-button  btn-style fixed-size-btn track-click-mp" data-title="Top Banner"> Download Brochure </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="play-btn-area">
                      <div className="video-play-button" data-gl-target="experienceModal" data-videoid="oxqhi57t0w">
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  ))}
              </div>
            </section>

      {/* <section className="hero-slider-area scSlider sliderForBio">
        <div className="slider-wrapper">
          {Datas.map((data, i) => (
            <div
              key={i}
              className="slider-content slider-image"
              style={{
                background: `url('${bgimg}') no-repeat center center`,
              }}
            >
              <div className="slider-table">
                <div className="slider-tablecell">
                  <Container>
                    <Row>
                      <Col md="12"></Col>
                      <Col md="8">
                        <div className="resrchTxt Slide">
                          <h1> {title} </h1>
                        </div>
                      </Col>

                      <Col md="4">
                      <div className="sideBarNewside mt-3">
                            <AdmissionFormSidebar />
                          </div>

                        <div className="testimonial Link">
                          <Link className="viewTest" href="/testimonials"> View Testimonials </Link>
                        </div>
                      </Col>

                    </Row>
                  </Container>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}
    </Styles>
  )
}

export default Templatecourse
