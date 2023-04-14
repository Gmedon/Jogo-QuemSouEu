import { sequelize } from "../instance/mysql";
import { Model, DataTypes } from "sequelize"

interface JogoType extends Model {
    id: number,
    img: string,
    titulo: string,
    desc: string
}

export const Jogo = sequelize.define<JogoType>("jogo", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    img: {
        type: DataTypes.STRING
    },
    titulo: {
        type: DataTypes.STRING
    },
    desc: {
        type: DataTypes.STRING
    }
}, {
    tableName: "jogo",
    timestamps: false
});