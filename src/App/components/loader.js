import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
const Loader = () => (
    <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
    >
        <CircularProgress disableShrink /></Grid>
);
export default Loader;