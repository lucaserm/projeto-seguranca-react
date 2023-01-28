const Disciplina = require('../models/Disciplina');
const Horario = require('../models/Horario');

module.exports = {
  async store(req, res) {
    const {
      periodo_horarios,
      dia_semana,
      tempo_inicio,
      tempo_fim,
      id_disciplinas,
    } = req.body;

    const disciplina = await Disciplina.findByPk(id_disciplinas);

    if (!disciplina) {
      return res.status(400).json({ error: 'Disciplina was not found ' });
    }

    const horario = await Horario.create({
      periodo_horarios,
      dia_semana,
      tempo_inicio,
      tempo_fim,
      id_disciplinas,
    });

    return res.json(horario);
  },

  async delete(req, res) {
    const { id } = req.params;
    const horario = await Horario.findByPk(id);
    if (!horario) {
      return res.status(400).json({ error: 'Horario was not found ' });
    }
    await horario.destroy();
    return res.json({ isDestroyed: true });
  },
};
