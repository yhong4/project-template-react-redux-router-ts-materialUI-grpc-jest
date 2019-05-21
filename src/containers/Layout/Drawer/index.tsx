import * as React from 'react';
import { withStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Divider  from '@material-ui/core/Divider';
import List  from '@material-ui/core/List';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import classNames from 'classnames';
import { styles } from './styles';

import { mainListItems, secondaryListItems} from './list';

import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as AppStateAction from '../action';

interface IAppDrawerProps {
    classes: any;
    drawerOpen:boolean;
    closeDrawer:()=>AppStateAction.IAppAction;
}

class AppDrawer extends React.PureComponent<IAppDrawerProps> {

    public render() {
        const { classes, drawerOpen, closeDrawer } = this.props;
        
        return(
            <Drawer
                variant="permanent"
                classes={{
                    paper: classNames(classes.drawerPaper, !drawerOpen && classes.drawerPaperClose),
                }}
                open={ drawerOpen }
                >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={closeDrawer}>
                    <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List className={ classes.listIcon }>{mainListItems}</List>
                <Divider />
                <List className={ classes.listIcon }>{secondaryListItems}</List>
            </Drawer>
        )

    }

}

const mapStateToProps = (state)=>{
    return{
        drawerOpen: state.AppStateReducer.drawerOpen
    }
}

const mapDispatchToProps = (dispatch:Dispatch<AppStateAction.IAppAction>)=> ({
    closeDrawer: bindActionCreators(AppStateAction.closeDrawer, dispatch)
    })


export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles as any)(AppDrawer as any));
// export default connect(mapStateToProps)(AppDrawer);
