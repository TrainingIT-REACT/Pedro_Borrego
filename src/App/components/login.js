import React, { Component } from 'react';
import { connect } from 'react-redux';

//redux actions
import { logIn, logOut } from '../actions/user';

//UI impeorts
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const styles = theme => ({

    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
    },

});

class Login extends Component {
    constructor(props) {
        super(props);
        //referencias
        this.name = React.createRef();
        this.pass = React.createRef();
        //binds
        this.doLogin = this.doLogin.bind(this);
        this.doLogOut = this.doLogOut.bind(this);
    }
    doLogin() {
        this.props.login({ usarname: this.name.value, password: this.pass.value });
    }
    doLogOut() {
        this.props.logout();
    }
    render() {
        const { classes } = this.props;
        console.log(this.props)
        if (!this.props.registered) {
            return (
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <h3>Ingresa en Reactify:</h3>
                    <TextField
                        inputRef={el => this.name = el}
                        id="outlined-name"
                        label="Nombre de Usuario"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        inputRef={el => this.pass = el}
                        id="outlined-uncontrolled"
                        label="Contraseña"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        type="password"
                    />
                    <Button variant="outlined"
                        className={classes.button}
                        onClick={this.doLogin}
                    > Login  </Button>

                </Grid>
            )
        } else {
            return (
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <h3>Estas registrado como <i>{this.props.user.usarname}</i></h3>
                    <Button variant="outlined"
                        className={classes.button}
                        onClick={this.doLogOut}
                    > Cerrar Sesion  </Button>

                </Grid>
            )
        }



    }
}
Login.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapDispatchToProps = (dispatch/*, otherProps */) => ({
    login: (user) => dispatch(logIn(user)),
    logout: () => dispatch(logOut()),
})
const mapStateToProps = (state/*, otherProps */) => {
    return {
        registered: state.user.login,
        user: state.user.user
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Login));