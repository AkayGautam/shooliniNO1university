import React, { Suspense, useEffect, useState } from 'react'
import Header from '../../components/Header'
import BreadcrumbBox from '../../components/common/Breadcrumb'
import { Styles } from '../../components/common/styles/header'
import Styless from './style/testimonial'
import Footer from '../../components/Footer'
import 'aos/dist/aos.css'
import Head from 'next/head'



const Testimonials = () => {

  const placeholderImage =  'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'

  const onImageError = (e) => {
    e.target.src = placeholderImage
  }

  const [pgdata, setPgata] = useState([]);

  var testimonialList = [];
  
  useEffect(() => {
    fetch("https://shooliniuniversity.com/media/GetAllTestimonial", {
      method: "post",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ auth: "shoolini@999" }),
    })
      .then((response) => response.json())
      .then((res) => setPgata(res));
  }, []);
  
  testimonialList = pgdata?.success;

  return (
    <Suspense
      fallback={
        <div className="loading">
          <div className="lds-dual-ring"></div>
        </div>
      }
    >
      <Head>
        <title>Testimonials | Shoolini University</title>
        <meta name="description" content=""  />
        <meta name="keywords" content="" />
      </Head>
      
      <Styles>
        <Styless>
          {/* Main Wrapper */}
          <div className="main-wrapper testimonial-page">
            {/* Header 2 */}
            <Header />

            {/* Breadcroumb */}
            <BreadcrumbBox title="Testimonials" />

            <Styles>
              {/* About Us */}
            

     <section className="yit-testimonial">
    <div className="container">
      <div className="row">
        <div className="row yit-style-15">
        {testimonialList?.map((i, index) => {
             return (
          <div className="col-lg-3 col-md-3 col-sm-3">
            <div className="yit-item">
              <div className="yit-thumbnail"> <img  onError={onImageError} width="100" height="100" src={i.imageurl ? i.imageurl : placeholderImage } alt="Testimonial Image" className="yit-img img-circle" /> </div>
              <div className="yit-content">
                <p className="yit-p"> {i.content} </p>
                <h4 className="yit-heading-h4"> {i.name} </h4> 
                {/* <h6 className="yit-heading-h6">Program - <a className="yit-a" href="Javascript:void(0);" title="Company Name"> {i.coursename}</a></h6>
                 */}
              </div>
            </div>
          </div>
          );
        })}

          </div>
        </div>
      </div>
  
  </section>





            </Styles>

            <Footer />
          </div>
        </Styless>
      </Styles>
    </Suspense>
  )
}

export default Testimonials
