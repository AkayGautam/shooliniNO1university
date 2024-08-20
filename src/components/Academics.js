import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Slider from "react-slick";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import Datas from "../data/school/school.json";
import { Container, Row, Col, Card as Cards, Card } from "react-bootstrap";
import { Styles } from "./common/styles/FacultyOfAgriculture";
import Link from "next/link";
import Template from "./Template";
import SuspenseBoundary from "../helper/SuspenseBoundary";
import Head from "next/head";
import Image from "next/legacy/image";


const settings = {
  dots: false,
  infinite: false,
  arrows: true,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 1500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ],
};

const imagesSlide = {
  dots: false,
  infinite: false,
  arrows: true,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 1500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ],
};



var allBlogs = {
  dots: false,
  infinite: true,
  arrows: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        mobileFirst: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        mobileFirst: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
      },
    },
  ],
};
const settingss = {
  dots: false,
  infinite: false,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 0,
  arrows: false,
  autoplay: false,
  speed: 500,
  rows: 3,
  vertical: true,
  verticalSwiping: false,
  adaptiveHeight: true,
  variableHeight: false,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        rows: 1,
      },
    },
  ],
};

// const faculties = {
//   dots: false,
//   infinite: true,
//   arrows: true,
//   autoplay: true,
//   rows:2,
//   slidesPerRow: 1,
//   speed: 500,
//   autoplaySpeed: 1500,
//   slidesToShow:3,
//   slidesToScroll: 1,
//   responsive: [

//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         row:2,
//       }
//     },
//   ],
// };

