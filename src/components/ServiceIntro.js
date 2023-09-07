import React from 'react';

export const ServiceIntro = ({ header, selector, video }) => {
    return (
        <div className={selector}>
            <video autoPlay={true} muted playsInline loop id="service-video">
                <source src={video} type="video/mp4"></source>
            </video>
            <p>{header}</p>
        </div>
    );
}