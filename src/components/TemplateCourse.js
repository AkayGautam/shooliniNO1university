import React, { useEffect } from 'react'
import { Container, Row, Col, Dropdown } from 'react-bootstrap'
import 'react-animated-slider/build/horizontal.css'
import { Styles } from './common/styles/Combine'
import { useState } from 'react'
import Datas from '../data/school/school.json'
import Link from 'next/link'
import AdmissionFormSidebar from './AdmissionFormSidebar'

const Templatecourse = ({ title, img }) => {

  const [bgimg, setBgimg] = useState('')
  useEffect(() => {
    // Aos.init({ duration: 2000 })
    setBgimg(img)
  }, [img])

  return (
    <Styles>
      <section className="hero-slider-area scSlider sliderForBio">
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
      </section>
    </Styles>
  )
}

export default Templatecourse
