import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStore } from "./";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './theme/AppShell.Style';
import {
    CssBaseline,
    Drawer,
} from '@material-ui/core/';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import muiTheme from './theme/mui';
import {
    About,
    BottomAppBar,
    ClockWork,
    EnviroPhat,
    Home,
    Map,
    Nav,
    NotFound,
    Weather,
    Webcam,
    Settings,
} from './components';

class AppShell extends Component {

    render() {
        const {
            classes,
            nav,
        } = this.props;
        const { open } = nav
        const store = getStore();

        return (
            <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
                <ClockWork />
                <div className={cn(classes.appShell)}>
                    <CssBaseline />
                    <main>
                        <Router>
                            <nav className={cn(classes.navDrawer)} aria-label="Nav">
                                <Drawer
                                    className={cn(classes.navDrawerWidth)}
                                    anchor={`bottom`}
                                    open={open}
                                    onClose={() => {
                                        store.dispatch({ type: "SYSTEM/NAV/CLOSE" });
                                    }}>
                                    <Nav />
                                </Drawer >
                            </nav >
                            <Settings />
                            <Switch>
                                <Route exact path="/" render={props => {
                                    return (<Home />);
                                }} />
                                <Route exact path="/envirophat" render={props => {
                                    return (<EnviroPhat />);
                                }} />
                                <Route exact path="/about" render={props => {
                                    return (<About />);
                                }} />
                                <Route exact path="/webcam" render={props => {
                                    return (<Webcam />);
                                }} />
                                <Route exact path="/map" render={props => {
                                    return (<Map />);
                                }} />
                                <Route exact path="/weather" render={props => {
                                    return (<Weather />);
                                }} />
                                <Route component={NotFound} />
                            </Switch>
                        </Router>
                    </main>
                    <BottomAppBar />
                </div>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        nav: store.system.nav,
    };
};

export default (
    connect(
        mapStateToProps, null
    )(withStyles(styles, { withTheme: true })(AppShell))
);
