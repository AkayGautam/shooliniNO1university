import React, { Suspense, useEffect, useState } from "react";
import Header from "../../components/Header";
import BreadcrumbBox from "../../components/common/Breadcrumb";
import { Styles } from "../../components/common/styles/header";
import Styless from "./style/infra";
import Footer from "../../components/Footer";
import "aos/dist/aos.css";
import Head from "next/head";

const Infrastructure = () => {
  const [postdata, setPostata] = useState([]);

  var postlist_one = [];
  var postlist_two = [];
  var postlist_three = [];
  var postlist_four = [];
  var postlist_five = [];
  var postlist_six = [];
  var postlist_seven = [];

  useEffect(() => {
    fetch(
      "https://shooliniuniversity.com/media/GetinfrastructureAPI?auth=shoolini@999&id=940",
      {
        method: "post",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({ auth: "shoolini@999" }),
      }
    )
      .then((response) => response.json())
      .then((res) => {
        if (res.success) {
          setPostata(res.success);
        }
      });
  }, []);



  if (postdata?.categoriesone) {
    postlist_one["details"] = JSON.parse(postdata?.categoriesone?.catdetails);
    postlist_one["title"] = postdata?.categoriesone?.cattitle;
  }

  if (postdata?.categoriestwo) {
    postlist_two["details"] = JSON.parse(postdata?.categoriestwo?.catdetails);
    postlist_two["title"] = postdata?.categoriestwo?.cattitle;
  }

  if (postdata?.categoriesthree) {
    postlist_three["details"] = JSON.parse(postdata?.categoriesthree?.catdetails);
    postlist_three["title"] = postdata?.categoriesthree?.cattitle;
  }

  if (postdata?.categoriesfour) {
    postlist_four["details"] = JSON.parse(postdata?.categoriesfour?.catdetails);
    postlist_four["title"] = postdata?.categoriesfour?.cattitle;
  }
  if (postdata?.categoriesfive) {
    postlist_five["details"] = JSON.parse(postdata?.categoriesfive?.catdetails);
    postlist_five["title"] = postdata?.categoriesfive?.cattitle;
  }
  if (postdata?.categoriessix) {
    postlist_six["details"] = JSON.parse(postdata?.categoriessix?.catdetails);
    postlist_six["title"] = postdata?.categoriessix?.cattitle;
  }

  if (postdata?.categoriesseven) {
    postlist_seven["details"] = JSON.parse(postdata?.categoriesseven?.catdetails);
    postlist_seven["title"] = postdata?.categoriesseven?.cattitle;
  }




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


                <section className="py-5">
                    <div className="container">
                    <div className="row">
                    <div className="col-md-6">
                    <div className="blog-img">
                              {/* <img className="img-thumbnail" src={post.image_url} /> */}
                              <img className="img-thumbnail" src="https://shooliniuniversity.com/media/1721821924-qzz7e5z1wk271.jpg" />
                            </div>
                    </div>
                    <div className="col-md-6">
                    <h4 className="post_title text-left"> Buildings{' &'} Beyond </h4>
                    <p> The Shoolini University campus is one of India's cleanest campuses, complemented by top-notch infrastructure. Our dedication to environmental sustainability has earned us the esteemed distinction in the Swachh Bharat Survey, but there's much more to uncover. <br />   As you explore our tranquil campus nestled in the hills of Himachal Pradesh, you will encounter an environment that seamlessly blends simplicity with creativity, fostering a modern learning experience beyond the ordinary. Welcome to Shoolini, where we prioritise cleanliness and cutting-edge facilities. </p>
                      </div>

                </div>
                    </div>
                </section>
              <section className="yit-testimonial">
                <div className="container">
 

 
                {postlist_two && (
                    <div className="row">
                      <div className="col-md-12">
                        <h4 className="post_title">{postlist_two?.title}</h4>
                      </div>
                      {postlist_two?.details?.map((post, idx) => (
                        <div className="col-md-4">
                          <div className="blog-item">
                            <div className="blog-img">
                              <img className="img-thumbnail" src={post.image_url} />
                              {/* <img className="img-thumbnail" src="https://shooliniuniversity.com/media/1695636734-50907607067_26aa1f7cc6_ka.jpg" /> */}
                            </div>
                            <div className="blog-content">
                              <div className="blog-title">
                                <h4>{post.title}</h4>
                              </div>
                              <div className="blog-desc">
                                <p><p>{post.description}</p> </p>
                              </div>
                            </div>

                          </div>
                        </div>
                      ))}
                    </div>
                  )}



{postlist_five && (
                    <div className="row">
                      <div className="col-md-12">
                        <h4 className="post_title">{postlist_five?.title}</h4>
                      </div>
                      {postlist_five?.details?.map((post, idx) => (
                        <div className="col-md-4">
                          <div className="blog-item">
                            <div className="blog-img">
                              <img className="img-thumbnail" src={post.image_url} />
                              {/* <img className="img-thumbnail" src="https://shooliniuniversity.com/media/1695636734-50907607067_26aa1f7cc6_ka.jpg" /> */}
                            </div>
                            <div className="blog-content">
                              <div className="blog-title">
                                <h4>{post.title}</h4>
                              </div>
                              <div className="blog-desc">
                                <p><p>{post.description}</p> </p>
                              </div>
                            </div>

                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  

{postlist_seven && (
                    <div className="row">
                      <div className="col-md-12">
                        <h4 className="post_title">{postlist_seven?.title}</h4>
                      </div>
                      {postlist_seven?.details?.map((post, idx) => (
                        <div className="col-md-4">
                          <div className="blog-item">
                            <div className="blog-img">
                              <img className="img-thumbnail" src={post.image_url} />
                              {/* <img className="img-thumbnail" src="https://shooliniuniversity.com/media/1695636734-50907607067_26aa1f7cc6_ka.jpg" /> */}
                            </div>
                            <div className="blog-content">
                              <div className="blog-title">
                                <h4>{post.title}</h4>
                              </div>
                              <div className="blog-desc">
                                <p><p>{post.description}</p> </p>
                              </div>
                            </div>

                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {postlist_one && (
                    <div className="row">
                      <div className="col-md-12">
                        <h4 className="post_title">{postlist_one?.title}</h4>
                      </div>
                      {postlist_one?.details?.map((post, idx) => (
                        <div className="col-md-4">
                          <div className="blog-item">
                            <div className="blog-img">
                              <img className="img-thumbnail" src={post.image_url} />
                              {/* <img className="img-thumbnail" src="https://shooliniuniversity.com/media/1695636734-50907607067_26aa1f7cc6_ka.jpg" /> */}
                            </div>
                            <div className="blog-content">
                              <div className="blog-title">
                                <h4>{post.title}</h4>
                              </div>
                              <div className="blog-desc">
                                <p><p>{post.description}</p> </p>
                              </div>
                            </div>

                          </div>
                        </div>
                      ))}
                    </div>
                  )}


{postlist_four && (
                    <div className="row">
                      <div className="col-md-12">
                        <h4 className="post_title">{postlist_four?.title}</h4>
                      </div>
                      {postlist_four?.details?.map((post, idx) => (
                        <div className="col-md-4">
                          <div className="blog-item">
                            <div className="blog-img">
                               <img className="img-thumbnail" src={post.image_url} /> 
                              {/* <img className="img-thumbnail" src="https://shooliniuniversity.com/media/1695636734-50907607067_26aa1f7cc6_ka.jpg" /> */}
                            </div>
                            <div className="blog-content">
                              <div className="blog-title">
                                <h4>{post.title}</h4>
                              </div>
                              <div className="blog-desc">
                                <p><p>{post.description}</p> </p>
                              </div>
                            </div>

                          </div>
                        </div>
                      ))}
                    </div>
                  )}



                  {postlist_three && (
                    <div className="row">
                      <div className="col-md-12">
                        <h4 className="post_title">{postlist_three?.title}</h4>
                      </div>
                      {postlist_three?.details?.map((post, idx) => (
                        <div className="col-md-4">
                          <div className="blog-item">
                            <div className="blog-img">
                             <img className="img-thumbnail" src={post.image_url} /> 
                              {/* <img className="img-thumbnail" src="https://shooliniuniversity.com/media/1695636734-50907607067_26aa1f7cc6_ka.jpg" /> */}
                            </div>
                            <div className="blog-content">
                              <div className="blog-title">
                                <h4>{post.title}</h4>
                              </div>
                              <div className="blog-desc">
                                <p><p>{post.description}</p> </p>
                              </div>
                            </div>

                          </div>
                        </div>
                      ))}
                    </div>
                  )}




{postlist_six && (
                    <div className="row">
                      <div className="col-md-12">
                        <h4 className="post_title">{postlist_six?.title}</h4>
                      </div>
                      {postlist_six?.details?.map((post, idx) => (
                        <div className="col-md-4">
                          <div className="blog-item">
                            <div className="blog-img">
                              <img className="img-thumbnail" src={post.image_url} />
                              {/* <img className="img-thumbnail" src="https://shooliniuniversity.com/media/1695636734-50907607067_26aa1f7cc6_ka.jpg" /> */}
                            </div>
                            <div className="blog-content">
                              <div className="blog-title">
                                <h4>{post.title}</h4>
                              </div>
                              <div className="blog-desc">
                                <p><p>{post.description}</p> </p>
                              </div>
                            </div>

                          </div>
                        </div>
                      ))}
                    </div>
                  )}



                </div>
              </section>
            </Styles>

            <Footer />
          </div>
        </Styless>
      </Styles>
    </Suspense>
  );
};

export default Infrastructure;
