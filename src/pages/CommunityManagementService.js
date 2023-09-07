import React, { useState, useEffect } from 'react';
import { UpdateUserLog } from '../api/Api';
import loader from '../assets/preloader.webp';
import { ServiceIntro, CommunityManagementList, Conditions, Footer, Navbars, Undecode } from '../components/index';
import video from '../assets/topluluk.mp4';

export function CommunityManagementService({ config }) {
    const [toast, setToast] = useState({ show: false, type: "", header: "", information: "" });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const login = sessionStorage.getItem("user");
        if (login === null) {
            sessionStorage.setItem("path", JSON.stringify("/community-management"));
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
                target: process.env.PUBLIC_URL + "/community-management"
            });
            UpdateUserLog(mi);
            setLoading(false);
        }
    }, []);
    if (!loading) {
        return (
            <section className='section community-management-service' id="community-management">
                <Navbars config={config.opening.menu} />
                <ServiceIntro header="Community Management Services" selector="v-intro intro" video={video} />
                <Conditions config={config.conditions} />
                <CommunityManagementList config={config.communitymanagement} setToast={setToast} toast={toast} />
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