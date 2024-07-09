import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ComicBook from './ComicBook';
import HorrorBook from './HorrorBook';
import DivineBook from './DivineBook';

const Book = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookDetails = (book) => {
    setSelectedBook(book);
  };
  
  const [comicBooks] = useState([
    { bookID: 1, BookName: 'Comic Book 1', noOfPages: 120, Price: 10 },
    { bookID: 2, BookName: 'Comic Book 2', noOfPages: 150, Price: 12 },
  ]);

  const [horrorBooks] = useState([
    { bookID: 3, BookName: 'Horror Book 1', noOfPages: 220, Price: 15 },
    { bookID: 4, BookName: 'Horror Book 2', noOfPages: 180, Price: 13 },
  ]);

  const [divineBooks] = useState([
    { bookID: 5, BookName: 'Divine Book 1', noOfPages: 250, Price: 20 },
    { bookID: 6, BookName: 'Divine Book 2', noOfPages: 300, Price: 25 },
  ]);

  return (
    <Container className='mt-5'>
      <Row>
        <Col md={4}>
          <ComicBook books={comicBooks} sendBookDetails={handleBookDetails} />
        </Col>
        <Col md={4}>
          <HorrorBook books={horrorBooks} sendBookDetails={handleBookDetails} />
        </Col>
        <Col md={4}>
          <DivineBook books={divineBooks} sendBookDetails={handleBookDetails} />
        </Col>
      </Row>
      
      <h2>Parent Component</h2>

      {selectedBook && (
        <div className="mt-3 mb-5">
          <h4>Selected Book Details</h4>
          <p><strong>Book Name:</strong> {selectedBook.BookName}</p>
          <p><strong>Number of Pages:</strong> {selectedBook.noOfPages}</p>
          <p><strong>Price:</strong> ${selectedBook.Price}</p>
          <hr/>
        </div>
      )}
      <br /><br /><br />
    </Container>
  );
};

export default Book;
