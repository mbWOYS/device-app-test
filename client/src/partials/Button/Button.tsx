import React from 'react';

import classes from "./Button.module.scss";

interface ButtonProps {
    click: () => void;
    btnTest: string;
    styles: string
}

const button: React.FC<ButtonProps> = ({ click, btnTest, styles }): JSX.Element => {
    return (
        <div className={ classes.Button }>
            <button
                onClick={ click }
                className={ `${ classes.ButtonBox } ${styles === "add" ? classes.AddToCard : classes.RemoveFromCard}`}
            >
                { btnTest }
            </button>
        </div>
    )
};

export default button;