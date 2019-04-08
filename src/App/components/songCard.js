import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { connect } from 'react-redux';

// Acciones
import { setplayingSong } from '../actions/songs';

const styles = theme => ({
    card: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
    playIcon: {
        height: 38,
        width: 38,
    },
});

class SongCard extends Component {
    constructor(props) {
        super(props);
        this.playClick = this.playClick.bind(this);
        this.convertTime = this.convertTime.bind(this);

    }
    playClick(event) {
        this.props.setplayingSong({
            "id": this.props.id,
            "name": this.props.name,
            "audio": this.props.audio,
            "seconds": this.props.seconds,
            "album_id": this.props.album_id
        })
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
            <Card className={this.props.classes.card}>
                <div className={this.props.classes.details}>
                    <CardContent className={this.props.classes.content}>
                        <Typography component="h6" variant="h6">
                            {this.props.name}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {this.convertTime(this.props.seconds)}
                        </Typography>
                    </CardContent>
                    <div className={this.props.classes.controls}>
                        <IconButton aria-label="Play/pause" onClick={this.playClick}>
                            <PlayArrowIcon className={this.props.classes.playIcon} />
                        </IconButton>
                    </div>
                </div>
                {/* <CardMedia
                    className={this.props.classes.cover}
                    image="/static/images/cards/live-from-space.jpg"
                    title="Live from space album cover"
                /> */}
            </Card>
        );

    }

}
const mapDispatchToProps = (dispatch/*, otherProps */) => ({
    setplayingSong: (i) => dispatch(setplayingSong(i)),
})

export default connect(
    () => ({}),
    mapDispatchToProps
)(withStyles(styles)(SongCard));

