import React from 'react';
import Modal from 'react-bootstrap/Modal';
// import ErrorHandler from '../ErrorHandler';

const ModalDMS = ({
  show,
  hideModal,
  title,
  modalSize,
  secondModal,
  children,
  error,
  deleteError,
}) => {
  const size = modalSize || 'lg';
  return (
    <Modal
      show={show}
      onHide={hideModal}
      size={size}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={secondModal && 'secondModal'}
    >
      <Modal.Header closeButton>
        <Modal.Body>
          <h5 className="title">{title}</h5>
          {children}
        </Modal.Body>
      </Modal.Header>
    </Modal>
  );
};

export default ModalDMS;
