export {};
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("device_app_db", "user", "password", {
    dialect: "mysql",
    host: "db",
    define: {
        timestamps: false
    }
});
