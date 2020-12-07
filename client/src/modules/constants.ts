
export const constants = {
    // currently used just for local development
    API_HOST: 'http://localhost:5000',

    endpoints: {
        GET_DEVICES: '/app-store/api/v1/devices',
        GET_DEVICES_ADDED_TO_CARD: '/app-store/api/v1/added-to-card-devices',
    },

    strings: {
        add: "Add to card",
        remove: "Remove from card",
        added: "was added to the card",
        removed: "was removed from the card",
        moveItemError: "Cannot move item. Please try again later",
        deviceStore: "Device Store App",
        noDevices: "No devices to display",
        errMessage: "Error loading info"
    }
};