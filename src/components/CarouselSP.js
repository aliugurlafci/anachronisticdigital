import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const CarouselSP = ({ config }) => {
    return (
        <section className="section carousel_sp ">
            <Row>
                <div className='col-md-12 col-xs-12 col-lg-12 header-text'>
                    <p>{config.header}</p>
                </div>
                <Row className='sp' xs={1} sm={2} md={2} lg={3} xl={4}>
                    {
                        config.items.map((value, i) => {
                            return <Col className='sp' key={"carousel" + i}>
                                <img loading='eager' src={value.logo} alt={'carousel-' + i} style={{ margin: '0 auto' }} />
                            </Col>
                        })
                    }
                </Row>
            </Row>
        </section>
    );
}