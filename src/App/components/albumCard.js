import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

//actions
import { setCurrent } from '../actions/albums';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
};

class AlbumCard extends Component {
    constructor(props) {
        super(props);
        this.albumClick = this.albumClick.bind(this);
    }
    albumClick(event) {
        this.props.albums.forEach(album => {
            if (album.id == event.currentTarget.value) {
                this.props.setCurrent(album);
            }
        });
        this.props.history.push('/album/' + event.currentTarget.value)
    }
    render() {
        return (
            <Card className={this.props.classes.card}>
                <CardActionArea onClick={this.albumClick} value={this.props.value}>
                    {!this.props.time &&
                        <CardMedia
                            className={this.props.classes.media}
                            image={"http://localhost:3001/" + this.props.picture}
                            title={this.props.title}
                        />
                    }

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.title}
                        </Typography>
                        <Typography component="p">
                            {this.props.artist}
                        </Typography>
                        {this.props.time &&
                            <Typography component="p">
                                {"tiempo total: " + this.props.time}
                            </Typography>
                        }

                    </CardContent>
                </CardActionArea>
            </Card>
        )
    };
}
const mapDispatchToProps = (dispatch/*, otherProps */) => ({
    setCurrent: (i) => dispatch(setCurrent(i)),
})
const mapStateToProps = (state/*, otherProps */) => {
    return {
        albums: state.albums.collection,
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(withStyles(styles)(AlbumCard)));