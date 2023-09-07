import React from 'react';
import { Navbars } from './Navbars';
import video from '../assets/splash-video.mp4';

export const Opening = ({ config }) => {
    return (
        <section className='opening' id="opening">
            <Navbars config={config.menu} />
            <video autoPlay={true} muted playsInline loop id="myVideo">
                <source src={video} type="video/mp4"></source>
            </video>
            <div className='row content flex'>
                <div className='col-md-12 col-lg-12 col-xs-12 content-bdy'>
                    <p>{config.text[0]}</p>
                    <p className="p1">{config.text[1]}</p>
                </div>
            </div>

            <div className='row multi-link'>
                <div className="col-md-12 col-xs-12 col-lg-12">
                    <div className='learn_more flex'>
                        <a href='#au' className='animated bounce infinite lrn flex'>
                            <span>{config.toggle.name}<br /></span>
                            <i className={config.toggle.icon}></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
} 