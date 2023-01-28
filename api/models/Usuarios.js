const { Model, DataTypes } = require('sequelize');

class Usuarios extends Model {
  static init(sequelize){
    super.init({
      nome_usuario: DataTypes.STRING,
      codigo_servidor: DataTypes.STRING,
      senha: DataTypes.STRING,
      cargo: DataTypes.STRING,
    }, {
      sequelize,
    })
  }

  static associate(models){
    this.belongsToMany(models.Ocorrencia, {
      foreignKey: 'id_ocorrencias',
      through: 'OcorrenciasUsuarios',
    });
  }
}

module.exports = Usuarios;
