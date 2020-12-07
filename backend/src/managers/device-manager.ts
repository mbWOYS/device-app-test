import { Request } from "express";
import { Op } from "sequelize";

import { Device } from "../helpers/db/models";

class DeviceManager {

    constructor(private req: Request) {
    }

    async deviceList () {
        return Device.findAll();
    }

    async addedToCardDeviceList () {
        return Device.findAll({ where: { addedToCard: { [Op.gte]: 1 } } })
    }

    async deviceDetails () {
        return Device.findByPk(this.req.params.deviceId);
    }

    async updateDeviceDetails () {
        const {
            addedToCard,
            totalQty
        } = this.req.body;

        return Device.findByPk(this.req.params.deviceId).then(device => {
            const prevTotalQty = device?.getDataValue("totalQty");

            if (prevTotalQty && prevTotalQty < addedToCard || addedToCard < 0 || totalQty < 0) {
                throw new Error("Value is invalid");
            }

            device?.setDataValue("totalQty", totalQty);
            device?.setDataValue("addedToCard", addedToCard);

            return device?.save()

        }).then(result => {
            return result;
        }).catch(e => {
            throw new Error(`${e.message}. Data was not saved to DB.`);
        })

    }
}

 module.exports = DeviceManager;