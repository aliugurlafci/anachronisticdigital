import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { LoginQueue, AcceptQueue, DeclineQueue, UserReference } from '../api/Api';
import Spinner from 'react-bootstrap/Spinner';


export const RegisterQueue = () => {
    const [list, setList] = useState([]);
    const [role, setRole] = useState('user');
    const [target, setTarget] = useState('Loading');

    const getUserReference = async (key) => {
        const data = await UserReference({
            "connection_key": "1231-2131-1f33-fga2",
            "user_key": key
        });
        setTimeout(() => {
            data.target === null || data.target === undefined || data.target === "" ? setTarget("THIS REFERENCE CODE UNUSED !") : setTarget(data.target);
        }, 1000);
    }
    const renderTooltipMessage = (props, message) => {
        getUserReference(message);
        return (
            <Tooltip id="button-tooltip" {...props}>
                {target}
                {target === "Loading" ? <Spinner animation="border" variant="success" size='sm' /> : <></>}
            </Tooltip>
        );
    }

    const handleDecline = async (id) => {
        const data = {
            "connection_key": "1231-2131-1f33-fga2",
            "id": id
        }
        const response = await DeclineQueue(data);
        if (response.status === 200) {
            setList([...response.list]);
            toast.success("Register process rejected!");
        }
        else {
            toast.error("Internal server error");
        }
    }
    const handleAccept = async (id) => {

        const data = {
            "connection_key": "1231-2131-1f33-fga2",
            "role": role,
            "id": id
        }
        const response = await AcceptQueue(data);
        if (response.status === 200) {
            setList([...response.list]);
            toast.success("Register process compleated");
        }
        else {
            toast.error("Internal server error");
        }

    }
    const checkServer = async () => {
        const data = await LoginQueue({ "connection_key": "1231-2131-1f33-fga2" });
        if (data.status === 200) {
            setList([...data.user]);
        }
    }
    const makeStars = (val) => {
        let stars = "";

        for (let i = 0; i < val.length; i++) {
            stars += "*";
        }
        return stars;
    }
    useEffect(() => {
        checkServer();
        const interval = setInterval(() => checkServer(), 20000);
        return () => clearInterval(interval);
    }, []);
    return (
        <Row>
            <Col>
                <Table striped bordered hover responsive variant='dark' size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Profession</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Registered Time</th>
                            <th>User Unique Key</th>
                            <th>User Reference Key</th>
                            <th>User Role</th>
                            <th>Registration Process</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((value, index) => {
                                return (
                                    <tr className='animated fadeIn' key={"icon-tableset-of-" + index}>
                                        <td>{value.id}</td>
                                        <td>{value.profession}</td>
                                        <td>{value.name}</td>
                                        <td>{value.email}</td>
                                        <td>{makeStars(value.password)}</td>
                                        <td>{value.rg_time}</td>
                                        <td>{value.user_key}</td>
                                        <td>
                                            <OverlayTrigger
                                                placement="left"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={(props) => renderTooltipMessage(props, value.reference_key)}>
                                                <p style={{ color: 'white' }}>{value.reference_key}</p>
                                            </OverlayTrigger>
                                        </td>
                                        <td>
                                            <Form.Select
                                                className='admin-input outline-reset bx-shadow darken'
                                                onChange={event => setRole(event.target.value)}
                                                defaultValue={role}
                                                required>
                                                <option value="user">User</option>
                                                <option value="admin">Administator</option>
                                            </Form.Select>
                                        </td>
                                        <td style={{ color: value.account_state === 0 ? '#fc6a03' : '#1dad48' }}>Waiting for accepting</td>
                                        <td>
                                            <button className="outline-reset table-btn success bx-shadow" onClick={() => handleAccept(value.id)}>Accept</button>
                                            <button className="outline-reset table-btn danger bx-shadow" onClick={() => handleDecline(value.id)}>Decline</button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
}