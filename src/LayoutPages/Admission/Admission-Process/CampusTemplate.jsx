import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import BreadcrumbBox from "../../../components/common/Breadcrumb";
import { Styles } from "../../../components/common/styles/header";
import Footer from "../../../components/Footer";
import { Styless } from "./style/communityProgrames";
import { Container, Row, Col, Card } from "react-bootstrap";
import CommunityLinks from "./CommunityLinks/CommunityLinks";
import SearchResearcher from "../../../components/SearchResearcher";
import { resetMetaTags, setMetaTags } from "../../../helper/setMetaTags";
import Link from "next/link";
import SuspenseBoundary from "../../../helper/SuspenseBoundary";
import Head from "next/head";
import Image from "next/legacy/image";

const CampusTemplate = ({ id, data, ldJson }) => {
  const fixImg = () => {
    let arr = [];
    document.querySelectorAll("img").forEach((i) => {
      if (i.src.indexOf("storage") !== -1 || i.src.indexOf("media") !== -1) {
        arr.push(i);
      }
    });
    for (let i of arr) {
      i.src = i.src.replace(
        window.location.origin,
        "https://shooliniuniversity.com/"
      );
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      fixImg();
    }, 1000);
    document.body.setAttribute("id", `pageid-${id}`);
  }, [id]);

  return (
    <SuspenseBoundary>
      <Head>
        <title>{data[0][0].seo_title}</title>
        <meta name="description" content={data[0][0].seo_description} />
        <meta name="keywords" content={data[0][0].seo_keywords} />
        {ldJson && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
          />
        )}
      </Head>
      <Styles>
        {/* Main Wrapper */}
        <div className="main-wrapper campus-page">
          {/* Header 2 */}
          <Header />

          {/* Breadcroumb */}
          <BreadcrumbBox title={data[0][0]?.title} />
          <Styless>
            <section className="admidsionProcess my-5 pt-3 ">
              <div className="about__area about__area_one p-relative pt---100 pb---120 mb-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="section-title titleAdjust">
                        {/* <h4>About Us</h4> */}
                        <h3>{data[0][0]?.title}</h3>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: data[0][0]?.content,
                          }}
                        ></p>

                        {data[0][0].content_boxes && (
                          <Row className="mb-5">
                            {JSON.parse(data[0][0].content_boxes).length ===
                            1 ? (
                              <>
                                {JSON.parse(data[0][0].content_boxes).map(
                                  (i, index) => (
                                    <Col key={index} md={12}>
                                      <figure class="snip1527  gggg">
                                        <div class="image">
                                          <Image
                                            width={416}
                                            height={248}
                                            className="img-fluid"
                                            src={i.image_url}
                                            alt="pr-sample23"
                                          />
                                        </div>
                                        {i?.title && (
                                          <figcaption>
                                            <h3> {i?.title} </h3>
                                            <p>{i?.content}</p>
                                          </figcaption>
                                        )}
                                      </figure>
                                    </Col>
                                  )
                                )}
                              </>
                            ) : (
                              <>
                                {JSON.parse(data[0][0].content_boxes).map(
                                  (item, index) => {
                                    if (!item.image_url) return null;
                                    return (
                                      <React.Fragment key={index}>
                                        {item.url ? (
                                          <Col md={4} sm={12}>
                                            <Link
                                              href={
                                                "/" +
                                                item.url.replace(
                                                  "https://shooliniuniversity.com",
                                                  ""
                                                )
                                              }
                                            >
                                              <figure class="snip1527 bbb">
                                                <div class="image">
                                                  <Image
                                                    width={416}
                                                    height={248}
                                                    className="img-fluid"
                                                    src={item.image_url}
                                                    alt="pr-sample23"
                                                  />
                                                </div>
                                                <figcaption>
                                                  <h3> {item?.title} </h3>
                                                  <p>{item?.content}</p>
                                                </figcaption>
                                              </figure>
                                            </Link>
                                          </Col>
                                        ) : (
                                          <Col md={4} sm={12}>
                                            <figure class="snip1527">
                                              <div class="image">
                                                <Image
                                                  width={416}
                                                  height={248}
                                                  className="img-fluid"
                                                  src={item.image_url}
                                                  alt="pr-sample23"
                                                />
                                              </div>
                                              <figcaption>
                                                <h3> {item?.title} </h3>
                                                <p>{item?.content}</p>
                                              </figcaption>
                                            </figure>
                                          </Col>
                                        )}
                                      </React.Fragment>
                                    );
                                  }
                                )}
                              </>
                            )}
                          </Row>
                        )}

                        <p
                          dangerouslySetInnerHTML={{
                            __html: data[0][0]?.content_below_boxes,
                          }}
                        ></p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="sideBarNew">
                        <SearchResearcher />
                        <CommunityLinks />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Container>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data[0][0]?.youtube,
                  }}
                ></div>
              </Container>
            </section>
          </Styless>

          <Footer />
        </div>
      </Styles>
    </SuspenseBoundary>
  );
};

export default CampusTemplate;
