// src/components/Reviews.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(5);

    const addReview = () => {
        if (reviewText && rating) {
            setReviews([...reviews, { text: reviewText, rating }]);
            setReviewText('');
            setRating(5);
        }
    };

    const deleteReview = (index) => {
        setReviews(reviews.filter((_, i) => i !== index));
    };

    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">Reviews</h2>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card>
                        <Card.Body>
                            <Form.Group>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Write a review"
                                    value={reviewText}
                                    onChange={(e) => setReviewText(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mt-3">
                                <Form.Label>Rating</Form.Label>
                                <Form.Control
                                    type="number"
                                    min="1"
                                    max="5"
                                    value={rating}
                                    onChange={(e) => setRating(e.target.value)}
                                />
                            </Form.Group>
                            <Button className="mt-3" variant="primary" onClick={addReview}>
                                Submit Review
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-4">
                {reviews.map((review, index) => (
                    <Col md={4} key={index} className="mb-3">
                        <Card>
                            <Card.Body>
                                <Card.Text>{review.text}</Card.Text>
                                <Card.Text><strong>Rating:</strong> {review.rating}</Card.Text>
                                <Button variant="danger" onClick={() => deleteReview(index)}>
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

export default Reviews;
