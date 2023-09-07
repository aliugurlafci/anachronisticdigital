import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { toast } from 'react-toastify';
import { LoadUserList, RemoveUser } from '../api/Api';


export const Users = () => {
    const [users, setUsers] = useState([]);

    const handleDecline = async (id) => {
        const data = {
            "connection_key": "1231-2131-1f33-fga2",
            "id": id
        }
        const response = await RemoveUser(data);
        if (response.status === 200) {
            setUsers([...response.list]);
            toast.success("User removed from system !");
        }
        else {
            toast.error("Internal server error");
        }
    }
    const checkServer = async () => {
        const data = await LoadUserList({ "connection_key": "1231-2131-1f33-fga2" });
        if (data.status === 200) {
            setUsers([...data.list]);
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
                            <th>User Profile Image</th>
                            <th>Profession</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Registered Time</th>
                            <th>User Unique Key</th>
                            <th>User Reference Key</th>
                            <th>User Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((value, index) => {
                                return (
                                    <tr className='animated fadeIn' key={"icon-tableset-of-" + index}>
                                        <td>{value.id}</td>
                                        <td>
                                            <img src={value.user_image} className="table-img bx-shadow" alt={"image of " + value.name} />
                                        </td>
                                        <td>{value.profession}</td>
                                        <td>{value.name}</td>
                                        <td>{value.email}</td>
                                        <td>{makeStars(value.password)}</td>
                                        <td>{value.rg_time}</td>
                                        <td>{value.user_key}</td>
                                        <td>{value.reference_key}</td>
                                        <td style={{ color: value.user_role === 'user' ? '#fc6a03' : '#1dad48' }}>{value.user_role}</td>
                                        <td>
                                            <button className="outline-reset table-btn danger bx-shadow" onClick={() => handleDecline(value.id)}>Remove</button>
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