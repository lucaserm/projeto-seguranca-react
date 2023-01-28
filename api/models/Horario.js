const { Model, DataTypes } = require('sequelize');

class Horario extends Model {
  static init(sequelize) {
    super.init(
      {
        periodo_horarios: DataTypes.STRING,
        dia_semana: DataTypes.STRING,
        tempo_inicio: DataTypes.INTEGER,
        tempo_fim: DataTypes.INTEGER,
      },
      {
        sequelize,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Disciplina, { foreignKey: 'id_disciplinas' });
  }
}

module.exports = Horario;
