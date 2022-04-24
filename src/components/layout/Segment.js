import React from 'react'
import { Col, Row } from 'reactstrap';
import { MdComputer } from "react-icons/md";

export default function Segment({ onBundle }) {


    const onHover = (event) => {
        let index;
        switch (event.target.id) {
            case "hexagon-green":
                index = 1;
                break;
            case "hexagon-gray":
                index = 2;
                break;
            case "hexagon-red":
                index = 3;
                break;
            default:
                break;
        }
        onBundle(index);
    }



    return (
        <div id={'segment'}>
            <div className="center text-center">
                <h2 className="section-title">SEGMENT</h2>
            </div>
            <Row className="segment-row">
                <Col xs={12} sm={12} md={6} lg={4}>
                    <div className="marketing-slot">
                        <div className="hexagon" id="hexagon-green" onMouseOver={onHover}>
                            <MdComputer className="computer-icon" size="4em" />
                        </div>
                    </div>
                    <div className="bundle-info center text-center">
                        <h2><strong>Marketing Slot</strong></h2>
                        <p className="w-50">Section below should have more emphasis on hover. List below can be highlighted individually as well.</p>
                    </div>

                </Col>
                <Col xs={12} sm={12} md={6} lg={4}>
                    <div className="marketing-slot">
                        <div className="hexagon" id="hexagon-gray" onMouseOver={onHover}>
                            <MdComputer className="computer-icon" size="4em" />
                        </div>
                    </div>
                    <div className="bundle-info center text-center">
                        <h2><strong>Marketing Slot</strong></h2>
                        <p className="w-50">Section below should have more emphasis on hover. List below can be highlighted individually as well.</p>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4}>
                    <div className="marketing-slot">
                        <div className="hexagon" id="hexagon-red" onMouseOver={onHover}>
                            <MdComputer className="computer-icon" size="4em" />
                        </div>
                    </div>
                    <div className="bundle-info center text-center">
                        <h2><strong>Marketing Slot</strong></h2>
                        <p className="w-50">Section below should have more emphasis on hover. List below can be highlighted individually as well.</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
