const { Model, DataTypes } = require('sequelize');

class Curso extends Model {
  static init(sequelize) {
    super.init(
      {
        nome_curso: DataTypes.STRING,
        periodo_curso: DataTypes.STRING,
      },
      {
        sequelize,
      },
    );
  }
  static associate(models) {
    this.belongsToMany(models.Estudante, {
      foreignKey: 'id_cursos',
      through: 'Matriculas',
      otherKey: 'id_estudantes'
    });
    this.hasMany(models.Disciplina, {
      foreignKey: 'id_cursos',
    });
  }
}

module.exports = Curso;
