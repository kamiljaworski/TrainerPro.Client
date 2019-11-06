import { Breadcrumbs, Link, Paper, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Accessibility from '@material-ui/icons/Accessibility';
import AccountBox from '@material-ui/icons/AccountBox';
import React from 'react';
import { useHistory, Link as RouterLink } from 'react-router-dom';
import RouterPaths from '../../../../shared-js/enums/RouterPaths';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1, 2),
    },
    link: {
        display: 'flex',
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
}));

const Home: React.FC = () => {
    const classes = useStyles();
    const history = useHistory();
    function handleClick() {
        history.push(RouterPaths.LoginRegister);
    }

    return (
        <Paper elevation={0} className={classes.root}>
            <Breadcrumbs aria-label="breadcrumb">
                <IconButton
                    color="secondary"
                    onClick={() =>  history.push(RouterPaths.LoginRegister)} className={classes.link}>
                    <AccountBox className={classes.icon} />
                    Sign in/Register
                </IconButton>
                
                <IconButton
                    color="secondary"
                    onClick={() =>  history.push(RouterPaths.TrainerProfile)} className={classes.link}>
                    <Accessibility className={classes.icon} />
                    Trainer Profile
                </IconButton>
            </Breadcrumbs>
        </Paper>
    );
}

export default Home;
