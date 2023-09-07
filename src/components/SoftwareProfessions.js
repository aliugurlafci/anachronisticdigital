import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { DeveloperApi } from '../api/Api';
import Spinner from 'react-bootstrap/Spinner';
import { toast } from 'react-toastify';
import { Undecode } from './Cryptology';

export const SoftwareProfessions = ({ config }) => {
    const [onSbmt, setOnSbmt] = useState(false);

    const sendRequest = async (header) => {
        setOnSbmt(true);
        const decoded = JSON.parse(sessionStorage.getItem("user"));
        const user = JSON.parse(Undecode(decoded));

        const data = {
            "name": user.name,
            "email": user.email,
            "connection_key": "1231-2131-1f33-fga2",
            "header": "Inform me about crypto solution name => " + header
        }
        const response = await DeveloperApi(data);

        if (response.status === 200) {
            setOnSbmt(false);
            toast.success("We will be send email soon");
        }
        else {
            setOnSbmt(false);
            toast.error("If you encounter this error multiple times already.Please contact the support");
        }
    }
    return (
        <>
            <div className="header-text solutions-header">
                <p>{config.header}</p>
            </div>

            <Row xs={1} md={3} sm={2} lg={4} className="g-4 center" style={{ position: 'relative', zIndex: 25, marginTop: 150, marginBottom: 110 }}>

                {
                    config.items.map((value, idx) => (
                        <Col key={"profession-of-" + idx}>
                            <Card className='bx-shadow'>
                                <Card.Img variant="top" src={value.image} className="news-card-image" loading="lazy" alt="Haberler" style={{ height: 200 }} />
                                <Card.Body>
                                    <Card.Title>{value.header}</Card.Title>
                                    <Card.Text>{value.subHeader}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="card-button flex">
                                        <button className="btn submit-btn" onClick={() => sendRequest(value.header)} disabled={onSbmt}>{onSbmt ? <Spinner animation="border" /> : "Contact"}</button>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </>
    );
}