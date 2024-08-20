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
import Modal from "react-modal";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import { useIntersectionObserver } from "@uidotdev/usehooks";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    transition: '.3s ease-in-out',
    padding: '0',
    overflow: 'inherit',
    maxWidth: '650px',
    width: '80%'
  },
};
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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

function ProgrameDetails({ props, img, data, id, ldJson, children, text: initialText, maxLength }) {


  const [isExpanded, setIsExpanded] = useState(false);
  const [texts, setText] = useState(initialText || '');
  const toggleReadMores = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedText = isExpanded ? texts : texts.slice(0, maxLength);


  const text = children;

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };


  const [isVIewMore, setIsVIewMore] = useState(false);
  const toggleViewMore = () => {
    setIsVIewMore(!isVIewMore);

  };

  const [isClassToggled, setIsClassToggled] = useState(false);

  const handleToggleClick = () => {
    setIsClassToggled(!isClassToggled);
    // setIsVIewMore()
  };



  // Used to toggle Modal on and off
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  // React.useCallback.
  // const toggleModal = React.useCallback(
  //   (key) => () => {
  //     const data = postReview.find((row) => row.id === key);
  //     setModalData(data);
  //     setIsOpen(true);
  //   },
  //   [postReview]
  // );
  useEffect(() => { }, [isOpen]);



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


  var student_card = [];
  const [studentcard, setStudentcard] = useState([]);
  useEffect(() => {
    fetch("https://shooliniuniversity.com/media/GetAllSchoolcard?auth=shoolini@999", {
      method: "post",
      headers: new Headers({
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }),
      body: JSON.stringify({ auth: 'shoolini@999' }),
    })
      .then((response) => response.json())
      .then((res) => {
        setStudentcard(res);
        console.log(res.success);
        setStudentcard(res.success);
      });
  }, [])




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
  const [expanded, setExpanded] = React.useState("panel");
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
    speed: 1500,
    slidesToScroll: 1,
    // slidesToShow: data.length < 3 ? 3 : data.length,
    slidesToShow: 3,
    autoplay: true,
    rows: 1,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
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
    slidesToScroll: 1,
    autoplay: true,
    slidesToShow: 4,
    arrows: true,
    row: 1,
    autoplaySpeed: 1500,

    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          mobileFirst: true,
        },
      },
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
    rows: 2,
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

  useEffect(() => {
    var s = document.createElement("script"); s.type = "text/javascript"; s.async = true; s.src = "https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s);
  }, []);





  const gallery = data[0].gallery ? JSON.parse(data[0].gallery) : [];
  const posTFaq = data[1].faqdata ? data[1].faqdata : [];
  const postReview = data[1].testimonial ? data[1].testimonial.sort((a, b) => b.id - a.id) : [];
  const course_discription = data[0].course_right_part ? JSON.parse(data[0].course_right_part) : [];
  const placements = data[1].companies ? data[1].companies : [];
  const schoolcard = data[1].schoolcards ? data[1].schoolcards : [];
  const courselogo = data[1].courselogos ? data[1].courselogos : [];
  console.log(courselogo, 'courselogo');

  const [bgimg, setBgimg] = useState('')
  useEffect(() => {
    // Aos.init({ duration: 2000 })
    setBgimg(img)
  }, [img])

  console.log(bgimg?.image_url, "image")

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [opend, setOpend] = useState(false);
  const handleOpend = () => setOpend(true);
  const handleClosed = () => setOpend(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };


  const [modalIsOpens, setModalIsOpens] = useState(false);

  const openModals = () => {
    setModalIsOpens(true);
  };

  const closeModals = () => {
    setModalIsOpens(false);
  };

  const [naacModal, setNaacModal] = useState(false);

  const openNaacModals = () => {
    setNaacModal(true);
  };

  const closeNaacModals = () => {
    setNaacModal(false);
  };



  const [vdoOpens, setVdoOpens] = useState(false);

  const openvdoModals = () => {
    setVdoOpens(true);
  };

  const closevdoModals = () => {
    setVdoOpens(false);
  };

  useEffect(() => { }, [isOpen]);

  const removeHTML = (str) => {


    if (typeof document !== 'undefined') {
      var tmp = document.createElement('p')
      tmp.innerHTML = str
      return tmp.textContent || tmp.innerText || ''
    }


  }
  const toggleModal = (key) => {
    const data = postReview.find((row) => row.name === key);
    setModalData(data);
    setIsOpen(true)
  }

  const [openbroucher, setOpenbroucher] = React.useState(false);
  const handleClickOpen = (e) => {
    e.preventDefault();
    setOpenbroucher(true);
  };

  const broucherClose = () => {
    setOpenbroucher(false);
  };

  const [isIntersecting, setIsIntersecting] = useState(false);

  // const [ref, entry] = useIntersection({
  //   threshold: 0.5 // Adjust the threshold as needed
  // });

  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });


  React.useEffect(() => {
    if (entry?.isIntersecting) {
      setIsIntersecting(true);
    } else {
      setIsIntersecting(false);
    }
  }, [entry]);




  useEffect(() => {
    // download brouchure
    var s = document.createElement("script"); s.type = "text/javascript"; s.async = true; s.src = "https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s);

  }, [])




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

          <Dialog
            open={openbroucher}
            TransitionComponent={Transition}
            keepMounted
            onClose={broucherClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogContent>
              <button className="closebtn" onClick={broucherClose} > x </button>
              <DialogContentText id="alert-dialog-slide-description">
                <div class="npf_wgts" data-height="420px" data-w="d095e55a1f298e67da8279133413215f"></div>
              </DialogContentText>
            </DialogContent>
          </Dialog>


          <Modal
            isOpen={vdoOpens}
            onRequestClose={closevdoModals}
            contentLabel="Example Modal"
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="curriculum_awaiteded"
          >
            <Box sx={style}>

              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <button className="closebtn" onClick={closevdoModals}>x</button>

                <div className="table-responsive tableHt table-striped">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/7UxXS71TmrI?si=58eOdVcYWVR8ZDAA&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

              </Typography>
            </Box>
          </Modal>





          <section style={{ background: `url(${bgImg?.image_url})` }} className="for-desktop new-header aiml-new__header js-section-track" id="bg-image" data-init="true">
            <div
              className="slider-content slider-image"
              style={{
                background: `url('${bgImg?.image_url}') no-repeat center center`,
              }}
            >

              {/* https://www.youtube.com/embed/7UxXS71TmrI?si=58eOdVcYWVR8ZDAA */}

              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="play-btn-area">
                      <div onClick={openvdoModals} className="video-play-button" data-gl-target="experienceModal" data-videoid="oxqhi57t0w">
                        <span></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="header-content text-left">
                      <div className="row">
                        <div className="col-md-6">
                          <p className="banner-heading-aiml"> {data[1]?.streamname} </p>
                        </div>
                        <div className="col-md-6">
                          <div className="rankingsLogo">
                            <img src="https://shooliniuniversity.com/media/1696829559-the.jpeg" />
                            <img src="https://shooliniuniversity.com/media/1696829559-qs.jpeg" />
                          </div>
                        </div>

                      </div>
                      <h1 className="banner-subheading-aiml">{data[0]?.title}</h1>
                      <p className="mb-2 small-font"><strong> Eligibility:</strong> {data[0]?.eligibility}</p>
                      <ul className="mb-2 ">
                        <li><strong> Duration:</strong> {data[0]?.duration}</li>
                        <li><strong>Admission Criteria:</strong> {data[0]?.admission_criteria} </li>
                      </ul>
                      <div className="button-section non-js-btns " id="top-banner-button-section">
                        <div className="lc-btn-section">
                          <a target="_blank" href="https://shooliniuniversity.com/apply?utm_source=organic&utm_medium=admissions&utm_campaign=admissions" className="grey-transparent-button btn-style fixed-size-btn track-click-mp">
                            Apply Now
                          </a>
                        </div>
                        <div className="application-btn-section">
                          <a href="javascript:void(0)" onClick={handleClickOpen} className="btn primary-button  btn-style fixed-size-btn track-click-mp" data-title="Top Banner"> Download Brochure </a>
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
                <div onClick={openvdoModals} className="video-play-button" data-gl-target="experienceModal" data-videoid="oxqhi57t0w">
                  <span></span>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="play-btn-area">
                    <div onClick={openvdoModals} className="video-play-button" data-gl-target="experienceModal" data-videoid="oxqhi57t0w">
                      <span></span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="header-content text-left">
                    <p className="banner-heading-aiml"> {data[1]?.streamname} </p>
                    <h3 className="banner-subheading-aiml">{data[0]?.title}</h3>
                    <p className="mb-0 small-font"><strong> Eligibility :</strong> {data[0]?.eligibility}</p>
                    <ul>
                      <li><strong> Duration :</strong> {data[0]?.duration}</li>
                      <li><strong>Admission Criteria :</strong> {data[0]?.admission_criteria} </li>
                    </ul>
                    <div className="button-section non-js-btns " id="top-banner-button-section">
                      <div className="lc-btn-section">
                        <a target="_blank" href="https://shooliniuniversity.com/apply?utm_source=organic&utm_medium=admissions&utm_campaign=admissions" className="grey-transparent-button btn-style fixed-size-btn track-click-mp">
                          Apply Now
                        </a>
                      </div>


                      <div className="application-btn-section">
                        <a onClick={handleClickOpen} href="javascript:void(0)" className="btn primary-button  btn-style fixed-size-btn track-click-mp" data-title="Top Banner"> Download Brochure </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>




          <Modal
            open={opend}
            onClose={handleClosed}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <button className="closebtn" onClick={handleClosed}>x</button>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Semester Fee
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div>   {data[0]?.curriculum_awaited}    </div>
              </Typography>
            </Box>
          </Modal>

          <section ref={ref} id="section1" className="overview watched-section mt-4" >
            <div className="container">
              {/* <h3 class="text-center heading-left">Designed for working professionals like you</h3> */}
              <div className="row">
                <div className="col-md-8">
                  <div className={`overview-dta textLmt ${isClassToggled ? 'textNoLmt' : ''}`}>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: data[0]?.content,
                      }}
                    >
                    </p>
                    <button className="readmorebtn btn-mob" onClick={handleToggleClick}>
                      <span onClick={toggleReadMores}> {isExpanded ? 'Read Less' : 'Read More'} </span>
                    </button>
                  </div>

                  <div className="row studentCards">
                    {

                      schoolcard?.map((card, idx) =>
                        <Col md="4" key={idx}>
                          <div className="wrapper">
                            <div className="card">
                              <img src={card.imageurl} />

                              <div className="info">
                                <h3> {card.name} </h3>
                                <p> <div className="text-white text-8"
                                  dangerouslySetInnerHTML={{
                                    __html: card?.content,
                                  }}
                                >
                                </div>
                                </p>

                              </div>
                            </div>
                          </div>
                        </Col>
                      )}

                  </div>


                  <div className="visionmissionSection overview-dta mb-4">
  <div className="">
    <div className="vsnData">
      {data[0]?.visionmission ? (
        <p
          dangerouslySetInnerHTML={{
            __html: data[0].visionmission,
          }}
        ></p>
      ) : null}
    </div>

    {data[0]?.visionmission ? (
      <button
        className="readmore d-inline-block mt-2"
        onClick={openNaacModals}
      >
        Program Educational Objectives, Program Outcomes and Program Specific Outcomes
      </button>
    ) : null}
  </div>
