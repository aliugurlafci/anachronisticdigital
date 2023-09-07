import React from 'react';

export const FloatingContact = ({ setShow }) => {
    return (
        <section className='floating_contact section'>
            <div className='icon_container'>
                <button onClick={() => setShow(true)} className="outline-reset outlineness-btn" ><i className='fas fa-headset' /></button>
            </div>
        </section>
    );
}