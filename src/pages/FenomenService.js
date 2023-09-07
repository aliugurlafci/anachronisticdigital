import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PricingCards, ServiceIntro, FenomenList, Conditions, Footer, Navbars, SearchInput, Undecode } from '../components/index';
import { MultipleFenomenApi, UpdateUserLog } from '../api/Api';
import Modal from 'react-bootstrap/Modal';
import { Carousel } from 'react-responsive-carousel';
import ModalBody from 'react-bootstrap/ModalBody';
import video from '../assets/reklamcılık.mp4';
import { toast } from 'react-toastify';
import loader from '../assets/preloader.webp';

export const FenomenService = ({ config }) => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true);

    const partialStringBuffer = (str) => {
        let stringBuffer = "";
        str.map(value => stringBuffer += `${value.name} ~`);
        return stringBuffer.substring(0, stringBuffer.length - 1);
    }
    const showToast = async (items) => {
        const decoded = JSON.parse(sessionStorage.getItem("user"));
        const requested = JSON.parse(Undecode(decoded));

        const response = await MultipleFenomenApi({
            "name": requested.name,
            "email": requested.email,
            "subject": 'I want to work with multiple fenomens below !',
            "message": partialStringBuffer(items),
            "connection_key": "1231-2131-1f33-fga2"
        });
        if (response.status === 200) {
            toast.success("We will be send email soon");
        }
        else {
            toast.error("If you encounter this error multiple times already.Please contact the support");
        }
    }
    useEffect(() => {
        const login = sessionStorage.getItem("user");
        if (login === null) {
            sessionStorage.setItem("path", JSON.stringify("/influencers"));
            window.location.href = process.env.PUBLIC_URL + "/login";
        }
        else {
            const decodedUser = JSON.parse(sessionStorage.getItem("user"));
            const decodedMi = JSON.parse(sessionStorage.getItem("mi"));
            const requestedUser = JSON.parse(Undecode(decodedUser));
            const requestedMi = JSON.parse(Undecode(decodedMi));

            const mi = JSON.stringify({
                ipv4: requestedMi.ipv4,
                country: requestedMi.country,
                latitude: requestedMi.latitude,
                longitude: requestedMi.longitude,
                user_key: requestedUser.user_key,
                connection_key: "1231-2131-1f33-fga2",
                target: process.env.PUBLIC_URL + "/influencers"
            });
            UpdateUserLog(mi);
            setLoading(false);
        }
    }, []);
    if (!loading) {
        return (
            <section className='section phenomena-service' id="phenomena-service">
                <Modal
                    animation
                    centered
                    size="md"
                    show={show}
                    contentClassName='member-modal-body'
                    onHide={() => setShow(!show)}>
                    <ModalBody style={{ margin: 0, padding: 0 }}>
                        <button className='outline-reset success center' onClick={() => setShow(!show)}
                            style={{ position: 'absolute', top: 5, right: 5, padding: 10, borderRadius: 100, width: window.innerWidth * 0.02, height: window.innerWidth * 0.02, fontSize: 20, zIndex: 200 }}>X</button>
                        <Carousel
                            autoPlay
                            infiniteLoop
                            showIndicators
                            showStatus={false}
                            showThumbs={false}>
                            {
                                config.promotions.images.map((value, index) => {
                                    return (
                                        <div key={index}>
                                            <img src={value.image} alt="test-modal" loading='lazy'
                                                style={{ width: '100%', height: '100%', padding: 0, margin: 0 }} />
                                        </div>
                                    );
                                })
                            }
                        </Carousel>
                    </ModalBody>
                </Modal>
                <Navbars config={config.opening.menu} />
                <ServiceIntro header="Influencers Services" selector="v-intro intro" video={video} />
                <Conditions config={config.conditions} />
                <FenomenList config={config.fenomens} />
                <PricingCards config={config.pricingcards} />
                <SearchInput config={config.fenomens} notify={showToast} />
                <Footer config={config.footer} />
            </section>
        );
    }
    else {
        return (
            <div id="pre-loader" className='preloader'>
                <img src={loader} style={{ borderRadius: 200, padding: 50 }} alt='preloader' />
            </div>
        );
    }
}