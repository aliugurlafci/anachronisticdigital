import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { PopupIconCollectionAdd } from './Popup';
import { UpdateIconList } from '../api/Api';
import { toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';

export const IconSet = ({ config }) => {
    const [list, setList] = useState([...config.items]);
    const [show, setShow] = useState(false);
    const [onSbmt, setOnSbmt] = useState(false);

    const handleRemove = (key) => {
        setList(list.filter(val => val.key !== key));
    }
    const handleSave = async () => {
        setOnSbmt(true);
        const data = {
            "connection_key": "1231-2131-1f33-fga2",
            "link": config.link,
            "items": list
        }

        const response = await UpdateIconList(data);
        window.scrollTo(0, 0);
        if (response.status === 200) {
            toast.success("Changes saved !");
            setOnSbmt(false);
        }
        else {
            toast.error("Something went wrong !");
            setOnSbmt(false);
        }
    }

    return (
        <Row>
            <Col>
                <div style={{ width: '100%', textAlign: 'center', marginBottom: 20 }}>
                    <a href={config.link} rel="noreferrer" target="_blank" alt="icon-library-fontawesome">Visit and learn more about icons here</a>
                </div>
                <Table striped bordered hover responsive variant='dark' size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Icon</th>
                            <th>Icon Class</th>
                            <th>App Id</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((value, index) => {
                                return (
                                    <tr className='animated fadeIn' key={"icon-tableset-of-" + index}>
                                        <td>{value.key}</td>
                                        <td>
                                            <i className={value.icon + " center"} style={{ width: 35, height: 35 }} />
                                        </td>
                                        <td>{value.icon}</td>
                                        <td>{value.id}</td>
                                        <td>
                                            <button className="outline-reset table-btn danger bx-shadow" onClick={() => handleRemove(value.key)}>Remove</button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </Table>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <button className="outline-reset add-btn btn-primary bx-shadow center" onClick={() => setShow(true)}>Add New Subdlist Item</button>
                    <button className="outline-reset add-btn success bx-shadow center" disabled={onSbmt} onClick={() => handleSave()}>{onSbmt ? <Spinner animation="border" /> : "Update Changes"}</button>
                </div>
            </Col>
            {
                show ? <PopupIconCollectionAdd
                    array={list}
                    setArray={setList}
                    update={show}
                    setUpdate={setShow} /> : <></>
            }
        </Row>
    );
}