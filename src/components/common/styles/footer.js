import styled from 'styled-components'
import { colors } from '../elements/elements'

export const Styles = styled.div`
  footer.footer1 {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    background: #fff !important;
    

    .footerAbout {
      padding: 100px 0;
    }

    ol,
    ul {
      padding-left: 1rem;
    }

    .leftSideFtr {
      padding: 25px;
    }

    ul li a,
    h6 {
      color: #333 ;
    }
    ul li a,
    p {
      font-size: 14px;
    }
    .social {
      display: block;
      padding: 20px 0;
    }
    .bg-reds {
      background: #f02f2f;
    }
    ul.social {
      li {
        a {
          text-align: center;
          position: relative;

          i {
            font-size: 14px;
            color: #ffffff;
            width: 32px;
            height: 32px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: transparent;
            border: 1px solid #fff;
            border-radius: 50%;
          }

          &:hover {
            background-color: ${colors.green} !important;
          }
        }
      }

      @media (max-width: 767px) {
        text-align: center;
      }
    }
    ul.social {
      display: flex;
      justify-content: space-evenly;
    }

    .footer-logo-info {
      img {
        margin-bottom: 30px;

        @media (max-width: 575px) {
          margin-bottom: 20px;
        }
      }

      p {
        font-size: 14px;
        color: ${colors.text3};
        line-height: 28px;
        margin-bottom: 20px;
      }

      ul {
        li {
          color: ${colors.text3};
          margin-bottom: 12px;

          i {
            font-size: 18px;
            color: ${colors.green};
            width: 35px;
            vertical-align: top;
          }
        }
      }

      @media (max-width: 767px) {
        margin-bottom: 30px;
      }
    }

    .f-links {
      h5 {
        color: ${colors.border1};
        text-transform: uppercase;
        margin-top: 8px;
        margin-bottom: 35px;

        @media (max-width: 575px) {
          margin-bottom: 15px;
          font-size: 20px;
        }
      }

      ul {
        float: left;
        width: 50%;

        li {
          a {
            font-size: 14px;
            line-height: 38px;

            i {
              font-size: 12px;
              color: ${colors.green};
              margin-right: 10px;
            }

            &:hover {
              color: ${colors.green};
            }

            @media (max-width: 991px) {
              font-size: 13px;
              letter-spacing: 0;
            }
          }
        }
      }

      @media (max-width: 767px) {
        margin-bottom: 20px;
        display: inline-block;
      }
    }

    .f-post {
      h5 {
        color: ${colors.border1};
        text-transform: uppercase;
        margin-top: 8px;
        margin-bottom: 45px;

        @media (max-width: 575px) {
          margin-bottom: 15px;
          font-size: 20px;
        }
      }

      .post-box {
        margin-bottom: 12px;

        .post-img {
          img {
            max-width: 80px;
            border-radius: 5px;
            margin-right: 15px;
          }
        }

        .post-content {
          a {
            font-size: 14px;
            color: ${colors.text3};
            display: inline-block;
            margin-bottom: 10px;

            &:hover {
              color: ${colors.green};
            }

            @media (max-width: 991px) {
              font-size: 13px;
              letter-spacing: 0;
              margin-bottom: 0;
            }
          }

          span {
            display: block;
            color: ${colors.text2};
          }
        }
      }
    }

    @media (max-width: 767px) {
      padding: 0px 0 20px;
    }
  }

  .copyright-area {
    padding: 35px 0 38px;
    background: ${colors.copy_bg};

    .copy-text {
      p {
        color: ${colors.text3};
        padding-top: 3px;

        i {
          color: ${colors.green};
          margin: 0 2px;
        }

        a {
          color: ${colors.green};

          &:hover {
            text-decoration: underline;
          }
        }
      }

      @media (max-width: 767px) {
        text-align: center;
        margin-bottom: 20px;
      }
    }

    @media screen and (max-width: 989px) {
      .footerAbout img {
        width: 100%;
      }
    }
  }

  footer ul li {
    display: block;
    margin: 3px 0;
    position: relative;
  }
  footer .leftSideFtr ul li:after {
    content: '';
    position: absolute;
    left: -13px;
    top: 8px;
    width: 5px;
    height: 5px;
    background: #777777;
    border-radius: 50%;
  }

  @media screen and (max-width: 980px) {
    img.logo-footer {
      width: 150px;
      margin-bottom: 10px;
      height: auto;

    }
  }

  .mobileSoc {
    display: none;
}

  @media screen and (max-width: 767px) {

    .mobileSoc {
      display: flex;
      justify-content: space-evenly;
      align-items: center;

  }
  .callUS {
    width: 100%;
    text-align: center;
    display: block;
}
.EnqlUS {
  width: 100%;
  text-align: center;
}
.shortBtn a {
  width: 100%;
  display: flex;
  padding: 10px;
  font-size: 16px;
  text-transform: uppercase;
  color: #f02f2f;
  font-weight: 700;
  justify-content: center;
  align-items: center;
}
.mobileSoc {
  border-top: 1px solid #cecece;
  border-bottom: 1px solid #cecece;
  position: fixed;
  bottom: 0px;
  width: 100%;
  background: #fff;
  z-index: 9;
}
.callUS {
  border-right: 1px solid #cecece;
}
.shortBtn a svg {
  margin-right: 7px;
}



    ul.footer_hide,
    ul.footer_hide2,
    ul.footer_hide3 {
      height: 0;
      position: relative;
      overflow: hidden;
      transition: all 0.5s ease;
    }
  }

  a.detailView.onShow {
    display: block !important;
}
  ul.footer_hide li:nth-child(13) > a {
    display: none;
}


.shadowNotification {
  position: relative;
  margin-bottom: 10px;
  background:linear-gradient(45deg, #1252aa, rgb(20 103 216 / 85%));
  padding: 15px;
  -webkit-transition: .3s ease-in-out;
  transition: .3s ease-in-out;
  -webkit-transition: .3s ease-in-out;
  -moz-transition: .3s ease-in-out;
  -ms-transition: .3s ease-in-out;
  -o-transition: .3s ease-in-out;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  max-width: 270px;
  margin-left:0px;
  box-shadow: 0 1px 1rem -3px rgba(0,0,0,.15)!important;
}
.shadowNotification p {
  font-size: 12px !important;
  line-height: 14px !important;
  margin-bottom: 0;
  color:#fff;
}
span.btn.btn-md.text-link {
  text-decoration: none;
  border: 0;
  border-bottom: 2px solid #f02f2f;
  padding: 0!important;
  border-radius: 0;
  font-size: 12px;
  margin-top: 5px;
  font-weight: 600;
  color: #fff;
}
.shadowNotification h6 {
  font-size: 14px;
  line-height: 16px;
}
.notifications.position-relative {
  position: fixed !important;
  right: 35px;
  bottom: 115px;
  z-index: 10;
  transition: .3s ease-in-out;
  -webkit-transition: .3s ease-in-out;
  -moz-transition: .3s ease-in-out;
  -ms-transition: .3s ease-in-out;
  -o-transition: .3s ease-in-out;
}
.not_card {
  width: 270px;
  position: absolute;
  right: 0px;
  bottom: 50px;
}
span.bellicon {
  height: 45px;
  width: 45px;
  text-align: center;
  display: block;
  color: #fff;
  border-radius: 10px;
  line-height: 41px;
  cursor:pointer;
}
.note_hide3
{
  display:none;
}


.parent{
  width:40px;
  height:40px;
  background:#2033db;
  margin:auto;
  border-radius:100%;
  margin-top:60px;
  position:relative;
  cursor:pointer;
  text-align: center;
}
@keyframes breathe{
  0%{transform:scale(0.8)}
  50%{transform:scale(0.5)}
  100%{transform:scale(0.8)}
}


.parent:after{
  content:"";
  position: absolute;
  top: -35px;
  left: -35px;
  z-index: 3;
  width: 110px;
  height: 110px;
  background: #2033db;
  opacity: 0.2;
  border-radius: 100%;
  -webkit-animation: breathe 2s infinite;
  animation: breathe 2s infinite;
}
.parent > span {
  color: #fff;
  font-weight: bold;
  font-size: 22px;
  position: relative;
  z-index: 4;
}
.shadowNotification:after {
  content: "";
  position: absolute;
  border-right: 15px solid #1357b5;
  border-bottom: 15px solid transparent;
  bottom: -5px;
  right: 17px;
  transform: rotate(135deg);
}
footer.footer1 {
  overflow: hidden;
}
p.copyrt {
  text-align: center;
  margin: 0px;
  position: relative;
  font-size: 13px !important;
  margin-bottom: 20px;
}

@media screen and (max-width:767px)
{


.hide-mobile
{
  display:none !important;
}

.whatsapp-button { 
  bottom: 40px !important;
  right: 9px !important;
}

a.whatsAAP.Instagram.whatsApp {
  bottom: 68px;
}
  .notifications.position-relative {
    bottom: 90px;
    right: 16px;
  }
  .logosFooter {
    display: flex;
    flex-wrap: wrap;
}


.for_mobile span {
  min-height: 100px;
}

.for_mobile {
  text-align: right;
}


}


a.reg-btn {
  color: #fff;
  font-size: 14px;
  background: red;
  padding: 3px 12px;
  border-radius: 10px;
  margin-top: 8px;
  display: inline-block;
}



footer.footer1 { 
  z-index: 99;
}

.shadowNotification p { 
  margin: 3px 0;
}

.whatsapp-button{
  position: fixed;
  bottom: 25px;
  right: 25px;
  z-index: 99;
  background-color: #25d366;
  border-radius: 50px;
  color: #ffffff;
  text-decoration: none;
  width: 50px;
  height: 50px;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 0px 25px -6px rgba(0,0,0,1);
  -moz-box-shadow: 0px 0px 25px -6px rgba(0,0,0,1);
  box-shadow: 0px 0px 25px -6px rgba(0,0,0,1);
  animation: effect 5s infinite ease-in;
}

@keyframes effect {
  20%, 100% {
      width: 50px;
      height: 50px;
      font-size: 30px;
  }
  0%, 10%{
      width: 55px;
      height: 55px;
      font-size: 35px;
  }
  5%{
      width: 50px;
      height: 50px;
      font-size: 30px;
  }
}





`
