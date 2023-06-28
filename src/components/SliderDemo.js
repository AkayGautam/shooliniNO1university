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
    fade: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    
  };


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };
 


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


      {/* <section className="hero-slider-area mainHome">
        <div className="Apps">
          {/* <div className="bannerVideo">
            {/* <iframe
              id="ytplayer"
              webkitallowfullscreen="true"
              src="https://www.youtube-nocookie.com/embed/gIljbQqKXk8?rel=0&controls=0&autoplay=1&showinfo=0&loop=1&autopause=0&mute=1&enablejsapi=1&playlist=gIljbQqKXk8"
              mozallowfullscreen="true"
              allowFullScreen={true}
              frameBorder="0"
            ></iframe> */}

      {/* <video
              autoPlay
              controls={false}
              loop
              muted
              poster="/assets/video/banner.webp"
            >
              <source src="/assets/video/banner.mp4" type="video/mp4" />
            </video> */}

      {/* <img
              src="/assets/video/banner3.webp" 
              alt="banner"
              style={{ width: "100%" }}
            /> */}
      {/* <Image  width={1519}  height={820}  src="/assets/images/slidersA.jpg" alt="Main Banner" />
            
          </div> */}

      {/* <div className="mainInput inMobile">
            {Datas.map((data, i) => ( 
              <div key={i} className="slider-content slider-image">
                <div className="slider-table">
                  <div className="slider-tablecell">
                    <Container>
                      <Row>
                        <Col md="12">
                          <div className={data.uniqClass}>
                            <div className="slider-title text-center">
                              <p className="text-white">
                                <strong> {data.title} </strong>
                              </p>
                            </div>
                            <div className="slider-desc text-center">
                              <h1>{data.desc}</h1>

                              <p className="text-white subtitleTxt">
                                <strong> {data.research}</strong>{" "}
                              </p>
                              <h4 className="text-white text-300">
                                <span>
                                  {" "}
                                  Times Higher Education Rankings 2023{" "}
                                </span>{" "}
                              </h4>
                            </div>
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="resrchTxt mt-md-5"></div>
                        </Col>
                        <Col md="6">
                          <Row>
                            <Col md="6"></Col>
                          </Row>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>
              </div>
            ))}
          </div>
 */}

      {/* 

        </div>
      </section> */}


      <section className="heroSLider position-relative">
   <div className="slideBox">
          <Slider {...settings}>
              {Datas.map((data, i) => (
                 <div key={i}>
                 <Image width={1600} height={650} src={data.backgroundImage} alt="" />
               </div>

              ))}
          </Slider> 

        </div>
        <div className="slideButtons"> 
          <Link onClick={handleClickOpen} href="/" className="broucher btn"> Download Brochure</Link>
          <Link target="_blank" href="https://admissions.shooliniuniversity.com/?utm_source=organic&utm_medium=Slider2023&utm_campaign=Slider2023" className="broucher btn"> Fill Admission Form</Link>
        </div>
      </section>
<section className="noticed">
  <Container>
    <div className="noticed">
   <h5><strong>  ADMISSION NOTICE </strong>  <br />
Seats full: B Pharmacy, B Tech AI, B Tech ECE <br />
Few seats left: B Tech CSE, BBA, Psychology, BA.LLB, B. Com </h5> 
    </div>
  </Container>
</section>


    </Styles>
  );
};

export default SliderDemo;
