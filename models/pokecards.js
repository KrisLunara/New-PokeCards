'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PokeCards extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PokeCards.init({
    name: DataTypes.STRING,
    hp: DataTypes.INTEGER,
    type: DATATypes.STRING,
    typeimg: DATATypes.STRING,
    image: DATATypes.STRING,
    atk1nm: DATATypes.STRING,
    at1en: DataTypes.INTEGER,
    atk1base: DataTypes.INTEGER,
    dmg1: DataTypes.INTEGER,
    atk2nm: DATATypes.STRING,
    atk2en: DataTypes.INTEGER,
    atk2base: DataTypes.INTEGER,
    dmg2: DataTypes.INTEGER,
    weak: DATATypes.STRING,
    weakquant: DataTypes.INTEGER,
    resist: DATATypes.STRING,
    resistquant:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PokeCards',
    tableName: `pokecards`,
    timestamps: false
  });
  return PokeCards;
};