const Academics = ({ id, data, ldJson }) => {


  const [newsdata, setNewsdata] = useState([]);

  var news_data = [];

  useEffect(() => {
    fetch("https://shooliniuniversity.com/media/LatestewsAPI", {
      method: "post",
      headers: new Headers({
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }),
      body: JSON.stringify({ auth: "shoolini@999" }),
    })
      .then((response) => response.json())
      .then((res) => setNewsdata(res));
  }, []);

  news_data = newsdata?.success?.slug;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: false,
    speed: 2000,
  };




  const [showTable, setShowTable] = useState(false);
  const [setting, setSetting] = useState({});
  const [jsonLd, setJsonLd] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.setAttribute("id", `pageId-${id}`);
    // setSetting(settings);
  }, []);

  useEffect(() => {
    setJsonLd(ldJson);
  }, [ldJson]);


  const bgImg = data[0].slides
    ? JSON.parse(data[0].slides)[0]
    : `/assets/images/${Datas[0].backgroundImage}`;

  const gallery = data[0].gallery ? JSON.parse(data[0].gallery) : [];

  const Numbers = data[0].numbers ? JSON.parse(data[0]?.numbers) : [];

  const [showFullContent, setShowFullContent] = useState(false);
  const maxWordsToShow = 75; // You can set your desired word limit here

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const content = data[0]?.content; // Assuming data is available in the scope

  // Function to truncate content to the specified word limit
  const truncateContent = (text, limit) => {
    const words = text.split(' ');
    const truncatedWords = words.slice(0, limit);
    return truncatedWords.join(' ');
  };

  const displayedContent = showFullContent ? content : truncateContent(content, maxWordsToShow);

  const testimonialSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 2500,
  };

  return (
    <SuspenseBoundary>
      <Head>
        <title>{data[0]?.seo_title}</title>
        <meta name="description" content={data[0]?.seo_description} />
        <meta name="keywords" content={data[0]?.seo_keywords} />
        {jsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        )}
      </Head>
      <Styles>
        <Header />

        <Template title={data[0]?.title} img={bgImg?.image_url} />

        <section className="templateOne templateHeading py-5 mt-md-3">
          <Container>
            <Row>
              <Col md="6">
                <div className="sec-para">

                  {/* <p
                    dangerouslySetInnerHTML={{
                      __html: data[0]?.content,
                    }}
                  > */}

                  <p dangerouslySetInnerHTML={{ __html: displayedContent }}></p>
                  {content.split(' ').length > maxWordsToShow && (
                    <button className="readmoreText" onClick={toggleContent}>
                      {showFullContent ? 'Close' : 'Read More'}
                    </button>
                  )}

                </div>
              </Col>


              <Col md="6">
                {data.testimonialdetails?.length > 0 && (
                  <div className="">
                    <div className="col-md-12">
                      <div
                        id="hiring"
                        className="student-voices"
                      >
                        <div className="">
                          <div className="row">
                            {data.testimonialdetails && (
                              <Slider {...testimonialSlider}>
                                {data.testimonialdetails?.map((item, i) => (
                                  <div className="col-md-12 bg-custom">
                                    <div className="row">
                                      <div className="col-md-6 pr-md-0">
                                        <div className="voices-image">
                                          <img
                                            className="img-responsive"
                                            src={item?.imageurl}
                                          />
                                        </div>
                                      </div>

                                      <div className="col-md-6 pl-md-0">
                                        <div className="voices-text card-box card-box-dark pt-5">
                                          <div className="all-discription">
                                            <h4 className="text-white"> {item.name} </h4>
                                            <p className="text-white text-18">
                                              {" "}
                                              {item.content.replace(/(<([^>]+)>)/ig, '')}
                                            </p>
                                          </div>
                                        </div>
                                      </div>

                                    </div>
                                  </div>
                                ))}

                              </Slider>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                )}
              </Col>






            </Row>
          </Container>
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
                    <div className="sec-title text-left">
                      <h2>HighLights </h2>
                    </div>
                    <div className="newData">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: data[0]?.heighlights,
                        }}
                      ></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="templateHeading bg-white py-5">
          <Container>
            {gallery.length > 0 && (
              <div className="gallery">
                <Row>
                  {gallery.length > 0 &&
                    (
                      <Slider {...imagesSlide}>
                        {gallery.map((row, idx) => (
                          <Col md={4} sm={6} key={idx}>
                            <div className="cardDesign">
                              <figure className="snip1527">
                                <div className="image">
                                  <Image
                                    width={415}
                                    height={280}
                                    className="img-fluid"
                                    src={row?.image_url}
                                    alt={row?.title}
                                  />
                                </div>
                                <figcaption>
                                  <h3> {row?.title} </h3>
                                </figcaption>
                              </figure>
                            </div>
                          </Col>
                        ))}
                      </Slider>
                    )}
                </Row>
              </div>
            )}
          </Container>
        </section>

        {/* <section className="templateHeading templateOne py-4">
          <Container>
            <Row>
              <Col md="12">
                <div className="sec-Enroll mt-0">
                  {data[0]?.why_enroll && (
                    <div className="whyEnroll mb-4">
                      <div className=" text-left sec-title color-red">
                        <h2 className="pb-4 pt-md-3">Why Enrol? </h2>
                      </div>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: data[0]?.why_enroll,
                        }}
                      ></p>
                    </div>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </section> */}


        <section className="templateOne templateHeading bg-white pt-4 pb-5">
          <Container>
            <Row>
              <Col md="12">
                <div className="mb-3">
                  {data.facultydetail?.length > 0 && (
                    <div className="row">
                      <Col md="12">
                        <div className=" text-left sec-title color-red">
                          <h2 className="text-dark pb-2"> Faculty Members</h2>
                        </div>

                        <div className="newFac">
                          {data[0]?.faculty_intro && (
                            <p
                              dangerouslySetInnerHTML={{
                                __html: data[0]?.faculty_intro,
                              }}
                            ></p>
                          )}
                        </div>
                      </Col>




                      <Col md="12">
                        <Row>
                        
                            
                          {data.facultydetail.map((i, idx) => {
                            return (
                              <Col md="4"> 
                                <div className="blog-card"  key={idx}>
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
                                        alt={i.title}
                                      />
                                    </div>
                                    <div className="card-body  position-relative">
                                      <h5 className="card-title">  {i.title} </h5>
                                      {/* <p className="designation"> { i.designation } </p> */}
                                      <p className="card-text">
                                        {i.description}
                                      </p>
                                    </div>
                                  </Link>
                                   
                              </div>
                              </Col>
                            );
                          })}
                         
                        </Row>
                      </Col>
                    </div>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="blogsCard mb-0">

          <Container>
            {data.facultydetail?.length > 0 && (
              <Row>
                {data.facultydetail.map((i, idx) => {



                  <Col md="3" key={idx}>
                    <div className="blog-card">
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
                            alt={i.title}
                          />
                        </div>
                        <div className="card-body  position-relative ffff">
                          <h5 className="card-title">  {i.title} </h5> 
                          <p className="designation"> { i.designation } </p>
                          <p className="card-text">
                            {i.description}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </Col>

                })}

              </Row>
            )}
          </Container>

        </section>

        <section className="templateOne bgSearch templateHeading py-4">
          <Container>
            <Row>
              <Col md="12">
                {data[0]?.researchpart1 && (
                  <div className="research mb-4">
                    <div className=" text-left sec-title">
                      <h2 className="text-white py-3"> Research</h2>
                    </div>

                    <p
                      dangerouslySetInnerHTML={{
                        __html: data[0]?.researchpart1,
                      }}
                    ></p>
                  </div>
                )}
              </Col>
              <Col md="12">
                {data[0]?.researchpart2 && (
                  <div className="research mb-4">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: data[0]?.researchpart2,
                      }}
                    ></p>
                  </div>
                )}
              </Col>
            </Row>
          </Container>
        </section>

        <section className="templateOne templateHeading py-5 bg-white">
          <Container>
            <Row>
              <Col md="12">
                {data[0]?.placement && (
                  <div className="placements mb-4">
                    <div className=" text-left sec-title color-red">
                      <h2 className=" py-3"> Placements</h2>
                    </div>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: data[0]?.placement,
                      }}
                    ></p>
                  </div>
                )}
              </Col>
              {data.companydetail.length > 0 && (
                <div className="placements mb-4">
                  <div className="comapnies-cards">
                    <Row>
                      {data.companydetail &&
                        data.companydetail.map((com, idx) => {
                          return (
                            <Col
                              lg={2}
                              md={2}
                              sm={2}
                              className="mb-2 col-4"
                              key={idx}
                            >
                              <Card>
                                <Image
                                  width={150}
                                  height={75}
                                  variant="top"
                                  title={com?.title}
                                  alt={com?.title}
                                  src={com?.imageurl}
                                />
                              </Card>
                            </Col>
                          );
                        })}
                    </Row>
                  </div>
                </div>
              )}
            </Row>
          </Container>
        </section>

        {/* <section className="templateHeading">
          <Container>
            {Numbers.length > 0 && (
              <div className="gallery mb-4">
                <div className=" text-left sec-title color-red">
                  <h2 className=" py-3"> Gallery</h2>
                </div>
                <Row>
                  {Numbers.length > 0 &&
                    Numbers.map((row, idx) => (
                      <Col md={3} sm={6} key={idx}>
                        <figure className="snip1527">
                          <div className="image">
                            <Image
                              width={306}
                              height={204}
                              className="img-fluid"
                              src={row?.image_url}
                              alt={row?.content}
                            />
                          </div>
                          <figcaption>
                            <h3> {row?.content} </h3>
                          </figcaption>
                        </figure>
                      </Col>
                    ))}
                </Row>
              </div>
            )}
          </Container>
        </section> */}



        {/* <section className="impact-box-area py-5">
          <Container>
     
     
            <Row>
              <Col md="12" lg="8">
                <div className="impactSU">
                  {gallery.length > 0 && (
                    <div className="imSUtext">
                      {gallery.length > 0 &&
                        (
                          <Slider {...settings}>
                            {gallery.map((row, idx) => (
                              <div className="team-item" key={idx}>
                                <div className="dflex-card fixHeight">

                                  <img src={row?.image_url} alt="" className="" />

                                </div>
                                <div className="IMDetail">
                                  <h5>{row.title}</h5>

                                </div>
                              </div>
                            ))}
                          </Slider>
                        )}
                    </div>
                  )}
                </div>
              </Col>
              <Col md="12" lg="4">
                <Row>
                  <Col lg="12" md="12">
                    <Slider {...settingss}>
                      {gallery?.map((data) => (
                        <div className="post-list-item col-md-12 px-2">
                          <div className="event-item ">
                            <div className="event-item-inner">
                              <div className="event-item-thumbnail">
                                <a href={data?.weburl} title="Mobile Games Battle">
                                  <div className="vfvfv placeholder-thumbnail-bg">
                                    <img className="img-thumbnail"
                                      src={data?.image_url}
                                      width={250}
                                      loading="lazy"
                                    />
                                  </div>
                                </a>
                              </div>
                              <div className="event-item-content">
                                <h4 className="event-title font-2">
                                  National Law Fest
                                </h4>

                                <div className="event-excerpt">
                                  <p>Participate in Moot Courts, Crime Scene Investigations, and thought-provoking competitions.  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section> */}



        {/* {data.testimonialdetails?.length > 0 && (
          <section className="templateOne testimonial-aca templateHeading bg-white py-5">
            <Container>
              <div className=" text-left sec-title color-red">
                <h2 className=" py-3"> Student Voices</h2>
              </div>
              <Row>
                <Col md="12">
                  {data.testimonialdetails && (
                    <Slider {...settings}>
                      {data.testimonialdetails?.map((item, i) => (
                        <div className="userDetailCard" key={i}>
                          <div className="row">
                            <figure className="cj-media-left col-4">
                              <p className="user-image">
                                <img
                                  src={item?.imageurl}
                                  alt=""
                                  className="img-fluid"
                                />
                              </p>
                            </figure>
                            <div className="userContent col-8">
                              <h5>{item.name}</h5>
                              <p>{item.content.replace(/(<([^>]+)>)/ig, '')}</p>

                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  )}
                </Col>
              </Row>
            </Container>
          </section>
        )} */}

        <Footer />
      </Styles>
    </SuspenseBoundary>
  );
};

export default Academics;
