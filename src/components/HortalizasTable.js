import React, { useState, useEffect } from 'react';
import { getHortalizas, deleteHortaliza } from '../services/HortalizasService';
import { Table, Button } from 'react-bootstrap';

const HortalizasTable = () => {
  const [hortalizas, setHortalizas] = useState([]);

  useEffect(() => {
    const fetchHortalizas = async () => {
      const data = await getHortalizas();
      setHortalizas(data);
    };
    fetchHortalizas();
  }, []);

  const handleDelete = async (id) => {
    await deleteHortaliza(id);
    setHortalizas(hortalizas.filter((hortaliza) => hortaliza.id !== id));
  };

  return (
    <div>
      <h1 className="mb-4">Lista de Hortalizas</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {hortalizas.map((hortaliza) => (
            <tr key={hortaliza.id}>
              <td>{hortaliza.id}</td>
              <td>{hortaliza.nombre}</td>
              <td>{hortaliza.tipo}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(hortaliza.id)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default HortalizasTable;