import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { toast } from 'react-toastify';
import { UpdatePricingCards } from '../api/Api';
import Spinner from 'react-bootstrap/Spinner';
import {
    PopupPricingCardAdd,
    PopupPricingCardUpdate,
    PopupPricingCardAddSubItem,
    PopupPricingCardUpdateSubItem
} from './Popup';

export const FenomenPricing = ({ config }) => {
    const [header, setHeader] = useState(config.header);
    const [dArray, setDArray] = useState(config.items);
    const [subArray, setSubArray] = useState({ items: [], parent: -1 });
    const [onSbmt, setOnSbmt] = useState(false);
    const [update, setUpdate] = useState({ show: false, index: -1 });
    const [add, setAdd] = useState(false);
    const [addSubItem, setAddSubItem] = useState(false);
    const [updateSubItem, setUpdateSubItem] = useState({ show: false, target: -1 });

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
    const handleRemoveSubItem = (index, key) => {

        const arr = Array.from(dArray);
        const target = arr[index].items;
        const filtered = target.filter(val => val.key !== key);

        if (subArray.parent === index) {
            arr[index].items = filtered;
            setDArray(arr);
            setSubArray({ items: arr[index].items, parent: index });
        }
        else {
            arr[index].items = filtered;
            setDArray(arr);
        }
    }

    const handleSave = async () => {
        setOnSbmt(true);
        const data = {
            "header": header,
            "items": dArray,
            "connection_key": "1231-2131-1f33-fga2"
        }
        const response = await UpdatePricingCards(data);
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
        <>
            <Row>
                <Col sm={6} md={6} xl={6} lg={6} className="form-element flex colm">
                    <p className='admin-input-text flex'>Packet Header</p>
                    <input type="text"
                        lang='tr-TR'
                        autoComplete='on'
                        value={header}
                        onChange={(event) => setHeader(event.target.value)}
                        placeholder={header}
                        className='admin-input outline-reset bx-shadow' />
                </Col>
                <Col sm={6} md={6} xl={6} lg={6} className="form-element ">
                    <p className='admin-input-text flex'>Sub Menu List</p>
                    <Table striped bordered hover responsive variant='dark'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Promotion</th>
                                <th>Icon</th>
                                <th>Packet Name</th>
                                <th>Button Text</th>
                                <th>Packet Conditions</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dArray.map(value => {
                                    let aLeng = value.items !== undefined ? value.items.length : 0;
                                    return (
                                        <tr className='animated fadeIn' key={"packet-table-" + value.key}>
                                            <td>{value.key}</td>
                                            <td>{value.promotion}</td>
                                            <td>
                                                <i className={value.icon + " center"} style={{ width: 35, height: 35, color: '#fc6a03' }} />
                                            </td>
                                            <td>{value.packet}</td>
                                            <td>{value.button}</td>
                                            <td onClick={() => setSubArray({ items: value.items, parent: (value.key - 1) })}>
                                                <OverlayTrigger
                                                    key={"overlaytrigger-of-" + (value.key + 1)}
                                                    placement="left"
                                                    delay={{ show: 250, hide: 400 }}
                                                    overlay={(props) => renderTooltipMessage(props, "Click if you want to edit")}
                                                >
                                                    <p>{aLeng} Rule ...</p>
                                                </OverlayTrigger>
                                            </td>
                                            <td>
                                                <button className="outline-reset table-btn success bx-shadow" onClick={() => setUpdate({ show: true, index: value.key })} >Update</button>
                                                <button className="outline-reset table-btn danger bx-shadow" onClick={() => handleRemove(value.key)}>Sil</button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </Table>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 125 }}>
                        <button className="outline-reset add-btn btn-primary bx-shadow center" onClick={() => setAdd(!add)}>Add New Option</button>
                    </div>
                    {
                        subArray.items.length !== 0 ? <Table striped bordered hover responsive variant='dark' size="sm">
                            <thead>
                                <tr>
                                    <th>
                                        <strong style={{ color: '#fc6a03', backgroundColor: 'transparent', textAlign: 'center' }}>{dArray.find(val => val.items === subArray.items).packet}'s sublist</strong>
                                    </th>
                                    <th>Icon</th>
                                    <th>Rule Name</th>
                                    <th>Action
                                        <button
                                            className="outline-reset table-btn bx-shadow"
                                            onClick={() => setSubArray({ items: [], parent: -1 })}
                                            style={{ width: 50, marginLeft: 20 }}>X</button></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    subArray.items.map((value, index) => {
                                        return (
                                            <tr className='animated fadeIn' key={"packet-items-table-" + index} >
                                                <td>{value.key}</td>
                                                <td>
                                                    <i className={value.icon + " center"} style={{ width: 35, height: 35, color: '#fc6a03' }} />
                                                </td>
                                                <td>
                                                    <OverlayTrigger
                                                        key={"overlaytrigger-of-" + (value.key + 1)}
                                                        placement="left"
                                                        delay={{ show: 250, hide: 400 }}
                                                        overlay={(props) => renderTooltipMessage(props, value.name)}
                                                    >
                                                        <p>{trimText(value.name)}</p>
                                                    </OverlayTrigger>
                                                </td>
                                                <td>
                                                    <button className="outline-reset table-btn success bx-shadow" style={{ width: 60, marginRight: 8 }} onClick={() => setUpdateSubItem({ show: true, target: value.key })}>Update</button>
                                                    <button className="outline-reset table-btn danger bx-shadow" style={{ width: 60 }} onClick={() => handleRemoveSubItem(subArray.parent, value.key)}>Sil</button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </Table> : <Table striped bordered hover responsive variant='dark' size="sm">
                            <thead>
                                <tr>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>No Record</td>
                                </tr>
                            </tbody>
                        </Table>
                    }
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <button className="outline-reset add-btn btn-primary bx-shadow center" onClick={() => setAddSubItem(!addSubItem)} disabled={subArray.parent > -1 ? false : true}>Add New Subdlist Item</button>
                        <button className="outline-reset add-btn success bx-shadow center" disabled={onSbmt} onClick={() => handleSave()}>{onSbmt ? <Spinner animation="border" /> : "Update Changes"}</button>
                    </div>
                </Col>
            </Row>
            {
                add ? <PopupPricingCardAdd
                    array={dArray}
                    setArray={setDArray}
                    update={add}
                    setUpdate={setAdd} /> : <></>
            }
            {
                update.show ? <PopupPricingCardUpdate
                    array={dArray}
                    setArray={setDArray}
                    update={update.show}
                    setUpdate={setUpdate}
                    i={update.index} /> : <></>
            }
            {
                addSubItem ? <PopupPricingCardAddSubItem
                    update={addSubItem}
                    setUpdate={setAddSubItem}
                    array={dArray}
                    i={subArray.parent}
                    setArray={setDArray} /> : <></>
            }
            {
                updateSubItem.show ? <PopupPricingCardUpdateSubItem
                    array={dArray} setArray={setDArray}
                    update={updateSubItem.show}
                    setUpdate={setUpdateSubItem}
                    i={subArray.parent}
                    target={updateSubItem.target} /> : <></>
            }
        </>
    );
}
