import React, { Suspense, useEffect } from "react";
import HeaderThree from "@/components/HeaderThree";
import Head from "next/head";
import Styles from "../css/style";
import Footer from "@/components/Footer";


const Outcome = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow:2,
        },
      },
    ],
  };

  var stories = {
    dots: false,
    infinite: false,
    arrows: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  useEffect(() => {
    var s=document.createElement("script"); s.type="text/javascript"; s.async=true; s.src="https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s); 
  })

  

  return (
    <>

      <Suspense>
        <Head>
          <title>Pathway Program | Shoolini University</title>
          <meta
            name="description"
            content="" />
          <meta name="keywords" content="" />
        </Head>

        <HeaderThree />


        <Styles>

        <section className="vdoSec">  
          <div className="video-hero">
           
            <div className="video-overlay"></div>
            <div className="page-width">
               <div className="video-hero--content">
                  <h2>EMPOWERING FUTURES</h2>
               </div>
            </div>
         </div> 
         </section> 

       

   <section className="inner-page pt-md-5 mt-md-4 pb-0">
      <div className="container">
		  <div className="row mainContent">
		  <div className="col-md-3 order-2 order-sm-2 order-md-1 order-lg-1 order-xl-1">
		  <div className="sidebar">
				<div   className="widget recent-posts-entry">
 
	 <h5  className="widget-title style-1 mt-3">Admissions Open: 2023</h5>
		<div className="forminfo">
                          <div class="npf_wgts" data-height="400px" data-w="1222078993f709a639ec1d6ca2d2d084"></div>
    </div>

    <div  className="widget-post-bx">
       
    </div>
		
	</div>
	
</div>


				
		  </div>
		   <div className="col-md-9 title-four content research-ride order-1 order-sm-1 order-md-2 order-lg-2 order-xl-2">
			
			
<h4>Navigating Professional Journey </h4>
<p> Top industry leaders assist students in developing a futuristic and clear vision. They offer guidance on setting achievable goals, mapping out career paths, and making informed choices. </p>
<h4> Skill Development {'&'} Personal Growth </h4>
<p>Special workshops, seminars, and one-on-one interactions are organised to offer insights into industry-specific skills, leadership qualities, and strategies for personal growth. Mentors guide students in building a strong resume and help them forge valuable connections and create a personal brand.</p>



<h4> Confidence Building {'&'} Emotional Support </h4>
<p>Navigating the world of careers and professional development can be daunting. Mentors also provide emotional support and encouragement, helping students build confidence and resilience. They offer a safe space to discuss their aspirations, fears, and challenges.</p>

			
<h3  className="rdx-tilte text-center pt-5">Selection Process </h3>
<p> Shoolini ensures merit-based selection. The criteria includes:</p>
<div className="row">
<div className="col-md-4">
<div className="card-small">
<h5>Aptitude Test </h5>
<p>The first screening assesses students' aptitude and suitability by evaluating their analytical, problem-solving, and critical thinking skills. Their ability to adapt to different situations is also noted.</p>
</div>
</div>
<div className="col-md-4">
<div className="card-small bg-red">
<h5>Inputs from Faculty </h5>
<p>The experienced faculty members provide recommendations based on their interactions with students. This helps identify youngsters with exceptional dedication, passion, and a drive for success.</p>
</div>
</div>
<div className="col-md-4">
<div className="card-small">
<h5>Final Selection </h5>
<p>This is based on the combined aptitude test evaluation, faculty inputs {'&'} personal interviews. Students with strong potential, clear sense of direction {'&'} commitment to professional growth are selected.</p>
</div>
</div>



<div className="col-md-5">
<div className="card-flex">
		<h3> What’s In It For The Mentors </h3>

		<div className="smallCard">
			<p>Personal Fulfillment  </p>
		</div>

		<div   className="smallCard">
			<p> Giving Back to the Community </p>
		</div>

		<div  className="smallCard">
			<p>Networking {'&'} Collaboration  </p>
		</div>

		<div data-aos="flip-left" className="smallCard">
			<p> Building a Legacy  </p>
		</div>

		<div className="smallCard">
			<p> Fresh Perspectives and Innovation  </p>
		</div>

		<div  className="smallCard">
			<p> Personal Growth {'&'} Reflection  </p>
		</div>

	</div>
</div>


<div className="col-md-7">
<div className="card-flex">
		<h3> What’s In It For The Mentees </h3>
<div  className="smallCard">
			<p>  </p>
		</div>
		<div className="smallCard">
			<p>Structuring a roadmap to success  </p>
		</div>

		<div   className="smallCard">
			<p> Self-awareness: Understand your strengths {'&'} passions </p>
		</div>

		<div  className="smallCard">
			<p> Define professional goals in alignment with personal goals  </p>
		</div>

		<div  className="smallCard">
			<p> Understanding opportunities {'&'} challenges   </p>
		</div>

		<div className="smallCard">
			<p> Multiple elements to profile building    </p>
		</div>

		<div  className="smallCard">
			<p> Personal branding    </p>
		</div>

	</div>
</div>






</div>





<div  className="blank">

</div>
</div>


		  </div>
          </div>

           
		 
         
         </section>

        </Styles>

        <Footer />
      </Suspense>

    </>
  )
}

export default Outcome