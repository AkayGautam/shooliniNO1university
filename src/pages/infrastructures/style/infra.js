import styled from 'styled-components'
import { colors } from '../../../components/common/elements/elements'

const Styless = styled.div`
 
.yit-testimonial {
  padding-top: 70px;
  padding-bottom: 70px;
  background: #f6f6f6;
}
.yit-testimonial .yit-style-15 .yit-item {
  border: 1px dashed #55b4ec;
}
.yit-testimonial .yit-style-15 .yit-item {
  margin-bottom: 20px;
  padding: 15px;
  position: relative;
  border-radius: 10px;
  -moz-transition: all .5s ease-in-out 0s;
  -webkit-transition: all .5s ease-in-out 0s;
  -o-transition: all .5s ease-in-out 0s;
  -ms-transition: all .5s ease-in-out 0s;
  transition: all .5s ease-in-out 0s;
  z-index: 0;
}
.yit-testimonial .yit-style-15 .yit-item::before, .yit-testimonial .yit-style-15 .yit-item::after {
  content: "";
  height: 20px;
  position: absolute;
  transition: all 0.5s ease-in-out 0s;
  width: 20px;
  -moz-border-radius: 100px;
  -webkit-border-radius: 100px;
  border-radius: 100px;
}
.yit-testimonial .yit-style-15 .yit-item::before {
  left: -10px;
  top: -10px;
}
.yit-style-15::before {
  background: #55b4ec;
}
.yit-testimonial .yit-style-15 .yit-img {
  padding: 3px;
  border: solid 2px #55b4ec;
}
.yit-testimonial .yit-a .yit-img, .yit-testimonial .yit-img {
  border: none;
  outline: none !important;
  outline-offset: 0 !important;
  opacity: 1;
}
.yit-testimonial .yit-img {
  line-height: normal;
  max-width: 100%;
  vertical-align: middle;
  width: 70px;
  height: 70px;
}
.yit-testimonial .yit-style-15 .yit-content {
  overflow: hidden;
}
.yit-testimonial .yit-p {
  line-height: 1.7;
  padding-bottom: 5px;
  padding-top: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
}
h4.yit-heading-h4
{
  font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
    color: #e41a1a;
}
.yit-testimonial .yit-heading-h6 {
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: 600;
}
yit-testimonial .yit-a, a {
  color: #55b4ec;
  -moz-transition: all .4s ease-in-out 0s;
  -webkit-transition: all .4s ease-in-out 0s;
  -o-transition: all .4s ease-in-out 0s;
  -ms-transition: all .4s ease-in-out 0s;
  transition: all .4s ease-in-out 0s;
  text-decoration: none;
    outline: none !important;
    outline-offset: 0 !important;
}
.yit-item {
  height: calc(100% - 20px);
}
a.yit-a {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.blog-item {
  border: 1px solid rgb(238, 238, 238);
  border-radius: 5px;
  transition: all 0.2s ease 0s;
  margin-bottom: 30px;
  background: #fff;
}
.blog-img a img {
  border-radius: 5px 5px 0px 0px;
}
.blog-content {
  padding: 30px 25px 25px;
  border-radius: 0px 0px 5px 5px;
}
.blog-content .blog-title {
  margin-bottom: 10px;
}
.blog-content .blog-title h6   {
  color: rgb(24, 43, 73);
  line-height: 25px;
}
.blog-content .blog-desc p {
  font-size: 14px;
  color: rgb(150, 150, 150);
  line-height: 25px;
}
.blog-item:hover {
  box-shadow: rgba(0, 0, 0, 0.07) 0px 12px 25px;
}
.blog-title h4 {
  font-size: 18px;
  color: #1467d8;
}
h4.post_title {
  font-size: 34px;
  font-weight: 600;
  color: #e41a1a;
  line-height: 1.4em;
  margin-bottom: 20px;
  -webkit-letter-spacing: 0.25px;
  -moz-letter-spacing: 0.25px;
  -ms-letter-spacing: 0.25px;
  letter-spacing: 0.25px;
  text-align: center;
}
.blog-desc p {

  margin: 0;
}
.text-left
{
  text-align:left !important;
}
.blog-img {
  max-height: 300px;
  position: relative;
  overflow: hidden;
}



`

export default Styless
