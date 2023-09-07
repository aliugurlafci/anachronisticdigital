import React, { useEffect, useState } from 'react';
import {
    Opening,
    WhatWeDo,
    AboutUs,
    Partners,
    SocialAccounts,
    WhyChooseUs,
    Conditions,
    Fenomens,
    Developer,
    CommunityManagement,
    IconSet,
    FenomenPricing,
    Members,
    RegisterQueue,
    News,
    Users,
    Projects,
    SpecialOffers,
    SoftwareProfessions
} from '../admin/index';
import loader from '../assets/preloader.webp';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TabPane from 'react-bootstrap/TabPane';
import TabContent from 'react-bootstrap/TabContent';
import { Undecode } from '../components/index';
import { UpdateUserLog } from '../api/Api';

export function Admin({ config }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = sessionStorage.getItem("user");
        if (user === null) {
            sessionStorage.setItem("path", JSON.stringify("/admin"));
            document.location.href = process.env.PUBLIC_URL + "/login";
            setLoading(false);
        }
        else {
            const u = JSON.parse(user);
            const requested = JSON.parse(Undecode(u));
            const decodedMi = JSON.parse(sessionStorage.getItem("mi"));
            const requestedMi = JSON.parse(Undecode(decodedMi));

            const mi = JSON.stringify({
                ipv4: requestedMi.ipv4,
                country: requestedMi.country,
                latitude: requestedMi.latitude,
                longitude: requestedMi.longitude,
                user_key: requested.user_key,
                target: requested.user_role !== 'admin' ? process.env.PUBLIC_URL + "/login" : process.env.PUBLIC_URL + "/admin"
            });
            UpdateUserLog(mi);

            if (requested.user_role !== 'admin') {
                sessionStorage.setItem("path", JSON.stringify("/admin"));
                document.location.href = process.env.PUBLIC_URL + "/login";
            }
            else {
                setLoading(false);
            }
        }
    }, []);
    if (loading) {
        return (
            <div id="pre-loader" className='preloader'>
                <img src={loader} style={{ borderRadius: 200, padding: 50 }} alt='preloader' />
            </div>
        );
    }
    else {
        return (
            <div className='admin-section' style={{ position: 'relative', zIndex: 25 }}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="opening">
                    <Row sm={12} md={12} lg={12}>
                        <Col sm={2}>
                            <Nav variant="pills" className="flex-column" style={{ backgroundColor: 'transparent', color: 'white' }}>
                                <Nav.Item>
                                    <Nav.Link eventKey="opening">Opening Settings</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="whatwedo">What We Do Settings</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="aboutus">About Us Settings</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="partners">Partners Settings</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="socialaccounts">Social Accounts Settings</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="whychooseus">Why Choose Us Settings</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="conditions">Conditions Settings</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fenomens">Fenomens Settings</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fenomenpricing">Fenomens Packet Settings</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="members"> Member Settings</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="developer"> Developer Settings</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="professions">Crypto Solution Setting</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="community"> Community Settings</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="users"> Users Settings</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="iconlibrary"> Icon Library</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="loginqueue">Register Records</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="news">News Settings</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="projects">Project Settings</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="specialoffers">Special Offers Settings</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={10}>
                            <TabContent>
                                <TabPane eventKey="opening">
                                    <Opening config={config.opening} />
                                </TabPane>
                                <TabPane eventKey="whatwedo">
                                    <WhatWeDo config={config.whatwedo} />
                                </TabPane>
                                <TabPane eventKey="aboutus">
                                    <AboutUs config={config.aboutus} />
                                </TabPane>
                                <TabPane eventKey="partners">
                                    <Partners config={config.partners} />
                                </TabPane>
                                <TabPane eventKey="socialaccounts">
                                    <SocialAccounts config={config.socialaccounts} />
                                </TabPane>
                                <TabPane eventKey="whychooseus">
                                    <WhyChooseUs config={config.whychooseus} />
                                </TabPane>
                                <TabPane eventKey="conditions">
                                    <Conditions config={config.conditions} />
                                </TabPane>
                                <TabPane eventKey="fenomens">
                                    <Fenomens config={config.fenomens} />
                                </TabPane>
                                <TabPane eventKey="fenomenpricing">
                                    <FenomenPricing config={config.pricingcards} />
                                </TabPane>
                                <TabPane eventKey="members">
                                    <Members config={config.members.items} />
                                </TabPane>
                                <TabPane eventKey="developer">
                                    <Developer config={config.developers} />
                                </TabPane>
                                <TabPane eventKey="professions">
                                    <SoftwareProfessions config={config.softwareprofessions} />
                                </TabPane>
                                <TabPane eventKey="community">
                                    <CommunityManagement config={config.communitymanagement} />
                                </TabPane>
                                <TabPane eventKey="users">
                                    <Users />
                                </TabPane>
                                <TabPane eventKey="iconlibrary">
                                    <IconSet config={config.iconset} />
                                </TabPane>
                                <TabPane eventKey="loginqueue">
                                    <RegisterQueue />
                                </TabPane>
                                <TabPane eventKey="news">
                                    <News config={config.news} />
                                </TabPane>
                                <TabPane eventKey="projects">
                                    <Projects config={config.projects} />
                                </TabPane>
                                <TabPane eventKey="specialoffers">
                                    <SpecialOffers config={config.promotions} />
                                </TabPane>
                            </TabContent>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        );
    }
}