const { Op } = require('sequelize');

const Curso = require('../models/Curso');
const Disciplina = require('../models/Disciplina');
const Estudante = require('../models/Estudante');
const Horario = require('../models/Horario');
const Ocorrencia = require('../models/Ocorrencia');
const Registro = require('../models/Registro');
const Responsavel = require('../models/Responsavel');
const Usuarios = require('../models/Usuarios');

module.exports = {
  async index(req, res) {
    const { cpf, ra, nome } = req.body; 

    const estudante = await Estudante.findOne({
      where: {
        [Op.or]: [
          { ra },
          { cpf },
          { nome_estudante: nome }
        ]
      },
      attributes: [
        'id',
        'nome_estudante',
        'ra',
        'cpf',
        'foto',
        'email_institucional',
      ],
      include: [
        {
          model: Responsavel,
          attributes: [
            'id',
            'nome_responsavel',
            'telefone_responsavel',
            'email_responsavel',
          ],
        },
        {
          model: Curso,
          attributes: ['id', 'nome_curso', 'periodo_curso'],
          through: {
            attributes: [],
          },
        },
        {
          model: Disciplina,
          attributes: ['id', 'nome_disciplina', 'semestre', 'turma'],
          include: {
            model: Horario,
            attributes: [
              'id',
              'periodo_horarios',
              'dia_semana',
              'tempo_inicio',
              'tempo_fim',
            ],
          },
          through: {
            attributes: [],
          },
        },
        {
          model: Registro,
          attributes: ['id', 'dia_liberacao', 'descricao', 'dia_hora_saida'],
        },
        {
          model: Ocorrencia,
          attributes: [
            'id',
            'data_ocorrencia',
            'nome_usuario_relacionado',
            'tipo_ocorrencia',
            'status',
          ],
          include: [
            {
              model: Usuarios,
              attributes: ['id', 'nome_usuario', 'codigo_servidor', 'cargo'],
              through: {
                attributes: [],
              },
            },
            {
              association: 'Advertencia',
              attributes: ['id', 'relatorio_advertencia', 'data_resolucao'],
            },
          ],
        },
      ],
    });
    return res.json(estudante);
  },

  async store(req, res) {
    const {
      nome_estudante,
      ra,
      cpf,
      foto,
      email_institucional,
      id_responsaveis,
    } = req.body;

    const responsavel = Responsavel.findByPk(id_responsaveis);

    if (!responsavel) {
      return res.status(400).json({ error: 'User not found ' });
    }

    const estudante = await Estudante.create({
      nome_estudante,
      ra,
      cpf,
      foto,
      email_institucional,
      id_responsaveis,
    });
    return res.json(estudante);
  },
  async delete(req, res) {
    const { id } = req.params;
    const estudante = await Estudante.findByPk(id);
    if (!estudante) {
      return res.status(400).json({ error: 'Estudante not found ' });
    }
    await estudante.destroy();
    return res.json({ isDestroyed: true });
  },
};
