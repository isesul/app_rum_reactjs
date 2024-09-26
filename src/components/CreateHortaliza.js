import React, { useState } from 'react';
import { createHortaliza } from '../services/HortalizasService';
import { Form, Button, Alert } from 'react-bootstrap';

const CreateHortaliza = () => {
  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState('');
  const [message, setMessage] = useState('');
  const [variant, setVariant] = useState('success');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createHortaliza(nombre, tipo);
      setMessage('Hortaliza creada con éxito');
      setVariant('success');
      setNombre('');
      setTipo('');
    } catch (error) {
      setMessage('Error al crear la hortaliza');
      setVariant('danger');
    }
  };

  return (
    <div>
      <h1 className="mb-4">Agregar Hortaliza</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Tipo</Form.Label>
          <Form.Control type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">Crear Hortaliza</Button>
      </Form>
      {message && <Alert variant={variant} className="mt-3">{message}</Alert>}
    </div>
  );
};

export default CreateHortaliza;