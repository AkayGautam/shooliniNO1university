/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import Datas from "../data/faq-event/faq-event.json";
import { Container, Row, Col } from "react-bootstrap";
import { Styles } from "./common/styles/ranking";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/legacy/image";

const Ranking = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    const accordionButton = document.querySelectorAll(".accordion-button");
    accordionButton.forEach((button) => {
      button.addEventListener("click", () => {
        button.classList.toggle("active");
        const content = button.nextElementSibling;

        if (button.classList.contains("active")) {
          content.className = "accordion-content show";
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          content.className = "accordion-content";
          content.style.maxHeight = "0";
        }
      });
    });
  });

  return (
    <Styles>
      <section className="event-faq-area mt-md-3 pt-5">
        <Container>
          <Row>
            <Col md="12" lg="5">
              <div className="sec-title">
                <h2>
                  Think <br /> Rankings{" "}
                </h2>
                <h4> Climbing High </h4>
              </div>
              <div className="introVDO">
                <Image
                  src={`/assets/images/eng-girl.jpg`}
                  alt="ranking_logo"
                  className="img-fluid"
                  width={680}
                  height={580}
                />
              </div>
            </Col>
            <Col lg="7" md="12">
              <div className="event-area vfvffv">
                <Row>
                  <Col md="12">
                    {Datas.latestRanking.map((eventData, i) => (
                      <div className="event-box pb-2 ddd  d-flex mb-3" key={i}>
                        <div className="alignLefts_o">
                          <div className="rankingYear">
                            <p>{eventData.eventDate}</p>
                          </div>
                          <div className="rankingLogo">
                            <Image
                              src={`https://shooliniuniversity.com/assets/images/the-ranking.png`}
                              alt="ranking_logo"
                              className="img-fluid"
                              width={170}
                              height={50}
                            />
                          </div>
                        </div>
                        <div className="alignLefts">
                          <div className="event-details">
                            <h6>
                              <a href="https://shooliniuniversity.com/news/shoolini-is-no1-private-university-in-india">
                                {eventData.eventTitle}
                              </a>
                            </h6>

                            <p style={{ margin: "0 0 0 0" }}>
                              {eventData.eventdesc}
                            </p>
                            <p style={{ margin: "0" }}>
                              {eventData.eventdesc1}
                            </p>
                            <p style={{ margin: "0" }}>
                              {eventData.eventdesc2}
                            </p>

                            <p style={{ margin: "0" }}>
                              <strong> {eventData.eventdesc4} </strong>
                            </p>
                            <p style={{ margin: "0" }}>
                              {eventData.eventdesc5}
                            </p>
                            <p style={{ margin: "0" }}>
                              <strong> {eventData.eventdesc6} </strong>{" "}
                            </p>
                            <p style={{ margin: "0" }}>
                              {eventData.eventdesc7}
                            </p>

                            <h6 className="mt-3">
                              <a href="https://shooliniuniversity.com/news/shoolini-is-top-100-in-asia">  {eventData.eventdesc8} </a>
                            </h6>
                            <p style={{ margin: "0" }}>
                              {eventData.eventdesc9}
                            </p>
                            <p style={{ margin: "0" }}>
                              {eventData.eventdesc1a}
                            </p>

                          </div>
                          <div className="seeMoreBtn">
                            <a href="https://shooliniuniversity.com/news/shoolini-is-no1-private-university-in-india">
                              See More
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Col>
                </Row>

                <div className="event-area dddd mt-0">
                  <Row>
                    <Col md="12">
                      {Datas.eventDataListNew.map((eventData, i) => (
                        <div className="event-box d-flex" key={i}>
                          <div className="alignLefts_o">
                            <div className="rankingYear">
                              <p>{eventData.eventDate}</p>
                            </div>
                            {eventData.ranking_logo && (
                              <div className="rankingLogo">
                                <Image
                                  src={`https://shooliniuniversity.com/assets/images/qs-rankingNew.png`}
                                  alt="ranking_logo"
                                  className="img-fluid"
                                  width={170}
                                  height={75}
                                />
                              </div>
                            )}
                          </div>
                          <div className="alignLefts">
                            <div className="event-details">
                              <h6>
                                <Link href="/news/shoolini-soars-to-new-heights-with-no1-qs-rankings">
                                  {eventData.eventdesc}
                                </Link>
                              </h6>

                              <p>{eventData.eventTitle}</p>
                            </div>
                            <div className="seeMoreBtn">
                              <Link href="/news/shoolini-soars-to-new-heights-with-no1-qs-rankings">
                                See More
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Col>
                  </Row>
                </div>

                {/* <div className="event-area dedede pt-md-3 mt-0">
                  <Row>
                    <Col md="12">
                      {Datas.eventDataList.map((eventData, i) => (
                        <div className="event-box d-flex" key={i}>
                          <div className="alignLefts_o">
                            <div className="rankingYear">
                              <p>{eventData.eventDate}</p>
                            </div>
                            <div className="rankingLogo">
                              <img
                                src={`/assets/images/${eventData.ranking_logo}`}
                                alt="ranking_logo"
                                className="img-fluid"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="alignLefts">
                            <div className="event-details">
                              <h6>
                                <Link href="/recognitions">
                                  {eventData.eventTitle}
                                </Link>
                              </h6>

                              <p>{eventData.eventdesc}</p>
                            </div>
                            <div className="seeMoreBtn">
                              <Link href="/recognitions"> See More </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Col>
                  </Row>
                </div> */}

                <Row>
                  <Col  md="12">
                    {Datas.eventDataList2.map((eventData, i) => (
                      <div className="event-box py-2 d-flex" key={i}>
                        <div className="alignLefts_o">
                          <div className="rankingYear">
                            <p>{eventData.eventDate}</p>
                          </div>
                          <div className="rankingLogo">
                            <Image
                              src={`https://shooliniuniversity.com/assets/images/the.png`}
                              alt="ranking_logo"
                              className="img-fluid"
                              width={170}
                              height={75}
                            />
                          </div>
                        </div>
                        <div className="alignLefts">
                          <div className="event-details">
                            <h6>
                              <Link href="/news/shoolini-university-among-global-top-200-again">
                                {eventData.eventTitle}
                              </Link>
                            </h6>

                            <p style={{ margin: "0 0 0 0" }}>
                              {eventData.eventdesc}
                            </p>
                            <p style={{ margin: "0" }}>
                              {eventData.eventdesc1}
                            </p>
                            <p>{eventData.eventdesc2}</p>
                          </div>
                          <div className="seeMoreBtn">
                            <Link href="/news/shoolini-university-among-global-top-200-again">
                              See More
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Col>
                </Row>

                <Row className="event-area fff mt-3">
                  <Col md="12">
                    {Datas.faqDataList.map((eventData, i) => (
                      <div className="event-box align-items-top d-flex" key={i}>
                        <div className="alignLefts_o">
                          <div className="rankingYear">
                            <p>{eventData.eventDate}</p>
                          </div>
                          {eventData.ranking_logo && (
                            <div className="rankingLogo">
                              <img
                                src={`/assets/images/${eventData.ranking_logo}`}
                                alt="ranking_logo"
                                className="img-fluid"
                                width={170}
                                height={75}
                              />
                            </div>
                          )}
                        </div>
                        <div className="alignLefts">
                          <div className="event-details">
                            <h6>
                              <Link  href="/news/shoolini-scores-hat-trick-retains-position-among-top-100-universities-in-india">
                              {eventData.eventTitless}
                              </Link>
                            </h6>
                            <h6>  <Link className="p-font" href="/news/shoolini-scores-hat-trick-retains-position-among-top-100-universities-in-india">  {eventData.eventTitle}</Link>  </h6>
                            <p><strong>    {eventData.eventdesc} </strong> </p> 
                            <p>  {eventData.eventdesc5}</p>
                            <p> <strong>  {eventData.eventdesc6} </strong></p>
                           
                            <p>  {eventData.eventdesc2}</p>
                            <p>  {eventData.eventdesc3}</p>
                            <p>  {eventData.eventdesc4}</p>
                          </div>
                          <div className="seeMoreBtn">
                            <Link href="/news/shoolini-scores-hat-trick-retains-position-among-top-100-universities-in-india">
                              See More
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Col>
                </Row>

              </div>

            </Col>
          </Row>
        </Container>
      </section>
    </Styles>
  );
};

export default Ranking;
