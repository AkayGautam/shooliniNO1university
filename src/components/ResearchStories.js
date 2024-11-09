import React from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { Styles } from "./common/styles/stories";
import { FiArrowRightCircle } from "react-icons/fi";
import Link from "next/link";
import Slider from "react-slick";
import Image from "next/legacy/image";

const ResearchStories = () => {

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };

  return (
    <>
      <Styles>
        <section className="stories-area">
          <Row className="m-0">
      
            <div className="col-md-6 p-0 position-relative mob-researchNone"> 
            <div className="sec-title mainPosTop z-index-9">
                <h2 className="text-white">THINK INSPIRATION </h2>
                </div>
            <Slider className="col-md-12 p-0" {...settings}> 
            
            <div className="imgSlider position-relative">
             
                <Image
                width={825}
                height={825}
                src="/assets/images/rockstars/apjg.jpg"
                alt="Anupam Kher"
              />

              <div className="ml-4s StoriesData-ab">
                  <h4> APJ Abdul Kalam </h4>
                  <p className="text-white">
                  It was no less than a “lifetime achievement” for Shoolini students to receive degrees and medals from former President of India Dr APJ Abdul Kalam at the first convocation.
<br /><br />
He had high words of praise for Shoolini University: <i>“I am happy about how Shoolini University has adopted a research-driven model and is providing value-based quality education to students of all sections of society.”</i>
                  </p>
              </div>
            </div>

            <div className="imgSlider">
                <Image
                width={825}
                height={825}
                src="/assets/images/rockstars/robertg.jpg"
                alt="Anupam Kher"
              />
              <div className="ml-4s StoriesData-ab">
                  <h4> Dr Robert Huber </h4>
                  <p className="text-white">
                  Dr Robert Huber, a German biochemist and Nobel laureate attended the Second Convocation of Shoolini University as the chief guest.
<br /><br />
Addressing everyone, he said, <i> “It was a privilege to look into the eyes of graduating students as they are blooming with joy and their faces filled with aspirations.” </i>
                  </p>
              </div>
            </div>

            <div className="imgSlider">
                
                <Image
                width={825}
                height={825}
                src="/assets/images/rockstars/kirang.jpg"
                alt="Anupam Kher"
              />
              <div className="ml-4s StoriesData-ab">
                  <h4> Kiran Bedi </h4>
                  <p className="text-white">
                  Former Lieutenant Governor of Puducherry and the first woman to join the Indian Police Service (IPS), Dr Kiran Bedi, had a stellar interaction with the audience during the Yogananda Guru Series of Webinars.
<br /><br />
Advising students to follow the path of right thinking and the right lifestyle, she said, <i> “Education is not just about passing examinations, it is all about your skill set… how you become a better human being, how you become self-reliant and possess a value system."</i>
                  </p>
              </div>
            </div>

            <div className="imgSlider">
              
                <Image
                width={825}
                height={825}
                src="/assets/images/rockstars/yuvig.jpg"
                alt="Anupam Kher"
              />
              <div className="ml-4s StoriesData-ab">
                  <h4> Yuvraj Singh </h4>
                  <p className="text-white">
                  Cricketing legend Yuvraj Singh visited the Shoolini University campus and inaugurated our cricket stadium that is named after him.
<br /><br />
Speaking on the occasion, Yuvi said, <i>“I am always the happiest being around young, energetic and positive minds. This is what I have witnessed here at Shoolini University.”</i>
                  </p>
              </div>
            </div>


            <div className="imgSlider">
               
                <Image
                width={825}
                height={825}
                src="/assets/images/rockstars/babag.jpg"
                alt="Anupam Kher"
              />
              <div className="ml-4s StoriesData-ab">
                  <h4> Shri Shri Ravi Shankar </h4>
                  <p className="text-white">
                  Founder of the Art of Living Foundation and International Association for Human Values, Shri Shri Ravi Shankar, conferred degrees on 1,617 students of Shoolini University during its third convocation.
<br /><br />
Interacting with the students at the campus, Shri Shri said, <i>“One should remember three things in life — meditation, which is the solution for anxiety and insecurity, courage to face humiliation and ability to adapt to all situations and live in the present moment.”</i>
                  </p>
              </div> 
            </div>

            <div className="imgSlider">
         
                <Image
                width={825}
                height={825}
                src="/assets/images/rockstars/kapoorg.jpg"
                alt="Kher"
              />
              <div className="ml-4s StoriesData-ab">
                  <h4> Gaurav Kapur </h4>
                  <p className="text-white">
                  Gaurav Kapur, Founder Oaktree Sports, Cricket Presenter and Commentator talked about his fascinating journey to success and glory on the virtual platform of Yogananda Guru Series of Webinars.
<br /><br />
A firm believer in storytelling, he urged educators, <i>“Storytelling is very important for educators. Learning anything in a story format is fun and gets stored in the right section of the brain.”</i>
                  </p>
              </div>
            </div>

            <div className="imgSlider">
             
                <Image
                width={825}
                height={825}
                src="/assets/images/rockstars/kherg.jpg"
                alt="Kher"
              />
              <div className="ml-4s StoriesData-ab">
                  <h4>Anupam Kher </h4>
                  <p className="text-white">
                  An iconic actor, Anupam Kher enthralled the audience at the virtual event, ‘Ideas that Matter’. Thousands of teachers and students from north India attended the event. 
<br /><br />
Emphasising that failures were a part of life, he said, <i>“Failure teaches you more than success, so cherish it and face it fearlessly.”</i>
                  </p>
              </div>
            </div>

            <div className="imgSlider">
          
                <Image
                width={825}
                height={825}
                src="/assets/images/rockstars/milkhug.jpg"
                alt="Kher"
              />
              <div className="ml-4s StoriesData-ab">
                  <h4> Flying Sikh' Milkha Singh  </h4>
                  <p className="text-white">
                  The sporting legend, also known as Flying Sikh', Milkha Singh inaugurated an indoor sports complex named after him as Milkha Singh Sports Complex.
<br /><br />
Encouraging the students to work hard, he emphasised that hard work is even more important than competence. <i>"The youth are the future of the nation and must work hard to bring glory to the nation."</i>
                  </p>
              </div>
            </div>

            
              
            </Slider>
            </div>

            <Col className="full-wrap-red pl-4s" md="6">
              <div className="sec-title z-index-9">
                <h2 className="text-white">Think Research </h2>
                <p className="whyUsSubText text-white">
                  that matches the world’s best universities
                </p>

                <ul className="whyUs text-white pl-0">
                  <li>1500+ Patents Filed </li>
                  <li> H-index {">"} 137</li>
                  <li>Field Weighted Citation Impact (FWCI) 2.22 </li>
                  <li>No.1 In India in Citations Per Paper </li>
                  <li> 104+ State-of-the-Art Laboratories </li>
                  <li> 11 Centres of Excellence </li>
                  <li> 19 Shoolini Researchers among Top 2% Scientists </li>
                </ul>
                <a
                  target="_blank"
                  className="iconArrL"
                  href="https://research.shooliniuniversity.com/"
                  rel="noreferrer"
                >
                  Learn Why We are A Top-ranked Research University
                  <FiArrowRightCircle />
                </a>
              </div>
            </Col>
            
          </Row>
        </section>
      
      </Styles>
    </>
  );
};

export default ResearchStories;
