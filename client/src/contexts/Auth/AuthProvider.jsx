import { useEffect, useState } from 'react';
import { useApi } from './../../hooks/useApi';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [estudante, setEstudante] = useState(null);
  const api = useApi();

  useEffect(() => {
    const utilizeApi = async (code, password, ra) => {
      let data = await api.signin(code, password);
      if (data) {
        setUser(data);
        setItem('code', data.codigo_servidor);
        setItem('password', data.senha);
      }
      let cpf = '';
      let nome = '';
      data = await api.estudantes_coordenacao(ra, cpf, nome);
      if (data) {
        setEstudante(data);
        setItem('ra', data.ra);
      }
    };
    utilizeApi(
      localStorage.getItem('code'),
      localStorage.getItem('password'),
      localStorage.getItem('ra'),
    );
  }, [api, user]);

  const signin = async (code, password) => {
    const data = await api.signin(code, password);
    if (data) {
      setUser(data);
      setItem('code', data.codigo_servidor);
      setItem('password', data.senha);
      return true;
    }
    return false;
  };

  const signout = async () => {
    await api.logout();
    setUser(null);
    setItem('code', '');
    setItem('password', '');
    setItem('ra', '');
  };

  const setItem = (name, value) => {
    localStorage.setItem(name, value);
  };

  const estudantes_coordenacao = async (ra, cpf, nome) => {
    const data = await api.estudantes_coordenacao(ra, cpf, nome);
    if (data) {
      setEstudante(data);
      setItem('ra', data.ra);
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider
      value={{ user, estudante, estudantes_coordenacao, signin, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
