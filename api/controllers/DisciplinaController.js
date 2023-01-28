const Estudante = require('../models/Estudante');
const Curso = require('../models/Curso');
const Disciplina = require('../models/Disciplina');
const Horario = require('../models/Horario');

module.exports = {
  async index(req, res) {
    const disciplina = await Disciplina.findAll({
      include: [
        {
          model: Estudante,
          through: {
            attributes: [],
          },
        },
        {
          model: Curso,
          attributes: ['id', 'nome_curso', 'periodo_curso'],
        },
        {
          model: Horario,
          attributes: [
            'id',
            'periodo_horarios',
            'dia_semana',
            'tempo_inicio',
            'tempo_fim',
          ],
        },
      ],
    });
    return res.json(disciplina);
  },

  async store(req, res) {
    const { nome_disciplina, semestre, turma, id_cursos, id_estudantes } =
      req.body;

    const estudante = await Estudante.findByPk(id_estudantes);

    if (!estudante) {
      return res.status(400).json({ error: 'Estudante was not found ' });
    }

    const curso = await Curso.findByPk(id_cursos);

    if (!curso) {
      return res.status(400).json({ error: 'Curso was not found ' });
    }

    const disciplina = await Disciplina.create({
      nome_disciplina,
      semestre,
      turma,
      id_cursos,
    });

    await disciplina.addEstudante(estudante);

    const result = await Disciplina.findOne({
      where: { nome_disciplina },
      include: Estudante,
    });

    return res.json(result);
  },

  async delete(req, res) {
    const { id } = req.params;
    const disciplina = await Disciplina.findByPk(id);
    if (!disciplina) {
      return res.status(400).json({ error: 'Disciplina was not found ' });
    }
    await disciplina.destroy();
    return res.json({ isDestroyed: true });
  },
};
