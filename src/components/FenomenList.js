import React, { useState } from 'react';
import { SingleFenomenApi } from '../api/Api';
import Spinner from 'react-bootstrap/Spinner';
import { toast } from 'react-toastify';
import { Undecode } from './Cryptology';

export const FenomenList = ({ config }) => {
    const [onSbmt, setOnSbmt] = useState(false);

    const sendRequest = async (name) => {
        setOnSbmt(true);
        const decoded = JSON.parse(sessionStorage.getItem("user"));
        const user = JSON.parse(Undecode(decoded));
        
        const data = {
            "name": user.name,
            "email": user.email,
            "connection_key": "1231-2131-1f33-fga2",
            "header": 'I want to work with fenomen ' + name
        }
        const response = await SingleFenomenApi(data);
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
        <div className="fenomen-list">
            <div className="row center">
                <div className="col-xs-12 col-md-12 col-lg-10 header-text">
                    <span className='center'>{config.header}</span>
                </div>
            </div>
            <div className='row m-size'>
                {
                    config.items.map(v => {
                        return (
                            <div className="col-sm-6 col-md-6 col-lg-3 col-xs-8 fade-in" key={"fenomen-" + v.key}>
                                <div className='fenomen-card bx-shadow flex-rw p-anim fade-in'>
                                    <div className="fenomen-profile flex">
                                        <img src={v.image} alt={"image-of-" + v.name} className='bx-shadow' loading='lazy' />
                                    </div>
                                    <div className="fenomen-description flex-rw">
                                        <div className="fenomen-name-section center">
                                            <span>{v.name}</span>
                                        </div>
                                        <div className="fenomen-description-section">
                                            <span>{v.description}</span>
                                        </div>
                                    </div>
                                    <div className="fenomen-followers flex">
                                        <div className="follower-box flex">
                                            <span>Follewers</span>
                                            <span>{v.follower}</span>
                                        </div>
                                        <div className="follower-box  flex">
                                            <span>Followed</span>
                                            <span>{v.followed}</span>
                                        </div>
                                    </div>
                                    <div className="fenomen-social center row">
                                        {
                                            v.items.map(value => {
                                                return (
                                                    <div className="icon-bar flex" key={"fenomen-social-of-" + value.key}>
                                                        <a href={value.link} ><i className={`${value.icon} bx-shadow`} style={{ borderRadius: 100, padding: 5, width: 40, height: 40 }}></i></a>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                    <div className="fenomen-request flex">
                                        <button className='outline-reset bx-shadow' onClick={() => sendRequest(v.name)} disabled={onSbmt}>{onSbmt ? <Spinner animation="border" /> : v.button}</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}