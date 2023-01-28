const { Model, DataTypes } = require('sequelize');

class Disciplina extends Model {
  static init(sequelize) {
    super.init(
      {
        nome_disciplina: DataTypes.STRING,
        semestre: DataTypes.INTEGER,
        turma: DataTypes.STRING,
      },
      {
        sequelize,
      },
    );
  }
  static associate(models) {
    this.belongsTo(models.Curso, { foreignKey: 'id_cursos' });
    this.hasMany(models.Horario, {
      foreignKey: 'id_disciplinas',
    });
    this.belongsToMany(models.Estudante, {
      foreignKey: 'id_disciplinas',
      through: 'DisciplinasEstudantes',
    });
  }
}

module.exports = Disciplina;
