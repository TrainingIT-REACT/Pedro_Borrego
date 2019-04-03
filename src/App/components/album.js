import React, { Component } from 'react';
import Loader from './loader';
import Grid from '@material-ui/core/Grid';
import { NavLink } from "react-router-dom";
import SongCard from './songCard';
import ArrowBackRounded from '@material-ui/icons/ArrowBackRounded';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    backLink: {
        textDecoration: 'none',
        color: 'grey'
    }
};


class Album extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            songs: [],
            albumId: this.props.match.params.id
        }
    }

    async componentDidMount() {
        // const { handle } = this.props.match.params
        try {
            const res = await fetch('/songs');
            const json = await res.json();
            this.setState((prevState) => ({
                ...prevState,
                loading: false,
                songs: json
            }));
        } catch (err) {
            console.error("Error accediendo al servidor", err);
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.loading ?
                        <Loader />
                        : <>
                            <NavLink className={this.props.classes.backLink} to={'/Albums/'}><ArrowBackRounded /></NavLink>
                            <h1>Album: {this.state.albumId}</h1>
                            <Grid
                                container
                                spacing={24}
                                direction="row"
                                justify="flex-start"
                                alignItems="center"
                            >
                                {this.state.songs.map(song =>
                                    song.album_id == this.state.albumId ?
                                        <Grid item sm={4} md={3}>
                                            <SongCard {...song} />
                                        </Grid>
                                        : ''
                                )}
                            </Grid>
                        </>
                }
            </div>
        )

    }
}
export default withStyles(styles)(Album);