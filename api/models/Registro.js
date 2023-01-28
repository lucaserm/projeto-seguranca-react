const { Model, DataTypes } = require('sequelize');

class Registro extends Model {
  static init(sequelize) {
    super.init(
      {
        dia_hora_saida: DataTypes.DATE,
        descricao: DataTypes.TEXT,
        dia_liberacao: DataTypes.STRING,
      },
      {
        sequelize,
      },
    );
  }
  static associate(models) {
    this.belongsTo(models.Estudante, {
      foreignKey: 'id_estudantes',
    });
  }
}

module.exports = Registro;
