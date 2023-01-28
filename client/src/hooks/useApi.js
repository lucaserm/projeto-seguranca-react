import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const useApi = () => ({
  validateToken: async () => {
    return true;
    // const response = await api.post('/validate', { token });
    // return response.data;
  },
  signin: async (code, password) => {
    const response = await api.post('/usuarios/view', { code, password });
    return response.data;
  },
  logout: async () => {
    return true;
    // const response = await api.post('/logout');
    // return response.data;
  },
  estudantes_coordenacao: async (ra, cpf, nome) => {
    const response = await api.post('/estudantes/view', { ra, cpf, nome });
    return response.data;
  },
});
