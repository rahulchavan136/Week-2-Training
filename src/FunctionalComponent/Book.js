import React, { useState } from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import ComicBook from './ComicBook';
import HorrorBook from './HorrorBook';
import DivineBook from './DivineBook';

const Book = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    comic: false, // Default to false to show all books initially
    horror: false, // Default to false to show all books initially
    divine: false, // Default to false to show all books initially
  });
  const [sortOrder, setSortOrder] = useState('');

  const handleBookDetails = (book) => {
    setSelectedBook(book);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const comicBooks = [
    { bookID: 1, BookName: 'Comic Book 1', noOfPages: 120, Price: 10 },
    { bookID: 2, BookName: 'Comic Book 2', noOfPages: 150, Price: 12 },
  ];

  const horrorBooks = [
    { bookID: 3, BookName: 'Horror Book 1', noOfPages: 220, Price: 15 },
    { bookID: 4, BookName: 'Horror Book 2', noOfPages: 180, Price: 13 },
  ];

  const divineBooks = [
    { bookID: 5, BookName: 'Divine Book 1', noOfPages: 250, Price: 20 },
    { bookID: 6, BookName: 'Divine Book 2', noOfPages: 300, Price: 25 },
  ];

  const allBooks = [
    ...comicBooks.map(book => ({ ...book, category: 'comic' })),
    ...horrorBooks.map(book => ({ ...book, category: 'horror' })),
    ...divineBooks.map(book => ({ ...book, category: 'divine' })),
  ];

  const filteredBooks = allBooks.filter(book => {
    const matchesCategory = Object.values(filters).every(value => !value) || filters[book.category];
    const matchesSearch = book.BookName.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  const sortedBooks = filteredBooks.sort((a, b) => {
    if (sortOrder === 'lowToHigh') {
      return a.Price - b.Price;
    } else if (sortOrder === 'highToLow') {
      return b.Price - a.Price;
    } else {
      return 0;
    }
  });

  return (
    <Container className='mt-5'>
      <Form className="mb-4">
        <Form.Group controlId="search">
          <Form.Label>Search Books</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search by book name"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </Form.Group>
        <Form.Group controlId="filters" className="mt-3">
          <Form.Check
            type="checkbox"
            label="Comic Books"
            name="comic"
            checked={filters.comic}
            onChange={handleFilterChange}
          />
          <Form.Check
            type="checkbox"
            label="Horror Books"
            name="horror"
            checked={filters.horror}
            onChange={handleFilterChange}
          />
          <Form.Check
            type="checkbox"
            label="Divine Books"
            name="divine"
            checked={filters.divine}
            onChange={handleFilterChange}
          />
        </Form.Group>
        <Form.Group controlId="sortOrder" className="mt-3">
          <Form.Label>Sort by Price</Form.Label>
          <Form.Control as="select" value={sortOrder} onChange={handleSortChange}>
            <option value="">Select</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Row>
        <Col md={4}>
          <Card.Body>
            <Card.Title>Comic Books</Card.Title>
            <ComicBook books={sortedBooks.filter(book => book.category === 'comic')} sendBookDetails={handleBookDetails} />
          </Card.Body>
        </Col>
        <Col md={4}>
          <Card.Body>
            <Card.Title>Horror Books</Card.Title>
            <HorrorBook books={sortedBooks.filter(book => book.category === 'horror')} sendBookDetails={handleBookDetails} />
          </Card.Body>
        </Col>
        <Col md={4}>
          <Card.Body>
            <Card.Title>Divine Books</Card.Title>
            <DivineBook books={sortedBooks.filter(book => book.category === 'divine')} sendBookDetails={handleBookDetails} />
          </Card.Body>
        </Col>
      </Row>
      
      <h2 className="mt-4">Selected Book Details</h2>

      {selectedBook && (
        <Card className="mt-3 mb-5">
          <Card.Body>
            <Card.Title>{selectedBook.BookName}</Card.Title>
            <Card.Text>
              <strong>Number of Pages:</strong> {selectedBook.noOfPages}
            </Card.Text>
            <Card.Text>
              <strong>Price:</strong> ${selectedBook.Price}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default Book;
