import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { PopupConditionsAdd } from './Popup';
import { toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';
import { UpdateConditions } from '../api/Api';

export const Conditions = ({ config }) => {
    const [header, setHeader] = useState(config.header);
    const [dArray, setDArray] = useState(config.items);
    const [onSbmt, setOnSbmt] = useState(false);
    const [show, setShow] = useState(false);

    const renderTooltipMessage = (props, message) => (
        <Tooltip id="button-tooltip" {...props}>
            {message}
        </Tooltip>
    );
    const trimText = (text) => {
        return text.length > 35 ? text.substring(0, 35) + "..." : text;
    }
    const handleRemove = (key) => {
        setDArray(dArray.filter((val) => val.key !== key));
    }

    const handleSave = async () => {
        setOnSbmt(true);
        const data = {
            "header": header,
            "items": dArray,
            "connection_key": "1231-2131-1f33-fga2"
        }
        const response = await UpdateConditions(data);
        window.scrollTo(0, 0);
        if (response.response === "OK") {
            toast.succes("Data successfully updated!");
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
                    <p className='admin-input-text'>Conditions Header</p>
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
                                <th>Condition Icon</th>
                                <th>Condition Description</th>
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
                                                <i className={value.icon + " center"} style={{ width: 35, height: 35, color: '#fc6a03' }} />
                                            </td>
                                            <td>
                                                <OverlayTrigger
                                                    placement="left"
                                                    delay={{ show: 250, hide: 400 }}
                                                    overlay={(props) => renderTooltipMessage(props, value.name)}
                                                >
                                                    <p>{trimText(value.name)}</p>
                                                </OverlayTrigger>
                                            </td>
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
            <PopupConditionsAdd array={dArray} setArray={setDArray} update={show} setUpdate={setShow} />
        </>
    );
}