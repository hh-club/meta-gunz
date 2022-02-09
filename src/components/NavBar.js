import React from 'react';
import './NavBar.css'
import { Navbar, Container, Nav } from 'react-bootstrap';
// import hhc_logo_1 from '../images/hhctest3.png';
// import hhc_logo_2 from '../images/hhctest2.png';

import discord from '../images/navbar_icons/discord-line.png';
import twitter from '../images/navbar_icons/twitter-line.png';
import instagram from '../images/navbar_icons/instagram-line.png';

const NavBar = () => {
    return (

        <Navbar className="nav-main" expand="lg" variant="dark" >

            <Container>
                <Navbar.Brand className="heading-2" style={{ color: "var(--accent)" }}>MetaGunz</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">

                    <Nav.Link href="https://discord.gg/BQApfxqAcW" target="_blank" rel="noopener noreferrer">
                        <img
                            src={discord}
                            width="24"
                            height="24"
                            className="d-inline-block align-center"
                            alt="Discord Link"
                        />
                    </Nav.Link>
                    <Nav.Link href="https://www.instagram.com/metagunznft/" target="_blank" rel="noopener noreferrer">
                        <img
                            src={instagram}
                            width="24"
                            height="24"
                            className="d-inline-block align-center"
                            alt="Instagram Link"
                        />
                    </Nav.Link>
                    <Nav.Link href="https://twitter.com/metagunzNFT" target="_blank" rel="noopener noreferrer">
                        <img
                            src={twitter}
                            width="24"
                            height="24"
                            className="d-inline-block align-center"
                            alt="Twitter Link"
                        />
                    </Nav.Link>
                </Navbar.Collapse>
            </Container>

        </Navbar >

    )
}

export default NavBar;