</div>


                  {/* <div className="curriculum-button-block lc-btn-section">

                       {data[0]?.pdfurl ? (
                      <a
                        id="btn-style-2"
                        target="_blank"
                        className="primary-button btn-style-2 w-100 text-center track-click-mp"
                        href={data[0]?.pdfurl}
                      >
                        Program Objectives
                      </a>
                    ) : null}
                  </div> */}




                  <Modal
                    isOpen={naacModal}
                    onRequestClose={closeNaacModals}
                    contentLabel="Example Modal"
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className="feeses"
                  >
                    <Box sx={style} className="max-wid-visions">
                      <button className="closebtn" onClick={closeNaacModals}>x</button>
                      {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                      PEO, PO, PSO
                      </Typography> */}
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className="vsnData">
                          <p
                            dangerouslySetInnerHTML={{
                              __html: data[0]?.visionmission,
                            }}
                          ></p>
                        </div>
                      </Typography>
                    </Box>
                  </Modal>






                  <div className="col-md-12">
                    <div className="circulum">
                      <div className="curriculum-template__head">
                        <div className="curriculum-head-container curriculum-left text-left left-fixed">
                          <h3 className="font-20 text-left">

                            {data[0]?.title} Career Opportunities
                          </h3>
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
                </div>

                <div className="col-md-4">

                  <div className="row logoCards">
                    {
                      courselogo?.map((logo, idx) =>
                        <Col md="4" key={idx}>
                          <div className="cardLogo">
                            <img className="w-100" src={logo.imageurl} />
                          </div>
                        </Col>
                      )}

                  </div>
                  <div className={isIntersecting ? 'intersecting-class' : 'circulum'} >
                    <div className="curriculum-template__head">
                      <div className="curriculum-head-container curriculum-left left-fixed">

                        <h2 className="curriculum-head__title">
                          Program Details
                        </h2>

                        <div className="curriculum-button-block lc-btn-section">
                          <a onClick={openModal} className="primary-button w-100 feeBtn btn-style text-center track-click-mp" href="javascript:void(0)">
                            Semester Fee Structure
                          </a>
                        </div>


                        <div className="curriculum-button-block lc-btn-section">
                          <a onClick={openModals} className="primary-button btn-style w-100 text-center track-click-mp" href="javascript:void(0)">
                            View Curriculum
                          </a>
                        </div>


                      </div>
                    </div>

                    <div className="sidebar mt-3">
                      <div class="npf_wgts" data-height="400px" data-w="1222078993f709a639ec1d6ca2d2d084"></div>
                      <script type="text/javascript"> var s=document.createElement("script"); s.type="text/javascript"; s.async=true; s.src="https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s); </script>
                    </div>



                  </div>

                </div>
              </div>
            </div>
          </section>





          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="feeses"
          >
            <Box sx={style}>
              <button className="closebtn" onClick={closeModal}>x</button>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Semester Fee Structure
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <p>  Himachal Pradesh Domicile: <strong> {data[0]?.fees_semester} </strong>   </p>
                <p>  Others: <strong> {data[0]?.otherfees_semester}  </strong>   </p>

                <p><small>  <em> **Fee is approved by the Govt. Of Himachal Pradesh<br />
                  **There is 5% annual escalation in the tuition fee <br />
                  **One time 10,000 academic security (refundable after degree completion) </em> </small></p>
              </Typography>
            </Box>
          </Modal>


          <Modal
            isOpen={modalIsOpens}
            onRequestClose={closeModals}
            contentLabel="Example Modal"
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="curriculum_awaited"
          >
            <Box sx={style}>
              <button className="closebtn" onClick={closeModals}>x</button>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Curriculum
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                <div className="table-responsive tableHt table-striped"
                  dangerouslySetInnerHTML={{
                    __html: data[0]?.curriculum_awaited,
                  }}
                />

              </Typography>
            </Box>
          </Modal>




          {/* <Modal
        open={modalIsOpen}
        onClose={closeModal}
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
      </Modal> */}






          <section className="fac-mentor">
            <div className="container">
              <div className="pagetitle">
                <h2 class=" heading-left mb-0">Top Faculty  </h2>

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
                                className="img-fluids"
                              />
                            </div>
                            <div className="fac-list">
                              <h5>{res.name} </h5>
                              {/* <p class="designation"> {res.designation} </p>  */}
                              <p> {res.description} </p>
                              {/* <p> {res.designation} </p> */}
                            </div>
                          </div>
                        </Link>
                      </div>

                    ))}
                </Slider>
              </div>
            </div>
          </section>





          <section className="  allFaculty mb-5">
            <div className="container">
              <div className="pagetitle">
                <h2 class=" heading-left mb-0">Student Voices  </h2>

              </div>
              <div className="mentorss">
                <Slider {...setting}>
                  {postReview &&
                    postReview?.map((row, idx) => (
                      <div>
                        <div onClick={() => {
                          toggleModal(row.name)
                        }}
                          className="allFac-Card">
                          <div className="fac-mems" key={idx}>
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
                          <div className="fac-list p-0">
                            <p className="m-0">


                              {removeHTML(row.content)}
                            </p> </div>
                        </div>
                      </div>
                    ))}
                </Slider>

                {/* <div className="all-rev-btn">
                  <Link className="AppyBtn" href="/testimonials"> All Reviews </Link>
                </div> */}
              </div>
            </div>


            <Modal isOpen={isOpen} appariaHideApp={false} style={customStyles}>
              <button className="close-modal" onClick={() => setIsOpen(false)}>
                X
              </button>
              <div className="row">
                <div className="col-md-12 border-0 shadowPage page">
                  <div className="pageOne">
                    <h3 className="tet-title">  {modalData?.name} </h3>
                    <div className="w-100">
                      {removeHTML(modalData?.content)}
                    </div>
                  </div>
                </div>
              </div>
            </Modal>

          </section>



          <section className="placementLogos">
            <Container>
              <div class="pagetitle   mr-auto"><h2 class="  heading-left text-left mb-0"> Top Campus Recruiters  </h2>
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

          <section className="overview pt-0">
            <div className="container">
              {/* <h3 class="text-center heading-left">Designed for working professionals like you</h3> */}
              <div className="row">
                {/* <div className="col-md-4">
                  <div className="circulum">
                    <div className="curriculum-template__head">
                      <div className="curriculum-head-container curriculum-left text-left left-fixed">
                        <h3 className="font-20 text-left">
                          {data[0]?.title} Career Opportunities
                        </h3>
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
                </div> */}
                <div className="col-md-12">
                  <div className="overview-dta">
                    <div className="course-desc">
                      <div className="pagetitle mt-0">
                        <h2 class=" heading-left mb-0">Frequently Asked Questions </h2>

                      </div>
                      <div className="faqs">
                        {posTFaq &&
                          posTFaq.map((row, idx) => (
                            <Accordion
                              key={idx}
                              expanded={expanded === `panel${idx}`}
                              onChange={handleChange(`panel${idx}`)}
                            >
                              <AccordionSummary
                                aria-controls="panel-content"
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



          <section className="blogsCard mb-0">

            <Container>
              <div class="pagetitle"><h2 class=" heading-left mb-0"> Latest Blogs  </h2>
                <p> Explore the latest insights and updates in our newest Shoolini University blogs! </p></div>
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
                        <h2 className="heading-left mb-0">
                          Still have Queries? Contact Us
                        </h2>
                        <p>Please fill in the form and an expert from the admissions office will call you in the next 4 working hours.</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="application-deadline text-right">

                    <a className=" AppyBtn" target="_blank" href="https://shooliniuniversity.com/apply?utm_source=organic&utm_medium=admissions&utm_campaign=admissions">Apply Now</a>
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