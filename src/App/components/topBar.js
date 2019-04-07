import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { connect } from 'react-redux';

//UI imports
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import Public from '@material-ui/icons/Public';
import Subscriptions from '@material-ui/icons/Subscriptions';
import { fade } from '@material-ui/core/styles/colorManipulator';

// Componentes que se renderizarán en las distintas rutas
import Login from "./login"
import Perfil from "./perfil"
import Inicio from './inicio'
import Albums from './albums'
import BottomBar from "./bottomBar"
import Album from "./album"

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        backgroundColor: '#212121',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
        marginBottom: 70
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    // search styles
    grow: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        marginRight: 25,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
});

class TopBarLayout extends React.Component {
    state = {
        open: false,
    };
    constructor(props) {
        super(props);
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);

    }
    handleDrawerOpen = () => {
        this.setState({ open: true });
        setTimeout(() => {
            this.setState({ open: false });
        }, 5000);
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes, theme } = this.props;
        const { open } = this.state;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Reactify <small><i>by Borrego</i></small>
                        </Typography>
                        <div className={classes.grow} />
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </div>
                    </Toolbar>
                </AppBar>
                <Router>
                    <Drawer
                        className={classes.drawer}
                        variant="persistent"
                        anchor="left"
                        open={open}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <div className={classes.drawerHeader}>
                            <IconButton onClick={this.handleDrawerClose}>
                                <ChevronLeftIcon />
                            </IconButton>
                        </div>
                        <Divider />
                        <List>
                            <NavLink activeClassName="active" to="/Inicio">
                                <ListItem button key='Inicio'>
                                    <ListItemIcon> <Public /></ListItemIcon>
                                    <ListItemText primary='Inicio' />
                                </ListItem>
                            </NavLink>
                            <NavLink activeClassName="active" to="/Login">
                                <ListItem button key='Login'>
                                    <ListItemIcon> <Lock /></ListItemIcon>
                                    <ListItemText primary='Login' />
                                </ListItem>
                            </NavLink>
                            <NavLink activeClassName="active" to="/Perfil">
                                <ListItem button key='Perfil'>
                                    <ListItemIcon> <AccountCircle /></ListItemIcon>
                                    <ListItemText primary='Perfil' />
                                </ListItem>
                            </NavLink>
                        </List>
                        <Divider />
                        <List>
                            <NavLink activeClassName="active" to="/Albums">
                                <ListItem button key='Albums'>
                                    <ListItemIcon> <Subscriptions /></ListItemIcon>
                                    <ListItemText primary='Albums' />
                                </ListItem>
                            </NavLink>
                        </List>
                    </Drawer>
                    <main
                        className={classNames(classes.content, {
                            [classes.contentShift]: open,
                        })}
                    >
                        <div className={classes.drawerHeader} />
                        <Route path="/" exact component={this.props.login ? Inicio : Login} />
                        <Route path="/Inicio" exact component={this.props.login ? Inicio : Login} />
                        <Route path="/Albums" exact component={Albums} />
                        <Route path="/Login" component={Login} />
                        <Route path="/Perfil" component={this.props.login ? Perfil : Login} />
                        <Route path="/Album/:id" exact component={Album} />
                        <BottomBar></BottomBar>
                    </main>
                </Router>
            </div>
        );
    }
}

TopBarLayout.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

const mapStateToProps = (state/*, otherProps */) => {
    return {
        login: state.user.login,
    }
}
export default connect(
    mapStateToProps,
    () => ({}),
)(withStyles(styles)(TopBarLayout));
// export default withStyles(styles)(TopBarLayout)
