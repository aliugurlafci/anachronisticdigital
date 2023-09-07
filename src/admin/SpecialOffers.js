import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { PopupSpecialOffersAdd } from './Popup';
import { toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';
import { UpdateSpecialOffers } from '../api/Api';

export const SpecialOffers = ({ config }) => {
    const [dArray, setDArray] = useState(config.images);
    const [onSbmt, setOnSbmt] = useState(false);
    const [show, setShow] = useState(false);

    const handleRemove = (key) => {
        setDArray(dArray.filter((val) => val.key !== key));
    }
    const handleSave = async () => {
        setOnSbmt(true);
        const data = {
            "items": dArray,
            "connection_key": "1231-2131-1f33-fga2"
        }
        const response = await UpdateSpecialOffers(data);
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
                    <Table striped bordered hover responsive variant='dark'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                dArray.map(value => {
                                    return (
                                        <tr className='animated fadeIn' key={"conditions-table-" + value.key}>
                                            <td>{value.key}</td>
                                            <td>
                                                <img loading='lazy' src={value.image} style={{ width: 100, height: 100, marginRight: 200 }} className="table-img bx-shadow" alt={"image of " + value.header} />
                                            </td>
                                            <td>
                                                <button className="outline-reset table-btn danger bx-shadow" onClick={() => handleRemove(value.key)}>Delete</button>
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
            {
                show ? <PopupSpecialOffersAdd array={dArray} setArray={setDArray} update={show} setUpdate={setShow} /> : <></>
            }
        </>
    );
}
