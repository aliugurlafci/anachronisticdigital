import React from 'react';

export const Conditions = ({ config }) => {
    return (
        <section className="section conditions-section">
            <div className="row">
                <div
                    className="col-md-12 col-xs-12 col-lg-12 header-text"
                    style={{ marginTop: 40 }}>
                    <p>{config.header}</p>
                </div>
            </div>
            <div className="row l-size">
                {
                    config.items.map((value) => {
                        return (
                            <div className="col-md-6 col-lg-3 conditions-items white fade-in" key={"condition-" + value.key}>
                                <div className="conditions-icon-left red">
                                    <i className={value.icon}></i>
                                </div>
                                <h4>{value.name}</h4>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
}