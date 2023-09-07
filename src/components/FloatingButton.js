import React, { useEffect } from 'react';

export const FloatingButton = ({ height }) => {
    const handleClickToTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        if (height > 150) {
            document.getElementsByClassName("floating_button")[0].classList.remove("display");
        }
        else {
            document.getElementsByClassName("floating_button")[0].classList.add("display");
        }
    }, [height]);
    return (
        <section className='floating_button display'>
            <div className='icon_container'>
                <button onClick={() => handleClickToTop()} ><i className='fas fa-arrow-up' /></button>
            </div>
        </section>
    );
}
