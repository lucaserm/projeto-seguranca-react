const { Model, DataTypes } = require('sequelize');

class Ocorrencia extends Model {
  static init(sequelize) {
    super.init(
      {
        data_ocorrencia: DataTypes.DATE,
        nome_usuario_relacionado: DataTypes.STRING,
        tipo_ocorrencia: DataTypes.STRING,
        status: DataTypes.STRING,
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
    this.belongsToMany(models.Usuarios, {
      foreignKey: 'id_usuarios',
      through: 'OcorrenciasUsuarios',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    this.hasOne(models.Advertencia, {
      foreignKey: 'id_ocorrencias',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      as: 'Advertencia'
    });
  }
}

module.exports = Ocorrencia;
