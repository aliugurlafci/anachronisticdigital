import React, { useState } from 'react';
import { WorkFenomenPackage } from '../api/Api';
import Spinner from 'react-bootstrap/Spinner';
import { toast } from 'react-toastify';
import Col from 'react-bootstrap/Col';
import { Undecode } from './Cryptology';

export const PricingCards = ({ config }) => {
    const [onSbmt, setOnSbmt] = useState(false);

    const sendRequest = async (header) => {
        setOnSbmt(true);
        const decoded = JSON.parse(sessionStorage.getItem("user"));
        const user = JSON.parse(Undecode(decoded));

        const data = {
            "name": user.name,
            "email": user.email,
            "subject": "About this influencer package name => " + header,
            "message": "Contact me soon!",
            "connection_key": "1231-2131-1f33-fga2"
        }
        const response = await WorkFenomenPackage(data);

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
        <div className="packets">
            <div className="row">
                <div className="col-md-12 col-xs-12 col-lg-12 header-text">
                    <p>{config.header}</p>
                </div>
            </div>
            <div className="row center c-size">
                {
                    config.items.map(value => {
                        return (
                            <div className="col-md-6 col-xs-6 col-lg-3 col-sm-6 fade-in" key={"pricing-card-" + value.key}>
                                <div className='packet-cards shine bx-shadow animated p-anim'>

                                    <div className="special-offers flex bx-shadow">
                                        <span>{value.promotion}</span>
                                    </div>
                                    <div className="center card-icon green">
                                        <i className={value.icon}></i>
                                    </div>
                                    <h5>{value.packet}</h5>
                                    {
                                        value.items.map(v => {
                                            return (
                                                <div className="card-includes flex" key={"card-options-of" + v.key}>
                                                    <div className="list-icon green">
                                                        <i className={v.icon}></i>
                                                    </div>
                                                    <span>{v.name}</span>
                                                </div>
                                            );
                                        })
                                    }
                                    <Col className="card-button flex">
                                        <button className="btn submit-btn" onClick={() => sendRequest(value.packet)} disabled={onSbmt}>{onSbmt ? <Spinner animation="border" /> : value.button}</button>
                                    </Col>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}