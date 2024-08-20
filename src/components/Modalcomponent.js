import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleShow();
    }, 10000); // 10000 milliseconds = 10 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
           
        </Modal.Header>
        <Modal.Body>
           <a href="#" target="_blank">  <img className="w-100" src="https://shooliniuniversity.com/media/1716785079-50-off-apps-2024.jpeg" /> </a>
        </Modal.Body>
     
      </Modal>
    </>
  );
};

export default ModalComponent;