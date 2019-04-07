import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Loader from './loader';
import AlbumCard from './albumCard';
import { connect } from 'react-redux';

// Acciones
import { setCollection } from '../actions/albums';

class Albums extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            albums: []
        }
    }

    async componentDidMount() {
        try {
            const res = await fetch('/albums');
            const json = await res.json();
            this.setState((prevState) => ({
                ...prevState,
                loading: false,
                albums: json
            }));
            this.props.setCollection(json);
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
                        : <Grid
                            container
                            spacing={24}
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                        >
                            {this.state.albums.map(album =>
                                <Grid item sm={3} onClick={this.albumClick} value={album} key={album.id}>
                                    <AlbumCard title={album.name} picture={album.cover} artist={album.artist} value={album.id} />
                                </Grid>
                            )}
                        </Grid>
                }
            </div>

        )
    }

}

const mapDispatchToProps = (dispatch/*, otherProps */) => ({
    setCollection: (i) => dispatch(setCollection(i)),
})

export default connect(
    () => ({}),
    mapDispatchToProps
)(Albums);