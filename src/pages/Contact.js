import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import { Undecode } from '../components/index';

export function Contact({ show, exit, onSubmit, option, onSbmt }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const sendForm = () => {
        const data = {
            "name": name,
            "email": email,
            "subject": subject,
            "detail": message,
            "connection_key": "1231-2131-1f33-fga2"
        }
        onSubmit(data);
        exit();
    }
    useEffect(() => {
        if (option !== '') {
            setSubject(option);
        }
        const user = sessionStorage.getItem("user");
        if (user !== null) {
            const u = JSON.parse(user);
            const requested = JSON.parse(Undecode(u));
            setName(requested.name);
            setEmail(requested.email);
        }
    }, [option]);
    return (
        <Modal
            animation
            centered
            size="md"
            show={show}
            fullscreen="md-down"
            contentClassName='member-modal-body'
            onHide={() => exit()}>
            <ModalHeader>
                <h2 className="center">Contact</h2>
            </ModalHeader>
            <ModalBody style={{ color: 'white' }}>
                <Row>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Name</p>
                        <input type="text"
                            value={name}
                            onChange={event => setName(event.target.value)}
                            className='admin-input outline-reset bx-shadow'
                            placeholder='Your Name'
                            required
                        />
                    </Col>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Email</p>
                        <input type="text"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            className='admin-input outline-reset bx-shadow'
                            placeholder='Your Email'
                            required
                        />
                    </Col>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Subject</p>
                        <input type="text"
                            value={subject}
                            placeholder='Subject'
                            onChange={event => setSubject(event.target.value)}
                            className='admin-input outline-reset bx-shadow'
                            required
                        />
                    </Col>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Your Message</p>
                        <textarea type="text"
                            value={message}
                            placeholder='Your Message'
                            onChange={event => setMessage(event.target.value)}
                            className='admin-textarea outline-reset bx-shadow' />
                    </Col>
                </Row>
            </ModalBody>
            <ModalFooter className='admin-modal-footer'>
                <Row>
                    <Col>
                        <div className="agreement-accept center" style={{ width: '100%' }}>
                            <button type="button" className="outline-reset modal-btn danger bx-shadow" onClick={() => exit()}>Exit</button>
                            <button type="button" className="outline-reset modal-btn success bx-shadow" onClick={() => sendForm()} disabled={onSbmt}>{onSbmt ? <Spinner animation="border" /> : "Send"}</button>
                        </div>
                    </Col>
                </Row>
            </ModalFooter>
        </Modal>
    );
}