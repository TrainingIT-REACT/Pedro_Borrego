import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

//redux actions
import { play, pause } from '../actions/songs';

//UI imports
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseArrowIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const styles = theme => ({
    reproductor: {
        marginTop: "4px"
    },
    playIcon: {
        fontSize: "45px"
    }
});

class Reproductor extends React.Component {
    constructor(props) {
        super(props);
        this.audio = React.createRef();
        this.playPause = this.playPause.bind(this);
    }

    playPause() {
        if (this.props.nowPLaying.audio != "") {
            if (this.props.playing) {
                this.props.pause();
                this.audio.pause();
            } else {
                this.props.play();
                this.audio.play();
            }
        }
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <div className={this.props.classes.reproductor}>
                    <IconButton aria-label="Previous">
                        <SkipPreviousIcon />
                    </IconButton>
                    <IconButton aria-label="Play/pause" onClick={this.playPause}>
                        {
                            this.props.playing ?
                                <PauseArrowIcon className={this.props.classes.playIcon} /> :
                                <PlayArrowIcon className={this.props.classes.playIcon} />
                        }
                    </IconButton>
                    <IconButton aria-label="Next">
                        <SkipNextIcon />
                    </IconButton>
                    <audio
                        ref={(input) => { this.audio = input }}
                        src={this.props.nowPLaying.audio}
                        autoPlay
                        hidden
                    />
                </div>

            </Grid>
        )
    }
}

Reproductor.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch/*, otherProps */) => ({
    play: () => dispatch(play()),
    pause: () => dispatch(pause()),
})
const mapStateToProps = (state/*, otherProps */) => {
    return {
        nowPLaying: state.songs.nowPLaying,
        playing: state.songs.playing,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Reproductor));

