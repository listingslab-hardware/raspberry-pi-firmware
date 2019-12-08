import React, { Component } from 'react';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../theme/App.Style';
import {
    Grid,
} from '@material-ui/core/';
import {
    PaneAirQuality,
    PaneHumidity,
    PaneLocation,
    PanePressure,
    PaneTitle,
    PaneWebcam,
    PaneTemperature,
} from './';

class View extends Component {

    state = {
        updated: Date.now(),
        timer: null,
        timerDelay: 30,
    }

    componentDidMount() {
        const {
            timer,
            timerDelay
        } = this.state;
        if (!timer) {
            this.setState({ timer: setInterval(this.update, timerDelay * 1000) });
        }
    }

    componentWillUnmount() {
        const {
            timer
        } = this.state;
        clearInterval(timer);
    }

    update = () => {
        this.setState({ updated: Date.now() })
    }

    render() {
        const {
            classes,
        } = this.props;

        return (
            <div className={cn(classes.view)}>
                <Grid container>
                    <Grid
                        item
                        xs={12} sm={12} md={12} lg={12} xl={12}
                        className={cn(classes.gridItem)}>
                        <PaneTitle />
                    </Grid>
                    <Grid
                        item
                        xs={12} sm={7} md={7} lg={7} xl={7}
                        className={cn(classes.gridItem)}>
                        <PaneWebcam />
                    </Grid>
                    <Grid
                        item
                        xs={12} sm={5} md={5} lg={5} xl={5}
                        className={cn(classes.gridItem)}>
                        <PaneLocation />
                    </Grid>
                    <Grid
                        item
                        xs={12} sm={6} md={3} lg={3} xl={2}
                        className={cn(classes.gridItem)}>
                        <PaneTemperature />
                    </Grid>

                    <Grid
                        item
                        xs={12} sm={6} md={3} lg={3} xl={2}
                        className={cn(classes.gridItem)}>
                        <PaneAirQuality />
                    </Grid>
                    <Grid
                        item
                        xs={12} sm={6} md={3} lg={3} xl={2}
                        className={cn(classes.gridItem)}>
                        <PanePressure />
                    </Grid>

                    <Grid
                        item
                        xs={12} sm={6} md={3} lg={3} xl={2}
                        className={cn(classes.gridItem)}>
                        <PaneHumidity />
                    </Grid>



                </Grid>
            </div>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(View))
);
