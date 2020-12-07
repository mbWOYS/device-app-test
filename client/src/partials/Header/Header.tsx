import React from 'react';

import bag from "../../assets/images/bag.png";
import { DeviceType } from "../../types/devices";

import classes from "./Header.module.scss";
import { constants } from "../../modules/constants";

interface HeaderProps {
    devices: DeviceType[];
}

const header: React.FC<HeaderProps> = ({ devices }): JSX.Element => {

    const countAddedToCartItems = () => {
        return devices.map((device => {
            return device.addedToCard
        })).reduce((sum, current) => {
            return sum + current
        }, 0)
    };

    return (
        <header className={ classes.Header }>
           <div className={ classes.HeaderContent }>
               <div>
                   <h1>
                       { constants.strings.deviceStore }
                   </h1>
               </div>
               <div>
                   <div className={ classes.CardBtn }>
                       <img src={bag} alt="card"/>
                   </div>
                   <div className={ classes.Total }>{ countAddedToCartItems() }</div>
               </div>
           </div>

        </header>
    )
};

export default header;