const { Model, DataTypes } = require('sequelize');

class Estudante extends Model {
  static init(sequelize) {
    super.init(
      {
        nome_estudante: DataTypes.STRING,
        ra: DataTypes.STRING,
        cpf: DataTypes.STRING,
        foto: DataTypes.STRING,
        email_institucional: DataTypes.STRING,
      },
      {
        sequelize,
      },
    );
  }
  static associate(models) {
    this.belongsTo(models.Responsavel, { foreignKey: 'id_responsaveis' });
    this.hasMany(models.Registro, {
      foreignKey: 'id_estudantes',
    });
    this.belongsToMany(models.Disciplina, {
      foreignKey: 'id_estudantes',
      through: 'DisciplinasEstudantes',
    });
    this.belongsToMany(models.Curso, {
      foreignKey: 'id_estudantes',
      through: 'Matriculas',
      otherKey: 'id_cursos',
    });
    this.hasMany(models.Ocorrencia, {
      foreignKey: 'id_estudantes',
    });
  }
}

module.exports = Estudante;
