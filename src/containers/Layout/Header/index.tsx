import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';

import { styles } from './styles';

import { bindActionCreators, Dispatch } from 'redux';
import * as AppStateAction from '../action';
import { connect } from 'react-redux';

interface IAppBarProps {
    classes: any;
    theme?: any;
    drawerOpen: boolean;
    openDrawer: ()=>AppStateAction.IAppAction;
}



class Header extends React.PureComponent<IAppBarProps>{

    public render() {
        const { classes, drawerOpen, openDrawer } = this.props;

        return (
            <AppBar
                position="absolute"
                className={classNames(classes.appBar, drawerOpen && classes.appBarShift)}
            >
                <Toolbar disableGutters={!drawerOpen} className={classes.toolbar}>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={openDrawer}
                        className={classNames(
                            classes.menuButton,
                            drawerOpen && classes.menuButtonHidden,
                        )}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        className={classes.title}
                    >
                    Dashboard
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            )
    }
}


const mapStateToProps = (state) => {
    return {
        drawerOpen: state.AppStateReducer.drawerOpen
    }
}
const mapDispatchToProps = (dispatch:Dispatch<AppStateAction.IAppAction>)=> ({
    openDrawer: bindActionCreators(AppStateAction.openDrawer, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles as any)(Header as any));