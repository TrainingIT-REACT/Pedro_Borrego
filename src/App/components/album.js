import React, { Component } from 'react';
import Loader from './loader';
import Grid from '@material-ui/core/Grid';
import { NavLink } from "react-router-dom";
import SongCard from './songCard';
import AlbumCard from './albumCard';
import ArrowBackRounded from '@material-ui/icons/ArrowBackRounded';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

// Acciones
import { setSongList } from '../actions/songs';

const styles = {
    backLink: {
        textDecoration: 'none',
        color: 'grey',
        fontSize: "40px",
        marginLeft: "10px"
    },
    albumInfo: {
        margin: "15px"
    }
};


class Album extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            currentAlbum: "",
            time: "00:00"
        }
    }


    async componentDidMount() {
        if (this.props.songs.length === 0) {
            try {
                const res = await fetch('/songs');
                const json = await res.json();
                this.setState((prevState) => ({
                    ...prevState,
                    loading: false,
                    songs: json
                }));
                this.props.setSongList(json);

            } catch (err) {
                console.error("Error accediendo al servidor", err);
            }
        } else {
            this.setState((prevState) => ({
                ...prevState,
                loading: false
            }));
        }
        this.props.albums.forEach(album => {
            if (album.id == this.props.match.params.id) {
                this.setState((prevState) => ({
                    ...prevState,
                    currentAlbum: album
                }));
            }
        });
        let totalTime = 0;
        this.props.songs.forEach(song => {
            if (song.album_id == this.props.match.params.id) {
                totalTime += song.seconds;
            }
            console.log("totalTime = " + totalTime)
            this.setState((prevState) => ({
                ...prevState,
                time: this.convertTime(totalTime)
            }))
        });
    }
    convertTime(sec) {
        var min = Math.floor(sec / 60);
        (min >= 1) ? sec = sec - (min * 60) : min = '00';
        (sec < 1) ? sec = '00' : void 0;
        (min.toString().length == 1) ? min = '0' + min : void 0;
        (sec.toString().length == 1) ? sec = '0' + sec : void 0;
        return min + ':' + sec;
    }
    render() {
        return (
            <div>
                {
                    this.state.loading ?
                        <Loader />
                        : <>
                            <NavLink className={this.props.classes.backLink} to={'/Albums/'}><ArrowBackRounded /></NavLink>
                            <div
                                className={this.props.classes.albumInfo}>
                                <AlbumCard
                                    title={this.state.currentAlbum.name}
                                    picture={this.state.currentAlbum.cover}
                                    artist={this.state.currentAlbum.artist}
                                    value={this.state.currentAlbum.id}
                                    time={this.state.time} />
                            </div>

                            <Grid
                                container
                                spacing={24}
                                direction="row"
                                justify="flex-start"
                                alignItems="flex-start"
                            >
                                {this.props.songs.map(song =>
                                    song.album_id == this.props.match.params.id ?
                                        <Grid item sm={4} md={3} key={song.id}>
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

const mapDispatchToProps = (dispatch/*, otherProps */) => ({
    setSongList: (i) => dispatch(setSongList(i)),
})
const mapStateToProps = (state/*, otherProps */) => {
    return {
        songs: state.songs.songlist,
        albums: state.albums.collection
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Album));