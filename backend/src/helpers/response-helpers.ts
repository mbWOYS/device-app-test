import { Response } from "express";

/**
 * ResponseHelper
 */

class ResponseHelper {
    /**
     * @param {Object} res
     * @param {string} errorMessage
     * @param {number} httpStatusCode
     * @param {Object} headers
     */
    static createErrorResponse(res: Response, errorMessage: any, httpStatusCode = 500, headers = {}) {
        this.updateResponse(res, headers, httpStatusCode).json({
            success: false,
            status: httpStatusCode,
            error: errorMessage || 'An unexpected error has occurred.'
        });
    }

    /**
     * @param {Object} res
     * @param {Object} responseData
     * @param {number} httpStatusCode
     * @param {Object} headers
     */
    static createSuccessResponse(res: Response, responseData = {}, httpStatusCode = 200, headers = {}) {
        this.updateResponse(res, headers, httpStatusCode).json({
            success: true,
            data: responseData
        });
    }

    /**
     * @param {Object} res
     * @param {Object} headers
     * @param {number} httpStatusCode
     *
     * @returns {Object}
     */
    static updateResponse(res: any, headers: any, httpStatusCode: number) {
        if (res) {
            res.set(headers);

            res.status(httpStatusCode);

            return res;
        }

        return {};


    }
}

module.exports = ResponseHelper;
