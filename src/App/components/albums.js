import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Loader from './loader';
import AlbumCard from './albumCard';
import { NavLink } from "react-router-dom";


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
                                <Grid item sm={3}>
                                    <NavLink to={'/Album/' + album.id}>
                                        <AlbumCard title={album.name} picture={album.cover} artist={album.artist} />
                                    </NavLink>
                                </Grid>
                            )}
                        </Grid>
                }
            </div>

        )
    }

}
export default Albums;