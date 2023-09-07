import React, { useState, useRef } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import { toast } from 'react-toastify';

export const SearchInput = ({ config, notify }) => {
    const [r, setR] = useState([...config.items]);
    const [c, setC] = useState([]);
    const [onSbmt, setOnSbmt] = useState(false);
    const suggestRef = useRef(null);

    const handleInputChange = (event) => {
        const target = event.target.value;
        if (target === "" || target.length === 1) {
            suggestRef.current.classList.remove("fadeIn");
            suggestRef.current.classList.add("fadeOut");
            if (c.length === 0) {
                setR([...config.items]);
            }
            else {
                setR([...config.items].filter(val => c.find(va => va.name !== val.name)));
            }
            suggestRef.current.classList.remove("show-suggestion");
        }
        if (target.length > 1 && target.length !== 0) {
            setR(r.filter(value => value.name.toLowerCase() === target.toLowerCase() || value.name.toLowerCase().includes(target.toLowerCase())))
            if (!suggestRef.current.classList.contains("fadeIn")) {
                suggestRef.current.classList.remove("fadeOut");
                suggestRef.current.classList.add("fadeIn");
                suggestRef.current.classList.add("show-suggestion");
            }
        }
    }

    const handleCollection = (action, image, keyV, name) => {
        if (action === "add") {
            setC([...c, { image: image, key: keyV, name: name }]);
            setR(r.filter(val => val.key !== keyV));
        }
        if (action === "remove") {
            setC(c.filter(x => x.key !== keyV));
            setR([...r, [...config.items].find(val => val.key === keyV)]);
        }
    }
    const SuggestView = ({ fenomen }) => {
        return (
            <button className='suggest-container outline-reset' onClick={() => handleCollection("add", fenomen.image, fenomen.key, fenomen.name)}>
                <div className="suggest-item flex">
                    <Col md={2} lg={2} xs={2} sm={2} className="flex">
                        <img src={fenomen.image}
                            loading="lazy" alt={"img-search"}
                        />
                    </Col>
                    <Col md={10} lg={10} xs={10} sm={10}>
                        <p>{fenomen.name}</p>
                    </Col>
                </div>
            </button>
        );
    }

    const ChipView = ({ fenomen }) => {
        return (
            <div className="outline-reset chip-btn bx-shadow">
                <img src={fenomen.image}
                    loading="lazy" alt={"img-search"}
                />
                <button className='outline-reset remove-btn' onClick={() => handleCollection("remove", fenomen.image, fenomen.key)}>x</button>
            </div>
        );
    }
    const notifyOffer = async () => {
        setOnSbmt(true);
        if (c.length !== 0) {
            notify(c);
        }
        else {
            toast.error("Your list is empty");
        }

        setTimeout(() => {
            setOnSbmt(false);
        }, 2000);
    }
    return (
        <Row style={{ position: 'relative', zIndex: 24, marginBottom: 150 }}>
            <Col className="header-text">
                <p style={{ color: 'white' }}>Choose Multiple</p>
            </Col>
            <Col md={12} sm={12} xs={12} lg={12}>
                <div className="search-input-container flex">
                    <Row className="selected-container center" xxl={4} lg={3} md={2} xs={1} sm={2}>
                        {
                            c.map((value, index) => {
                                return (
                                    <Col className="flex" key={"chip-of-" + index}>
                                        <ChipView fenomen={value} />
                                    </Col>
                                );
                            })
                        }
                    </Row>
                    <input
                        type="search"
                        className='search-input outline-reset bx-shadow'
                        placeholder='Write the fenomen here'
                        onChange={event => handleInputChange(event)} />
                    <div className="bottom-suggestion animated" ref={suggestRef}>
                        {
                            r.map((val, index) => {
                                return (
                                    <SuggestView fenomen={val} key={"search-result-of" + index} />
                                );

                            })
                        }
                    </div>

                </div>
            </Col>
            <Col md={12} sm={12} xs={12} lg={12}>
                <div className="fenomen-request center">
                    <button
                        className='offer-btn outline-reset bx-shadow'
                        onClick={() => notifyOffer()}
                        disabled={onSbmt}>
                        {onSbmt ? <Spinner animation="border" /> : "Get Offer"}
                    </button>
                </div>
            </Col>
        </Row>
    );
}
