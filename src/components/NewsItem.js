import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export const NewsItem = ({ config }) => {
    const [news, setNews] = useState([...config.items]);

    const onSearchChange = (event) => {
        if (event.target.value === null || event.target.value === "") {
            setNews(config.items);
        }
        else {
            let search = [];
            config.items.forEach(item => {
                const lower = item.header.toLowerCase().trim();
                if (lower.includes(event.target.value.toLowerCase().trim())) {
                    search.push(item);
                }
            });
            setNews(search);
        }
    }
    useEffect(() => {
        let arr = news.reverse();
        setNews(arr);
    }, [news]);
    return (
        <div className='news-view'>
            <Row xs={1} md={2} sm={1} lg={1} className="header-text">
                <p>News</p>
            </Row>
            <Row xs={1} md={1} sm={1} lg={1} className="news-top">
                <Form.Control
                    className='bx-shadow'
                    type="search"
                    aria-describedby="passwordHelpBlock"
                    placeholder="Search..."
                    onChange={event => onSearchChange(event)}
                    style={{ width: '24%', minWidth: 150, maxWidth: "100%", height: 50, marginLeft: 12, borderRadius: 100 }}
                />
            </Row>
            <Row xs={1} md={2} sm={2} lg={4} className="g-4">
                {
                    news.map((value, idx) => (
                        <Col key={"news-of-" + idx}>
                            <Card className='bx-shadow'>
                                <Card.Img variant="top" src={value.image} className="news-card-image" loading="lazy" alt="Haberler" />
                                <Card.Body>
                                    <Card.Title>{value.header}</Card.Title>
                                    <Card.Text>{value.subHeader}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
            </Row>
        </div>
    );
}