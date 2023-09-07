import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { GenerateHeader, machineUrl, apiUrl } from '../api/Api';
import axios from 'axios';

export const PopupUpdate = ({ update, setUpdate, obj, i, array, setArray }) => {
    const [image, setImage] = useState(obj.image);
    const [name, setName] = useState(obj.name);
    const [id, setId] = useState(obj.id);
    const [position, setPosition] = useState(obj.position);
    const [description, setDescription] = useState(obj.description);
    const [items, setItems] = useState(obj.socials);
    const [twitter, setTwitter] = useState({ checked: false, link: '' });
    const [instagram, setInstagram] = useState({ checked: false, link: '' });
    const [youtube, setYoutube] = useState({ checked: false, link: '' });
    const [website, setWebsite] = useState({ checked: false, link: '' });
    const [telegram, setTelegram] = useState({ checked: false, link: '' });
    const [email, setEmail] = useState({ checked: false, link: '' });

    useEffect(() => {
        checkedControl();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSave = () => {
        let temp = [];

        if (twitter.checked) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                name: "twitter",
                socialMediaLink: twitter.link,
                socialMediaIcon: "fab fa-twitter x"
            };
            temp.push(item);
        }
        if (instagram.checked) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                name: "instagram",
                socialMediaLink: instagram.link,
                socialMediaIcon: "fab fa-instagram y"
            };
            temp.push(item);
        }
        if (youtube.checked) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                name: "youtube",
                socialMediaLink: youtube.link,
                socialMediaIcon: "fab fa-youtube r"
            };
            temp.push(item);
        }
        if (website.checked) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                name: "website",
                socialMediaLink: website.link,
                socialMediaIcon: "fas fa-link"
            };
            temp.push(item);
        }
        if (telegram.checked) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                name: "telegram",
                socialMediaLink: telegram.link,
                socialMediaIcon: "fab fa-telegram z"
            };
            temp.push(item);
        }
        if (email.checked) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                name: "email",
                socialMediaLink: email.link,
                socialMediaIcon: "far fa-envelope"
            };
            temp.push(item);
        }
        const data = {
            index: i,
            image: image,
            name: name,
            id: id,
            position: position,
            description: description,
            socials: temp
        }
        const a = Array.from(array);
        a[i] = data;
        setArray(a);
        setUpdate(false);
    }

    const checkedControl = () => {
        items.forEach(value => {
            if (value.socialMediaIcon === "fab fa-twitter x") {
                setTwitter({ checked: true, link: value.socialMediaLink });
            }
            if (value.socialMediaIcon === "fab fa-instagram y") {
                setInstagram({ checked: true, link: value.socialMediaLink });
            }
            if (value.socialMediaIcon === "fab fa-youtube r") {
                setYoutube({ checked: true, link: value.socialMediaLink });
            }
            if (value.socialMediaIcon === "fas fa-link") {
                setWebsite({ checked: true, link: value.socialMediaLink });
            }
            if (value.socialMediaIcon === "fab fa-telegram z") {
                setTelegram({ checked: true, link: value.socialMediaLink });
            }
            if (value.socialMediaIcon === "far fa-envelope") {
                setEmail({ checked: true, link: value.socialMediaLink });
            }
        });
    }
    const clearCookies = () => {
        setImage("");
        setName("");
        setId("");
        setPosition("");
        setDescription("");
        setItems("");
        setTwitter({ checked: false, link: '' });
        setInstagram({ checked: false, link: '' });
        setYoutube({ checked: false, link: '' });
        setWebsite({ checked: false, link: '' });
        setTelegram({ checked: false, link: '' });
        setEmail({ checked: false, link: '' });
    }
    const handleClose = () => {
        clearCookies();
        setUpdate(!update);
    }
    const uploadImage = async (image) => {
        const formData = new FormData();
        formData.append("image", image);
        const header = await GenerateHeader(machineUrl, 'multipart/form-data');
        const apiPath = apiUrl + "/upload";

        const { data } = await axios.post(apiPath, formData,
            {
                headers: header,
            });

        if (data.status === 200) {
            setImage(data.response);
        }
        else {
            if (data.status === 404) {
                alert("File not found");
            }
            else {
                alert(data.message);
            }
        }
    }
    if (update) {
        return (
            <Modal
                animation
                centered
                size="md"
                show={update}
                fullscreen="md-down"
                contentClassName='member-modal-body'
                onHide={() => handleClose()}>
                <ModalHeader closeButton closeVariant='white'>
                    <ModalTitle className='modal-header'>Update Selected</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Row className='flex'>
                        <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Profile Image</p>
                            <img loading='lazy' src={image} alt={image} style={{ width: 60, height: 60, borderRadius: 100, marginBottom: 12, display: image === '' ? 'none' : 'flex' }} />
                            <label className="custom-file-upload">
                                <input name='image' type="file" onChange={(event) => uploadImage(event.target.files[0])} />
                                <i className="fa fa-cloud-upload" /> Select
                            </label>
                        </Col>
                        <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Member Name</p>
                            <input type="text" value={name === undefined ? "" : name}
                                onChange={(event) => setName(event.target.value)}
                                className='admin-input outline-reset bx-shadow' />
                        </Col>
                        <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Member Connection Id</p>
                            <input type="text" value={id === undefined ? "" : id}
                                onChange={(event) => setId(event.target.value)}
                                className='admin-input outline-reset bx-shadow' />
                        </Col>
                        <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Member Position</p>
                            <input type="text" value={position === undefined ? "" : position}
                                onChange={(event) => setPosition(event.target.value)}
                                className='admin-input outline-reset bx-shadow' />
                        </Col>
                        <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Member Description</p>
                            <textarea type="text"
                                value={description === undefined ? "" : description}
                                onChange={(event) => setDescription(event.target.value)}
                                className='admin-textarea outline-reset bx-shadow' />
                        </Col>
                        <Col sm={10} className="form-element ">
                            <p className='admin-input-text'>Member Social Media</p>
                            <div className="flex sp-btw">
                                <Form.Check type="checkbox" name='twitter' label="Twitter" checked={twitter.checked} onChange={(event) => setTwitter({ checked: event.target.checked, link: twitter.link })} />
                                <Form.Check type="checkbox" name="instagram" label="Instagram" checked={instagram.checked} onChange={(event) => setInstagram({ checked: event.target.checked, link: instagram.link })} />
                                <Form.Check type="checkbox" name="youtube" label="Youtube" checked={youtube.checked} onChange={(event) => setYoutube({ checked: event.target.checked, link: youtube.link })} />
                            </div>
                            <div className="flex sp-btw">
                                <Form.Check type="checkbox" name='website' label="Website" checked={website.checked} onChange={(event) => setWebsite({ checked: event.target.checked, link: website.link })} />
                                <Form.Check type="checkbox" name="telegram" label="Telegram" checked={telegram.checked} onChange={(event) => setTelegram({ checked: event.target.checked, link: telegram.link })} />
                                <Form.Check type="checkbox" name="email" label="Email" checked={email.checked} onChange={(event) => setEmail({ checked: event.target.checked, link: email.link })} />
                            </div>
                        </Col>
                        {
                            twitter.checked ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Member Twitter Link</p>
                                <input type="text"
                                    value={twitter.link}
                                    onChange={(event) => setTwitter({ checked: twitter.checked, link: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : <></>
                        }
                        {
                            instagram.checked ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Member Instagram Link</p>
                                <input type="text"
                                    value={instagram.link}
                                    onChange={(event) => setInstagram({ checked: instagram.checked, link: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : null
                        }
                        {
                            youtube.checked ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Member Youtube Link</p>
                                <input type="text"
                                    value={youtube.link}
                                    onChange={(event) => setYoutube({ checked: youtube.checked, link: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : null
                        }
                        {
                            website.checked ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Member Website Link</p>
                                <input type="text"
                                    value={website.link}
                                    onChange={(event) => setWebsite({ checked: website.checked, link: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : null
                        }
                        {
                            telegram.checked ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Member Telegram Link</p>
                                <input type="text"
                                    value={telegram.link}
                                    onChange={(event) => setTelegram({ checked: telegram.checked, link: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : null
                        }
                        {
                            email.checked ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Member Email Link</p>
                                <input type="text"
                                    value={email.link}
                                    onChange={(event) => setEmail({ checked: email.checked, link: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : null
                        }
                    </Row>
                </ModalBody>
                <ModalFooter className='admin-modal-footer'>
                    <button className="outline-reset modal-btn success bx-shadow" onClick={() => handleSave()}>Save</button>
                    <button className="outline-reset modal-btn danger bx-shadow" onClick={() => handleClose()}>Cancel</button>
                </ModalFooter>
            </Modal>
        );
    }
    else {
        return <></>;
    }
}
export const PopupAdd = ({ update, setUpdate, array, setArray }) => {
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [position, setPosition] = useState("");
    const [description, setDescription] = useState("");
    const [socials, setSocials] = useState({ twitter: false, instagram: false, youtube: false, website: false, telegram: false, email: false });
    const [socialLinks, setSocialLinks] = useState({ twitterL: "", instagramL: "", youtubeL: "", websiteL: "", telegramL: "", emailL: "" });

    const handleSave = async () => {
        let temp = [];
        if (socials.twitter) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                name: "twitter",
                socialMediaLink: socialLinks.twitterL,
                socialMediaIcon: "fab fa-twitter x"
            };
            temp.push(item);
        }
        if (socials.instagram) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                name: "instagram",
                socialMediaLink: socialLinks.instagramL,
                socialMediaIcon: "fab fa-instagram y"
            };
            temp.push(item);
        }
        if (socials.youtube) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                name: "youtube",
                socialMediaLink: socialLinks.youtubeL,
                socialMediaIcon: "fab fa-youtube r"
            };
            temp.push(item);
        }
        if (socials.website) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                name: "website",
                socialMediaLink: socialLinks.websiteL,
                socialMediaIcon: "fab fa-youtube r"
            };
            temp.push(item);
        }
        if (socials.telegram) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                name: "telegram",
                socialMediaLink: socialLinks.telegramL,
                socialMediaIcon: "fab fa-youtube r"
            };
            temp.push(item);
        }
        if (socials.email) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                name: "email",
                socialMediaLink: socialLinks.emailL,
                socialMediaIcon: "fab fa-youtube r"
            };
            temp.push(item);
        }
        const data = {
            key: array.length + 1,
            image: image,
            name: name,
            id: id,
            position: position,
            description: description,
            socials: temp
        }
        await setArray([...array, data]);
        setUpdate(!update);
    }

    const checkedHandler = (event) => {
        setSocials({ ...socials, [event.target.name]: event.target.checked });
    }
    const uploadImage = async (image) => {
        const formData = new FormData();
        formData.append("image", image);
        const header = await GenerateHeader(machineUrl, 'multipart/form-data');
        const apiPath = apiUrl + "/upload";

        const { data } = await axios.post(apiPath, formData,
            {
                headers: header,
            });

        if (data.status === 200) {
            setImage(data.response);
        }
        else {
            if (data.status === 404) {
                alert("File not found");
            }
            else {
                alert(data.message);
            }
        }
    }
    if (update) {
        return (
            <Modal
                animation
                centered
                size="md"
                show={update}
                fullscreen="md-down"
                contentClassName='member-modal-body'
                onHide={() => setUpdate(!update)}>
                <ModalHeader closeButton closeVariant='white'>
                    <ModalTitle className='modal-header'>Update Selected</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Row className='flex'>
                        <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Profile Imagess</p>
                            <img loading='lazy' src={image} alt={image} style={{ width: 60, height: 60, borderRadius: 100, marginBottom: 12, display: image === '' ? 'none' : 'flex' }} />
                            <label className="custom-file-upload">
                                <input name='image' type="file" onChange={(event) => uploadImage(event.target.files[0])} />
                                <i className="fa fa-cloud-upload" /> Select
                            </label>
                        </Col>
                        <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Member Name</p>
                            <input type="text" value={name}
                                placeholder="Name"
                                onChange={(event) => setName(event.target.value)}
                                className='admin-input outline-reset bx-shadow' />
                        </Col>
                        <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Member Connection Id</p>
                            <input type="text" value={id}
                                placeholder="Id"
                                onChange={(event) => setId(event.target.value)}
                                className='admin-input outline-reset bx-shadow' />
                        </Col>
                        <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Member Position</p>
                            <input type="text" value={position}
                                placeholder="Position"
                                onChange={(event) => setPosition(event.target.value)}
                                className='admin-input outline-reset bx-shadow' />
                        </Col>
                        <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Member Description</p>
                            <textarea type="text"
                                value={description}
                                placeholder="Decription"
                                onChange={(event) => setDescription(event.target.value)}
                                className='admin-textarea outline-reset bx-shadow' />
                        </Col>
                        <Col sm={10} className="form-element ">
                            <p className='admin-input-text'>Member Social Media</p>
                            <div className="flex sp-btw">
                                <Form.Check type="checkbox" name='twitter' label="Twitter" checked={socials.twitter} onChange={(event) => checkedHandler(event)} />
                                <Form.Check type="checkbox" name="instagram" label="Instagram" checked={socials.instagram} onChange={(event) => checkedHandler(event)} />
                                <Form.Check type="checkbox" name="youtube" label="Youtube" checked={socials.youtube} onChange={(event) => checkedHandler(event)} />
                            </div>
                            <div className="flex sp-btw">
                                <Form.Check type="checkbox" name='website' label="Website" checked={socials.website} onChange={(event) => checkedHandler(event)} />
                                <Form.Check type="checkbox" name="telegram" label="Telegram" checked={socials.telegram} onChange={(event) => checkedHandler(event)} />
                                <Form.Check type="checkbox" name="email" label="Email" checked={socials.email} onChange={(event) => checkedHandler(event)} />
                            </div>
                        </Col>
                        {
                            socials.twitter !== false ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Member Twitter Link</p>
                                <input type="text" value={socialLinks.twitterL}
                                    name="twitterL"
                                    onChange={(event) => setSocialLinks({ ...socialLinks, [event.target.name]: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : <></>
                        }
                        {
                            socials.instagram ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Member Instagram Link</p>
                                <input type="text" value={socialLinks.instagramL}
                                    name="instagramL"
                                    onChange={(event) => setSocialLinks({ ...socialLinks, [event.target.name]: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : null
                        }
                        {
                            socials.youtube ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Member Youtube Link</p>
                                <input type="text" value={socialLinks.youtubeL}
                                    name="youtubeL"
                                    onChange={(event) => setSocialLinks({ ...socialLinks, [event.target.name]: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : null
                        }
                        {
                            socials.website ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Member Website Link</p>
                                <input type="text" value={socialLinks.websiteL}
                                    name="websiteL"
                                    onChange={(event) => setSocialLinks({ ...socialLinks, [event.target.name]: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : null
                        }
                        {
                            socials.telegram ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Member Telegram Link</p>
                                <input type="text" value={socialLinks.telegramL}
                                    name="telegramL"
                                    onChange={(event) => setSocialLinks({ ...socialLinks, [event.target.name]: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : null
                        }
                        {
                            socials.email ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Member Email Link</p>
                                <input type="text" value={socialLinks.emailL}
                                    name="emailL"
                                    onChange={(event) => setSocialLinks({ ...socialLinks, [event.target.name]: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : null
                        }
                    </Row>
                </ModalBody>
                <ModalFooter className='admin-modal-footer'>
                    <button className="outline-reset modal-btn success bx-shadow" onClick={() => handleSave()}>Update Changes</button>
                    <button className="outline-reset modal-btn danger bx-shadow" onClick={() => setUpdate(!update)}>Cancel</button>
                </ModalFooter>
            </Modal>
        );
    }
    else {
        return <></>;
    }
}
export const PopupPartnersAdd = ({ update, setUpdate, array, setArray }) => {
    const [logo, setLogo] = useState("");

    const handleSave = () => {
        setArray([...array, { key: array.length + 1, logo: logo }]);
        setUpdate(false);
    }
    const uploadImage = async (image) => {
        const formData = new FormData();
        formData.append("image", image);
        const header = await GenerateHeader(machineUrl, 'multipart/form-data');
        const apiPath = apiUrl + "/upload";

        const { data } = await axios.post(apiPath, formData,
            {
                headers: header,
            });

        if (data.status === 200) {
            setLogo(data.response);
        }
        else {
            if (data.status === 404) {
                alert("File not found");
            }
            else {
                alert(data.message);
            }
        }
    }
    return (
        <Modal
            animation
            centered
            size="md"
            show={update}
            fullscreen="md-down"
            contentClassName='member-modal-body'
            onHide={() => setUpdate(!update)}>
            <ModalHeader closeButton closeVariant='white'>
                <ModalTitle className='modal-header'>Update Selected</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Row className='flex'>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Partner Logo</p>
                        <img loading='lazy' src={logo} alt={logo} style={{ width: 60, height: 60, borderRadius: 100, marginBottom: 12, display: logo === '' ? 'none' : 'flex' }} />
                        <label className="custom-file-upload">
                            <input name='image' type="file" onChange={(event) => uploadImage(event.target.files[0])} />
                            <i className="fa fa-cloud-upload" /> Select
                        </label>
                    </Col>
                </Row>
            </ModalBody>
            <ModalFooter className='admin-modal-footer'>
                <button className="outline-reset modal-btn success bx-shadow" onClick={() => handleSave()}>Kaydet</button>
                <button className="outline-reset modal-btn danger bx-shadow" onClick={() => setUpdate(!update)}>Iptal Et</button>
            </ModalFooter>
        </Modal>
    );
}
export const PopupSocialAccountsAdd = ({ update, setUpdate, array, setArray }) => {
    const [id, setId] = useState("");
    const [icon, setIcon] = useState("");
    const [followerCount, setFollowerCount] = useState("");

    const handleSave = () => {
        const arrItem = {
            key: array.length + 1,
            id: id,
            icon: icon,
            followerCount: followerCount,
        }
        setArray([...array, arrItem]);
        setUpdate(false);
    }
    return (
        <Modal
            animation
            centered
            size="md"
            show={update}
            fullscreen="md-down"
            contentClassName='member-modal-body'
            onHide={() => setUpdate(!update)}>
            <ModalHeader closeButton closeVariant='white'>
                <ModalTitle className='modal-header'>Update Selected</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Row className='flex'>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Social Media Name</p>
                        <input type="text" value={id}
                            onChange={(event) => setId(event.target.value)}
                            placeholder="Id"
                            className='admin-input outline-reset bx-shadow' />
                    </Col>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Social Media Icon</p>
                        <input type="text" value={icon}
                            onChange={(event) => setIcon(event.target.value)}
                            placeholder="Icon"
                            className='admin-input outline-reset bx-shadow' />
                    </Col>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Animation Target Value</p>
                        <input type="number" value={followerCount}
                            onChange={(event) => setFollowerCount(event.target.value)}
                            placeholder="Target Value"
                            className='admin-input outline-reset bx-shadow' />
                    </Col>
                </Row>
            </ModalBody>
            <ModalFooter className='admin-modal-footer'>
                <button className="outline-reset modal-btn danger bx-shadow" onClick={() => setUpdate(!update)}>Iptal Et</button>
                <button className="outline-reset modal-btn success bx-shadow" onClick={() => handleSave()}>Kaydet</button>
            </ModalFooter>
        </Modal>
    );
}
export const PopupSocialAccountsUpdate = ({ update, setUpdate, i, array, setArray }) => {
    const [id, setId] = useState(array[i].id);
    const [icon, setIcon] = useState(array[i].icon);
    const [followerCount, setFollowerCount] = useState(array[i].followerCount);

    const handleSave = () => {
        const arrItem = {
            key: i + 1,
            id: id,
            icon: icon,
            followerCount: followerCount,
        }
        const arr = Array.from(array);
        arr[i] = arrItem;
        setArray([...arr]);
        setUpdate({ show: false, key: -1 });
    }
    return (
        <Modal
            animation
            centered
            size="md"
            show={update}
            fullscreen="md-down"
            contentClassName='member-modal-body'
            onHide={() => setUpdate({ show: false, key: -1 })}>
            <ModalHeader closeButton closeVariant='white'>
                <ModalTitle className='modal-header'>Update Selected</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Row className='flex'>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Social Media Name</p>
                        <input type="text" value={id}
                            onChange={(event) => setId(event.target.value)}
                            placeholder="Id"
                            className='admin-input outline-reset bx-shadow' />
                    </Col>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Social Media Icon</p>
                        <input type="text" value={icon}
                            onChange={(event) => setIcon(event.target.value)}
                            placeholder="Icon"
                            className='admin-input outline-reset bx-shadow' />
                    </Col>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Animation Target Value</p>
                        <input type="number" value={followerCount}
                            onChange={(event) => setFollowerCount(event.target.value)}
                            placeholder="Target Value"
                            className='admin-input outline-reset bx-shadow' />
                    </Col>
                </Row>
            </ModalBody>
            <ModalFooter className='admin-modal-footer'>
                <button className="outline-reset modal-btn danger bx-shadow" onClick={() => setUpdate(!update)}>Cancel</button>
                <button className="outline-reset modal-btn success bx-shadow" onClick={() => handleSave()}>Update</button>
            </ModalFooter>
        </Modal>
    );
}
export const PopupConditionsAdd = ({ update, setUpdate, array, setArray }) => {
    const [icon, setIcon] = useState("fab fa-gg-circle");
    const [name, setName] = useState("");

    const handleSave = () => {
        const arrItem = {
            key: array.length + 1,
            icon: icon,
            name: name
        }
        setArray([...array, arrItem]);
        setUpdate(false);
    }
    return (
        <Modal
            animation
            centered
            size="md"
            show={update}
            fullscreen="md-down"
            contentClassName='member-modal-body'
            onHide={() => setUpdate(!update)}>
            <ModalHeader closeButton closeVariant='white'>
                <ModalTitle className='modal-header'>Update Selected</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Row className='flex'>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Social Media Name</p>
                        <input type="text" value={icon}
                            onChange={(event) => setIcon(event.target.value)}
                            placeholder="Icon"
                            className='admin-input outline-reset bx-shadow' />
                    </Col>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Social Media Icon</p>
                        <textarea type="text" value={name}
                            onChange={(event) => setName(event.target.value)}
                            placeholder="Rule Description"
                            className='admin-textarea outline-reset bx-shadow' />
                    </Col>
                </Row>
            </ModalBody>
            <ModalFooter className='admin-modal-footer'>
                <button className="outline-reset modal-btn danger bx-shadow" onClick={() => setUpdate(!update)}>Iptal Et</button>
                <button className="outline-reset modal-btn success bx-shadow" onClick={() => handleSave()}>Kaydet</button>
            </ModalFooter>
        </Modal>
    );
}
export const PopupSpecialOffersAdd = ({ update, setUpdate, array, setArray }) => {
    const [image, setImage] = useState("");

    const handleSave = () => {
        const arrItem = {
            key: array.length + 1,
            image: image
        }
        setArray([...array, arrItem]);
        setUpdate(false);
    }
    const uploadImage = async (image) => {
        const formData = new FormData();
        formData.append("image", image);
        const header = await GenerateHeader(machineUrl, 'multipart/form-data');
        const apiPath = apiUrl + "/upload";

        const { data } = await axios.post(apiPath, formData,
            {
                headers: header,
            });

        if (data.status === 200) {
            setImage(data.response);
        }
        else {
            if (data.status === 404) {
                alert("File not found");
            }
            else {
                alert(data.message);
            }
        }
    }
    return (
        <Modal
            animation
            centered
            size="md"
            show={update}
            fullscreen="md-down"
            contentClassName='member-modal-body'
            onHide={() => setUpdate(!update)}>
            <ModalHeader closeButton closeVariant='white'>
                <ModalTitle className='modal-header'>Update Selected</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Row className='flex'>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Image</p>
                        <img loading='lazy' src={image} alt={image} style={{ width: 60, height: 60, borderRadius: 100, marginBottom: 12, display: image === '' ? 'none' : 'flex' }} />
                        <label className="custom-file-upload">
                            <input name='image' type="file" onChange={(event) => uploadImage(event.target.files[0])} />
                            <i className="fa fa-cloud-upload" /> Select
                        </label>
                    </Col>
                </Row>
            </ModalBody>
            <ModalFooter className='admin-modal-footer'>
                <button className="outline-reset modal-btn danger bx-shadow" onClick={() => setUpdate(!update)}>Iptal Et</button>
                <button className="outline-reset modal-btn success bx-shadow" onClick={() => handleSave()}>Kaydet</button>
            </ModalFooter>
        </Modal>
    );
}
export const PopupNewsAdd = ({ update, setUpdate, array, setArray }) => {
    const [image, setImage] = useState("");
    const [header, setHeader] = useState("");
    const [subHeader, setSubHeader] = useState("");

    const handleSave = () => {
        const arrItem = {
            key: array.length + 1,
            image: image,
            header: header,
            subHeader: subHeader
        }
        setArray([...array, arrItem]);
        setUpdate(false);
    }
    const uploadImage = async (image) => {
        const formData = new FormData();
        formData.append("image", image);
        const header = await GenerateHeader(machineUrl, 'multipart/form-data');
        const apiPath = apiUrl + "/upload";

        const { data } = await axios.post(apiPath, formData,
            {
                headers: header,
            });

        if (data.status === 200) {
            setImage(data.response);
        }
        else {
            if (data.status === 404) {
                alert("File not found");
            }
            else {
                alert(data.message);
            }
        }
    }
    return (
        <Modal
            animation
            centered
            size="md"
            show={update}
            fullscreen="md-down"
            contentClassName='member-modal-body'
            onHide={() => setUpdate(!update)}>
            <ModalHeader closeButton closeVariant='white'>
                <ModalTitle className='modal-header'>Add News</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Row className='flex'>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Image</p>
                        <img loading='lazy' src={image} alt={image} style={{ width: 60, height: 60, borderRadius: 100, marginBottom: 12, display: image === '' ? 'none' : 'flex' }} />
                        <label className="custom-file-upload">
                            <input name='image' type="file" onChange={(event) => uploadImage(event.target.files[0])} />
                            <i className="fa fa-cloud-upload" /> Select
                        </label>
                    </Col>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Title</p>
                        <input type="text" value={header}
                            onChange={(event) => setHeader(event.target.value)}
                            placeholder="Title"
                            className='admin-input outline-reset bx-shadow' />
                    </Col>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Description</p>
                        <textarea type="text" value={subHeader}
                            onChange={(event) => setSubHeader(event.target.value)}
                            placeholder="Description"
                            className='admin-textarea outline-reset bx-shadow' />
                    </Col>
                </Row>
            </ModalBody>
            <ModalFooter className='admin-modal-footer'>
                <button className="outline-reset modal-btn danger bx-shadow" onClick={() => setUpdate(!update)}>Iptal Et</button>
                <button className="outline-reset modal-btn success bx-shadow" onClick={() => handleSave()}>Kaydet</button>
            </ModalFooter>
        </Modal>
    );
}
export const PopupNewsUpdate = ({ update, setUpdate, array, setArray, index }) => {
    const [image, setImage] = useState(array[index].image);
    const [header, setHeader] = useState(array[index].header);
    const [subHeader, setSubHeader] = useState(array[index].subHeader);

    const handleSave = () => {
        const arrItem = {
            key: index + 1,
            image: image,
            header: header,
            subHeader: subHeader
        }
        const arr = Array.from(array);
        arr[index] = arrItem;
        setArray(arr);
        setUpdate(false);
    }
    const uploadImage = async (image) => {
        const formData = new FormData();
        formData.append("image", image);
        const header = await GenerateHeader(machineUrl, 'multipart/form-data');
        const apiPath = apiUrl + "/upload";

        const { data } = await axios.post(apiPath, formData,
            {
                headers: header,
            });

        if (data.status === 200) {
            setImage(data.response);
        }
        else {
            if (data.status === 404) {
                alert("File not found");
            }
            else {
                alert(data.message);
            }
        }
    }
    return (
        <Modal
            animation
            centered
            size="md"
            show={update}
            fullscreen="md-down"
            contentClassName='member-modal-body'
            onHide={() => setUpdate(!update)}>
            <ModalHeader closeButton closeVariant='white'>
                <ModalTitle className='modal-header'>Add News</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Row className='flex'>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Image</p>
                        <img loading='lazy' src={image} alt={image} style={{ width: 60, height: 60, borderRadius: 100, marginBottom: 12, display: image === '' ? 'none' : 'flex' }} />
                        <label className="custom-file-upload">
                            <input name='image' type="file" onChange={(event) => uploadImage(event.target.files[0])} />
                            <i className="fa fa-cloud-upload" /> Select
                        </label>
                    </Col>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Title</p>
                        <input type="text" value={header}
                            onChange={(event) => setHeader(event.target.value)}
                            placeholder="Title"
                            className='admin-input outline-reset bx-shadow' />
                    </Col>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Description</p>
                        <textarea type="text" value={subHeader}
                            onChange={(event) => setSubHeader(event.target.value)}
                            placeholder="Description"
                            className='admin-textarea outline-reset bx-shadow' />
                    </Col>
                </Row>
            </ModalBody>
            <ModalFooter className='admin-modal-footer'>
                <button className="outline-reset modal-btn danger bx-shadow" onClick={() => setUpdate(!update)}>Iptal Et</button>
                <button className="outline-reset modal-btn success bx-shadow" onClick={() => handleSave()}>Kaydet</button>
            </ModalFooter>
        </Modal>
    );
}
export const PopupFenomensUpdate = ({ update, setUpdate, i, obj, array, setArray }) => {
    const [image, setImage] = useState(obj.image);
    const [name, setName] = useState(obj.name);
    const [follower, setFollower] = useState(obj.follower);
    const [followed, setFollowed] = useState(obj.followed);
    const [description, setDescription] = useState(obj.description);
    const [button, setButton] = useState(obj.button);
    const [items, setItems] = useState([...obj.items]);
    const [twitter, setTwitter] = useState({ checked: false, link: '' });
    const [instagram, setInstagram] = useState({ checked: false, link: '' });
    const [youtube, setYoutube] = useState({ checked: false, link: '' });
    const [website, setWebsite] = useState({ checked: false, link: '' });
    const [telegram, setTelegram] = useState({ checked: false, link: '' });
    const [email, setEmail] = useState({ checked: false, link: '' });

    const clearCookies = () => {
        setImage("");
        setName("");
        setFollower("");
        setFollowed("");
        setDescription("");
        setButton("");
        setItems([]);
        setTwitter({ checked: false, link: '' });
        setInstagram({ checked: false, link: '' });
        setYoutube({ checked: false, link: '' });
        setWebsite({ checked: false, link: '' });
        setTelegram({ checked: false, link: '' });
        setEmail({ checked: false, link: '' });
    }
    useEffect(() => {
        checkedControl();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSave = () => {
        let temp = [];

        if (twitter.checked) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                link: twitter.link,
                icon: "fab fa-twitter x"
            };
            temp.push(item);
        }
        if (instagram.checked) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                link: instagram.link,
                icon: "fab fa-instagram y"
            };
            temp.push(item);
        }
        if (youtube.checked) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                link: youtube.link,
                icon: "fab fa-youtube r"
            };
            temp.push(item);
        }
        if (website.checked) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                link: website.link,
                icon: "fas fa-link"
            };
            temp.push(item);
        }
        if (telegram.checked) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                link: telegram.link,
                icon: "fab fa-telegram z"
            };
            temp.push(item);
        }
        if (email.checked) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                link: email.link,
                icon: "far fa-envelope"
            };
            temp.push(item);
        }
        const data = {
            key: i + 1,
            image: image,
            name: name,
            follower: follower,
            followed: followed,
            description: description,
            button: button,
            items: temp
        }

        const a = Array.from(array);
        a[i] = data;
        setArray(a);
        setUpdate({ update: false, add: false });
        clearCookies();
    }
    const handleClose = () => {
        clearCookies();
        setUpdate({ update: false, add: false });
    }
    const checkedControl = () => {
        items.forEach(value => {
            if (value.icon === "fab fa-twitter x") {
                setTwitter({ checked: true, link: value.link });
            }
            if (value.icon === "fab fa-instagram y") {
                setInstagram({ checked: true, link: value.link });
            }
            if (value.icon === "fab fa-youtube r") {
                setYoutube({ checked: true, link: value.link });
            }
            if (value.icon === "fas fa-link") {
                setWebsite({ checked: true, link: value.link });
            }
            if (value.icon === "fab fa-telegram z") {
                setTelegram({ checked: true, link: value.link });
            }
            if (value.icon === "far fa-envelope") {
                setEmail({ checked: true, link: value.link });
            }
        });
    }
    const uploadImage = async (image) => {
        const formData = new FormData();
        formData.append("image", image);
        const header = await GenerateHeader(machineUrl, 'multipart/form-data');
        const apiPath = apiUrl + "/upload";

        const { data } = await axios.post(apiPath, formData,
            {
                headers: header,
            });

        if (data.status === 200) {
            setImage(data.response);
        }
        else {
            if (data.status === 404) {
                alert("File not found");
            }
            else {
                alert(data.message);
            }
        }
    }
    if (update) {
        return (
            <Modal
                animation
                centered
                size="md"
                show={update}
                fullscreen="md-down"
                contentClassName='member-modal-body'
                onHide={() => handleClose()}>
                <ModalHeader closeButton closeVariant='white'>
                    <ModalTitle className='modal-header'>Update Selected</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Row className='flex'>
                        <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Fenomen Profile Image</p>
                            <img loading='lazy' src={image} alt={image} style={{ width: 60, height: 60, borderRadius: 100, marginBottom: 12, display: image === '' ? 'none' : 'flex' }} />
                            <label className="custom-file-upload">
                                <input name='image' type="file" onChange={(event) => uploadImage(event.target.files[0])} />
                                <i className="fa fa-cloud-upload" /> Select
                            </label>
                        </Col>
                        <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Fenomen Name</p>
                            <input type="text" value={name === undefined ? "" : name}
                                onChange={(event) => setName(event.target.value)}
                                className='admin-input outline-reset bx-shadow' />
                        </Col>
                        <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Fenomen Followers</p>
                            <input type="text" value={follower === undefined ? "" : follower}
                                onChange={(event) => setFollower(event.target.value)}
                                className='admin-input outline-reset bx-shadow' />
                        </Col>
                        <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Fenomen Followed</p>
                            <input type="text" value={followed === undefined ? "" : followed}
                                onChange={(event) => setFollowed(event.target.value)}
                                className='admin-input outline-reset bx-shadow' />
                        </Col>
                        <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Fenomen Description</p>
                            <textarea type="text"
                                value={description === undefined ? "" : description}
                                onChange={(event) => setDescription(event.target.value)}
                                className='admin-textarea outline-reset bx-shadow' />
                        </Col>
                        <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Fenomen Button Text</p>
                            <input type="text"
                                value={button === undefined ? "" : button}
                                onChange={(event) => setButton(event.target.value)}
                                className='admin-input outline-reset bx-shadow' />
                        </Col>
                        <Col sm={10} className="form-element ">
                            <p className='admin-input-text'>Fenomen Social Media</p>
                            <div className="flex sp-btw">
                                <Form.Check type="checkbox" label="Twitter" checked={twitter.checked} onChange={event => setTwitter({ checked: event.target.checked, link: twitter.link })} />
                                <Form.Check type="checkbox" label="Instagram" checked={instagram.checked} onChange={event => setInstagram({ checked: event.target.checked, link: instagram.link })} />
                                <Form.Check type="checkbox" label="Youtube" checked={youtube.checked} onChange={event => setYoutube({ checked: event.target.checked, link: youtube.link })} />
                            </div>
                            <div className="flex sp-btw">
                                <Form.Check type="checkbox" label="Website" checked={website.checked} onChange={event => setWebsite({ checked: event.target.checked, link: website.link })} />
                                <Form.Check type="checkbox" label="Telegram" checked={telegram.checked} onChange={event => setTelegram({ checked: event.target.checked, link: telegram.link })} />
                                <Form.Check type="checkbox" label="Email" checked={email.checked} onChange={event => setEmail({ checked: event.target.checked, link: email.link })} />
                            </div>
                        </Col>
                        {
                            twitter.checked ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Fenomen Twitter Link</p>
                                <input type="text"
                                    value={twitter.link}
                                    onChange={event => setTwitter({ checked: twitter.checked, link: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : <></>
                        }
                        {
                            instagram.checked ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Fenomen Instagram Link</p>
                                <input type="text"
                                    value={instagram.link}
                                    onChange={event => setInstagram({ checked: instagram.checked, link: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : <></>
                        }
                        {
                            youtube.checked ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Fenomen Youtube Link</p>
                                <input type="text"
                                    value={youtube.link}
                                    onChange={event => setYoutube({ checked: youtube.checked, link: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : <></>
                        }
                        {
                            website.checked ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Fenomen Website Link</p>
                                <input type="text"
                                    value={website.link}
                                    onChange={event => setWebsite({ checked: website.checked, link: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : <></>
                        }
                        {
                            telegram.checked ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Fenomen Telegram Link</p>
                                <input type="text"
                                    value={telegram.link}
                                    onChange={event => setTelegram({ checked: telegram.checked, link: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : <></>
                        }
                        {
                            email.checked ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Fenomen Email Link</p>
                                <input type="text"
                                    value={email.link}
                                    onChange={event => setEmail({ checked: email.checked, link: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : <></>
                        }
                    </Row>
                </ModalBody>
                <ModalFooter className='admin-modal-footer'>
                    <button className="outline-reset modal-btn success bx-shadow" onClick={() => handleSave()}>Save Changes</button>
                    <button className="outline-reset modal-btn danger bx-shadow" onClick={() => handleClose()}>Cancel</button>
                </ModalFooter>
            </Modal>
        );
    }
    else {
        return <></>;
    }
}
export const PopupFenomensAdd = ({ update, setUpdate, array, setArray }) => {
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [follower, setFollower] = useState("");
    const [followed, setFollowed] = useState("");
    const [description, setDescription] = useState("");
    const [button, setButton] = useState("");
    const [twitter, setTwitter] = useState({ checked: false, link: '' });
    const [instagram, setInstagram] = useState({ checked: false, link: '' });
    const [youtube, setYoutube] = useState({ checked: false, link: '' });
    const [website, setWebsite] = useState({ checked: false, link: '' });
    const [telegram, setTelegram] = useState({ checked: false, link: '' });
    const [email, setEmail] = useState({ checked: false, link: '' });

    const clearCookies = () => {
        setImage("");
        setName("");
        setFollower("");
        setFollowed("");
        setDescription("");
        setButton("");
        setTwitter({ checked: false, link: '' });
        setInstagram({ checked: false, link: '' });
        setYoutube({ checked: false, link: '' });
        setWebsite({ checked: false, link: '' });
        setTelegram({ checked: false, link: '' });
        setEmail({ checked: false, link: '' });
    }
    const handleSave = () => {
        let temp = [];

        if (twitter.checked) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                link: twitter.link,
                icon: "fab fa-twitter x"
            };
            temp.push(item);
        }
        if (instagram.checked) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                link: instagram.link,
                icon: "fab fa-instagram y"
            };
            temp.push(item);
        }
        if (youtube.checked) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                link: youtube.link,
                icon: "fab fa-youtube r"
            };
            temp.push(item);
        }
        if (website.checked) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                link: website.link,
                icon: "fas fa-link"
            };
            temp.push(item);
        }
        if (telegram.checked) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                link: telegram.link,
                icon: "fab fa-telegram z"
            };
            temp.push(item);
        }
        if (email.checked) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                link: email.link,
                icon: "far fa-envelope"
            };
            temp.push(item);
        }
        const data = {
            key: array.length + 1,
            image: image,
            name: name,
            follower: follower,
            followed: followed,
            description: description,
            button: button,
            items: temp
        }

        setArray([...array, data]);
        setUpdate({ update: false, add: false });
        clearCookies();
    }
    const handleClose = () => {
        clearCookies();
        setUpdate({ update: false, add: false });
    }
    const uploadImage = async (image) => {
        const formData = new FormData();
        formData.append("image", image);
        const header = await GenerateHeader(machineUrl, 'multipart/form-data');
        const apiPath = apiUrl + "/upload";

        const { data } = await axios.post(apiPath, formData,
            {
                headers: header,
            });

        if (data.status === 200) {
            setImage(data.response);
        }
        else {
            if (data.status === 404) {
                alert("File not found");
            }
            else {
                alert(data.message);
            }
        }
    }

    if (update) {
        return (
            <Modal
                animation
                centered
                size="md"
                show={update}
                fullscreen="md-down"
                contentClassName='member-modal-body'
                onHide={() => handleClose()}>
                <ModalHeader closeButton closeVariant='white'>
                    <ModalTitle className='modal-header'>Update Selected</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Row className='flex'>
                        <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Fenomen Profile Image</p>
                            <img loading='lazy' src={image} alt={image} style={{ width: 60, height: 60, borderRadius: 100, marginBottom: 12, display: image === '' ? 'none' : 'flex' }} />
                            <label className="custom-file-upload">
                                <input name='image' type="file" onChange={(event) => uploadImage(event.target.files[0])} />
                                <i className="fa fa-cloud-upload" /> Select
                            </label>
                        </Col>
                        <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Fenomen Name</p>
                            <input type="text" value={name === undefined ? "" : name}
                                onChange={(event) => setName(event.target.value)}
                                className='admin-input outline-reset bx-shadow' />
                        </Col>
                        <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Fenomen Followers</p>
                            <input type="text" value={follower === undefined ? "" : follower}
                                onChange={(event) => setFollower(event.target.value)}
                                className='admin-input outline-reset bx-shadow' />
                        </Col>
                        <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Fenomen Followed</p>
                            <input type="text" value={followed === undefined ? "" : followed}
                                onChange={(event) => setFollowed(event.target.value)}
                                className='admin-input outline-reset bx-shadow' />
                        </Col>
                        <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Fenomen Description</p>
                            <textarea type="text"
                                value={description === undefined ? "" : description}
                                onChange={(event) => setDescription(event.target.value)}
                                className='admin-textarea outline-reset bx-shadow' />
                        </Col>
                        <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Fenomen Button Text</p>
                            <input type="text"
                                value={button === undefined ? "" : button}
                                onChange={(event) => setButton(event.target.value)}
                                className='admin-input outline-reset bx-shadow' />
                        </Col>
                        <Col sm={10} className="form-element ">
                            <p className='admin-input-text'>Fenomen Social Media</p>
                            <div className="flex sp-btw">
                                <Form.Check type="checkbox" label="Twitter" checked={twitter.checked} onChange={event => setTwitter({ checked: event.target.checked, link: twitter.link })} />
                                <Form.Check type="checkbox" label="Instagram" checked={instagram.checked} onChange={event => setInstagram({ checked: event.target.checked, link: instagram.link })} />
                                <Form.Check type="checkbox" label="Youtube" checked={youtube.checked} onChange={event => setYoutube({ checked: event.target.checked, link: youtube.link })} />
                            </div>
                            <div className="flex sp-btw center">
                                <Form.Check type="checkbox" label="Website" checked={website.checked} onChange={event => setWebsite({ checked: event.target.checked, link: website.link })} />
                                <Form.Check type="checkbox" label="Telegram" checked={telegram.checked} onChange={event => setTelegram({ checked: event.target.checked, link: telegram.link })} />
                                <Form.Check type="checkbox" label="Email" checked={email.checked} onChange={event => setEmail({ checked: event.target.checked, link: email.link })} />
                            </div>
                        </Col>
                        {
                            twitter.checked ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Fenomen Twitter Link</p>
                                <input type="text"
                                    value={twitter.link}
                                    onChange={event => setTwitter({ checked: twitter.checked, link: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : <></>
                        }
                        {
                            instagram.checked ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Fenomen Instagram Link</p>
                                <input type="text"
                                    value={instagram.link}
                                    onChange={event => setInstagram({ checked: instagram.checked, link: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : <></>
                        }
                        {
                            youtube.checked ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Fenomen Youtube Link</p>
                                <input type="text"
                                    value={youtube.link}
                                    onChange={event => setYoutube({ checked: youtube.checked, link: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : <></>
                        }
                        {
                            website.checked ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Fenomen Website Link</p>
                                <input type="text"
                                    value={website.link}
                                    onChange={event => setWebsite({ checked: website.checked, link: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : <></>
                        }
                        {
                            telegram.checked ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Fenomen Telegram Link</p>
                                <input type="text"
                                    value={telegram.link}
                                    onChange={event => setTelegram({ checked: telegram.checked, link: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : <></>
                        }
                        {
                            email.checked ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Fenomen Email Link</p>
                                <input type="text"
                                    value={email.link}
                                    onChange={event => setYoutube({ checked: email.checked, link: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : <></>
                        }
                    </Row>
                </ModalBody>
                <ModalFooter className='admin-modal-footer'>
                    <button className="outline-reset modal-btn success bx-shadow" onClick={() => handleSave()}>Save Changes</button>
                    <button className="outline-reset modal-btn danger bx-shadow" onClick={() => handleClose()}>Cancel</button>
                </ModalFooter>
            </Modal>
        );
    }
    else {
        return <></>;
    }
}
export const PopupPricingCardUpdate = ({ update, setUpdate, i, array, setArray }) => {
    const [promotion, setPromotion] = useState(array[i - 1].promotion);
    const [icon, setIcon] = useState(array[i - 1].icon);
    const [packet, setPacket] = useState(array[i - 1].packet);
    const [button, setButton] = useState(array[i - 1].button);

    const handleSave = () => {
        const arrItem = {
            key: i,
            promotion: promotion,
            icon: icon,
            packet: packet,
            button: button,
            items: array[i - 1].items
        }
        const arr = Array.from(array);
        arr[i - 1] = arrItem;
        setArray(arr);
        setUpdate(false);
    }
    return (
        <Modal
            animation
            centered
            size="md"
            show={update}
            fullscreen="md-down"
            contentClassName='member-modal-body'
            onHide={() => setUpdate({ show: false, index: -1 })}>
            <ModalHeader closeButton closeVariant='white'>
                <ModalTitle className='modal-header'>Update Selected</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Row className='flex'>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Promotion </p>
                        <input type="text" value={promotion}
                            onChange={(event) => setPromotion(event.target.value)}
                            placeholder="Promotion"
                            className='admin-input outline-reset bx-shadow' />
                    </Col>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Packet Icon</p>
                        <input type="text" value={icon}
                            onChange={(event) => setIcon(event.target.value)}
                            placeholder="Icon"
                            className='admin-input outline-reset bx-shadow' />
                    </Col>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Packet Name</p>
                        <input type="text"
                            value={packet}
                            onChange={(event) => setPacket(event.target.value)}
                            placeholder="Packet Name"
                            className='admin-input outline-reset bx-shadow' />
                    </Col>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Packet Button</p>
                        <input type="text"
                            value={button}
                            onChange={(event) => setButton(event.target.value)}
                            placeholder="Button Text"
                            className='admin-input outline-reset bx-shadow' />
                    </Col>
                </Row>
            </ModalBody>
            <ModalFooter className='admin-modal-footer'>
                <button className="outline-reset modal-btn danger bx-shadow" onClick={() => setUpdate({ show: false, index: -1 })}>Iptal Et</button>
                <button className="outline-reset modal-btn success bx-shadow" onClick={() => handleSave()}>Kaydet</button>
            </ModalFooter>
        </Modal>
    );
}
export const PopupPricingCardAdd = ({ update, setUpdate, array, setArray }) => {
    const [promotion, setPromotion] = useState("");
    const [icon, setIcon] = useState("");
    const [packet, setPacket] = useState("");
    const [button, setButton] = useState("");

    const handleSave = () => {
        const arrItem = {
            key: array.length + 1,
            promotion: promotion,
            icon: icon,
            packet: packet,
            button: button,
            items: []
        };

        setArray([...array, arrItem]);
        setUpdate(false);
    }
    return (
        <Modal
            animation
            centered
            size="md"
            show={update}
            fullscreen="md-down"
            contentClassName='member-modal-body'
            onHide={() => setUpdate(false)}>
            <ModalHeader closeButton closeVariant='white'>
                <ModalTitle className='modal-header'>Add Package Item</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Row className='flex'>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Package Promotion</p>
                        <input type="text" value={promotion}
                            onChange={(event) => setPromotion(event.target.value)}
                            placeholder="Promotion"
                            className='admin-input outline-reset bx-shadow' />
                    </Col>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Packet Icon</p>
                        <input type="text" value={icon}
                            onChange={(event) => setIcon(event.target.value)}
                            placeholder="Icon"
                            className='admin-input outline-reset bx-shadow' />
                    </Col>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Packet Name</p>
                        <input type="text"
                            value={packet}
                            onChange={(event) => setPacket(event.target.value)}
                            placeholder="Packet Name"
                            className='admin-input outline-reset bx-shadow' />
                    </Col>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Packet Button</p>
                        <input type="text"
                            value={button}
                            onChange={(event) => setButton(event.target.value)}
                            placeholder="Button Text"
                            className='admin-input outline-reset bx-shadow' />
                    </Col>
                </Row>
            </ModalBody>
            <ModalFooter className='admin-modal-footer'>
                <button className="outline-reset modal-btn danger bx-shadow" onClick={() => setUpdate(false)}>Cancel</button>
                <button className="outline-reset modal-btn success bx-shadow" onClick={() => handleSave()}>Save</button>
            </ModalFooter>
        </Modal>
    );
}
export const PopupPricingCardAddSubItem = ({ update, setUpdate, array, setArray, i }) => {
    const [icon, setIcon] = useState("");
    const [name, setName] = useState("");

    const handleSave = () => {
        const mainArr = Array.from(array);
        const target = mainArr[i].items;
        const arrItem = {
            key: target.length + 1,
            icon: icon,
            name: name
        }
        target.push(arrItem);

        mainArr[i].items = target;

        setArray(mainArr);
        setUpdate(false);
    }
    return (
        <Modal
            animation
            centered
            size="md"
            show={update}
            fullscreen="md-down"
            contentClassName='member-modal-body'
            onHide={() => setUpdate(false)}>
            <ModalHeader closeButton closeVariant='white'>
                <ModalTitle className='modal-header'>Add Sublist Item</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Row className='flex'>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Sublist Icon</p>
                        <input type="text" value={icon}
                            onChange={(event) => setIcon(event.target.value)}
                            placeholder="Icon"
                            className='admin-input outline-reset bx-shadow' />
                    </Col>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Sublist Option</p>
                        <input type="text" value={name}
                            onChange={(event) => setName(event.target.value)}
                            placeholder="Option"
                            className='admin-input outline-reset bx-shadow' />
                    </Col>
                </Row>
            </ModalBody>
            <ModalFooter className='admin-modal-footer'>
                <button className="outline-reset modal-btn danger bx-shadow" onClick={() => setUpdate(false)}>Iptal Et</button>
                <button className="outline-reset modal-btn success bx-shadow" onClick={() => handleSave()}>Kaydet</button>
            </ModalFooter>
        </Modal>
    );
}
export const PopupPricingCardUpdateSubItem = ({ update, setUpdate, array, i, target, setArray }) => {
    const [icon, setIcon] = useState(array[i].items[target - 1].icon);
    const [name, setName] = useState(array[i].items[target - 1].name);

    const handleSave = () => {
        const arrItem = {
            key: target,
            icon: icon,
            name: name,
        }
        const arr = Array.from(array);
        arr[i].items[target - 1] = arrItem;

        setArray(arr);
        setUpdate(false);
    }
    return (
        <Modal
            animation
            centered
            size="md"
            show={update}
            fullscreen="md-down"
            contentClassName='member-modal-body'
            onHide={() => setUpdate({ show: false, target: -1 })}>
            <ModalHeader closeButton closeVariant='white'>
                <ModalTitle className='modal-header'>Update Selected Sublist Item</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Row className='flex'>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Sublist Icon</p>
                        <input type="text" value={icon}
                            onChange={(event) => setIcon(event.target.value)}
                            placeholder="Icon"
                            className='admin-input outline-reset bx-shadow' />
                    </Col>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Sublist Option</p>
                        <input type="text" value={name}
                            onChange={(event) => setName(event.target.value)}
                            placeholder="Option"
                            className='admin-input outline-reset bx-shadow' />
                    </Col>
                </Row>
            </ModalBody>
            <ModalFooter className='admin-modal-footer'>
                <button className="outline-reset modal-btn danger bx-shadow" onClick={() => setUpdate({ show: false, target: -1 })}>Iptal Et</button>
                <button className="outline-reset modal-btn success bx-shadow" onClick={() => handleSave()}>Kaydet</button>
            </ModalFooter>
        </Modal>
    );
}
export const PopupIconCollectionAdd = ({ update, setUpdate, array, setArray }) => {
    const [id, setId] = useState('');
    const [icon, setIcon] = useState('');

    const handleSave = () => {
        const arrItem = {
            key: array.length + 1,
            id: id,
            icon: icon,
        }

        setArray([...array, arrItem]);
        setUpdate(false);
    }
    return (
        <Modal
            animation
            centered
            size="md"
            show={update}
            fullscreen="md-down"
            contentClassName='member-modal-body'
            onHide={() => setUpdate(false)}>
            <ModalHeader closeButton closeVariant='white'>
                <ModalTitle className='modal-header'>Update Selected</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Row className='flex'>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Social Media Name</p>
                        <input type="text" value={id}
                            onChange={(event) => setId(event.target.value)}
                            placeholder="Id"
                            className='admin-input outline-reset bx-shadow' />
                    </Col>
                    <Col sm={10} className="form-element flex colm">
                        <p className='admin-input-text'>Social Media Icon</p>
                        <input type="text" value={icon}
                            onChange={(event) => setIcon(event.target.value)}
                            placeholder="Icon"
                            className='admin-input outline-reset bx-shadow' />
                    </Col>
                </Row>
            </ModalBody>
            <ModalFooter className='admin-modal-footer'>
                <button className="outline-reset modal-btn danger bx-shadow" onClick={() => setUpdate(false)}>Cancel</button>
                <button className="outline-reset modal-btn success bx-shadow" onClick={() => handleSave()}>Update</button>
            </ModalFooter>
        </Modal>
    );
}
export const PopupDevComUpdate = ({ update, setUpdate, i, obj, array, setArray }) => {
    const [image, setImage] = useState(obj.image);
    const [name, setName] = useState(obj.name);
    const [description, setDescription] = useState(obj.description);
    const [button, setButton] = useState(obj.button);
    const [items, setItems] = useState([...obj.items]);
    const [twitter, setTwitter] = useState({ checked: false, link: '' });
    const [instagram, setInstagram] = useState({ checked: false, link: '' });
    const [youtube, setYoutube] = useState({ checked: false, link: '' });
    const [website, setWebsite] = useState({ checked: false, link: '' });
    const [telegram, setTelegram] = useState({ checked: false, link: '' });
    const [email, setEmail] = useState({ checked: false, link: '' });

    const clearCookies = () => {
        setImage("");
        setName("");
        setDescription("");
        setButton("");
        setItems([]);
        setTwitter({ checked: false, link: '' });
        setInstagram({ checked: false, link: '' });
        setYoutube({ checked: false, link: '' });
        setWebsite({ checked: false, link: '' });
        setTelegram({ checked: false, link: '' });
        setEmail({ checked: false, link: '' });
    }
    useEffect(() => {
        checkedControl();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSave = () => {
        let temp = [];

        if (twitter.checked) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                link: twitter.link,
                icon: "fab fa-twitter x"
            };
            temp.push(item);
        }
        if (instagram.checked) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                link: instagram.link,
                icon: "fab fa-instagram y"
            };
            temp.push(item);
        }
        if (youtube.checked) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                link: youtube.link,
                icon: "fab fa-youtube r"
            };
            temp.push(item);
        }
        if (website.checked) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                name: "website",
                socialMediaLink: website.link,
                socialMediaIcon: "fas fa-link"
            };
            temp.push(item);
        }
        if (telegram.checked) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                name: "telegram",
                socialMediaLink: telegram.link,
                socialMediaIcon: "fab fa-telegram z"
            };
            temp.push(item);
        }
        if (email.checked) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                name: "email",
                socialMediaLink: email.link,
                socialMediaIcon: "far fa-envelope"
            };
            temp.push(item);
        }
        const data = {
            key: i + 1,
            image: image,
            name: name,
            description: description,
            button: button,
            items: temp
        }

        const a = Array.from(array);
        a[i] = data;
        setArray(a);
        clearCookies();
        setUpdate({ update: false, add: false });
    }
    const handleClose = () => {
        clearCookies();
        setUpdate({ update: false, add: false });
    }
    const checkedControl = () => {
        items.forEach(value => {
            if (value.socialMediaIcon === "fab fa-twitter x") {
                setTwitter({ checked: true, link: value.socialMediaLink });
            }
            if (value.socialMediaIcon === "fab fa-instagram y") {
                setInstagram({ checked: true, link: value.socialMediaLink });
            }
            if (value.socialMediaIcon === "fab fa-youtube r") {
                setYoutube({ checked: true, link: value.socialMediaLink });
            }
            if (value.socialMediaIcon === "fas fa-link") {
                setWebsite({ checked: true, link: value.socialMediaLink });
            }
            if (value.socialMediaIcon === "fab fa-telegram z") {
                setTelegram({ checked: true, link: value.socialMediaLink });
            }
            if (value.socialMediaIcon === "far fa-envelope") {
                setEmail({ checked: true, link: value.socialMediaLink });
            }
        });
    }
    const uploadImage = async (image) => {
        const formData = new FormData();
        formData.append("image", image);
        const header = await GenerateHeader(machineUrl, 'multipart/form-data');
        const apiPath = apiUrl + "/upload";

        const { data } = await axios.post(apiPath, formData,
            {
                headers: header,
            });

        if (data.status === 200) {
            setImage(data.response);
        }
        else {
            if (data.status === 404) {
                alert("File Not Found");
            }
            else {
                alert(data.message);
            }
        }
    }
    if (update) {
        return (
            <Modal
                animation
                centered
                size="md"
                show={update}
                fullscreen="md-down"
                contentClassName='member-modal-body'
                onHide={() => handleClose()}>
                <ModalHeader closeButton closeVariant='white'>
                    <ModalTitle className='modal-header'>Update Selected</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Row className='flex'>
                        <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Profile Image</p>
                            <img loading='lazy' src={image} alt={image} style={{ width: 60, height: 60, borderRadius: 100, marginBottom: 12, display: image === '' ? 'none' : 'flex' }} />
                            <label className="custom-file-upload">
                                <input name='image' type="file" onChange={(event) => uploadImage(event.target.files[0])} />
                                <i className="fa fa-cloud-upload" /> Select
                            </label>
                        </Col>
                        <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Name</p>
                            <input type="text" value={name === undefined ? "" : name}
                                onChange={(event) => setName(event.target.value)}
                                placeholder="Name"
                                className='admin-input outline-reset bx-shadow' />
                        </Col>
                        <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Description</p>
                            <textarea type="text"
                                value={description === undefined ? "" : description}
                                onChange={(event) => setDescription(event.target.value)}
                                placeholder="Description"
                                className='admin-textarea outline-reset bx-shadow' />
                        </Col>
                        <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Button Text</p>
                            <input type="text"
                                value={button === undefined ? "" : button}
                                onChange={(event) => setButton(event.target.value)}
                                placeholder="Button Text"
                                className='admin-input outline-reset bx-shadow' />
                        </Col>
                        <Col sm={10} className="form-element ">
                            <p className='admin-input-text'>Social Media</p>
                            <div className="flex sp-btw">
                                <Form.Check type="checkbox" label="Twitter" checked={twitter.checked} onChange={event => setTwitter({ checked: event.target.checked, link: twitter.link })} />
                                <Form.Check type="checkbox" label="Instagram" checked={instagram.checked} onChange={event => setInstagram({ checked: event.target.checked, link: instagram.link })} />
                                <Form.Check type="checkbox" label="Youtube" checked={youtube.checked} onChange={event => setYoutube({ checked: event.target.checked, link: youtube.link })} />
                            </div>
                            <div className="flex sp-btw">
                                <Form.Check type="checkbox" label="Website" checked={website.checked} onChange={event => setWebsite({ checked: event.target.checked, link: website.link })} />
                                <Form.Check type="checkbox" label="Telegram" checked={telegram.checked} onChange={event => setTelegram({ checked: event.target.checked, link: telegram.link })} />
                                <Form.Check type="checkbox" label="Email" checked={email.checked} onChange={event => setEmail({ checked: event.target.checked, link: email.link })} />
                            </div>
                        </Col>
                        {
                            twitter.checked ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Twitter Link</p>
                                <input type="text"
                                    value={twitter.link}
                                    placeholder="Twitter Link"
                                    onChange={event => setTwitter({ checked: twitter.checked, link: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : <></>
                        }
                        {
                            instagram.checked ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Instagram Link</p>
                                <input type="text"
                                    value={instagram.link}
                                    placeholder="Instagram Link"
                                    onChange={event => setInstagram({ checked: instagram.checked, link: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : <></>
                        }
                        {
                            youtube.checked ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Youtube Link</p>
                                <input type="text"
                                    value={youtube.link}
                                    placeholder="Youtube Link"
                                    onChange={event => setYoutube({ checked: youtube.checked, link: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : <></>
                        }
                        {
                            website.checked ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Website Link</p>
                                <input type="text"
                                    value={website.link}
                                    placeholder="Website Link"
                                    onChange={event => setWebsite({ checked: website.checked, link: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : <></>
                        }
                        {
                            telegram.checked ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Telegram Link</p>
                                <input type="text"
                                    value={telegram.link}
                                    placeholder="Telegram Link"
                                    onChange={event => setTelegram({ checked: telegram.checked, link: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : <></>
                        }
                        {
                            email.checked ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Email Link</p>
                                <input type="text"
                                    value={email.link}
                                    placeholder="Email Link"
                                    onChange={event => setEmail({ checked: email.checked, link: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : <></>
                        }
                    </Row>
                </ModalBody>
                <ModalFooter className='admin-modal-footer'>
                    <button className="outline-reset modal-btn success bx-shadow" onClick={() => handleSave()}>Save Changes</button>
                    <button className="outline-reset modal-btn danger bx-shadow" onClick={() => handleClose()}>Cancel</button>
                </ModalFooter>
            </Modal>
        );
    }
    else {
        return <></>;
    }
}
export const PopupDevComAdd = ({ update, setUpdate, array, setArray }) => {
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [button, setButton] = useState("");
    const [twitter, setTwitter] = useState({ checked: false, link: '' });
    const [instagram, setInstagram] = useState({ checked: false, link: '' });
    const [youtube, setYoutube] = useState({ checked: false, link: '' });
    const [website, setWebsite] = useState({ checked: false, link: '' });
    const [telegram, setTelegram] = useState({ checked: false, link: '' });
    const [email, setEmail] = useState({ checked: false, link: '' });

    const clearCookies = () => {
        setImage("");
        setName("");
        setDescription("");
        setButton("");
        setTwitter({ checked: false, link: '' });
        setInstagram({ checked: false, link: '' });
        setYoutube({ checked: false, link: '' });
        setWebsite({ checked: false, link: '' });
        setTelegram({ checked: false, link: '' });
        setEmail({ checked: false, link: '' });
    }
    const handleSave = () => {
        let temp = [];

        if (twitter.checked) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                link: twitter.link,
                icon: "fab fa-twitter x"
            };
            temp.push(item);
        }
        if (instagram.checked) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                link: instagram.link,
                icon: "fab fa-instagram y"
            };
            temp.push(item);
        }
        if (youtube.checked) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                link: youtube.link,
                icon: "fab fa-youtube r"
            };
            temp.push(item);
        }
        if (website.checked) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                link: website.link,
                icon: "fas fa-link"
            };
            temp.push(item);
        }
        if (telegram.checked) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                link: telegram.link,
                icon: "fab fa-telegram z"
            };
            temp.push(item);
        }
        if (email.checked) {
            const item = {
                key: temp.length !== 0 ? temp.length + 1 : 1,
                link: email.link,
                icon: "far fa-envelope"
            };
            temp.push(item);
        }
        const data = {
            key: array.length + 1,
            image: image,
            name: name,
            description: description,
            button: button,
            items: temp
        }

        setArray([...array, data]);
        clearCookies();
        setUpdate({ update: false, add: false });
    }
    const handleClose = () => {
        clearCookies();
        setUpdate({ update: false, add: false });
    }
    const uploadImage = async (image) => {
        const formData = new FormData();
        formData.append("image", image);
        const header = await GenerateHeader(machineUrl, 'multipart/form-data');
        const apiPath = apiUrl + "/upload";

        const { data } = await axios.post(apiPath, formData,
            {
                headers: header,
            });

        if (data.status === 200) {
            setImage(data.response);
        }
        else {
            if (data.status === 404) {
                alert("File not found");
            }
            else {
                alert(data.message);
            }
        }
    }

    if (update) {
        return (
            <Modal
                animation
                centered
                size="md"
                show={update}
                fullscreen="md-down"
                contentClassName='member-modal-body'
                onHide={() => handleClose()}>
                <ModalHeader closeButton closeVariant='white'>
                    <ModalTitle className='modal-header'>Update Selected</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Row className='flex'>
                        <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Profile Image</p>
                            <img loading='lazy' src={image} alt={image} style={{ width: 60, height: 60, borderRadius: 100, marginBottom: 12, display: image === '' ? 'none' : 'flex' }} />
                            <label className="custom-file-upload">
                                <input name='image' type="file" onChange={(event) => uploadImage(event.target.files[0])} />
                                <i className="fa fa-cloud-upload" /> Select
                            </label>
                        </Col>
                        <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Name</p>
                            <input type="text" value={name === undefined ? "" : name}
                                onChange={(event) => setName(event.target.value)}
                                placeholder="Name"
                                className='admin-input outline-reset bx-shadow' />
                        </Col>
                        <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Description</p>
                            <textarea type="text"
                                value={description === undefined ? "" : description}
                                placeholder="Description"
                                onChange={(event) => setDescription(event.target.value)}
                                className='admin-textarea outline-reset bx-shadow' />
                        </Col>
                        <Col sm={10} className="form-element flex colm">
                            <p className='admin-input-text'>Button Text</p>
                            <input type="text"
                                value={button === undefined ? "" : button}
                                placeholder="Button Text"
                                onChange={(event) => setButton(event.target.value)}
                                className='admin-input outline-reset bx-shadow' />
                        </Col>
                        <Col sm={10} className="form-element ">
                            <p className='admin-input-text'>Social Media</p>
                            <div className="flex sp-btw">
                                <Form.Check type="checkbox" label="Twitter" checked={twitter.checked} onChange={event => setTwitter({ checked: event.target.checked, link: twitter.link })} />
                                <Form.Check type="checkbox" label="Instagram" checked={instagram.checked} onChange={event => setInstagram({ checked: event.target.checked, link: instagram.link })} />
                                <Form.Check type="checkbox" label="Youtube" checked={youtube.checked} onChange={event => setYoutube({ checked: event.target.checked, link: youtube.link })} />
                            </div>
                            <div className="flex sp-btw center">
                                <Form.Check type="checkbox" label="Website" checked={website.checked} onChange={event => setWebsite({ checked: event.target.checked, link: website.link })} />
                                <Form.Check type="checkbox" label="Telegram" checked={telegram.checked} onChange={event => setTelegram({ checked: event.target.checked, link: telegram.link })} />
                                <Form.Check type="checkbox" label="Email" checked={email.checked} onChange={event => setEmail({ checked: event.target.checked, link: email.link })} />
                            </div>
                        </Col>
                        {
                            twitter.checked ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Twitter Link</p>
                                <input type="text"
                                    value={twitter.link}
                                    placeholder="Twitter Link"
                                    onChange={event => setTwitter({ checked: twitter.checked, link: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : <></>
                        }
                        {
                            instagram.checked ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Instagram Link</p>
                                <input type="text"
                                    value={instagram.link}
                                    placeholder="Instagram Link"
                                    onChange={event => setInstagram({ checked: instagram.checked, link: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : <></>
                        }
                        {
                            youtube.checked ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Youtube Link</p>
                                <input type="text"
                                    value={youtube.link}
                                    placeholder="Youtube Link"
                                    onChange={event => setYoutube({ checked: youtube.checked, link: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : <></>
                        }
                        {
                            website.checked ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Website Link</p>
                                <input type="text"
                                    value={website.link}
                                    placeholder="Website Link"
                                    onChange={event => setWebsite({ checked: website.checked, link: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : <></>
                        }
                        {
                            telegram.checked ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Telegram Link</p>
                                <input type="text"
                                    value={telegram.link}
                                    placeholder="Telegram Link"
                                    onChange={event => setTelegram({ checked: telegram.checked, link: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : <></>
                        }
                        {
                            email.checked ? <Col sm={10} className="form-element flex colm">
                                <p className='admin-input-text'>Email Link</p>
                                <input type="text"
                                    value={email.link}
                                    placeholder="Email Link"
                                    onChange={event => setEmail({ checked: email.checked, link: event.target.value })}
                                    className='admin-input outline-reset bx-shadow' />
                            </Col> : <></>
                        }
                    </Row>
                </ModalBody>
                <ModalFooter className='admin-modal-footer'>
                    <button className="outline-reset modal-btn success bx-shadow" onClick={() => handleSave()}>Save Changes</button>
                    <button className="outline-reset modal-btn danger bx-shadow" onClick={() => handleClose()}>Cancel</button>
                </ModalFooter>
            </Modal>
        );
    }
    else {
        return <></>;
    }
}
