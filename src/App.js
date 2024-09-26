import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import HomePage from './components/HomePage';
import CreateHortaliza from './components/CreateHortaliza';
import HortalizasTable from './components/HortalizasTable';
import About from './components/About';
import {  ApmRoutes, withTransaction } from '@elastic/apm-rum-react';
import ErrorBoundary from './components/ErrorBoundary';
import apm from './apmConfig';


// Envolver componentes con withTransaction para un seguimiento más detallado
const HomePageWithTransaction = withTransaction('HomePage', 'route')(HomePage);
const CreateHortalizaWithTransaction = withTransaction('CreateHortaliza', 'route')(CreateHortaliza);
const HortalizasTableWithTransaction = withTransaction('HortalizasTable', 'route')(HortalizasTable);
const AboutWithTransaction = withTransaction('About', 'route')(About);

function App() {
  return (
    <Router>
      <ErrorBoundary>
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
            <ApmRoutes>
              <Route path="/" element={<HomePageWithTransaction />} />
              <Route path="/agregar" element={<CreateHortalizaWithTransaction />} />
              <Route path="/lista" element={<HortalizasTableWithTransaction />} />
              <Route path="/acerca" element={<AboutWithTransaction />} />
            </ApmRoutes>
          </Container>
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;