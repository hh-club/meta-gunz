import React from 'react';
import './Welcome.css';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

import hedgehogs from '../images/hedgehogs.gif';

import discord from '../images/navbar_icons/discord-line.png';

import Header from './Header';
import HR from './Divider';

const Welcome = () => {
    return (
        <>
            <HR />
            <Container id="About" className="section-container">
                <Row>
                    <Col xs={12} md={8}>
                        <Header heading="Welcome to the MetaGunz"
                            content={["MetaGunz is an NFT collection sold on the Polygon Blockchain and consists of 8,888 unique combinations of Gunz. Every gun is digitally drawn and assembled by code, no two Gunz are the same.",
                                "Development of the MetaGunz Game will start after launch date where holders will be able to play, earn and stake $GUNZ token in the Metaverse. Team up with other holders and collect in-game items and rewards."]}
                        />
                        <Button
                            href="https://discord.gg/BQApfxqAcW"
                            className="disc-btn"
                        >
                            <img
                                src={discord}
                                width="20"
                                height="20"
                                className="d-inline-block align-center"
                                alt="Discord Link"
                            />
                            <strong> DISCORD</strong>
                        </Button>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image className="top-row-img" src={hedgehogs} />
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default Welcome;