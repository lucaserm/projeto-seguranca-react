import React, { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleChangeCode = (e) => {
    const { value } = e.target;
    setCode(value);
  };
  const handleChangePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (code && password) {
      const isLogged = await auth.signin(code, password);
      if (isLogged) {
        navigate('/index');
      } else {
        setErrors(['Usuário e/ou senha incorretos.']);
      }
    }
  };

  return (
    <div>
      {errors.length > 0 && (
        <>
          <div className="alert alert-danger alert-dismissible fade show">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
            ></button>
            <span>{errors}</span>
          </div>
        </>
      )}
      <h1 className="text-center">Entrar</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Código do Servidor</label>
          <input
            type="text"
            required
            className="form-control"
            value={code}
            onChange={handleChangeCode}
            placeholder="CÓDIGO DO SERVIDOR"
            name="code"
          />
        </div>
        <br />
        <div className="form-group">
          <label>Senha</label>
          <input
            type="password"
            required
            className="form-control"
            value={password}
            onChange={handleChangePassword}
            placeholder="SENHA"
            name="password"
          />
        </div>
        <hr />
        <div className="form-group">
          <input
            type="submit"
            value="Entrar"
            className="btn btn-success"
            style={{ width: '100%' }}
          />
        </div>
      </form>
    </div>
  );
};
