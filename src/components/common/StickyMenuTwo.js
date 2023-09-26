import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Styles } from "./styles/stickyMenu";
import Link from "next/link";
import Image from "next/legacy/image";

const StickyMenuTwo = ({ links }) => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const stickyMenu = document.querySelector(".sticky-menu");

      if (window.scrollY > 160) {
        stickyMenu?.classList.add("sticky");
      } else {
        stickyMenu?.classList.remove("sticky");
      }
    });
  });

  return (
    <>
      <Styles>
        <section className="sticky-menu">
          <div className="container-fluid pxs-4">
            <Row>
              <Col md="2">
                <div className="logo">
                  <Link href={"/"}>
                    <Image
                      src={"/assets/images/logo.png"}
                      alt=""
                      className="brandLogo"
                      width={200}
                      height={50}
                    />
                  </Link>
                </div>
              </Col>
              <Col md="10">
                <div className="main-menu-box">
                  <div className="menu-box d-flex justify-content-between">
                    <ul className="nav menu-nav">
                    <li className="nav-item actiev">
                      <Link
                        href="/"
                        className="nav-link"
                      >
                        Home
                      </Link>
                    </li>

                    <li className="nav-item actiev">
                      <Link
                        href="/international"
                        className="nav-link"
                      >
                        International
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/international/2+2-study-abroad-program"
                        className="nav-link"
                      >
                       2+2 Study Abroad Program
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/international/study-india"
                        className="nav-link"
                      
                      >
                         Study in India Program
                      </Link>
                    </li>
                    
                    <li className="nav-item">
                      <Link
                        href="/international/dual-degree"
                        className="nav-link"
                       
                      >
                       Dual Degree Program
                      </Link>
                    </li>
                    </ul>
                    <ul className="nav search-cart-bar">
                      <li className="nav-item side-box">
                        <div className="apply-btn">
                          <a
                            href="https://admissions.shooliniuniversity.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Apply Now
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </Styles>
    </>
  );
};

export default StickyMenuTwo;
