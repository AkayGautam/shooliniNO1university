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
import { Troubleshoot } from "@mui/icons-material";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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

function ProgrameDetails({ props, img, data, id, ldJson }) {
  var result_blog = [];
  const [blogdata, setBlogdata] = useState([]);
  useEffect(() => {
    fetch("https://shooliniuniversity.com/media/GetTop5Blog?auth=shoolini@999&toprecord=10", {
      method: "post",
      headers: new Headers({
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        setBlogdata(res);
        console.log(res.success);
        setMetaTags(res.success);
      });
  }, [])

  //result_blog = blogdata?.success;

  const blogs = blogdata?.success;
  console.log(blogs, "blog")
  const router = useRouter();
  const bgImg = data[0].slides
    ? JSON.parse(data[0].slides)[0]
    : `/assets/images/${Datas[0].backgroundImage}`;

  const [isDoctoral, setIsDoctoral] = useState(true);

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
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
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

  const setting = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,

    autoplaySpeed: 1500,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const placements_logo = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 6,
    slidesToScroll: 1,
    rows: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
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
  const course_discription = data[0].course_right_part ? JSON.parse(data[0].course_right_part) : [];
  const placements = data[1].companies ? data[1].companies : [];

  console.log(placements, 'placements')

  const [bgimg, setBgimg] = useState('')
  useEffect(() => {
    // Aos.init({ duration: 2000 })
    setBgimg(img)
  }, [img])

  console.log(bgimg?.image_url, "image")

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [opend, setOpend] = React.useState(false);
  const handleOpend = () => setOpend(true);
  const handleClosed = () => setOpend(false);


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

        {/* <Templatecourse title={data[0]?.title} img={bgImg?.image_url} /> */}
        <Styless>
          <section style={{ background: `url(${bgImg?.image_url})` }} className="for-desktop new-header aiml-new__header js-section-track" id="bg-image" data-init="true">
            <div
              className="slider-content slider-image"
              style={{
                background: `url('${bgImg?.image_url}') no-repeat center center`,
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="play-btn-area">
                      <div className="video-play-button" data-gl-target="experienceModal" data-videoid="oxqhi57t0w">
                        <span></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="header-content text-left">

                      <h1 className="banner-heading-aiml"> { data[1]?.streamname } </h1>


                      <h3 className="banner-subheading-aiml">{data[0]?.title}</h3>
                      <p className="mb-0 small-font"><strong> Eligibility :</strong> {data[0]?.eligibility}</p>
                      <ul>
                        <li className="pl-0"><strong> Duration :</strong> {data[0]?.duration}</li>
                        <li><strong>Admission Criteria :</strong> {data[0]?.admission_criteria} </li>
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
                </div>
              </div>
            </div>
          </section>

          <section className="for-mobile new-header aiml-new__header js-section-track" id="bg-image">
            <div className="slider-content slider-image" >
              <img className="w-100 " src={bgImg?.image_url} />
              <div className="play-btn-area formobile">
                <div className="video-play-button" data-gl-target="experienceModal" data-videoid="oxqhi57t0w">
                  <span></span>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="play-btn-area">
                    <div className="video-play-button" data-gl-target="experienceModal" data-videoid="oxqhi57t0w">
                      <span></span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="header-content text-left">
                    <h1 className="banner-heading-aiml">School of Pharmaceutical Sciences </h1>
                    <h3 className="banner-subheading-aiml">{data[0]?.title}</h3>
                    <p className="mb-0 small-font"><strong> Eligibility :</strong> {data[0]?.eligibility}</p>
                    <ul>
                      <li className="pl-0"><strong> Duration :</strong> {data[0]?.duration}</li>
                      <li><strong>Admission Criteria :</strong> {data[0]?.admission_criteria} </li>
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
              </div>
            </div>
          </section>


          <div className="featureDiv">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <img src={data[0]?.course_left_image} className="img-fluid" alt="Culinary Arts Chitkara University" />
                </div>
                <div className="col-md-7">
                  {course_discription.length > 0 && (
                    <div>
                      {course_discription.map((row, idx) => (
                        <div className="fDiv">
                          <div className="couIcon"><img src={row.image_url} className="webIcon" /></div>
                          <div className="couCont">
                            <p>
                              <b><img className="mobIconLP" src="https://www.chitkara.edu.in/images/2021/icons/icn1a.png" />{row.heading}</b>
                            </p>
                            <p>{row.content}  </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>


          <section className="fac-mentor">
            <div className="container">
              <div className="pagetitle">
                <h3 class="text-left heading-left mb-0">Top Faculty  </h3>
                <p> Learn from leading academicians in the field of Artificial Intelligence and Machine Learning and several experienced industry practitioners from top organisations. </p>
              </div>
              <div className="mentorss">
                <Slider {...settings}>
                  {data[1] &&
                    data[1].facultydetails?.map((res, index) => (
                      <div className="colrosText">
                        <Link
                          href={`/faculty/profile/${res.name
                            .split(" ")
                            .join("-")}`}
                        >
                          <div className="fac-mem" key={index}>
                            <div className="fac-img">
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
                            </div>
                            <div className="fac-list">
                              <h5>{res.name} </h5>
                              <p> {res.designation} </p>
                            </div>
                          </div>
                        </Link>
                      </div>

                    ))}
                </Slider>
              </div>
            </div>
          </section>
          <section className="overview">
            <div className="container">
              {/* <h3 class="text-center heading-left">Designed for working professionals like you</h3> */}
              <div className="row">
                <div className="col-md-4">
                  <div className="circulum">
                    <div className="curriculum-template__head">
                      <div className="curriculum-head-container curriculum-left left-fixed">
                        <h2 className="curriculum-head__title">
                          Comprehensive Curriculum
                        </h2>
                        <p className="curriculum-head__subtitle">The curriculum has been designed by faculty from Great Lakes and UT Austin McCombs School of Business. </p>

                        <div className="curriculum-button-block lc-btn-section">
                          <a onClick={handleOpen} className="primary-button w-100 feeBtn btn-style text-center track-click-mp" href="javascript:void(0)">
                            Semester Fee
                          </a>
                        </div>
                        <div className="curriculum-button-block lc-btn-section">
                          <a onClick={handleOpend} className="primary-button btn-style w-100 text-center track-click-mp" href="javascript:void(0)">
                            Download Curriculum
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-8">
                  <div className="overview-dta">
                    <p> {data[0]?.content.replace(/(<([^>]+)>)/ig, '')} </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Semester Fee
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <p>  Himachal Pradesh Domicile : <strong> {data[0]?.fees_semester} </strong>   </p>
                <p>  Others : <strong> {data[0]?.otherfees_semester}  </strong>   </p>
              </Typography>
            </Box>
          </Modal>


          <Modal
            open={opend}
            onClose={handleClosed}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Semester Fee
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div>   {data[0]?.curriculum_awaited}    </div>
              </Typography>
            </Box>
          </Modal>


          <section className="  allFaculty mb-5">
            <div className="container">
              <div className="pagetitle">
                <h3 class="text-left heading-left mb-0">Learner Feedback on Mentorship  </h3>
                <p> Learn from leading academicians in the field of Artificial Intelligence and Machine Learning and several experienced industry practitioners from top organisations. </p>
              </div>
              <div className="mentorss">
                <Slider {...setting}>
                  {postReview &&
                    postReview?.map((row, idx) => (
                      <div>
                        <div className="allFac-Card">
                          <div className="fac-mem" key={idx}>
                            <div className="fac-img">
                              <img
                                src={row?.imageurl}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <div className="fac-list">
                              <h5>{row.name} </h5>
                            </div>
                          </div>
                          <div className="fac-list p-0">  <p className="m-0"> {row.content} </p> </div>
                        </div>
                      </div>
                    ))}
                </Slider>
              </div>
            </div>
          </section>

          <section className="overview pt-0">
            <div className="container">
              {/* <h3 class="text-center heading-left">Designed for working professionals like you</h3> */}
              <div className="row">
                <div className="col-md-4">
                  <div className="circulum">
                    <div className="curriculum-template__head">
                      <div className="curriculum-head-container curriculum-left text-left left-fixed">
                        <h4 className="font-18 text-left">
                          MPharmacy - Pharmaceutical Chemistry Career Opportunities
                        </h4>
                        <ul className="opp-list">
                          <p
                            dangerouslySetInnerHTML={{
                              __html: data[0]?.career_opportunities,
                            }}
                          />
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="overview-dta">
                    <div className="course-desc">
                      <div className="pagetitle mt-0">
                        <h3 class="text-left heading-left mb-0">Frequently Asked Questions </h3>
                        <p> Learn from leading academicians in the field of Artificial Intelligence and Machine Learning and several experienced industry practitioners from top organisations. </p>
                      </div>
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
                  </div>
                </div>
              </div>
            </div>
          </section>



          <section className="placementLogos">
            <Container>
              <div class="pagetitle text-center m-auto"><h3 class="text-left heading-left text-center mb-0"> Top Campus Recruiters  </h3>
                <p> Some of the major companies that visit our campus and hire our graduates are: </p></div>
              <Row>
                <Col md="12">
                  <div className="allLogos">
                    {
                      <Slider {...placements_logo}>
                        {placements.length > 0 && (
                          placements.map((logo, idx) => (
                            <div key={idx} className="cLogo">
                              <img src={logo.imageurl} className="webImg" />
                              {/* <img src="https://shooliniuniversity.com/media/1610879490-mankind.png" /> */}
                            </div>
                          ))
                        )}
                      </Slider>
                    }
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="blogsCard mb-0">

            <Container>
              <div class="pagetitle"><h3 class="text-left heading-left mb-0"> Latest Blogs  </h3>
                <p> Learn from leading academicians in the field of Artificial Intelligence and Machine Learning and several experienced industry practitioners from top organisations. </p></div>
              <Row>
                {
                  <Slider {...allBlogs}> {
                    blogs?.map((blog, idx) =>
                      <Col md="3" key={idx}>
                        <div className="blog-card">
                          <a className="blog-card__link" href={blog.readmore}>
                            <div className="cardImage" style={{ background: `url(${blog.featureimage})` }}>
                              {/* <img src={} className="card-img-top" alt="..." /> */}

                            </div>
                            <div className="card-body  position-relative">
                              {/* <span className="dates"> { blog.post_date } </span> */}
                              {/* <ul className="catgory">
                              {
                                blog?.ctegory?.map((cat, id) =>
                                  <li key={id}>
                                    {cat}
                                  </li>
                                )}
                            </ul> */}
                              <h5 className="card-title">  {blog.title} </h5>
                              {/* <p className="card-text">
                              {blog.content.replace(/(<([^>]+)>)/ig, '')}
                            </p> */}
                            </div>
                          </a>
                          <a target="_blank" href={blog.readmore} className="btnss">Read More &nbsp; {'>'} </a>
                        </div>


                      </Col>
                    )}
                  </Slider>
                }
              </Row>
            </Container>

            <div>

            </div>

          </section>
          <section className="applySection py-5">
            <Container>
              <Row>
                <Col md="8">
                  <div className="application-deadline">

                    <div className="grid">
                      <div className="text-wrapper">
                        <h3 className="heading-left mb-0">
                          Still have queries? Contact Us
                        </h3>
                        <p>Please fill in the form and an expert from the admissions office will call you in the next 4 working hours. <br /> You can also reach out to us at</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="application-deadline">

                    <a className=" AppyBtn" href="#" >Apply Now</a>
                  </div>
                </Col>


              </Row>
            </Container>
          </section>

        </Styless>

        <Footer />
      </div>
    </SuspenseBoundary>
  );
}

export default ProgrameDetails;