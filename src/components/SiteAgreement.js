import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const SiteAgreement = ({ rule, show, setShow, ruleIndex, setRules }) => {
    const [i, setI] = useState(ruleIndex);

    const acceptRules = () => {
        setShow(!show);
        setRules(true);
    }
    const declineRules = () => {
        setShow(!show);
        setRules(false);
    }

    return (
        <Modal
            animation
            centered
            size="lg"
            show={show}
            fullscreen="md-down"
            contentClassName='member-modal-body'
            onHide={() => declineRules()}>
            <ModalBody style={{ color: 'white' }}>
                <Row>
                    <Col sm={10} className="form-element flex colm">
                        <div className="icon-content">
                            <i className={rule.items[i].icon}></i>
                        </div>
                        {
                            rule.items[i].items.map((value, index) => {
                                return (
                                    <div key={index}>
                                        <h3 className="center" style={{ marginBottom: 40, marginTop: 40, color: '#1dad48', textAlign: 'center' }}>{value.header}</h3>
                                        <p style={{ textAlign: 'justify' }}>{value.subHeader}</p>
                                    </div>
                                );
                            })
                        }
                        <div className="agreement-links">
                            <button type='button' onClick={() => setI(0)} className='policy-link outline-reset'>Kullanım Koşulları</button>
                            -<button type='button' onClick={() => setI(1)} className='policy-link outline-reset'>Çerez Politikası</button>
                            -<button type='button' onClick={() => setI(2)} className='policy-link outline-reset'>Gizlilik Politikası</button>
                        </div>

                    </Col>
                </Row>
            </ModalBody>
            <ModalFooter className='admin-modal-footer'>
                <Row>
                    <div className="agreement-accept center">
                        <button type="button" className="accept-btn btn margin-5" onClick={() => acceptRules()}><i className={rule.acceptButtonIcon}></i>{rule.acceptButtonText}</button>
                        <button type="button" className="accept-btn btn b-red" onClick={() => declineRules()}><i className={rule.declineButtonIcon}></i>{rule.declineButtonText}</button>
                    </div>
                </Row>
            </ModalFooter>
        </Modal>
    );
}
