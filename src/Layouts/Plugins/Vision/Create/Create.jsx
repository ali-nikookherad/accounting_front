import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { TimePicker } from '../../../../Components';

export function Create(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <i className="text-sm me-2 cursor-pointer btn btn-outline-success" onClick={handleShow}>ساخت هدف جدید</i>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Form>
                    <Modal.Header closeButton>
                        <Modal.Title className='text-center'>ساخت هدف</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>عنوان هدف</Form.Label>
                            <Form.Control type="text" name='title' />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>عنوان خواسته</Form.Label>
                            <Form.Control type="text" name='wish_title' />
                            <Form.Text className="text-muted text-sm">
                                خواسته ی خود را که آرزوی رسیدن به آن را دارید را مشخص کنید
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>مقدار خواسته</Form.Label>
                            <Form.Control type="text" name='wish_amount' />
                            <Form.Text className="text-muted text-sm">
                                مقدار خواسته ی خود را به صورت دقیق مشخص کنید
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>عنوان بها</Form.Label>
                            <Form.Control type="text" name='prices[][title]' />
                            <Form.Text className="text-muted text-sm">
                                در ازای خواسته ای که آرزوی آن را دارید حاضر به پرداخت چه بهایی هستید؟
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>توضیح بها</Form.Label>
                            <Form.Control as="textarea" rows={3} name='prices[][description]' />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>عنوان برنامه</Form.Label>
                            <Form.Control type="text" name='plans[][title]' />
                            <Form.Text className="text-muted text-sm">
                                برنامه ای را مشخص کنید که شما را به سمت هدفتان پیش ببرد و همین الان آن را شروع کنید
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>توضیح برنامه</Form.Label>
                            <Form.Control as="textarea" rows={3} name='plans[][description]' />
                        </Form.Group>

                        <TimePicker />

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="من متعهد می شوم که به این هدفم برسم" />
                        </Form.Group>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='btn btn-outline-danger' variant="white" onClick={handleClose}>
                            انصراف
                        </Button>
                        <Button variant="primary" type="submit">
                            ثبت هدف
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>

    );
}
