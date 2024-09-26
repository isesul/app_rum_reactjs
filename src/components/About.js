import React from 'react';
import { Card } from 'react-bootstrap';

const About = () => {
  return (
    <div>
      <h1 className="mb-4">Acerca de nosotros</h1>
      <Card>
        <Card.Body>
          <Card.Title>Nuestra Empresa</Card.Title>
          <Card.Text>
            Somos una empresa dedicada a la gestión de información sobre hortalizas.
          </Card.Text>
          <Card.Title className="mt-4">Nuestra Misión</Card.Title>
          <Card.Text>
            Nuestra misión es proporcionar una plataforma fácil de usar para el manejo de datos de hortalizas,
            ayudando a agricultores y empresas del sector a optimizar sus procesos y tomar mejores decisiones.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;