import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Styles } from "./style/programmes";
import Slider from "react-slick";
import Link from "next/link";
import { useRouter } from "next/router";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
    },
    {
      breakpoint: 10000,
      settings: "unslick",
    },
  ],
}; 

const Programmes = ({ programs }) => {
  const router = useRouter();

  console.log("hii", programs);

  return (
    <>
      <Styles>
        <section className="programme-area">
          <Container>
            <Row>
              <Col md="12">
                <div className="sec-title mb-4 pb-md-4 pt-md-4">
                  <h2>Think Learning </h2>
                  <h4> at a world-class university </h4>
                </div>
              </Col>
              <Col lg="10" md="12">
                <Row>
                  <Slider {...settings}>
                    {programs?.map((data, index) => {
                      return (
                        <Fragment key={index}>
                          <div id={data?.slug} className="col-md-4">
                            <div className="programme_card">
                              <div className="featured_img">
                                <img
                                  className="img-fluid w-100"
                                  src={`${data?.image_url}`}
                                />{" "}
                              </div>
                              <div className="programme_detail">
                               
                                <div className="coursetitles">
                                  {data.title ==
                                  "Computer Science Engineering" ? (
                                    <Link
                                      state={{ school: true }}
                                      href="/engineering-courses"
                                      className="nav-link"
                                    >
                                     {data?.title}
                                    </Link>
                                  ) : (
                                    <>
                                      {data.title == "Core Engineering" ? (
                                        <Link
                                          state={{ school: true }}
                                          href="/engineering-courses"
                                          className="coreEngg nav-link"
                                        >
                                        {data?.title}
                                        </Link>
                                      ) : (
                                        <>
                                          {data.title == "Biotechnology" ? (
                                            <Link
                                              state={{ school: true }}
                                              href="/biotechnology-courses"
                                              className="nav-link"
                                            >
                                             {data?.title}
                                            </Link>
                                          ) : (
                                            <Link
                                              state={{ school: true }}
                                              href={`courses/${data?.link_url}`}
                                              className="nav-link"
                                              data-toggle="dropdown"
                                            >
                                            {data?.title}
                                            </Link>
                                          )}
                                        </>
                                      )}
                                    </>
                                  )}
                                </div>



                                <ul className="programme_list">
                                  {data.courses &&
                                    data.courses.map((i, idx) => {
                                      return (
                                        
                                        <li key={idx}>
                                          {data.title ==
                                          "Computer Science Engineering" ? (
                                            <Link
                                              state={{ school: true }}
                                              href="/engineering-courses"
                                              className="nav-link"
                                            >
                                              {i.title}
                                            </Link>
                                          ) : (
                                            <>
                                              {data.title ==
                                              "Core Engineering" ? (
                                                <Link
                                                  state={{ school: true }}
                                                  href="/engineering-courses"
                                                  className="coreEngg nav-link"
                                                >
                                                  {i.title}
                                                </Link>
                                              ) : (
                                                <>
                                                  {data.title ==
                                                  "Biotechnology" ? (
                                                    <Link
                                                      state={{ school: true }}
                                                      href="/biotechnology-courses"
                                                      className="coreEngg nav-link"
                                                    >
                                                      {i.title}
                                                    </Link>
                                                  ) : (
                                                    <Link
                                                      state={{ school: true }}
                                                      href={`courses/${data?.link_url}`}
                                                      className="nav-link"
                                                      data-toggle="dropdown"
                                                    >
                                                      {i.title}
                                                    </Link>
                                                  )}
                                                </>
                                              )}
                                            </>
                                          )}
                                        </li>
                                      );
                                    })}
                                </ul>
                                <div className="featured_img">
                                  {data.title ==
                                  "Computer Science Engineering" ? (
                                    <Link
                                      state={{ school: true }}
                                      href="/engineering-courses"
                                      className="nav-link"
                                    >
                                      See All Programs
                                    </Link>
                                  ) : (
                                    <>
                                      {data.title == "Core Engineering" ? (
                                        <Link
                                          state={{ school: true }}
                                          href="/engineering-courses"
                                          className="coreEngg nav-link"
                                        >
                                          See All Programs
                                        </Link>
                                      ) : (
                                        <>
                                          {data.title == "Biotechnology" ? (
                                            <Link
                                              state={{ school: true }}
                                              href="/biotechnology-courses"
                                              className="nav-link"
                                            >
                                              See All Programs
                                            </Link>
                                          ) : (
                                            <Link
                                              state={{ school: true }}
                                              href={`courses/${data?.link_url}`}
                                              className="nav-link"
                                              data-toggle="dropdown"
                                            >
                                              See All Programs
                                            </Link>
                                          )}
                                        </>
                                      )}
                                    </>
                                  )}
                                </div>

                                {/* <div className="featured_img">
                                  <Link href={`/courses/${data?.link_url}`}>
                                    See All Programs
                                  </Link>


                                </div> */}
                              </div>
                            </div>
                          </div>
                        </Fragment>
                      );
                    })}
                  </Slider>
                </Row>
              </Col>

           
            </Row>
          </Container>
        </section>
      </Styles>
    </>
  );
};

export default Programmes;
