import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Container, Row, Col, Card as Cards, Table } from 'react-bootstrap'
import { BreadcrumbBox } from '../../components/common/Breadcrumb'
import { Styless } from '../../components/common/styles/FacultyOfAgriculture'
import Link from 'next/link'
import SearchResearcher from '../../components/SearchResearcher'
import AdmissionFormSidebar from '../../components/AdmissionFormSidebar'
import SuspenseBoundary from '../../helper/SuspenseBoundary'
import Head from 'next/head'
import Image from "next/legacy/image";

const BASE_URI = 'https://shooliniuniversity.com/media'

export async function getServerSideProps() {
  const data = await fetch(`${BASE_URI}/Stream2API`, {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({
      auth: 'shoolini@999',
      id: 413,
    }),
  }).then((response) => response.json())

  return {
    props: {
      Data: data.success[0],
      Gallery: data.success[0]?.gallery
        ? JSON.parse(data.success[0].gallery)
        : [],
      Numbers: data.success[0]?.numbers
        ? JSON.parse(data.success[0].numbers)
        : [],
      facList: data.success.facultylistdetails,
      facD: data.success?.facultydetail,
    },
  }
}

const Faculty = ({ Data, Gallery, Numbers, facList, facD }) => {
  const [showTable, setShowTable] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {}
  }, [])

  useEffect(() => {
    document.body.setAttribute('pageId', 413)
    return () => {
      document.title = 'Shoolini University'
      document.body.removeAttribute('pageId')
    }
  }, [])

  return (
    <SuspenseBoundary>
      <Head>
        <title>{Data?.seo_title}</title>
        <meta name="description" content={Data?.seo_description} />
        <meta name="keywords" content={Data?.seo_keywords} />
      </Head>
      <div className="main-wrapper course-details-page">
        {/* Header 2 */}
        <Header />

        {/* Breadcroumb */}
        <BreadcrumbBox title={Data?.title} />
        <Styless>
          <section className="course-details-area our-webcoderskull">
            <Container>
              <Row>
                <Col lg="8" md="8" sm="12">
                  <div className="course-details-top">
                    <div className="heading">
                      <h4>{Data?.title}</h4>
                    </div>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: Data?.content,
                      }}
                    ></div>

                    <div className="gallery p-0">
                      <ul className="row">
                        {Data?.gallery &&
                          Gallery.map((row, idx) => (
                            <li md={4} sm={12} key={idx}>
                              <div className="cnt-block equal-hight">
                                <figure>
                                  <img
                                    src={row?.image_url}
                                    className="img-responsive"
                                    alt=""
                                  />
                                </figure>
                                <h3>
                                  <a href="#">{row?.title}</a>
                                </h3>
                              </div>
                            </li>
                          ))}
                      </ul>
                    </div>

                    {facD.length > 0 && (
                      <div className="row">
                        {facD.map((i, idx) => {
                          return (
                            <div className="col-md-6 mb-3 col-sm-6" key={idx}>
                              {/* <div className="cnt-block equal-hight">
                                <figure>
                                  <img
                                    src={i.imageurl}
                                    className="img-responsive"
                                    alt=""
                                  />
                                </figure>
                                <h3>
                                  <Link
                                    href={`/faculty/profile/${i.title
                                      .split(' ' )
                                      .join('-')}`} 
                                    state={{ id: i.id }}
                                  >
                                    {i.title}
                                  </Link>
                                </h3>

                                <p> {i.description} </p>
                              </div> */}
                               <div className="blog-card" key={idx}> 
                                <Link
                                  state={{ id: i.id }}
                                  href={`/faculty/profile/${i.title
                                    .split(" ")
                                    .join("-")}`}
                                  className="blog-card__link"
                                >
                                  <div className="cardImage">
                                    <Image
                                      width={304}
                                      height={380}
                                      variant="top"
                                      src={i.imageurl}
                                      className="img-responsive card-img-top"
                                      alt={i.imageurl}
                                    />
                                  </div>
                                  <div className="card-body  position-relative">
                                    <h5 className="card-title">  {i.title} </h5>
                                    <p className="designation"> {i.designation} </p>
                                    <p className="card-text">
                                      {i.description}
                                    </p>
                                  </div>
                                </Link>

                              </div>
                            </div>
                          )
                        })}
                      </div>
                    )}

                    {Data?.why_enroll && (
                      <div className="whyEnroll mb-4">
                        <h4>Why Enroll?</h4>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: Data?.why_enroll,
                          }}
                        ></p>
                      </div>
                    )}

                    <div className="faculty_intro mb-4">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: Data?.faculty_intro,
                        }}
                      ></p>
                    </div>

                    <div>
                      <button
                        className="btn btn-primary mb-4"
                        onClick={() => setShowTable(!showTable)}
                      >
                        Show Faculty Members
                      </button>
                      <Table
                        className="tablePro"
                        striped
                        bordered
                        hover
                        style={{ display: `${!showTable ? 'none' : 'table'}` }}
                      >
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Profile</th>
                          </tr>
                        </thead>
                        <tbody>
                          {facList &&
                            facList.map((i, idx) => {
                              return (
                                <tr key={idx}>
                                  <td>{i.name}</td>
                                  <td>{i.designation}</td>
                                  <td>
                                    <Link
                                      href={`/faculty/profile/${i.name
                                        .split(' ')
                                        .join('-')}`}
                                      state={{ id: i.id }}
                                    >
                                      View Profile
                                    </Link>
                                  </td>
                                </tr>
                              )
                            })}
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </Col>
                <Col lg="4" md="4" sm="12">
                  <div className="single-details-sidbar">
                    <SearchResearcher />

                    {Data?.videourl && (
                      <Row>
                        <Col md="12">
                          <div className="course-details-feature">
                            <h5 className="title">
                              {' '}
                              <i className="las la-globe"></i> Watch more
                            </h5>

                            <div className="sideBars">
                              <iframe
                                style={{ width: '100%' }}
                                //   style="width:100%;"
                                src={Data?.videourl}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="ss"
                              ></iframe>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    )}

                    <AdmissionFormSidebar />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </Styless>

        <Footer />
      </div>
    </SuspenseBoundary>
  )
}

export default Faculty
