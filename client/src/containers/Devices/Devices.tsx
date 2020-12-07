import React, { Component } from 'react';
import { CircularProgress } from '@material-ui/core';

import Device from "../../components/Device/Device";
import DeviceCard from "../../components/DeviceCard/DeviceCard";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import { DeviceType } from "../../types/devices";
import { constants } from "../../modules/constants";

import classes from "./Devices.module.scss";

interface DevicesProps {
    devices: DeviceType[];
    updatedDeviceInfo: () => void;
    error: boolean;
}

interface DevicesState {
    selectedDeviceId: number | null;
}

class Devices extends Component<DevicesProps, DevicesState> {
    state: DevicesState = {
        selectedDeviceId: null,
    };


    deviceSelectHandler = (id: number) => {
        this.setState({ selectedDeviceId: id });
    };

    modalOnCloseEvent = () => {
        this.setState({ selectedDeviceId: null });
    };

    render (): JSX.Element {
        const {
            devices,
            updatedDeviceInfo,
            error
        } = this.props;

        const {
            selectedDeviceId
        } = this.state;


        const deviceList = devices.map((device: DeviceType) =>  {
            const {
                deviceId,
                deviceName,
                price,
                totalQty,
            } = device;

            return <Device
                key={deviceId}
                deviceName={deviceName}
                price={price}
                totalQty={totalQty}
                selected={() => this.deviceSelectHandler(deviceId)}
            />
        });

        return (
            <>
                {/*device wrapper*/}
                <div>
                    { !error ? deviceList && deviceList.length ? deviceList :
                        deviceList && deviceList.length === 0 ? <ErrorMessage message={ constants.strings.noDevices } /> :
                            <CircularProgress className={ classes.Loader } /> :
                                <ErrorMessage message={ constants.strings.errMessage } />
                    }
                </div>

                <DeviceCard
                    updatedDeviceInfo={updatedDeviceInfo}
                    selectedDeviceId={ selectedDeviceId }
                    deviceList={devices}
                    onCloseModal={ this.modalOnCloseEvent }
                />
            </>
        );
    }

}

export default Devices;