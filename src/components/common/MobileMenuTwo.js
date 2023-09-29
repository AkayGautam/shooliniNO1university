/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { Styles } from "./styles/mobilemenu";
import Link from "next/link";
import Image from "next/legacy/image";
import Search from "./Search";
import SearchResearcher from "../SearchResearcher";

const MobileMenuTwo = ({ links }) => {
  const [visible, setVisible] = useState(false);
  const [opened, setOpened] = useState(false);
  const [Data, setData] = useState([]);
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState(null);

  useEffect(() => {
    const hmBtn = window.document.getElementById("mb-sidebar-btn");

    if (hmBtn) {
      const mdSidebarOverlay =
        window.document.getElementById("mb-sidebar-overlay");
      const mdSidebarBody = window.document.getElementById("mb-sidebar-body");
      const mdSidebarExit = window.document.getElementById("close-mb-sidebar");

      hmBtn.addEventListener("click", function (e) {
        e.preventDefault();
      });
    }

    const menuButton = document.querySelectorAll(".mb-menu-button");
    menuButton.forEach((button) => {
      button.addEventListener("click", () => {
        button.classList.toggle("active");
        const content = button.nextElementSibling;

        if (button.classList.contains("active")) {
          content.className = "mb-menu-content show";
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          content.className = "mb-menu-content";
          content.style.maxHeight = "0";
        }
      });
    });
  });

  const toggleMenu = () => {
    setVisible(!visible);
    setOpened(!opened);
  };

  const searchHandler = async (e) => {
    console.log(searchTerm);
    e.preventDefault();
  };

  return (
    <>
      <Styles>
        {/* Mobile Menu */}
        <section className="mobile-menu-area">
          <Container>
            <Row>
              <Col md="0" sm="12">
                <div className="mb-topbar d-flex justify-content-between">
                  <div className="topbar-item">
                    <p>
                      <i className="las la-phone"></i>+1 (396) 486 4709
                    </p>
                  </div>
                  
                </div>
                <div className="mb-logo-area d-flex justify-content-between">
                  <div className="mb-logo-box d-flex">
                    <div className="hm-button" onClick={toggleMenu}>
                      <a href={"/"} id="mb-sidebar-btn">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                      </a>
                    </div>

                    <div className="mb-logo">
                      <Link href={"/"}>
                        <Image
                          src={"/assets/images/f-logo.png"}
                          width={100}
                          height={50}
                          alt="logo"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="mb-search-box">

                    <div className="searchMobile">
                      <SearchResearcher />
                    </div>

                    {/* <form action="#">
                      <input
                        type="text"
                        name="search"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        autoComplete="off"
                        placeholder="Search Here"
                      />
                      
                     
                      {/* <button onClick={searchHandler} type="submit">
                       
                        <i className="las la-search"></i>
                      </button> 
                    </form> */}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Mobile Menu Sidebar */}
        <section
          className={`mb-sidebar ${opened ? "opened" : ""}`}
          id="mb-sidebar-body"
        >
          <div className="mb-sidebar-heading d-flex justify-content-between">
            <div>
              <h5>Menu</h5>
            </div>
            <div></div>
          </div>
          <div className="mb-sidebar-menu mobilemenu2">
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
          </div>
        </section>
        <div
          className={`mb-sidebar-overlay ${visible ? " visible" : ""}`}
          id="mb-sidebar-overlay"
          onClick={toggleMenu}
        ></div>

        
      </Styles>
    </>
  );
};

export default MobileMenuTwo;
