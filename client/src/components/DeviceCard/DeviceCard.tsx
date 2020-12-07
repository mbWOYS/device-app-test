import React from "react";

import { Modal } from "@material-ui/core"

import Button from '../../partials/Button/Button';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import dataSource from "../../modules/dataSource";
import {deviceId, DeviceType} from "../../types/devices";
import { constants } from "../../modules/constants";

import classes from "./DeviceCard.module.scss";

interface DeviceCardProps {
    selectedDeviceId: number | null;
    onCloseModal: () => void;
    deviceList: DeviceType[];
    updatedDeviceInfo: (message: any) => void;
}

interface DeviceCardState {
    loadedDevice: DeviceType | null;
    error: boolean;
    addedToCard: number | null;
}


class DeviceCard extends React.Component<DeviceCardProps, DeviceCardState>{
    state: DeviceCardState = {
        loadedDevice: null,
        error: false,
        addedToCard: null
    };

    clearDeviceInfo = () => {
        this.setState({ loadedDevice: null, error: false })
    };

    getSelectedDeviceDetails = (list: DeviceType[], id: deviceId) =>
        list.find(device => device?.deviceId === id);

    updateDeviceInfo = async (action: string, device: DeviceType) => {
        const {
            selectedDeviceId,
            updatedDeviceInfo,

        } = this.props;

        if  (device) {
            const dataToUpdate = {
                addedToCard: action === "add" ? device.addedToCard + 1 : device.addedToCard -1,
                totalQty: action === "add" ? device.totalQty - 1 : device.totalQty + 1
            };

            try {
                const res = await dataSource.updateDeviceDetails(constants.endpoints.GET_DEVICES, selectedDeviceId, dataToUpdate);

                updatedDeviceInfo(`${ res.data.data.deviceName }
                                   ${ action === "add" ? constants.strings.added : constants.strings.removed }.
                                   Currently in card: ${ res.data.data.addedToCard }
                `);

            } catch (e) {
                this.setState({ error: true })
            }
        }


    };

    addItemToCard = () => {
        const {
            selectedDeviceId,
            deviceList,
        } = this.props;

        const loadedDevice = this.getSelectedDeviceDetails(deviceList, selectedDeviceId);

        if  (loadedDevice && loadedDevice?.totalQty > 0) {
            this.updateDeviceInfo("add", loadedDevice);
        }
    };

    removeItemFromCard = () => {
        const {
            selectedDeviceId,
            deviceList,
        } = this.props;

        const loadedDevice = this.getSelectedDeviceDetails(deviceList, selectedDeviceId);

        if  (loadedDevice && loadedDevice?.addedToCard > 0) {
            this.updateDeviceInfo("remove", loadedDevice);
        }
    };

    render (): JSX.Element {
        const {
            onCloseModal,
            selectedDeviceId,
            deviceList
        } = this.props;

        const {
            error
        } = this.state;

        const loadedDeviceDetails = this.getSelectedDeviceDetails(deviceList, selectedDeviceId);

        return (
            <>
                <Modal
                    open={ selectedDeviceId !== null }
                    onClose={ onCloseModal }
                    onBackdropClick={ this.clearDeviceInfo }
                    closeAfterTransition
                    className={ classes.Modal }
                >
                    <div className={ classes.ModalContent }>
                        <div>
                            <h1>{ loadedDeviceDetails?.deviceName }</h1>
                            <span>Description: { loadedDeviceDetails?.description }</span>
                        </div>

                        <div>
                            <span className={ classes.Price }>Price: <b>{ loadedDeviceDetails?.price }$</b></span>
                            <hr/>
                            <span>Total in storage: { loadedDeviceDetails?.totalQty }</span>

                            <div className={ classes.ButtonHolder }>
                                <Button
                                    click={ this.addItemToCard }
                                    btnTest={ constants.strings.add }
                                    styles={ "add" }
                                />
                                <Button
                                    click={ this.removeItemFromCard }
                                    btnTest={ constants.strings.remove }
                                    styles={ "remove" }
                                />
                            </div>

                            <span>This item in card: { loadedDeviceDetails?.addedToCard }</span>

                            {
                                error ? <ErrorMessage
                                    message={ constants.strings.moveItemError }
                                /> : null
                            }
                        </div>
                    </div>

                </Modal>
            </>
        )
    }
}

export default DeviceCard;