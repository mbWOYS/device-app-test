const deviceController = require('../controllers/device-controller');
const routerGroup = require('express').Router();
require('express-group-routes');

/**
 * v1 endpoinds of app routes
 * */

routerGroup.group('/app-store/api/v1', (router: any) => {

    router.get('/devices', deviceController.deviceList);

    router.get('/added-to-card-devices', deviceController.addedToCardDeviceList);

    router.get('/devices/:deviceId', deviceController.deviceDetails);

    router.put('/devices/:deviceId', deviceController.updateDeviceDetails);
});

module.exports = routerGroup;