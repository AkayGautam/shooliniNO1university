import styled from 'styled-components'
import { colors } from '../../../components/common/elements/elements'

const Styless = styled.div`

h1.display-text {
  font-size:90px;
  text-transform: uppercase;
  font-weight: 800;
  line-height: 1;
  color:#fff;
  font-family: 'Gilroy' !important;

}
section.bannerLp {
  background: url(assets/images/lpBanner.jpg);
  padding:100px 0px !important;
}
.rankLine {
  font-weight: 700;
  font-size: 28px;
  text-align: center;
  border: 3px solid #000;
  margin: 20px 0;
}
.rankSide {
  display: flex;
}
.number {
  font-size: 110px;
  font-weight: 900;
  line-height: 0.6;
}
.numbrs-text h4 {
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 0;
  font-family: 'Gilroy';
}
h4.otherRank {
  font-size: 40px !important;
  text-transform: uppercase;
  font-weight: 700;
  font-family: 'Gilroy' !important;
}
section {
  background: #f5f2ed;
}
.titlePage h2 {
  font-weight: 900;
  color: #fb0018;
  margin: 0;
  text-transform: uppercase;
  font-family: 'Gilroy' !important;
}
.titlePage p {
  font-weight: 600;
  font-size: 20px !important ;
  margin-top: 7px;
}
.titlePage {
  position: relative;
  margin-bottom: 30px;
  font-family: 'Gilroy' !important;
}
.titlePage:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -17px;
  background: #fb0018;
  height: 4px;
  width: 80px;
}
.md-text
  {
    font-size: 20px !important;
    line-height: 1.5 !important;
    font-family: 'Gilroy' !important;
}
.custom-flex {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
}
h2.bestBuck {
  position: absolute;
  top: 70px;
  left: 80px;
  font-size: 70px;
  text-transform: uppercase;
  font-weight: 800;
  color: #fff;
  line-height: 1;
}
.titlePage h2 {
  margin-top: 12px !important;
}
section.logo-area.main-menu {
  background: transparent !important;
  position: absolute;
  width: 100%;
  top: 0;
}
.allFaculty .allFac-Card {
  padding: 15px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 8px 0px;
  border: 1px solid transparent;
  height: 100%;
  width: 288px;
  background-color: rgb(255, 255, 255);
  transition: all 0.3s ease-out 0s;
  margin: 10px 0px;
}
.fac-mems .fac-img {
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
}
.fac-list {
  padding-left: 10px;
  padding-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: start;
}

.testimonial{
  margin: 0 20px 40px;
}
.testimonial .testimonial-content{
  padding: 35px 25px 35px 50px;
  margin-bottom: 15px;
  background: #f9f9f9;
  border: 1px solid #f0f0f0;
  position: relative;
}
.testimonial .testimonial-content:after{
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  background: #e7e7e7;
  position: absolute;
  bottom: -10px;
  left: 22px;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  border: 1px solid #f0f0f0;
  z-index: -1;
}
.testimonial-content .testimonial-icon{
  width: 50px;
  height: 45px;
  background: #ff4242;
  text-align: center;
  font-size: 22px;
  color: #fff;
  line-height: 42px;
  position: absolute;
  top: 37px;
  left: -19px;
}
.testimonial-content .testimonial-icon:before{
  content: "";
  border-bottom: 16px solid #e41212;
  border-left: 18px solid transparent;
  position: absolute;
  top: -16px;
  left: 1px;
}
.testimonial .description{
  font-size: 15px;
  font-style: italic;
  color: #8a8a8a;
  line-height: 23px;
  margin: 0;
}
.testimonial .title{
  display: block;
  font-size: 18px;
  font-weight: 700;
  color: #525252;
  text-transform: capitalize;
  letter-spacing: 1px;
  margin: 0 0 5px 0;
}
.testimonial .post{
  display: block;
  font-size: 14px;
  color: #ff4242;
}

// form 

.form-btn,
.form-btn-cancel,
.form-btn-error {
    background: transparent;
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
    border: 1px solid transparent;
    padding: 5px 24px;
    margin-top: 2.25rem;
    position: relative;
    z-index: 0;
    transition: transform 0.28s ease;
    will-change: transform;
}

.form-btn::before,
.form-btn::after,
.form-btn-cancel::before,
.form-btn-cancel::after,
.form-btn-error::before,
.form-btn-error::after {
    position: absolute;
    content: "";
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
}

button.form-btn {
    display: block;
    max-width: 100%;
    background: #fb0018;
    color: #fff;
    padding: 12px 15px;
    text-align: center;
    font-size: 22px;
    box-shadow:none;
    border-radius: 5px;
}

.form-btn::after,
.form-btn-cancel::after,
.form-btn-error::after {
    background: #e91e63;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.28s ease;
    will-change: opacity;
}
button#form-submit-button {
  font-weight: 700;
  text-transform: uppercase;
}
.form-btn:focus,
.form-btn-cancel:focus,
.form-btn-error:focus {
    outline: none;
}

.form-btn:focus::after,
.form-btn:hover::after,
.form-btn-cancel:focus::after,
.form-btn-cancel:hover::after,
.form-btn-error:focus::after,
.form-btn-error:hover::after {
    opacity: 0.3;
}

.form-btn:active,
.form-btn-cancel:active,
.form-btn-error:active {
    transform: translateY(1px);
}

.form-btn-error::before {
    background: #d9534f;
}

.form-btn-cancel {
    transition: color 0.28s ease, transform 0.28s ease;
    color: #b52b27;
    border-color: currentColor;
    will-change: color, transform;
}

.form-btn-cancel.-nooutline {
    border-color: transparent;
}

.form-btn-cancel::before {
    background: #b52b27;
    opacity: 0;
    transition: opacity 0.28s ease;
    will-change: opacity;
}

.form-btn-cancel::after {
    display: none;
}

.form-btn-cancel:focus,
.form-btn-cancel:hover {
    color: #fff;
}

.form-btn-cancel:focus::before,
.form-btn-cancel:hover::before {
    opacity: 1;
}

.form-btn-block {
    display: block;
    width: 100%;
    padding: 5px;
}

.form-checkbox,
.form-radio {
    position: relative;
    margin-top: 2.25rem;
    margin-bottom: 2.25rem;
    text-align: left;
}

.form-checkbox-inline .form-checkbox-label,
.form-radio-inline .form-radio-label {
    display: inline-block;
    margin-right: 1rem;
}

.form-checkbox-legend,
.form-radio-legend {
    margin: 0 0 0.125rem 0;
    font-weight: 500;
    font-size: 1rem;
    color: #333;
}

.form-checkbox-label,
.form-radio-label {
    position: relative;
    cursor: pointer;
    padding-left: 1.5rem;
    text-align: left;
    color: #9a9a9a;
    margin-bottom: 0.5rem;
    font-family: poppins;
    font-size: 15px;
}

.form-checkbox-label:hover i,
.form-radio-label:hover i {
    color: #337ab7;
}

.form-checkbox-label span,
.form-radio-label span {
    display: block;
}

.form-checkbox-label input,
.form-radio-label input {
    width: auto;
    opacity: 0.0001;
    position: absolute;
    left: 0.25rem;
    top: 0.25rem;
    margin: 0;
    padding: 0;
}

.form-checkbox-button {
    position: absolute;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    display: block;
    color: #999;
    left: 0;
    top: 0.25rem;
    width: 1rem;
    height: 1rem;
    z-index: 0;
    border: 0.125rem solid currentColor;
    border-radius: 0.0625rem;
    transition: color 0.28s ease;
    will-change: color;
}

.form-checkbox-button::before,
.form-checkbox-button::after {
    position: absolute;
    height: 0;
    width: 0.2rem;
    background-color: #e91e63;
    display: block;
    transform-origin: left top;
    border-radius: 0.25rem;
    content: "";
    transition: opacity 0.28s ease, height 0s linear 0.28s;
    opacity: 0;
    will-change: opacity, height;
}

.form-checkbox-button::before {
    top: 0.65rem;
    left: 0.38rem;
    transform: rotate(-135deg);
    box-shadow: 0 0 0 0.0625rem #fff;
}

.form-checkbox-button::after {
    top: 0.3rem;
    left: 0;
    transform: rotate(-45deg);
}

.form-checkbox-field:checked~.form-checkbox-button {
    color: #e91e63;
}

.form-checkbox-field:checked~.form-checkbox-button::after,
.form-checkbox-field:checked~.form-checkbox-button::before {
    opacity: 1;
    transition: height 0.28s ease;
}

.form-checkbox-field:checked~.form-checkbox-button::after {
    height: 0.5rem;
}

.form-checkbox-field:checked~.form-checkbox-button::before {
    height: 1.2rem;
    transition-delay: 0.28s;
}

.form-radio-button {
    position: absolute;
    left: 0;
    cursor: pointer;
    display: block;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: #999;
}

.form-radio-button::before,
.form-radio-button::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    margin: 0.25rem;
    width: 1rem;
    height: 1rem;
    transition: transform 0.28s ease, color 0.28s ease;
    border-radius: 50%;
    border: 0.125rem solid currentColor;
    will-change: transform, color;
} 

.form-radio-button::after {
    transform: scale(0);
    background-color: #337ab7;
    border-color: #337ab7;
}

.form-radio-field:checked~.form-radio-button::after {
    transform: scale(0.5);
}

.form-radio-field:checked~.form-radio-button::before {
    color: #337ab7;
}

.form-has-error .form-checkbox-button,
.form-has-error .form-radio-button {
    color: #d9534f;
}


.form-actions {
    position: relative;
    display: -ms-flexbox;
    display: flex;
}

.form-actions .form-btn-cancel {
    -ms-flex-order: -1;
    order: -1;
}

.form-actions::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background: #999;
    opacity: 0.3;
}

.form-actions>* {
    -ms-flex: 1;
    flex: 1;
    margin-top: 0;
}

.form-fieldset {
    border: 0;
}

.form-fieldset+.form-fieldset {
    margin-top: 15px;
}

.form-legend {
    padding: 1em 0 0;
    margin: 0 0 -0.5em;
    font-size: 1.5rem;
    text-align: center;
}

.form-legend+p {
    margin-top: 1rem;
}

.form-element {
    position: relative;
    margin-top: 2.25rem;
    margin-bottom: 2.25rem;
    text-align: left;
}

.form-element-hint {
    font-weight: 400;
    font-size: 0.6875rem;
    color: #a6a6a6;
    display: block;
}

.form-element-bar {
    position: relative;
    height: 1px;
    background: #e7e7e7;
    display: block;
}

.form-element-bar::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background:linear-gradient(to right,#f63030 0%,#e33535 100%);
    height: 2px;
    display: block;
    transform: rotateY(90deg);
    transition: transform 0.28s ease;
    will-change: transform;
}

.form-element-label {
    position: absolute;
    top: 0.75rem;
    line-height: 1.5rem;
    pointer-events: none;
    padding-left: 0.125rem;
    z-index: 1;
    font-size: 1rem;
    font-weight: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    color: #a6a6a6;
    transform: translateY(-50%);
    transform-origin: left center;
    transition: transform 0.28s ease, color 0.28s linear, opacity 0.28s linear;
    will-change: transform, color, opacity;
}

.form-element-field {
    outline: none;
    height: 2rem;
    display: block;
    background: none;
    padding: 0.125rem 0.125rem 0.0625rem;
    font-size: 1rem;
    border: 0 solid transparent;
    line-height: 1.5;
    width: 100%;
    color: #000;
    box-shadow: none;
    opacity: 0.001;
    transition: opacity 0.28s ease;
    will-change: opacity;
}

.form-element-field:-ms-input-placeholder {
    color: #a6a6a6;
    transform: scale(0.9);
    transform-origin: left top;
}

.form-element-field::placeholder {
    color: #a6a6a6;
    transform: scale(0.9);
    transform-origin: left top;
}

.form-element-field:focus~.form-element-bar::after {
    transform: rotateY(0deg);
}

.form-element-field:focus~.form-element-label {
    color: #ff2a3c;
}

.form-element-field.-hasvalue,
.form-element-field:focus {
    opacity: 1;
}

label.form-element-label {
    font-family: poppins;
    font-weight: 300;
}

.form-element-field.-hasvalue~.form-element-label,
.form-element-field:focus~.form-element-label {
    transform: translateY(-100%) translateY(-0.5em) translateY(-2px) scale(0.9);
    cursor: pointer;
    pointer-events: auto;
}

.form-has-error .form-element-label.form-element-label,
.form-has-error .form-element-hint {
    color: #d9534f;
}

.form-has-error .form-element-bar,
.form-has-error .form-element-bar::after {
    background: #d9534f;
}

.form-is-success .form-element-label.form-element-label,
.form-is-success .form-element-hint {
    color: #259337;
}

.form-is-success .form-element-bar::after {
    background: #259337;
}

input.form-element-field:not(:placeholder-shown),
textarea.form-element-field:not(:placeholder-shown) {
    opacity: 1;
}

input.form-element-field:not(:placeholder-shown)~.form-element-label,
textarea.form-element-field:not(:placeholder-shown)~.form-element-label {
    transform: translateY(-100%) translateY(-0.5em) translateY(-2px) scale(0.9);
    cursor: pointer;
    pointer-events: auto;
}
.card-box {
  background: #fff;
  padding: 40px 50px;
  border-radius: 10px;
}
h3.title-red {
  font-weight: 700;
  color: #f4061e;
  text-transform: uppercase;
}

// form


@media screen and (max-width:767px)
{

  .card-box
  {
    background:rgb(244 244 244) !important;
  }

  .card-box {
    margin-top: 20px;
    padding: 20px 20px;
}
.testimonial-content {
  padding-bottom: 0 !important;
}
  h1.display-text {
    font-size: 50px; 
}
.custom-d-none
{
  display:none;
}
h2.bestBuck { 
  top: 50px;
  left: 50px;
  font-size: 40px; 
}
.right-card {
  margin-top: 50px;
}
.rankLine { 
  font-size: 20px; 
}
.numbrs-text h4 { 
  font-size: 16px; 
}
.number {
  font-size: 90px; 
}



}





  .about-page {
    .icon-box-area {
      padding-bottom: 72px;
      .full-icon-box {
        .icon-box {
          position: inherit;
          top: 0;
          left: 0;
          width: unset;
        }
      }

      @media (max-width: 767px) {
        padding: 0 0 10px;
      }
    }
  }

  .section-title {
    margin-bottom: 40px;
  }
  .section-title h4 {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 20px;
    position: relative;
    padding-left: 60px;
    margin-bottom: 15px;
    display: inline-block;
    color: #353858;
    font-style: normal;
  }
  .section-title h4:before {
    background: #f26522;
    height: 2px;
    width: 45px;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
  }
  .section-title h3 {
    font-size: 50px;
    font-weight: 700;
    line-height: 49px;
    text-transform: uppercase;
    margin-bottom: 20px;
    color: #f02f2f;
    font-style: normal;
  }
  .section-title p {
    font-family: Poppins, sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    color: #656970;
  }
  .about-us {
    padding: 78px 0 25px;

    .aboutHrng {
      position: absolute;
      width: 100%;
      bottom: 0;
      background: rgba(255, 255, 255, 0.8);
      padding: 10px;
      color: #e41a1a;

      h3 {
        font-weight: 900;
        margin: 0;
      }
      p {
        margin: 0;
        font-weight: 700;
        color: #333;
      }
    }

    .about-image {
      position: relative;

      img.main-img {
        width: 100%;
        border-radius: 5px;

        @media (max-width: 767px) {
          display: none;
        }
      }

      img.pattern-img {
        position: absolute;
        top: 100%;
        left: 0;

        @media (max-width: 1199px) {
          max-width: 100%;
        }

        @media (max-width: 767px) {
          display: none;
        }
      }

      .video-player {
        position: absolute;
        bottom: -83px;
        right: 0;
        width: 205px;
        height: 255px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 5px;

        &::before {
          position: absolute;
          content: '';
          background-color: rgba(0, 0, 0, 0.2);
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          border-radius: 5px;
        }

        button.play-button {
          position: absolute;
          z-index: 10;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          box-sizing: content-box;
          display: block;
          width: 32px;
          height: 44px;
          border-radius: 50%;

          i {
            position: relative;
            font-size: 40px;
            color: ${colors.bg1};
            z-index: 11;
            padding-top: 2px;
            margin-left: -2px;
          }

          &::before {
            content: '';
            position: absolute;
            z-index: 0;
            left: 50%;
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
            display: block;
            width: 70px;
            height: 70px;
            background: #ffffff;
            border-radius: 50%;
            animation: pulse-border 1500ms ease-out infinite;
          }

          &:after {
            content: '';
            position: absolute;
            z-index: 1;
            left: 50%;
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
            display: block;
            width: 70px;
            height: 70px;
            background: #ffffff;
            border-radius: 50%;
            transition: all 200ms;
          }

          &:hover {
            i {
              color: ${colors.green};
            }
          }

          @keyframes pulse-border {
            0% {
              transform: translateX(-50%) translateY(-50%) translateZ(0)
                scale(1);
              opacity: 1;
            }

            100% {
              transform: translateX(-50%) translateY(-50%) translateZ(0)
                scale(1.5);
              opacity: 0;
            }
          }
        }

        @media (max-width: 991px) {
          bottom: -70%;
        }

        @media (max-width: 767px) {
          position: unset;
          width: 100%;
          height: 250px;
          margin-bottom: 30px;
        }
      }
    }

    .about-content {
      h4.about-title {
        color: ${colors.black1};
        line-height: 35px;
        font-weight: 600;
        margin-bottom: 25px;
        font-weight: 700;
        font-size: 32px;

        @media (max-width: 575px) {
          margin-bottom: 15px;
          font-size: 20px;
        }
      }

      p.about-para {
        font-size: 16px;
        color: #333;
        line-height: 25px;
        margin-bottom: 40px;

        span {
          display: block;
          margin-top: 0px;
        }

        @media (max-width: 575px) {
          margin-bottom: 20px;
        }
      }

      .counter-box {
        h3 {
          margin-bottom: 10px;

          span {
            font-weight: 600;
          }

          i {
            font-size: 20px;
            vertical-align: middle;
          }
        }

        p {
          font-size: 14px;
          color: ${colors.text3};
          font-weight: 500;
        }

        @media (max-width: 575px) {
          display: none;
        }
      }

      .counter-box.box1 {
        h3 {
          color: ${colors.red};
        }
      }

      .counter-box.box2 {
        h3 {
          color: ${colors.purple};
        }
      }

      .counter-box.box3 {
        h3 {
          color: ${colors.blue};
        }
      }

      a.readmore-btn {
        font-size: 14px;
        color: #fff;
        background: ${colors.gr_bg};
        display: inline-block;
        width: 145px;
        height: 40px;
        text-align: center;
        padding: 11px;
        border-radius: 5px;
        margin-top: 40px;

        &:hover {
          background: ${colors.gr_bg2};
        }

        @media (max-width: 575px) {
          margin-top: 0;
        }
      }
    }

    @media (max-width: 767px) {
      padding: 30px 0 40px;
    }
  }

  @media (max-width: 767px) {

    .logo-area .logo img {
      height: 50px;
      max-width: 90px !important;
  }
  .discr {
    display: block !important;
}
ul.subMenus {
  padding-left: 0;
}
ul.react-tabs__tab-list li {
  padding: 6px 8px !important;
  font-size: 13px;
}
.main-menu .main-menu-box .menu-box {
  padding: 0;
}
    section.logo-area.main-menu {
      display: block !important;
  }

    .about-us .aboutHrng {
      position: inherit !important;
    }
  }


  .tabBox h4 {
    font-size: 15px;
    font-weight: 600;
    font-family: 'Gilroy';
    color: #fb0018;
}
}
ul.subMenus li {
  padding-left: 15px;
  display: block;
}
ul.subMenus li:after {
  content: "" !important;
  position: absolute;
  width: 7px !important;
  height: 7px !important;
  background: #bbbbbb !important;
  left: 0px !important;
  top: 9px !important;
}

ul.subMenus li { 
  position: relative;
}
.tabBox {
  background: #fff;
  padding: 25px;
  box-shadow: 0px 6px 4px 0px rgba(0, 0, 0, 0.1);
}
.border-rt{
  border-right: 1px solid #cecece;
}
ul.react-tabs__tab-list {
  margin-bottom: 0;
}
ul.react-tabs__tab-list li {
  padding: 14px 20px;
}
.dasaUa .react-tabs__tab--selected { 
  border-radius: 0px 35px 0px 0px;
}

  .t_image {
  max-height: 250px;
  overflow: hidden;
  margin-right: 18px;
  border-radius: 10px;
}
.t_image img {
  width: 100%;
  object-fit: cover;
  height: 250px;
}
.dicCard {
  flex-basis: 60%;
}
.discr {
  display: flex;
  width: 100%;
}
footer
{ 
    padding: 30px;
    background: #cecece;
 
}

.heading-left {
  font-size: 34px;
  font-weight: 600;
  color: #e41a1a;
  line-height: 1.4em;
  margin-bottom: 20px;
  -webkit-letter-spacing: 0.25px;
  -moz-letter-spacing: 0.25px;
  -ms-letter-spacing: 0.25px;
  letter-spacing: 0.25px;
}
.text-wrapper p{
  font-size: 1rem !important;
  line-height: 25px !important;
}
.AppyBtn {
  font-size: 17px !important;
  border: 1px solid #3e3e3e;
  line-height: 17px;
  background-color: #e41a1a !important;
  color: #ffffff;
  border: 1px solid #e41a1a;
  padding: 15px;
  margin: 10px 0;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, .2);
  width: 220px;
  display: inline-block;
  text-align: center;
  border-radius: 5px;
}




`

export default Styless
