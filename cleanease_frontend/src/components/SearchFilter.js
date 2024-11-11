// src/components/SearchFilter.js
import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function SearchFilter() {
    return (
        <Container className="mt-4">
            <h2 className="text-center">Search and Filter Services</h2>
            <Form className="mt-3">
                <Form.Group>
                    <Form.Label>Search by Service</Form.Label>
                    <Form.Control type="text" placeholder="Enter service type..." />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Filter by Budget</Form.Label>
                    <Form.Control type="number" placeholder="Enter maximum budget" />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                    Search
                </Button>
            </Form>
        </Container>
    );
}

export default SearchFilter;
