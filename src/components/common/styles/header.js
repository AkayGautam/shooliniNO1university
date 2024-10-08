import styled from 'styled-components'
import { colors } from '../elements/elements'
export const Styles = styled.div`
  .top-bar {
    background: ${colors.bg_white};


    .bar-left {
      ul {
        li {
          font-size: 13px;
          color: ${colors.text4};
          padding: 10px 15px;
          margin: 0;
          display: inline-block;

          a {
            font-size: 13px;
            color: ${colors.text4};
            text-decoration: none;

            &:hover {
              color: ${colors.green};
            }
          }

          i {
            font-size: 20px;
            color: ${colors.green};
            vertical-align: bottom;
            margin-right: 5px;
          }

          &:last-child {
          }

          @media (max-width: 991px) {
            border: none;
            padding: 10px 0px;
            &:last-child {
              display: none;
            }
          }
        }
      }
    }

    .bar-right {
      ul.bar-social {
        padding: 10px 15px;

        li {
          a {
            font-size: 14px;
            color: #fff;
            padding: 0px;
            width: 20px;
            display: inline-block;
            text-align: center;
            text-decoration: none;
            &:hover {
              color: #ffffff;
            }
          }

          &:last-child {
            a {
              margin-right: 0;
            }
          }
          a.su_fb {
            background: #372fd8;
            border-radius: 4px;
          }
          a.su_twitter {
            background: #43ace6;
            border-radius: 4px;
          }
          a.su_insta {
            background: #c23098;
            border-radius: 4px;
          }
          a.su_linked {
            background: #0077b5;
            border-radius: 4px;
          }
          a.su_whats {
            background: #25d366;
            border-radius: 4px;
          }
        }

        @media (max-width: 991px) {
          display: none;
        }
      }

      ul.bar-lang {
        padding: 10px 15px;

        li {
          .dropdown {
            .dropdown-item a {
              color: #333;
              font-size: 14px;
            }

            a.dropdown-toggle {
              font-size: 13px;
              color: ${colors.text1} !important;

              img {
                margin-right: 5px;
                max-width: 21px;
              }

              i {
                font-size: 12px;
                margin-left: 3px;
              }

              &::after {
                display: none;
              }

              &:hover {
                cursor: pointer;
                color: ${colors.green};
              }
            }

            ul.dropdown-menu {
              padding: 0;
              margin: 0;
              border: none;
              background: #ffffff;
              border-radius: 5px;
              top: 68% !important;
              left: -16px !important;
              box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);

              li {
                display: block;
                background: transparent;
                border-bottom: 1px solid ${colors.border1};
                padding: 7px 15px;
                color: ${colors.text2};
                cursor: pointer;
                overflow: hidden;

                img {
                  max-width: 21px;
                  margin-right: 5px;
                }

                &:hover {
                  color: ${colors.bg1};
                  font-weight: 500;
                }

                &:last-child {
                  border-bottom: none;
                }
              }
            }
          }
        }

        @media (max-width: 991px) {
          border-right: none;
          padding: 10px 0px;
        }
      }

      ul.bar-login {
        li {
          padding: 10px 15px;
          margin: 0;
          display: inline-block;

          a {
            font-size: 13px;
            color: ${colors.text1};

            i {
              font-size: 20px;
              color: ${colors.green};
              vertical-align: bottom;
              margin-right: 5px;
            }

            &:hover {
              color: #e6e6e6;
            }
          }

          @media (max-width: 991px) {
            border-right: none;
            padding-right: 0;
          }
        }
      }
    }

    @media (max-width: 767px) {
      display: none;
    }
  }
  ul.dropdown_Last {
    position: absolute;
    left: 100%;
    background: #fff;
    width: 100%;
    display: none;
  }
  .navItem_unpos:hover ul.dropdown_Last {
    display: block !important;
    top: 0;
  }
  .main-menu
    .main-menu-box
    .menu-box
    ul.nav.menu-nav
    li.nav-item
    ul.dropdown
    li.nav-item
    a.nav-link
    i {
    position: absolute;
    right: 8px;
    top: 35%;
  }
  .logo-area {
    padding: 0px 0;
    position: relative;
    width: 100%;
    background:#e33535;
    z-index: 9999;
    .logo {
      img {
        @media (max-width: 991px) {
          max-width: 100%;
          margin-top: 4px;
        }
        width: 140px;
      }
    }

    .logo-contact-box {
      .emcontact-box {
        margin-right: 45px;

        .box-icon {
          background: ${colors.green};
          height: 21px;
          text-align: center;
          margin-top: 10px;
          margin-right: 12px;
          position: relative;

          i {
            position: relative;
            z-index: 111;
            font-size: 22px;
            color: #ffffff;
            width: 36px;
            display: inline-block;
            margin-top: -5px;
          }

          &:before {
            content: '';
            position: absolute;
            border-width: 10px 18px;
            border-style: solid;
            border-top-color: transparent;
            border-right-color: transparent;
            border-bottom-color: ${colors.green};
            border-left-color: transparent;
            top: -20px;
            left: 0;
            z-index: 1;
          }

          &:after {
            content: '';
            position: absolute;
            border-width: 10px 18px;
            border-style: solid;
            border-top-color: ${colors.green};
            border-right-color: transparent;
            border-bottom-color: transparent;
            border-left-color: transparent;
            bottom: -20px;
            left: 0;
            z-index: 1;
          }

          @media (max-width: 991px) {
            display: none;
          }
        }

        .box-content {
          p {
            font-size: 13px;
            color: ${colors.text3};
            margin-bottom: -2px;
          }

          span {
            font-size: 17px;
            color: ${colors.black1};
            font-weight: 500;
          }
        }

        @media (max-width: 991px) {
          margin-right: 20px;
        }
      }

      .apply-btn {
        margin-left: 20px;

        a {
          font-size: 13px;
          color: #ffffff;
          background: ${colors.gr_bg};
          display: inline-block;
          width: 110px;
          height: 40px;
          text-align: center;
          text-transform: uppercase;
          font-weight: 500;
          padding: 11px;
          border-radius: 0 5px 5px 0;
          position: relative;

          i {
            position: absolute;
            font-size: 20px;
            left: -40px;
            top: 0;
            padding: 10px;
            width: 40px;
            height: 100%;
            border-radius: 5px 0 0 5px;
            background-color: #ff2023;
          }

          &:hover {
            background: ${colors.gr_bg2};
          }
        }
      }
    }

    @media (max-width: 767px) {
      display: none;
    }
  }

  .main-menu {
    a.nav-link.nav-search {
      font-size: 20px;
      padding: 12px 15px;
    }

    .main-menu-box {
      position: relative;
      z-index: 111;
      height: 100%;
      display: flex;
      justify-content: right;
      align-items: center;

      .menu-box {
        width: 100%;
        ul.nav.menu-nav {
          li.nav-item {
            position: relative;

            a.nav-link {
              font-size: 13px;
              color: #fff;
              text-transform: uppercase;
              font-weight: 500;
              padding: 18px 8px 15px 4px;

              i {
                font-size: 12px;
              }

              &:after {
                content: none;
              }

              &:hover {
                color: ${colors.text5};
              }

              @media (max-width: 991px) {
                padding-right: 10px;
              }
            }

            ul.dropdown {
              position: absolute;
              left: -10px;
              top: 100%;
              min-width: 190px;
              background: #fff;
              text-align: left;
              padding: 0;
              border-radius: 0 0 5px 5px;
              transition: 0.2s ease;
              opacity: 0;
              transform: scaleY(0);
              visibility: hidden;
              z-index: 999;
              transform-origin: center top 0;

              li.nav-item {
                position: relative;

                a.nav-link {
                  font-size: 13px;
                  color: ${colors.text1};
                  padding: 10px 20px;
                  text-transform: capitalize;
                  margin-right: 0;
                  font-weight: 400;
                  border-bottom: 1px solid ${colors.border1};

                  &:hover {
                    color: ${colors.green};

                    i {
                      color: #fff;
                    }
                  }

                  i {
                    float: right;
                    margin-top: 4px;
                  }
                }

                &:last-child {
                  margin-left: 0;

                  a.nav-link {
                    border-bottom: none;
                  }
                }

                ul.dropdown2 {
                  position: absolute;
                  top: 0;
                  left: 100%;
                  min-width: 180px;
                  background: #fff;
                  border: 1px solid ${colors.border1};
                  transition: 0.2s ease;
                  opacity: 0;
                  transform: scaleY(0);
                  visibility: hidden;
                  z-index: 999;
                  transform-origin: center top 0;
                }

                &:hover {
                  ul.dropdown2 {
                    opacity: 1;
                    transform: scaleY(1);
                    visibility: visible;
                  }
                }
              }
            }

            &:hover {
              ul.dropdown {
                opacity: 1;
                transform: scaleY(1);
                visibility: visible;
              }
            }
          }
        }

        ul.search-cart-bar {
          li.search-box {
            i.close-btn {
              position: absolute;
              top: 25px;
              right: -12px;
              font-size: 26px;
              color: ${colors.green};
              cursor: pointer;
            }
          }

          li.cart-box {
            a.nav-cart {
              padding: 18px 0 0 10px;

              i {
                font-size: 20px;
                color: ${colors.border1};
                line-height: 17px;
              }
            }
          }
        }

        @media (max-width: 991px) {
          padding: 0 20px;
        }
      }
    }

    @media (max-width: 767px) {
      display: none;
    }
  }

  @media (max-width: 767px) {
    .mobile-menu-area .mb-topbar {
      display: none !important;
    }

    .mobile-menu-area .mb-logo-area .mb-logo-box .hm-button a#mb-sidebar-btn i {
      font-size: 20px;
      color: #ffffff;
    }
  }

  .menu-nav li:nth-child(last) ul.dropdown {
    position: absolute;
    left: -110px;
  }

  .enqForMob {
    background: #f63030 !important;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    outline: 0;
    border: 0;
    margin: 0;
    border-radius: 0;
    padding: 0;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: middle;
    -moz-appearance: none;
    -webkit-appearance: none;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: inherit;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    min-height: 36px;
    -webkit-transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 50%;
    padding: 0;
    min-width: 0;
    width:45px;
    height: 45px;
    box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
      0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
    color: rgba(0, 0, 0, 0.87);
    color: #fff;
  }

  .enqForMob {
    position: fixed !important;
    right: 10px;
    bottom: 20px;
    font-size: 20px !important;
    z-index: 99;
  }

  @media screen and (min-width: 1024px) {
    .menu-box ul li:nth-child(3) ul.dropdown,
    .menu-box ul li:nth-child(7) ul.dropdown {
      min-width: 300px !important;
    }
  }

  .toggleTopbar {
    display: none;
  }

  @media screen and (max-width: 767px) {
    .topBarShow {
      display: block !important;
      position: absolute;
      z-index: 99;
      width: 60%;
      height: 100%;
      top: 0;
    }
    .toggleTopbar {
      display: block;
    }

    button.toggleTopbar {
      position: absolute;
      right: 10px;
      top: 22px;
      border: 0;
      background: transparent;
      color: #fff;
      font-size: 20px;
    }
    .mb-search-box {
      padding-right: 0px;
      padding-top: 2px;
    }
    .bar-right {
    }
    .bar-right ul li {
      display: block !important;
      width: 100%;
      border-top: 1px solid #eeeeee;
    }
    .top-bar .bar-right ul li {
      padding: 10px 15px;
    }
    .top-bar .bar-right ul.bar-lang {
      border-right: none;
      padding: 0px 0px;
    }
    .top-bar {
      position: fixed;
      z-index: 99;
      left: -1000px;
      background: #fff;
      left: 0px;
      top: 0;
      width: 200px;
      height: 100%;
      transition: all 400ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
    .topBarHide {
      left: -1000px;
      transition: all 400ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
    .topBarShow {
      left: 0 !important;
      transition: all 400ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
    .topBarShow.top-bar .bar-right ul li a {
      font-size: 13px;
      color: #333 !important;
    }
    .top-bar .bar-right ul.bar-lang li .dropdown a.dropdown-toggle {
      color: #333 !important;
    }
  }


  
@media screen and (min-width:768px)
{

.callusNow {
    display:none;
}



} 


@media screen and (max-width:767px)
{

.callusNow {
    display: inline-flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
    padding: 0;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: middle;
    -moz-appearance: none;
    -webkit-appearance: none;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: inherit;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    min-height: 36px;
  border-radius: 50%;
    padding: 0;
    min-width: 0;
    width:45px;
    height: 45px;
    z-index: 1050;
    box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
    color: #fff;
    background-color:#8dc036;
    position: fixed;
    right:5px;
    bottom: 70px;
    font-size: 20px;
}
}


ul.nav.menu-nav li:nth-child(6) a.newSearch {
  display: block;
}
.newSearch {
  position: absolute;
  top: 0;
}

ul.nav.menu-nav li:nth-child(2) ul.dropdown .nav-link {
  display: block;
}

.notification-top-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  line-height: 28px;
  width: 100%;
  background: #1467d8;
  text-align: center;
  color: #FFFFFF;
  font-family: sans-serif;
  font-weight: lighter;
  font-size: 14px;
  z-index: 999;
  padding: 2px 0;
}
.notification-top-bar p {
  padding: 0;
  margin: 0;
  font-weight:500;
}
.notification-top-bar p a {
  padding: 5px 10px;
  border-radius: 3px;
  background: #FFF;
  color: #1ABC9C;
  font-weight: 500;
  text-decoration: none;
}
.notification-top-bar a{
  color:#fff;
  text-decoration:none;
  font-weight:500;
}
.slick-next {
  right: 100px;
}
.slick-prev {
  left: 90px;
}

.notification-top-bar .slick-prev:before {
  background-color: rgba(0,0,0,0) !important;
  opacity: 1 !important;
  top: 0px !important;
}

.notification-top-bar .slick-next:before {
  background-color: rgba(0,0,0,0) !important;
  opacity: 1 !important;
  top: 0px !important;
}
.notification-top-bar button.slick-arrow.slick-prev {
  background: #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  z-index: 9;
}
.notification-top-bar  button.slick-arrow.slick-next {
  background: #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
}
.notification-top-bar .slick-prev:before {
  background-color: rgba(0,0,0,0) !important;
  opacity: 1 !important;
  top: -3px !important;
  left: -4px;
  background-size: 12px !important;
  background-repeat: no-repeat;
}
.notification-top-bar .slick-next:before {
  background-color: rgba(0,0,0,0) !important;
  opacity: 1 !important;
  top: 5px !important;
  left: 4px;
  background-size: 12px !important;
  background-repeat: no-repeat;
}



.apply-btn {
     
  margin-left: 40px;
  position: relative;
  top: 5px;

  a {
      font-size     : 13px;
      color         : #ffffff;
      background    : ${colors.gr_bg};
      display       : inline-block;
      width         : 110px;
      height        : 40px;
      text-align    : center;
      text-transform: uppercase;
      font-weight   : 500;
      padding       : 11px;
      border-radius :5px;
      position: relative;

      i {
          position : absolute;
          font-size: 20px;
          left     : -40px;
          top      : 0;
          padding  : 10px;
          width    : 40px;
          height   : 100%;
          border-radius : 5px 0 0 5px;
          background-color:#d00000;
      }

      &:hover {
          background: ${colors.gr_bg2};
      }
  }

  @media(max-width: 1199px) {
      margin-left: 45px;
  }

  @media(max-width: 991px) {
      display : none;
  }
}



.sticky-icon  {
	z-index:99;
	position:fixed;
	top:25%;
	right:0%;
	width:270px;
	display:flex;
	flex-direction:column;
}  
a.desNone {
  display: none !important;
}
.sticky-icons {
  display: flex;
  align-items: center;
}

button.showcase {
  position: absolute;
  right: 45px;
  top: 42%;
  background-color: rgb(20 103 216);
  color: #ffffff;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  border-bottom-left-radius: 25px;
  border-top-left-radius: 25px;
  border: 0;
  transition:all 0.2s;
  line-height: 17px;
}


@media screen and (min-width:768px)
{
  button.showcase span svg {
    transform: rotateY(180deg) !important;
    transition:all 0.2s;
}
button.bg-salmon span svg {
  transform: rotateY(0deg) !important;
  transition:all 0.2s;
}


  .showcase .Instagram {
    transform: translate(225px,0px) !important;
}

.showcase button.showcase {
  position: absolute;
  right: 0;
}

  a.Instagrams {
    transform: translate(-10px,0px) !important;
}


.sticky-icon a  {
  color:transparent;
	transform:translate(225px,0px);
	text-align:left;
	text-decoration:none;
	text-transform:capitalize;
	padding:10px;
	font-size:14px;
	transition:all 0.4s;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #125395;
}


.sticky-icon a:hover  {
	color:#FFF;
  background: #e33535;
	transform:translate(50px,0px);}	
.sticky-icon a:hover i  {
	transform:rotate(360deg);}
/*.search_icon a:hover i  {
	transform:rotate(360deg);}*/
}
	
  a.Instagram {
    background: rgb(20 103 216);
    padding-left: 12px;
}
.icnName
{
  padding-left:10px;
}

.Google  {
	color:#FFF;}

.sticky-icon a i {
	background-color:#FFF;
	height:40px;
	width:40px;
	color:#000;
	text-align:center;
	line-height:40px;
	border-radius:50%;
	margin-right:20px;
	transition:all 0.2s;
}

.sticky-icon a i.fa-facebook-f  {
	background-color:#FFF;
	color:#2C80D3;}
	

.fas fa-shopping-cart  {
	background-color:#FFF;}	
#myBtn {
	height:50px;
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  text-align:center;
  padding:10px;
  text-align:center;
	line-height:40px;
  border: none;
  outline: none;
  background-color: #1e88e5;
  color: white;
  cursor: pointer;
  border-radius: 50%;
}
.fa-arrow-circle-up  {
	font-size:30px;}

#myBtn:hover {
  background-color: #555;
}			


@media screen and (max-width:767px)
{
 
  a#xd-block span.iconsFile {
    display: none !important;
}
  a#xd-block {
    display: block !important;
    white-space: nowrap;
    text-align: center;
}
  .xd-none {
    display: none !important;
}

  .xs-d-none {
    display: none !important;
}
a#grad_bg2, a#grad_bg2 span {
  background: #fff !important;
  color: #000 !important;
}
a#grad_bg2 {
  border: 1px solid #cecece !important;
}
.bg-salmon2 .xs-design {
  background: linear-gradient(rgb(238,44,60),rgb(218,32,47)) !important;
  padding: 13px 0 !important;
  margin: 5px 5px;
  border-radius: 0.5rem;
}
span.icnName { 
  font-size: 12px !important; 
  font-weight: 600 !important;
}
.bg-salmon2 {
  background: #fff;
  padding: 2px 19px;
}
  .bg-salmon2.sticky-icon.showcase {
    bottom: 0 ;
    transition:all 0.2s;
}
  .bg-salmon2 {
    bottom: 0px ;
    transition:all 0.2s;
}
.bg-salmon2.showcase {
  bottom: -60px !important;
}

  button.showcase {
    position: absolute;
    right: 47%;
    top: -30px;
  }
  button.showcase {
    transform: rotate(90deg);
}

  .sticky-icons {
    flex-direction: column;
}
footer.footer1 {
  margin-bottom: 20px;
}

.sticky-icon {
  flex-direction: row !important;
  width: auto !important;
}
a.Instagram {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
}
.sticky-icon {
  flex-direction: row !important;
  width: auto !important;
  right: auto !important;
  width: 100% !important;
  bottom: 32px;
  top: auto !important;
}
span.icnName {
  color: #fff;
  font-size: 12px;
  padding-left: 0;
}
a.Instagram {
  padding:5px;
}
.marquee--inner a { 
  font-size: 15px !important;
}
.marquee--inner span {
  width: auto !important;
}
}


span.iconsFile {
  color: #fff;
  font-size: 19px;
}

.font-16
{
  font-size:16px;
}
a.Instagram.whatsApp:hover {
  background: #25D366 !important;
}
a.Instagram.whatsApp {
  background: #25D366;
}
.bg-red
{
  background:#ee1e3d !important;
}
a.nav-link.dropdown-toggle.newSearch {
  opacity: 0;
}
ul.subMenus li:after {
  
  background: url(../assets/images/check.png);
  position: absolute;
  left: -15px;
  top: 5px;
  width: 10px;
  height: 10px;
  background-size: 100%;
  opacity:0.6
}
ul.subMenus {
position: relative;
}  
a.LinkBold {
  font-weight: 500 !important;
  font-size: 13px !important;
}
a.viewBtn {
  background: #e52525;
  display: inline-block !important;
  width: auto !important;
  color: #fff !important;
  padding: 8px 30px;
}

@media screen and (min-width:900px)
{


.bdr-right
{
  border-right:1px solid #cecece;
}
.react-tabs h4 {
  text-transform: uppercase;
}
.react-tabs li a:hover {
  color: #e33535 !important;
  font-weight: 500 !important;
}
  .ddCou {
    text-align: center;
    padding-top: 10px;
    margin-top: 10px;
    border-top: 1px solid #cecece;
}
.ddCou h4 a {
  font-weight: 500 !important;
}
  ul.dropdown.dek-wid {
    min-width: 900px !important;
    left: -300px !important;
    padding: 15px !important;
    box-shadow: 0 5px 10px rgba(0,0,0,.2);
    opacity: 0;
    border-radius: 10px !important;
}
.dek-wid h4 {
  font-size: 13px;
}
 
ul.nav.menu-nav li a {
  font-size: 13px;
  line-height: 15px;
  display: block;
  font-weight: 300;
  color: #000;
  transition: all 0.4s ease;
}
 ul.dek-wid li {
  display: block;
  margin-bottom: 8px;
  position:relative;
}
ul.subMenus {
  padding: 0px 0px 0px 0px;
} 
ul.navTabs {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  width: 100%;
  justify-content: space-between;
}
ul.navTabs li {
  width: 25%;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 15px;
  line-height: 2;
}
.react-tabs__tab--selected { 
  border-color: #dee2e6 !important; 
  border-bottom:0px !important;
}
ul.navTabs li {
  border-bottom: 1px solid #cecece;
}
}


@media screen and (max-width:767px)
{

.Instagram.whatsApp {
  position: fixed;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  bottom: 80px;
  left: 10px;
}
a.whatsAAP span.icnName {
  display: none;
}

a.whatsAAP span.iconsFile {
  color: #fff;
  font-size: 32px;
  line-height: 1;
}
}


.flag {
  width: 70px;
}
.topWithFlag {
  display: flex;
  justify-content: space-between;
}

.marquee--inner span {
  width: 100%;
}

.flagANimation span {
  font-weight: 700;
  color: #c70620;
  font-size: 20px;
}
.flagANimation {
  display: flex;
  justify-content: center;
  align-items: center;
}
 
a.regBtn {
  color: #fff;
  font-size: 14px;
  background: red;
  padding: 1px 12px;
  border-radius: 0;
  margin-top: 8px;
  display: inline-block;
  position: absolute;
  right: 0px;
}
.marquee {
  font-size: 19px;
  color: #fff;
  height: 32px;
  overflow: hidden !important;
  bottom: 0; 
  z-index: 99;
  margin: auto;
  position: relative;
}
section.marText {
  background: linear-gradient(90deg, rgba(27, 21, 136, 1) 0%, rgba(13, 13, 181, 1) 51%, rgba(8, 135, 161, 1) 100%);
  position: fixed;
  width: 100%;
  height: 34px;
  bottom: 0;
  z-index: 99;
}
.marquee--inner span {
  color: #fff;
}
.marquee--inner a {
  color: #fff;
  font-size: 17px;
}
.marquee--inner {
  display: block;
  width: 200%;
 
  &:hover {
    animation-play-state: paused;
    color: red;
  }
}
 
@keyframes marquee {
  0% {
    left: 0;
  }
  100% {
    left: -100%;
  }
}

 
`
