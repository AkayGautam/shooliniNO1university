import styled from 'styled-components'
import { colors } from '../../../components/common/elements/elements'

export const Styles = styled.div`
  .programme-area {
    padding: 65px 0;
    background-image: url(assets/images/bg-girl.jpg);
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: 36%;
    background-attachment: fixed;
    overflow: hidden;


  
  
    ul.programme_list li a {
      color: #333;
      font-size: 15px;
    }

    .modal.show .modal-dialog {
      top: 20%;
  }


    .coursetitles a {
      color: #f63030;
      font-size: 18px;
      padding: 5px 0 0 0;
      display: block;
      margin-bottom: 10px;
      font-weight: 600;
  }


    table.cj-wysiwyg-table td {
      vertical-align: top;
      font-size: 14px;
      font-family: 'Poppins';
    }
    .side-content h2 {
      color: #ff2023;
      text-transform: uppercase;
      font-weight: 500;
      position: relative;
      font-size: 20px;
      margin: 7px 0;
    }

    .cnt-block h3 a {
      line-height: 1.4;
      display: block;
    }
    .cnt-block figure {
      width: 148px;
      height: 148px;
      border-radius: 100%;
      display: inline-block;
      margin-bottom: 0px;
      position: relative;
      overflow: hidden;
      border: 2px solid #e2e2e2;
    }
    .cnt-block h3 {
      margin: 0 !important;
    }

    .cnt-block.equal-hight p {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .programme_card {
      background: #f6f6f6;
      padding: 10px;
      box-shadow: 0px 0px 5px 0px rgb(0 0 0 / 10%);
      border-radius: 5px;
      margin-bottom: 15px;
      height: calc(100% - 30px);
      border-bottom: 3px solid #e41a1a;
    }

    .regular.slider {
      height: auto !important;
      overflow: inherit !important;
    }

    ul.programme_list li {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
   

    .regular.slider {
      display: flex !important;
      flex-wrap: wrap;
    }
    .col-md-4 {
      padding: 0 10px;
    }
    .featured_img {
      max-height: 200px;
      overflow: hidden;
    }
    .school_name {
      line-height: 1.2;
      span {
        color: #706d6d;
        font-size: 13px;
        font-weight: 700;
      }
    }
    .programme_detail {
      margin-top: 7px;
      h3 {
        color: #f63030;
        font-size: 18px;
        padding: 5px 0 0 0;
      }
      h5 {
        font-size: 14px;
        color: #f63030;
      }
      ul.programme_list li {
        display: block;
        line-height: 1.9;
        padding: 1px 0;
        border-bottom: 1px solid #e41a1a;
      }
      .featured_img {
        position: relative;
        a, .knoBtn  {
          background: rgb(246, 48, 48);
    padding:10px 8px;
    color: rgb(255, 255, 255);
    font-size: 13px;
    font-weight: 500;
    border-radius: 3px;
    float: left;
    margin-bottom: 20px;
    right: 20px;
    bottom: 0px;
    width:100%;
    border:0px;
        }
      }
    }
  }

  .suContent h3 {
    letter-spacing: 0px;
    padding-top: 20px;
    font-weight: 700;
    line-height: 34px;
    text-transform: uppercase;
    margin-bottom: 20px;
    color: #f02f2f !important;
    font-style: normal;
    font-size: 28px;
  }
  h3.su-core-title-item-title {
    letter-spacing: 0px;
    font-weight: 700;
    text-transform: uppercase;
    color: #f02f2f !important;
    font-style: normal;
    font-size: 28px;
  }
  .su-core-title-item-title-wrap {
    margin: 40px 0 0 0 !important;
    clear: both;
    white-space: nowrap;
  }

  .userContent h5 {
    font-size: 15px;
    font-weight: 700;
  }
  section.userTestimonial {
    margin-top: 26px;
  }

  .userDetailCard {
    background: #f8f7f6;
    padding: 15px;
    display: flex;
    border-radius: 4px;
    box-shadow: 0px 0px 7px 0px rgb(0 0 0 / 20%);
    height: 100%;
  }
  .details h5 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

  .suContent p {
    color: #6b6b6b;
  }
  .su-core-title-item-divider {
    width: 100%;
    height: 2px;
    background: #cecece;
    position: relative;
    top: 12px;
  }
  h3.su-core-title-item-title {
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0px;
    text-transform: none;
    color: #223d71;
    margin-right: 30px;
  }
  .su-core-title-item-title-wrap {
    display: flex;
  }
  .su-core-title-item-title-wrap {
    display: flex;
    margin: 15px 0;
    clear: both;
  }

  .SchoolDetail section {
    width: 100%;
  }

  .course-header {
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--header);
    color: var(--text);
    width: 100vw;
    transition: background 150ms, color 150ms;
  }

  .mode-switch {
    position: absolute;
    right: 40px;
    top: 30px;
    z-index: 900;
    color: var(--text);
    cursor: pointer;
    font-size: 26px;
    transition: color 150ms;
  }

  .mode-switch:hover {
    color: var(--mode-hover);
  }

  .courses {
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .course-info {
    background: #fff !important;
  }
  .course {
    margin-top: 20px;
    display: flex;
    width: 100%;
    max-width: 49%;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 2px solid #e0e0e0;
    overflow: hidden;
    position: relative;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    background: #fff;
  }
  .course:hover {
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  }

  .course {
    width: 100%;
    flex-basis: 49%;
    margin-right: 1%;
  }
  .course-info {
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px;
    top: 0;
    left: 0;
    overflow: hidden;
    transition: width 550ms all 0.4s;
    transition: all 0.4s ease-in-out;
  }

  .course:hover .course-more {
    width: 100% !important;
    height: 100%;
    transition: all 0.4s ease-in-out;
  }

  .course-more {
    width: 100% !important;
    height: 100%;
    transition: all 0.4s ease-in-out;
  }

  .course.html .course-info {
    background: var(--html-color);
  }

  .course.css .course-info {
    background: var(--css-color);
  }

  .course.js .course-info {
    background: var(--js-color);
  }

  .course-info span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    color: var(--light-grey);
  }

  .course-info h5 {
    font-size: 14px;
    font-weight: 500;
    color: #333;
    margin: 0;
  }
  .course-info span {
    color: #e41a1a !important;
  }
  .course-info a {
    color: var(--light-grey);
    text-decoration: none;
    transition: 150ms color;
    position: absolute;
    bottom: 25px;
    left: 30px;
  }

  .course-more .chapters {
    color: var(--dark);
    text-decoration: none;
    transition: 150ms color;
    position: absolute;
    bottom: 25px;
    left: 30px;
    display: none;
  }

  .course-info a:hover {
    color: var(--light);
  }
  .details {
    cursor: pointer;
  }
  .course-info i {
    font-size: 14px;
  }
  span.elfb {
    top: 6px;
    background: #e41a1a;
    -webkit-transform: skewY(-7deg);
    -ms-transform: skewY(-7deg);
    transform: skewY(-7deg);
    font-size: 12px;
    left: 2px;
    font-weight: 500;
    padding: 2px 7px;
    color: #fff;
  }
  .course-more {
    width: 65%;
    height: 100%;
    background: #eaeaea;

    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px;
    top: 0;
    overflow: hidden;
    z-index: 10;
    transition: transform 550ms cubic-bezier(0.59, 0.01, 0.48, 1);
  }

  .course:hover .course-more,
  .course:focus-within .course-more {
    transform: translateX(0);
  }

  .details {
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: #c4c4d4;
    margin-top: 5px;
  }

  .details > h5 {
    font-size: 14px;
    font-weight: 400;
  }

  .course .details > h5 {
    color: #393939;
  }

  .progress {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .progress-bar {
    border-radius: 8px;
    height: 6px;
    width: 200px;
    background: rgba(200, 200, 200, 0.8);
    position: relative;
  }

  .progress-bar span {
    height: 6px;
    position: absolute;
    border-radius: 8px;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .course.html .progress-bar span {
    background: var(--html-color);
  }

  .course.css .progress-bar span {
    background: var(--css-color);
  }

  .course.js .progress-bar span {
    background: var(--js-color);
  }

  .progress-text {
    font-size: 12px;
    font-weight: 400;
    margin-top: 5px;
    color: var(--dark);
  }

  .name {
    font-size: 16px;
  }

  .description {
    font-size: 20px;
    margin-top: 15px;
  }

  .time {
    opacity: 0.3;
    font-weight: 600;
  }

  .continue-btn,
  .read-btn {
    align-self: flex-end;
    position: absolute;
    bottom: 20px;
    right: 30px;
    font-size: 15px;
    border-radius: 20px;
    padding: 8px 16px;
    color: var(--light);
    text-decoration: none;
    transition: opacity 150ms;
    cursor: pointer;
    border: none;
    outline: none;
  }

  .cj-image {
    height: 64px;
    width: 64px;

    img {
      width: 100%;
      object-fit: contain;
      border-radius: 10px;
    }
  }

  .course.html .continue-btn,
  .course.html .read-btn {
    background: var(--html-color);
  }

  .continue-btn,
  .read-btn {
    background: #d00000 !important;
    color: #fff;
    font-size: 12px;
    padding: 4px 10px;
  }

  .course.js .continue-btn,
  .course.js .read-btn {
    background: var(--js-color);
  }

  .continue-btn:hover,
  .read-btn:hover {
    opacity: 0.8;
  }

  .course .read-btn.mark {
    transform: translateX(-80px);
    background: #6ad474;
  }

  .course::before {
    content: '';
    position: absolute;
    top: 15px;
    right: 20px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #6ad474;
    z-index: 50;
    opacity: 0;
    transform: translateX(50px);
    transition: transform 200ms ease-in-out, opacity 200ms;
  }

  .course::after {
    content: '';
    position: absolute;
    top: 15px;
    right: 20px;
    width: 15px;
    height: 7px;
    border-left: 4px solid white;
    border-bottom: 4px solid white;
    z-index: 55;
    opacity: 0;
    transform: translate(35px, 8px) rotate(-45deg);
    transition: transform 200ms ease-in-out, opacity 200ms;
  }

  .course.checked::before {
    transform: translateX(0px);
    opacity: 1;
  }

  .course.checked::after {
    transform: translate(-5px, 8px) rotate(-45deg);
    opacity: 1;
  }

  .reference {
    width: 100%;
    text-align: center;
    padding: 10px;
    margin-top: 15px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: var(--text);
  }

  .note {
    width: 100%;
    text-align: center;
    padding: 10px;
    margin-top: 15px;
    font-size: 20px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: var(--text);
  }

  .reference a {
    color: #118ab2;
    text-decoration: none;
  }

  .back {
    color: var(--text);
    position: relative;
    top: 15px;
    left: 20px;
    cursor: pointer;
    transition: color 150ms;
  }

  .back:hover {
    color: var(--text-hover);
  }

  @media screen and (max-width: 950px) {
    .course {
      width: 90%;
    }
  }

  @media screen and (max-width: 850px) {
    .course-more {
      width: 100%;
    }
    .course-more .chapters {
      display: block;
    }
    .course-info a {
      display: none;
    }
    .course:hover .course-info {
      width: 100%;
    }
  }

  .gdlr-core-widget-box-shortcode-content {
    color: #ffffff;
    padding: 30px 45px;
    background-color: #192f59;
  }
  .su-sidebar-content {
    background: #fff;
    padding: 15px;
  }

  .course-search {
    background: #fff;
    margin-top: 50px;
    border: 1px solid ${colors.border1};
    padding: 15px 20px 20px;
    border-radius: 5px;
    margin-bottom: 10px;
    h5 {
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
    form {
      position: relative;
      input {
        width: 100%;
        height: 45px;
        border: 1px solid ${colors.border3};
        color: ${colors.black1};
        padding-left: 15px;
        &:focus {
          border-color: ${colors.green};
        }
        &::placeholder {
          font-size: 14px;
          font-style: italic;
          color: ${colors.black2};
          font-weight: 400;
        }
      }
      button {
        position: absolute;
        width: 45px;
        height: 100%;
        top: 0;
        right: 0;
        background: transparent;
        padding: 0;
        border: none;
        font-size: 20px;
        color: ${colors.green};
      }
    }

    @media (max-width: 1199px) {
      padding: 12px 15px 15px;
    }
  }

  .popular-course {
    background: #fff;
    border: 1px solid ${colors.border1};
    padding: 15px 20px 20px;
    border-radius: 5px;
    margin: 30px 0;
    h5 {
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

    .popular-items {
      .item-box {
        margin-bottom: 15px;
        .item-img {
          a {
            img {
              max-width: 85px;
              border-radius: 5px;
              margin-right: 15px;

              @media (max-width: 1199px) {
                max-width: 60px;
                margin-right: 12px;
              }
            }
          }
        }

        .item-content {
          p.title {
            margin-bottom: 3px;
            a {
              font-size: 13px;
              color: ${colors.black2};
              font-weight: 500;
              &:hover {
                color: ${colors.green};
              }
            }
          }

          ul.rating {
            margin-bottom: 3px;
            li {
              margin-right: 0;
              i {
                font-size: 14px;
                color: ${colors.yellow};
              }
            }
          }

          p.price {
            font-size: 15px;
            color: ${colors.green};
            font-weight: 500;
          }
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    @media (max-width: 1199px) {
      padding: 12px 15px 15px;
    }
  }
  a.nav-sidebar {
    padding: 7px 5px;
    max-width: 140px;
    background: #607d8b;
    text-align: center;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;

    i {
      font-size: 20px;
      color: ${colors.border1};
    }
  }

  .sidebar {
    background-color: #ffffff;
    padding: 20px;
    height: 100%;
    width: 500px;
    position: fixed;
    top: 0;
    right: -870px;
    overflow-y: auto;
    z-index: 9999;
    transition: all 400ms cubic-bezier(0.785, 0.135, 0.15, 0.86);

    .side-logo {
      margin-bottom: 20px;

      a {
        i {
          font-size: 18px;
          color: ${colors.green};
          border: 1px solid ${colors.border1};
          padding: 6px;
          border-radius: 50%;

          &:hover {
            background: ${colors.green};
            color: #ffffff;
            border-color: ${colors.green};
          }
        }
      }
    }

    .side-content {
      h5 {
        color: ${colors.green};
        text-transform: uppercase;
        font-weight: 500;
        margin-bottom: 18px;
        position: relative;

        &::before {
          position: absolute;
          content: '';
          background: ${colors.border1};
          width: 25%;
          height: 1px;
          top: 11px;
          right: 0;
        }
      }

      p {
        font-size: 14px;
        color: #666666;
        line-height: 21px;
        margin-bottom: 20px;
      }
    }

    .side-post {
      margin-bottom: 0px;

      h5 {
        color: ${colors.green};
        text-transform: uppercase;
        font-weight: 500;
        margin-bottom: 25px;
        position: relative;
      }

      .post-box {
        margin-bottom: 15px;

        .post-img {
          img {
            max-width: 90px;
            border-radius: 5px;
            margin-right: 15px;
          }
        }

        .post-title {
          p {
            font-size: 13px;
            color: ${colors.black2};
            font-weight: 500;
            margin-bottom: 6px;
          }

          span {
            font-size: 12px;
            color: ${colors.text3};
          }
        }
      }
    }

    .side-gallery {
      margin-bottom: 32px;

      h5 {
        color: ${colors.green};
        text-transform: uppercase;
        font-weight: 500;
        margin-bottom: 25px;
        position: relative;

        &::before {
          position: absolute;
          content: '';
          background: ${colors.border1};
          width: 65%;
          height: 1px;
          top: 11px;
          right: 0;
        }
      }

      img {
        max-width: 96px;
        border-radius: 5px;
        margin-right: 5px;
        margin-bottom: 6px;
      }
    }

    .side-contact {
      margin-bottom: 20px;

      h5 {
        color: ${colors.green};
        text-transform: uppercase;
        font-weight: 500;
        margin-bottom: 15px;
        position: relative;

        &::before {
          position: absolute;
          content: '';
          background: ${colors.border1};
          width: 50%;
          height: 1px;
          top: 11px;
          right: 0;
        }
      }

      ul {
        li {
          font-size: 14px;
          color: ${colors.text2};
          margin-bottom: 12px;

          i {
            font-size: 18px;
            color: ${colors.green};
            margin-top: 1px;
            margin-right: 6px;
            vertical-align: text-bottom;
            float: left;
            height: 30px;
          }
        }
      }
    }

    .side-social {
      ul {
        li {
          a {
            font-size: 13px;
            color: ${colors.green};
            display: inline-block;
            border: 1px solid ${colors.border1};
            width: 30px;
            height: 30px;
            text-align: center;
            padding-top: 5px;
            border-radius: 50%;

            &:hover {
              background: ${colors.green};
              border-color: ${colors.green};
              color: #fff;
            }
          }
        }
      }
    }
  }

  .sidebar.opened {
    right: 0 !important;
  }

  .sidebar-overlay {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: block;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1111;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s ease;
  }

  .sidebar-overlay.visible {
    visibility: visible;
    opacity: 1;
  }

  .sidebarLogo img {
    width: 100px;
  }
  .side-car p {
    font-size: 14px;
  }
  .sideOpen .nav-link {
    font-size: 14px;
    line-height: 1.2;
  }
  .sideOpen {
    display: block;
    justify-content: start;
    z-index: 99;
    color: #fff;
    transition: all 0.4s ease-in-out;
  }
  .sideOpen svg {
    fill: #fff;
  }
  .course:hover .sideOpen {
    right: -40px;
    transition: all 0.4s ease-in-out;
  }

  @media (max-width: 767px) {

    section.programme-area {
      padding-bottom: 0 !important;
  }
  
    .sec-title h2 {
      font-weight: 700;
      font-size: 35px;
    }
    .courses {
      display: block !important;
    }
    .course {
      width: 100%;
      flex-basis: 100% !important;
      max-width: 100%;
    }
    .sidebar {
      width: 100%;
    }
  }

  .side-content h2,
  .side-content h3 {
    color: #ff2023;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 17px;
    position: relative;
    font-size: 20px;
  }
  table.cj-wysiwyg-table td {
    vertical-align: top;
    font-size: 14px;
    font-family: 'Poppins';
  }

  .cnt-block p {
    font-size: 12px;
  }

  .cuCourse {
    background-color: #fff;
    color: rgba(0, 0, 0, 0.87);
    -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 4px;
    box-shadow: 0px 1px 6px 0px rgb(0 0 0 / 12%);
    overflow: hidden;
    max-width: 100%;
    margin: 9px 0;
    padding: 10px;
    display: block;
    height: 90%;
    position: relative;
  }

  .cuCourse h3 {
    font-size: 18px !important;
    font-weight: 700;
    color: #e8223b !important;
  }
  a.detailView p {
    font-size: 14px;
    color: #333;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .cuCourse h3 {
    font-size: 18px !important;
    font-weight: 700;
    color: #e8223b !important;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .detailView p {
    font-size: 14px;
    color: #333;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
 
 .programme_list li {
  padding-left: 24px !important;
  position: relative;
}

.programme_detail ul {
  padding-left: 0;
}

.programme_card .featured_img {
  display: none;
}


// special for program temprary

@media screen and (min-width:767px)
{

.programme_detail {
  position: relative;
}

.programme-area .programme_detail {
  margin-top: 0px;
}
.programme-area .programme_card {
  padding:0px;
}
.programme-area .coursetitles a {
  padding: 10px !important;
}
.programme-area .coursetitles a {
  color: #333 !important;
}
.programme_detail:hover .programme_list li a {
  color: #333;
}
.programme_detail:hover .coursetitles a {
  background: red;
  color: #fff !IMPORTANT;
}
}



@media screen and (max-width:767px)
{

  .slick-prev {
    width: 50px;
    height: 50px;
}

.slick-next {
  width: 50px;
  height: 50px;
  z-index: 999;
}

  .programme-area .programme_card {
    padding: 0;
    max-width: 90%;
    margin: auto;
}
.slick-prev {
  left: 0 !important;
}
.programme_card .featured_img {
  display: block;
}
.programme_detail {
  padding: 15px;
}
.slick-next:before {
  height: 30px;
  width: 30px;
  left: -14px !important;
  opacity: 0.5 !important;
  top: 10px !important;
  border: 1px solid #333;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 15px !important;
}
.slick-prev:before {
  height: 30px !important;
  width: 30px !important;
  opacity: 0.5 !important;
  top: 10px !important;
  border: 1px solid #333;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: 15px !important;
}
.programme_list li {
  padding-left: 0px !important;
}

.programme-area .programme_detail .featured_img a {
  background: rgb(246,48,48);
  padding: 6px 8px;
  color: rgb(255,255,255);
  font-size: 13px;
  font-weight: 500;
  border-radius: 3px;
  float: left;
  margin-bottom: 20px;
  right: 20px;
  bottom: 0px;
  width: 100%;
  text-align: center;
  height: 45px;
  line-height: 35px !important;
}

}
.programme-area .sec-title {
  padding-left: 20px;
}

`
