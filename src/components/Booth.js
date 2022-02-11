import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Button, Alert, Badge } from 'react-bootstrap';
import Header from './Header';
import HR from './Divider';

const MemberResponse = (props) => {
    return (
        <div style={{ borderColor: "var(--accent)", borderStyle: "solid", borderWidth: "1px", borderRadius: "5px" }}>
            <Alert variant="none" style={{ marginBottom: 0 }} text="white">
                <h1 className="heading" style={{ fontSize: "24px" }}>{(props.member) ? "Welcome to The Booth" : "Join the Club"}</h1>
                <p style={{ color: "white" }}>
                    {(props.member) ?
                        "Congratulations, you are a member of the Saferoom which is currently being constructed, be sure to check back soon" :
                        "The Saferoom is for MetaGunz holders who have 10 or more MetaGunz only, be sure to purchase some from OpenSea :)"}
                </p>
                <hr />
                <p className="mb-0">
                    <Badge bg="danger">{props.walletAddress}</Badge>
                </p>
            </Alert>
        </div>
    )
}

const Booth = () => {

    const [walletAddress, setWalletAddress] = useState(null);
    const [nfts, setNfts] = useState(null);
    const [isMember, setIsMember] = useState(null);

    const connectWallet = async () => {
        if (typeof window.ethereum !== 'undefined') {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setWalletAddress(accounts[0]);
        }
    }

    const getNftData = async () => {
        if (!walletAddress) return;
        const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${walletAddress}`);
        const data = await response.json();
        setNfts(data.items);
    }

    const displayNfts = async () => {
        const n = await nfts.length;
        for (let i = 0; i < n; i++) {
            const nft = nfts[i]["meta"]["name"];
            if (nft.includes("MetaGunz")) {
                setIsMember(true);
                return;
            }
        }
        setIsMember(false);
    }

    useEffect(() => {
        getNftData()
    }, [walletAddress]);

    useEffect(() => {
        displayNfts()
    }, [nfts]);

    return (
        <>
            <HR />
            <Container id="Booth" className="section-container">
                <Header
                    heading="The Safehouse"
                    content={['Holders of at least 10 MetaGunz will be able to access THE SAFEHOUSE shortly after we sell out.',
                        "Through THE SAFEHOUSE you will be able to claim a free 1000 $GUNZ token and will gain access to the staking function in which your MetaGunz will shoot Z-BITS and each gain 100 $GUNZ token per day.",
                        "To further reward our whales, those who hold at least 50 MetaGunz will receive a FREE MINT PASS for our MetaSurvivors collection which will be accessible exclusively to MetaGunz holders."]}
                />

                {!walletAddress &&
                    <Button onClick={connectWallet} variant="outline-danger" style={{ borderWidth: "2px" }}>
                        <strong>
                            Connect Wallet
                        </strong>
                    </Button>
                }

                {isMember &&
                    <MemberResponse
                        member={true}
                        walletAddress={walletAddress}
                    />
                }
                {isMember == false &&
                    <MemberResponse
                        member={false}
                        walletAddress={walletAddress}
                    />
                }
            </Container>
        </>
    )
}

export default Booth;

