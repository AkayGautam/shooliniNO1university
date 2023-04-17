/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "react-animated-slider/build/horizontal.css";
import { Styles } from "./common/styles/Herosliderhome";
import Image from "next/legacy/image";


const HerosliderHome = () => {

  return (
    <Styles>
             <section className="hero-slider-area mainHome">
               
        <div className="Apps center">
          <div className="bannerVideo">
             <Image  width={1519}  height={690}  src="/assets/video/univ.png" alt="Main Banner" />
            </div>
            <div className="hroText">
              
            </div>
            </div>

        </section>
    </Styles>
  );
};

export default HerosliderHome;
