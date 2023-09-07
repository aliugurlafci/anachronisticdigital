import React from 'react';

export const Members = ({ config }) => {

    return (
        <section className="section members_area">
            <div className="row">
                <div className='col-md-12 col-xs-12 col-lg-12 header-text'>
                    <p>{config.header}</p>
                </div>
            </div>
            <div className="row pd">
                {
                    config.items.map(value => (
                        <div className='col-md-6 col-xs-3 col-lg-3 member-items' key={value.key + "-mmbr"} id={value.id}>
                            <div className="hover-overlay-container">
                                <img className="overlay-image" loading='lazy' src={value.image} alt={value.name} />
                                <div className='personal-inform'>
                                    <p>{value.name}</p>
                                    <p>{value.position}</p>
                                </div>
                                <div className="overlay-btn-container">
                                    <p>{value.description}</p>
                                    <div className="social-info">
                                        {value.socials.map((v, index) => {
                                            return <a href={v.socialMediaLink} key={index} rel="noreferrer" target="_blank" alt={value.name + "-twitter"} ><i className={v.socialMediaIcon}></i></a>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }</div>
        </section>
    );
}

/**
 *
 */