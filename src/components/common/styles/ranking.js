import styled from 'styled-components'
import { colors } from '../elements/elements'

export const Styles = styled.div`

span.theColor {
  background: linear-gradient(to right, #ea3d42, #5a4c97);
  color: #fff;
  padding: 0px 9px;
  border-radius: 5px;
  font-size: 21px;
}

  .event-faq-area {
    padding: 65px 0;

    .rankingLogo {
      width: 170px;

      @media (min-width: 768px) and (max-width: 992px) {
        width: 100px !important;
      }
    }


    .event-details h6 {
      line-height: 0;
  }
  .event-details p {
    margin: 0;
}
  
    .slick-slide img {
      display: block;
      width: 100%;
      background: #fafafa;
      padding: 5px;
      box-shadow: 0px 0px 4px 0px rgb(0 0 0 / 20%);
      border-radius: 4px;
    }

    .rankingYear {
      width: 43px;
    }
    .rankingYear p {
      color: #999999;
      position: relative;
      top: -5px;
    }
    .seeMoreBtn a {
      color: #666666;
      text-transform: uppercase;
      font-size: 14px;
      white-space: nowrap;
    }
    .event-box {
      justify-content: space-between;
    }
    .alignLefts_o {
      display: flex;
    }
    .event-details {
      padding: 0 10px;
    }
    .alignLefts {
      flex-basis: 65%;
    }
    .event-box:last-child {
      border-bottom: 1px solid;
      padding-bottom: 20px;
    }
    .dddd .event-box:last-child {
      margin-bottom: 0;
      padding-bottom: 0 !important;
  }
    .introVDO iframe {
      width: 100%;
      height: 300px;
      position: relative;
      top: 40px;
    }
    .introVDO {
      position: relative;
    }
    .event-area {
      .sec-title {
        h4 {
          color: ${colors.black1};
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 37px;
          font-family: 'Playfair Display', serif;
          span {
            color: ${colors.green};
          }

          @media (max-width: 575px) {
            margin-bottom: 15px;
            font-size: 20px;
          }
        }
      }

      .event-box {
        margin-bottom: 5px;

        .event-date {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          color: #fff;
          margin-top: 8px;
          margin-right: 30px;
          position: relative;

          &::before {
            content: '';
            position: absolute;
            width: 70px;
            height: 70px;
            background: ${colors.green};
            top: 0;
            left: 0;
            border-radius: 50% 3px 50% 50%;
            transform: rotate(45deg);
            z-index: -1;
          }

          p {
            font-size: 17px;
            max-width: 50px;
            margin: auto;
            line-height: 20px;
            padding-top: 13px;
            font-family: 'Playfair Display', serif;
            @media (max-width: 991px) {
              font-size: 15px;
              max-width: 56px;
              padding-left: 14px;
            }
          }
        }
        .alignLefts {
          display: flex;
          justify-content: space-between;
          width: 50%;
        }
        .event-details {
          h6 {
            margin-bottom: 0px;
            a {
              color: #000;
              display: inline-block;
              font-weight: 700;
              font-family: 'Playfair Display', serif !important;
              font-size: 21px;
              &:hover {
                color: ${colors.green};
              }
            }
          }

          ul {
            margin-bottom: 5px;

            li {
              font-size: 14px;
              color: ${colors.text3};
              font-weight: 500;
              font-family: 'Playfair Display', serif;
              i {
                font-size: 15px;
                margin-right: 3px;
                color: ${colors.green};
              }
            }
          }

          p {
            color: #161515;
            line-height: 22px;
            font-family: 'Playfair Display', serif;
          }
        }

        &:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 991px) {
          margin-bottom: 17px;
        }
      }

      @media (max-width: 767px) {
        margin-bottom: 30px;
      }

      @media (max-width: 575px) {
        margin-bottom: 10px;
      }
    }

    .faq-area {
      .sec-title {
        h4 {
          color: ${colors.black1};
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 45px;
          font-family: 'Playfair Display', serif;
          span {
            color: ${colors.green};
            font-family: 'Playfair Display', serif;
          }

          @media (max-width: 575px) {
            margin-bottom: 15px;
            font-size: 20px;
          }
        }
      }

      .faq-box {
        .faq-item {
          margin-bottom: 22px;

          button.accordion-button {
            border: none;
            background: transparent;
            margin-bottom: 15px;
            display: block;
            width: 100%;
            padding: 0;
            text-align: left;
            position: relative;

            div.accordion-icon {
              background: ${colors.green};
              height: 18px;
              text-align: center;
              float: left;
              margin-right: 12px;
              position: relative;

              i {
                font-size: 20px;
                color: #ffffff;
                width: 32px;
                line-height: 18px;
                padding-left: 2px;
              }

              &::before {
                content: '';
                position: absolute;
                border-width: 8px 16px;
                border-style: solid;
                border-top-color: transparent;
                border-right-color: transparent;
                border-bottom-color: ${colors.green};
                border-left-color: transparent;
                top: -16px;
                left: 0;
                z-index: 1;
              }

              &::after {
                content: '';
                position: absolute;
                border-width: 8px 16px;
                border-style: solid;
                border-top-color: ${colors.green};
                border-right-color: transparent;
                border-bottom-color: transparent;
                border-left-color: transparent;
                bottom: -16px;
                left: 0;
                z-index: 1;
              }
            }

            p {
              font-size: 16px;
              color: ${colors.black1};
              font-weight: 500;
              line-height: 18px;
              font-family: 'Playfair Display', serif;
            }
          }

          .accordion-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.2s ease-in-out;

            p {
              font-size: 14px;
              color: ${colors.text3};
              line-height: 28px;
              padding-left: 45px;
              font-family: 'Playfair Display', serif;
            }
          }

          .accordion-content.show {
            max-height: 100%;
          }

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }

    @media (max-width: 767px) {
      padding: 30px 0;


     .sec-title br {
        display: none;
    }

      .alignLefts_o {
        display: block !important;
      }
      .event-box .alignLefts {
        display: block !important;
        width: 100% !important;
      }
      .seeMoreBtn {
        display: none;
      }
      .event-area {
        margin-top: 10px;
      }
      .event-box.d-flex {
        display: block !important;
      }
      .seeMoreBtn a {
        font-weight: 700;
        color: red !important;
        font-size: 16px !important;
      }

      .rankingYear p {
        top: 5px;
        font-size: 24px;
        font-weight: 700;
        color: #f02f2f;
        margin-bottom: 5px;
      }
    }
  }
`
