const Responsavel = require('../models/Responsavel');

module.exports = {
  async index(req, res) {
    const responsavel = await Responsavel.findAll();
    return res.json(responsavel);
  },
  async store(req, res) {
    const { nome_responsavel, telefone_responsavel, email_responsavel } =
      req.body;
    const responsavel = await Responsavel.create({
      nome_responsavel,
      telefone_responsavel,
      email_responsavel,
    });
    return res.json(responsavel);
  },
};
