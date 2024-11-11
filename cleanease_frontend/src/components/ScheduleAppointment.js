// src/components/ScheduleAppointment.js
import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function ScheduleAppointment() {
    return (
        <Container className="mt-4">
            <h2 className="text-center">Schedule an Appointment</h2>
            <Form className="mt-3">
                <Form.Group>
                    <Form.Label>Select Date</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Select Time</Form.Label>
                    <Form.Control type="time" />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                    Schedule
                </Button>
            </Form>
        </Container>
    );
}

export default ScheduleAppointment;
