import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import HomePage from './components/HomePage';
import CreateHortaliza from './components/CreateHortaliza';
import HortalizasTable from './components/HortalizasTable';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">Hortalizas App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                <Nav.Link as={Link} to="/agregar">Agregar</Nav.Link>
                <Nav.Link as={Link} to="/lista">Lista de Hortalizas</Nav.Link>
                <Nav.Link as={Link} to="/acerca">Acerca de nosotros</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="mt-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/agregar" element={<CreateHortaliza />} />
            <Route path="/lista" element={<HortalizasTable />} />
            <Route path="/acerca" element={<About />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;