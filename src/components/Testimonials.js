import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import testimonialss from "../data/Testimonials/Testimonials.json";
import { Styles } from "./common/styles/testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import Image from "next/legacy/image";
import { testimonialApi } from "../Api";

const settings = {
  dots: false,
  infinite: true,
  arrows: true,
  autoplay: true,
  speed: 1500,
  autoplaySpeed: 2500,
  slidesToShow: 1,
  slidesToScroll: 1,
};


// const removeHTML = (str) => {
//   var tmp = document.createElement("p");
//   tmp.innerHTML = str;
//   return tmp.textContent || tmp.innerText || "";
// };


const Testimonials = ({ testimonials }) => {

  // const [testimonials, setTestimonial] = useState([]);

  // useEffect(() => {
  //   const fetchTestimonials = async () => {
  //     const testimonial = await testimonialApi();
  //     const data = await testimonial.json();
  //     setTestimonial(data);
  //   };
  //   fetchTestimonials();
  // }, []);

  return (
    <>
      <Head>
        <title>{testimonials?.seo_title}</title>
        <meta name="description" content={testimonials?.seo_description} />
        <meta name="keywords" content={testimonials?.seo_keywords} />
      </Head>
      <Styles>
        <div className="bg-image">
          <section className="testimonials-area">
            <div
              className="testimonialsSection"
              style={{
                backgroundImage: `url(/assets/images/${testimonialss.backgroundImage})`,
              }}
            >
              <Container>
                <Row>
                  <Col md="6" sm="5"></Col>
                  <Col md="6" sm="7">
                    <div className=" py-5 sec-title text-left">
                      <h2> Student Voices </h2>
                    </div>
                    <Slider {...settings}>
                      {testimonials &&
                        testimonials.testimonial?.map((item, i) => (
                          <div className="team-item" key={i}>
                            <div className="mt-3">
                              <Image
                                width={240}
                                height={300}
                                src={item?.imageurl}
                                alt="testimonials"
                              />
                            </div>

                            <div className="img-content">
                              <h5 style={{color:"#e41a1a"}}>{item.name}</h5>
                              <p dangerouslySetInnerHTML={ {__html: item.content} }></p>
                            </div>
                          </div>
                        ))}
                    </Slider>
                  </Col>
                </Row>
              </Container>
            </div>
          </section>
        </div>
      </Styles>
    </>
  );
};

export default Testimonials;
