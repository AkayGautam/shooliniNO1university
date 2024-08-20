import styled from 'styled-components'

const Styles = styled.div`
.custCard .card {
    padding: 15px;
    background: #f6f6f6;
    height: 100%;
}
.custCard h3 {
    font-size: 20px;
    color: red;
}

.cj-mb-10 h4 { 
    font-size: 20px;
    font-weight: 700;
    color: red;
}
.cj-mb-10 {
    margin-bottom: 13px;
}
.cj-mb-10 i {
    color: red;
}
.custCard {
    height: 100%;
}
.acddress h1 {
    font-size: 50px;
    font-weight: 700;
    line-height: 49px;
    text-transform: uppercase;
    margin-bottom: 20px;
    color: #f02f2f;
    font-style: normal;
    margin-top: 40px;
}
.sideBarNew {
    background: #e5e4e4!important;
    padding: 10px;
}
.iframes{
    display:flex;
    flex-wrap:wrap;
}
.iframes iframe{
    flex-basis:50%;
    wisth:50%;
}

.card-box {
    background: rgb(255, 255, 255);
    padding: 30px;
    border-radius: 15px;
    height: 100%;
}
.acordianFaq button {
    background: rgb(255, 255, 255);
    border-width: 0px 0px 1px;
    border-top-style: initial;
    border-right-style: initial;
    border-left-style: initial;
    border-top-color: initial;
    border-right-color: initial;
    border-left-color: initial;
    border-image: initial;
    width: 100%;
    text-align: left;
    margin-bottom: 10px;
    border-bottom-style: solid;
    border-bottom-color: rgb(206, 206, 206);
}
.accordion-body {
    font-size: 16px;
    padding: 10px 20px;
    font-family: Poppins;
    margin-bottom: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px 0px !important;
}
.accordion-title {
    font-weight: 700;
    display: block;
    font-size: 18px !important;
    padding: 10px 20px !important;
}
section#faqs {
    font-family: CircularStd;
    background: rgb(245, 245, 247);
    padding: 40px 0px;
    margin-top: 30px;
}



@media screen and (max-width:767px)
{
    .xs-2 {
        order: 2;
        margin-top: 20px;
    }
    .xs-1 {
        order: 1; 
    }
}




`

export default Styles
