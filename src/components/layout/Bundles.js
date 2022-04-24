import React, { useEffect } from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Col, Row, Button } from 'reactstrap';
import { TiTick } from 'react-icons/ti'
export default function Bundles({ index }) {


    useEffect(() => {
        if (index !== 0) {
            for (let i = 1; i <= 3; i++) {
                let bundle = document.getElementById("bundle-list-" + i)
                bundle.classList.add("disabled");
            }
            let selectedBundle = document.getElementById("bundle-list-" + index);
            selectedBundle.classList.remove("disabled")
        }
    }, [index])

    return (
        <div id={'bundles'}>
            <div className="bundles">
                <Row className="py-5">
                    <Col xs={12} sm={12} md={6} lg={4}>
                        <ListGroup id="bundle-list-1" className="disabled">
                            <ListGroupItem>
                                <ListGroupItemHeading>
                                    <TiTick color="green" size="1.5em" />
                                    WEB DESIGN
                                </ListGroupItemHeading>
                            </ListGroupItem>
                            <ListGroupItem>
                                <ListGroupItemHeading>
                                    <TiTick color="green" size="1.5em" />
                                    UI DESING
                                </ListGroupItemHeading>
                            </ListGroupItem>
                            <ListGroupItem>
                                <ListGroupItemHeading>
                                    <TiTick color="green" size="1.5em" />
                                    GRAPHIC DESING
                                </ListGroupItemHeading>
                            </ListGroupItem>
                            <ListGroupItem>
                                <ListGroupItemHeading>
                                    <TiTick color="green" size="1.5em" />
                                    BRANDING
                                </ListGroupItemHeading>
                            </ListGroupItem>
                            <ListGroupItem>
                                <ListGroupItemHeading>
                                    <TiTick color="green" size="1.5em" />
                                    CORPORATE IDENTITY
                                </ListGroupItemHeading>
                            </ListGroupItem>
                            <ListGroupItem>
                                <ListGroupItemHeading>
                                    <TiTick color="green" size="1.5em" />
                                    MOBILE APP DESIGN
                                </ListGroupItemHeading>
                            </ListGroupItem>
                            <ListGroupItem>
                                <ListGroupItemHeading>
                                    <TiTick color="green" size="1.5em" />
                                    POSTER DESIGN
                                </ListGroupItemHeading>
                            </ListGroupItem>
                            <ListGroupItem className="text-center bundle-button">
                                <Button color="success" className="my-2" size="lg">BUTTON</Button>
                            </ListGroupItem>
                        </ListGroup>

                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4}>
                        <ListGroup id="bundle-list-2" className="disabled">
                            <ListGroupItem>
                                <ListGroupItemHeading>
                                    <TiTick color="green" size="1.5em" />
                                    MARKETING TITLE
                                </ListGroupItemHeading>
                                <ListGroupItemText>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <ListGroupItemHeading>
                                    <TiTick color="green" size="1.5em" />
                                    MARKETING TITLE
                                </ListGroupItemHeading>
                                <ListGroupItemText>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <ListGroupItemHeading>
                                    <TiTick color="green" size="1.5em" />
                                    MARKETING TITLE
                                </ListGroupItemHeading>
                                <ListGroupItemText>
                                    Duis aute irure dolor in reprehenderit in
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem className="text-center bundle-button">
                                <Button color="dark" className="my-2" size="lg">BUTTON</Button>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4}>
                        <ListGroup id="bundle-list-3" className="disabled">
                            <ListGroupItem>
                                <ListGroupItemHeading>
                                    <TiTick color="green" size="1.5em" />
                                    MARKETING TITLE
                                </ListGroupItemHeading>
                            </ListGroupItem>
                            <ListGroupItem>
                                <ListGroupItemHeading>
                                    <TiTick color="green" size="1.5em" />
                                    MARKETING TITLE
                                </ListGroupItemHeading>
                            </ListGroupItem>
                            <ListGroupItem className="text-center bundle-button">
                                <Button color="danger" className="my-2" size="lg">BUTTON</Button>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
