import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';

export const Index = () => {
  const auth = useContext(AuthContext);
  const [ra, setRa] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRaInput = (e) => {
    const { value } = e.target;
    setRa(value);
  };

  const handleCpfInput = (e) => {
    const { value } = e.target;
    if (cpf.length < 11) return setCpf(value);
  };

  const handleNomeInput = (e) => {
    const { value } = e.target;
    setNome(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(ra + ' ' + cpf + ' ' + nome);
    if (ra || cpf || nome) {
      const exists = await auth.estudantes_coordenacao(ra, cpf, nome);
      if (exists) {
        navigate('/index/estudante');
      } else {
        setError('Estudante não encontrado.');
      }
    }
  };

  return (
    <div>
      <hr style={{ backgroundColor: '#FFF', margin: '1rem' }} />
      <h1 className="text-center">Coordenação</h1>
      <form onSubmit={handleSubmit}>
        <p className="text-center lead">
          Insira o RA do aluno para ver todos os dados
        </p>
        {error && (
          <>
            <div className="alert alert-danger alert-dismissible fade show">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
              ></button>
              <span>{error}</span>
            </div>
          </>
        )}
        <input
          type="text"
          className="form-control"
          name="ra"
          autoComplete="off"
          value={ra}
          onChange={handleRaInput}
          placeholder="RA"
        />
        <br />
        <input
          type="text"
          className="form-control"
          name="cpf"
          autoComplete="off"
          placeholder="CPF"
          onChange={handleCpfInput}
        />
        <br />
        <input
          type="text"
          className="form-control"
          name="nome"
          autoComplete="off"
          value={nome}
          onChange={handleNomeInput}
          placeholder="NOME COMPLETO"
        />
        <br />
        <button className="btn btn-success" style={{ width: '100%' }}>
          Ver
        </button>
      </form>
      <hr style={{ margin: '1rem' }} />
      {auth.user.cargo === 'Coordenacao' && (
        <>
          <p className="text-center lead">
            Ocorrências Pendentes, Aprovadas ou Reprovadas
          </p>
          <Link
            className="btn btn-info"
            style={{ width: '100%', color: '#FAFAFA' }}
          >
            Ver
          </Link>
          <hr style={{ margin: '1rem' }} />
          <p className="text-center lead">Cadastros Gerais</p>
          <Link
            className="btn btn-info "
            style={{ width: '100%', color: '#FAFAFA' }}
          >
            Ver
          </Link>
          <hr style={{ backgroundColor: '#FFF', margin: '1rem' }} />
        </>
      )}
    </div>
  );
};
