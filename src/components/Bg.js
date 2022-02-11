import React from 'react';
import { Image, Container, Button } from 'react-bootstrap';
import bg_1 from '../images/sewer_concept.png';
import './Bg.css';

const Bg = () => {
    return (
        <>
            <Container className="cont section-container" style={{ paddingTop: 0 }}>
                <Image style={{ width: "100%" }} src={bg_1} />
                <Image style={{ width: "100%" }} src={bg_1} />
                <div class="centered">
                    <Container>
                        <h1 className="heading-2"
                            style={{ paddingBottom: "3vh" }}>
                            MetaGunz
                        </h1>
                        <Button
                            href="https://discord.gg/BQApfxqAcW"
                            className="disc-btn"
                            variant="secondary" size="sm"
                        >
                            {/* <img
                                        src={discord}
                                        width="20%"
                                        height="20%"
                                        className="d-inline-block align-center"
                                        alt="Discord Link"
                                    /> */}
                            Discord
                        </Button>

                        <Button
                            href="https://opensea.io/collection/metagunz-official"
                            className="os-btn"
                            variant="secondary" size="sm"
                        >
                            {/* <img
                                        src={os}
                                        width="20%"
                                        height="20%"
                                        className="d-inline-block align-center"
                                        alt="OpenSea Link"
                                    /> */}
                            OpenSea
                        </Button>
                    </Container>
                </div>
                <div class="mid">
                    <Button
                        href="https://opensea.io/collection/metagunz-official"
                        className="openSEA"
                        variant="secondary" size="sm"
                    >
                        {/* <img
                                        src={os}
                                        width="20%"
                                        height="20%"
                                        className="d-inline-block align-center"
                                        alt="OpenSea Link"
                                    /> */}
                        OpenSea
                    </Button>
                </div>
            </Container>

        </>
    )
}

export default Bg;