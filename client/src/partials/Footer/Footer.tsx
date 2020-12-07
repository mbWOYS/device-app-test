import React from 'react';

import { constants } from "../../modules/constants";
import classes from "./Footer.module.scss";
import { DeviceType } from "../../types/devices";

interface FooterProps {
    devices: DeviceType[];
}

const footer: React.FC<FooterProps> = ({ devices }): JSX.Element => {
    return (
        <>
            { devices.length ? <div className={ classes.Footer }>
                <h4>
                    { constants.strings.deviceStore }
                </h4>
            </div> : null }
        </>
    )
};

export default footer;