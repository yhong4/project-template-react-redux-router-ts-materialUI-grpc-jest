import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


import AppHeader from './Header';
import AppDrawer from './Drawer';
import AppContent from './Content';

import { styles } from './styles';

interface IAppLayout {
    classes:any;
}

const AppLayout: React.SFC<IAppLayout> = (props:IAppLayout) => {
    const { classes } = props;

    return(
        <div className={classes.root}>
            <CssBaseline />
            <AppHeader />
            <AppDrawer />
            <AppContent />
        </div>
    )
}

export default withStyles(styles as any)(AppLayout as any);
