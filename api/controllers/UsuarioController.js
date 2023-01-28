const Ocorrencia = require('../models/Ocorrencia');
const Usuario = require('../models/Usuarios');

module.exports = {
  async index(req, res) {
    const { code, password } = req.body;
    const usuario = await Usuario.findOne({
      where: [{ codigo_servidor: code }, { senha: password }],
    });
    return res.json(usuario);
  },
  async store(req, res) {
    const { nome_usuario, codigo_servidor, senha, cargo } = req.body;

    const usuario = await Usuario.create({
      nome_usuario,
      codigo_servidor,
      senha,
      cargo,
    });

    return res.json(usuario);
  },
  async delete(req, res) {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(400).json({ error: 'Usuario was not found ' });
    }
    await usuario.destroy();
    return res.json({ isDestroyed: true });
  },
};
