export {};
import { Model, DataTypes, Optional } from "sequelize";

import { sequelize } from "./database";

interface UserAttributes {
    deviceId: number;
    deviceName: string;
    description: string;
    price: number;
    totalQty: number;
    addedToCard: number;
}

interface UserCreationAttributes extends Optional<UserAttributes, "deviceId"> {}

interface DeviceInstance
    extends Model<UserAttributes, UserCreationAttributes>,
        UserAttributes {}

export const Device = sequelize.define<DeviceInstance>("Device", {
    deviceId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    deviceName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: DataTypes.STRING,
    price: {
        type: DataTypes.FLOAT(2),
        allowNull: false
    },
    totalQty: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    addedToCard: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});
