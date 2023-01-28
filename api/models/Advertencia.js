const { Model, DataTypes } = require('sequelize');

class Advertencia extends Model {
  static init(sequelize) {
    super.init(
      {
        relatorio_advertencia: DataTypes.STRING,
        data_resolucao: DataTypes.DATE,
      },
      {
        sequelize,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Ocorrencia, {
      foreignKey: 'id_ocorrencias',
      as: 'Ocorrencia'
    });
  }
}

module.exports = Advertencia;
