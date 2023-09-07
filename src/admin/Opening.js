import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { UpdateOpening } from '../api/Api';
import { toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';

export const Opening = ({ config }) => {
    const [first, setFirst] = useState(config.text[0]);
    const [second, setSecond] = useState(config.text[1]);
    const [toggle, setToggle] = useState(config.toggle.name);
    const [onSbmt, setOnSbmt] = useState(false);

    const handleSave = async () => {
        setOnSbmt(true);
        const list = {
            "first": first,
            "second": second,
            "toggle": toggle,
            "connection_key": "1231-2131-1f33-fga2"
        }
        const data = await UpdateOpening(list);
        window.scrollTo(0, 0);
        if (data.response === "OK") {
            toast.success("Data successfully updated!");
            setOnSbmt(false);
        }
        else {
            toast.error("Data couldn't updated!");
            setOnSbmt(false);
        }
    }

    return (
        <Container className="opening-admin">
            <Row>
                <Col sm={6} md={6} xl={6} lg={6} className="form-element flex colm">
                    <p className='admin-input-text'>First Line </p>
                    <input type="text"
                        lang='tr-TR'
                        autoComplete='on'
                        value={first}
                        onChange={(event) => setFirst(event.target.value)}
                        className='admin-input outline-reset bx-shadow' />
                </Col>
                <Col sm={6} md={6} xl={6} lg={6} className="form-element flex colm">
                    <p className='admin-input-text'>Second Line </p>
                    <textarea
                        value={second}
                        autoComplete='on'
                        autoCorrect='on'
                        autoCapitalize='on'
                        onChange={(event) => setSecond(event.target.value)}
                        className='admin-textarea outline-reset bx-shadow' />
                </Col>
                <Col sm={6} md={6} xl={6} lg={6} className="form-element flex colm">
                    <p className='admin-input-text'>Toggle Line </p>
                    <input type="text"
                        autoComplete='on'
                        value={toggle}
                        onChange={(event) => setToggle(event.target.value)}
                        className='admin-input outline-reset bx-shadow' />
                </Col>
                <div className="add-new-member flex">
                    <button className="outline-reset add-btn success bx-shadow center" onClick={() => handleSave()} disabled={onSbmt}>{onSbmt ? <Spinner animation="border" /> : "Update Changes"}</button>
                </div>
            </Row>
        </Container>
    );
}