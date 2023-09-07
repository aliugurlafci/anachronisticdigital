import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import validator from 'validator';
import { Navbars, Footer } from '../components/index';
import image from '../assets/wwu.png';
import { toast } from 'react-toastify';
import { WorkWithUsApi } from '../api/Api';

export function JoinUs({ menu, footer }) {
    const [position, setPosition] = useState("null");
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [education, setEducation] = useState("");
    const [introduce, setIntroduce] = useState("");
    const [onSbmt, setOnSbmt] = useState(false);

    const handleSave = async () => {
        setOnSbmt(true);
        if (position !== null) {
            if (validator.isEmail(email)) {
                if (email !== "") {
                    if (education !== "") {
                        if (introduce.length < 40) {
                            const data = {
                                "position": position,
                                "email": email,
                                "name": fullName,
                                "education": education,
                                "introduce": introduce,
                                "connection_key": "1231-2131-1f33-fga2"
                            }
                            const response = await WorkWithUsApi(data);

                            if (response.status === 200) {
                                toast.success("Successfully sended");
                                setOnSbmt(false);
                            }
                            else {
                                toast.error("Internal server error!");
                                setOnSbmt(false);
                            }
                        }
                        else {
                            toast.error("Your introduce should be no less then 40 and no more then 500 words");
                            setOnSbmt(false);
                        }
                    }
                    else {
                        toast.error("Please write your education information");
                        setOnSbmt(false);
                    }
                }
                else {
                    toast.error("Please write your name");
                    setOnSbmt(false);
                }
            }
            else {
                toast.error("Uncorrect email");
                setOnSbmt(false);
            }
        }
        else {
            toast.error("Select your profession");
            setOnSbmt(false);
        }
    }
    return (
        <>
            <Navbars config={menu} />
            <div className="work-with-us" style={{ position: 'relative', zIndex: 25, marginTop: 100, marginBottom: 240 }}>
                <Row className="flex-rw" xs={1} sm={1} md={1} lg={2}>
                    <Col className="flex">
                        <img src={image} alt="work-with-us" className="wwu-image bx-shadow" />
                    </Col>
                    <Col>
                        <form>
                            <Row xs={1} sm={1} md={3} lg={3} xxl={4} xl={4} className="bx-shadow join-us-form">
                                <div className='header-text low-padding'>
                                    <p style={{ color: 'white' }}>Work With Us</p>
                                </div>
                                <Col className="form-element flex colm">
                                    <p className='admin-input-text'>Position</p>
                                    <Form.Select
                                        className='admin-input outline-reset bx-shadow darken'
                                        onChange={event => setPosition(event.target.value)}
                                        required>
                                        <option value="null">Select your profession</option>
                                        <option value="phenomena">Phenomena</option>
                                        <option value="graphics designer">Graphics Designer</option>
                                        <option value="software developer">Software Developer</option>
                                        <option value="community management">Community Management</option>
                                        <option value="project researcher">Project Researcher</option>
                                    </Form.Select>
                                </Col>
                                <Col className="form-element flex colm">
                                    <p className='admin-input-text'>Email Adress</p>
                                    <input type="text"
                                        lang='tr-TR'
                                        autoComplete='on'
                                        placeholder='Email Adress'
                                        value={email}
                                        required
                                        onChange={event => setEmail(event.target.value)}
                                        className='admin-input outline-reset bx-shadow darken' />
                                </Col>
                                <Col className="form-element flex colm">
                                    <p className='admin-input-text'>Full Name</p>
                                    <input type="text"
                                        lang='tr-TR'
                                        autoComplete='on'
                                        value={fullName}
                                        required
                                        onChange={event => setFullName(event.target.value)}
                                        placeholder='Full Name'
                                        className='admin-input outline-reset bx-shadow darken' />
                                </Col>
                                <Col className="form-element flex colm">
                                    <p className='admin-input-text'>Education Details</p>
                                    <textarea type="text"
                                        lang='tr-TR'
                                        autoComplete='on'
                                        maxLength={400}
                                        value={education}
                                        required
                                        onChange={event => setEducation(event.target.value)}
                                        placeholder='Education Details'
                                        className='admin-textarea outline-reset bx-shadow darken'>
                                    </textarea>
                                </Col>
                                <Col className="form-element flex colm">
                                    <p className='admin-input-text'>Introduce Yourself</p>
                                    <textarea type="text"
                                        lang='tr-TR'
                                        autoComplete='on'
                                        maxLength={400}
                                        value={introduce}
                                        required
                                        onChange={event => setIntroduce(event.target.value)}
                                        placeholder='Introduce Yourself ( min 30 <-> max 400 )'
                                        className='admin-textarea outline-reset bx-shadow darken' />
                                </Col>
                                <Col className="form-element flex colm">
                                    <div className="add-new-member flex">
                                        <button className="outline-reset add-btn success bx-shadow center" onClick={() => handleSave()} disabled={onSbmt}>{onSbmt ? <Spinner animation="border" /> : "Work With Us"}</button>
                                    </div>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </div>
            <Footer config={footer} />
        </>
    );
}