import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import Header from './Header';
import HR from './Divider';

import leaf from '../images/welcome_icons/1.png';
import haze from '../images/team_icons/haze.png';
import saucey from '../images/team_icons/saucey.png';
import lynx from '../images/team_icons/lynx.png';

const TeamMember = (props) => {
    return (
        <Col>
            <div>
                <Card bg="transparent" text="white" style={{ height: "100%", border: "none" }}>

                    <Card.Body align="center">
                        <Card.Img style={{ padding: "3px", borderRadius: "100%", borderColor: "var(--glow)", borderStyle: "solid", borderWidth: "2px", marginBottom: "2vh" }} variant="bottom" src={props.src} />

                        <Card.Title>{props.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{props.role}</Card.Subtitle>


                    </Card.Body>
                </Card>
            </div>
        </Col>
    )
}

const Team = () => {
    return (
        <>
            <HR />
            <Container id="Team" className="section-container">
                <Header
                    heading="The Team"
                    content={["The MetaGunz were created by five friends who set out to make some cool art, see what we could do and try to make something fun."]}
                />
                <br />
                <Row>
                    <TeamMember
                        name="Guiji"
                        role="Marketing Genius and Project Lead"
                        src={haze}
                    />
                    <TeamMember
                        name="Slick"
                        role="The Picasso of Vector Art"
                        src={saucey}
                    />
                    <TeamMember
                        name="Chef"
                        role="Programmer and Keyboard Presser"
                        src={leaf}
                    />
                    <TeamMember
                        name="Shift"
                        role="Social Media Manager Extraordinaire"
                        src={lynx}
                    />

                </Row>
            </Container>
        </>
    )
}

export default Team;