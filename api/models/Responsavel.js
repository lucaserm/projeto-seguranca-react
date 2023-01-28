const { Model, DataTypes } = require('sequelize');

class Responsavel extends Model {
  static init(sequelize) {
    super.init(
      {
        nome_responsavel: DataTypes.STRING,
        telefone_responsavel: DataTypes.STRING,
        email_responsavel: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'Responsaveis',
      },
    );
  }

  static associate(models) {
    this.hasMany(models.Estudante, {
      foreignKey: 'id_responsaveis',
    });
  }
}

module.exports = Responsavel;
