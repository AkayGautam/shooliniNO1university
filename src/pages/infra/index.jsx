import React, { Suspense, useEffect, useState } from 'react'
import Header from '../../components/Header'
import BreadcrumbBox from '../../components/common/Breadcrumb'
import { Styles } from '../../components/common/styles/header'
import Styless from './style/infra'
import Footer from '../../components/Footer'
import 'aos/dist/aos.css'
import Head from 'next/head'



const Infra = () => {

  const [postdata, setPostata] = useState([]);

  var postlist = [];

  useEffect(() => {
    fetch("https://shooliniuniversity.com/media/GetinfrastructureAPI?auth=shoolini@999&id=940", {
      method: "post",
      headers: new Headers({
        "Content-Type": "application/json",
      }), 
      body: JSON.stringify({ auth: "shoolini@999" }),
    })
      .then((response) => response.json())
      .then((res) => setPostata(res));
  }, []);

  postlist = postdata?.success?.categoryfivedetails  ;
   console.log(postlist, 'cdcd')  

 
  return (
    <Suspense
      fallback={
        <div className="loading">
          <div className="lds-dual-ring"></div>
        </div>
      }
    >
      <Head>
        <title>Infrastructure | Shoolini University</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Head>

      <Styles>
        <Styless>
          {/* Main Wrapper */}
          <div className="main-wrapper testimonial-page">
            {/* Header 2 */}
            <Header />

            {/* Breadcroumb */}
            <BreadcrumbBox title="Infrastructure" />

            <Styles>
              {/* About Us */}


              <section className="yit-testimonial">
                <div className="container">
                  <div className="row"> 
                  { postlist?.categorytitlefive }

                  {
                    postlist.categoryfivedetails?.map((post) => (
                      <div className="col-md-6">
                          <div className="">

                              <div className="imgFull">
                                 <h4> mmm {post.title} </h4>    
                                 
                          </div>
                          </div>
                      </div>
                    
                       ))}
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

export default Infra
