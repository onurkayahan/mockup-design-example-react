import React, { useState, useEffect } from 'react'
import { Button, FormGroup, Input, Row, Col, Card, CardTitle, CardBody, CardText, CardSubtitle } from 'reactstrap';
import { Form, Formik } from "formik";
import { v4 as uuidv4 } from 'uuid'
import Moment from 'react-moment';

export default function GuestBook() {

    const [messages, setMessages] = useState([]);

    const LOCAL_STORAGE_KEY = "messages";

    useEffect(() => { // get messages from local storage
        const storedMessages = localStorage.getItem(LOCAL_STORAGE_KEY)
        if(storedMessages) setMessages(JSON.parse(storedMessages))
    }, [])

    useEffect(() => { // save messages to local storage
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(messages))
    }, [messages])

    const onSubmitted = (message) => {
        message["id"] = uuidv4();
        message['createdDate'] = Date.now();
        setMessages(prevMessages => {
            return [...prevMessages, message];
        })
    }

    return (
        <div id={'guestbook'}>
            <div className="guestbook">
                <div className="center text-center">
                    <h2 className="section-title">GUESTBOOK</h2>
                </div>
                <Row className="p-5">

                    <Col xs={12} sm={12} md={5} lg={5} >
                        <Formik initialValues={{}}
                            onSubmit={(values, actions) => {
                                actions.setSubmitting(false);
                                onSubmitted(values);
                                actions.resetForm();
                            }}>
                            {(props) => {
                                return (
                                    <Form className="text-center p-3" style={{ backgroundColor: "#222222" }}>
                                        <FormGroup>
                                            <Input type="text" name="name" placeholder="Name"
                                                value={props.values.name || ''}
                                                onChange={props.handleChange} onBlur={props.handleBlur}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type="text" name="subject" placeholder="Subject"
                                                value={props.values.subject || ''}
                                                onChange={props.handleChange} onBlur={props.handleBlur}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type="textarea" name="message" placeholder="Message"
                                                value={props.values.message || ''}
                                                onChange={props.handleChange} onBlur={props.handleBlur}
                                            />
                                        </FormGroup>
                                        <Button type="submit" color="success">SEND</Button>
                                    </Form>
                                );
                            }}
                        </Formik>
                    </Col>
                    <Col xs={12} sm={12} md={7} lg={7} style={{ backgroundColor: "#222222" }}>
                        <div className="my-3 p-3 card-list">
                            {
                                messages.map(message => {
                                    return <Card className="mb-2" key={message.id}>
                                        <CardBody>
                                            <CardTitle tag="h5">{message.name}</CardTitle>
                                            <CardSubtitle tag="h6" className="mb-2 text-muted card-date"><Moment format='DD/MM/yyyy - hh:mm:ss'>{message.createdDate}</Moment></CardSubtitle>
                                            <CardText>{message.message}</CardText>
                                        </CardBody>
                                    </Card>
                                })
                            }

                        </div>
                    </Col>

                </Row>
            </div>
        </div>
    )
}
