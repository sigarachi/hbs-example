const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Note = sequelize.define("note", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Note;