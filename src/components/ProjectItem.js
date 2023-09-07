import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export const ProjectItem = ({ projects, onSearchChange }) => {
    const [project, setProject] = useState([...projects]);
    useEffect(() => {
        let arr = project.reverse();
        setProject(arr);
    }, [project]);
    return (
        <>
            <Row xs={1} md={1} sm={1} lg={1} className="news-top" style={{ position: 'relative', zIndex: 25 }}>
                <Form.Control
                    className='bx-shadow'
                    type="search"
                    aria-describedby="passwordHelpBlock"
                    placeholder="Search..."
                    onChange={event => onSearchChange(event)}
                    style={{ width: '24%', minWidth: 150, maxWidth: "100%", height: 50, marginLeft: 12, borderRadius: 100 }}
                />
            </Row>
            <Row xs={1} sm={2} md={3} lg={3} xl={4} className="g-4 project-card-container">
                {
                    project.map((value, idx) => (
                        <Col key={"news-of-" + idx}>
                            <Card className='bx-shadow' key={"project-card-of" + idx}>
                                <Card.Body className='project-card bx-shadow'>
                                    <div className="flex">
                                        <img src={value.image} alt="adsaddd" className='project-image bx-shadow' />
                                    </div>
                                    <Card.Title>{value.header}</Card.Title>
                                    <Card.Text>{value.subHeader}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </>
    );
}