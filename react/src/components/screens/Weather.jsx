import React, { Component } from 'react';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../theme/AppShell.Style';
import {
    Card,
    CardHeader,
} from '@material-ui/core/';
import { Icon } from '../'

class Weather extends Component {
    render() {
        const {
            classes,
        } = this.props;
        return (
            <div className={cn(classes.screenCentered)}>
                <Card className={cn(classes.screenCard)}>
                    <CardHeader
                        avatar={<Icon icon={`weather`} color={`secondary`} />}
                        title={`Weather`}
                    />
                </Card>
            </div>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(Weather)
);
