import React from 'react';
import { Modal } from "@material-ui/core";
import classes from "./Notification.module.scss";

interface NotificationProps {
    notify: boolean;
    close: () => void;
    data: string[];
}

const notification: React.FC<NotificationProps> = ({ notify, close, data }): JSX.Element => {

    return (
        <>
            <Modal
                open={ notify }
                onClose={ close }
                closeAfterTransition
                className={ classes.Modal }
            >
                <div className={ classes.ModalContent }>
                    <div>
                        { data }
                    </div>
                </div>
            </Modal>
        </>
    )
};

export default notification;