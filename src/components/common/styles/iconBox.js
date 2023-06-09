import styled from 'styled-components'
import { colors } from '../elements/elements'

export const Styles = styled.div`
  .icon-box-area {
    padding-bottom: 80px;

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
`
