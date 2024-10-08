import styled from 'styled-components'
import { colors } from '../../../components/common/elements/elements'

export const Styless = styled.div`
  /* Course Grid */

  button.closebtn {
    width: 30px;
    height: 30px;
    display: block; 
    background: linear-gradient(45deg, #fa0618 , #fa2b93);
    color: #fff;
    font-weight: bold;
    border: 0;
    position: absolute;
    top: 0;
    right: 0px;
}

  .course-grid-area {
    padding: 70px 0;
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
  .course-feature li {
    color: #333 !important;
    line-height: 1.6rem !important;
  }
  /* Course Details */
  .course-details-area {
    padding: 40px 0 78px;
    .course-details-top {
      .heading {
        h4 {
          color: ${colors.black1};
          font-weight: 600;
          line-height: 35px;
          margin-bottom: 0px;

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
          box-shadow: none;
          margin-bottom: 35px;
          background: #d8ddfe;
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

        .course-feature ul {
          margin: 0 !important;
        }

        .tab-content {
          .overview-tab {
            h5,
            h2 {
              color: ${colors.black2};
              font-weight: 600;
              padding-bottom: 10px;
              margin-bottom: 20px;
              position: relative;
              font-family: 'Poppins';
              font-size: 1.25rem;
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
            }

            .course-feature {
              margin-bottom: 40px;
              ul {
                margin-top: 20px;
                li {
                  font-size: 15px;
                  color: ${colors.text3};
                  line-height: 20px;
                  margin-bottom: 0px;
                  i {
                    font-size: 20px;
                    color: ${colors.green};
                    float: left;
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
                      margin-left: 0px;
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
            h2, h5 {
              color: ${colors.black2};
              font-weight: 600;
              padding-bottom: 10px;
              margin-bottom: 35px;
              position: relative;
              font-size:20px !important;
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

                  z-index: 1;

                  .top-content {
                    margin-bottom: 0px;

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
                    max-width: 160px;
                    border-radius: 5px;
                    margin-right: 20px;
                  }
                }
                .comment-content {
                  .content-title {
                    .comment-writer {
                      h3 {
                        color: rgb(51, 51, 51) !important;
                        font-weight: 600;
                        margin-bottom: 10px;
                        font-size: 1rem;
                        text-transform: capitalize;

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

    .course-details-feature .feature-list h3 {
      font-size: 13px !important;
      color: #333 !important;
      font-weight: 700;
      line-height: 20px;
      text-transform: capitalize !important;
  }

    .single-details-sidbar {
      .course-details-feature {
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        padding: 15px 20px 20px;
        font-size:20px !important;
        h2.title {
          color: ${colors.black1};
          font-weight: 600;
          padding-bottom: 10px;
          margin-bottom: 20px;
          position: relative;
          font-size:20px !important;
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

  .activeHome:after {
    content: '' !important;
    position: absolute;
    border-right: 8px solid red;
    border-top: 8px solid transparent;
    bottom: -7px;
    left: 44%;
    transform: rotate(45deg);
  }
  .car-opp ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .course-details-top {
    padding: 15px;
    background: #fff;
  }
  p.secrty {
    font-size: 12px;
    padding: 10px;
    background: #96e6a7;
    text-align: center;
    border: 2px dashed #fff;
  }

  .feature-list {
    display: flex;
    flex-wrap: wrap;
  }

  .feature-list li {
    width: 100%;
  }
.pl-0
{
  padding-left:0px !important;
}

  .overview-tab ul li {
    position: relative;
    display: block;
    padding: 6px 11px;
  }
  table.cj-wysiwyg-table li a,
  table.cj-wysiwyg-table li span strong,
  table.cj-wysiwyg-table li a span {
    line-height: 1.6;
    display: block;
    color: #333 !important;

  }
  
  td,
  th {
    vertical-align: top;
  }

  @media screen and (max-width: 767px) {


    td {
      width: 50%;
   
    }

    .course-curriculum {
      width: 100%;
      position: relative;
      overflow-x: auto;
  }
  

    .nav .nav-item a.nav-link {
      padding: 8px 10px 7px !important;
      font-size: 14px !important;
      display: block;
      margin: 7px 3px;
      background: #cecece;
    }

    .course-tab-list .nav {
      background: transparent !important;
  }

  .course-feature table {
    overflow: auto;
}

  }

  .snip1527 {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    color: #ffffff;
    float: left;
    font-family: 'Lato', Arial, sans-serif;
    font-size: 16px;
    margin: 10px 1%;
    max-width: 100%;
    min-width: 250px;
    overflow: hidden;
    position: relative;
    text-align: left;
    width: 100%;
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
    position: absolute;
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
    background: #700877;
    content: '';
    background: -moz-linear-gradient(
      90deg,
      #700877 0%,
      #ff2759 100%,
      #ff2759 100%
    );
    background: -webkit-linear-gradient(
      90deg,
      #700877 0%,
      #ff2759 100%,
      #ff2759 100%
    );
    background: linear-gradient(90deg, #700877 0%, #ff2759 100%, #ff2759 100%);
    opacity: 0.8;
    z-index: -1;
  }

  .snip1527 .date {
    background-color: #fff;
    border-radius: 50%;
    color: #700877;
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
    font-weight: 400;
    -webkit-letter-spacing: -0.4px;
    -moz-letter-spacing: -0.4px;
    -ms-letter-spacing: -0.4px;
    letter-spacing: 0;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 1.6;
    color: #fff !important;
    text-transform: capitalize;
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

  .snip1527:hover img,
  .snip1527.hover img {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  .course-curriculum tr:nth-child(1) {
    white-space: nowrap;
  }
  .course-curriculum table td {
    vertical-align: middle !important;
    border-color: #e4e4e4 !important;
  }

  .course-curriculum table {
    width: 100% !important;
  }

  .course-curriculum table td p {
    margin: 0px !important;
  }

  .fessOf h5 {
    font-size: 13px;
    color: #969696;
    font-weight: 400;
    line-height: 20px;
}
.fessOf {
  margin-top: 14px;
}
p.secrty {
  font-size: 13px !important;
}

h3.faqTitle {
  text-transform: inherit !important;
  font-weight: 500 !important;
  font-size: 16px !important;
  color: #333 !important;
}
.course-desc  h3.faqTitle  
{
 color: #333 !important;
}
 


.sliderForBio {
  background: url(../assets/images/heroImgforCourse.jpg);
  background-size: 100%;
  background-position: bottom;
}


/// new [page css]


@media (min-width: 991px)
{
#bg-image.new-header.aiml-new__header {
    margin-bottom: 0px;
    padding-bottom:0px;
}

#bg-image.new-header {
    background-size: cover !important;
    margin-bottom: 0;
    min-height: auto;
    height: unset;
}
#bg-image.new-header .container .play-btn-area {
    width: 97%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 40px;
}
area .video-play-button {
    top: 165px;
    left: 10px;
    z-index: 10;
    box-sizing: content-box;
    display: block;
    width: 28px;
    height: 35px;
    border-radius: 50%;
    padding: 18px 20px 18px 28px;
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
}
#bg-image.new-header .container .header-content img {
    height: 40px;
}
#bg-image.new-header .container .header-content p.banner-heading-aiml {
    padding: 4px 6px !important;
    margin: 0;
}
#bg-image.new-header .container .header-content p.banner-subheading-aiml {
    font-size: 33px;
    margin:0px;
}
#bg-image.new-header .container .header-content ul {
    margin-bottom: 0;
    direction: ltr;
    padding-left: 0;
}
#bg-image.new-header .container .header-content ul li {
    display: inline; 
    position: relative;
    font-size: 14px;
    color: rgba(0,0,0,0.6);
}
#bg-image.new-header .container .header-content #top-banner-button-section.grid-column-reverse {
    flex-direction: row-reverse;
}
#bg-image.new-header .container .header-content .button-section {
    position: static;
    width: 100%;
    display:flex;
    flex-direction: row;
}
#bg-image.new-header .container .play-btn-area .video-play-button:before {
    width: 80px;
    height: 80px;
}
#bg-image.new-header .container .play-btn-area {
    height: 412px;
    top: 0;
}
#bg-image.new-header .container .play-btn-area .video-play-button {
    top: 101px;
    left: 23px;
    width: 40px;
    height: 44px;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
#bg-image.new-header .container .play-btn-area .video-play-button span {
    border-left: 32px solid #000000;
    border-top: 22px solid transparent;
    border-bottom: 22px solid transparent;
}
}
.play-btn-area .video-play-button:after {
    width: 100px !important;
    height: 100px !important;
}
#bg-image.new-header .container .play-btn-area .video-play-button span {
    display: block;
    position: relative;
    z-index: 3;
    width: 0;
    height: 0;
    border-left: 28px solid #000000;
    border-top: 18px solid transparent;
    border-bottom: 18px solid transparent;
}
#bg-image.new-header .container .play-btn-area .video-play-button {
    top: 165px;
    left: 10px;
    z-index: 10;
    box-sizing: content-box;
    display: block;
    width: 28px;
    height: 35px;
    border-radius: 50%;
    padding: 18px 20px 18px 28px;
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
}
#bg-image.new-header .container .play-btn-area {
    width: 97%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 40px;
}

#bg-image.new-header .container .header-content {
    position: relative;
    background-color: #ffffff;
    margin-top: 80px;
    box-shadow: 0 1px 5px 0 rgba(0,0,0,0.2), 0 3px 1px -2px rgba(0,0,0,0.12), 0 2px 2px 0 rgba(0,0,0,0.14);
    border-radius: 12px;
    padding: 30px 25px;
    margin-bottom: 80px;
}
#bg-image.new-header .container .header-content #top-banner-button-section.grid-column-reverse {
    flex-direction: column;
    justify-content: flex-end;
    direction: ltr;
}
#bg-image.new-header .container .header-content .banner-app-deadline-section {
    position: absolute;
    bottom: -175px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 100%;
    text-align: center;
}
 .lc-btn-section a {
    font-size: 17px !important;
    border: 1px solid #3e3e3e;
    line-height: 17px;
    background-color:#e41a1a !important;
    color: #ffffff;
    border: 1px solid #e41a1a;
    padding: 15px;
    margin: 10px 0;
    box-shadow: 4px 4px 5px rgba(0,0,0,.2);
}

.application-btn-section a {
    font-size: 17px !important;
    color: #3e3e3e;
    border: 1px solid #3e3e3e;
    background-color: transparent;
    line-height: 17px;
    padding: 15px;
    width: 226px;
    font-size: 17px!important;
    margin: 10px 0;
    margin-left: 20px;
}


 .application-btn-section {
    margin-right: 20px;
}
#bg-image {
    background-image: url(https://d1vwxdpzbgdqj.cloudfront.net/aiml-pp-new/aiml-bg-mob.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
}
.header-content p.banner-heading-aiml {
    font-size: 12px;
    color: rgba(0,0,0,0.6);
    font-weight: 500;
    margin-top: 8px;
    margin-bottom: 10px;
    line-height: 24px;
    background-color: #e8f0fc;
    padding: 4px 6px;
    top: -90% !important;
}
.header-content p.banner-heading-aiml {
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    margin: 8px auto 0;
    padding: 4px 24px;
}
span.learner-ratings-container img {
    width: 80px;
    height: 16px;
}
.fixed-size-btn {
    width: 226px;
    font-size: 17px!important;
}

.btn-style {
    text-align: center;
    text-decoration: none;
    border-radius: 4px;
    display: inline-block;
    cursor: pointer;
    line-height: 1;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

.img-fluid {
    max-width: 100%;
    height: auto;
}
.mobOn {
    display: none;
}
.mobOff {
    display: block;
}
.featureDiv {
    clear: both;
    padding: 60px 0 40px;
}
.fDiv {
    position: relative;
    margin-bottom: 20px;
}

.couIcon {
    background: rgba(12,27,77,.1);
    border-radius: 6px;
    width: 60px;
    height: 60px;
    padding: 14px;
    position: absolute;
}

.fDiv p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
}
.fDiv ul {
    margin: 0;
    padding-left: 0;
}
.fDiv li {
    font-size: 17px;
    list-style: none;
    font-family: 'Poppins';
}
.couCont {
    margin-left: 80px;
}

.featureDiv .mobIconLP {
    display: none;
}
#bg-image.new-header .container .play-btn-area .video-play-button:before {
    content: "";
    position: absolute;
    z-index: 0;
    left: 50%;
    top: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    display: block;
    width: 100px;
    height: 100px;
    background: #f4f4f4;
    border-radius: 50%;
    -webkit-animation: pulse-border 1500ms ease-out infinite;
    animation: pulse-border 1500ms ease-out infinite;
}
#bg-image.new-header .container .play-btn-area .video-play-button:after {
    content: "";
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    display: block;
    width: 60px;
    height: 60px;
    background: #ffffff;
    border-radius: 50%;
    transition: all 200ms;
}
.small-font{
    color: rgba(0,0,0,0.6);
    font-size: 15px !important;
}
.header-content ul li {
  color: rgba(0,0,0,0.6);
}
 
.curriculum-data-card {
    margin: 0 5px;
    padding: 9px;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 4px 4px 24px 0 rgba(0,0,0,.1);
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    min-width: 150px;
}
.curriculum-data-card h3 {
    font-size: 24px;
}
.curriculum-data-card p {
    font-size: 14px;
}
.curriculum-data-card h3 {
    font-size: 18px;
    margin-bottom: 5px;
    text-align: left;
}
.curriculum-data-card p {
    margin-bottom: 0;
    font-size: 12px;
}
.bg-color-green {
    background-color: #00c48c;
}
.curriculum-data-card .icon-wrapper {
    height: 52px;
    width: 52px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
}
.bg-color-purple {
    background-color: #705ded;
}
.curriculum-data-card {
    margin: 20px auto;
    width: 235px;
    padding: 12px;
}
 
.opp-list h2
{
  font-size: 18px;
}
h4.font-18:after {
    content: "";
    position: absolute;
    left: -16px;
    top: 0px;
    height: 100%;
    border-radius: 5px;
    border-left: 2px solid #196ae5;
    z-index: 1;
}
h4.font-18 {
    position: relative;
}
.curriculum-head__title {
    font-size: 28px;
    margin-bottom: 20px;
    color: #e41a1a;
    font-weight: 700;
}
.colrosText a {
  color: #333;
}
section.overview {
    padding: 30px 0px;
    background: #fff;
}
ul.opp-list {
  padding-left: 0;
}
ul.opp-list p {
  font-size: 14px !important;
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
  width: 100%;
  object-fit: cover;
  height: 100%;
}
.fac-img {
    width: 130px;
    height: 120px;
    position: relative;
    overflow: hidden; 
}
ul.opp-list table { 
  overflow: auto;
}
.feedbacksection .fac-img img {
  width: 100%;
}
table.cj-wysiwyg-table td {
  padding: 10px;
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


.fac-mem {
    display: flex;
    flex-wrap: unset;
}
.fac-list {
  padding-left: 10px;
  padding-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
}
.fac-list h5 {
    text-align: left;
    margin-bottom: 0;
    font-size: 17px;
}
.fac-mentor .fac-mem {
    padding: 15px;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,.1);
    border: 1px solid transparent;
    height: 100%;
    width: 97%;
    background-color: #fff;
    transition: all .3s ease-out;
}

.allFaculty .allFac-Card {
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,.1);
  border: 1px solid transparent;
  height: 100%;
  width: 288px;
  background-color: #fff;
  transition: all .3s ease-out;
  margin:10px 0px;
}
.allFac-Card p {
  width: 250px;
}

.fac-mems .fac-img {
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden; 
}
.fac-mems  .fac-list {
  padding-left: 0;
}
.fac-mems  .fac-img img {
  width: 100%;
  object-fit: cover;
}

.pagetitle {
    max-width: 800px;
    text-align: left;
    margin: 28px 0;
}
 .fac-list p {
  font-size: 14px !important;
  font-weight: 300;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top:6px;
}
.feedback p {
    font-size: 14px !important;
    line-height: 22px !important;
}
.feedback {
    margin: 10px 0;
}
.feedbacksection .fac-mem{
    border: 1px solid #e8e8e8 !important;
}
.font-18{
    font-size:18px;
}
.text-left{
    text-align:left !important;
}
ul.opp-list li {
    position: relative;
    display: inline-block; 
}

table.cj-wysiwyg-table ul li a {
  display: inline-block;
  background: #e1e1e1;
  width: 100%;
}


ul.opp-list ul {
  padding: 0;
}
.opp-list td ul li { 
  padding-left: 24px !important;
}
.opp-list td ul li:after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background: #9f9f9f;
  left: 10px;
  top: 20px;
}
table.cj-wysiwyg-table td {
  padding: 10px 5px 0px 0px;
}
.font-20 { 
  font-weight: 700;
}
.font-14
{
    font-size:14px !important;
}
section.fac-mentor {
    margin-bottom: 40px;
}

.overview .curriculum-head-container {
    text-align: center;
}
a.primary-button.feeBtn {
    background: #1467d8 !important;
    border-color: #1467d8 !important;
}
h5.card-title {
  text-align: left;
  font-size: 13px;
  padding-left: 16px;
  margin: 0;
  line-height: 18px;
  font-weight: 500;
  color: #333;
}
p.card-text {
  font-size: 15px !important;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  overflow: hidden;
  text-overflow: ellipsis;
}
.cardImage {
  position: relative;
  max-height: 170px;
  overflow: hidden;
}
a.btn-larges{
  width: 100%;
  font-size: 15px;
}

a.btnss {
  position: absolute;
  bottom: 8px;
  right: 14px;
  font-size: 12px;
  color: #017bfe;
  margin: 0;
  bottom: 9px;
}


ul.catgory li {
  display: inline-flex;
  font-size: 13px;
  padding: 1px 5px;
  margin-right: 4px;
  background: #e41a1a;
  color: #fff;
}
ul.catgory {
  padding: 0;
}

button.slick-arrow.slick-prev {
  width: 52px;
  height: 52px;
  background-color: #fff;
  box-shadow: 0 0 16px 4px rgba(0,0,0,.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  left: -40px;
}
button.slick-arrow.slick-next {
  width: 52px;
  height: 52px;
  background-color: #fff;
  box-shadow: 0 0 16px 4px rgba(0,0,0,.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  right: -40px;
}
.slick-prev:before {
  left: 14px;
  background-size: 100%;
  transform: rotate(180deg);
  opacity: 0.2 !important;
  top: 17px !important;
}
.slick-next:before {
  left: 17px;
  background-size: 100%;
  transform: rotate(0deg);
  opacity: 0.2 !important;
  top: 16px !important;
}

.blog-card:before {
  position: absolute;
  content: " ";
  width: 80px;
  height: 80px;
  top: 0;
  left: 0;
  border-color: #d3e9ff;
  border-style: solid;
  border-width: 10px 0 0 10px;
  border-top-left-radius: 4px;
}
.blog-card {
  border-radius: 4px;
  box-shadow: 0 0 5px 0 rgba(0,0,0,.2);
  background-color: #fff;
  width: 100%;
  padding: 15px;
  position: relative;
  margin: 15px 0;
  display: flex;
}
button.slick-arrow.slick-prev {
  z-index: 9;
}
button.slick-arrow.slick-next {
  z-index: 99;
}
.max-100
{
  max-width:100% !important;
}
.placementLogos h3.text-left {
  text-align: center !important;
}
.blogsCard {
  background: #f6f6f6;
  padding: 40px 0;
}
.cLogo {
  display: flex !important;
  justify-content: center;
  align-items: center;
}
}
.cLogo img {
  width: 90%;
  max-height: 96px;
}
a.AppyBtn {
  font-size: 17px !important;
  border: 1px solid #3e3e3e;
  line-height: 17px;
  background-color: #e41a1a !important;
  color: #ffffff;
  border: 1px solid #e41a1a;
  padding: 15px;
  margin: 10px 0;
  box-shadow: 4px 4px 5px rgba(0,0,0,.2);
  width: 220px;
  display: inline-block;
  text-align: center;
  border-radius: 5px;
}
.rankingsLogo {
  margin-bottom: 6px;
}

.all-rev-btn
{
  text-align: center;
  display: flex;
  justify-content: center;
  margin-bottom: 70px;
  margin-top: 30px;
}
.allFac-Card:hover {
  background: #e41a1a !important;
  color: #fff;
  cursor: pointer;
}
.fac-img {
  background: #e0e0e0;
}
section.placementLogos {
  margin: 40px 0;
}





@-webkit-keyframes pulse-border{0%{-webkit-transform:translateX(-50%) translateY(-50%) translateZ(0) scale(1);transform:translateX(-50%) translateY(-50%) translateZ(0) scale(1);opacity:1}100%{-webkit-transform:translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);transform:translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);opacity:0}}@keyframes pulse-border{0%{-webkit-transform:translateX(-50%) translateY(-50%) translateZ(0) scale(1);transform:translateX(-50%) translateY(-50%) translateZ(0) scale(1);opacity:1}100%{-webkit-transform:translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);transform:translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);opacity:0}}


@media screen and (min-width:768px)
{
  .for-mobile
  {
    display:none;
  }
}

@media screen and (max-width:767px)
{
  .comment-image img {
    width: 100%;
}
.comment-content {
  padding-left: 20px;
}
  .course-feature h2 {
    font-weight: 600;
    line-height: 24px;
    color: #f02f2f !important;
    font-style: normal;
    font-size: 20px;
    margin-bottom: 12px;
}
  .for-desktop
  {
    display:none;
  }
  section#bg-image {
    background: none !important;
}

.play-btn-area {
  position: absolute !important;
  top: 130px !important;
}
.header-content {
  margin-top: 0 !important;
  box-shadow: none !important;
  padding: 10px !important;
  margin-bottom: 0 !important;
}
h1.banner-subheading-aiml {
  text-align: center;
  margin-top: 10px;
}
.header-content ul {
  display: inline-block;
  padding: 0;
}
.header-content ul li {
  display: inline-block;
}
.lc-btn-section a, .application-btn-section a {
  width: 100% !important;
  margin: 8px 0 !important;
}

.featureDiv {
  clear: both;
  padding: 20px 0 40px;
}
.application-btn-section {
  margin-right: 0;
}
button.slick-arrow.slick-prev {
  width: 30px;
  height: 30px;
  left: 0px !important;
  z-index: 9;
}
button.slick-arrow.slick-next {
  width:30px;
  height: 30px;
  right: 0px !important;
  z-index: 9;
}
.fac-mentor .fac-mem {
  width: 97% !important;
  margin: 10px 0;
}
.blog-card, .allFaculty .allFac-Card,  .allFac-Card p,  .fac-list {
  width: 100% !important;
}
.slider-content.slider-image {
  position: relative;
  overflow: hidden;
  min-height: 200px;
}

.slider-content.slider-image img{
transform: scale(2);
}
.fDiv {
  margin-top: 20px;
}
.featureDiv {
  padding-bottom: 0 !important;
}

.slick-prev:before {
  left: 4px;
  background-size: 83%;
  top: 4px !important;
  background-repeat: no-repeat;
}
.slick-next:before
{
top:8px !important;
left: 9px;
background-size: 80%;
background-repeat: no-repeat;
}


}
.specializations ul li span strong {
  font-weight: 600 !important;
}
  .overview-dta h3 {
  font-size: 22px;
  font-weight: 700 !important;
}
section.fac-mentor {
  background: #f6f6f6;
  padding: 20px 0;
}
.colrosText {
  margin-bottom: 10px !important;
}


.course-feature p span a {
  font-weight: 600 !important;
}
.course-feature ul li::after {
  content: "";
  position: absolute;
  left: -17px;
  top: 6px;
  width: 20px;
  height: 20px;
  background: url(../assets/images/check.png) center center / 10px no-repeat #f0f0f0;
  border-radius: 50%;
}
.specializations ul li {
  display: block;
  padding: 5px 10px 8px 33px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 4px 0px;
  font-size: 14px !important;
  font-family: Poppins !important;
  color: rgb(102, 102, 102) !important;
  background: rgb(245, 245, 245) !important;
  margin: 10px 10px;
}
.course-feature ul {
  padding: 0;
}
p.specializations table ul li::after {
  left: 6px !important;
  top: 6px !important;
  background-color: #fff;
}
.fessOf p i {
  font-size: 13px !important;
  color: #333 !important;
}


.readmorebtn {
  font-size: 13px;
  color: #ffffff;
  background: #e41a1a;
  width: 110px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  padding: 11px;
  border-radius: 5px;
  position: relative;
  border: 0;
}

  
.tableHt .table>:not(caption)>*>* {
  padding: 0.5rem 0.5rem;  
  box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
}

.pl-3  {
  padding-left: 1.3rem;
}
 .mt-0
 {
   margin-top:0px !important; 
 }
 .card-body p {
  font-size: 14px !important;
  line-height: 1.5 !important;
  font-weight: 300;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  overflow: hidden;
  text-overflow: ellipsis;
}
.lmt_7
{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-body p span {
  font-size: 15px !important;
}
.studentCards .cardImage {
  width: 150px;
  height:auto;
}
 
.card-title p {
  font-weight: 600;
}
.row.studentCards {
  margin-top: 30px;
}
.readmorebtn {
  margin-top: 10px;
  display: inline-block;
}
h3.card-title  {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 7px;
}

.studentCards .blog-card {
  padding: 0;
}

.studentCards .cardImage
{
  max-height: 260px;
}
.card-body p span { 
  color: #333 !important;
  font-family: 'Poppins' !important;
  font-weight: 400 !important;
}
.studentCards img.card-img-top {
  height: 100%;
}


.shoWcard {
  transform: scale(1);
  -webkit-transform: scale(1);
  display: flex;
  flex-wrap: wrap;
  padding: 11%;
  transition: transform .65s cubic-bezier(.05,.2,.1,1),box-shadow .65s cubic-bezier(.05,.2,.1,1);
}





.wrapper {
  display: flex;
  width: 100%;
}

.card {
  width: 100%;
  height:400px;
  border-radius: 15px;
  padding: 1.5rem;
  background: white;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
}
.card:hover {
  transform: translateY(-10px);
}
.card:hover:before {
  opacity: 1;
  background: #e41a1a;
}
.card:hover .info p {
  opacity: 1;
  transform: translateY(10px);
}
.card:hover .info h3 {
  opacity: 1;
  transform: translateY(25px);
}
.card:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  z-index: 2;
  transition: 0.5s;
  opacity: 0.5;
}
.card h3 {
  text-shadow: 0 2px black;
}

.row.studentCards { 
  margin-bottom: 30px;
}

.card img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  position: absolute;
  top: 0;
  left: 0; 
}
.card .info p {
  position: relative;
  z-index: 3;
  color: white;
  opacity: 0;
  transform: translateY(40px);
  transition: 0.5s;
}
.card .info h3 {
  position: relative;
  z-index: 3;
  color: white; 
  transform: translateY(290px);
  transition: 0.5s;
}
.card .info h1 {
  margin: 0px;
}
.card .info p { 
  font-size: 15px;
  margin-top: 8px;
}
.card .info button {
  padding: 0.6rem;
  outline: none;
  border: none;
  border-radius: 3px;
  background: white;
  color: black;
  font-weight: bold;
  cursor: pointer;
  transition: 0.4s ease;
}
.card .info button:hover {
  background: dodgerblue;
  color: white;
}

.card h3 {
  position: relative;
  color: #fff;
  z-index: 9;
  font-size: 24px;
}
.info p span {
  color: #fff !important;
  font-family: 'Poppins' !important;
  font-size: 16px !important;
}
.text-8 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 8;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-bottom: 10px;
}
 .cLogo img {
  margin-top: 20px;
}
.font-20
{
  font-size:20px;
}
.opp-list ul li {
  background: #f6f6f6;
  margin: 5px 0;
  padding: 10px;
  font-weight: 600;
}
.cLogo {
  max-width: 150px;
  height: 90px;
}

@media screen and (max-width:767px)
{
  section#section1 table {
    overflow: auto;
  }
  .blogsCard  .blog-card
  {
    width:95% !important;
    margin:auto;
  }
  .bg-salmon2.sticky-icon {
    background: #fff;
    padding: 2px 0;
}
  p.banner-heading-aiml {
    margin-bottom: 10px !important;
}
  .studentCards .card {
    margin-bottom: 20px;
}
section.overview {
  padding: 0px 0px; 
  margin-top: 0 !important;
}
.pagetitle { 
  margin: 8px 0px;
}
.textLmt > p {
  -webkit-line-clamp: 10;
}
.overview-dta.textLmt {
  padding: 0 10px;
}
.studentCards {
  padding: 0px 10px;
}
.circulum {
  padding: 0 10px;
}
 .pagetitle {
  padding: 0px 10px;
}
.fac-mentor .mentorss {
  padding: 0px 10px;
}
.pagetitle h2 {
  text-align: center !important;
}
.overview-dta {
  margin-top: 20px;
}
.faqs, .application-deadline {
  padding: 0 10px;
}
.blogsCard {
  background: #f6f6f6;
  padding: 20px 0;
  margin-top: 20px;
}
}
 
@media screen and (min-width:768px)
{

  .intersecting-class {
    position: -webkit-sticky;
    position: -moz-sticky;
    position: -ms-sticky;
    position: -o-sticky;
    position: sticky;
    color: #fff;
    bottom: auto;
    top: 80px;
}

  h2.heading-left {
    text-align: left !important;
}
.btn-mob
{
  display:none;
}
}

.overview-dta h2 {
  font-size: 27px;
  font-weight: 700 !important;
}

@media screen and (max-width:767px)
{
  .btn-mob
{
  display:block !important;
}
.textLmt > p {
  display: -webkit-box;
  -webkit-line-clamp: 12;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.textNoLmt p {
  -webkit-line-clamp: inherit !important;
  overflow: visible !important;
  display: block !important;
}
}


p.designation { 
  font-style: italic;
  font-size: 14px !important;
  background: #fff;
  margin-bottom: 7px;
  margin-top: 4px;
  color: #000;
}
cLogo img {
  border: 1px solid #ededed;
  height: 100px;
}


.maincontainer
{
    width: 302px;
    height: 299px;
    margin: 10px;
    float: left; 
}

  
.back h2
{
    position: absolute;
}

.back p
{
    position: absolute;
    top: 50px;
    font-size: 15px;
}

.front h2
{
    position: absolute;
    padding: 10px;
    top: 200px;
    color: #000;
}
 
.maincontainer > .front
{
    position: absolute;
    transform: perspective(600px) rotateY(0deg);
    
    width: 302px;
    height: 290px;
    
    backface-visibility: hidden; 
    transition: transform .5s linear 0s;
}
 
.maincontainer > .back
{
    position: absolute;
    transform: perspective(600px) rotateY(180deg);
    background: #262626;
    color: #fff;
    width: 302px;
    height: 290px;
    border-radius: 10px;
    padding: 5px;
    backface-visibility: hidden;
    transition: transform .5s linear 0s;
}

.maincontainer:hover > .front
{
    transform: perspective(600px) rotateY(-180deg);
}

.maincontainer:hover > .back
{
    transform: perspective(600px) rotateY(0deg);
}


table.cj-wysiwyg-table ul li a:hover {
  background: #ffbdbd;
}

.image img {
  width: 100%;
  height: 100%;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}
table.cj-wysiwyg-table li {
  display: inline-block;
  width: 100%;
}
.overview-dta p a:hover {
  transition: 0.4s;
}
.overview-dta p a {
  font-weight:700; 
}
.overview-dta p a:hover, #section1 .overview-dta p li a span:hover {
  transition: all 0.4s ease 0s;
}
#section1 .overview-dta p li {
  margin-bottom: 7px;
}
.overview-dta ul {
  margin: 0;
  padding-left: 15px;
}

.opp-list ul li:hover {
  background: #cecece;
}
.overview-dta p a {
  font-weight: 700; 
  margin: 5px 0px;
  padding: 10px 0;
  font-weight: 600;
  text-align: center;
  border-radius: 5px;
}
 
.overview-dta p a:hover  { 
  color: red;
}
.overview-dta p a:hover strong { 
  color: #fff !important;
}

.logoCards {
  margin-bottom: 22px;
}
.cardLogo {
  margin: 0 0 15px 0;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  padding: 3px;
}


#btn-style-2 {
  width: 100%;
  display: block;
  background: #2033db !important;
  border-color: #2033db !important;
}

button.readmore {
  border: 0;
  background: red;
  color: #fff;
  font-size: 14px;
  padding: 3px 10px;
  border-radius: 5px;
  font-style: italic;
}
.vsnData h3 {
  font-size: 20px !important;
  text-transform: capitalize !important;
  color: #333;
}
.vsnData ul li {
  display: block;
  padding-left: 20px;
  margin-bottom: 15px !important;
  position: relative;
}
.vsnData ul {
  margin-bottom: 30px !important;
}
.vsnData p, .vsnData li {
  color: #000 !important;
  font-family: poppins !important;
  font-weight: 400 !important;
  font-size: 15px !important;
}
.vsnData {
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.vsnData h3 {
  font-weight: 600;
}



;

`
