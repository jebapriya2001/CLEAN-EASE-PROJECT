// src/components/Reminders.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const Reminders = () => {
    const [reminders, setReminders] = useState([]);
    const [reminderText, setReminderText] = useState('');

    const addReminder = () => {
        if (reminderText) {
            setReminders([...reminders, reminderText]);
            setReminderText('');
        }
    };

    const deleteReminder = (index) => {
        setReminders(reminders.filter((_, i) => i !== index));
    };

    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">Reminders</h2>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card>
                        <Card.Body>
                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter a reminder"
                                    value={reminderText}
                                    onChange={(e) => setReminderText(e.target.value)}
                                />
                            </Form.Group>
                            <Button className="mt-2" variant="primary" onClick={addReminder}>
                                Add Reminder
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-4">
                {reminders.map((reminder, index) => (
                    <Col md={4} key={index} className="mb-3">
                        <Card>
                            <Card.Body>
                                <Card.Text>{reminder}</Card.Text>
                                <Button variant="danger" onClick={() => deleteReminder(index)}>
                                    Delete
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Reminders;
