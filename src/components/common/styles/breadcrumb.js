import styled from 'styled-components'
import { colors } from '../elements/elements'

export const Styles = styled.div`
  .breadcrumb-area {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 90px 0;
    position: relative;

    &:before {
      position: absolute;
      content: '';
      background: #000000;
      opacity: 0.5;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }

    .breadcrumb-box {
      background: ${colors.bg1};
      display: inline-block;
      padding: 15px 20px;
      border-radius: 5px;
      z-index: 9;
      position: relative;
      h2.breadcrumb-title {
        color: #ffffff;
        font-weight: 600;
        font-size: 24px;
        margin-bottom: 5px;

        @media (max-width: 767px) {
          font-size: 20px;
        }
      }

      nav {
        ol.breadcrumb {
          display: inline-flex;
          padding: 0;
          margin-bottom: 0;
          background-color: transparent;
          border-radius: 0;

          li.breadcrumb-item {
            a {
              color: ${colors.green};

              &:hover {
                color: #ffffff;
              }
            }
          }

          li.breadcrumb-item.active {
            color: ${colors.border3};

            &::before {
              color: ${colors.border3};
            }
          }
        }
      }
    }

    @media (max-width: 767px) {
      padding: 30px 0;
    }
  }

  h1.breadcrumb-title {
    color: #ffffff;
    font-weight: 600;
    font-size: 24px;
    margin: 0;
  }
`
