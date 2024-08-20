import React, { Suspense, useEffect, useState } from 'react'
import Header from '../../components/Header'
import BreadcrumbBox from '../../components/common/Breadcrumb'
import { Styles } from '../../components/common/styles/header'
import Styless from './style/testimonial'
import Footer from '../../components/Footer'
import 'aos/dist/aos.css'
import Head from 'next/head'
import Modal from "react-modal";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    transition: '.3s ease-in-out',
    padding: '0',
    overflow: 'inherit',
    maxWidth: '650px',
    width: '80%'
  },
};

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
  
   testimonialList = pgdata?.success?.sort((a, b) => b.id - a.id);
 // testimonialList = pgdata?.success;
 
  // const postReview = testimonialList[0].testimonial ? testimonialList[0].testimonial.sort((a, b) => b.id - a.id) : [];

  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => { }, [isOpen]);

  const toggleModal = (key) => {
    const data = testimonialList.find((row) => row.name === key);
    setModalData(data);
    setIsOpen(true)
  }



  // const removeHTML = (str) => {
  //   var tmp = document.createElement('p')
  //   tmp.innerHTML = str
  //   return tmp.textContent || tmp.innerText || ''
  // }

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
            <div onClick={() => {
                          toggleModal(i.name)
                        }} className="yit-item">
              <div className="yit-thumbnail"> <img  onError={onImageError} width="100" height="100" src={i.imageurl ? i.imageurl : placeholderImage } alt="Testimonial Image" className="yit-img img-circle" /> </div>
              <div className="yit-content">
                {/* <p className="yit-p"> {removeHTML(i.content)} </p> */}
                <p className="yit-p">  <span
                                    dangerouslySetInnerHTML={{
                                      __html: i?.content,
                                    }}
                                  ></span> </p>
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

  <Modal isOpen={isOpen} appariaHideApp={false} style={customStyles}>
              <button className="close-modal" onClick={() => setIsOpen(false)}>
                X
              </button>
              <div className="row">
                <div className="col-md-12 border-0 shadowPage page">
                  <div className="pageOne">
                    <h3 className="tet-title">  {modalData?.name} </h3>
                    <div className="w-100">
                    <span
                                    dangerouslySetInnerHTML={{
                                      __html: modalData?.content,
                                    }}
                                  ></span>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>




            </Styles>

            <Footer />
          </div>
        </Styless>
      </Styles>
    </Suspense>
  )
}

export default Testimonials
