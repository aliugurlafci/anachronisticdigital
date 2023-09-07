import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Spinner from 'react-bootstrap/Spinner';
import { PopupUpdate, PopupAdd } from './Popup';
import { toast } from 'react-toastify';
import { UpdateMembers } from '../api/Api';

export const Members = ({ config }) => {
    const [update, setUpdate] = useState(false);
    const [add, setAdd] = useState(false);
    const [dArray, setDArray] = useState(config);
    const [selectedIndex, setSelectedIndex] = useState(false);
    const [onSbmt, setOnSbmt] = useState(false);
    const [post, setPost] = useState(false);

    const renderTooltipMessage = (props, message) => (
        <Tooltip id="button-tooltip" {...props}>
            {message}
        </Tooltip>
    );
    useEffect(() => {
        if (post) {
            sendPost();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [post]);
    const sendPost = async () => {
        const response = await UpdateMembers({ "items": dArray, "connection_key": "1231-2131-1f33-fga2" });
        window.scrollTo(0, 0);
        if (response.response === "OK") {
            setOnSbmt(false);
            toast.success("Data successfully updated!");
            setPost(false);
        }
        else {
            setOnSbmt(false);
            toast.error("Data couldn't updated!");
            setPost(false);
        }
    }
    const handleUpdate = (index) => {
        setUpdate(!update);
        console.log(index);
        setSelectedIndex(index + 1);
    }
    const trimText = (text) => {
        return text.substring(0, 35) + "...";
    }
    const handleDelete = (key) => {
        setDArray(dArray.filter((val) => val.key !== key));
    }
    const handleUpdates = async () => {
        setOnSbmt(true);
        setPost(true);
    }
    return (
        <>
            {
                update ? <PopupUpdate update={update} array={dArray} setArray={setDArray} setUpdate={setUpdate} obj={config[selectedIndex - 1]} i={selectedIndex - 1} /> : <></>
            }
            <PopupAdd update={add} array={dArray} setArray={setDArray} setUpdate={setAdd} />
            <div className="member-settings">
                <Table striped bordered hover responsive variant='dark'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Id</th>
                            <th>Position</th>
                            <th>Description</th>
                            <th>Social Medias</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dArray.map((value, index) => {
                                return (
                                    <tr key={"member" + value.key} className="animated fadeInOut">
                                        <td>{value.key}</td>
                                        <td>
                                            <img src={value.image} className="table-img bx-shadow" alt={"image of " + value.name} />
                                        </td>
                                        <td>{value.name}</td>
                                        <td>{value.id}</td>
                                        <td>{value.position}</td>
                                        <td>
                                            <OverlayTrigger
                                                placement="left"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={(props) => renderTooltipMessage(props, value.description)}
                                            >
                                                <p>{trimText(value.description)}</p>
                                            </OverlayTrigger>
                                        </td>
                                        <td>
                                            {
                                                value.socials.map(val => {
                                                    return (
                                                        <OverlayTrigger
                                                            key={"social-logo-" + val.key}
                                                            placement="left"
                                                            delay={{ show: 150, hide: 300 }}
                                                            overlay={(props) => renderTooltipMessage(props, val.socialMediaLink)}>
                                                            <div className="table-icon center">
                                                                <i className={val.socialMediaIcon}></i>
                                                            </div>
                                                        </OverlayTrigger>
                                                    )
                                                })
                                            }
                                        </td>
                                        <td>
                                            <button onClick={() => handleUpdate(index)} className="outline-reset table-btn info bx-shadow">Düzenle</button>
                                            <button className="outline-reset table-btn danger bx-shadow" onClick={() => handleDelete(value.key)}>Sil</button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </Table>
                <div className="add-new-member flex">
                    <button className="outline-reset add-btn btn-primary bx-shadow center" onClick={() => setAdd(!add)}>Add New Member</button>
                </div>
                <div className="add-new-member flex">
                    <button className="outline-reset add-btn success bx-shadow center" onClick={() => handleUpdates()} disabled={onSbmt}>{onSbmt ? <Spinner animation="border" /> : "Update Changes"}</button>
                </div>
            </div>
        </>
    );
}