import styled from 'styled-components'
import { colors } from '../elements/elements'

export const Styless = styled.div`
  /* Course Grid */


  p.font-13 {
    font-size: 14px !important;
    line-height: 1.6 !important;
}

  .blog-card {
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px 0px;
    background-color: rgb(255, 255, 255);
    width: 100%;
    padding: 15px;
    position: relative;
    margin: 0px 0px;
  }
  a.blog-card__link {
    display: flex;
    align-items: flex-start;
    height: 100%;
}
.cardImage {
  height: 110px;
  width: 90px;
  flex-shrink: 0;
  background-size: cover !important;
  background-position: center center !important;
  background-repeat: no-repeat !important;
}
h5.card-title {
  padding-left: 15px;
  color: rgb(51, 51, 51);
  font-size: 18px !important;
}
p.designation {
  padding-left: 15px;
  font-style: italic;
  background: rgb(255, 255, 255);
  margin-bottom: 7px;
  margin-top: 4px;
  color: rgb(0, 0, 0);
  font-size: 14px !important;
}
p.card-text {
  width: 100%;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  display: -webkit-box;
  text-overflow: ellipsis;
  margin-bottom: 0px;
  padding-left: 14px;
  color: rgb(51, 51, 51);
  min-height: 80px;
  font-size: 14px !important;
  line-height: 21px !important;
  margin-top:8px;
}
p.designation {
  display: none;
}


  .myPub li {
    position: relative;
    margin: 8px 0;
    padding-left: 0;
    display: block;
    font-size: 1rem !important;
    color: #666666 !important;
    line-height: 25px !important;
  }
  .myPub li:after {
    content: '';
    position: absolute;
    background: #cecece url(../assets/images/check.png);
    width: 25px;
    height: 25px;
    background-size: 11px;
    background-position: center;
    border-radius: 50%;
    background-repeat: no-repeat;
    left: -33px;
    top: 5px;
  }
  .cnt-block h3 a {
    line-height: 1.4;
    display: block;
  }
  .course-fac-top p {
    background: transparent !important;
  }

  .gallery .author {
    display: none;
  }

  .gallery {
    background: rgb(255, 255, 255);
    padding: 20px 30px;
    max-width: 900px;
    margin: auto auto 60px;
    box-shadow: rgb(0 0 0 / 2%) 0px 0px 10px 0px;
  }

  .course-details-top h3 a {
    font-weight: 700;
    line-height: 25px;
    text-transform: uppercase;
    margin-bottom: 0px;
    color: #f02f2f !important;
    font-style: normal;
    font-size: 24px;
    margin-top: 0px;
    display: block;
  }
  .cnt-block.equal-hight p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .row.heading h2 {
    color: #fff;
    font-size: 52.52px;
    line-height: 95px;
    font-weight: 400;
    text-align: center;
    margin: 0 0 40px;
    padding-bottom: 20px;
    text-transform: uppercase;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .heading.heading-icon {
    display: block;
  }
  .padding-lg {
    display: block;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .practice-area.padding-lg {
    padding-bottom: 55px;
    padding-top: 55px;
  }
  .practice-area .inner {
    border: 1px solid #999999;
    text-align: center;
    margin-bottom: 28px;
    padding: 40px 25px;
  }
  .practice-area .inner h3 {
    color: #3c3c3c;
    font-size: 24px;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    padding: 10px 0;
  }
  .practice-area .inner p {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
  }
  .practice-area .inner img {
    display: inline-block;
  }

  .tablePro thead {
    background: #e33535;
    color: #fff;
    font-size: 19px;
  }
  .tablePro tr td a {
    color: white;
    font-size: 12px;
    background: #e33535;
    padding: 6px;
    border-radius: 15px;
  }
  .our-webcoderskull .cnt-block {
    float: left;
    width: 100%;
    background: #fff;
    padding: 10px 10px;
    text-align: center;
    box-shadow: 0px 0px 10px rgb(0 0 0 / 10%);
    height: 100%;
    border-radius: 5px;
  }
  .our-webcoderskull .cnt-block figure {
    width: 148px;
    height: 148px;
    border-radius: 100%;
    display: inline-block;
    margin-bottom: 0px;
    position: relative;
    overflow: hidden;
    border: 2px solid #e2e2e2;
  }
  .our-webcoderskull .cnt-block img {
    width: 100%;
  }
  .our-webcoderskull .cnt-block h3 {
    color: #2a2a2a;
    font-size: 20px;
    font-weight: 500;
    padding: 6px 0;
    text-transform: uppercase;
  }
  .our-webcoderskull .cnt-block h3 a {
    color: #2a2a2a;
    text-transform: capitalize !important;
    font-size: 18px;
  }
  .our-webcoderskull .cnt-block h3 a:hover {
    color: #337ab7;
  }
  .our-webcoderskull .cnt-block p {
    color: #2a2a2a;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    margin: 0;
  }
  .course-details-top ul li {
    position: relative;
    padding-left: 20px;
    line-height: 1.8;
  }
  .course-details-top ul li:after {
    content: '';
    position: absolute;
    background: url(assets/images/check.png);
    width: 14px;
    height: 14px;
    background-size: 100%;
    left: 0;
    top: 8px;
    background-repeat: no-repeat;
  }

  .course-grid-area {
    padding: 70px 0;

    .single-details-sidbar {
      background: #fff;
    }

    .cnt-block h3 {
      margin: 0 !important;
    }

    .course-items {
      .course-item {
        border: 1px solid ${colors.border1};
        border-radius: 5px;
        transition: all 0.2s ease;
        overflow: hidden;
        margin-bottom: 30px;

        .course-image {
          width: 100%;
          height: 240px;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          border-radius: 5px 5px 0 0;
          position: relative;

          .author-img {
            position: absolute;
            left: 20px;
            bottom: 20px;

            img {
              max-width: 40px;
              border-radius: 50%;
              margin-right: 5px;
            }

            .title {
              background: #ffffff;
              padding: 3px 8px;
              border-radius: 5px;

              p {
                font-size: 12px;
                color: ${colors.black1};
                font-weight: 500;
                margin-bottom: -4px;
              }

              span {
                font-size: 11px;
                color: ${colors.text3};
                font-weight: 500;
              }
            }
          }

          .course-price {
            p {
              font-size: 16px;
              color: #ffffff;
              background: ${colors.bg1};
              position: absolute;
              right: 20px;
              bottom: 20px;
              padding: 8px 10px;
              font-weight: 500;
              border-radius: 5px;
            }
          }

          @media (max-width: 767px) {
            height: 185px;
          }
        }

        .course-content {
          background: #fff;
          padding: 20px 25px;

          h6.heading {
            a {
              color: ${colors.black1};
              font-weight: 600;
              display: inline-block;
              margin-bottom: 12px;

              &:hover {
                color: ${colors.green};
              }
            }
          }

          p.desc {
            font-size: 14px;
            color: ${colors.text3};
            line-height: 25px;
            border-bottom: 1px solid ${colors.border1};
            padding-bottom: 10px;
            margin-bottom: 12px;
          }

          .course-face {
            .duration,
            .student {
              p {
                font-size: 13px;
                color: ${colors.text3};

                i {
                  font-size: 16px;
                  color: ${colors.green};
                  vertical-align: text-bottom;
                  margin-right: 3px;
                }
              }
            }

            .rating {
              ul {
                li {
                  margin-right: 0;

                  i {
                    font-size: 14px;
                    color: ${colors.yellow};
                  }

                  &:last-child {
                    font-size: 13px;
                    color: ${colors.text3};
                  }
                }
              }
            }
          }
        }

        &:hover {
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.07);
        }
      }
    }

    @media (max-width: 767px) {
      padding: 40px 0 30px;
    }
  }

  /* Course List */
  .course-list-area {
    padding: 70px 0;
    .course-items2 {
      .course-item {
        border-radius: 5px;
        transition: all 0.2s ease;
        overflow: hidden;
        box-shadow: 0 8px 20px 5px rgba(0, 0, 0, 0.07);
        margin-bottom: 30px;

        .course-image-box {
          .course-image {
            width: 290px;
            height: 230px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 5px 5px 0 0;
            position: relative;

            .author-img {
              position: absolute;
              left: 20px;
              top: 20px;

              img {
                max-width: 40px;
                border-radius: 50%;
                margin-right: 5px;
              }

              .title {
                background: #ffffff;
                padding: 3px 8px;
                border-radius: 5px;

                p {
                  font-size: 12px;
                  color: ${colors.black1};
                  font-weight: 500;
                  margin-bottom: -4px;
                }

                span {
                  font-size: 11px;
                  color: ${colors.text3};
                  font-weight: 500;
                }
              }

              @media (max-width: 991px) {
                top: unset;
                bottom: 20px;
              }
            }

            .course-price {
              p {
                font-size: 16px;
                color: #ffffff;
                background: ${colors.bg1};
                position: absolute;
                right: 20px;
                top: 20px;
                padding: 8px 10px;
                font-weight: 500;
                border-radius: 5px;

                @media (max-width: 991px) {
                  top: unset;
                  bottom: 20px;
                }
              }
            }

            @media (max-width: 991px) {
              width: 100%;
            }
          }
        }

        .course-content {
          background: #fff;
          padding: 20px 25px;

          h6.heading {
            padding-bottom: 12px;
            margin-bottom: 20px;
            position: relative;
            &:before {
              position: absolute;
              content: '';
              background: ${colors.green};
              width: 50px;
              height: 2px;
              bottom: 0;
              left: 0;
            }

            a {
              color: ${colors.black1};
              font-weight: 600;
              display: inline-block;

              &:hover {
                color: ${colors.green};
              }
            }
          }

          .rating {
            margin-bottom: 6px;
            ul {
              li {
                margin-right: 0;

                i {
                  font-size: 14px;
                  color: ${colors.yellow};
                }

                &:last-child {
                  font-size: 13px;
                  color: ${colors.text3};
                }
              }
            }
          }

          p.desc {
            font-size: 14px;
            color: ${colors.text3};
            line-height: 25px;
            margin-bottom: 15px;
          }

          a.details-btn {
            font-size: 13px;
            color: ${colors.green};
            border: 1px solid ${colors.border3};
            padding: 7px 15px;
            border-radius: 5px;
            font-weight: 500;
            &:hover {
              color: #ffffff;
              background: ${colors.gr_bg};
              border-color: ${colors.green};
            }
          }
        }

        &:hover {
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 991px) {
          display: block !important;
        }
      }
    }

    @media (max-width: 767px) {
      padding: 40px 0 30px;
    }
  }

  /* Course Details */
  .course-details-area {
    padding: 70px 0 78px;
    .course-details-top {
      h2 {
        font-weight: 700;
        line-height: 34px;
        text-transform: uppercase;
        margin-bottom: 20px;
        color: #f02f2f !important;
        font-style: normal;
        font-size: 28px;
      }
      .heading {
        h4 {
          font-weight: 700;
          line-height: 34px;
          text-transform: uppercase;
          margin-bottom: 20px;
          color: #f02f2f !important;
          font-style: normal;
          font-size: 28px;

          @media (max-width: 575px) {
            font-size: 20px;
          }
        }
      }
      .course-top-overview {
        margin-bottom: 25px;
        .overviews {
          .author {
            margin-right: 20px;
            padding-right: 20px;
            margin-top: -3px;
            border-right: 1px solid ${colors.border3};
            img {
              float: left;
              max-width: 50px;
              border-radius: 50%;
              margin-right: 10px;
            }
            .author-name {
              float: left;
              margin-top: 3px;
              h6 {
                color: ${colors.black2};
                font-weight: 600;
                text-transform: uppercase;
                margin-bottom: 5px;

                @media (max-width: 767px) {
                  font-size: 14px;
                }
              }
              p {
                font-size: 15px;
                color: ${colors.text3};
                font-weight: 500;

                @media (max-width: 767px) {
                  font-size: 14px;
                }
              }
            }
          }

          .category {
            margin-right: 20px;
            padding-right: 20px;
            border-right: 1px solid ${colors.border3};
            h6 {
              color: ${colors.black2};
              font-weight: 600;
              text-transform: uppercase;
              margin-bottom: 5px;

              @media (max-width: 767px) {
                font-size: 14px;
              }
            }
            p {
              font-size: 15px;
              color: ${colors.text3};
              font-weight: 500;

              @media (max-width: 767px) {
                font-size: 14px;
              }
            }
          }

          .rating {
            margin-right: 20px;
            padding-right: 20px;
            border-right: 1px solid ${colors.border3};
            h6 {
              color: ${colors.black2};
              font-weight: 600;
              text-transform: uppercase;
              margin-bottom: 5px;

              @media (max-width: 767px) {
                font-size: 14px;
              }
            }
            ul {
              li {
                margin-right: 1px;
                i {
                  font-size: 16px;
                  color: ${colors.yellow};
                }
                &:last-child {
                  font-size: 15px;
                  color: ${colors.text3};
                  font-weight: 500;
                  margin-left: 5px;

                  @media (max-width: 767px) {
                    font-size: 14px;
                  }
                }
              }
            }
          }

          .price {
            h6 {
              color: ${colors.black2};
              font-weight: 600;
              text-transform: uppercase;
              margin-bottom: 5px;

              @media (max-width: 767px) {
                font-size: 14px;
              }
            }
            p {
              font-size: 15px;
              color: ${colors.text3};
              font-weight: 500;

              @media (max-width: 767px) {
                font-size: 14px;
              }
            }
          }
        }

        @media (max-width: 480px) {
          display: none;
        }
      }
      .course-details-banner {
        margin-bottom: 40px;
        img {
          border-radius: 5px;
        }
      }
      .course-tab-list {
        .nav {
          display: inline-block;
          border-radius: 5px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          margin-bottom: 35px;
          .nav-item {
            display: inline-block;
            a.nav-link {
              font-size: 14px;
              color: ${colors.black2};
              font-weight: 500;
              text-transform: uppercase;
              padding: 12px 30px 10px;
              border-radius: 5px;

              @media (max-width: 991px) {
                padding: 12px 16px 9px;
              }
            }
            a.nav-link.active {
              background: linear-gradient(90deg, #e4351a 0%, #de513b 100%);
              color: #ffffff;
            }
          }
        }
        .tab-content {
          .overview-tab {
            h5 {
              color: ${colors.black2};
              font-weight: 600;
              padding-bottom: 10px;
              margin-bottom: 20px;
              position: relative;
              &:before {
                position: absolute;
                content: '';
                background: ${colors.green};
                width: 50px;
                height: 2px;
                bottom: 0;
                left: 0;
              }

              @media (max-width: 575px) {
                font-size: 17px;
              }
            }
            p {
              font-size: 15px;
              color: ${colors.text2};
              line-height: 25px;

              @media (max-width: 575px) {
                font-size: 14px;
              }
            }

            .course-desc {
              margin-bottom: 40px;

              h2 {
                color: #444444;
                font-weight: 600;
                padding-bottom: 10px;
                margin-bottom: 20px;
                position: relative;
                margin-top: 30px;
                font-family: 'Poppins';
                font-size: 20px;

                &:before {
                  position: absolute;
                  content: '';
                  background: #11b67a;
                  width: 50px;
                  height: 2px;
                  bottom: 0;
                  left: 0;
                }
              }
            }

            .course-feature {
              margin-bottom: 40px;
              ul {
                margin-top: 20px;
                li {
                  font-size: 14px;
                  color: ${colors.text3};
                  line-height: 25px;
                  margin-bottom: 10px;
                  i {
                    font-size: 20px;
                    color: ${colors.green};
                    float: left;
                    height: 40px;
                    line-height: 27px;
                    margin-right: 10px;
                  }
                  &:last-child {
                    margin-bottom: 0;
                  }
                }
              }
            }
            .course-learn {
              margin-bottom: 40px;
              ul {
                margin-top: 20px;
                li {
                  font-size: 14px;
                  color: ${colors.text3};
                  line-height: 25px;
                  margin-bottom: 15px;
                  i {
                    float: left;
                    color: ${colors.green};
                    border: 1px solid ${colors.border3};
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    text-align: center;
                    padding-top: 9px;
                    margin-top: 8px;
                    margin-right: 15px;
                  }
                  &:last-child {
                    margin-bottom: 0;
                  }
                }
              }
            }
            .course-share {
              ul.social {
                margin-top: 30px;
                li {
                  a {
                    text-align: center;
                    position: relative;
                    height: 18px;
                    display: inline-block;

                    &:before {
                      content: '';
                      position: absolute;
                      border-width: 9px 17px;
                      border-style: solid;
                      border-top-color: transparent;
                      border-right-color: transparent;
                      border-left-color: transparent;
                      top: -18px;
                      left: 0;
                      z-index: 1;
                      transition: all 0.2s ease;
                    }

                    &:after {
                      content: '';
                      position: absolute;
                      border-width: 9px 17px;
                      border-style: solid;
                      border-right-color: transparent;
                      border-bottom-color: transparent;
                      border-left-color: transparent;
                      bottom: -18px;
                      left: 0;
                      z-index: 1;
                      transition: all 0.2s ease;
                    }

                    i {
                      font-size: 14px;
                      color: #ffffff;
                      width: 34px;
                    }

                    &:hover {
                      background-color: ${colors.green} !important;

                      &:before {
                        border-bottom-color: ${colors.green} !important;
                      }

                      &:after {
                        border-top-color: ${colors.green} !important;
                      }
                    }
                  }

                  &:nth-child(1) {
                    a {
                      background-color: #4267b2;

                      &:before {
                        border-bottom-color: #4267b2;
                      }

                      &:after {
                        border-top-color: #4267b2;
                      }
                    }
                  }

                  &:nth-child(2) {
                    a {
                      background-color: #1da1f2;

                      &:before {
                        border-bottom-color: #1da1f2;
                      }

                      &:after {
                        border-top-color: #1da1f2;
                      }
                    }
                  }

                  &:nth-child(3) {
                    a {
                      background-color: #2867b2;

                      &:before {
                        border-bottom-color: #2867b2;
                      }

                      &:after {
                        border-top-color: #2867b2;
                      }
                    }
                  }

                  &:nth-child(4) {
                    a {
                      background-color: #dd1343;

                      &:before {
                        border-bottom-color: #dd1343;
                      }

                      &:after {
                        border-top-color: #dd1343;
                      }
                    }
                  }

                  &:nth-child(5) {
                    a {
                      background-color: #ea4c89;

                      &:before {
                        border-bottom-color: #ea4c89;
                      }

                      &:after {
                        border-top-color: #ea4c89;
                      }
                    }
                  }
                }
              }
            }
          }
          .curriculum-tab {
            .course-curriculum {
              margin-bottom: 40px;
              h5 {
                color: ${colors.black2};
                font-weight: 600;
                padding-bottom: 10px;
                margin-bottom: 20px;
                position: relative;
                &:before {
                  position: absolute;
                  content: '';
                  background: ${colors.green};
                  width: 50px;
                  height: 2px;
                  bottom: 0;
                  left: 0;
                }

                @media (max-width: 575px) {
                  font-size: 17px;
                }
              }
              p {
                font-size: 15px;
                color: ${colors.text2};
                line-height: 25px;

                @media (max-width: 575px) {
                  font-size: 14px;
                }
              }
            }
            .course-element {
              h5 {
                color: ${colors.black2};
                font-weight: 600;
                padding-bottom: 10px;
                margin-bottom: 20px;
                position: relative;
                &:before {
                  position: absolute;
                  content: '';
                  background: ${colors.green};
                  width: 50px;
                  height: 2px;
                  bottom: 0;
                  left: 0;
                }

                @media (max-width: 575px) {
                  font-size: 17px;
                }
              }
              .course-item {
                margin-bottom: 10px;
                button.course-button {
                  border: none;
                  background: transparent;
                  margin-bottom: 15px;
                  display: block;
                  width: 100%;
                  text-align: left;
                  padding: 0;
                  font-size: 18px;
                  color: ${colors.black2};
                  font-weight: 500;
                  span {
                    float: right;
                    font-size: 14px;
                    color: ${colors.text3};
                    font-weight: 400;
                  }
                }

                .course-content {
                  max-height: 0;
                  overflow: hidden;
                  transition: max-height 0.2s ease-in-out;
                  ul {
                    li {
                      border-bottom: 1px solid ${colors.border3};
                      margin-left: 25px;
                      padding: 12px 0;
                      span.play-icon {
                        font-size: 14px;
                        color: ${colors.text3};
                        margin-right: 20px;
                        i {
                          color: ${colors.green};
                          border: 1px solid ${colors.green};
                          font-size: 22px;
                          width: 30px;
                          height: 30px;
                          border-radius: 50%;
                          padding-left: 3px;
                          text-align: center;
                          line-height: 29px;
                          vertical-align: middle;
                          margin-right: 10px;
                        }
                      }
                      span.lecture-title {
                        font-size: 15px;
                        color: ${colors.black2};

                        @media (max-width: 575px) {
                          font-size: 14px;
                        }
                      }
                      span.lecture-duration {
                        float: right;
                        font-size: 14px;
                        color: ${colors.text3};
                        line-height: 28px;
                        font-weight: 400;
                      }
                    }
                  }
                }

                .course-content.show {
                  max-height: 100%;
                  margin-bottom: 40px;
                }

                &:last-child {
                  margin-bottom: 40px;
                }
              }
            }
          }

          .instructor-tab {
            h5 {
              color: ${colors.black2};
              font-weight: 600;
              padding-bottom: 10px;
              margin-bottom: 35px;
              position: relative;
              &:before {
                position: absolute;
                content: '';
                background: ${colors.green};
                width: 50px;
                height: 2px;
                bottom: 0;
                left: 0;
              }

              @media (max-width: 575px) {
                font-size: 17px;
              }
            }

            .instructor-item {
              margin-bottom: 30px;

              .instructor-img {
                img {
                  border-radius: 5px;
                }
              }

              .instructor-content {
                position: relative;

                .instructor-box {
                  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.08);
                  padding: 25px;
                  background: #ffffff;
                  border-radius: 5px;
                  position: absolute;
                  top: 32px;
                  left: -11%;
                  z-index: 1;

                  .top-content {
                    margin-bottom: 20px;

                    .instructor-name {
                      h6 {
                        color: ${colors.black2};
                        font-weight: 600;
                        text-transform: uppercase;
                        margin-bottom: 12px;

                        @media (max-width: 575px) {
                          font-size: 14px;
                        }
                      }
                      p {
                        font-size: 14px;
                        color: ${colors.text3};
                        font-weight: 500;
                      }
                    }
                    .instructor-social {
                      margin-top: 25px;
                      ul.social {
                        li {
                          a {
                            text-align: center;
                            position: relative;

                            &:before {
                              content: '';
                              position: absolute;
                              border-width: 8px 14px;
                              border-style: solid;
                              border-top-color: transparent;
                              border-right-color: transparent;
                              border-left-color: transparent;
                              top: -16px;
                              left: 0;
                              z-index: 1;
                              transition: all 0.2s ease;
                            }

                            &:after {
                              content: '';
                              position: absolute;
                              border-width: 8px 14px;
                              border-style: solid;
                              border-right-color: transparent;
                              border-bottom-color: transparent;
                              border-left-color: transparent;
                              bottom: -16px;
                              left: 0;
                              z-index: 1;
                              transition: all 0.2s ease;
                            }

                            i {
                              font-size: 13px;
                              color: #ffffff;
                              width: 28px;
                            }

                            &:hover {
                              background-color: ${colors.green} !important;

                              &:before {
                                border-bottom-color: ${colors.green} !important;
                              }

                              &:after {
                                border-top-color: ${colors.green} !important;
                              }
                            }
                          }

                          &:nth-child(1) {
                            a {
                              background-color: #4267b2;

                              &:before {
                                border-bottom-color: #4267b2;
                              }

                              &:after {
                                border-top-color: #4267b2;
                              }
                            }
                          }

                          &:nth-child(2) {
                            a {
                              background-color: #1da1f2;

                              &:before {
                                border-bottom-color: #1da1f2;
                              }

                              &:after {
                                border-top-color: #1da1f2;
                              }
                            }
                          }

                          &:nth-child(3) {
                            a {
                              background-color: #2867b2;

                              &:before {
                                border-bottom-color: #2867b2;
                              }

                              &:after {
                                border-top-color: #2867b2;
                              }
                            }
                          }

                          &:nth-child(4) {
                            a {
                              background-color: #dd1343;

                              &:before {
                                border-bottom-color: #dd1343;
                              }

                              &:after {
                                border-top-color: #dd1343;
                              }
                            }
                          }
                        }
                      }
                    }
                  }

                  .instructor-desk {
                    p {
                      font-size: 15px;
                      color: ${colors.text2};
                      line-height: 25px;

                      @media (max-width: 575px) {
                        font-size: 14px;
                      }
                    }
                  }
                }
              }

              &:last-child {
                margin-bottom: 0;
              }
            }
          }

          .review-tab {
            .review-comments {
              margin-bottom: 40px;
              h5 {
                color: ${colors.black2};
                font-weight: 600;
                padding-bottom: 10px;
                margin-bottom: 35px;
                position: relative;
                &:before {
                  position: absolute;
                  content: '';
                  background: ${colors.green};
                  width: 50px;
                  height: 2px;
                  bottom: 0;
                  left: 0;
                }

                @media (max-width: 575px) {
                  font-size: 17px;
                }
              }
              .comment-box {
                border-bottom: 1px solid ${colors.border1};
                padding-bottom: 20px;
                margin-bottom: 25px;
                .comment-image {
                  img {
                    max-width: 100px;
                    border-radius: 5px;
                    margin-right: 20px;
                  }
                }
                .comment-content {
                  .content-title {
                    .comment-writer {
                      h6 {
                        color: ${colors.black2};
                        font-weight: 600;
                        margin-bottom: 10px;

                        @media (max-width: 575px) {
                          font-size: 14px;
                        }
                      }
                      p {
                        font-size: 12px;
                        color: ${colors.text3};
                        margin-bottom: 5px;
                      }
                      ul {
                        margin-bottom: 8px;
                        li {
                          margin-right: 1px;
                          i {
                            font-size: 16px;
                            color: ${colors.yellow};
                          }
                          &:last-child {
                            font-size: 13px;
                            color: ${colors.text2};
                            margin-left: 5px;
                          }
                        }
                      }
                    }
                    .reply-btn {
                      button {
                        font-size: 14px;
                        color: ${colors.green};
                        background: transparent;
                        border: 1px solid ${colors.border3};
                        font-weight: 500;
                        border-radius: 25px;
                        padding: 4px 12px 3px;
                        margin-top: 10px;
                        i {
                          font-size: 17px;
                          vertical-align: text-top;
                        }
                        &:hover {
                          color: #ffffff;
                          background: ${colors.gr_bg};
                          border-color: ${colors.green};
                        }
                      }
                    }
                  }
                  .comment-desc {
                    p {
                      font-size: 14px;
                      color: ${colors.text3};
                      line-height: 25px;
                    }
                  }
                }
                &:last-child {
                  border-bottom: none;
                  padding-bottom: 0;
                  margin-bottom: 0;
                }
              }
            }

            .review-form {
              h5 {
                color: ${colors.black2};
                font-weight: 600;
                padding-bottom: 10px;
                margin-bottom: 25px;
                position: relative;
                &:before {
                  position: absolute;
                  content: '';
                  background: ${colors.green};
                  width: 50px;
                  height: 2px;
                  bottom: 0;
                  left: 0;
                }

                @media (max-width: 575px) {
                  font-size: 17px;
                }
              }
            }
          }
        }
      }

      @media (max-width: 767px) {
        margin-bottom: 40px;
      }
    }

    .single-details-sidbar {
      .course-details-feature {
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        padding: 15px 20px 20px;
        h5.title {
          color: ${colors.black1};
          font-weight: 600;
          padding-bottom: 10px;
          margin-bottom: 20px;
          position: relative;
          &:before {
            position: absolute;
            content: '';
            background: ${colors.green};
            width: 50px;
            height: 2px;
            bottom: 0;
            left: 0;
          }

          @media (max-width: 575px) {
            font-size: 17px;
          }
        }

        ul.feature-list {
          margin-bottom: 20px;
          li {
            border-top: 1px dashed ${colors.border3};
            padding: 12px 0;
            font-size: 14px;
            color: ${colors.black2};
            font-weight: 500;

            i {
              font-size: 20px;
              color: ${colors.green};
              vertical-align: top;
              margin-right: 2px;
            }
            span {
              float: right;
              font-size: 13px;
              color: ${colors.text3};
              font-weight: 400;
              line-height: 20px;
            }
            &:first-child {
              border-top: none;
              padding-top: 0;
            }
            &:last-child {
              padding-bottom: 0;
            }
          }
        }

        button.enroll-btn {
          font-size: 16px;
          color: #fff;
          background: #e4351a;
          display: inline-block;
          width: 100%;
          height: 40px;
          font-weight: 500;
          border: none;
          padding: 9px;
          border-radius: 5px;
          &:hover {
            background: #e4351a;
          }

          @media (max-width: 575px) {
            font-size: 14px;
          }
        }

        @media (max-width: 1199px) {
          padding: 12px 15px 15px;
        }
      }
    }

    @media (max-width: 767px) {
      padding: 20px 0 5px;
    }
  }

  .sticky-menu.main-menu.sticky {
    z-index: 999;
  }

  .top-bar {
    background: ${colors.bg1};
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
            color: #fff;
            text-decoration: none;
            font-family: 'Poppins';

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
        }

        @media (max-width: 991px) {
          display: none;
        }
      }

      ul.bar-lang {
        padding: 10px 15px;

        li {
          .dropdown {
            a.dropdown-toggle {
              font-size: 13px;
              color: ${colors.text4};

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
          margin: 0;
          display: inline-block;

          a {
            font-size: 12px;
            color: #ffffff;
            font-family: 'Poppins';
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0;

            i {
              font-size: 20px;
              color: ${colors.green};
              vertical-align: bottom;
              margin-right: 5px;
            }

            &:hover {
              color: #ffffff;
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

  .logo-area {
    padding: 10px 0;
    width: 100%;
    z-index: 99;
    .logo {
      a {
        img {
          @media (max-width: 991px) {
            max-width: 100%;
            margin-top: 4px;
          }
          width: 140px;
        }
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
        margin-left: 40px;

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
        ul.nav.menu-nav {
          li.nav-item {
            position: relative;

            a.nav-link {
              font-size: 14px;
              color: #4d4d4d;
              text-transform: capitalize;
              font-family: 'Poppins';
              padding: 0.5rem 0.5rem;
              i {
                font-size: 12px;
              }

              &:after {
                content: none;
              }

              &:hover {
                color: #e8223b;
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

  .gallery {
    margin-top: 1rem;
    h5 {
      font-weight: 700;
      line-height: 34px;
      text-transform: uppercase;
      margin-bottom: 20px;
      color: #f02f2f !important;
      font-style: normal;
      font-size: 28px;
    }

    figure.snip1139 {
      position: relative;
      overflow: hidden;
      width: 100%;
      color: #333;
      text-align: left;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
      border-radius: 8px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-transition: all 0.35s cubic-bezier(0.25, 0.5, 0.5, 0.9);
      transition: all 0.35s cubic-bezier(0.25, 0.5, 0.5, 0.9);
    }

    figure.snip1139 img {
      max-width: 100%;
      vertical-align: middle;
    }
    figure.snip1139 blockquote {
      position: relative;
      background-color: #ffffff;
      padding: 5px;
      font-size: 0.8em;
      font-weight: 500;
      text-align: left;
      margin: 0;
      line-height: 1.6em;
      font-style: italic;
    }

    figure.snip1139 .arrow {
      top: 100%;
      width: 0;
      height: 0;
      border-left: 0 solid transparent;
      border-right: 25px solid transparent;
      border-top: 25px solid #ffffff;
      margin: 0;
      position: absolute;
    }
    figure.snip1139 .author {
      bottom: 0;
      width: 100%;
      padding: 5px 10px;
      color: #000000;
      background-color: #ffffff;
      margin: 0;
      text-transform: uppercase;
    }
    figure.snip1139 .author h5 {
      opacity: 0.8;
      margin: 0;
      font-weight: 800;
      font-size: 16px;
      line-height: 22px;
    }
  }

  .whyEnroll {
    h5,
    h4 {
      font-weight: 700;
      line-height: 34px;
      text-transform: uppercase;
      margin-bottom: 20px;
      color: #f02f2f !important;
      font-style: normal;
      font-size: 28px;
    }
  }

  .placements {
    h4 {
      font-weight: 700;
      line-height: 34px;
      text-transform: uppercase;
      margin-bottom: 20px;
      color: #f02f2f !important;
      font-style: normal;
      font-size: 28px;
    }
  }

  .research {
    h4 {
      font-weight: 700;
      line-height: 34px;
      text-transform: uppercase;
      margin-bottom: 20px;
      color: #f02f2f !important;
      font-style: normal;
      font-size: 28px;
    }
  }

  .activeHome:after {
    content: '' !important;
    position: absolute;
    border-right: 8px solid red;
    border-top: 8px solid transparent;
    bottom: -7px;
    left: 44%;
    transform: rotate(45deg);
  }
  .sideBars h6 {
    color: #0f459a;
  }
  .sideBars p {
    margin: 12px 0;
  }

  .card {
    padding: 0;
  }
  .card-title.h5 {
    font-size: 16px;
  }

  @media (max-width: 767px) {
    .tablePro tr td a {
      color: white;
      font-size: 10px;
      background: #e33535;
      padding: 5px 12px;
      border-radius: 15px;
      display: block;
      white-space: nowrap;
    }
  }

  .newData p {
    color: #fff !important;
  }
`

