import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { NavDropdown } from 'react-bootstrap';

export const Footer = ({ config }) => {
    const handlePath = (path) => {
        document.location.href = process.env.PUBLIC_URL + path;
    }
    return (
        <div className='footer-container'>
            <Container fluid className="section footer-section">
                <Row xs={1} sm={3} md={6} lg={6} xl={6} className="center">
                    {
                        config.links.map((value, index) => {
                            if (value.type === "dropdown") {
                                return <Col key={index}><NavDropdown style={{ width: 50 }}
                                    title={value.name}
                                    menuVariant="dark"
                                    className='center'
                                >{
                                        value.items.map(val => {
                                            return <NavDropdown.Item key={val.key} onClick={() => handlePath(val.path)}>{val.name}</NavDropdown.Item>
                                        })
                                    }
                                </NavDropdown></Col>
                            }
                            else {
                                return <Col key={index}> <a href={value.path} className="center" style={{ marginTop: 8 }}>{value.name}</a></Col>
                            }
                        })
                    }
                    <Col>

                    </Col>
                </Row>
                <Row className="center" md={4} sm={4} xs={2} style={{ width: 300, maxWidth: '90%', marginTop: 20, marginBottom: 20 }}>
                    {
                        config.socials.map(value => {
                            return <Col key={value.key} className="center logo" style={{ width: 75, minWidth: 50 }}><a href={value.path}><i className={value.icon}></i></a></Col>
                        })
                    }
                </Row>
                <Row>
                    <Col className="center copyright">
                        <p style={{ color: 'white' }}>{config.copyrights}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}