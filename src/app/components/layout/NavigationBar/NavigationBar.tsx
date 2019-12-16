import { Breadcrumbs, Paper, IconButton, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Accessibility, AccountBox, Assignment, CalendarToday } from '@material-ui/icons';
import React from 'react';
import { useHistory } from 'react-router-dom';
import RouterPaths from '../../../../shared-js/enums/RouterPaths';
import { isUserInRole } from '../../../helpers/UserHelper';
import NavigationBarProps from './NavigationBarProps';
import UserRoles from '../../../../shared-js/enums/UserRoles';
import { persistor } from '../../../store';
import { toast } from 'react-toastify';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1, 2),
        display: 'flex',
        justifyContent: 'space-between'
    },
    link: {
        display: 'flex',
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
    signOutButton: {
        marginRight: 20,
        height: '80%',
        alignSelf: 'center'
    }
}));


const NavigationBar: React.FC<NavigationBarProps> = ({ user }) => {
    const classes = useStyles();
    const history = useHistory();

    const isTrainer = isUserInRole(user && user.roles, UserRoles.Trainer);

    function signOutUser() {
        toast.success("You have been logged out");
        persistor.purge();
        setTimeout(() => {
            window.location.replace(window.location.origin + RouterPaths.LoginRegister);
        }, 2000);
    }

    return (
        <Paper elevation={0} className={classes.root}>
            {isTrainer
                ? <TrainerNavigationBar history={history} classes={classes} />
                : <UserNavigationBar history={history} classes={classes} />
            }
            <Button
                onClick={signOutUser}
                variant="contained"
                color="secondary"
                className={classes.signOutButton}
            >
                Sign out
            </Button>
        </Paper>
    );
}

export default NavigationBar;


interface UserNavigationBar {
    history: any,
    classes: Record<"root" | "icon" | "link", string>
}

const UserNavigationBar: React.FC<UserNavigationBar> = ({ history, classes }) => (
    <Breadcrumbs aria-label="breadcrumb">
        <IconButton
            color="secondary"
            onClick={() => history.push(RouterPaths.UserProfile)} className={classes.link}>
            <AccountBox className={classes.icon} />
            Profile
        </IconButton>
        <IconButton
            color="secondary"
            onClick={() => history.push(RouterPaths.Trainers)} className={classes.link}>
            <Accessibility className={classes.icon} />
            Trainers
        </IconButton>
        <IconButton
            color="secondary"
            onClick={() => history.push(RouterPaths.UserProducts)} className={classes.link}>
            <Assignment className={classes.icon} />
            My products
        </IconButton>
        <IconButton
            color="secondary"
            onClick={() => history.push(RouterPaths.UserTrainings)} className={classes.link}>
            <CalendarToday className={classes.icon} />
            My trainings
        </IconButton>
    </Breadcrumbs>
)

const TrainerNavigationBar: React.FC<UserNavigationBar> = ({ history, classes }) => (
    <Breadcrumbs aria-label="breadcrumb">
        <IconButton
            color="secondary"
            onClick={() => history.push(RouterPaths.UserProfile)} className={classes.link}>
            <AccountBox className={classes.icon} />
            Profile
        </IconButton>
        <IconButton
            color="secondary"
            onClick={() => history.push(RouterPaths.MyClients)} className={classes.link}>
            <Accessibility className={classes.icon} />
            My clients
        </IconButton>
    </Breadcrumbs>
)
