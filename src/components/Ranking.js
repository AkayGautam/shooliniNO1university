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
    var s = document.createElement("script"); s.type = "text/javascript"; s.async = true; s.src = "https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s);
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
      <section className="event-faq-area  pt-2">
        <Container>
          <Row>
           
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
                              width={129}
                              height={56}
                            />
                          </div>
                        </div>
                        <div className="alignLefts">
                          <div className="event-details">
                            <h6>
                              <a href="https://shooliniuniversity.com/news/the-rankings-shoolini-tops-private-univs-again">
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

                            {/* <p style={{ margin: "0" }}>
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
                            </p> */}

                            {/* <h6 className="mt-3 for-desktop">
                              <a href="/news/shoolini-outshines-claims-top-spot-in-the-asia-rankings">  {eventData.eventdesc8} </a>
                            </h6>
                            <p className=" for-desktop" style={{ margin: "0" }}>
                              {eventData.eventdesc9}
                            </p> */}
                            <p className=" for-desktop" style={{ margin: "0" }}>
                              {eventData.eventdesc1a}
                            </p>

                          </div>
                          <div className="seeMoreBtn">
                            <a href="/">
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
                                  width={153}
                                  height={41}
                                />
                              </div>
                            )}
                          </div>
                          <div className="alignLefts">
                            <div className="event-details">
                              <h6>
                                <Link href="/news/shoolini-ranks-no1-private-university-in-india-again">
                                  {eventData.eventdesc}
                                </Link>
                              </h6>

                              <p>{eventData.eventTitle}</p>
                            </div>
                            <div className="seeMoreBtn">
                              <Link href="/news/shoolini-ranks-no1-private-university-in-india-again">
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
                              width={136}
                              height={41}
                            />
                          </div>
                        </div>
                        <div className="alignLefts">
                          <div className="event-details">
                            <h6>
                              <Link href="/news/shoolini-universitys-sustainable-leap-in-the-impact-rankings">
                                {eventData.eventTitle}
                              </Link>
                            </h6>

                            <p style={{ margin: "0 0 0 0" }}>
                              {eventData.eventdesc}
                            </p>
                            {/* <p style={{ margin: "0" }}>
                              {eventData.eventdesc1}
                            </p> */}
                            <p>{eventData.eventdesc2}</p>
                          </div>
                          <div className="seeMoreBtn">
                            <Link href="/news/shoolini-universitys-sustainable-leap-in-the-impact-rankings">
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
                              <Link  href="/news/shoolini-climbs-nirf-rankings-secures-70th-spot">
                              {eventData.eventTitless}
                              </Link>
                            </h6>
                            <h6>  <Link className="p-font" href="/news/shoolini-climbs-nirf-rankings-secures-70th-spot">  {eventData.eventTitle}</Link>  </h6>
                            <p><strong>    {eventData.eventdesc} </strong> </p> 
                            <p>  {eventData.eventdesc5}</p>
                            <p> <strong>  {eventData.eventdesc6} </strong></p>
                            <p>{eventData.eventdesc7}  </p> 
                            <p>  {eventData.eventdesc2}</p>
                            <p>  {eventData.eventdesc3}</p>
                            <p>  {eventData.eventdesc4}</p>
                          </div>
                          <div className="seeMoreBtn">
                            <Link href="/news/shoolini-climbs-nirf-rankings-secures-70th-spot">
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
            <Col md="12" lg="5">
              <div className="sec-title">
                <h2> 
                Apply to Shoolini
                </h2>
                {/* <h4> India’s <span className=""> No. 1</span>  Private University</h4> */}
              </div>
              <div className="introVDO for-desktop">
                <Link href="/blog/shoolini-student-lands-42-lakh-job-at-algo8/?utm_source=organic&utm_medium=newsshowcase-highestpackage&utm_campaign=newsshowcase-highestpackage">
                 <Image
                  src={`/assets/images/Research-Future3.jpg`}
                  alt="ranking_logo"
                  className="img-fluid"
                  width={700}
                  height={620}
                />
                 </Link>
              </div>

<div className="sidebar for-mobile mt-3">
                      <div class="npf_wgts" data-height="400px" data-w="1222078993f709a639ec1d6ca2d2d084"></div>
                      <script type="text/javascript"> var s=document.createElement("script"); s.type="text/javascript"; s.async=true; s.src="https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s); </script>
                    </div>

            </Col>
          </Row>
        </Container>
      </section>
    </Styles>
  );
};

export default Ranking;
