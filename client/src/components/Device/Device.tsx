import React from "react";

import classes from "./Device.module.scss";

interface deviceProps {
    deviceName: string;
    price: number;
    totalQty: number
    selected: () => void;
}

const device: React.FC<deviceProps> = ({
        deviceName,
        price,
        totalQty,
        selected
    }) => {
    return (
        <div className={ classes.Device } onClick={ selected }>
            <h2>{ deviceName }</h2>
            <div className={ classes.DeviceContent }>
                <span>{ price }$</span>
                <span>Available: { totalQty }</span>
            </div>
        </div>
    )
};

export default device;