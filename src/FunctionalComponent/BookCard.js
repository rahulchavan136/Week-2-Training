import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const BooksComponent = () => {
    const [books, setBooks] = useState([]);
    const appleimage = process.env.PUBLIC_URL + '/images/books.jpg'

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('https://freetestapi.com/api/v1/books');
                if (!response.ok) {
                    throw Error("APi Response issue")
                }
                const data = await response.json();
                setBooks(data);
            } catch (error) {
                console.log("error==>", error);
            }
        };
        fetchBooks();
    }, []);
    console.log(books);

    return (
        <Container className='mt-5 mb-5'>
            <Row>
                {books.map(book => (
                    <Col key={book.id} xs={12} md={4}>
                        <Card style={{ marginBottom: '20px' }}>
                            <Card.Img
                                variant="top"
                                src={appleimage}
                                style={{ height: '300px', objectFit: 'cover' }}
                            />
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text >{book.description}</Card.Text>
                                <Card.Text>
                                    <div className="d-flex justify-content-between">
                                        <div>{book.author}</div>
                                        <div>{book.publication_year}</div>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default BooksComponent;
