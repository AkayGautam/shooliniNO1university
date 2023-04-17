import styled from 'styled-components'
import { colors } from '../elements/elements'

export const Styles = styled.div`
  .hero-slider-area {
    .play-button {
      position: relative;
      z-index: 10;
      top: 50%;
      transform: translateX(-20%) translateY(0%);
      box-sizing: content-box;
      display: block;
      width: 32px;
      height: 44px;
      background: transparent;
      border-radius: 50%;
      border-color: #fff;
    }
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
      background: red;
      width: 150px;
      text-align: center;
      color: #fff;
      padding: 5px;
      margin-top: 10px;
      font-family: 'Gotham' !important;
      -webkit-letter-spacing: 0;
      -moz-letter-spacing: 0;
      -ms-letter-spacing: 0;
      letter-spacing: 0;
      font-weight: 500;
      margin: 10px auto;
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
                    margin: 0;
                    text-transform: uppercase;
                    line-height: 69px;

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



  .adPage {
    background: url(assets/images/admission.webp);
    background-size: cover;
    background-repeat: no-repeat;
    position: relative; 
}
section.adPage:after {
  content: "";
  position: absolute;
  background: rgba(0,0,0,0.5);
  height: 100%;
  width: 100%;
  top: 0;

}
`
