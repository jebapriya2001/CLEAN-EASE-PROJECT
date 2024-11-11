// src/components/Checklist.js
import React from 'react';
import { Table, Button, Container } from 'react-bootstrap';

function Checklist() {
    return (
        <Container className="mt-4">
            <h2 className="text-center">My Cleaning Checklist</h2>
            <Table striped bordered hover className="mt-3">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Task</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Render checklist items here */}
                    <tr>
                        <td>1</td>
                        <td>Clean Living Room</td>
                        <td>
                            <Button variant="warning" size="sm">Edit</Button>{' '}
                            <Button variant="danger" size="sm">Delete</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}

export default Checklist;
