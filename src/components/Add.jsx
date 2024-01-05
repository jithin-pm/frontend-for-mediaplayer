import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoStatus}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [video, setVideo] = useState({
        id: "",
        caption: "",
        url: "",
        embededLink: ""
    });

    const embededVideoLink = (e) => {
        const { value } = e.target
        const videoLink = `https://www.youtube.com/embed/${value.slice(-11)}`;
        setVideo({ ...video, embededLink: videoLink })
    }


    const handleUpload = async () => {
        const { id, caption, url, embededLink } = video
        if (!id || !caption || !url || !embededLink) {
            toast.warning("Please fill the form completely");
        }
        else {
            const response = await uploadVideo(video);
            if (response.status == 201) {
                toast.success(`Uploaded Successfully ${response.data.caption}`);
                setUploadVideoStatus(response.data)
                handleClose();
            }
            else {
                toast.error("Something went wrong !");
            }
        }
    }

    return (
        <>
            <div className='d-flex align-items-center'>
                <h5>Upload new video </h5>
                <button onClick={handleShow} className='btn'><i class="fa-solid fa-cloud-arrow-up fs-5 ms-3"></i></button>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <i class="fa-solid fa-film me-3 text-warning"></i>
                        Upload video
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please fill up the form</p>
                    <Form className='border border-secondary p-3 rounded'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Enter video ID " onChange={(e) => setVideo({ ...video, id: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Enter video Caption " onChange={(e) => setVideo({ ...video, caption: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Enter video Image URL " onChange={(e) => setVideo({ ...video, url: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Enter video Youtube link " onChange={(e) => embededVideoLink(e)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="warning" onClick={handleUpload}>Upload</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                theme='colored'
            />
        </>
    )
}

export default Add