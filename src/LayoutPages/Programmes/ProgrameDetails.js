import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Tab,
  Nav,
  Card as Cards,
  Button,
} from "react-bootstrap";
import Header from "../../components/Header";
import { BreadcrumbBox } from "../../components/common/Breadcrumb";
import Footer from "../../components/Footer";
import { Styless } from "./styles/course.js";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AdmissionFormSidebar from "../../components/AdmissionFormSidebar";
import { resetMetaTags, setMetaTags } from "../../helper/setMetaTags";
import Head from "next/head";
import Link from "next/link";
import SuspenseBoundary from "../../helper/SuspenseBoundary";
import Slider from "react-slick";
import Template from "@/components/Template";
import Datas from "../../data/school/school.json";
import { useRouter } from "next/router";
import Templatecourse from "@/components/TemplateCourse";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function ProgrameDetails({ data, id, ldJson }) {
  const router = useRouter();
  const bgImg = data[0].slides
    ? JSON.parse(data[0].slides)[0]
    : `/assets/images/${Datas[0].backgroundImage}`;

  const [isDoctoral, setIsDoctoral] = useState(false);

  useEffect(() => {
    const component = Object.keys(router.components).includes('/doctoral-programs')
    setIsDoctoral(component)
  }, [router]);


  const [isActive, setActive] = useState(false);
  const [jsonLd, setJsonLd] = useState({});
  const toggleClass = () => {
    setActive(!isActive);
  };
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    const courseButton = document.querySelectorAll(".course-button");
    courseButton.forEach((button) => {
      button.addEventListener("click", () => {
        button.classList.toggle("active");
        const content = button.nextElementSibling;

        if (button.classList.contains("active")) {
          content.className = "course-content show";
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          content.className = "course-content";
          content.style.maxHeight = "0";
        }
      });
    });
  });

  var settings = {
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    document.body.setAttribute("id", `pageid-${id}`);
    window.scrollTo(0, 0);
    return () => {
      document.body.removeAttribute("id");
    };
  }, []);

  const gallery = data[0].gallery ? JSON.parse(data[0].gallery) : [];
  const posTFaq = data[1].faqdata ? data[1].faqdata : [];
  const postReview = data[1].testimonial ? data[1].testimonial : [];

  return (
    <SuspenseBoundary>
      <Head>
        <title>{data[0]?.seo_title}</title>
        <meta name="description" content={data[0]?.seo_description} />
        <meta name="keywords" content={data[0]?.seo_keywords} />
        {ldJson && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
          />
        )}
      </Head>

      <div className="main-wrapper course-details-page">
        {/* Header 2 */}
        <Header />

        <Templatecourse title={data[0]?.title} img={bgImg?.image_url} />

        {/* Breadcroumb */}
        {/* <BreadcrumbBox title={data[0].title} /> */}

        <Styless>
          {/* Course Details */}
          <section className="course-details-area">
            <Container>
              <Row>
                <Col lg="8" md="8" sm="12" className="order-xs-2">
                  <div className="course-details-top">
                    <div
                      className={
                        isActive ? "course-tab-list" : "course-tab-list viewDiv"
                      }
                    >
                      <Tab.Container defaultActiveKey="overview">
                        <Nav className="flex-column">
                          <Nav.Item>
                            <Nav.Link eventKey="overview">Overview</Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                            <Nav.Link eventKey="instructor">Faculty</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="review">
                              Student Voices
                            </Nav.Link>
                          </Nav.Item>

                          <Nav.Item> 
                            <Nav.Link eventKey="curriculum">
                              {
                                isDoctoral ? 'ACADEMIC CALENDAR' : 'CURRICULUM'
                              }
                            </Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                            <Nav.Link eventKey="faq">FAQs</Nav.Link>
                          </Nav.Item>
                        </Nav>
                        <Tab.Content>
                          <Tab.Pane
                            eventKey="overview"
                            className="overview-tab"
                          >
                            <div className="course-feature">
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: data[0]?.content,
                                }}
                              ></p>

                              <h2> {data[0].title} Career Opportunities   </h2>
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: data[0]?.career_opportunities,
                                }}
                              />
                            </div>
                          </Tab.Pane>
                          <Tab.Pane
                            eventKey="curriculum"
                            className="curriculum-tab"
                          >
                            <div className="course-curriculum">
                              {/* <h5>Course Curriculum</h5> */}
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: data[0]?.curriculum_awaited,
                                }}
                              />
                            </div>
                          </Tab.Pane>
                          <Tab.Pane
                            eventKey="instructor"
                            className="instructor-tab"
                          >
                            {/* <h3>Course Instructors  </h3> */}

                            <div className="instructor-item">
                              <Row>
                                {data[1] &&
                                  data[1].facultydetails?.map((res, index) => (
                                    <Col className="mb-3" md="4" key={index}>
                                      <Link
                                        href={`/faculty/profile/${res.name
                                          .split(" ")
                                          .join("-")}`}
                                      >
                                        <Card sx={{ maxWidth: 345 }}>
                                          <CardHeader
                                            avatar={
                                              <Avatar
                                                sx={{ bgcolor: red[500] }}
                                                aria-label="recipe"
                                              >
                                                <img
                                                  src={
                                                    res.imageurl
                                                      ? res.imageurl
                                                      : process.env.PUBLIC_URL +
                                                      `/assets/images/instructor-2.jpg`
                                                  }
                                                  alt={res.name}
                                                  className="img-fluid"
                                                />
                                              </Avatar>
                                            }
                                            action={
                                              <IconButton aria-label="settings">
                                                <MoreVertIcon />
                                              </IconButton>
                                            }
                                            title={res.name}
                                            subheader={res.designation}
                                          />
                                        </Card>
                                      </Link>
                                    </Col>
                                  ))}
                              </Row>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="review" className="review-tab">
                            <Row>
                              <Col md="12">
                                <div className="review-comments">
                                  {postReview &&
                                    postReview?.map((row, idx) => (
                                      <div
                                        className="comment-box d-flex"
                                        key={idx}
                                      >
                                        <div className="comment-image">
                                          <img
                                            src={row?.imageurl}
                                            alt={row?.name}
                                          />
                                        </div>
                                        <div className="comment-content">
                                          <div className="content-title d-flex justify-content-between">
                                            <div className="comment-writer">
                                              <h3>{row?.name}</h3>
                                            </div>
                                          </div>
                                          <div className="comment-desc">
                                            <p
                                              dangerouslySetInnerHTML={{
                                                __html: row?.content,
                                              }}
                                            ></p>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                </div>
                              </Col>
                            </Row>
                          </Tab.Pane>

                          <Tab.Pane eventKey="faq" className="faq-tab">
                            <div className="course-desc">
                              <h2>Frequently Asked Questions</h2>
                              <div>
                                {posTFaq &&
                                  posTFaq.map((row, idx) => (
                                    <Accordion
                                      key={idx}
                                      expanded={expanded === `panel${idx}`}
                                      onChange={handleChange(`panel${idx}`)}
                                    >
                                      <AccordionSummary
                                        aria-controls="panel1d-content"
                                        id="panel1d-header"
                                      >
                                        <h3 className="faqTitle">{row?.name}</h3>
                                      </AccordionSummary>
                                      <AccordionDetails>
                                        <Typography>
                                          <span
                                            dangerouslySetInnerHTML={{
                                              __html: row?.content,
                                            }}
                                          ></span>
                                        </Typography>
                                      </AccordionDetails>
                                    </Accordion>
                                  ))}
                              </div>
                            </div>
                          </Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>
                    </div>

                    <a className="ViewMorebtn" onClick={toggleClass}>
                      View More
                    </a>
                  </div>
                </Col>
                <Col lg="4" md="4" sm="12" className="order-xs-1">
                  <div className="single-details-sidbar">
                    <Row>
                      <Col md="12">
                        <div className="course-details-feature">
                          <h2 className="title">Course Details</h2>
                          <ul className="list-unstyled feature-list">
                            <li>
                              <h3> <i className="las la-calendar"></i> Eligibility:{" "}
                                <span>{data[0]?.eligibility}</span> </h3>
                            </li>

                            <li>
                              <h3>  <i className="las la-sort-amount-up"></i>{" "}
                                Admission Criteria:{" "}
                                <span>{data[0]?.admission_criteria}</span> </h3>
                            </li>
                            <li>
                              <h3>   <i className="las la-clock"></i> Duration:{" "}
                                <span>{data[0]?.duration}</span> </h3>
                            </li>


                            <li>
                              <h3>  <i className="las la-certificate"></i>
                                Semester Fee </h3>

                              <div className="fessOf">
                                <h5>
                                  {" "}
                                  Himachal Pradesh Domicile :{" "}
                                  <span> ₹{data[0]?.fees_semester} </span>{" "}
                                </h5>
                                <h5>
                                  {" "}
                                 Others :{" "}
                                  <span>
                                    {" "}
                                    ₹{data[0]?.otherfees_semester}{" "}
                                  </span>{" "}
                                </h5>
                              </div>
                            </li>



                          </ul>
                          {/* <p className="secrty">
                            * One-time refundable security fee of Rs. 10,000
                          </p>  */}
                         

                          {/* <div className="lbDesign">
                                  <img className="w-100" src="assets/images/bdesign.webp" />           
                          </div> */}


                          {gallery.length > 0 && (
                            <div>
                              <h2 className="title">Gallery</h2>
                              <Row>
                                <Slider {...settings}>
                                  {gallery.map((row, idx) => (
                                    <Col
                                      className="p-0"
                                      md={12}
                                      sm={12}
                                      key={idx}
                                    >
                                      <figure class="snip1527">
                                        <div class="image">
                                          <img
                                            className="img-fluid"
                                            src={row?.image_url}
                                            alt="pr-sample23"
                                          />
                                        </div>
                                        {/* <figcaption>
                                          <h3> { row?.title} </h3>
                                        </figcaption> */}
                                      </figure>
                                    </Col>
                                  ))}
                                </Slider>
                              </Row>
                            </div>
                          )}
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </Styless>

        {/* Footer 2 */}
        <Footer />
      </div>
    </SuspenseBoundary>
  );
}

export default ProgrameDetails;