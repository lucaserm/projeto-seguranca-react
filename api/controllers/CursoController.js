const Estudante = require('../models/Estudante');
const Curso = require('../models/Curso');
const Advertencia = require('../models/Advertencia');

module.exports = {
  async index(req, res) {
    const cursos = await Curso.findAll({
      include: [
        {
          model: Estudante,
          through: {
            attributes: [],
          },
        },
        {
          model: Advertencia,
        },
      ],
    });
    return res.json(cursos);
  },

  async store(req, res) {
    const { nome_curso, periodo_curso, id_estudantes } = req.body;

    const estudante = await Estudante.findByPk(id_estudantes);

    if (!estudante) {
      return res.status(400).json({ error: 'Estudante not found ' });
    }

    const curso = await Curso.create({
      nome_curso,
      periodo_curso,
    });

    await curso.addEstudante(estudante);

    const result = await Curso.findOne({
      where: { nome_curso },
      include: Estudante,
    });

    return res.json(result);
  },

  async delete(req, res) {
    const { id } = req.params;
    const curso = await Curso.findByPk(id);
    if (!curso) {
      return res.status(400).json({ error: 'Curso not found ' });
    }
    await curso.destroy();
    return res.json({ isDestroyed: true });
  },
};
