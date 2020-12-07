import React from 'react';

import classes from './ErrorMessage.module.scss';

interface errorMessageProps {
    message: string;
}

const errorMessage: React.FC<errorMessageProps> = ({ message }) => {
    return (
        <div className={ classes.Error }>
            <span>{ message }</span>
        </div>
    )
};

export default errorMessage;