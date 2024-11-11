// src/components/CategoryList.js
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

function CategoryList() {
    const categories = [
        { id: 1, name: "Standard Cleaning", price: "$50" },
        { id: 2, name: "Deep Cleaning", price: "$80" },
        // Add more categories as needed
    ];

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Available Cleaning Categories</h2>
            <Row>
                {categories.map((category) => (
                    <Col md={4} key={category.id} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{category.name}</Card.Title>
                                <Card.Text>Price: {category.price}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default CategoryList;
