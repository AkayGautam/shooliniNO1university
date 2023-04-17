import styled from 'styled-components'
import { colors } from '../elements/elements'

export const Styles = styled.div`
 
.cd-hero__slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateX(100%);
}

.cd-hero__slide.cd-hero__slide--selected {
  /* this is the visible slide */
  transform: translateX(0);
}

.cd-hero__slide.cd-hero__slide--move-left {
  /* slide hidden on the left */
  transform: translateX(-100%);
}

.cd-hero__slide.cd-hero__slide--is-moving, 
.cd-hero__slide.cd-hero__slide--selected {
  /* the cd-hero__slide--is-moving class is assigned to the slide which is moving outside the viewport */
  transition: transform 0.5s;
}

@media only screen and (min-width: 768px) {
  .cd-hero__content.cd-hero__content--half-width {
    opacity: 0;
    transform: translateX(40px);
  }

  .cd-hero__slide--move-left .cd-hero__content.cd-hero__content--half-width {
    transform: translateX(-40px);
  }

  .cd-hero__slide--selected .cd-hero__content.cd-hero__content--half-width {
    /* this is the visible slide */
    opacity: 1;
    transform: translateX(0);
  }

  .cd-hero__slide--is-moving .cd-hero__content.cd-hero__content--half-width {
    /* this is the slide moving outside the viewport 
    wait for the end of the transition on the <li> parent before set opacity to 0 and translate to 40px/-40px */
    transition: opacity 0s 0.5s, transform 0s 0.5s;
  }

  .cd-hero__slide--from-left.cd-hero__slide--selected .cd-hero__content.cd-hero__content--half-width:nth-of-type(2),
  .cd-hero__slide--from-right.cd-hero__slide--selected .cd-hero__content.cd-hero__content--half-width:first-of-type {
    /* this is the selected slide - different animation if it's entering from left or right */
    transition: opacity 0.4s 0.2s, transform 0.5s 0.2s;
  }

  .cd-hero__slide--from-left.cd-hero__slide--selected .cd-hero__content.cd-hero__content--half-width:first-of-type,
  .cd-hero__slide--from-right.cd-hero__slide--selected .cd-hero__content.cd-hero__content--half-width:nth-of-type(2) {
    /* this is the selected slide - different animation if it's entering from left or right */
    transition: opacity 0.4s 0.4s, transform 0.5s 0.4s;
  }
}





.mainHome {
  background-image: url("../../assets/video/bg1.jpg");
  background-size: cover;
  -webkit-animation: slidein 20s;
  animation: slidein 20s;

  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;

  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;

  -webkit-animation-direction: alternate;
  animation-direction: alternate;
}

@-webkit-keyframes slidein {
  from {
    background-position: top;
    background-size: 3000px;
  }
  to {
    background-position: -100px 0px;
    background-size: 2750px;
  }
}

@keyframes slidein {
  from {
    background-position: top;
    background-size: 3000px;
  }
  to {
    background-position: -100px 0px;
    background-size: 2750px;
  }
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(75, 75, 250, 0.3);
  border-radius: 3px;
}
.center h1 {
  text-align: center;
  color: white;
  text-transform: uppercase;
}

.hroText {
  position: absolute;
  left: 010%;
}
.hroText h1 {
  font-size: 50px;
  font-weight: 700;
}












`
