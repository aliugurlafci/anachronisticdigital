import React from 'react';
import image from '../assets/wwd.webp';

export const WhyChooseUs = ({ config }) => {
    return (
        <section className="section why-choose-us">
            <div className='wcu'>
                <div className="row wcu-content">
                    <div className="col-md-5 fade-in">
                        <div className="wcu-image center">
                            <img src={image} className="bx-shadow" loading="lazy" alt="wcu-imag" />
                        </div>
                    </div>
                    <div className="col-md-7 fade-in-right">
                        <div className="wcu-texts flex">
                            <div className='header-text'>
                                <h4>{config.title}</h4>
                            </div>
                            <span className='wcu-span'>{config.header}</span>
                            <span className='wcu-span'>{config.subHeader}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}