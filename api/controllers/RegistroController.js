const Estudante = require('../models/Estudante');
const Registro = require('../models/Registro');

module.exports = {
  async store(req, res) {
    const {
      descricao,
      dia_liberacao,
      id_estudantes,
    } = req.body;

    const data = new Date();
    const dia = dia_liberacao.slice(0, 2);
    const mes = parseInt(dia_liberacao.slice(3, 5)) - 1;
    const dia_hora_saida = new Date(data.getFullYear(), mes, dia);

    const estudante = Estudante.findByPk(id_estudantes);

    if (!estudante) {
      return res.status(400).json({ error: 'Estudante was not found ' });
    }

    const registro = await Registro.create({
      dia_hora_saida,
      descricao,
      dia_liberacao,
      id_estudantes,
    });

    return res.json(registro);
  },
  async delete(req, res) {
    const { id } = req.params;
    const registro = await Registro.findByPk(id);
    if (!registro) {
      return res.status(400).json({ error: 'Registo not found ' });
    }
    await registro.destroy();
    return res.json({ isDestroyed: true });
  },
};
