import React from 'react';

export const AboutUs = ({ config, setOption, setShow }) => {

    const handleOptions = async (header, type, link) => {
        if (type === 'page') {
            window.location.href = process.env.PUBLIC_URL + link;
        }
        else {
            let headerText = "I need your asistance about " + header;
            setOption(headerText);
            setShow(true);
        }
    }
    return (
        <section id='wwd' className='section what_we_do container' style={{ marginTop: -150 }}>
            <div className='section_name row'>
                <span className='m-size-text'>{config.header}<br /><br /></span>
                <span className='s-size-text'>{config.subHeader}<br /></span>
            </div>

            <div className='row line' >
                {
                    config.items.map(value => {
                        return <div className='col-md-4 col-sm-6 col-12 items col-xs-12 flex' key={value.key + "-wwd"}>
                            <div className='item_icon_container'>
                                <i className={value.icon} />
                            </div>
                            <div className='menu_content'>
                                <span>{value.header}<br /></span><br />
                                <span>{value.subHeader}</span>
                            </div>
                            <button className='outline-reset round-btn center' onClick={() => handleOptions(value.header, value.type, value.link)}>{value.type === "page" ? "Get Offer" : "Contact Us"}</button>
                        </div>
                    })
                }
            </div>
        </section>
    );
}
