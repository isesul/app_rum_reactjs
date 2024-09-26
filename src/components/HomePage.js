import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container>
      <h1 className="text-center mb-4">Bienvenido a la Aplicación de Hortalizas</h1>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Agregar Hortaliza</Card.Title>
              <Card.Text>
                Añade nuevas hortalizas a la base de datos.
              </Card.Text>
              <Button as={Link} to="/agregar" variant="primary">Ir a Agregar</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Lista de Hortalizas</Card.Title>
              <Card.Text>
                Ver y gestionar todas las hortalizas registradas.
              </Card.Text>
              <Button as={Link} to="/lista" variant="primary">Ver Lista</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Acerca de nosotros</Card.Title>
              <Card.Text>
                Conoce más sobre nuestra empresa y misión.
              </Card.Text>
              <Button as={Link} to="/acerca" variant="primary">Leer más</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;