import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
};

class AlbumCard extends Component {
    render() {
        return (
            <Card className={this.props.classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={this.props.classes.media}
                        image={"http://localhost:3001/" + this.props.picture}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.title}
                        </Typography>
                        <Typography component="p">
                            {this.props.artist}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    };
}

export default withStyles(styles)(AlbumCard);