import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';
import { UpdateWhyChooseUs } from '../api/Api';

export const WhyChooseUs = ({ config }) => {
    const [title, setTitle] = useState(config.title);
    const [header, setHeader] = useState(config.header);
    const [subHeader, setSubHeader] = useState(config.subHeader);
    const [onSbmt, setOnSbmt] = useState(false);

    const handleSave = async () => {
        setOnSbmt(true);
        const data = {
            "title": title,
            "header": header,
            "subHeader": subHeader,
            "connection_key": "1231-2131-1f33-fga2"
        };
        const response = await UpdateWhyChooseUs(data);
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
        <>
            <Row>
                <Col sm={6} md={6} xl={6} lg={6} className="form-element flex colm">
                    <p className='admin-input-text'>Title</p>
                    <input type="text"
                        lang='tr-TR'
                        autoComplete='on'
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        placeholder={title}
                        className='admin-input outline-reset bx-shadow' />
                </Col>
                <Col sm={6} md={6} xl={6} lg={6} className="form-element flex colm">
                    <p className='admin-input-text'>Header</p>
                    <textarea type="text"
                        lang='tr-TR'
                        autoComplete='on'
                        value={header}
                        onChange={(event) => setHeader(event.target.value)}
                        placeholder={header}
                        className='admin-textarea outline-reset bx-shadow' />
                </Col>
                <Col sm={6} md={6} xl={6} lg={6} className="form-element flex colm">
                    <p className='admin-input-text'>Sub Header</p>
                    <textarea type="text"
                        lang='tr-TR'
                        autoComplete='on'
                        value={subHeader}
                        onChange={(event) => setSubHeader(event.target.value)}
                        placeholder={subHeader}
                        className='admin-textarea outline-reset bx-shadow' />
                </Col>
                <Col sm={6} md={6} xl={6} lg={6} className="form-element flex colm">
                    <button className="outline-reset add-btn success bx-shadow center" disabled={onSbmt} onClick={() => handleSave()}>{onSbmt ? <Spinner animation="border" /> : "Update Changes"}</button>
                </Col>
            </Row>
        </>
    );
}