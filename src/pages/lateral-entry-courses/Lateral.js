import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Image from "next/legacy/image";
import Styless from './style/style';
import Posts from '../../data/lateral/lateral-courses.json'
import Slider from "react-slick";
import Link from 'next/link'

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

const Lateral = () => {


    
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
                        <div className="col-md-4" key={post.id}>
                            <div className="card">
                                <Link href={post.link} className="content">
                                    
                                    <div className="contentBx title">
                                        <h3> {post.title} </h3>
                                    </div>
                                </Link>
                                </div>

                                </div>  
                    ))}
        
             </div>
               
            </Styless>
        </>
    );
};

export default Lateral;
