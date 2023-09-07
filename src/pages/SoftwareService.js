import React, { useEffect, useState } from 'react';
import { UpdateUserLog } from '../api/Api';
import loader from '../assets/preloader.webp';
import { ServiceIntro, DeveloperList, Conditions, Footer, Navbars, SoftwareProfessions, Undecode } from '../components/index';
import video from '../assets/tasarımcılar.mp4';

export const SoftwareService = ({ config }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const login = sessionStorage.getItem("user");
        if (login === null) {
            sessionStorage.setItem("path", JSON.stringify("/developers"));
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
                target: process.env.PUBLIC_URL + "/developers",
                connection_key: "1231-2131-1f33-fga2"
            });
            UpdateUserLog(mi);
            setLoading(false);
        }
    }, []);
    if (!loading) {
        return (
            <section className='section developer-service' id="developer-service">
                <Navbars config={config.opening.menu} />
                <ServiceIntro header="Developer Services" selector="v-intro intro" video={video} />
                <Conditions config={config.conditions} />
                <DeveloperList config={config.developers} />
                <SoftwareProfessions config={config.softwareprofessions} />
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