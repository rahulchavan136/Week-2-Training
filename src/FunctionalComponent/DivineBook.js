import React from 'react';
import { Card, Button } from 'react-bootstrap';

const DivineBook = ({ books, sendBookDetails }) => {
  return (
    <div>
      <h2>Divine Books</h2>
      {books.map(book => (
        <Card key={book.bookID} className="mb-3">
          <Card.Body>
            <Card.Title>{book.BookName}</Card.Title>
            <Card.Text>Number of Pages: {book.noOfPages}</Card.Text>
            <Card.Text>Price: ${book.Price}</Card.Text>
            <Button onClick={() => sendBookDetails(book)}>Send Details</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default DivineBook;
