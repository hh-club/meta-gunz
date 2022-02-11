import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import Header from './Header';
import HR from './Divider';
import './FAQ.css';

const FAQItem = (props) => {
    return (
        <>
            <Accordion.Item className="faq-q" eventKey={props.n}>
                <Accordion.Header className="heading-2" style={{ color: "var(--bg)" }}>{props.question}</Accordion.Header>
                <Accordion.Body className="faq-body">
                    {
                        props.answer.map(line =>

                            <p style={{ color: "white" }} key={props.answer.indexOf(line)}>
                                {line}
                            </p>

                        )
                    }
                </Accordion.Body>
            </Accordion.Item>
        </>
    )
}

const FAQ = () => {
    return (
        <>
            <HR />
            <Container id="FAQ" className="section-container">
                <Header heading="Frequently Asked Questions" content={[" "]} />
                <Accordion className="faq-questions">
                    <div className="faq-container">
                        <FAQItem
                            n="0"
                            question="What is the MetaGunz NFT?"
                            answer={["MetaGunz is an NFT collection sold on the Polygon Blockchain and consists of 8,888 unique combinations of Gunz. Every gun is digitally drawn and assembled by code, no two Gunz are the same."]}
                        />
                        <FAQItem
                            n="1"
                            question="How much is one MetaGunz NFT?"
                            answer={["It costs 0.001Ξ (3 USD) to buy one MetaGunz"]}
                        />
                        <FAQItem
                            n="2"
                            question="What blockchain network is it on?"
                            answer={["The MetaGunz are hosted on the Polygon blockchain"]}
                        />
                        <FAQItem
                            n="3"
                            question="Where are the NFT's hosted?"
                            answer={["The MetaGunz are hosted on IPFS"]}
                        />
                        <FAQItem
                            n="4"
                            question="Where can I buy some?"
                            answer={["Buy MetaGunz from our OpenSea page"]}
                        />
                    </div>
                </Accordion>
            </Container>
        </>
    )

}

export default FAQ;