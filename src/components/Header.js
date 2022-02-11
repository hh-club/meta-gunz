import React from 'react';
import { Container, Alert } from 'react-bootstrap';



const Header = (props) => {
    return (
        <Container className="header-container">
            <Alert.Heading className="heading" style={{ paddingBottom: "3vh" }}>{props.heading}</Alert.Heading>
            {
                props.content.map(line =>
                    <p style={{ marginBottom: "3vh", fontSize: "1.1vw" }} key={props.content.indexOf(line)}>
                        {line}
                    </p>

                )
            }
        </Container>
    )
}

export default Header;