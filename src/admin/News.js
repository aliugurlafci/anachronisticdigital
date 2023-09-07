import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { PopupNewsAdd, PopupNewsUpdate } from './Popup';
import { toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';
import { UpdateNews } from '../api/Api';

export const News = ({ config }) => {
    const [dArray, setDArray] = useState(config.items);
    const [onSbmt, setOnSbmt] = useState(false);
    const [show, setShow] = useState(false);
    const [update, setUpdate] = useState({ show: false, id: -1 });

    const handleRemove = (key) => {
        setDArray(dArray.filter((val) => val.key !== key));
    }
    const handleUpdate = (key) => {
        setUpdate({ show: true, id: key - 1 });
    }
    const handleSave = async () => {
        setOnSbmt(true);
        const data = {
            "items": dArray,
            "connection_key": "1231-2131-1f33-fga2"
        }
        const response = await UpdateNews(data);
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
                                <th>Title</th>
                                <th>Description</th>
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
                                                <img src={value.image} className="table-img bx-shadow" alt={"image of " + value.header} />
                                            </td>
                                            <td>{value.header}</td>
                                            <td>{value.subHeader}</td>
                                            <td>
                                                <button className="outline-reset table-btn info bx-shadow" onClick={() => handleUpdate(value.key)}>Update</button>
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
            {
                show ? <PopupNewsAdd array={dArray} setArray={setDArray} update={show} setUpdate={setShow} /> : <></>
            }
            {
                update.show ? <PopupNewsUpdate array={dArray} setArray={setDArray} update={update.show} setUpdate={setUpdate} index={update.id} /> : <></>
            }
        </>
    );
}
