import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Image from "next/legacy/image";
import Styless from './style/style';
import Posts from '../../data/minor/minor-courses.json'
import Slider from "react-slick";


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
        width:'80%'
    },
};

const Minorcourses = () => {


    
const setting = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 3000,
  
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 2,
        },
      },
    ],
    
  }; 

    const [avds, setAdvs] = useState(Posts);
    console.log('array', avds);
    // Used to toggle Modal on and off
    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState({});
    // React.useCallback.
    const toggleModal = React.useCallback(
        (key) => () => {
            const data = Posts.find((post) => post.id === key);
            setModalData(data);
            setIsOpen(true);
        },
        []
    );
    useEffect(() => { }, [isOpen]);
    return (
        <>
            <Styless>
            <div className="row">
          
                    {Posts.map((post) => (
                        <div className="col-md-3" key={post.id}>
                            <div onClick={toggleModal(post.id)} className="card">
                                <div className="content">
                                    <div className="imgBx">
                                        <Image
                                            src={`/${post.image}`}
                                            alt="Hero Banner"
                                            className="mg-responsive w-100"
                                            width={300}
                                            height={400}
                                        />
                                    </div>
                                    <div className="contentBx title" onClick={toggleModal(post.id)}>
                                        <h3> {post.title} </h3>
                                    </div>
                                </div>
                                </div>
                                </div>  
                    ))}
        
             </div>
                <Modal  isOpen={isOpen} appariaHideApp={false} style={customStyles}>
                    <button className="close-modal" onClick={() => setIsOpen(false)}>
                        X
                    </button>
                    <div className="row">
                        <div className="col-md-6 border-0 shadowPage page">
                            <div className="pageOne">
                                <h3 className="mod-title"> Odd Semester </h3>
                                <div className="w-100">
                                    <ul>
                                    {/* {modalData.adv} */}
                                            {modalData?.odd_sem?.map((text, key) => {
                                            return <li key={key}>{text} </li>;
                                            })} 
                                        </ul>
                                </div>

                                <h3 className="mod-title"> Even Semester </h3>
                                <div className="w-100">
                                    <ul>
                                    {/* {modalData.adv} */}
                                            {modalData?.even_sem?.map((txt, key) => {
                                            return <li key={key}>{txt} </li>;
                                            })} 
                                        </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 page bg-white">
                            <div className="pageTwo">
                                <h3 className="mod-title"> The Advantages  </h3>

                                <div className="w-100">
                                    <ul>
                                    {/* {modalData.adv} */}
                                            {modalData?.adv?.map((ad, key) => {
                                            return <li key={key}>{ad} </li>;
                                            })}
                                        </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </Styless>
        </>
    );
};

export default Minorcourses;
