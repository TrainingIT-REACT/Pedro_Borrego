import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    reproductor: {
        marginLeft: "10%",
        marginTop: "2%"
    }
});

function Reproductor(props) {
    const { classes } = props;
    return (
        <div>
            <audio className={classes.reproductor} src="http://localhost:3001/music/funky_energy_loop.mp3" controls />
        </div>
    )
}

Reproductor.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Reproductor);