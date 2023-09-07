import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import logo from '../assets/logo-transparent.png';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import validator from 'validator';
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import { SiteAgreement, Decode, Undecode } from '../components/index';
import { LoginApi, RegisterApi, GenerateUserKey, CheckEmail, CheckEmailControl, UpdatePassword, UpdateUserLog } from '../api/Api';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Countdown from 'react-countdown';
import { toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';

const Login = ({ setFlip, flip, reset, setReset }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [onSbmt, setOnSbmt] = useState(false);

    const handleInputs = (value, index) => {
        if (index === 1) {
            setEmail(value.target.value);
        }
        if (index === 2) {
            setPassword(value.target.value);
        }
        if (index === 3) {
            setRememberMe(value.target.checked);
        }
    }
    /*const addLocalUser = (user) => {
        const strUser = JSON.stringify(user);
        const decoded = Decode(strUser);
        localStorage.setItem("user", JSON.stringify(decoded));
    }*/
    const addSessionUser = (user) => {
        const strUser = JSON.stringify(user);
        const decoded = Decode(strUser);
        sessionStorage.setItem("user", JSON.stringify(decoded));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validator.isEmail(email)) {
            if (password !== "") {
                const jData = {
                    "email": email,
                    "password": password,
                    "connection_key": '1231-2131-1f33-fga2'
                }
                const data = await LoginApi(jData);
                if (data.status === 200) {
                    setOnSbmt(false);
                    addSessionUser(data.user);
                    const path = JSON.parse(sessionStorage.getItem("path"));
                    if (rememberMe) {
                        //addLocalUser(data.user);
                    }
                    toast.success("Redirecting !");

                    setTimeout(() => {
                        document.location.href = path === null ? process.env.PUBLIC_URL : process.env.PUBLIC_URL + path;
                    }, 3000);
                }
                else {
                    if (data.status === 202) {
                        setOnSbmt(false);
                        toast.success("Your account is in inspection process.When we finish we will send email");
                    }
                    else {
                        setOnSbmt(false);
                        toast.error("Password and username not found.If you forgot your password just renew it!");
                    }
                }
            }
            else {
                setOnSbmt(false);
                toast.error("Password is empty.Please try again");
            }
        }
        else {
            setOnSbmt(false);
            toast.error("Uncorrect email.Please try again");
        }
    }
    const rememberedLogin = async (e, p) => {
        const jData = {
            "email": e,
            "password": p,
            "connection_key": '1231-2131-1f33-fga2'
        }
        const data = await LoginApi(jData);
        if (data.status === 200) {
            setOnSbmt(false);
            const path = JSON.parse(sessionStorage.getItem("path"));
            toast.success("Redirecting !");
            setTimeout(() => {
                document.location.href = path === null ? process.env.PUBLIC_URL : process.env.PUBLIC_URL + path;
            }, 3000);
        }
        else {
            if (data.status === 202) {
                setOnSbmt(false);
                toast.error("Your account is in inspection process.When we finish we will send email.");
            }
            else {
                setOnSbmt(false);
                toast.error("Password and username not found.If you forgot your password just renew it!");
            }
        }
    }
    useEffect(() => {
        const u = sessionStorage.getItem("user");
        if (u !== null) {
            const user = JSON.parse(Undecode(JSON.parse(u)));
            setOnSbmt(true);
            setRememberMe(true);
            rememberedLogin(user.email, user.password);
        }
    }, []);
    return (
        <Row xs={1} md={1} sm={1} lg={4} className="g-4">
            <Col className="center">
                <Card className='bx-shadow login-card'>
                    <Card.Body>
                        <div className="row marg">
                            <div className="col-md-12 col-lg-12 flex login-logo bx-shadow">
                                <img src={logo} alt="logo" />
                            </div>
                        </div>
                        <br />
                        <div className="row marg">
                            <div className="col-md-12 col-lg-12 flex login-form-text">
                                <span>Login</span>
                            </div>
                        </div>
                        <br />
                        <form onSubmit={e => handleSubmit(e)}>
                            <div className="row marg">
                                <div className="col-md-12 col-lg-12 flex form-element">
                                    <i className="fas fa-user-alt input-icon" />
                                    <input type="text" autoComplete='email' className='input outline-reset bx-shadow' placeholder='E-Mail Adress' onChange={event => handleInputs(event, 1)} />
                                </div>
                            </div>
                            <div className="row marg">
                                <div className="col-md-12 col-lg-12 flex form-element">
                                    <i className="fas fa-key input-icon" />
                                    <input type="password" autoComplete='password' className='input outline-reset bx-shadow' placeholder='Password' onChange={event => handleInputs(event, 2)} />
                                </div>
                            </div>
                            <div className="row marg">
                                <div className="col-md-12 col-lg-12 form-element lf-md">
                                    <input id='check' type="checkbox" autoComplete='check' className='check-input outline-reset bx-shadow' onChange={event => handleInputs(event, 3)} />
                                    <label htmlFor="check">Remember Me</label>
                                </div>
                            </div>
                            <div className="row marg">
                                <div className="col-md-12 col-lg-12 flex form-element">
                                    <button type='button' className='outline-reset bx-shadow login-btn' onClick={e => handleSubmit(e)} disabled={onSbmt}>{onSbmt ? <Spinner animation="border" /> : "Login"}</button>
                                </div>
                            </div>
                        </form>
                        <div className="row marg">
                            <div className="col-md-12 col-lg-12 form-element flex">
                                <span>Not a member yet? <button onClick={() => setFlip(!flip)} className='outline-reset register-btn'>Register Now! <i className="fas fa-arrow-right"></i></button> </span>
                            </div>
                        </div>
                        <br />
                        <div className="row marg">
                            <div className="col-md-12 col-lg-12 form-element flex">
                                <button onClick={() => setReset(!reset)} className='action-link-route outline-reset'>Forgot your password?</button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

const Register = ({ setFlip, flip, config }) => {
    const [profession, setProfession] = useState("");
    const [projectName, setProjectName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [reference, setReference] = useState("");
    const [rules, setRules] = useState(false);
    const [show, setShow] = useState(false);
    const [ruleIndex, setRuleIndex] = useState(-1);
    const [errors, setErrors] = useState([]);
    const [onSbmt, setOnSbmt] = useState(false);
    const [onSbmtt, setOnSbmtt] = useState(false);
    const [check, setCheck] = useState(false);
    const [checkCode, setCheckCode] = useState('');
    const [checkCodePrinted, setCheckCodePrinted] = useState('');
    const [checkModal, setCheckModal] = useState(false);
    const [checkState, setCheckState] = useState(false);
    var [date] = useState(new Date());

    const handleInputs = (value, index) => {
        if (index === 0) {
            setProfession(value.target.value);
        }
        if (index === 1) {
            setProjectName(value.target.value);
        }
        if (index === 2) {
            setEmail(value.target.value);
        }
        if (index === 3) {
            setPassword(value.target.value);
        }
        if (index === 4) {
            setPasswordAgain(value.target.value);
        }
        if (index === 5) {
            setRules(value.target.checked);
        }
    }
    const handleSubmit = async () => {
        setOnSbmt(true);
        if (checkInputs()) {
            if (checkState) {
                const jData = {
                    "profession": profession,
                    "name": projectName,
                    "email": email,
                    "password": password,
                    "rg_time": new Date().toLocaleString(),
                    "user_key": GenerateUserKey(12),
                    "user_role": 'user',
                    "user_image": 'https://cdn4.vectorstock.com/i/1000x1000/76/28/unknown-person-user-icon-for-web-vector-34757628.jpg',
                    "reference_key": reference,
                    "connection_key": '1231-2131-1f33-fga2',
                    "account_state": 0
                }
                const data = await RegisterApi(jData);

                if (data.status === 200) {
                    toast.success("Registration is successfull.Redirecting in 3 second !");
                    setTimeout(() => {
                        document.location.href = process.env.PUBLIC_URL + "/login";
                    }, 3000);
                }
                else {
                    setOnSbmt(false);
                    toast.error("Please try again");
                }
            }
            else {
                setOnSbmt(false);
                toast.error("Please verify your email");
            }
        }
    }
    const checkInputs = () => {
        if (validator.isEmail(email)) {
            if (!validator.equals(password, passwordAgain)) {
                setErrors([...errors, "Your password not match."]);
                return false;
            }
            else {
                return true;
            }
        }
        else {
            setErrors([...errors, "Your email not a real email.Please check it"]);
            return false;
        }
    }
    const checkEmail = async () => {
        setOnSbmtt(true);
        const data = await CheckEmail(
            {
                "email": email,
                "connection_key": "1231-2131-1f33-fga2",
                "name": projectName
            });
        if (data.status === 200) {
            setCheckCode(data.code);
            setCheckModal(true);
        }
    }
    const checkControl = () => {
        if (checkCode === checkCodePrinted) {
            setCheckState(true);
            setCheckModal(false);
            setOnSbmtt(false);
            setCheck(false);
            toast.success("Verified");
        }
        else {
            setCheckState(false);
            setOnSbmtt(false);
            toast.error("Please try again");
        }
    }
    const handleRules = (index) => {
        setShow(!show)
        setRuleIndex(index);
    }
    const handleCloseVerify = () => {
        setCheckModal(false);
        setOnSbmtt(false);
        if (checkCode !== checkCodePrinted) {
            toast.error("You failed to verify your email.");
        }
    }
    useEffect(() => {
        if (errors.length !== 0) {
            errors.map(value => toast.error(value));
            setErrors([]);
            setTimeout(() => setOnSbmt(false), 1000);
        }
        if (validator.isEmail(email)) {
            setCheck(true);
        }
        if (!validator.isEmail(email)) {
            setCheck(false);
        }
    }, [errors, email]);

    return (
        <div className="login-card bx-shadow">
            {
                show ? <SiteAgreement rule={config} show={show} setShow={setShow} ruleIndex={ruleIndex} setRules={setRules} /> : <></>
            }
            <Modal
                animation
                centered
                size="md"
                show={checkModal}
                fullscreen="md-down"
                contentClassName='member-modal-body'
                onHide={() => handleCloseVerify()}>
                <ModalHeader closeButton closeVariant='white'>
                    <div className='center' style={{ width: '100%', marginTop: 20 }}>
                        <Countdown
                            intervalDelay={1000}
                            zeroPadTime={2}
                            date={checkModal ? date.setHours(date.getHours(), date.getMinutes() + 4, 0, 0) : Date.now()}
                            onComplete={() => handleCloseVerify()}
                            renderer={(props) => {
                                let display = `0${props.minutes}:${props.seconds < 10 ? '0' + props.seconds : props.seconds}`;
                                let percentage = ((props.minutes * 60) + props.seconds);
                                return (
                                    <div style={{ width: 75, height: 50 }} className="center">
                                        <CircularProgressbar
                                            minValue={0}
                                            maxValue={180}
                                            value={percentage}
                                            text={display}
                                            styles={buildStyles({
                                                pathColor: percentage > 120 ? '#1dad48' : percentage > 60 ? '#fc3d03' : 'red',
                                                trailColor: '#06273d',
                                                textColor: '#fff'
                                            })} />
                                    </div>
                                );
                            }}
                        />
                    </div>
                </ModalHeader>
                <ModalBody>
                    <Row className='flex'>
                        <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Email Verification Code</p>
                            <input type="text" value={checkCodePrinted}
                                onChange={(event) => setCheckCodePrinted(event.target.value)}
                                placeholder="Verification Code"
                                maxLength={19}
                                className='admin-input outline-reset bx-shadow' />
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter className='admin-modal-footer'>
                    <button className="outline-reset modal-btn danger bx-shadow" onClick={() => setCheckModal(false)}>Cancel</button>
                    <button className="outline-reset modal-btn success bx-shadow" onClick={() => checkControl()}>Verify</button>
                </ModalFooter>
            </Modal>
            <div className="row marg">
                <div className="col-md-12 col-lg-12 flex login-logo bx-shadow">
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <br />
            <div className="row marg">
                <div className="col-md-12 col-lg-12 flex login-form-text">
                    <span>Register</span>
                </div>
            </div>
            <br />
            <form>
                <div className="row marg">
                    <div className="col-md-12 col-lg-12 flex form-element">
                        <i className="fas fa-user-alt input-icon" />
                        <input type="text" autoComplete='profession' className='input outline-reset bx-shadow' placeholder='Profession' onChange={event => handleInputs(event, 0)} required />
                    </div>
                </div>
                <div className="row marg">
                    <div className="col-md-12 col-lg-12 flex form-element">
                        <i className="fas fa-user-alt input-icon" />
                        <input type="text" autoComplete='project' className='input outline-reset bx-shadow' placeholder='Project Name' onChange={event => handleInputs(event, 1)} required />
                    </div>
                </div>
                <div className="row marg">
                    <div className="col-md-12 col-lg-12 flex form-element">
                        <i className="fas fa-at input-icon" />
                        <input type="text" autoComplete='email' className='input outline-reset bx-shadow' placeholder='E-Mail Adress' onChange={event => handleInputs(event, 2)} required />
                    </div>
                </div>
                <div className='row marg' style={{ display: check ? 'block' : 'none' }}>
                    <div className='col-md-12 col-lg-12 flex form-element'>
                        <button type="button" className='outline-reset rounded-btn animated fadeIn' onClick={() => checkEmail()} disabled={onSbmtt}>{onSbmtt ? <Spinner animation="border" /> : "Verify"}</button>
                    </div>
                </div>
                <div className="row marg">
                    <div className="col-md-12 col-lg-12 flex form-element">
                        <i className="fas fa-key input-icon" />
                        <input type="password" autoComplete='password' className='input outline-reset bx-shadow' placeholder='Password' onChange={event => handleInputs(event, 3)} required />
                    </div>
                </div>
                <div className="row marg">
                    <div className="col-md-12 col-lg-12 flex form-element">
                        <i className="fas fa-key input-icon" />
                        <input type="password" autoComplete='password-again' className='input outline-reset bx-shadow' placeholder='Password Again' onChange={event => handleInputs(event, 4)} required />
                    </div>
                </div>
                <div className="row marg">
                    <div className="col-md-12 col-lg-12 flex form-element">
                        <i className="fas fa-user input-icon" />
                        <input type="text" className='input outline-reset bx-shadow' autoComplete='reference' placeholder='Reference Code' onChange={event => setReference(event.target.value)} />
                    </div>
                </div>
                <div className="row marg">
                    <div className="col-md-12 col-lg-12 form-element lf-md">
                        <input id='check1' type="checkbox" className='check-input outline-reset bx-shadow' onChange={event => handleInputs(event, 5)} required checked={rules} />
                        <label htmlFor="check1" style={{ width: '80%', textAlign: 'justify' }}>
                            <button type='button' className='policy-link outline-reset' onClick={() => handleRules(0)}>Çerez Politikası</button>
                            -<button type='button' className='policy-link outline-reset' onClick={() => handleRules(1)}>Gizlilik Politikası</button>
                            -<button type='button' className='policy-link outline-reset' onClick={() => handleRules(2)}>Kullanım Koşulları</button> şartlarını kabul ediyorum
                        </label>
                    </div>
                </div>
            </form>
            <div className="row marg">
                <div className="col-md-12 col-lg-12 flex form-element">
                    <button className='outline-reset bx-shadow login-btn' onClick={() => handleSubmit()} disabled={onSbmt}>{onSbmt ? <Spinner animation="border" /> : "Register"}</button>
                </div>
            </div>

            <div className="row marg">
                <div className="col-md-12 col-lg-12 form-element flex">
                    <span>Already member ? <button onClick={() => setFlip(!flip)} className='outline-reset register-btn'>Login Now! <i className="fas fa-arrow-right"></i></button> </span>
                </div>
            </div>
        </div>
    );
}
const ForgotMyPassword = ({ setShow, show }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const [passkey, setPasskey] = useState('c');
    const [inputkey, setInputkey] = useState('');
    const [controlModal, setControlModal] = useState(false);
    var [date] = useState(new Date());
    const [onSbmt, setOnSbmt] = useState(false);
    const [onSbmtt, setOnSbmtt] = useState(false);

    const handleInputs = () => {
        if (inputkey === passkey) {
            setControlModal(false);
            toast.success("Verified");
        }
        else {
            toast.error("Please try again");
        }
    }
    const handleCloseVerify = () => {
        setControlModal(false);
        if (passkey !== inputkey) {
            toast.error("You failed to verify your email");
        }
    }
    const handleSubmit = async () => {
        if (validator.isEmail(email)) {
            setOnSbmt(true);
            const data = await CheckEmailControl(
                {
                    "email": email,
                    "connection_key": "1231-2131-1f33-fga2",
                });

            if (data.status === 200) {
                setPasskey(data.code);
                setOnSbmt(false);
                setControlModal(true);
            }
            else {
                setOnSbmt(false);
                toast.error("Please try again");
            }
        }
        else {
            toast.error("Please write correct email!");
        }
    }
    const handleUpdate = async () => {
        setOnSbmtt(true);
        if (password === passwordAgain) {
            const data = await UpdatePassword(
                {
                    "email": email,
                    "password": password,
                    "connection_key": "1231-2131-1f33-fga2",
                });
            if (data.status === 200) {
                toast.success("Password Updated !");
                setOnSbmtt(false);
            }
            else {
                setOnSbmtt(false);
                toast.error("Please try again");
            }
        } else {
            setOnSbmtt(false);
            toast.error("Passwords not match !");
        }
    }
    return (
        <div className="forgot-container center">
            <Modal
                animation
                centered
                size="md"
                show={controlModal}
                fullscreen="md-down"
                contentClassName='member-modal-body'
                onHide={() => handleCloseVerify()}>
                <ModalHeader closeButton closeVariant='white'>
                    <div className='center' style={{ width: '100%', marginTop: 20 }}>
                        <Countdown
                            intervalDelay={1000}
                            zeroPadTime={2}
                            date={controlModal ? date.setHours(date.getHours(), date.getMinutes() + 4, 0, 0) : Date.now()}
                            onComplete={() => handleCloseVerify()}
                            renderer={(props) => {
                                let display = `0${props.minutes}:${props.seconds < 10 ? '0' + props.seconds : props.seconds}`;
                                let percentage = ((props.minutes * 60) + props.seconds);
                                return (
                                    <div style={{ width: 75, height: 50 }} className="center">
                                        <CircularProgressbar
                                            minValue={0}
                                            maxValue={180}
                                            value={percentage}
                                            text={display}
                                            styles={buildStyles({
                                                pathColor: percentage > 120 ? '#1dad48' : percentage > 60 ? '#fc3d03' : 'red',
                                                trailColor: '#06273d',
                                                textColor: '#fff'
                                            })} />
                                    </div>
                                );
                            }}
                        />
                    </div>
                </ModalHeader>
                <ModalBody>
                    <Row className='flex'>
                        <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Email Verification Code</p>
                            <input type="text" value={inputkey}
                                onChange={(event) => setInputkey(event.target.value)}
                                placeholder="Verification Code"
                                maxLength={19}
                                className='admin-input outline-reset bx-shadow' />
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter className='admin-modal-footer'>
                    <button className="outline-reset modal-btn danger bx-shadow" onClick={() => setControlModal(false)}>Cancel</button>
                    <button className="outline-reset modal-btn success bx-shadow" onClick={() => handleInputs()}>Verify</button>
                </ModalFooter>
            </Modal>
            <div className="login-card  bx-shadow">
                <button onClick={() => setShow(!show)}
                    style={{
                        color: 'white',
                        backgroundColor: 'transparent',
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        zIndex: 40,
                        borderRadius: 100
                    }}>X</button>
                <div className="row marg">
                    <div className="col-md-12 col-lg-12 flex login-logo">
                        <img src={logo} alt="logo" className='bx-shadow' />
                    </div>
                </div>
                <br />
                <div className="row marg">
                    <div className="col-md-12 col-lg-12 flex login-form-text">
                        <span>Password Reset</span>
                    </div>
                </div>
                <br />
                {
                    inputkey === passkey ? <>
                        <div className="row marg">
                            <div className="col-md-12 col-lg-12 flex form-element">
                                <i className="fas fa-user-alt input-icon" />
                                <input type="password" className='input outline-reset bx-shadow' value={password} placeholder='Password' onChange={event => setPassword(event.target.value)} />
                            </div>
                        </div>
                        <br />
                        <div className="row marg">
                            <div className="col-md-12 col-lg-12 flex form-element">
                                <i className="fas fa-user-alt input-icon" />
                                <input type="password" className='input outline-reset bx-shadow' value={passwordAgain} placeholder='Password Again' onChange={event => setPasswordAgain(event.target.value)} />
                            </div>
                        </div>
                        <br />
                        <div className="row marg">
                            <div className="col-md-12 col-lg-12 flex form-element">
                                <button className='outline-reset bx-shadow login-btn' onClick={() => handleUpdate()} disabled={onSbmtt}>{onSbmtt ? <Spinner animation="border" /> : "Update"}</button>
                            </div>
                        </div>
                    </> : <>
                        <div className="row marg">
                            <div className="col-md-12 col-lg-12 flex form-element">
                                <i className="fas fa-user-alt input-icon" />
                                <input type="text" className='input outline-reset bx-shadow' placeholder='E-Mail Adress' onChange={event => setEmail(event.target.value)} />
                            </div>
                        </div>
                        <br />
                        <div className="row marg">
                            <div className="col-md-12 col-lg-12 flex form-element">
                                <button className='outline-reset bx-shadow login-btn' onClick={() => handleSubmit()} disabled={onSbmt}>{onSbmt ? <Spinner animation="border" /> : "Verify"}</button>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}

export function LoginPage({ config }) {
    const [flip, setFlip] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const login = sessionStorage.getItem("user");
        if (login !== null) {
            try {
                const decodedUser = JSON.parse(login);
                const decodedMi = JSON.parse(sessionStorage.getItem("mi"));
                const requestedUser = JSON.parse(Undecode(decodedUser));
                const requestedMi = JSON.parse(Undecode(decodedMi));

                const mi = JSON.stringify({
                    ipv4: requestedMi.ipv4,
                    country: requestedMi.country,
                    latitude: requestedMi.latitude,
                    longitude: requestedMi.longitude,
                    user_key: requestedUser.user_key,
                    target: process.env.PUBLIC_URL + "/influencers"
                });
                UpdateUserLog(mi);
            }
            catch (ex) {

            }
        }
    }, []);
    return (
        <>
            {
                show ? <ForgotMyPassword show={show} setShow={setShow} /> : null
            }
            <Flippy
                flipOnHover={false}
                flipOnClick={false}
                flipDirection="horizontal"
                isFlipped={flip}
                className="login-section">
                <FrontSide className="flex bx-shadow">
                    <Login setFlip={setFlip} flip={flip} reset={show} setReset={setShow} />
                </FrontSide>
                <BackSide className="flex">
                    <Register setFlip={setFlip} flip={flip} config={config.siteagreement} />
                </BackSide>
            </Flippy>
        </>
    );
}
