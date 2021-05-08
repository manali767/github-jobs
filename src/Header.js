import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'
import { Link} from 'react-router-dom';

function Header() {
    return (
        <div>
            <Container className="mb-4">
            <Navbar bg="dark" variant="dark">
             <Link className="navbar-brand" to="/">Github Jobs</Link>
           
            </Navbar>
            </Container>
        </div>
    )
}

export default Header
