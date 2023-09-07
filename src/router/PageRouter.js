import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { App, CommunityManagementService, FenomenService, SoftwareService, LoginPage, JoinUs, News, Projects, Admin, Contact } from '../pages/index';
import { FloatingButton, FloatingSocials, FloatingContact, /*UserConsole*/ } from '../components/index';
import loader from '../assets/preloader.webp';
import { ToastContainer, toast } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.css';
import { SupportApi, UpdateState, GetInformation } from '../api/Api';
import Store from '../redux/Store';

export default function PageRouter() {
    const [onSbmt, setOnSbmt] = useState(false);
    const [scrollX, setScrollX] = useState(0);
    const [ready, setReady] = useState(false);
    const [show, setShow] = useState(false);
    const [option, setOption] = useState('');
    const [config, setConfig] = useState(undefined);

    Store.subscribe(() => {
        const data = Store.getState();
        setConfig(data);
    });

    useEffect(() => {
        if (config !== undefined) {
            setReady(true);
        }
    }, [config, ready]);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollX(position);
    }
    const onCloseContact = () => {
        setShow(false);
    }
    const sendRequest = async (tree) => {
        const response = await SupportApi(tree);

        if (response.status === 200) {
            setOnSbmt(false);
            toast.success("We will be send email soon");
        }
        else {
            setOnSbmt(false);
            toast.error("If you encounter this error multiple times already.Please contact the support");
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        if (sessionStorage.getItem("mi") === null) {
            GetInformation();
        }
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return ready ? <Router>
        <div className='fixed-image'></div>
        <FloatingButton height={scrollX} />
        <FloatingSocials />
        <FloatingContact setShow={setShow} />
        <Contact show={show} exit={onCloseContact} onSubmit={sendRequest} option={option} onSbmt={onSbmt} />
        <ToastContainer
            position="top-right"
            autoClose={5000}
            theme="colored"
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
        <Routes>
            <Route path="/" element={<App config={config} setOption={setOption} setShow={setShow} />}></Route>
            <Route path="/home" element={<App config={config} setOption={setOption} setShow={setShow} />}></Route>
            <Route path="/community-management" element={<CommunityManagementService config={config} />}></Route>
            <Route path="/influencers" element={<FenomenService config={config} />}> </Route>
            <Route path="/developers" element={<SoftwareService config={config} />}> </Route>
            <Route path="/login" element={<LoginPage config={config} />}></Route>
            <Route path="/news" element={<News menu={config.opening.menu} config={config} footer={config.footer} />}></Route>
            <Route path="/projects" element={<Projects config={config.projects} menu={config.opening.menu} footer={config.footer} />}></Route>
            <Route path="/work-with-us" element={<JoinUs menu={config.opening.menu} footer={config.footer} />}></Route>
            <Route path="/admin" element={<Admin config={config} />}></Route>
            <Route path="/14545551" element={<Preloader state={true} />}></Route>
            <Route path="*" element={<App config={config} setOption={setOption} setShow={setShow} />}></Route>
        </Routes>
    </Router> : <Preloader state={false} />;
}

const Preloader = ({ state }) => {
    useEffect(() => {
        if (state) {
            UpdateState({ "connection_key": "1231-2131-1f33-fga2" });
        }
    }, [state]);
    return (
        <div id="pre-loader" className='preloader'>
            <img src={loader} style={{ borderRadius: 200, padding: 50 }} alt='preloader' />
        </div>
    );
}