/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "react-animated-slider/build/horizontal.css";
import { Styles } from "./common/styles/Combine";
import Datas from "../data/hero/homepageslides.json";
// import Datas from "../data/hero/hero-slider.json";
import Image from "next/legacy/image";
import Slider from "react-slick";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Link from "next/link";
import Slide from "@mui/material/Slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SliderDemo = () => {
  // play video on hover
  const playVideo = (e) => {
    e.target.play();
  };

  useEffect(() => {
    var s = document.createElement("script"); s.type = "text/javascript"; s.async = true; s.src = "https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s);

  }, [])

  const settings = {
    dots: true,
    fade: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: 'linear' ,
        responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow:8,
          slidesToScroll: 1, 
          dots: false,
          infinite: true,
        }
      },
      {
        breakpoint: 700, 
        settings: { 
          slidesToShow: 3,

          
          
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ],

  };


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };


  // const iconSlides = {
  //   infinite: false,
  //   speed: 300, 
  //   slidesToShow: 8,
  //   slidesToScroll: 1,
  //   autoplaySpeed: 1300,
  //   responsive: [
  //     {
  //       breakpoint: 1024, 
  //       settings: {
  //         slidesToShow:8,
  //         slidesToScroll: 1, 
  //         dots: false,
  //         infinite: true,
  //       }
  //     },
  //     {
  //       breakpoint: 700, 
  //       settings: { 
  //         slidesToShow: 4,
          
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true
  //       }
  //     }
  //   ],
  // };






  return (
    <Styles>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>

          <DialogContentText id="alert-dialog-slide-description">
            <div class="npf_wgts" data-height="400px" data-w="d095e55a1f298e67da8279133413215f"></div>
          </DialogContentText>
        </DialogContent>
      </Dialog>


      <section className="heroSLider position-relative d-none">
        <div className="slideBox">
          {/* <Slider {...settings}>
              {Datas.map((data, i) => (
                 <div key={i}>
                 <Link href={data.link}>  <Image width={1600} height={650} src={data.backgroundImage} alt="" /> </Link>
               </div>

              ))}
          </Slider>  */}

          <Slider {...settings}>
      
  
            <div>
            <div className="slide1"> 
              <a href="/master-of-business-administration-mba?utm_source=organic&utm_medium=mbaslider2024&utm_campaign=mbaslider2024"> 
              <span className="for-desktop"> <Image className="for-desktop" width={2400} height={750} src="/assets/slider/slider-H6-2.jpg" alt="" /> </span>
               <span className="for-mobile">  <Image className="for-mobile" width={500} height={662} src="/assets/slider/slider-6.jpg" alt="" /> </span>
               </a>
            </div>
            </div>
            <div>
            <div className="slide1"> 
              <a href="/srp?utm_source=organic&utm_medium=srpslider2024&utm_campaign=srpslider2024"> 
              <span className="for-desktop"><Image className="for-desktop" width={2400} height={750} src="/assets/slider/slider-H4-3.jpg" alt="" /> </span>
               <span className="for-mobile"> <Image className="for-mobile" width={500} height={662} src="/assets/slider/slider-5.jpg" alt="" /> </span>
                </a>
            </div>
            </div>
            <div>
            <div className="slide1"> 
              <a href="/international/dual-degree?utm_source=organic&utm_medium=dualdegreeslider2024&utm_campaign=dualdegreeslider2024"> 
              <span className="for-desktop"><Image className="for-desktop" width={2400} height={750} src="/assets/slider/slider-H5-4.jpg" alt="" /> </span>
               <span className="for-mobile"> <Image className="for-mobile" width={500} height={662} src="/assets/slider/slider-3.jpg" alt="" /> </span>
                </a>
            </div> 
            </div>

       
 

          </Slider>


        </div>
        {/* <div className="slideButtons"> 
          <Link onClick={handleClickOpen} href="/" className="broucher btn"> Download Brochure</Link>
          <Link target="_blank" href="https://admissions.shooliniuniversity.com/?utm_source=organic&utm_medium=Slider2023&utm_campaign=Slider2023" className="broucher btn"> Fill Admission Form</Link>
        </div> */}
      </section>

      <section className="hreSlider position-relative">
      <div className="container">
          <div className="mainslidecard">
              <div className="slideContent text-center pt-md-5">
                  <h2 className="slideTitle"> Driven by Innovation {'&'} Creativity </h2>
                  {/* <p  className="slideInfo"> We redefine the future of education, empowering changemakers to lead! </p> */}
                  <p className="slideInfo"> Fast-track your academic journey with the February 2025 Session! </p>
              </div>
              {/* <div className="slideSlickContent">
                  <div className="row m-0">
                  <Slider {...settings}>
                 
                  <div className="cols col-xs">
                  <Link href="/faculty-of-management-sciences?utm_source=organic&utm_medium=homepage-slider&utm_campaign=managementsciences" className="schoolIcon">
                            <div className="iconStyle hovicon effect-4 sub-b">
                              <img src="assets/slide-icons/icon0.png" />
                            </div>
                            <div className="iconTitle">
                                <h5> Management</h5>
                            </div>
                         </Link> 
                  </div>  
                  <div className="cols col-xs">
                  <Link href="/faculty-of-applied-sciences-and-biotechnology?utm_source=organic&utm_medium=homepage-slider&utm_campaign=biotechnology"  className="schoolIcon">
                            <div className="iconStyle hovicon effect-4 sub-b">
                              <img src="assets/slide-icons/icon1.png" />
                            </div>
                            <div className="iconTitle">
                                <h5> Biotechnology</h5>
                            </div>
                         </Link> 
                  </div> 
                  <div className="cols col-xs">
                  <Link href="/faculty-of-engineering-and-technology?utm_source=organic&utm_medium=homepage-slider&utm_campaign=engineering"  className="schoolIcon">
                            <div className="iconStyle hovicon effect-4 sub-b">
                              <img src="assets/slide-icons/icon2.png" />
                            </div>
                            <div className="iconTitle">
                                <h5> Engineering</h5>
                            </div>
                         </Link> 
                  </div> 
                  <div className="cols col-xs">
                  <Link href="/faculty-of-science?utm_source=organic&utm_medium=homepage-slider&utm_campaign=sciences"  className="schoolIcon">
                            <div className="iconStyle hovicon effect-4 sub-b">
                              <img src="assets/slide-icons/icon3.png" />
                            </div>
                            <div className="iconTitle">
                                <h5> Sciences</h5>
                            </div>
                         </Link> 
                  </div> 
                  <div className="cols col-xs">
                  <Link href="/journalism-and-mass-communication?utm_source=organic&utm_medium=homepage-slider&utm_campaign=media"  className="schoolIcon">
                            <div className="iconStyle hovicon effect-4 sub-b">
                              <img src="assets/slide-icons/icon4.png" />
                            </div>
                            <div className="iconTitle">
                                <h5> Media {'&'} Communications</h5>
                            </div>
                         </Link> 
                  </div> 
                  <div className="cols col-xs">
                  <Link href="/faculty-of-liberal-arts-spiritual-sciences?utm_source=organic&utm_medium=homepage-slider&utm_campaign=liberalarts"  className="schoolIcon">
                            <div className="iconStyle hovicon effect-4 sub-b">
                              <img src="assets/slide-icons/icon5.png" />
                            </div>
                            <div className="iconTitle">
                                <h5> Liberal Arts</h5>
                            </div>
                         </Link> 
                  </div> 
                  <div className="cols col-xs">
                  <Link href="/school-of-law?utm_source=organic&utm_medium=homepage-slider&utm_campaign=legalsciences"  className="schoolIcon">
                            <div className="iconStyle hovicon effect-4 sub-b">
                              <img src="assets/slide-icons/icon6.png" />
                            </div>
                            <div className="iconTitle">
                                <h5> Legal Sciences</h5>
                            </div>
                         </Link> 
                  </div> 
                  <div className="cols col-xs">
                  <Link href="/school-of-design?utm_source=organic&utm_medium=homepage-slider&utm_campaign=design"  className="schoolIcon">
                            <div className="iconStyle hovicon effect-4 sub-b">
                              <img src="assets/slide-icons/icon7.png" />
                            </div>
                            <div className="iconTitle">
                                <h5> Design</h5>
                            </div>
                         </Link> 
                
                  </div>
                    </Slider>
                  </div> 
              </div> */}

<div className="slideSlickContent">
                  <div className="row m-0">
                  <Slider {...settings}>
                 
                  <div className="cols col-xs">
                  <Link href="/b-tech-computer-science-engineering" className="schoolIcon">
                            <div className="iconStyle hovicon effect-4 sub-b">
                              <img src="assets/slide-icons/icon-biotech.png" />
                            </div>
                            <div className="iconTitle">
                                <h5> CSE</h5>
                            </div>
                         </Link> 
                  </div>  
                  <div className="cols col-xs">
                  <Link href="/master-of-business-administration-mba"  className="schoolIcon">
                            <div className="iconStyle hovicon effect-4 sub-b">
                              <img src="assets/slide-icons/icon-mba.png" />
                            </div>
                            <div className="iconTitle">
                                <h5> MBA</h5>
                            </div>
                         </Link> 
                  </div> 
                  <div className="cols col-xs">
                  <Link href="/school-of-biotechnology"  className="schoolIcon">
                            <div className="iconStyle hovicon effect-4 sub-b">
                              <img src="assets/slide-icons/icon-bio.png" />
                            </div>
                            <div className="iconTitle">
                                <h5> Biotech </h5>
                            </div>
                         </Link> 
                  </div> 
                  <div className="cols col-xs">
                  <Link href="/babsc-hons-with-specialisations">
                            <div className="iconStyle hovicon effect-4 sub-b">
                              <img src="assets/slide-icons/icon-psyco.png" />
                            </div>
                            <div className="iconTitle">
                                <h5> Psychology</h5>
                            </div>
                         </Link> 
                  </div> 
                  <div className="cols col-xs">
                  <Link href="/doctoral-programs">
                            <div className="iconStyle hovicon effect-4 sub-b">
                              <img src="assets/slide-icons/icon-research.png" />
                            </div>
                            <div className="iconTitle">
                                <h5> PhD </h5>
                            </div>
                         </Link> 
                  </div> 
                  <div className="cols col-xs">
                  <Link href="/llb"  className="schoolIcon">
                            <div className="iconStyle hovicon effect-4 sub-b">
                              <img src="assets/slide-icons/icon-law.png" />
                            </div>
                            <div className="iconTitle">
                                <h5> LLB </h5>
                            </div>
                         </Link> 
                  </div> 
              
                    </Slider>
                  </div> 
              </div>
          </div>
          <div className="studentImage">
              {/* <img src="assets/slide-icons/students-su.png" /> */}
              <Image
                                      width={1600}
                                      height={467}
                                      variant="top"
                                      src="/assets/slide-icons/students-su.png"
                                      className="img-responsive card-img-top w-100"
                                      alt="Shoolini University Banner Image"
                                    />
          </div>
          </div>
      </section>  






        <section>
          <Row className="m-0">
              <Col md="12">
              <div className="main8-title mb-3 text-left"><h1>Join Shoolini — A Top Private University in India!
 </h1></div>
              </Col>
          </Row>
        </section>


    </Styles>
  );
};

export default SliderDemo;
