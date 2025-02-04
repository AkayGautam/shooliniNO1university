import styled from 'styled-components'
import { colors } from '../elements/elements'

export const Styles = styled.div`
  .slider-tablecell {
    z-index: 99;
    position: relative;
  }

  .styleIframe iframe {

    height: 400px !important;
  }
.slider-content
{
  background-size:100% !important;
}
.noticed h5 a {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
}
  .bannerVideo span {
    width: 100% !important;
}
a.viewTest {
  background: #1467d8;
  color: #fff;
  width: 100%;
  display: block;
  margin-left: auto;
  padding: 13px 0;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  box-shadow: 0px 0px 30px 1px rgb(255 38 38 / 40%);
}
.slider-tablecell {
  z-index: 99;
  position: relative;
}
.slider-box.slider-box1 {
  position: relative;
  top: -80px;
}

  .resForm iframe {
    position: relative;
    max-width: 370px;
    top: 0px !important;
    height:400px !important;
}

  .bannerVideo {
    height: 450px;
}
.bannerVideo span {
  height: 100% !important;
}

  .mainInput {
    position: absolute;
    z-index: 99;
    top: 0;
    width: 100%;
  }
  iframe {
    width: 100%;
    height: 120vh;
    top: -70px !important;
    position: absolute;
  }
  .bannerVideo {
    position: relative;
    height: 100%;
    overflow: hidden;
  }
  // dmeo

  .slider-image {
    background-size: 100%;
  }

  .slide .slider-desc h1 {
    transition: all 0.7s ease;
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
    opacity: 0;
    font-size: 68px;
    color: #ffffff;
    max-width: 1000px;
    font-weight: bold;
    margin: auto;
    text-transform: uppercase;
    line-height: 69px;
  }
  .slider-title {
    margin-bottom: 0px;
  }
  .subtitleTxt {
    margin-top: 10px;
    font-size: 20px !important;
  }
  .slider-title p {
    font-size: 20px !important;
  }
  .subtitleTxt {
    font-size: 37px;
    color: #dddddd;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  .previousButton:hover {
    left: 0 !important;
  }
  a.nextButton:hover {
    right: 0 !important;
  }
  a.previousButton {
    background: url(../assets/images/arrow.png) !important;
    width: 30px;
    height: 30px;
    background-size: 100% !important;
    display: block;
  }
  a.nextButton {
    background: url(../assets/images/arrow.png) !important;
    width: 30px;
    height: 30px;
    background-size: 100% !important;
    display: block;
    transform: rotate(0deg) !important;
  }
  .videoMosdal {
    position: absolute;
    bottom: 20%;
    right: 7%;
    padding: 15px 25px 20px;
    /* background: #fff; */
    border-radius: 4px;
    -webkit-box-shadow: 0 30px 60px 0 rgb(1 11 60 / 14%);
    box-shadow: 0 30px 60px 0 rgb(1 11 60 / 14%);
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

  @-webkit-keyframes hero-bounce {
    0%,
    20%,
    50%,
    80%,
    to {
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
  @keyframes hero-bounce {
    0%,
    20%,
    50%,
    80%,
    to {
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

  .slider-title p {
    font-size: 37px;
    color: #dddddd;
    text-transform: uppercase;
    margin-bottom: 8px;
  }
  .slider-tablecell {
    vertical-align: middle;
    height: 100vh;
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slide .slider-btn {
    transition: all 0.3s ease;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    opacity: 0;
  }

  .slide p {
    transition: all 0.3s ease;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    opacity: 0;
  }

  .slide .resrchTxt * {
    transition: all 0.3s ease;
  }
  .play-buttonC {
    background: transparent !important;
  }
  .play-buttonClk {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #fff;
    border-radius: 50%;
    font-size: 31px;
    text-align: center;
    color: #fff;
    margin-right: 12px;
  }
  .videoMosdal button {
    text-align: left;
    color: #fff;
  }
  .slide .resrchTxt h5 {
    -webkit-transform: translateX(-10px);
    transform: translateX(-10px);
    opacity: 0;
  }

  .slide .resrchTxt h6 {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    opacity: 0;
  }

  .slide .videoMosdal {
    transition: all 0.7s ease;
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
    opacity: 0;
  }

  .slide.current .videoMosdal,
  .slide.animateIn.previous h1,
  .slide.current h1,
  .slide.animateIn.next h1,
  .slide.animateIn.previous button,
  .slide.current .slider-btn,
  .slide.animateIn.next button,
  .slide.animateIn.previous p,
  .slide.current p,
  .slide.animateIn.next p,
  .slide.animateIn.previous section *,
  .slide.current .resrchTxt *,
  .slide.animateIn.next section * {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-transition-delay: 0.6s;
    transition-delay: 0.6s;
    opacity: 1;
  }

  .slide.animateIn.previous p,
  .slide.animateIn.next p {
    -webkit-transition-delay: 1.1s;
    transition-delay: 1.1s;
  }

  .slide.animateIn.previous button,
  .slide.animateIn.next button {
    -webkit-transition-delay: 1.3s;
    transition-delay: 1.3s;
  }

  .slide.animateIn.previous section img,
  .slide.animateIn.next section img {
    -webkit-transition-delay: 1.3s;
    transition-delay: 1.3s;
  }

  .slide.animateIn.previous section span,
  .slide.animateIn.next section span {
    -webkit-transition-delay: 1.4s;
    transition-delay: 1.4s;
  }

  .slide.animateIn.previous section span strong,
  .slide.animateIn.next section span strong {
    -webkit-transition-delay: 1.5s;
    transition-delay: 1.5s;
  }

  .slide.animateOut h1 {
    -webkit-transition-delay: 0.3s;
    transition-delay: 0.3s;
  }

  .slide.animateOut p {
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }

  .slide.animateOut section span {
    -webkit-transition-delay: 0.1s;
    transition-delay: 0.1s;
  }

  .slide.animateOut section span strong {
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
  }

  button {
    -webkit-appearance: none;
    appearance: none;
    -webkit-filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1));
    filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1));
    -webkit-transition: all 0.5s ease;
    filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1));
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    border: none;
    background: #ffd800;
    border-radius: 30px;
    text-transform: uppercase;
    box-sizing: border-box;
    padding: 15px 40px;
    font-weight: 400;
    font-size: 13px;
    cursor: cursor;
  }

  button:hover {
    color: #ffffff;
    background: #222222;
    -webkit-filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.2));
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.2));
  }

  .wrapper {
    max-width: 1335px;
    box-sizing: border-box;
    padding: 0 20px;
    margin: auto;
  }

  .wrapper a {
    display: inline-block;
    margin: 5px;
  }

  .wrapper a:first-child {
    margin-left: 0;
  }

  .slider-wrapper {
    position: relative;
    height: 85vh;
    overflow: hidden;
  }

  .slide {
    height: 100vh;
    background-size: cover !important;
  }

  .slide::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(transparent),
      to(rgba(0, 0, 0, 0.9))
    );
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
    bottom: 0;
    left: 0;
  }

  .previousButton,
  .nextButton {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    background: url('http://svgshare.com/i/41_.svg') no-repeat center center /
      16px;
    width: 32px;
    height: 32px;
    text-indent: -9999px;
    cursor: pointer;
  }

  .previousButton:hover,
  .nextButton:hover {
    background: url('http://svgshare.com/i/41_.svg') no-repeat center center /
      16px;
  }

  .previousButton {
    left: 0;
    -webkit-transform: rotate(180deg) translateY(calc(50% + 0px));
    transform: rotate(180deg) translateY(calc(50% + 0px));
  }

  .previousButton:hover {
    left: -10px;
  }

  .nextButton {
    right: 0;
  }

  .nextButton:hover {
    right: -10px;
  }

  .slider-content {
    text-align: center;
  }

  .slider-content .inner {
    padding: 0 70px;
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .slider-content .inner button {
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
  }

  .slider-content h1 {
    font-weight: 700;
    margin: 0 auto;
    color: #ffffff;
    font-size: 68px;
    line-height: 1;
  }

  .slider-content .inner p {
    color: #ffffff;
    font-size: 14px;
    line-height: 1.5;
    margin: 20px auto 30px;
    max-width: 640px;
  }

  .slider-content section {
    position: absolute;
    bottom: 20px;
    left: 20px;
  }

  .slider-content section span {
    color: #ffffff;
  }

  .slider-content section span {
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;
    display: inline-block;
    text-align: left;
    line-height: 1.4;
    vertical-align: middle;
    margin-left: 10px;
  }

  .slider-content section img {
    width: 40px;
    height: 40px;
    border: solid 2px rgba(255, 255, 255, 0.5);
    border-radius: 100%;
    vertical-align: middle;
  }

  .slider-content section span strong {
    color: #ffffff;
    font-size: 14px;
    display: block;
  }

  @media (max-height: 500px) {
    .slider-wrapper,
    .slide {
      height: calc(100vh - 75px);
    }
  }

  @media (max-width: 640px) {
    .slider-wrapper,
    .slide {
      height: calc(80vh - 75px);
    }
  }

  @media (max-height: 600px) {
    .slider-content .inner h1 {
      font-size: 32px;
    }
  }

  @media (max-width: 640px) {
    .slider-content .inner h1 {
      font-size: 32px;
    }
  }

  .videoMosdal a {
    position: relative;
    text-align: left;
  }
  .play-button {
    position: relative;
    z-index: 10;
    top: 50%;
    -webkit-transform: translateX(-20%) translateY(0%);
    -ms-transform: translateX(-20%) translateY(0%);
    transform: translateX(-0%) translateY(0%);
    box-sizing: content-box;
    display: block;
    background: transparent;
    border-radius: 50%;
    border-color: #fff;
    color: #fff;
    border: 2px solid #fff;
    width: 25px;
    height: 65px;
    margin-right: 10px;
  }

  .hero-slider-area {
    .play-button::before {
      content: '';
      position: absolute;
      z-index: 0;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      display: block;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      animation: 1500ms ease-out 0s infinite normal none running pulse-border;
    }

    .play-button i {
      position: relative;
      font-size: 40px;
      color: #fff;
      z-index: 11;
      padding-top: 2px;
      margin-left: -2px;
    }
    .play-button::after {
      content: '';
      position: absolute;
      z-index: 1;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      display: block;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      transition: all 200ms ease 0s;
    }

    .resrchTxt h5,
    .resrchTxt h6 {
      color: #fff;
    }
    .slider-btn {
      display: flex;
      flex-direction: column;
    }
    .slider-btn a {
      width: 150px;
      text-align: center;
      color: #fff;
      padding: 5px;
      margin-top: 10px;
      font-family: Poppins !important;
      -webkit-letter-spacing: 0;
      -moz-letter-spacing: 0;
      -ms-letter-spacing: 0;
      letter-spacing: 0;
      font-weight: 500;
      margin: 10px auto;
      line-height: initial;
    }
    .videoMosdal a {
      display: flex;
      color: #fff;
      text-transform: uppercase;
      font-weight: 500;
      justify-content: left;
      align-items: center;
    }
    .videoMosdal {
      margin-top: 63px;
    }
    .videoMosdal img {
      margin-right: 15px;
    }

    .slider-btn a.slider-btn2 {
      background: #1475f8 !important;
    }

    .swiper-container {
      position: relative;

      .swiper-wrapper {
        .swiper-slide.slider-item {
          position: relative;

          .image-container {
            width: 100%;
            display: block;
            overflow: hidden;
            position: relative;
            height: 640px;

            img.slider-image {
              width: auto;
              margin-top: 0;
              transition: all 6000ms linear;
              transform: scale(1);
            }

            @media (max-width: 767px) {
              height: 450px;
            }

            @media (max-width: 575px) {
              height: 360px;
            }
          }

          .slider-table {
            display: table;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 9999;

            .slider-tablecell {
              display: table-cell;
              vertical-align: middle;

              .slider-box {
                .slider-title {
                  p {
                    font-size: 37px;
                    color: ${colors.border3};
                    text-transform: uppercase;
                    margin-bottom: 8px;
                  }
                }

                .slider-desc {
                  h1 {
                    font-size: 68px;
                    color: #ffffff;
                    max-width: 1000px;
                    font-weight: bold;
                    margin: auto;
                    text-transform: uppercase;
                    line-height: 69px;
                    font-family: 'Poppins' !important;

                    @media (max-width: 767px) {
                      font-size: 26px;
                      font-weight: 500;
                    }
                  }
                }

                .slider-btn {
                  a.slider-btn1 {
                    font-size: 14px;
                    color: #fff;
                    background: ${colors.gr_bg};
                    display: inline-block;
                    width: 145px;
                    height: 40px;
                    text-align: center;
                    padding: 11px;
                    border-radius: 5px;

                    &:hover {
                      background: ${colors.gr_bg2};
                    }
                  }

                  a.slider-btn2 {
                    font-size: 14px;
                    color: #fff;
                    display: inline-block;
                    background: ${colors.bg1};
                    width: 145px;
                    height: 40px;
                    text-align: center;
                    padding: 11px;
                    border-radius: 5px;
                    margin-left: 15px;

                    &:hover {
                      background: ${colors.gr_bg};
                      border: none;
                      color: #ffffff;
                    }
                  }
                }
                @media (max-width: 575px) {
                  text-align: center !important;
                }
              }

              .slider-box2 {
                .slider-desc {
                  h1 {
                    margin-left: auto;
                  }
                }
              }
            }
          }
        }

        .swiper-slide.slider-item.swiper-slide-active {
          .image-container {
            img.slider-image {
              transform: scale(1.15) !important;
            }
          }

          .slider-table {
            .slider-tablecell {
              .slider-title {
                animation-name: fadeInDown;
                animation-duration: 1s;
                animation-delay: 0.2s;
                animation-fill-mode: both;
              }

              .slider-desc {
                animation-name: fadeInUp;
                animation-duration: 1.5s;
                animation-delay: 0.2s;
                animation-fill-mode: both;
              }

              .slider-btn {
                animation-name: fadeInUp;
                animation-duration: 2s;
                animation-delay: 0.2s;
                animation-fill-mode: both;
              }
            }
          }
        }
      }

      .swiper-btn {
        position: absolute;
        top: 50%;
        left: 40px;
        width: 45px;
        height: 45px;
        font-size: 24px;
        color: ${colors.border1};
        text-align: center;
        padding-top: 5px;
        border-radius: 5px;
        transition: all 0.3s ease;
        margin-top: -35px;
        z-index: 111;

        i {
        }

        &:hover {
          background: ${colors.gr_bg};
          color: #ffffff;
        }
      }

      .swiper-btn.slider-button-next {
        left: inherit;
        right: 40px;
      }
    }

    .slider {
      overflow: hidden;
      position: relative;
      height: 100vh;
      color: #fff;
    }
    .slider__top-heading {
      z-index: 12;
      position: absolute;
      left: 0;
      top: 100px;
      width: 100%;
      text-align: center;
      font-size: 16px;
      text-transform: uppercase;
      letter-spacing: 2.5px;
      transition: all 0.5s 1s;
      transform: translateY(-30px);
      opacity: 0;
    }
    .slider.s--ready .slider__top-heading {
      transform: translateY(0);
      opacity: 1;
    }
    .slider__slides {
      position: relative;
      height: 100%;
    }
    .slider__slide {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
    .slider__slide.s--active {
      pointer-events: auto;
    }
    .slider__slide-content {
      z-index: 6;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 100%;
      text-transform: uppercase;
      line-height: 1;
    }
    .slider__slide-subheading {
      margin-bottom: 20px;
      font-size: 24px;
      letter-spacing: 2px;
      transform: translateY(20px);
      opacity: 0;
      transition: 0.5s;
    }
    .slider__slide.s--active .slider__slide-subheading {
      transition-delay: 0.65s;
      opacity: 1;
      transform: translateY(0);
    }
    .slider__slide-heading {
      display: flex;
      margin-bottom: 20px;
      font-size: 60px;
      letter-spacing: 12px;
    }
    .slider__slide-heading span {
      display: block;
      opacity: 0;
      transform: translateY(-60px);
      transition: all 0.3333333333s;
    }
    .slider__slide.s--prev .slider__slide-heading span {
      transform: translateY(60px);
    }
    .slider__slide.s--active .slider__slide-heading span {
      opacity: 1;
      transform: translateY(0);
    }
    .slider__slide-heading span:nth-child(1) {
      transition-delay: 0s;
    }
    .slider__slide.s--active .slider__slide-heading span:nth-child(1) {
      transition-delay: 0.3333333333s;
    }
    .slider__slide-heading span:nth-child(2) {
      transition-delay: 0.1s;
    }
    .slider__slide.s--active .slider__slide-heading span:nth-child(2) {
      transition-delay: 0.4333333333s;
    }
    .slider__slide-heading span:nth-child(3) {
      transition-delay: 0.2s;
    }
    .slider__slide.s--active .slider__slide-heading span:nth-child(3) {
      transition-delay: 0.5333333333s;
    }
    .slider__slide-heading span:nth-child(4) {
      transition-delay: 0.3s;
    }
    .slider__slide.s--active .slider__slide-heading span:nth-child(4) {
      transition-delay: 0.6333333333s;
    }
    .slider__slide-heading span:nth-child(5) {
      transition-delay: 0.4s;
    }
    .slider__slide.s--active .slider__slide-heading span:nth-child(5) {
      transition-delay: 0.7333333333s;
    }
    .slider__slide-heading span:nth-child(6) {
      transition-delay: 0.5s;
    }
    .slider__slide.s--active .slider__slide-heading span:nth-child(6) {
      transition-delay: 0.8333333333s;
    }
    .slider__slide-heading span:nth-child(n + 7) {
      transition-delay: 0.6s;
    }
    .slider__slide.s--active .slider__slide-heading span:nth-child(n + 7) {
      transition-delay: 0.9333333333s;
    }
    .slider__slide-readmore {
      position: relative;
      font-size: 14px;
      text-transform: lowercase;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      transform: translateY(-20px);
      cursor: pointer;
      opacity: 0;
      transition: 0.5s;
    }
    .slider__slide.s--active .slider__slide-readmore {
      transition-delay: 0.65s;
      opacity: 1;
      transform: translateY(0);
    }
    .slider__slide-readmore:before {
      content: '';
      position: absolute;
      left: -2px;
      top: -3px;
      width: calc(100% + 4px);
      height: calc(100% + 6px);
      background: rgba(255, 255, 255, 0.4);
      transform: scaleX(0.3);
      transform-origin: 0 50%;
      transition: transform 0.3s;
    }
    .slider__slide-readmore:hover:before {
      transform: scaleX(1);
    }
    .slider__slide-parts {
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      width: 100%;
      height: 100%;
    }
    .slider__slide-parts:after {
      content: '';
      z-index: 5;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.1);
    }
    .slider__slide-part {
      position: relative;
      width: 25%;
      height: 100%;
    }
    .slider__slide-part-inner {
      overflow: hidden;
      position: relative;
      width: 100%;
      height: 100%;
      background-size: 0 0;
      background-repeat: no-repeat;
      transition: transform 0.5s ease-in-out;
    }
    .slider__slide-part-inner:before {
      content: '';
      position: absolute;
      width: 100vw;
      height: 100%;
      background-image: inherit;
      background-size: cover;
      background-position: center center;
      transition: opacity 0.25s;
      opacity: 0;
    }
    .slider__slide-part:nth-child(1) .slider__slide-part-inner {
      z-index: 3;
      transition-delay: 0.24s;
      transform: translateX(-32.5%);
    }
    .slider__slide.s--active
      .slider__slide-part:nth-child(1)
      .slider__slide-part-inner {
      transition-delay: 0.28s;
    }
    .slider__slide-part:nth-child(1) .slider__slide-part-inner:before {
      left: 0vw;
      transition-delay: 0.365s;
    }
    .slider__slide.s--active
      .slider__slide-part:nth-child(1)
      .slider__slide-part-inner:before {
      transition-delay: 0.28s;
    }
    .slider__slide-part:nth-child(2) .slider__slide-part-inner {
      z-index: 2;
      transition-delay: 0.16s;
      transform: translateX(-65%);
    }
    .slider__slide.s--active
      .slider__slide-part:nth-child(2)
      .slider__slide-part-inner {
      transition-delay: 0.36s;
    }
    .slider__slide-part:nth-child(2) .slider__slide-part-inner:before {
      left: -25vw;
      transition-delay: 0.285s;
    }
    .slider__slide.s--active
      .slider__slide-part:nth-child(2)
      .slider__slide-part-inner:before {
      transition-delay: 0.36s;
    }
    .slider__slide-part:nth-child(3) .slider__slide-part-inner {
      z-index: 1;
      transition-delay: 0.08s;
      transform: translateX(-97.5%);
    }
    .slider__slide.s--active
      .slider__slide-part:nth-child(3)
      .slider__slide-part-inner {
      transition-delay: 0.44s;
    }
    .slider__slide-part:nth-child(3) .slider__slide-part-inner:before {
      left: -50vw;
      transition-delay: 0.205s;
    }
    .slider__slide.s--active
      .slider__slide-part:nth-child(3)
      .slider__slide-part-inner:before {
      transition-delay: 0.44s;
    }
    .slider__slide-part:nth-child(4) .slider__slide-part-inner {
      z-index: 0;
      transition-delay: 0s;
      transform: translateX(-130%);
    }
    .slider__slide.s--active
      .slider__slide-part:nth-child(4)
      .slider__slide-part-inner {
      transition-delay: 0.52s;
    }
    .slider__slide-part:nth-child(4) .slider__slide-part-inner:before {
      left: -75vw;
      transition-delay: 0.125s;
    }
    .slider__slide.s--active
      .slider__slide-part:nth-child(4)
      .slider__slide-part-inner:before {
      transition-delay: 0.52s;
    }
    .slider__slide.s--active .slider__slide-part-inner {
      transform: translateX(0);
      transition-timing-function: ease;
    }
    .slider__slide.s--active .slider__slide-part-inner:before {
      opacity: 1;
    }
    .slider__control {
      z-index: 100;
      position: absolute;
      left: 50px;
      top: 50%;
      width: 50px;
      height: 50px;
      margin-top: -25px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.4);
      transform: translateX(-50px);
      opacity: 0;
      transition: all 0.5s 1s;
      cursor: pointer;
    }
    .slider__control:before {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      width: 20px;
      height: 20px;
      margin-left: -10px;
      margin-top: -10px;
      border: 2px solid #000;
      border-bottom: none;
      border-right: none;
      transform: translateX(5px) rotate(-45deg);
    }
    .slider__control--right {
      left: auto;
      right: 50px;
      transform: translateX(50px);
    }
    .slider__control--right:before {
      transform: translateX(-5px) rotate(135deg);
    }
    .slider.s--ready .slider__control {
      transform: translateX(0);
      opacity: 1;
    }

    .icon-link {
      z-index: 100;
      position: absolute;
      left: 5px;
      bottom: 5px;
      width: 32px;
    }
    .icon-link img {
      width: 100%;
      vertical-align: top;
    }
    .icon-link--twitter {
      left: auto;
      right: 5px;
    }
  }
  button.slider-btn1 {
    background: red;
    min-width: 150px;
    text-align: center;
    color: #fff;
    padding: 5px;
    margin-top: 10px;
    font-family: Poppins !important;
    line-height: initial;
    -webkit-letter-spacing: 0;
    -moz-letter-spacing: 0;
    -ms-letter-spacing: 0;
    letter-spacing: 0;
    font-weight: 500;
    border-radius: 0;
  }

  .resForm {
    max-width: 340px;
    margin-left: auto;
    background: #f4f4f4;
    padding: 30px 0 0 0;
    position:relative;
}

.resForm h4 {
 margin:0;
}



@media (min-width: 980px) {
  .resForm:after {
    content: "";
    position: absolute;
    height: 100%;
    width: 12px;
    background: #d5d4d4;
    top: -15px;
    right: -12px;
        box-shadow: 11px 0px 20px 0px rgb(0 0 0 / 20%);
  }
  .resForm:before {
    content: "";
    position: absolute;
    height: 15px;
    width: 100%;
    background: #d5d4d4;
    top: -15px;
    left: 10px;
  }
}


  @media (max-width: 767px) {
    .resForm {
      max-width: 100% !important;
    }
    .bannerVideo iframe {
      display: none;
  }
  .Apps {
    background: url(../../assets/video/mobilebanner.webp);
    background-size: 100%;
}
.bannerVideo span img {
  display: none !important;
}

.mainInput {
  top: 15%;
}

    .resForm iframe {
      margin: 20px 0;
      max-width: 100% !important;
  }
  .slider-table {
    height: auto;
    transform: scale(0.9);
  }

    .sliderForBio .slider-wrapper {
      height: 100% !important;
      margin-bottom: 50px;
  }

    .text-300 span {
      border: 0px !important;
  }

    .slider-content h1 {
      font-size: 48px;
    }
    .subtitleTxt {
      margin-top: 30px !important;
      font-family: 'Poppins';
      font-weight: 500 !important;
      letter-spacing: 1px !important;
    }

    .slide .slider-desc h1 {
      font-size: 38px;
      line-height: 38px;
    }
    .slider-tablecell {
      vertical-align: middle;
    }
    .videoMosdal {
      position: absolute;
      bottom: -20px;
      right: auto;
      left: -40px;
    }
  }

  // template slider

  .resrchTxt.Slide h1 {
    font-size: 42px;
    text-align: left;
    text-transform: uppercase;
    font-weight: 900;
  }
  .resrchTxt.Slide {
    background: #f2072f;
    padding: 30px;
    position: absolute;
    max-width: max-content;
    bottom: -10%;
    min-height: 230px;
    display: flex;
    align-items: center;
    width: 30%;
  }
  .scSlider .slider-wrapper {
    overflow: inherit !important;
  }
  .scSlider .slide {
    height: auto !important;
  }
  .scSlider .slider-tablecell {
    height: 70vh;
  }
  .slider-btn {
    display: inline-flex !important;
    flex-direction: row !important;
  }
  .appBtn {
    display: inline-block;
    margin-left: 10px !important;
  }
  .vdoUnpos {
    position: relative !important;
    box-shadow: none;
  }
  .vdoUnpos .play-buttonClk {
    width: 60px;
    height: 50px;
  }
  .atBottom {
    position: relative;
    top: 150px;
  }
  .slider-btn button,
  .slider-btn a {
    padding: 12px 0 !important;
    font-size: 14px !important;
    text-transform: uppercase;
    line-height: 1.6;
  }
  .sliderForBio .slider-wrapper {
    position: relative;
    height: 80vh;
    overflow: hidden;
  }
  section.hero-slider-area.mainHome {
    position: sticky;
}

  .bannerVideo:after {
    content: "";
    position: absolute;
    background: rgba(0,0,0,0.5);
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
}
.mainInput {
  left: 0;
}

.slick-next {
  right: 0;
  color: #333;
  text-align: center;
  padding: 20px;
  font-size: 0;
  background: rgba(255,256,255,0.5);
}
.slick-prev {
  left: 10px;
  z-index: 9;
  color: #333;
  text-align: center;
  padding: 20px;
  font-size: 0;
  background: rgba(255,256,255,0.5);
}
.slick-next:hover, .slick-prev:hover {
  color: #ffffff;
  background: rgba(255,255,255,0.7);
}
.bannerVideo video {
  width: 100%;
}

@media screen and (max-width:767px)
{
  a.broucher.btn {
    font-size: 13px !important;
    background: #ec1e3f !important;
    color: #fff !important;
    padding: 10px !important;
    width: 50%;
}
.slideButtons {
  position: inherit !important;
  display: flex;
  flex-wrap: nowrap;
  bottom: 0 !important;
  right: 0 !important;
}
.a.broucher.btn:before, a.broucher.btn:after{
  content:unset !important;
}

  .scSlider  .slider-content {
    text-align: center;
    background-size: cover !important;
}
  .bannerVideo {
    height:460px;
  }
  .slider-box.slider-box1 {
    position: relative;
    top: 0;
}

  section.hero-slider-area.mainHome {
    position: sticky;
    height: 100%;
}
.bannerVideo iframe {
  width: 100%;
  height: 100%;
}
.bannerVideo iframe {
  transform: scale(1.5) !important;
}

  .slider-tablecell
  {
    height:100%;
  }
 .mainInput {
    left: 0;
   
    background: transparent;
}

}
.forDesktop, .forMobile
{
  display:none;
}

@media screen and (min-width:640px)
{
.forDesktop
{
  display:block ;
}

}

@media screen and (max-width:639px)
{
.forMobile
{
  display:block ;
}

}

.text-300 span {
  font-weight: 300;
  font-size: 27px;
  padding: 0px 20px;
  border: 2px solid #fff;
}
.text-300 {
  display: block;
  margin-top: 24px;
}
.slideButtons {
  position: absolute;
  bottom: 15%;
  right: 10%;
}
a.broucher.btn {
  background: #fff;
  font-weight: 700;
  margin: 0 10px;
  padding: 15px 20px;
  font-size: 1.2rem;
  color: #ec1e3f;
  position:relative;
}
a.broucher.btn:after {
  content: "";
  position: absolute;
  background: #ee1e3d;
  left: -2px;
  width: 5px;
  height: 30px;
}
a.broucher.btn:before {
  content: "";
  position: absolute;
  background: #ee1e3d;
  right: -1px;
  width: 5px;
  height: 30px;
}

.slick-slide span {
  width: 100% !important;
}

@media screen and (min-width:768px)
{
  .for-desktop.scSlider 
  {
    display:none;
  }
  .for-mobile
  {
    display:none !important;
  }



}


@media screen and (max-width:767px)
{

  .slideSlickContent {
    margin-bottom: 80px !important;
  }

  .hreSlider  h2.slideTitle { 
    font-size: 32px !important;
}
.hreSlider  p.slideInfo { 
  font-size: 18px !important;
}
  .studentImage {
    display: none;
}
section.hreSlider {
  background: url(../../assets/slide-icons/shoolini-slider-mobile.jpg) !important;
  background-size: 100% 100%  !important;
} 
.slideSlickContent {
  margin-bottom: 40px;
  position: absolute;
  left: 0;
  width: 100%;
  bottom: -30px; 
}

  .slide1 {
    padding: 10px 20px;
    margin-bottom: 10px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}
.slideBox {
  background: #ececec;
}

  .slider { 
    height: auto !important; 
}

  .for-desktop.scSlider 
  {
    display:none;
  }
  .for-desktop
  {
    display:none !important;
  }
}


.studentImage span {
  width: 100% !important;
}
.studentImage span img {
  width: 100% !important;
}

section.hreSlider {
  background: url(../../assets/slide-icons/shoolini-slider.jpg);
  max-height: 650px;
  background-size: 100% 100%;
}
h2.slideTitle {
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 42px !important;
}
p.slideInfo {
  text-align: center;
  font-size: 24px !important; 
  margin: auto;
  color: #fff;
  line-height: 1.4 !important;
}
.mainslidecard {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  height: 600px;
}
.iconTitle h5 {
  font-size: 14px;
  font-weight: 400;
  color:#fff;
  text-align:center;
}
.schoolIcon {
  text-align: center;
  display: block;
}
.slideSlickContent {
  margin-bottom: 40px;
}
.studentImage {
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
}
.studentImage img {
  width: 100%;
  z-index: 1;
  position: relative;
}
.mainslidecard {
  position: relative;
  z-index: 11;
}
section.hreSlider:after {
  content: "";
  position: absolute;
  background: linear-gradient(0deg, #00000070 30%, transparent);
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
}
.iconStyle {
  background: linear-gradient(45deg, #ff0066, #ff0000);
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  margin: 10px auto;
}
.iconStyle img { 
  padding: 8px; 
  display:inline !important;
}
 section.hreSlider {
  padding-top: 50px;
}






.hovicon {
  display: inline-block;
  font-size: 45px;
  line-height: 90px;
  cursor: pointer;
  margin: 20px;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  text-align: center;
  position: relative;
  text-decoration: none;
  z-index: 1;
  color: #fff;
} 

.hovicon:after {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  content:'';
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}
.hovicon:before {
  speak: none;
  font-size: 48px;
  line-height: 90px;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  display: block;
  -webkit-font-smoothing: antialiased;
} 
/* Effect 4 */
.hovicon.effect-4 {
  width: 92px;
  height: 92px;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 1);
}

.hovicon.effect-4.sub-a {
  -webkit-transition: box-shadow 0.2s;
  -moz-transition: box-shadow 0.2s;
  transition: box-shadow 0.2s;
}
.hovicon.effect-4:before {
  line-height: 92px;
}
.hovicon.effect-4:after {
  top: -4px;
  left: -4px;
  padding: 0;
  z-index: 10;
  border: 4px dashed #fff;
}
.hovicon.effect-4:hover {
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  color: #fff;
}
.hovicon.effect-4:hover i {
  color: #fff;
}
/* Effect 4b */
.hovicon.effect-4.sub-b:hover {
  -webkit-transition: box-shadow 0.2s;
  -moz-transition: box-shadow 0.2s;
  transition: box-shadow 0.2s;
}
.hovicon.effect-4.sub-b:hover:after {
  -webkit-animation: spinAround 9s linear infinite;
  -moz-animation: spinAround 9s linear infinite;
  animation: spinAround 9s linear infinite;
}
@-webkit-keyframes spinAround {
  from {
      -webkit-transform: rotate(0deg)
  }
  to {
      -webkit-transform: rotate(360deg);
  }
}
@-moz-keyframes spinAround {
  from {
      -moz-transform: rotate(0deg)
  }
  to {
      -moz-transform: rotate(360deg);
  }
}
@keyframes spinAround {
  from {
      transform: rotate(0deg)
  }
  to {
      transform: rotate(360deg);
  }
} 

.slideSlickContent {
  max-width: 980px;
  margin: 40px auto;
}


`
