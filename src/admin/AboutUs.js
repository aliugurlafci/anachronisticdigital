import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';
import { UpdateAboutUs } from '../api/Api';

export const AboutUs = ({ config }) => {
    const [dArray, setDArray] = useState(config.items);
    const [header, setHeader] = useState(config.header);
    const [subHeader, setSubHeader] = useState(config.subHeader);
    const [mission, setMission] = useState({ header: dArray[0].header, subHeader: dArray[0].subHeader });
    const [vision, setVision] = useState({ header: dArray[1].header, subHeader: dArray[1].subHeader });
    const [onSbmt, setOnSbmt] = useState(false);

    const handleSave = async () => {
        setOnSbmt(true);
        const data = {
            "header": header,
            "subHeader": subHeader,
            "connection_key": "1231-2131-1f33-fga2",
            "items": [
                {
                    "key": 1,
                    "header": mission.header,
                    "subHeader": mission.subHeader
                },
                {
                    "key": 2,
                    "header": vision.header,
                    "subHeader": vision.subHeader
                },
            ]
        }
        const response = await UpdateAboutUs(data);
        window.scrollTo(0, 0);
        if (response.response === "OK") {
            toast.success("Data successfully updated!");
            setOnSbmt(false);
        }
        else {
            toast.error("Data couldn't updated!");
            setOnSbmt(false);
        }
    }
    return (
        <div>
            <Row>
                <Col sm={6} md={6} xl={6} lg={6} className="form-element flex colm">
                    <p className='admin-input-text'>Header</p>
                    <input type="text"
                        lang='tr-TR'
                        autoComplete='on'
                        value={header}
                        onChange={(event) => setHeader(event.target.value)}
                        placeholder={header}
                        className='admin-input outline-reset bx-shadow' />
                </Col>
                <Col sm={6} md={6} xl={6} lg={6} className="form-element flex colm">
                    <p className='admin-input-text'>Sub Header</p>
                    <textarea type="text"
                        lang='tr-TR'
                        autoComplete='on'
                        value={subHeader}
                        onChange={(event) => setSubHeader(event.target.value)}
                        placeholder={subHeader}
                        className='admin-textarea outline-reset bx-shadow' />
                </Col>
                <Col sm={6} md={6} xl={6} lg={6} className="form-element flex colm">
                    <p className='admin-input-text'>Mission Header</p>
                    <input type="text"
                        lang='tr-TR'
                        autoComplete='on'
                        value={mission.header}
                        placeholder={mission.header}
                        onChange={(event) => setMission({ header: event.target.value, subHeader: mission.subHeader })}
                        className='admin-input outline-reset bx-shadow' />
                </Col>
                <Col sm={6} md={6} xl={6} lg={6} className="form-element flex colm">
                    <p className='admin-input-text'>Mission Sub Header</p>
                    <textarea type="text"
                        lang='tr-TR'
                        autoComplete='on'
                        value={mission.subHeader}
                        placeholder={mission.subHeader}
                        onChange={(event) => setMission({ header: mission.header, subHeader: event.target.value })}
                        className='admin-textarea outline-reset bx-shadow' />
                </Col>
                <Col sm={6} md={6} xl={6} lg={6} className="form-element flex colm">
                    <p className='admin-input-text'>Vision Header</p>
                    <input type="text"
                        lang='tr-TR'
                        autoComplete='on'
                        value={vision.header}
                        placeholder={vision.header}
                        onChange={(event) => setVision({ header: event.target.value, subHeader: vision.subHeader })}
                        className='admin-input outline-reset bx-shadow' />
                </Col>
                <Col sm={6} md={6} xl={6} lg={6} className="form-element flex colm">
                    <p className='admin-input-text'>Vision Sub Header</p>
                    <textarea type="text"
                        lang='tr-TR'
                        autoComplete='on'
                        value={vision.subHeader}
                        placeholder={vision.subHeader}
                        onChange={(event) => setVision({ header: vision.header, subHeader: event.target.value })}
                        className='admin-textarea outline-reset bx-shadow' />
                </Col>
                <div className="add-new-member flex">
                    <button className="outline-reset add-btn success bx-shadow center" onClick={() => handleSave()} disabled={onSbmt}>{onSbmt ? <Spinner animation="border" /> : "Update Changes"}</button>
                </div>
            </Row>
        </div>
    );
}