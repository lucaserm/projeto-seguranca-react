import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { Link } from 'react-router-dom';

export const Estudante = () => {
  const auth = useContext(AuthContext);
  return (
    <div>
      <hr style={{ backgroundColor: '#FFF', margin: '1rem' }} />
      <h1 className="text-center">Horários</h1>
      <div className="form-group">
        <p className="text-center lead">--- Nome do Estudante ---</p>
        <input
          type="text"
          className="form-control"
          value={auth.estudante.nome_estudante}
          disabled={true}
          style={{ textAlign: 'center' }}
        />
        <br />
      </div>
      <div className="responsive-table">
        <table className="table" style={{ backgroundColor: '#eee' }}>
          <thead>
            <tr align="center">
              <td>
                <b>DISCIPLINA</b>
              </td>
              <td>
                <b>PERÍODO</b>
              </td>
              <td>
                <b>DIA DA SEMANA</b>
              </td>
              <td>
                <b>INÍCIO</b>
              </td>
              <td>
                <b>FIM</b>
              </td>
            </tr>
          </thead>
          <tbody>
            {auth.estudante.Disciplinas.map((disciplina) => (
              <>
                {disciplina.Horarios.length == 1 && (
                  <>
                    <tr key={disciplina.id} align="center">
                      <td>{disciplina.nome_disciplina}</td>
                      <td>{disciplina.Horarios[0].periodo_horarios}</td>
                      <td>{disciplina.Horarios[0].dia_semana}</td>
                      <td>{disciplina.Horarios[0].tempo_inicio}</td>
                      <td>{disciplina.Horarios[0].tempo_fim}</td>
                    </tr>
                  </>
                )}
                {disciplina.Horarios.length == 2 && (
                  <>
                    <tr key={disciplina.id} align="center">
                      <td>{disciplina.nome_disciplina}</td>
                      <td>{disciplina.Horarios[0].periodo_horarios}</td>
                      <td>{disciplina.Horarios[0].dia_semana}</td>
                      <td>{disciplina.Horarios[0].tempo_inicio}</td>
                      <td>{disciplina.Horarios[0].tempo_fim}</td>
                    </tr>
                    <tr>
                      <td>{disciplina.nome_disciplina}</td>
                      <td>{disciplina.Horarios[1].periodo_horarios}</td>
                      <td>{disciplina.Horarios[1].dia_semana}</td>
                      <td>{disciplina.Horarios[1].tempo_inicio}</td>
                      <td>{disciplina.Horarios[1].tempo_fim}</td>
                    </tr>
                  </>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
      <hr style={{ backgroundColor: '#FFF', margin: '1rem' }} />
      <p className="text-center lead">Ocorrências e Advertências</p>
      <button
        className="btn button btn-danger"
        style={{ margin: 0, width: '100%' }}
      >
        Advertências
      </button>
      <hr style={{ backgroundColor: '#FFF', margin: '1rem' }} />
      <p className="text-center lead">Requisições para Liberação</p>
      <button
        className="btn button btn-info"
        style={{ margin: 0, width: '100%', color: '#FFF' }}
      >
        Ver
      </button>
      <hr style={{ backgroundColor: '#FFF', margin: '1rem' }} />
      <Link
        to="/index"
        className="btn button btn-dark"
        style={{ margin: 0, width: '100%' }}
      >
        Voltar
      </Link>

      {auth.estudante.Disciplinas.length == 0 && (
        <>
          <p className="text-center lead">
            Insira um aluno válido ou adicione horários a este aluno.
          </p>
          <hr style={{ backgroundColor: '#FFF', margin: '1rem' }} />
          <button className="btn button btn-danger" style={{ margin: 0 }}>
            Advertências
          </button>
          <hr style={{ backgroundColor: '#FFF', margin: '1rem' }} />
          <p className="text-center lead">Requisições para Liberação</p>
          <button className="btn button btn-info small">Ver</button>
          <hr style={{ backgroundColor: '#FFF', margin: '1rem' }} />
          <Link to="/index" className="btn button btn-dark">
            Voltar
          </Link>
        </>
      )}
    </div>
  );
};
