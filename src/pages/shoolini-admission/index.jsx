/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react'
import Header from '../../components/Header'
// import HeaderOne from '../../components/HeaderOne';
import BreadcrumbBox from '../../components/common/Breadcrumb'
import { Styles } from './style/shooliniadmission'
import Footer from '../../components/Footer'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const ShooliniAdmission = () => {



  let subtitle
  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }

  //   function afterOpenModal() {
  //     // references are now sync'd and can be accessed.
  //     // subtitle.style.color = '#f00'
  //   }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <Styles>
        <Header />
        <div className="addmisionPage">
          <BreadcrumbBox title="Shoolini Admissions" />
        </div>
        <section className="admission-page my-5">
          {/* <div className="RecognitionsHeader">
                        <Container>
                            <div className="pageTitle_secnd"> <h2> Recognitions </h2> </div>
                        </Container>
                    </div> */}

          <Container>
            <Row>
              <Col md="12">
                <div className="">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="section-title">
                        <h3>Admissions Open 2023</h3>
                        <p>
                          {' '}
                          Located in Kasauli Hills, just 90km from the Chandigarh Airport, Shoolini University is India's No.1 Private University (Times Higher Education World University Rankings 2023). This dynamic new-age university has state-of-the-art infrastructure and follows a research-based model. Shoolini provides high-impact, high-quality education to students who excel in their chosen area of study. Shoolini university is UGC Approved & ISO Certified 9001:2008.
                          <br /> <br />
                          Established in 2009, Shoolini University has made its mark in academics and research. We also boast of an engaged alumni network that provides valuable support and resourses to current students. Over the years, Shoolini students have seen global successes and become leaders in their chosen prefessions. Students from all courses — Management, Science, Commerce & Arts avail the best of placement opportunities with top MNCs such as Unilever, HILTI, Nestle, Genpact, TATA Hitachi, Oberoi, Biocon & many more!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="admission-page whySu">
          <Container>
            <div className="about-slider-area mb-5">
              <div className="row">
                <div className="about-bg-img">
                  <div className="about-img">
                    <img src="assets/images/Accreditations.png" alt="img" />
                  </div>
                  <div className="offset-xl-6 col-xl-6 offset-lg-6 col-lg-6 offset-md-4 col-md-8 col-sm-12">
                    <div className="about-content-area">
                      <h3>Accreditations</h3>
                      <p>
                        Shoolini University has received accreditation from the National Assessment and Accreditation Council (NAAC), an autonomous body established by the University Grants Commission (UGC). This makes us the top 15% in India. Shoolini is the No.1 Research University in India, making it the first choice for students passionate about  conducting ground-breaking research. Shoolini has approvals from CCI & GTU. This premier institution of learning has 104+ highly advanced labs, world-class classrooms, lecture halls & other facilities. The School of Law has approval from the Bar Council of India, the curriculum for the School of Agriculture is prescribed by the ICAR and the Master's in Business Administration (MBA) program has been approved by the National Board of Accreditation (NBA).
                        <br /> <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="admission-page whySu simple-steps-area py-5 bg-white">
          <div className="container">
            <div className="section-title">
              <h3>WHY CHOOSE SHOOLINI</h3>
            </div>

            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="single-simple-steps">
                  <h3>250+ GLOBAL ALLIANCES</h3>
                  <p>
                    Students visit top campuses in USA, UK, Europe, Korea, Australia {"&"} China.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="single-simple-steps">
                  <h3>150+ Courses</h3>
                  <p>
                    Choose a specialisation that aligns with your aspirations, passions {"&"} interests.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="single-simple-steps">
                  <h3>1300+ PATENTS FILED </h3>
                  <p>Focus on research {"&"} innovation right from the graduate level.</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-simple-steps">
                  <h3>5000+ Placements</h3>
                  <p>
                    In top MNCs. 100% in MBA, Engineering CSE {"&"} Hotel Management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <SearchProgram /> */}

        <section className="admission-area py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="admission-img mr-15">
                  <img src="assets/images/admission.webp" alt="Imagu" />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="admission-content ml-15">
                  <h2>Admissions Procedure</h2>
                  <ul>
                    <li>
                      Start the application process. Complete your{' '}
                      <a
                        target="_blank"
                        href="https://admissions.shooliniuniversity.com/?utm_source=organic&utm_medium=Admprocess&utm_campaign=applynow"
                        rel="noreferrer"
                      >
                        Online Form here{' '}
                      </a>{' '}
                      and pay the application fee.
                    </li>
                    <li>
                      {' '}
                      Once we receive the application, our admissions team will contact you regarding the eligibility criteria of your chosen course. All courses have different eligibility criteria. While some have entrance exams, others are based on interviews or regulatory requirements.{' '}
                    </li>
                    <li>
                      Admissions for the year 2023 are currently underway. You are eligible to receive a firm offer of admission, even before Board exams, if you submit one of the following entrance exam scores:{' '}

                      <ol>
                        <li> NEET/ JEE/ CLAT</li>
                        <li>SAT </li>
                      </ol>
                    </li>

                    <li>
                      {' '}
                      Once you meet the criteria, the university will send you a letter of enrollment. All students who pay the first-semester fee are enrolled into the course to join India's No.1 Private University (THE World University Rankings 2023){' '}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="course-odf-bg">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="course-pdf">
                    <h3>Fee Payment</h3>
                    <p>
                    Find your course{' '}
                      <Link href="/shoolini-university-fee-structure">
                        fee here
                      </Link>
                      . At our institution, we offer the convenience of paying fees in two instalments per semester, making it easier for newly enrolled students to manage their finances. Plus, we offer a range of highly coveted scholarships to eligible students who meet the required criteria. Don't miss out on the opportunity to unlock your full potential. Check out our course fees and <a href="/scholarships"> scholarship </a> options today!{' '}
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="download-pdf">
                    <a target="_blank" href="https://admissions.shooliniuniversity.com/" className="default-btn">
                      Apply Now
                      <i className="ri-arrow-right-line"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <Modal
          isOpen={modalIsOpen}
          
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button className="closeBtn" onClick={closeModal}>
            x
          </button>
          <div>
            {' '}
            <div
              className="npf_wgts"
              data-height="300px"
              data-w="d095e55a1f298e67da8279133413215f"
            ></div>
          </div>
        </Modal> */}

        <Footer />
      </Styles>
    </>
  )
}

export default ShooliniAdmission
