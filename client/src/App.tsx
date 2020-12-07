import React from "react";

import Header from "./partials/Header/Header";
import Devices from "./containers/Devices/Devices";
import Footer from "./partials/Footer/Footer";
import Notification from "./components/Notification/Notification";

import dataSource from "./modules/dataSource";

import { constants } from "./modules/constants";
import { DeviceType } from "./types/devices";

interface AppState {
    devices: DeviceType[];
    notify: boolean;
    data: string[];
    error: boolean;

}

class App extends React.Component<unknown, AppState> {

    state: AppState = {
        devices: [],
        notify: false,
        data: [],
        error: false
    };

    channel = new BroadcastChannel("device");

    async componentDidMount(): Promise<void> {

        this.channel.onmessage = (e) => {
            if (e.data) {
                this.setState({
                    notify: true,
                    data: e.data
                });
                this.updatedDeviceInfo();
            }

        };

        this.updatedDeviceInfo();
    }

    updatedDeviceInfo = async (message?: string): Promise<void> => {
        try {
            const res = await dataSource.getDeviceList(`${constants.API_HOST}${constants.endpoints.GET_DEVICES}`);
            const devices = res.data.data;

            this.channel.postMessage(message);


            this.setState({
                devices
            })
        } catch (e) {
            this.setState({
                error: true
            })
        }
    };

    componentWillUnmount(): void {
        this.channel.close();
    }

    onCloseModal = (): void => {
        this.setState({ notify: false })
    };

    render (): JSX.Element {
        const {
            devices,
            notify,
            data,
            error
        } = this.state;

        return (
            <>
                <Header devices={devices}/>
                <Devices
                    devices={devices}
                    updatedDeviceInfo={this.updatedDeviceInfo}
                    error={error}
                />

                <Notification
                    notify={notify}
                    close={ this.onCloseModal }
                    data={data}
                />

                <Footer devices={devices} />
            </>
        )
    }
}

export default App;