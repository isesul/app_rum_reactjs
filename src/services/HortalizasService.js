import axios from 'axios';

const API_URL = 'http://localhost:3001/api/hortalizas';

const getHortalizas = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getHortaliza = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

const createHortaliza = async (nombre, tipo) => {
  const response = await axios.post(API_URL, { nombre, tipo });
  return response.data;
};

const updateHortaliza = async (id, nombre, tipo) => {
  const response = await axios.put(`${API_URL}/${id}`, { nombre, tipo });
  return response.data;
};

const deleteHortaliza = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

export { getHortalizas, getHortaliza, createHortaliza, updateHortaliza, deleteHortaliza };