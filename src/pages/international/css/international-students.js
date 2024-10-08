import styled from 'styled-components'
import { colors } from '../../../components/common/elements/elements'

const Styles = styled.div`

 .smallG {
  width: 70px !important;
}
.ListingAR ul li:after {
  content: '';
  position: absolute;
  background: #cecece url(../../assets/images/check.png);
  width: 20px;
  height: 20px;
  background-size: 9px;
  background-position: center;
  border-radius: 50%;
  background-repeat: no-repeat;
  left: 0px;
  top: 4px;
}
.ListingAR li {
  position: relative;
  display: block;
  padding-left: 31px;
  line-height: 1.6;
  padding-top: 4px;
}
.resrchTxt.Slide {
  background: #f2072f;
  padding: 30px;
  position: absolute;
  max-width: -webkit-max-content;
  max-width: -moz-max-content;
  max-width: -webkit-max-content;
  max-width: -moz-max-content;
  max-width: max-content;
  bottom: 140px;
  min-height: 130px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 30%;
}
.globalfootprintImage, .pathwayprogramsImage
{
  background:url("../../assets/images/Dual-Degree.jpg") center center no-repeat !important;
  background-size:100% !important;
}
.resForm {
  max-width: 340px;
  margin-left: auto;
  background: #f4f4f4;
  padding: 30px 0 0 0;
  position: relative;
}
.hgContent {
  height: 99%;
  background: #f2072f;
  color: #fff;
  padding: 30px 50px;
  text-align: left;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.hgContent p {
  border-bottom: 1px solid #fff;
  padding: 6px 0;
  margin: 0;
}

  .admission-img {
    position: relative;
    padding-top: 70px;
    padding-bottom: 70px;
    padding-left: 70px;
    z-index: 1;
  }
  .admission-img:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 500px;
    height: 100%;
    border: 20px solid #e41a1a;
    z-index: -1;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
  .admission-content h2 {
    font-size: 45px;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: 700;
    color: #e41a1a;
  }
  .admission-content span {
    font-size: 15px;
    color: #e41a1a;
    font-weight: 600;
    display: block;
    margin-bottom: 10px;
  }
  .admission-content p {
    margin-bottom: 30px;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  .default-btn {
    font-size: 16px;
    color: #fff;
    line-height: 1;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    text-align: center;
    position: relative;
    z-index: 1;
    overflow: hidden;
    display: inline-table;
    padding: 18px 30px;
    font-weight: 600;
    background-color: #e41a1a;
  }
  .course-odf-bg {
    background-color: #fff;
    margin-top: 20px;
    padding: 30px;
  }
  .course-pdf {
    position: relative;
  }
  .course-pdf i {
    position: absolute;
    top: -24px;
    left: 0;
    font-size: 50px;
    color: #e41a1a;
  }
  .course-pdf h3 {
    font-size: 45px;
    margin-bottom: 5px;
    text-transform: uppercase;
    font-weight: 700;
    color: #e41a1a;
  }
  .download-pdf {
    text-align: right;
  }

  .shad-card {
    background: #fff;
    padding: 20px;
    max-width: 980px;
    margin: auto;
    margin-bottom: 60px;
    box-shadow: 0px 0px 15px 0px rgb(0 0 0 / 10%);
  }
  .single-simple-steps {
    padding: 30px;
    margin-bottom: 30px;
    -webkit-transition: all ease 0.5s;
    -webkit-transition: all ease 0.5s;
    transition: all ease 0.5s;
    border: 1px solid #dddddd;
  }
  .single-simple-steps h3 {
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 700;
  }
  p:last-child {
    margin-bottom: 0;
  }
  .section-title h3 {
    font-size: 50px;
    font-weight: 700;
    line-height: 49px;
    text-transform: uppercase;
    margin-bottom: 40px;
    color: #f02f2f;
    font-style: normal;
  }
  .sec-title {
    h2 {
      font-weight: 700;
      font-size: 40px;
      text-transform: revert;
      color: #232323;
      line-height: 1;
      border-bottom: 1px solid red;
      padding: 20px 0;
      margin: 20px 0;
    }
    span {
      color: #ee3032;
    }
  }

  .listCard {
    background: #fff;
    padding: 20px;
    max-width: 980px;
    margin: auto;
    margin-bottom: 60px;
    box-shadow: 0px 0px 15px 0px rgb(0 0 0 / 10%);
  }
  .table td,
  .table th {
    border: 0;
  }
  .listCard table {
    text-align: center;
  }
  .listCard table th {
    font-size: 18px;
    font-weight: 400;
  }

  .listCard th {
    width: 25%;
  }
  .table thead th {
    vertical-align: text-bottom !important;
  }
  .listCard td {
    font-size: 20px;
    font-weight: 700;
  }
  .listCard table tr td:nth-child(1),
  .listCard table tr th:nth-child(1) {
    text-align: left;
  }
  .listCard table tr:nth-child(1) td {
    color: red;
  }
  .tableContent {
    padding: 20px 0;
  }
  .tableContent h4 {
    font-size: 14px;
    margin-bottom: 20px;
    line-height: 1.5;
    font-weight: 500;
  }

  @media screen and (max-width: 767px) {
    .listCard td {
      font-size: 14px;
      font-weight: 700;
    }
    .listCard table th {
      font-size: 15px;
    }
    .sec-title h2 {
      font-weight: 700;
      font-size: 32px;
    }
    #Abroad .slides {
      width: 48.33%;
  }
  .areaforInter,  .areaforInter:after {
    background: #fff !important;
}



  }

  .team-member-area .slick-track {
    width: 100% !important;
  }
  .team-slider .team-item {
    position: relative;
    margin: 0 10px 55px 5px;
  }
  .teamSlider {
    display: flex !important;
    width: 100%;
  }
  .team-member-area .slick-slide {
    width: 100% !important;
  }
  .slick-track {
    margin: 0;
  }
  .userContent p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .shooliniresearch-area {
    background: #fff;
    padding: 50px 0;

    .sec-title h4 {
      text-transform: uppercase;
      color: #3f3c3c;
      font-weight: 500;
    }
    .researchText {
      max-width: 500px;
    }
    .researchText p {
      font-size: 17px;
      margin-top: 30px;
      line-height: 1.7;
    }
    h4.about-title {
      font-size: 28px;
      text-transform: uppercase;
      font-weight: 600;
      color: #474646;
    }
    .applyBtn a {
      background: #ee3032;
      padding: 8px 15px;
      color: #fff !important;
      border-radius: 4px;
      float: right;
      margin-right: 24%;
      margin-top: 30px;
    }

    @media screen and (max-width: 767px) {
      .sec-title h2 {
        font-weight: 700;
        font-size: 32px;
      }
    }
  }

  @media (max-width: 767px) {
    .slick-next {
      right: 2px;
    }

    .teamSlider {
      display: block !important;
    }

    .admission-content h2 {
      font-size: 25px !important;
      margin-top: 20px;
    }
    .download-pdf {
      text-align: center;
      margin-bottom: 20px;
    }

    .about-img {
      width: 100% !important;
      position: inherit !important;
      transform: inherit !important;
      height: auto !important;
    }
    .admission-img {
      position: relative;
      padding: 0px !important;
    }
    .admission-img:after {
      content: none !important;
    }
    .about-content-area {
      margin: 0 !important;
      transform: translateX(0px) !important;
    }
    .about-content-area h3 {
      font-size: 34px !important;
    }
    .ranking-page .about-img {
      position: inherit !important;
      height: auto !important;
      width: 100% !important;
      transform: translateX(0px) !important;
    }
  }

  .ResearchAtGlance-area {
    padding: 50px 0;
    padding-bottom: 0;

    .sec-title h2 {
      font-weight: 700;
      font-size: 48px;
      color: #f02f2f;
      line-height: 1;
      border: 0;
      padding: 0;
      margin: 0;
      text-align: center;
      margin-bottom: 20px;
      text-transform: unset !important;

    }
    .sec-title h4 {
      text-transform: uppercase;
      color: #3f3c3c;
      font-weight: 500;
    }
    .full-icon-box {
      margin-bottom: 3rem;
    }
    .box-title p {
      font-size: 18px;
      font-weight: 500;
      color: #333;
    }
    .box-title h6 {
      font-size: 34px;
      color: #f02f2f;
      font-weight: 700;
      max-width: 290px;
    }
    .smallBoxTtl p {
      font-size: 17px;
      max-width: 260px;
      font-weight: 400;
      color: #333;
    }
    @media (max-width: 989px) {
      .box-title h6 {
        font-size: 22px;
      }
    }
  }

  .team-member-area {
    padding: 63px 0;

    .sec-title {
      h4 {
        line-height: 35px;
        font-weight: 600;
        max-width: 550px;
        margin: auto;
        margin-bottom: 50px;

        @media (max-width: 575px) {
          margin-bottom: 15px;
          font-size: 20px;
        }
      }
    }

    .team-slider {
      position: relative;

      .team-item {
        position: relative;
        margin-bottom: 55px;

        img {
          border-radius: 5px;
        }

        .img-content {
          background: #ffffff;
          box-shadow: 0 10px 18px rgba(0, 0, 0, 0.07);
          position: absolute;
          bottom: -30px;
          left: 10%;
          width: 80%;
          z-index: 1;
          border-radius: 5px;
          padding: 15px 0;

          h5 {
            font-weight: 600;
            margin-bottom: 5px;
          }

          p {
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 5px;
          }

          ul {
            li {
              a {
                i {
                  font-size: 14px;
                  color: #ffffff;
                  width: 33px;
                  height: 33px;
                  border-radius: 50%;
                  padding-top: 10px;
                  transition: all 0.2s ease;
                }

                i.fa-facebook-f {
                  background-color: #4267b2;
                }

                i.fa-twitter {
                  background-color: #1da1f2;
                }

                i.fa-youtube {
                  background-color: #dd1343;
                }
              }
            }
          }
        }
      }

      .slider-dot {
        margin-top: 25px !important;

        .swiper-pagination-bullet {
          width: 22px;
          height: 9px;

          display: inline-block;
          margin: 3px;
          opacity: 1 !important;
          border-radius: 5px;
        }
      }
    }

    @media (max-width: 767px) {
      padding: 25px 0;
    }
  }

  
  .icon-box-area {
    padding-bottom: 40px;

    .full-icon-box {
      position: relative;

      .icon-box {
        width: 100%;
        background: #fff;
        padding: 35px 20px 20px;
        z-index: 9;
        box-shadow: 0 12px 25px rgba(0, 0, 0, 0.07);
        border-radius: 5px;

        .box-icon {
          background: ${colors.bg1};
          height: 36px;
          text-align: center;
          margin-right: 20px;
          position: relative;

          i {
            font-size: 34px;
            color: #ffffff;
            width: 60px;
            display: inline-block;
            position: relative;
            z-index: 111;
            margin-top: -8px;

            @media (max-width: 991px) {
              font-size: 24px;
              width: 45px;
            }

            @media (max-width: 767px) {
              font-size: 34px;
              width: 60px;
            }
          }

          &::before {
            content: '';
            position: absolute;
            border-width: 15px 30px;
            border-style: solid;
            border-top-color: transparent;
            border-right-color: transparent;
            border-bottom-color: ${colors.bg1};
            border-left-color: transparent;
            top: -30px;
            left: 0;
            z-index: 1;

            @media (max-width: 991px) {
              border-width: 12px 23px;
              top: -24px;
            }

            @media (max-width: 767px) {
              border-width: 15px 30px;
              top: -30px;
            }
          }

          &:after {
            content: '';
            position: absolute;
            border-width: 15px 30px;
            border-style: solid;
            border-top-color: ${colors.bg1};
            border-right-color: transparent;
            border-bottom-color: transparent;
            border-left-color: transparent;
            bottom: -30px;
            left: 0;
            z-index: 1;

            @media (max-width: 991px) {
              border-width: 12px 23px;
              bottom: -24px;
            }

            @media (max-width: 767px) {
              border-width: 15px 30px;
              bottom: -30px;
            }
          }

          @media (max-width: 991px) {
            height: 22px;
            margin-right: 10px;
          }

          @media (max-width: 767px) {
            height: 36px;
            margin-right: 20px;
          }
        }

        .box-icon.box1 {
          background: ${colors.red};

          &:before {
            border-bottom-color: ${colors.red};
          }

          &:after {
            border-top-color: ${colors.red};
          }
        }

        .box-icon.box2 {
          background: ${colors.purple};

          &:before {
            border-bottom-color: ${colors.purple};
          }

          &:after {
            border-top-color: ${colors.purple};
          }
        }

        .box-icon.box3 {
          background: ${colors.blue};

          &:before {
            border-bottom-color: ${colors.blue};
          }

          &:after {
            border-top-color: ${colors.blue};
          }
        }

        .smallBoxTtl p {
          margin: 0;
          text-transform: uppercase;
          font-size: 12px;
          color: #666666;
          font-family: 'Poppins';
        }
        .smallBoxTtl {
          display: flex;
          justify-content: right;
          align-items: flex-end;
        }
        .box-title {
          margin-top: -15px;
          width: 100%;

          h6 {
            color: #161515;
            text-transform: uppercase;
            font-weight: 600;
            margin-bottom: 0px;
            font-size: 40px;

            @media (max-width: 991px) {
              font-size: 14px;
              letter-spacing: 0;
            }

            @media (max-width: 767px) {
              font-size: 16px;
              letter-spacing: 0.3px;
            }
          }

          p {
            font-size: 22px;
            color: #333;
            font-weight: 700;
            text-transform: uppercase;
            color: #161515;
            margin: 0;
            line-height: 1;

            @media (max-width: 991px) {
              font-size: 13px;
            }

            @media (max-width: 767px) {
              font-size: 13px !important;
              line-height: 1.2 !important;
              color: #6c6c6c;
            }
          }
        }

        @media (max-width: 991px) {
          padding: 25px 10px 8px;
        }

        @media (max-width: 767px) {
          padding: 15px 15px;
          position: unset;
          margin-bottom: 0px;
          justify-content: center;
          align-items: center;

          .smallBoxTtl p {
            font-size: 12px !important;
            line-height: 1.4 !important;
            text-transform: capitalize;
          }
          .box-title {
            margin-top: 0 !important;
          }
        }
      }
    }

    @media (max-width: 767px) {
      padding: 40px 0 0;
    }
  }

  @media (max-width: 767px) {
    .icon-box-area {
      padding: 0px 0 0;
    }

    .icon-box {
      flex-wrap: wrap;
      height: 100%;
    }
    .full-icon-box {
      height: 100%;
    }
    .xm-2 {
      margin-bottom: 2rem;
    }
  }

  .smallBoxTtl p{
    font-size: 14px !important;
}
.text-red span, .text-red 
{
  color:#e33535 !important;
}
.border-0{
  border:0px !important;
}


.sec-title h2 {
  font-weight: 700;
  font-size: 48px;
  text-transform: uppercase;
  color: #f02f2f;
  line-height: 1;
}
  .campus-tour {
      background: ${colors.bg2};
      padding   : 63px 0 60px;

      .sec-title {
          h4 {
              color        : ${colors.black1};
              line-height  : 35px;
              font-weight  : 600;
              max-width    : 550px;
              margin       : auto;
              margin-bottom: 48px;

              @media(max-width: 575px) {
                  margin-bottom: 15px;
                  font-size: 20px;
              }
          }
      }

      .tour-box {
          border-radius : 5px;
          overflow     : hidden;
          position     : relative;
          margin-bottom: 30px;

          img {
              border-radius : 5px;
              transition : all 0.3s ease;

              &:hover {
                  transform: scale(1.1);
              }

              @media(max-width: 767px) {
                  width : 100%;
              }
          }

          img.__react_modal_image__medium_img {
              border-radius : 0;
          }
      }
      @media(max-width: 767px) {
          padding: 30px 0 25px;
      }
  }

  .blog-inner h4 a {
      font-size: 17px;
      line-height: 26px;
      display: block;
  }
   .courses-slider .slick-slide {
      padding: 0;
  }
  .item {
    margin: 0 15px;
}


.dlab-box.courses-bx {
  background: rgb(255,255,255);
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.1);
  position: relative;
  overflow: hidden;
  border-radius: 10px 10px 0px;
}
h6.dlab-title {
  font-weight: 600;
}

.step-img4 {
  margin-right: -350px;
  margin-left: -35px;
}
.step-img3 {
  margin-left: -350px;
  margin-right: -15px;
}
.pr-5 {
  padding-right: 5rem;
}
section.steps-area2 {
  background-color: #e41a1a;
  overflow: hidden;
}
.animations-08 {
  position: absolute;
  right: 50px;
  top: 250px;
  animation: alltuchtopdown 5s infinite;
  -webkit-animation: alltuchtopdown 5s infinite;
  animation-delay: 0s;
  -webkit-animation-delay: 3s;
}
h6.dlab-title {
  font-size: 22px;
  font-weight: 500;
  line-height: 30px;
  margin-top: 18px;
  margin-bottom: 10px;
}
.dlab-info {
  padding: 5px 23px 30px 25px;
}
.max-70 {
  max-width: 980px;
  margin: auto;
  text-align: center;
}

.steps-area2
{
  position:relative;
  ovreflow:hidden;
}
ul.why-choose__list-item li {
  flex-basis: 23.33%;
  text-align: center;
  display: flex;
  flex-direction: column;
}
ul.why-choose__list-item {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
}
ul.why-choose__list-item li {
  background: #f9f1d8;
  padding: 24px;
  align-items: center;
  margin: 10px 10px 10px 10px;
}
.why-choose__list-item li:nth-child(odd){
  background-color: #ffe6e6;
}

.why-choose__list-item li:nth-child(even) {
  background-color: #efebf4;
}
span.icon i {
  font-size: 30px;
  color: #1467d8;
}
span.icon {
  background: #fff;
  width: 70px;
  height: 70px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-bottom: 12px;
}
section.newslater-area {
  background-color: #125875;
}
.newslater-title {
  display: flex;
}
.newslater-title .icon {
  margin-right: 30px;
}
.newslater-title .text h2 {
  font-size: 40px;
}

.newslater-area h2 {
  color: #fff;
  font-size: 45px;
}
.newslater-area p {
  color: #fff;
  width: 100%;
  margin-bottom: 0px;
}
.pb-60 {
  padding-bottom: 60px;
}

.pt-60 {
  padding-top: 60px;
}

button#send2 {
    font-size: 16px;
    color: #ffffff;
    background: #e41a1a;
    display: inline-block;
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
    border-radius: 5px;
    position: relative;
    line-height: 40px;
    padding: 8px 50px;
}

.contentslider .Heroslider {
  position: relative;
}
.HerosliderText {
  position: absolute;
  top: 30%;
  z-index: 99;
  left: 10%;
}
.contentslider {
  position: relative;
  overflow: hidden;
}
.HerosliderText h1 {
  font-weight: 900;
  font-size: 70px;
  max-width: 60%;
  color: #e41a1a;
  text-shadow: 3px 5px #fff;
}

.introText {
  background: rgb(255, 255, 255);
  padding: 20px;
  max-width: 980px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 15px 0px;
  margin: 50px auto;
}
.joinBtn{ 
font-size: 13px;
color: #ffffff;
background: #e41a1a;
display: inline-block;
height: 40px;
text-align: center;
text-transform: uppercase;
font-weight: 500;
padding: 11px;
border-radius: 5px;
position: relative;
}
button.slick-arrow.slick-next {
  background: #fff;
  height: 39px;
  width: 36px;
  text-align: center;
  color: #fff !important;
}

.stories-area {
  background: url(../../assets/images/bg-testimonial.jpg);
  background-size: 100% 100%;
  padding: 50px 0;
  height:100vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  :after {
      content: "";
      background: linear-gradient( 90deg ,#f02f2f 50%,transparent 50%);
      height: 100%;
      width: 100%;
      position: absolute;
  }
  

  
.hero__quote-animation {
-webkit-animation-duration: 2.5s;
animation-duration: 2.5s;
-webkit-animation-fill-mode: both;
animation-fill-mode: both;
-webkit-animation-iteration-count: infinite;
animation-iteration-count: infinite;
-webkit-animation-name: hero-bounce;
animation-name: hero-bounce;
}

.hero__quote-animation{
-webkit-animation-duration:2.5s;
animation-duration:2.5s;
-webkit-animation-fill-mode:both;
animation-fill-mode:both;
-webkit-animation-iteration-count:infinite;
animation-iteration-count:infinite;
-webkit-animation-name:hero-bounce;
animation-name:hero-bounce
}

@-webkit-keyframes hero-bounce {
0%, 20%, 50%, 80%, to {
-webkit-transform: translateY(0);
transform: translateY(0);
}
40% {
-webkit-transform: translateY(-30px);
transform: translateY(-30px);
}
60% {
-webkit-transform: translateY(-15px);
transform: translateY(-15px);
}
}@keyframes hero-bounce {
0%, 20%, 50%, 80%, to {
-webkit-transform: translateY(0);
transform: translateY(0);
}
40% {
-webkit-transform: translateY(-30px);
transform: translateY(-30px);
}
60% {
-webkit-transform: translateY(-15px);
transform: translateY(-15px);
}
}

  .z-index-9
  {
      z-index: 99;
      position: relative;
  }

   
  @media screen and (max-width:767px)
  {
      background: url(../../assets/images/bg-testimonial-mob.jpg) !important;
      background-size:100% 100% !important;
  }

  button.slick-arrow.slick-prev {
      display: none !important;
  }

.sec-title h2 {
font-weight: 700;
font-size: 58px;
text-transform: uppercase;
color: #fff;
line-height: 1;
}
.sec-title h4 {
text-transform: uppercase;
color: #3f3c3c;
font-weight: 500;
}
.researchText {
  max-width: 500px;
}
.researchText p {
  font-size: 17px;
  margin-top: 30px;
  line-height: 1.7;
}
h4.about-title {
  font-size: 28px;
  text-transform: uppercase;
  font-weight: 600;
  color: #474646;
}
.applyBtn a {
  background: #ee3032;
  padding: 8px 15px;
  color: #fff !important;
  border-radius: 4px;
  float: right;
  margin-right: 24%;
  margin-top: 30px;
}
.StoriesData {
  position: relative;
  z-index: 9;
  max-width: 80%;
  padding-left: 20px;
  color: #fff;
  padding-bottom: 30px;
  border-bottom: 2px solid #fff;
}
.slick-next:before {
  font-size: 50px !important;
}            
.StoriesData h4 {
  font-size: 42px;
  font-weight: 700;
  color: #fff;
}
.StoriesData p {
  font-size: 25px;
  font-weight: 500;
  margin-top: 30px;
  line-height: 1.3;
}
a.iconArr {
  position: absolute;
  z-index: 9;
  color: #fff;
  font-size: 40px;
  right: 20%;
  bottom: 0;
}

@media screen and (max-width:767px)
{
  .sec-title h2 {
      font-size: 38px;
      margin-top: 40px;
  }
  .stories-area:after {
      content:none !important;   
    }
    .stories-area {
      background-size: cover;
      padding: 50px 0;
      height: 100%;
    }
     
}

}
.bg-area2{
background: url(../../assets/images/st2.jpg) !important;
}
.bg-area2:after
{
background: url(../../assets/images/story.jpg) ;
background-repeat: no-repeat;
background-size: 50%;
background-position: right;
}





.stories-area2 {
  background: url(../../assets/images/bg-testimonial.jpg);
  background-size: 100% 100%;
  padding: 50px 0;
  height:100vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  :after {
      content: "";
      background: linear-gradient( 90deg ,#f02f2f 50%,transparent 50%);
      height: 100%;
      width: 100%;
      position: absolute;
  }
  

  
.hero__quote-animation {
-webkit-animation-duration: 2.5s;
animation-duration: 2.5s;
-webkit-animation-fill-mode: both;
animation-fill-mode: both;
-webkit-animation-iteration-count: infinite;
animation-iteration-count: infinite;
-webkit-animation-name: hero-bounce;
animation-name: hero-bounce;
}

.hero__quote-animation{
-webkit-animation-duration:2.5s;
animation-duration:2.5s;
-webkit-animation-fill-mode:both;
animation-fill-mode:both;
-webkit-animation-iteration-count:infinite;
animation-iteration-count:infinite;
-webkit-animation-name:hero-bounce;
animation-name:hero-bounce
}

@-webkit-keyframes hero-bounce {
0%, 20%, 50%, 80%, to {
-webkit-transform: translateY(0);
transform: translateY(0);
}
40% {
-webkit-transform: translateY(-30px);
transform: translateY(-30px);
}
60% {
-webkit-transform: translateY(-15px);
transform: translateY(-15px);
}
}@keyframes hero-bounce {
0%, 20%, 50%, 80%, to {
-webkit-transform: translateY(0);
transform: translateY(0);
}
40% {
-webkit-transform: translateY(-30px);
transform: translateY(-30px);
}
60% {
-webkit-transform: translateY(-15px);
transform: translateY(-15px);
}
}

  .z-index-9
  {
      z-index: 99;
      position: relative;
  }

   
  @media screen and (max-width:767px)
  {
      background: url(../../assets/images/bg-testimonial-mob.jpg) !important;
      background-size:100% 100% !important;
  }

  button.slick-arrow.slick-prev {
      display: none !important;
  }

.sec-title h2 {
font-weight: 700;
font-size: 58px;
text-transform: uppercase;
color: #fff;
line-height: 1;
}
.sec-title h4 {
text-transform: uppercase;
color: #3f3c3c;
font-weight: 500;
}
.researchText {
  max-width: 500px;
}
.researchText p {
  font-size: 17px;
  margin-top: 30px;
  line-height: 1.7;
}
h4.about-title {
  font-size: 28px;
  text-transform: uppercase;
  font-weight: 600;
  color: #474646;
}
.applyBtn a {
  background: #ee3032;
  padding: 8px 15px;
  color: #fff !important;
  border-radius: 4px;
  float: right;
  margin-right: 24%;
  margin-top: 30px;
}
.StoriesData {
  position: relative;
  z-index: 9;
  max-width: 80%;
  padding-left: 20px;
  color: #fff;
  padding-bottom: 30px;
  border-bottom: 2px solid #fff;
}
.slick-next:before {
  font-size: 50px !important;
}            
.StoriesData h4 {
  font-size: 42px;
  font-weight: 700;
  color: #fff;
}
.StoriesData p {
  font-size: 25px;
  font-weight: 500;
  margin-top: 30px;
  line-height: 1.3;
}
a.iconArr {
  position: absolute;
  z-index: 9;
  color: #fff;
  font-size: 40px;
  right: 20%;
  bottom: 0;
}

@media screen and (max-width:767px)
{
  .sec-title h2 {
      font-size: 38px;
      margin-top: 40px;
  }
  .stories-area2:after {
      content:none !important;   
    }
    .stories-area2 {
      background-size: cover;
      padding: 50px 0;
      height: 100%;
    }
     
}

}
.bg-area2{
background: url(../../assets/images/st2.jpg) !important;
}
.bg-area2:after
{
background: url(../../assets/images/story.jpg) ;
background-repeat: no-repeat;
background-size: 50%;
background-position: right;
}


#Abroad .card-box {
  background: rgb(255, 255, 255);
  padding: 30px;
  border-radius: 15px;
  height: auto;
}

#Abroad {
  background: rgb(245, 245, 247);
  padding: 40px 0px;
}
.slides img {
  width: 100%;
  padding: 10px;
  border: 1px solid rgb(246, 246, 246);
}
#Abroad .slides {
  width: 33.33%;
}
.logosMax .slides {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 7px;
  background: rgb(255, 255, 255);
  margin-bottom: 5px;
  -webkit-box-pack: center;
  justify-content: center;
}
.slide-track {
  display: flex;
  flex-wrap: wrap;
}
.logosMax {
  width: 100%;
  -webkit-box-pack: center;
  justify-content: center;
}
.twoPtwo {
  border-top: 10px solid rgb(228, 26, 26);
  border-bottom: 4px solid rgb(228, 26, 26);
}
.card-box h3 {
  margin: 0px 0px 10px;
  font-family: CircularStd;
  font-weight: 700;
  font-size: 23px;
  color: rgb(0, 0, 0);
}
.pagetitle h2 {
  font-weight: 700;
  font-size: 40px;
  position: relative;
}

.hgContents p{
margin:0px !important;
}


section.stories-area.differetImage, section.stories-area.differetImage:after {
  background:#e33535!important;
  height: auto !important;
}
.stories-area .StoriesData h4 {
  font-size: 32px;
}
.stories-area .StoriesData {
  max-width: 100%;
  padding-left: 0;
  margin-top: 20px;
}
.card-box {
  background: rgb(255, 255, 255);
  padding: 30px;
  border-radius: 15px;
  height: 100%;
}
.cardImage {
  position: relative;
  max-height: 230px;
  overflow: hidden;
}
.slick-slide img {
  display: block;
}
section#Stories {
  padding: 20px 0px !important;
}
#Stories .card-box {
  height: auto;
}
#Stories .card-box h3 {
  font-size: 18px;
}
#Stories .card-box p {
  display: -webkit-box;

  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 14px !important;
  line-height: 1.6 !important;
}
section#Stories {
  background: rgb(245, 245, 247);
  padding: 70px 0px;
}
.card-box {
  background: rgb(255, 255, 255);
  padding: 30px;
  border-radius: 15px;
  height: 100%;
}
h3.title-default a {
  color: #000;
}
.max-800 {
  max-width: 980px;
  margin: auto;
  text-align: center;
}
.max-800 h2 {
  border: 0 !important;
}
.areaforInter {
  background: url(../../assets/images/bg-testimonial2.jpg) !important;
}
.differetImage
{
  background: url(../../assets/images/bg-testimonial3.jpg) !important;
}
.card-box {
  background: rgb(255, 255, 255);
  padding: 30px;
  border-radius: 15px;
  height: 100%;
}
.StoriesData h4 {
  font-weight: 700;
  font-size: 23px;
  color: rgb(0, 0, 0);
  margin: 0px 0px 10px;
}

.logosMax {
  width: 100%;
  -webkit-box-pack: center;
  justify-content: center;
}
.slide-track {
  display: flex;
  flex-wrap: wrap;
}
#Abroad .slides {
  width: 33.33%;
}

a#send2 {
  background: #fff;
}
section.newslater-area {
  background-color: #e41a1a;
}
.step-img4 img {
  width: 100%;
}

.bg-reds {
  background: rgb(228, 26, 26);
  color: rgb(255, 255, 255);
}
section.student-voices {
  background: rgb(245, 245, 247);
  padding: 40px 0px;
}
.card-box h5 {
  font-weight: 700;
}
.dlab-media {
  max-height: 210px;
  overflow: hidden;
}

@media screen and (min-width:768px)
{
  section.icon-box-area {
    position: absolute;
    width: 100%;
    bottom: -20px;
}
}

@media screen and (max-width:767px)
{
.slider-table { 
  transform: scale(.9) !important;
}
.resForm {
  max-width: 100% !important;
}
}


.text-center.nainBtn a {
  font-size: 13px;
  color: #ffffff;
  background: #e41a1a;
  display: inline-block;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  padding: 15px 30px;
  border-radius: 5px;
  position: relative;
}

.hgContents ul li {
  font-size: 1rem !important;
  font-family: 'Poppins';
}


.acordianFaq button {
  background: rgb(255, 255, 255);
  border-width: 0px 0px 1px;
  border-top-style: initial;
  border-right-style: initial;
  border-left-style: initial;
  border-top-color: initial;
  border-right-color: initial;
  border-left-color: initial;
  border-image: initial;
  width: 100%;
  text-align: left;
  margin-bottom: 10px;
  border-bottom-style: solid;
  border-bottom-color: rgb(206, 206, 206);
}
.accordion-title {
  font-weight: 700;
  display: block;
  font-size: 18px !important;
  padding: 10px 20px !important;
}
.card-box {
  background: rgb(255, 255, 255);
  padding: 30px;
  border-radius: 15px;
  height: 100%;
}
.pagetitle h2 {
  font-weight: 700;
  font-size: 40px;
  position: relative;
}
.accordion-body {
  font-size: 14px;
  padding: 10px 20px;
  font-family: Poppins;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px 0px !important;
}
.accordion-body p {
  font-size: 14px !important;
}
ol, ul {
  padding-left: 0;
}


.tabsAppen {
  padding: 30px;
  margin: 40px 0;
  box-shadow: 0px 0px 15px -4px rgba(0, 0, 0, 0.2);
}
.tabsAppen ul.react-tabs__tab-list li {
  font-weight: 700;
  text-transform: uppercase;
  background: #f6f6f6;
  padding: 10px 30px;
}
.tabsAppen table.table.table-striped thead {
  background: #cecece;
}
ul.react-tabs__tab-list {
  margin-bottom: 0;
}

ul.rageCourses li {
  width: 50%;
}
ul.rageCourses {
  display: flex;
  flex-wrap: wrap;
  padding-left: 20px;
}

.redesign2 {
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px 0px;
  background-color: rgb(255, 255, 255);
  width: 100%;
  padding: 15px;
  position: relative;
  margin: 15px 0px;
}
.redesign2 {
  display: flex;
  align-items: flex-start; 
}
.redesign2 .cardImage {
  height: 110px;
  width: 90px;
  flex-shrink: 0;
  background-size: cover !important;
  background-position: center center !important;
  background-repeat: no-repeat !important;
}


.pl-3{ 
    padding-left: 15px;
}







`

export default Styles
