import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

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
    render() {
        return (
            <Card className={this.props.classes.card}>
                <div className={this.props.classes.details}>
                    <CardContent className={this.props.classes.content}>
                        <Typography component="h6" variant="h6">
                            {this.props.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {this.props.duration}
                        </Typography>
                    </CardContent>
                    <div className={this.props.classes.controls}>
                        <IconButton aria-label="Play/pause">
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



export default withStyles(styles)(SongCard);