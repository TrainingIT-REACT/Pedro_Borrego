import React from 'react';
import Reproductor from './reproductor';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    bottomBarr: {
        marginLeft: -24,
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: "75px",
        backgroundColor: '#212121',
    }
});

function BottomBar(props) {
    const { classes } = props;
    return (
        <div className={classes.bottomBarr}>
            <Grid container spacing={24} direction="row"
                justify="center"
                alignItems="center">
                <Grid item xs>
                    <Paper>Bottom bar space 1</Paper>
                </Grid>
                <Grid item xs>
                    <Reproductor></Reproductor>
                </Grid>
                <Grid item xs>
                    <Paper>Bottom bar space 2</Paper>
                </Grid>
            </Grid>

        </div>
    )
}

BottomBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomBar);