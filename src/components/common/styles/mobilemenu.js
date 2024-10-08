import styled from 'styled-components'
import { colors } from '../elements/elements'

export const Styles = styled.div`

.searchedCourse .col-md-8 {
  order: 2;
}
.mobilemenu2 ul li {
  background: transparent;
  display: block;
  width: 100%;
  padding:5px 0px;
  text-align: left;
  border: 1px solid rgb(238, 238, 238);
}
.mobilemenu2 ul li a {
  color: #333!important;
}

  .mb-menu-content.show {
    background: #f1f1f1;
  }
  .mb-logo a span {
    overflow: visible !important;
}
  .rankingMobList .dropdown-menu{
    position: relative !important;
    transform: inherit !important;
}
a.xs-display {
  text-transform: uppercase;
}

  .mb-menu-item:nth-child(6) button > a:nth-child(1) {
    display: none;
}
.fa-plus-square {
  float: right;
}
span.rowText {
  max-width: 93%;
}
a.bottmDropdown {
  display: flex !important;
  align-items: center;
  justify-content: space-between;
}
  ul.mb-menu-content.list-unstyled.show {
    background: #f9f9f9;
    width: 100%;
  }
  .mb-menu-content li.nav-item a span {
    display: block;
  }
  .mb-menu-item i.las.la-plus {
    float: right;
  }
  button.mb-menu-button {
    padding: 10px 10px !important;
  }

  .mobile-menu-area {
    .mb-sidebar-heading h5 {
      margin: 0;
    }

    background: ${colors.bg1};
    display: none;

    .mb-topbar {
      border-bottom: 1px solid ${colors.black2};
      .topbar-item {
        p {
          font-size: 13px;
          color: ${colors.text4};
          padding: 8px 0;
          i {
            font-size: 16px;
            color: ${colors.green};
            vertical-align: text-top;
            margin-right: 5px;
          }
        }
        ul {
          padding: 8px 0;
          li {
            a {
              font-size: 13px;
              color: ${colors.green};
              font-weight: 500;
              text-transform: uppercase;
              &:hover {
                color: #ffffff;
              }
            }
            &:nth-child(2) {
              color: ${colors.text3};
            }
          }
        }
      }
    }

    .mb-logo-area {
      padding: 18px 0;
      .mb-logo-box {
        .hm-button {
          margin-top: 8px;
          margin-right: 35px;
          position: relative;
          &:before {
            position: absolute;
            content: '';
            background: ${colors.text1};
            width: 1px;
            height: 25px;
            top: -4px;
            right: -16px;
          }
          a#mb-sidebar-btn {
            i {
              font-size: 20px;
              color: ${colors.green};
            }
          }

          @media (max-width: 480px) {
            margin-top: 6px;
            margin-right: 8px;
            &:before {
              content: none;
            }
          }
        }
        .mb-logo {
          a {
            img {
              max-width: 150px;
              @media (max-width: 480px) {
                max-width: 60px;
              }
            }
          }
        }
      }

      .mb-search-box {
        form {
          width: 170px;
          position: relative;
          input {
            width: 100%;
            height: 35px;
            border: 1px solid #fff;
            background: transparent;
            color: #ffffff;
            border-radius: 5px;
            padding-left: 15px;
            &::placeholder {
              font-size: 14px;
              color: #fff;
            }
            &:focus {
              border-color: #fff;
            }

            @media (max-width: 480px) {
              max-width: 280px;
            }

            @media (max-width: 320px) {
              display: none;
            }
          }
          button {
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            width: 40px;
            background: transparent;
            border: none;
            font-size: 16px;
            color: #fff;
            i {
            }

            @media (max-width: 320px) {
              display: none;
            }
          }

          @media (max-width: 480px) {
            max-width: 160px;
          }
        }
      }
    }

    @media (max-width: 767px) {
      display: block;
    }
  }

  .mb-sidebar {
    background: #ffffff;
    height: 100%;
    width: 320px;
    position: fixed;
    top: 0;
    left: -320px;
    overflow-y: auto;
    z-index: 9999;
    transition: all 400ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
    display: none;
    .mb-sidebar-heading {
      background: ${colors.gr_bg};
      padding: 25px;
      h5 {
        color: #ffffff;
        text-transform: uppercase;
      }
      a#close-mb-sidebar {
        i {
          font-size: 22px;
          color: #ffffff;
        }
      }
    }
    .mb-sidebar-menu {
      .mb-menu-item {
        border-top: 1px solid ${colors.border1};
        &:last-child {
          border-bottom: 1px solid ${colors.border1};
        }
        button.mb-menu-button {
          border: none;
          background: transparent;
          display: block;
          width: 100%;
          padding: 10px 0;
          text-align: left;

          p {
            font-size: 14px;
            color: ${colors.black1};
            text-transform: uppercase;
            i {
              font-size: 13px;
              float: right;
              border: 1px solid ${colors.border3};
              border-radius: 25px;
              padding: 3px;
            }
            &:hover {
              color: ${colors.green};
              i {
                border-color: ${colors.green};
              }
            }
          }
        }

        .mb-menu-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.2s ease-in-out;

          ul {
            li {
              border-top: 1px solid ${colors.border1};
              a {
                font-size: 13px;
                color: ${colors.black2};
                display: block;
                padding: 10px 15px;
                padding-left: 15px;
                &:hover {
                  color: ${colors.green};
                }
              }
            }
          }
        }

        .mb-menu-content.show {
          max-height: 100%;
        }
      }
    }

    @media (max-width: 767px) {
      display: block;
    }

    @media (max-width: 480px) {
      max-width: 275px;
    }
  }

  .mb-sidebar.opened {
    left: 0 !important;
  }

  .mb-sidebar-overlay {
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

  .mb-sidebar-overlay.visible {
    visibility: visible;
    opacity: 1;
  }

  a#mb-sidebar-btn i {
    color: #fff !important;
  }
  @media (max-width: 767px) {

    .mobile-menu-area {
      min-height: 60px;
  }

    .mb-logo-box {
      align-items: center;
  }
  .mobile-menu-area .mb-logo-area {
    padding: 0px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

    .mobile-menu-area .mb-logo-area .mb-logo-box .mb-logo a img {
      max-width: 100px;
      top: 34px;

    }
  }
`
