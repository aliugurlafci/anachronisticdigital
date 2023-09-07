import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { PopupFenomensUpdate, PopupFenomensAdd } from './Popup';
import { toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';
import { UpdateFenomens } from '../api/Api';

export const Fenomens = ({ config }) => {
    const [header, setHeader] = useState(config.header);
    const [dArray, setDArray] = useState(config.items);
    const [selected, setSelected] = useState({ obj: undefined, index: -1 });
    const [onSbmt, setOnSbmt] = useState(false);
    const [popup, setPopup] = useState({ update: false, add: false });

    const handleRemove = (key) => {
        setDArray(dArray.filter((val) => val.key !== key));
    }
    const renderTooltipMessage = (props, message) => (
        <Tooltip id="button-tooltip" {...props}>
            {message}
        </Tooltip>
    );
    const handleUpdate = (index) => {
        setPopup({ update: true, add: false });
        setSelected({ obj: dArray[index], index: index });
    }
    const handleSave = async () => {
        setOnSbmt(true);
        const data = {
            "header": header,
            "items": dArray,
            "connection_key": "1231-2131-1f33-fga2"
        }
        const response = await UpdateFenomens(data);
        window.scrollTo(0, 0);
        if (response.response === "OK") {
            toast.success({ show: !toast.show, type: "success", header: "Successfull", information: "Data successfully updated!" });
            setOnSbmt(false);
        }
        else {
            toast.error("Data couldn't updated!");
            setOnSbmt(false);
        }
    }
    return (
        <>
            <Row xs={1} sm={1} md={1} lg={1} xl={1} >
                <Col className="form-element flex colm" style={{ marginTop: 120 }}>
                    <p className='admin-input-text'>Fenomens Header</p>
                    <input type="text"
                        lang='tr-TR'
                        autoComplete='on'
                        value={header}
                        onChange={(event) => setHeader(event.target.value)}
                        placeholder={header}
                        className='admin-input outline-reset bx-shadow' />
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} className="form-element flex-rw">
                    <p className='admin-input-text flex'>Sub Menu List</p>
                    <Table striped bordered hover responsive variant='dark' style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Fenomen Image</th>
                                <th>Fenomen Image Url</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Follower</th>
                                <th>Followed</th>
                                <th>Social Medias</th>
                                <th>Button Text</th>
                                <th>Action</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                dArray.map((value, index) => {
                                    return (
                                        <tr className='animated fadeIn' key={"fenomen-" + index}>
                                            <td>{value.key}</td>
                                            <td>
                                                <img src={value.image} className="table-img bx-shadow" alt={"image of " + value.name} />
                                            </td>
                                            <td>{value.image}</td>
                                            <td>{value.name}</td>
                                            <td>{value.description}</td>
                                            <td>{value.follower}</td>
                                            <td>{value.followed}</td>
                                            <td>
                                                {
                                                    value.items.map((val, i) => {
                                                        return (
                                                            <OverlayTrigger
                                                                placement="left"
                                                                flip
                                                                key={"icon-of-" + i}
                                                                delay={{ show: 250, hide: 400 }}
                                                                overlay={props => renderTooltipMessage(props, val.link)}>
                                                                <div className='center' style={{ fontSize: 25, color: 'GrayText' }}>
                                                                    <i className={val.icon} />
                                                                </div>
                                                            </OverlayTrigger>
                                                        );
                                                    })
                                                }
                                            </td>
                                            <td>{value.button}</td>
                                            <td>
                                                <button className="outline-reset table-btn info bx-shadow" onClick={() => handleUpdate(index)}>Update</button>
                                                <button className="outline-reset table-btn danger bx-shadow" onClick={() => handleRemove(value.key)}>Sil</button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </Table>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <button className="outline-reset add-btn btn-primary bx-shadow center" onClick={() => setPopup({ update: popup.update, add: !popup.add })}>Add New Option</button>
                        <button className="outline-reset add-btn success bx-shadow center" disabled={onSbmt} onClick={() => handleSave()}>{onSbmt ? <Spinner animation="border" /> : "Update Changes"}</button>
                    </div>
                </Col>
            </Row>
            {
                popup.update ? <PopupFenomensUpdate array={dArray} setArray={setDArray} update={popup.update} setUpdate={setPopup} obj={selected.obj} i={selected.index} /> : <></>
            }
            {
                popup.add ? <PopupFenomensAdd array={dArray} setArray={setDArray} update={popup.add} setUpdate={setPopup} /> : <></>
            }
        </>
    );
}