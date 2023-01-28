const Estudante = require('../models/Estudante');
const Usuario = require('../models/Usuarios');
const Ocorrencia = require('../models/Ocorrencia');
const Advertencia = require('../models/Advertencia');

module.exports = {
  async store(req, res) {
    const {
      nome_usuario_relacionado,
      tipo_ocorrencia,
      status,
      id_estudantes,
      id_usuarios,
    } = req.body;

    const data_ocorrencia = new Date();

    const estudante = await Estudante.findByPk(id_estudantes);

    if (!estudante) {
      return res.status(400).json({ error: 'Estudante was not found ' });
    }

    const usuario = await Usuario.findByPk(id_usuarios);

    if (!usuario) {
      return res.status(400).json({ error: 'Usuario was not found ' });
    }

    const ocorrencia = await Ocorrencia.create({
      data_ocorrencia,
      nome_usuario_relacionado,
      tipo_ocorrencia,
      status,
      id_estudantes,
    });

    await ocorrencia.addUsuarios(usuario);

    return res.json(ocorrencia);
  },

  async delete(req, res) {
    const { id } = req.params;
    const ocorrencia = await Ocorrencia.findByPk(id);
    if (!ocorrencia) {
      return res.status(400).json({ error: 'Ocorrencia was not found ' });
    }
    await ocorrencia.destroy();
    return res.json({ isDestroyed: true });
  },
};
