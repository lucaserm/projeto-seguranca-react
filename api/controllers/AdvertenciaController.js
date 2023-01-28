const Ocorrencia = require('../models/Ocorrencia');
const Advertencia = require('../models/Advertencia');

module.exports = {
  async store(req, res) {
    const { relatorio_advertencia, id_ocorrencias } = req.body;
    const data_resolucao = new Date()

    const advertencia = await Advertencia.create({
      relatorio_advertencia,
      data_resolucao,
      id_ocorrencias,
    });

    return res.json(advertencia);
  },
  async delete(req, res) {
    const { id } = req.params;
    const advertencia = await Advertencia.findByPk(id);
    if (!advertencia) {
      return res.status(400).json({ error: 'Advertencia was not found ' });
    }
    await advertencia.destroy();
    return res.json({ isDestroyed: true });
  },
};
