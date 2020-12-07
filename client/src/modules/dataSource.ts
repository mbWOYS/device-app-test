import axios from 'axios';

import { constants } from "../modules/constants";
import { deviceId } from "../types/devices";

const dataSource = {
    getDeviceList: (url: string) => {
        return axios.get(url);
    },

    updateDeviceDetails: (url: string, id: deviceId, data: any) => {
        return axios.put(`${constants.API_HOST}${url}/${id}`, data);
    }

};

export default dataSource;