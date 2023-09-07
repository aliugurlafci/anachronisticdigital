import React from 'react';

export const AboutUsDescriptions = ({ config }) => {
    return (
        <section id='au' className='section about-us-description' style={{marginTop:100}}>
            <div className="row">
                <div className="col-md-6 col-xs-12 col-lg-6 line">
                    <p>{config.header}</p>
                </div>
                <div className="col-md-6 col-xs-12 col-lg-6 line sub-header fade-in">
                    <h5>{config.subHeader}</h5>
                </div>
            </div>
            <div className='row descriptions'>
                {
                    config.items.map((value, index) => {
                        return (
                            <div className='col-md-6 col-xs-12 col-lg-6 fade-in' key={"aboutus" + index}>
                                <div className="about-us-item">
                                    <p>{value.header}</p>
                                    <p>{value.subHeader}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
}