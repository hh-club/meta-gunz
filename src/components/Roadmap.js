import React from 'react';
import './Roadmap.css'
import { Container, Row, Col, Alert, ListGroup, Badge } from 'react-bootstrap';
import Header from './Header';
import HR from './Divider';

const RoadmapItemLabel = (props) => {
    return (
        <>
            <div>
                <Row>
                    <Col md="auto">
                        <Badge bg="danger" text="black">{props.n}</Badge>{' '}
                    </Col>
                    <Col>
                        <h1 className="item">{props.heading}</h1>

                        <p className="content">
                            {props.content}
                        </p>
                    </Col>
                </Row>


            </div>
        </>
    )
}

const RoadmapItem = (props) => {
    return (
        <>
            <div style={{ borderColor: "var(--glow)", borderStyle: "solid", borderWidth: "2px", borderRadius: "5px" }}>
                <Alert variant="none" style={{ marginBottom: 0 }} text="white">
                    <Row>
                        <Col md={3} lg={3} className="my-auto percent-box">
                            <h1 className="percent heading">
                                {props.n}
                            </h1>
                        </Col>
                        <Col className="my-auto">
                            <ListGroup variant="flush">
                                {props.item_1 && <ListGroup.Item className="rmap" variant="dark">
                                    <RoadmapItemLabel
                                        n="1"
                                        heading={props.item_1}
                                        content={props.content_1}
                                    />
                                </ListGroup.Item>}
                                {props.item_2 && <ListGroup.Item className="rmap" variant="dark">
                                    <RoadmapItemLabel
                                        n="2"
                                        heading={props.item_2}
                                        content={props.content_2}
                                    />
                                </ListGroup.Item>}
                                {props.item_3 && <ListGroup.Item className="rmap" variant="dark">
                                    <RoadmapItemLabel
                                        n="3"
                                        heading={props.item_3}
                                        content={props.content_3}
                                    />
                                </ListGroup.Item>}
                                {props.item_4 && <ListGroup.Item className="rmap" variant="dark">
                                    <RoadmapItemLabel
                                        n="4"
                                        heading={props.item_4}
                                        content={props.content_4}
                                    />
                                </ListGroup.Item>}
                            </ListGroup>
                        </Col>
                    </Row>
                </Alert>
            </div>
            <br />
        </>
    )
}

const Roadmap = () => {
    return (
        <>
            <HR />
            <Container id="Roadmap" className="section-container">
                <Header
                    heading="The Roadmap"
                    content={[""]}
                />

                <RoadmapItem
                    n="Part A"
                    item_1="Discord Launch"
                    item_2="Presale Giveaways"
                    item_3="Project Promotion"
                    content_1="The city has been run down by the dead, remaining survivors make their way to a safehouse rumored to be at the edge of town."
                    content_2="A crate with a small stash of weapons is found in one of the storage rooms at the safehouse which only a select few of the bravest survivors are able to obtain."
                    content_3="A broadcast signal is send out to many in an attempt to alert any remaining survivors that there is a safehouse with weapons and supplies."
                />
                <RoadmapItem
                    n="Part B"
                    item_1="OpenSea Listing"
                    item_2="Wallet Verification"
                    content_1="A group of survivors from the safehouse make their way to the gun store to stock up on MetaGunz and ammunition."
                    content_2="Survivors return with many different weapons and are able to acquire a MetaGunz license, owning more Gunz will unlock a higher status within the safehouse. Eventually, survivors with high status are able to access VIP benefits."
                />
                <RoadmapItem
                    n="Part C"
                    item_1="50% of funds will go back into the project"
                    item_2="20% will go to a charity of the communities choosing"
                    item_3="10% will go to marketing and promotion"
                    item_4="20% will go back to our holders"
                    content_1="Survivors use 50% of their weapons, supplies and defenses to defend the safehouse & gun store against a horde of Z-BITS approaching."
                    content_2="MetaGunz holders stumble across a group of survivors in desperate need of supplies so they give them 20% of what they had."
                    content_3="Safehouse sends the search and rescue parties to expand their explored regions and find more survivors"
                    content_4="MetaGunz store owner is thankful for help with fighting off the horde and gifts 20% of his Gunz to the safehouse for free!"
                />
                <RoadmapItem
                    n="Part D"
                    item_1="Announcement of secret MetaGunz project"
                    item_2="Opening of THE SAFEHOUSE (Holders Only)"
                    content_1="MetaGunz holders are tipped with some interesting information about the whereabouts of a secret stash that was rumored to contain a bunch of high-tech weapons and supplies."
                    content_2="While embarking on a dangerous journey to find the secret stash, survivors come across an area of land that for once doesn't seem to be crawling with Z-BITS. They alert the rest of the crew back at the safehouse and all survivors safely inhabit this well guarded fortress to themselves."
                />
                <RoadmapItem
                    n="Part E"
                    item_1="Secret Project Launch"
                    item_2="MetaGunz - The Game"
                    content_1="The survivors finally locate a big facility at the edge of town, a former government/military opperations base used to manufacture weapons that are beleived to be made of a rare material discovered post-cryptopocalypse. It was noted in an old journal that these weapons were 'a force not to be reckoned with', it is only until interacting with these items that you realise how real they actually are and the potential that it has to turn the tides of the war against Z-BITS."
                    content_2="We plan to release a game where you can team up with your friends, fight zombies and explore the Cryptopocalypse. Find in-game items & currency to claim ney Gunz."

                />


            </Container >
        </>
    )
}

export default Roadmap;