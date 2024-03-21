import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <div>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <h1 className='me-5'>ToDo List</h1>
                        </Link>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header