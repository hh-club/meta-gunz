import React from 'react';
import { Container, Row, Col, Image, Alert } from 'react-bootstrap';
import Header from './Header';
import HR from './Divider';

import './Specs.css'

import common from '../images/rarity_icons/common.png';
import uncommon from '../images/rarity_icons/uncommon.png';
import rare from '../images/rarity_icons/rare.png';
import epic from '../images/rarity_icons/epic.png';
import legendary from '../images/rarity_icons/legendary.png';
import mythic from '../images/rarity_icons/mythic.png';

const Rarity = (props) => {
    return (
        <>

            <Alert variant="none" style={{ marginBottom: 0 }} text="white">
                <Row>
                    <Col>
                        <h1 className="rarity-heading" style={{ color: `${props.c}` }}>{props.header}</h1>
                        <p className="rarity-n">{props.n}</p>
                    </Col>
                    <Col>
                        <Image style={{ maxWidth: "100%", borderRadius: "3%" }} src={props.src} />
                    </Col>
                </Row>
            </Alert>
        </>
    )
}

const Specs = () => {
    return (
        <>
            <HR />

            <Container id="Specs" className="section-container">
                <Header
                    heading="Rarity"
                    content={[]}
                />
                <Row>
                    <Col>
                        <Rarity
                            header="Common"
                            n="2747/8888"
                            c="#ffffff"
                            src={common}
                        />
                    </Col>
                    <Col>
                        <Rarity
                            header="Uncommon"
                            n="2271/8888"
                            c="#72f74f"
                            src={uncommon}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Rarity
                            header="Rare"
                            n="1769/8888"
                            c="#183ff6"
                            src={rare}
                        />
                    </Col>
                    <Col>
                        <Rarity
                            header="Epic"
                            n="1100/8888"
                            c="#811df3"
                            src={epic}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Rarity
                            header="Legendary"
                            n="607/8888"
                            c="#f5cc47"
                            src={legendary}
                        />
                    </Col>
                    <Col>
                        <Rarity
                            header="Mythic"
                            n="272/8888"
                            c="#e7366b"
                            src={mythic}
                        />
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Specs;