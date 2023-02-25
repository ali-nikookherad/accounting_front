import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import "./InfoModal.css"

export function InfoModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <i className="material-icons text-sm me-2 cursor-pointer" onClick={handleShow}>{props.button}</i>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className='text-center'>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    {props.body}
                </Modal.Body>
                <Modal.Footer>
                    <Button className='btn btn-outline-danger' variant="white" onClick={handleClose}>
                        {props.closeButtonTitle}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


// export default InfoModal;