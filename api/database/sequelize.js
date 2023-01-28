const Sequelize = require('sequelize');
const connection = new Sequelize('projetinho', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  timestamp: true,
});

const Advertencia = require('../models/Advertencia');
const Curso = require('../models/Curso');
const Disciplina = require('../models/Disciplina');
const Estudante = require('../models/Estudante');
const Horario = require('../models/Horario');
const Ocorrencia = require('../models/Ocorrencia');
const Registro = require('../models/Registro');
const Responsavel = require('../models/Responsavel');
const Usuario = require('../models/Usuarios');

Advertencia.init(connection);
Curso.init(connection);
Disciplina.init(connection);
Estudante.init(connection);
Horario.init(connection);
Ocorrencia.init(connection);
Registro.init(connection);
Responsavel.init(connection);
Usuario.init(connection);

Advertencia.associate(connection.models);
Curso.associate(connection.models);
Disciplina.associate(connection.models);
Estudante.associate(connection.models);
Horario.associate(connection.models);
Ocorrencia.associate(connection.models);
Registro.associate(connection.models);
Responsavel.associate(connection.models);
Usuario.associate(connection.models);

module.exports = connection;
