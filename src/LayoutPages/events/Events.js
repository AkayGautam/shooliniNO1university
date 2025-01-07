/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { Styles } from "./styles/event.js";
import Image from "next/legacy/image";
import Link from "next/link";

const settings = {
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
        rows: 3,
      },
    },
  ],
};

const Events = () => {

  
  const [data, setData] = useState([]);
 
  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://shooliniuniversity.com/media/allEventAPI", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: "auth=shoolini@999",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result?.success || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Format date to readable string
  const dateFormat = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  console.log(data);
  return (
    <Styles>
      <section className="event-page-area event-page">
        <Container> 
          <Row>
            <Col lg="12" md="12">
              <Slider {...settings}>
                {data?.map((data) => (
                  <div className="post-list-item col-md-12 px-2" key={data?.id}>
                    <div className="event-item ">
                      <div className="event-item-inner">
                        <div className="event-item-thumbnail">
                          <a href={data?.weburl} title="Mobile Games Battle">
                            <div className="vfvfv placeholder-thumbnail-bg">
                              <img
                                src={data?.imgurl}
                                alt={data?.title}
                                width={150}
                                height={150}
                                loading="lazy"
                              />
                            </div>
                          </a>
                        </div>

                        <div className="event-item-content">
                          <h4 className="event-title font-2">
                            <a href={data?.weburl}>
                              {(data?.title).replace("%", "-")}
                            </a>
                          </h4>
                          <div className="event-meta small-meta">
                            <span>
                              <i className="lnr lnr-calendar-full"></i>
                              {/* {dateFormat(data?.date)} */}
                              {dateFormat(data.date)}
                            </span>
                          </div>
                          <div className="event-excerpt">
                            <p
                              dangerouslySetInnerHTML={{
                                __html: data?.content,
                              }}
                            ></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>

              <div className="text-center-button">
                <Link href="/all-events">Past Events</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Styles>
  );
};

export default Events;
