import React, { useState } from 'react';
import { ProjectItem, Navbars, Footer } from '../components/index';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Projects({ menu, config, footer }) {
    const [projects, setProjects] = useState(config.items);

    const onSearchChange = (event) => {
        if (event.target.value === null || event.target.value === "") {
            setProjects(config.items);
        }
        else {
            let search = [];
            config.items.forEach(item => {
                const lower = item.header.toLowerCase().trim();
                if (lower.includes(event.target.value.toLowerCase().trim())) {
                    search.push(item);
                }
            });
            setProjects(search);
        }
    }
    return (
        <section className="projects">
            <Navbars config={menu} />
            <div className='projects-page'>
                <Row xs={1} md={1} sm={1} lg={1} className="news-top" style={{ position: 'relative', zIndex: 25 }}>
                    <Col className="header-text">
                        <p style={{ color: 'white' }}>Projects</p>
                    </Col>
                </Row>
                <ProjectItem projects={projects} onSearchChange={onSearchChange} />
            </div>
            <Footer config={footer} />
        </section>
    );
}
