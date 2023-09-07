import React from 'react';
import AnimatedNumbers from "react-animated-numbers";

export const SocialAccounts = ({ config }) => {

    return (
        <section className='section social-accounts' id="social-accounts">
            <div className="row">
                <div className="col-md-12 col-xs-12 col-lg-12 header-text centerx">
                    <span>{config.header}</span>
                </div>
            </div>
            <div className="row center" id="social-bubbles">
                {
                    config.items.map((value, index) => {
                        return <div className="col-md-6 col-xs-12 col-lg-2 flex-row" key={index}>
                            <div className="icon-containers">
                                <i className={value.icon}></i>
                            </div>
                            <div className="number-container" style={{ marginLeft: 10 }}>
                                <AnimatedNumbers
                                    animateToNumber={value.followerCount}
                                    includeComma
                                    fontStyle={{ fontSize: 32, color: 'white' }}
                                    configs={(_number, index) => {
                                        return { mass: 1, tension: 230 * (index + 1), friction: 140 };
                                    }}
                                ></AnimatedNumbers>
                            </div>
                        </div>
                    })
                }
            </div>
        </section>
    );
}