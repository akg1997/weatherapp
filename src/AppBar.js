import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import {fade, makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: '100%',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 2),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '70%',
            '&:focus': {
                width: '80%',
            },
        },
    },
}));

//38.45   40.26
export default props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{background: "#00838f"}}>
                <Toolbar>

                    <div className={classes.search}>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        ><MenuIcon/>
                        </IconButton>
                        <InputBase id="city"
                                   placeholder="Search…"
                                   classes={{
                                       root: classes.inputRoot,
                                       input: classes.inputInput,
                                   }}
                                   inputProps={{'aria-label': 'search'}}
                        />
                        <IconButton onClick={props.getWeatherForecast} style={{float: "right"}}
                                    edge="start"
                                    className={classes.menuButton}
                                    color="inherit"
                                    aria-label="open drawer"
                        ><SearchIcon/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
/*
  <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
* */