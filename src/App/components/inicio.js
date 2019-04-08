import React from 'react';
import { connect } from 'react-redux';

//UI imports
import Grid from '@material-ui/core/Grid';
import SongCard from './songCard';
import Loader from './loader';

//actions
import { setSongList } from '../actions/songs';

class Inicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
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
    }
    render() {
        return (
            this.state.loading ?
                <Loader />
                :
                <div>
                    <h1>Recomendaciones de Reactify:</h1>
                    <Grid
                        container
                        spacing={24}
                        direction="row"
                        justify="center"
                        alignItems="flex-start"
                    >

                        {this.props.songs.map(song =>
                            this.props.recomendations.indexOf(song.id) != -1 &&
                            <Grid item sm={4} md={3} key={song.id}>
                                <SongCard {...song} />
                            </Grid>
                        )}
                    </Grid>
                </div>
        )
    }

}

const mapStateToProps = (state/*, otherProps */) => {
    return {
        songs: state.songs.songlist,
        recomendations: state.songs.recomendations
    }
}
const mapDispatchToProps = (dispatch/*, otherProps */) => ({
    setSongList: (i) => dispatch(setSongList(i)),
})
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Inicio);