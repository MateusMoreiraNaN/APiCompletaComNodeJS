import { Model, DataTypes } from "sequelize"
import { sequelize } from "../instances/mysql"

export interface listInstance extends Model{
    id: number
    title: string
    created_at: string
    status: string
}

export const toList = sequelize.define<listInstance>('toList',{
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false

    },
    created_at:{
        type: DataTypes.STRING,
        allowNull: false
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: 'tasks',
    timestamps: false
})
