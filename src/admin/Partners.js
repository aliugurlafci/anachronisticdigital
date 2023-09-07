import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { toast } from 'react-toastify';
import { PopupPartnersAdd } from './Popup';
import Spinner from 'react-bootstrap/Spinner';
import { UpdatePartners } from '../api/Api';

export const Partners = ({ config }) => {
    const [header, setHeader] = useState(config.header);
    const [dArray, setDArray] = useState(config.items);
    const [onSbmt, setOnSbmt] = useState(false);
    const [show, setShow] = useState(false);

    const handleRemove = (key) => {
        setDArray(dArray.filter((val) => val.key !== key));
    }

    const handleSave = async () => {
        setOnSbmt(true);
        const data = {
            "header": header,
            "items": dArray,
            "connection_key": "1231-2131-1f33-fga2"
        };
        const response = await UpdatePartners(data);
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
                    <p className='admin-input-text'>Header</p>
                    <input type="text"
                        lang='tr-TR'
                        autoComplete='on'
                        value={header}
                        onChange={(event) => setHeader(event.target.value)}
                        placeholder={header}
                        className='admin-input outline-reset bx-shadow' />
                </Col>
                <Col sm={6} md={6} xl={6} lg={6} className="form-element flex colm">
                    <p className='admin-input-text'>Sub Menu List</p>
                    <Table striped bordered hover responsive variant='dark'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Image Url</th>
                                <th>Action</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                dArray.map(value => {
                                    return (
                                        <tr className='animated fadeIn' key={"partners-table-" + value.key}>
                                            <td>{value.key}</td>
                                            <td>
                                                <img src={value.logo} alt={"partners-" + value.key} style={{ width: 75, height: 75 }} />
                                            </td>
                                            <td>{value.logo}</td>
                                            <td>
                                                <button className="outline-reset table-btn danger bx-shadow" onClick={() => handleRemove(value.key)}>Sil</button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </Table>
                    <button className="outline-reset add-btn btn-primary bx-shadow center" onClick={() => setShow(!show)}>Add New Option</button>
                    <button className="outline-reset add-btn success bx-shadow center" disabled={onSbmt} onClick={() => handleSave()}>{onSbmt ? <Spinner animation="border" /> : "Update Changes"}</button>
                </Col>
            </Row>
            <PopupPartnersAdd array={dArray} setArray={setDArray} update={show} setUpdate={setShow} />
        </>
    );
}