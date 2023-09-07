import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Spinner from 'react-bootstrap/Spinner';
import { UpdateWhatWeDo } from '../api/Api';
import { toast } from 'react-toastify';

export const WhatWeDo = ({ config }) => {
    const [showModal, setShowModal] = useState({ show: false, showw: false });
    const [work, setWork] = useState({ id: -1, intent: '' });
    const [dArray, setDArray] = useState(config.items);
    const [header, setHeader] = useState(config.header)
    const [subHeader, setSubHeader] = useState(config.subHeader);
    const [onSbmt, setOnSbmt] = useState(false);

    useEffect(() => {
        if (work.intent === "delete") {
            setDArray(dArray.filter((i) => i.key !== work.id));
            setWork({ id: -1, intent: "" });
        }
    }, [dArray, work.id, work.intent]);

    const onEditRecord = (index) => {
        setShowModal({ show: false, showw: true });
        setWork({ id: index, intent: "edit" });
    }
    const handleUpdate = async () => {
        setOnSbmt(true);
        const data = {
            "header": header,
            "subHeader": subHeader,
            "items": dArray,
            "connection_key": "1231-2131-1f33-fga2"
        }
        const response = await UpdateWhatWeDo(data);
        window.scrollTo(0, 0);
        if (response.response === "OK") {
            toast.success("Data successfully updated!");
            setOnSbmt(false);
        }
        else {
            toast.error("Data couldn't updated!");
            setOnSbmt(false);
        }
    }
    return (
        <div>
            <Col sm={6} md={6} xl={6} lg={6} className="form-element flex colm">
                <p className='admin-input-text'>Header</p>
                <input type="text"
                    lang='tr-TR'
                    autoComplete='on'
                    value={header}
                    onChange={(event) => setHeader(event.target.value)}
                    placeholder={config.header}
                    className='admin-input outline-reset bx-shadow' />
            </Col>
            <Col sm={6} md={6} xl={6} lg={6} className="form-element flex colm">
                <p className='admin-input-text'>Sub Header</p>
                <textarea type="text"
                    lang='tr-TR'
                    autoComplete='on'
                    value={subHeader}
                    onChange={(event) => setSubHeader(event.target.value)}
                    placeholder={config.subHeader}
                    className='admin-textarea outline-reset bx-shadow' />
            </Col>
            <Col sm={6} md={6} xl={6} lg={6} className="form-element flex colm">
                <p className='admin-input-text'>Sub Menu List</p>
                <Table striped bordered hover responsive variant='dark'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Icon</th>
                            <th>Header</th>
                            <th>SubHeader</th>
                            <th>Type</th>
                            <th>Link</th>
                            <th>Action</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            dArray.map(value => {
                                return (
                                    <tr className='animated fadeIn' key={"whatwedo-table-" + value.key}>
                                        <td>{value.key}</td>
                                        <td>{value.icon}</td>
                                        <td>{value.header}</td>
                                        <td>{value.subHeader}</td>
                                        <td>{value.type === 'page' ? "Via page" : "Via email"}</td>
                                        <td>{value.link}</td>
                                        <td>
                                            <button className="outline-reset table-btn info bx-shadow" onClick={() => onEditRecord(value.key)}>Update</button>
                                            <button className="outline-reset table-btn danger bx-shadow" onClick={() => setWork({ id: value.key, intent: 'delete' })}>Remove</button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </Table>
                <button className="outline-reset add-btn btn-primary bx-shadow center" onClick={() => setShowModal({ show: true, showw: false })}>Add New Option</button>
                <button className="outline-reset add-btn success bx-shadow center" onClick={() => handleUpdate()} disabled={onSbmt}>{onSbmt ? <Spinner animation="border" /> : "Update Changes"}</button>
            </Col>
            <PopupModalOne show={showModal.show} setShow={setShowModal} length={dArray.length} item={dArray} setItem={setDArray} />
            <PopupModalTwo show={showModal.showw} setShow={setShowModal} item={dArray} setItem={setDArray} work={work} setWork={setWork} />
        </div>
    );
}
const PopupModalOne = ({ show, setShow, length, item, setItem }) => {
    const [icon, setIcon] = useState("");
    const [header, setHeader] = useState("");
    const [type, setType] = useState("");
    const [link, setLink] = useState("");
    const [subHeader, setSubHeader] = useState("");

    const clearInputs = () => {
        setIcon("");
        setHeader("");
        setSubHeader("");
        setType("");
        setLink("");
    }
    const onClose = () => {
        setShow({ show: false, showw: false });
        clearInputs();
    }
    const handleSubmit = () => {
        const data = {
            key: length + 1,
            icon: icon,
            header: header,
            subHeader: subHeader,
            type: type,
            link: link
        }
        setItem([...item, data]);
        onClose();
    }
    return (
        <Modal
            animation
            centered
            size="md"
            show={show}
            fullscreen="sm-down"
            contentClassName='member-modal-body'
            onHide={() => setShow({ show: !show, showw: false })}>
            <ModalHeader closeButton closeVariant='white'>
                <ModalTitle className='modal-header'>Add Record</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Row className='flex'>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Icon Name</p>
                        <input type="text"
                            value={icon}
                            onChange={(event) => setIcon(event.target.value)}
                            className='admin-input outline-reset bx-shadow' />
                    </Col>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Header</p>
                        <input type="text"
                            value={header}
                            onChange={(event) => setHeader(event.target.value, 2)}
                            className='admin-input outline-reset bx-shadow' />
                    </Col>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Sub Header</p>
                        <textarea type="text"
                            value={subHeader}
                            onChange={(event) => setSubHeader(event.target.value)}
                            className='admin-textarea outline-reset bx-shadow' />
                    </Col>
                    <Col sm={10} className="form-element flex colm">
                        <div className="flex sp-btw" style={{ marginTop: 20 }}>
                            <Form.Check type="checkbox" label="Page Contain ?" checked={type === 'page' ? true : false} onChange={event => setType(event.target.checked ? 'page' : 'mail')} />
                        </div>
                    </Col>
                    {
                        type === 'page' ? <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Link</p>
                            <input type="text"
                                value={link}
                                onChange={(event) => setLink(event.target.value)}
                                className='admin-input outline-reset bx-shadow' />
                        </Col> : <></>
                    }
                </Row>
            </ModalBody>
            <ModalFooter className='admin-modal-footer'>
                <button className="outline-reset modal-btn danger bx-shadow" onClick={() => onClose()}>Cancel</button>
                <button className="outline-reset modal-btn success bx-shadow" onClick={() => handleSubmit()}>Save</button>
            </ModalFooter>
        </Modal>
    );
}
const PopupModalTwo = ({ show, setShow, item, setItem, work, setWork }) => {
    const [icon, setIcon] = useState("");
    const [header, setHeader] = useState("");
    const [type, setType] = useState("");
    const [link, setLink] = useState("");
    const [subHeader, setSubHeader] = useState("");

    const clearInputs = () => {
        setIcon("");
        setHeader("");
        setSubHeader("");
        setType("");
        setLink("");
    }
    const onClose = () => {
        setShow({ show: false, showw: false });
        clearInputs();
        setWork({ id: -1, intent: "" });
    }
    const handleSubmit = () => {
        const data = {
            key: work.id,
            icon: icon,
            header: header,
            type: type,
            link: link,
            subHeader: subHeader
        }
        const temp = Array.from(item);
        temp[work.id - 1] = data;
        setItem(temp);
        onClose();
    }
    useEffect(() => {
        setIcon(work.intent === 'edit' ? item[work.id - 1].icon : "");
        setHeader(work.intent === 'edit' ? item[work.id - 1].header : "");
        setSubHeader(work.intent === 'edit' ? item[work.id - 1].subHeader : "");
        setType(work.intent === 'edit' ? item[work.id - 1].type : "");
        setLink(work.intent === 'edit' ? item[work.id - 1].link : "");
    }, [item, work.id, work.intent])

    return (
        <Modal
            animation
            centered
            size="md"
            show={show}
            fullscreen="sm-down"
            contentClassName='member-modal-body'
            onHide={() => setShow(!show)}>
            <ModalHeader closeButton closeVariant='white'>
                <ModalTitle className='modal-header'>Update Selected</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Row className='flex'>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Icon Name</p>
                        <input type="text"
                            value={icon}
                            onChange={(event) => setIcon(event.target.value)}
                            className='admin-input outline-reset bx-shadow' />
                    </Col>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Header</p>
                        <input type="text"
                            value={header}
                            onChange={(event) => setHeader(event.target.value)}
                            className='admin-input outline-reset bx-shadow' />
                    </Col>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Sub Header</p>
                        <textarea type="text"
                            value={subHeader}
                            onChange={(event) => setSubHeader(event.target.value)}
                            className='admin-textarea outline-reset bx-shadow' />
                    </Col>
                    <Col sm={10} className="form-element flex colm">
                        <div className="flex sp-btw" style={{ marginTop: 20 }}>
                            <Form.Check type="checkbox" label="Page Contain ?" checked={type === 'page' ? true : false} onChange={event => setType(event.target.checked ? 'page' : 'mail')} />
                        </div>
                    </Col>
                    {
                        type === 'page' ? <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Link</p>
                            <input type="text"
                                value={link}
                                onChange={(event) => setLink(event.target.value)}
                                className='admin-input outline-reset bx-shadow' />
                        </Col> : <></>
                    }
                </Row>
            </ModalBody>
            <ModalFooter className='admin-modal-footer'>
                <button className="outline-reset modal-btn danger bx-shadow" onClick={() => onClose()}>Cancel</button>
                <button className="outline-reset modal-btn success bx-shadow" onClick={() => handleSubmit()}>Save</button>
            </ModalFooter>
        </Modal>
    );
}