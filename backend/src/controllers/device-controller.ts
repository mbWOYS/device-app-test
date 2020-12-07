const deviceManager = require('../managers/device-manager');
const responseHelper = require('../helpers/response-helpers');
import { Response, Request } from "express";

/**
 * Device controller
 */

class DeviceController {
    static async deviceList(req: Request, res: Response) {
        try {
            responseHelper.createSuccessResponse(res, await new deviceManager(req).deviceList());
        } catch (error) {
            responseHelper.createErrorResponse(res, error.message, error.status);
        }
    }

    static async deviceDetails(req: Request, res: Response) {
        try {
            responseHelper.createSuccessResponse(res, await new deviceManager(req).deviceDetails());
        } catch (error) {
            responseHelper.createErrorResponse(res, error.message, error.status);
        }
    }

    static async updateDeviceDetails(req: Request, res: Response) {
        try {
            responseHelper.createSuccessResponse(res, await new deviceManager(req).updateDeviceDetails());
        } catch (error) {
            responseHelper.createErrorResponse(res, error.message, error.status);
        }
    }

    static async addedToCardDeviceList (req: Request, res: Response) {
        try {
            responseHelper.createSuccessResponse(res, await new deviceManager(req).addedToCardDeviceList());
        } catch (error) {
            responseHelper.createErrorResponse(res, error.message, error.status);
        }
    }
}

module.exports = DeviceController;
