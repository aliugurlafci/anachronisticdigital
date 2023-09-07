import React from 'react';
import logo from '../assets/logo-transparent.png';
import { NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Undecode } from './Cryptology';
import { UpdateUserLog } from '../api/Api';

export const Navbars = ({ config }) => {
    const handlePage = async (path, type) => {
        const login = sessionStorage.getItem("user");
        if (login === null) {
            if (type === "dropdown") {
                sessionStorage.setItem("path", JSON.stringify(path));
                window.location.href = process.env.PUBLIC_URL + "/login";
            }
            else {
                window.location.href = path;
            }
        }
        else {
            const decodedUser = JSON.parse(sessionStorage.getItem("user"));
            const decodedMi = JSON.parse(sessionStorage.getItem("mi"));
            const requestedUser = JSON.parse(Undecode(decodedUser));
            const requestedMi = JSON.parse(Undecode(decodedMi));

            const mi = JSON.stringify({
                ipv4: requestedMi.ipv4,
                country: requestedMi.country,
                latitude: requestedMi.latitude,
                longitude: requestedMi.longitude,
                user_key: requestedUser.user_key,
                connection_key: "1231-2131-1f33-fga2",
                target: process.env.PUBLIC_URL + path
            });
            UpdateUserLog(mi);
            window.location.href = path;
        }
    }
    return (
        <div className='navbar_section'>
            <Navbar expand="lg" variant='dark' collapseOnSelect>
                <Container fluid style={{ width: '100%', margin: '0 40px', padding: 0 }}>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            width="130"
                            height="130"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        {
                            config.items.map((value, index) => {
                                if (value.type === "dropdown") {
                                    return <Navbar.Text key={index}><NavDropdown
                                        title={value.name}
                                        menuVariant="dark">
                                        {
                                            value.items.map(val => {
                                                return <NavDropdown.Item key={val.key} onClick={() => handlePage(val.path, value.type)}>{val.name}</NavDropdown.Item>
                                            })
                                        }
                                    </NavDropdown></Navbar.Text>
                                }
                                else {
                                    return <Navbar.Text key={index}> <Nav.Link href={value.path}>{value.name}</Nav.Link></Navbar.Text>
                                }
                            })
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
