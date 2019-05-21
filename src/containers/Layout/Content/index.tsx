import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { styles } from './styles';

interface IAppConntenProps {
    classes: any;
}

class AppContent extends React.PureComponent<IAppConntenProps, {}>{
    
    public render(){
        const { classes } = this.props;
        return(
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                    <Typography variant="h4" gutterBottom component="h2">
                        Orders
                    </Typography>
                    <Typography component="div" className={classes.chartContainer}>
                    </Typography>
                    <Typography variant="h4" gutterBottom component="h2">
                        Products
                    </Typography>
                    <div className={classes.tableContainer}>
                </div>
          </main>
        )
    }
}

export default withStyles(styles as any)(AppContent as any);