export const Styles = styled.div`
  .userDetailCard span {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }
  .slick-slide {
    padding: 0 10px;
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
  .userDetailCard {
    background: rgb(248, 247, 246);
    padding: 15px;
    display: flex;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 20%) 0px 0px 7px 0px;
    height: 100%;
  }
  .userContent h5 {
    font-size: 15px;
    font-weight: 700;
  }
  section.moreFac {
    background: #fff;
    padding: 25px 0px 50px 0;
  }

  .image {
    max-height: 170px;
    overflow: hidden;
  }
  .image img {
    margin: 0 !important;
}
  @media screen and (max-width: 767px) {
    .bg-custom
    {
      height:auto !important;
    }
    .testimonial-aca .slick-next {
      right: 0px;
  }
  .testimonial-aca  .slick-prev {
    left: -20px;
}
.gallery  .image span {
  width: 100% !important;
}
    .videoMosdal {
      display: none;
    }
    .sliderForBio .slider-wrapper {
      height: 100%;
      margin-bottom: 30px;
    }
    .scSlider .slider-tablecell {
      height: 55vh;
    }
    .slider-tablecell {
      align-items: center !important;
    }
    .slider-content.slider-image {
      background-size: cover !important;
    }
    .comapnies-cards .card img {
      width: 100% !important;
      padding: 10px;
    }
    .research ul li {
      width: 100% !important;
    }
    .sec-para li a {
      display: block;
      
    }
    .facCard .MuiCardHeader-root {
      display: block !important;
      text-align: center;
    }
    .facCard .MuiCardHeader-avatar {
      justify-content: center;
    }
    .facultyProfile h4 {
      text-align: center;
    }
    .facultyProfile:after {
      left: 48% !important;
    }
  }

  .facultyProfile .facCard {
    height: auto;
  }
  .facCard span.MuiTypography-h5 {
    font-size: 16px;
    color: #333;
  }
  .facCard .MuiTypography-body1 {
    font-size: 14px;
    color: #a7a7a7;
    font-weight: 300;
  }
  .bgClr-light {
    background: #f8f7f5 !important;
  }

  .facultyProfile {
    position: relative;
  }
  .whyEnroll li {
    display: block;
  }
  .MuiCardHeader-title {
    font-size: 17px;
    color: #333;
    font-weight: 700;
  }
  .color-red h2 {
    color: #f2072f !important;
  }

  .templateHeading h4 {
    font-size: 32px;
    font-weight: 700;
    line-height: 30px;
    text-transform: uppercase;
    margin-bottom: 10px;
    color: #f02f2f;
    font-style: normal;
  }

  .snip1527 {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    color: #ffffff;
    float: left;
    font-family: 'Lato', Arial, sans-serif;
    font-size: 16px;
    margin: 10px 1%;
    min-width: 250px;
    overflow: hidden;
    position: relative;
    text-align: left;
    width: 100%;
    height: 95%;
  }

  .snip1527 * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
  }

  .snip1527 img {
    max-width: 100%;
    vertical-align: top;
    position: relative;
  }

  .snip1527 figcaption {
    padding: 10px 10px 10px;
    bottom: 0;
    z-index: 1;
    width: 100%;
  }

  .snip1527 figcaption:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    content: '';

    opacity: 1;
    z-index: -1;
  }

  .snip1527 .date {
    background-color: #fff;
    border-radius: 50%;
    color: #333;
    font-size: 18px;
    font-weight: 700;
    min-height: 48px;
    min-width: 48px;
    padding: 10px 0;
    position: absolute;
    right: 15px;
    text-align: center;
    text-transform: uppercase;
    top: -25px;
  }

  .snip1527 .date span {
    display: block;
    line-height: 14px;
  }

  .snip1527 .date .month {
    font-size: 11px;
  }

  .snip1527 h3,
  .snip1527 p {
    margin: 0;
    padding: 0;
  }

  .snip1527 h3 {
    display: inline-block;
    font-weight: 700;
    -webkit-letter-spacing: -0.4px;
    -moz-letter-spacing: -0.4px;
    -ms-letter-spacing: -0.4px;
    letter-spacing: 0;
    margin-bottom: 0 !important;
    font-size: 16px !important;
    line-height: 1.6 !important;
    color: #333 !important;
    text-transform: uppercase;
  }

  .snip1527 p {
    font-size: 0.8em;
    line-height: 1.6em;
    margin-bottom: 0px;
  }

  .snip1527 a {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    z-index: 1;
  }
  .research ul li:after {
    content: '';
    position: absolute;
    background: #cecece url(assets/images/check.png);
    width: 20px;
    height: 20px;
    background-size: 9px;
    background-position: center;
    border-radius: 50%;
    background-repeat: no-repeat;
    left: -27px;
    top: 4px;
  }
  .snip1527:hover img,
  .snip1527.hover img {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  .research ul li {
    width: 50%;
    float: left;
    position: relative;
  }
  .newFac {
    background: #fff;
    padding: 20px 0;
    box-sizing: border-box;
  }
  .newFac p {
    margin: 0;
    font-size: 14px !important;
  }
  .font-300 {
    font-weight: 300;
  }
  .card {
    height: 100%;
  }
  .newData p {
    color: #fff !important;
  }
  .bgSearch {
    background: #f2072f;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 1;
    transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
    color: #fff;
  }
  .comapnies-cards .card img {
    width: 150px;
  }

  .card img {
    height: auto !important;
    min-height: auto !important;
}

  .comapnies-cards .card {
    padding:10px;
  }
  .sec-para li a {
    background: #f2072f;
    padding: 10px;
    color: #fff;
    border-radius: 5px;
    display: inline-block;
    margin-bottom: 7px;
  }
  .sec-para ul {
    padding: 0;
  }
  .sec-para ul li {
    display: inline-block;
  }
  .templateOne,
  .highLights {
    .section-title h2 {
      width: 80%;
      margin: auto;
      font-weight: 700;
    }
    .sec-para {
      background: rgb(255, 255, 255);
      padding: 20px 30px;
      margin: 0 20px;
      box-shadow: rgb(0 0 0 / 10%) 0px 0px 15px 0px;
    }
    .sec-para2 {
      background: rgb(255, 255, 255);
      max-width: 1100px;
      margin: auto auto 60px;
      box-shadow: rgb(0 0 0 / 10%) 0px 0px 15px 0px;
    }
    .hgContent {
      height: 100%;
      background: #f2072f;
      color: #fff;
      padding: 30px 50px;
      text-align: left;
      display: flex;
      align-items: center;
    }
    .hgContent p {
      border-bottom: 1px solid #fff;
      padding: 6px 0;
      margin: 0;
    }
    .sec-title h2 {
      color: #fff;
    }
    thead {
      background: #f2072f;
      color: #fff;
      font-size: 24px;
    }
    tbody td {
      line-height: 1.6;
      font-weight: 400;
      min-width: 301px;
    }

    .placements-list {
      max-width: 100%;
      margin: auto;
    }

    .placements-list tr td:nth-child(1) {
      font-weight: 700;
    }
    .text-darks {
      color: #333 !important;
    }
    .section-title h2 {
      color: #f02f2f;
    }
  }

  .facLisHeading .card p {
    font-weight: 400;
    color: #f2072f;
  }

  @media (max-width: 767px) {
    .resrchTxt.Slide h5 {
      font-size: 26px !important;
    }
    .resrchTxt.Slide {
      background: #f2072f;
      padding: 30px;
      position: inherit !important;
    }
    .atBottom {
      position: relative;
      top: 0 !important;
    }
    .videoMosdal {
      margin-top: 0;
    }
  }

  .newData > p {
    border: 0 !important;
  }
  .newData h2 {
    font-weight: 900;
    font-size: 58px;
    text-transform: uppercase;
    color: #fff;
    line-height: 1;
  }
  .whyEnroll ul li {
    position: relative;
    padding-left: 40px;
    line-height: 1.6;
    padding-top: 4px;
  }

  .whyEnroll ul li:after {
    content: '';
    position: absolute;
    background: #cecece url(assets/images/check.png);
    width: 20px;
    height: 20px;
    background-size: 9px;
    background-position: center;
    border-radius: 50%;
    background-repeat: no-repeat;
    left: 11px;
    top: 4px;
  }

  p.font-300 {
    width: 100%;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    text-overflow: ellipsis;
    margin-bottom: 0;
}


.voices-image {
  border-radius: 30px 0px 0px 30px;
  position: relative;
  overflow: hidden;
  
}
.voices-image img{
width:100%;    
}
.card-box-dark {
  background: rgb(29, 29, 31);
}
.voices-text {
  border-radius: 0px 30px 30px 0px;
  padding: 25px;
}
.pl-md-0 {
  padding-left: 0 !important;
}
.pr-md-0 {
  padding-right: 0 !important;
}

.all-discription h4 {
  font-size: 20px !important;
}
.all-discription p {
  font-size: 14px !important;
  line-height: 23px !important;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 8;
  overflow: hidden;
}
.fixHeight {
  max-height: 490px;
  position: relative;
  overflow: hidden;
}

IMDetail {
  position: relative;
  z-index: 99;
  max-width: 320px;
  top: -50px;
  left: 40px;
  background: rgb(255, 255, 255);
  padding: 18px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px 0px;
  border-radius: 5px;
}

.bg-custom {
  background: #1d1d1f;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
  height: 307px;
}
button.readmoreText {
  display: inline-block;
  border: 0;
  text-decoration: underline;
  background: transparent;
  color: #f2072f;
}

.heading-left {
  font-size: 34px;
  font-weight: 600;
  color: #e41a1a;
  line-height: 1.4em;
  margin-bottom: 20px;
  letter-spacing: 0.25px;
}
.fac-img img {
  width: 70px;
}
.fac-img {
  width: 70px;
  height: 70px;
  position: relative;
  overflow: hidden;
  border-radius:10px;
}
ul.opp-list table {
max-height: 200px;
overflow: auto;
}
.feedbacksection .fac-img img {
width: 100%;
}
ul.opp-list table td {
display: table-row;
}

.feedbacksection .fac-mem {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: unset;
  -ms-flex-wrap: unset;
  flex-wrap: wrap;
}
.fac-img {
border-radius:50%;
}
a.blog-card__link {
display: flex;
align-items: center;
height: 100%;
}
.cardImage {
height: 110px;
width: 90px;
flex-shrink: 0;
background-size: cover !important;
background-position: center !important;
background-repeat: no-repeat !important;
}

.blog-card {
  border-radius: 4px;
  box-shadow: 0 0 5px 0 rgba(0,0,0,.2);
  background-color: #fff;
  width: 100%;
  padding: 15px;
  position: relative;
  margin: 15px 0;
}

a.blog-card__link {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: flex-start;
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
  height: 100%;
}


p.card-text {
  width: 100%;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  display: -webkit-box;
  text-overflow: ellipsis;
  margin-bottom: 0;
  padding-left: 14px;
  font-size: 15px !important;
  line-height: 21px !important;
  color: #333;
  min-height: 80px;
}
h5.card-title {
  font-size: 18px !important;
  padding-left: 15px;
  color: #333;
}

.post-list-item .event-item {
  position: relative;
  margin-bottom: 30px;
  padding-left: 30%;
  background: rgb(255, 255, 255);
  color: rgb(153, 153, 153);
  overflow: hidden;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 12px -1px;
  border-radius: 10px;
  transition: all 0.2s ease 0s;
}
.event-item-thumbnail {
  position: absolute;
  width: 30%;
  left: 0px;
  top: 0px;
  height: 100%;
  padding-top: 0px;
  border-radius: 10px 0px 0px 10px;
  backface-visibility: hidden;
}
.event-item-thumbnail .placeholder-thumbnail-bg {
  position: absolute;
  width: 100%;
  left: 0px;
  top: 0px;
  height: 100%;
  background-size: cover;
  background-position: center center;
  transition: all 0.2s ease 0s;
  overflow: hidden;
}
.event-item-content {
  padding: 15px 20px;
}
.event-title.font-2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: rgb(13, 110, 253);
  font-weight: 500;
  font-size: 18px !important;
  margin: 0;
}
.post-list-item .event-excerpt {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 5px;
}
.event-excerpt p {
  color: rgb(51, 51, 51);
  font-family: Poppins;
  margin: 0px;
  font-size: 14px !important;
}


a.AppyBtn {
  line-height: 17px;
  color: rgb(255, 255, 255);
  border: 1px solid rgb(228, 26, 26);
  padding: 15px;
  margin: 10px 0px;
  box-shadow: rgba(0, 0, 0, 0.2) 4px 4px 5px;
  width: 220px;
  display: inline-block;
  text-align: center;
  border-radius: 5px;
  font-size: 17px !important;
  background-color: rgb(228, 26, 26) !important;
}


p.designation {
  padding-left: 15px;
  font-style: italic;
  font-size: 14px !important;
  background: #fff;
  margin-bottom: 7px;
  margin-top: 4px;
  color: #000;
}

.visionMision h3 {
  font-size: 21px;
  font-weight: 700;
}

`
