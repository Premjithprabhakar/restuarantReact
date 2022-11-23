import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
        <Navbar  variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://media.istockphoto.com/id/981368726/vector/restaurant-food-drinks-logo-fork-knife-background-vector-image.jpg?s=612x612&w=0&k=20&c=9M26CBkCyEBqUPs3Ls5QCjYLZrB9sxwrSFmnAmNCopI="
              width="80"
              height="80"
              className="d-inline-block align-top"
            />{' '}
            <span > Cafe Kulfi</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header