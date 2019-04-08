import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import { connect } from 'react-redux';

//UI imports
import Grid from '@material-ui/core/Grid';
import SongCard from './songCard';
import AlbumCard from './albumCard';

//actions
import { editInfo } from '../actions/user'

const styles = theme => ({
    input: {
        margin: theme.spacing.unit,
    },
});

class Profile extends React.Component {
    constructor(props) {
        super(props);
        //referencias
        this.username = React.createRef();
        this.password = React.createRef();
        this.email = React.createRef();
        this.tlf = React.createRef();
        //binds
        this.userDataCanged = this.userDataCanged.bind(this);
    }
    userDataCanged() {
        this.props.editInfo({
            usarname: this.username.value,
            password: this.password.value,
            email: this.email.value,
            telephone: this.tlf.value
        })
    }
    componentDidMount() {
        this.username.value = this.props.userInfo.user.usarname;
        this.password.value = this.props.userInfo.user.password;
        this.email.value = this.props.userInfo.user.email;
        this.tlf.value = this.props.userInfo.user.telephone;
    }
    render() {
        return (
            <>
                <Grid container direction="row" justify="center" alignItems="flex-start">
                    <Input
                        onChange={this.userDataCanged}
                        inputRef={el => this.username = el}
                        placeholder="Usuario"
                        className={this.props.classes.input}
                        inputProps={{
                            'aria-label': 'Description',
                        }}
                    />
                    <Input
                        onChange={this.userDataCanged}
                        inputRef={el => this.password = el}
                        placeholder="Contraseña"
                        className={this.props.classes.input}
                        inputProps={{
                            'aria-label': 'Description',
                        }}
                        type="password"
                    />
                    <Input
                        onChange={this.userDataCanged}
                        inputRef={el => this.email = el}
                        placeholder="Email"
                        className={this.props.classes.input}
                        inputProps={{
                            'aria-label': 'Description',
                        }}
                    />
                    <Input
                        onChange={this.userDataCanged}
                        inputRef={el => this.tlf = el}
                        placeholder="Teléfono"
                        className={this.props.classes.input}
                        inputProps={{
                            'aria-label': 'Description',
                        }}
                    />
                </Grid>
                {
                    this.props.visitedAlbums.length > 0
                    && <>
                        <Grid container direction="row" justify="center" alignItems="flex-start">
                            <h1>Últimos albumes visitados</h1>
                        </Grid>
                        <Grid container direction="row" justify="center" alignItems="flex-start">
                            {this.props.visitedAlbums.slice(this.props.visitedAlbums.length > 4 ?
                                this.props.visitedAlbums.length - 4 : 0).map(album =>
                                    <Grid item sm={3} onClick={this.albumClick} value={album} key={album.id}>
                                        <AlbumCard title={album.name} picture={album.cover} artist={album.artist} value={album.id} />
                                    </Grid>
                                )}
                        </Grid></>
                }
                {
                    this.props.songHistroy.length > 0
                    && <>
                        <Grid container direction="row" justify="center" alignItems="flex-start">
                            <h1>Últimas canciones reproducidas</h1>
                        </Grid>
                        <Grid container direction="row" justify="center" alignItems="flex-start" spacing={24}>
                            {this.props.songHistroy.slice(this.props.songHistroy.length > 4 ?
                                this.props.songHistroy.length - 4 : 0).map(song =>
                                    <Grid item sm={4} md={3} key={song.id}>
                                        <SongCard {...song} />
                                    </Grid>
                                )}
                        </Grid></>
                }
            </>

        );
    }

}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state/*, otherProps */) => {
    return {
        visitedAlbums: state.albums.visitedAlbums,
        userInfo: state.user,
        songHistroy: state.songs.history
    }
}
const mapDispatchToProps = (dispatch/*, otherProps */) => ({
    editInfo: (user) => dispatch(editInfo(user)),
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Profile));
