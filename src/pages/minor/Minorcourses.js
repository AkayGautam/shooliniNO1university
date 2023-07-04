import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Image from "next/legacy/image";

const Minorcourses = () => {
  const posts = [
    {
      id: 1,
      title: "Biology",
      body: "The faculty at Shoolini University's business school comprises experts in all areas of management studies. Most members have either completed their Doctoral studies at leading universities or have worked in corporate companies at leadership positions. The experienced team hails from the University of Berkeley, IIT, IIM, ISB and other reputed universities in India and abroad. Apart from regular full-time faculty, our visiting faculty comprises corporate leaders who augment the learning with their practical experience. Passionate about what they do, the teachers of all MBA modules are deeply involved in teaching, research, and consultancy, and they are teachers by choice ",
    },

    {
      id: 2,
      title: "Chemistry",
      body: "Shoolini MBA curriculum is based on inputs from industry, alumni and academia. The first four quadmesters cater to the understanding of the fundamental concepts in business management, communications, research, analytics and legal aspects of the business. Students undergo a compulsory two-month summer internship after completion of the first year. In their second year -- quadmester 5 onwards -- students select their major and a minor specialisation. The specialisation choices available to the students are marketing, finance, human resource management, digital, biotechnology, pharmaceutical and healthcare management, rural management, international business and analytics. The course curriculum is dynamic in nature and continuously updated to incorporate the latest developments in the field. Overall, the Shoolini MBA curriculum focuses on knowledge of concepts in business management, development of practical skills for success in the real world and development of responsible business leaders.",
    },

    {
      id: 3,
      title: "Computer Science",
      body: "Shoolini MBA graduates have a world of opportunities available to them. Our meticulously designed placement process ensures each student gets a great career opportunity in leading Indian and global corporates. Where few students get a pre-placement offer in their summer internship, others participate in Placement Week. During the Placement season, students have the option to choose jobs that offer packages of more than Rs 8 lakh per annum. Shoolini MBA graduates have been continuously getting absorbed into the public sector. Our alumni have established start-ups in India, Australia, the Middle East, New Zealand and the US. Students have also been extremely successful in corporate leadership positions and others have joined professional NGOs to contribute to society. Our students have also joined reputed institutions of higher learning for their Doctoral studies, while some have opted out of campus placements and joined their family establishments to give them a more professional outlook.         ",
    },

    {
      id: 4,
      title: "Creative Writing",
      body: "Students of Shoolini University regularly interact with experts from industry through guest lectures, workshops and seminars to get updated on contemporary concepts in business management. Our skill enhancement program SPRINT offers an excellent platform for hands-on workshops with corporates. Each course understanding is augmented with a masterclass by subject matter experts from the industry for deeper and comprehensive understanding. The students also undergo compulsory two months summer internship where they are mentored by leaders in the corporate sector. Students collaborate to solve live problems of the business world by undertaking research projects and participate in consultancy projects led by the faculty.         ",
    },

    {
      id: 5,
      title: "Economics",
      body: "After completing this program, students have a wide range of job opportunities in the commercial sectors, multinational companies and organisations at the global level.         ",
    },

    {
      id: 6,
      title: "Enterpreneurship ",
      body: "Experts and academicians from the field believe that the best management education is experienced in a residential programme. Hence, the MBA programme is 100% residential for 24*7 learning. By spending two years on the campus, students can gain a lifetime of experience. The live-in facility offers intensive learning to MBA students, who mostly join after some experience or even a bachelor’s degree.    ",
    },

    {
      id: 7,
      title: "Enviromental Science ",
      body: "Experts and academicians from the field believe that the best management education is experienced in a residential programme. Hence, the MBA programme is 100% residential for 24*7 learning. By spending two years on the campus, students can gain a lifetime of experience. The live-in facility offers intensive learning to MBA students, who mostly join after some experience or even a bachelor’s degree.    ",
    },

    {
      id: 8,
      title: "History ",
      body: "Experts and academicians from the field believe that the best management education is experienced in a residential programme. Hence, the MBA programme is 100% residential for 24*7 learning. By spending two years on the campus, students can gain a lifetime of experience. The live-in facility offers intensive learning to MBA students, who mostly join after some experience or even a bachelor’s degree.    ",
    },
  ];

  // Used to toggle Modal on and off
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  // React.useCallback.
  const toggleModal = React.useCallback(
    (key) => () => {
      const data = posts.find((post) => post.id === key);
      setModalData(data);
      setIsOpen(true);
    },
    []
  );

  useEffect(() => {}, [isOpen]);

  return (
    <>
      {posts.map((post) => (
        <div className="col-md-3" key={post.id}>
          <div class="card">
            <div class="content">
              <div class="imgBx">
                <Image
                  src="/assets/images/highlights.JPG"
                  alt="Hero Banner"
                  className="mg-responsive w-100"
                  width={255}
                  height={160}
                />
              </div>
              <div class="contentBx title" onClick={toggleModal(post.id)}>
                <h3> {post.title} </h3>
              </div>
            </div>

            <ul class="sci">
              <li>
                <span onClick={toggleModal(post.id)} to="/">
                  Read More
                </span>
              </li>
            </ul>
          </div>
          {/* <Modal isOpen={isOpen} key={post.id} appariaHideApp={false}>
            <button className="close-modal" onClick={toggleModalclose(post.id)}>
              <img src="assets/img/svg/cancel.svg" alt="close icon" />
            </button>

            <div className="row">
              <div className="col-md-6">
                <div className="pageOne">
                  <h3 className="title">{post.title}</h3>
                  <p className="body">{post.body}</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="pageTwo">
                  <h3 className="title">{post.title}</h3>
                  <p className="body">{post.body}</p>
                </div>
              </div>
            </div>
          </Modal> */}
        </div>
      ))}
      <Modal isOpen={isOpen} appariaHideApp={false}>
        <button className="close-modal" onClick={() => setIsOpen(false)}>
          <img src="assets/img/svg/cancel.svg" alt="close icon" />
        </button>

        <div className="row">
          <div className="col-md-6">
            <div className="pageOne">
              <h3 className="title">{modalData.title}</h3>
              <p className="body">{modalData.body}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="pageTwo">
              <h3 className="title">{modalData.title}</h3>
              <p className="body">{modalData.body}</p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Minorcourses;
