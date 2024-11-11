// src/components/Payment.js
import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function Payment() {
    return (
        <Container className="mt-4">
            <h2 className="text-center">Secure Payment</h2>
            <Form className="mt-3">
                <Form.Group>
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter your card number" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Expiry Date</Form.Label>
                    <Form.Control type="text" placeholder="MM/YY" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>CVV</Form.Label>
                    <Form.Control type="text" placeholder="CVV" />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                    Pay Now
                </Button>
            </Form>
        </Container>
    );
}

export default Payment;
