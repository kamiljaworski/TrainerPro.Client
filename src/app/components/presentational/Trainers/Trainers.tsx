import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Person } from '@material-ui/icons';
import { Container, Paper, Checkbox, ListItemSecondaryAction, Button, Grid, Fade } from '@material-ui/core';
import styles from './Trainers.module.scss';
import IGetTrainersDto from '../../../models/trainer/IUserDto';
import { client } from '../../../infrastructure/api/base/client';

const useStyles = makeStyles(theme => ({
    root: {
        width: '60%',
        height: '100%',
        margin: 'auto auto',
        padding: 15
    },
}));

const Trainers: React.FC = () => {
    const classes = useStyles();
    const [trainers, settrainers] = useState<IGetTrainersDto[]>([]);
    const [checked, setChecked] = React.useState([1]);

    const handleToggle = (value: any) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [];

        if (currentIndex === -1) {
            newChecked.push(value);
        }
        setChecked(newChecked);
    };

    useEffect(() => {
        async function getTrainers() {
            var _trainers = await client.get<IGetTrainersDto[]>("api/trainer");
            settrainers(_trainers.data);
        }
        getTrainers();
    }, [])

    return (
        <div className={classes.root}>
            <Fade in={true}>
                <Container maxWidth="md" className={styles.container}>
                    <Paper className={styles.smartCenter}>
                        <List component="nav" aria-label="main mailbox folders">
                            {(!trainers || trainers.length === 0) &&
                                <ListItem>
                                    <ListItemText primary="No trainers found" />
                                </ListItem>}
                            {trainers && trainers.map(value => {
                                const labelId = `checkbox-list-secondary-label-${value}`;
                                return (
                                    <React.Fragment key={value.id} >
                                        <ListItem button>
                                            <ListItemIcon>
                                                <Person />
                                            </ListItemIcon>
                                            <ListItemText id={labelId} primary={`${value.firstName} ${value.lastName}`} />
                                            <ListItemSecondaryAction>
                                                <Checkbox
                                                    edge="end"
                                                    onChange={handleToggle(value.id)}
                                                    checked={checked.indexOf(value.id) !== -1}
                                                    inputProps={{ 'aria-labelledby': labelId }}
                                                />
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                        <Divider />
                                    </React.Fragment>
                                );
                            })}
                        </List>
                        <Grid item xs={12} className={styles.loginButtonContainer}>
                            <Button variant="contained" color="secondary" className={styles.loginButton} type="submit">
                                Sign to trainer
                        </Button>
                        </Grid>
                    </Paper>
                </Container>
            </Fade>
        </div>
    );
}

export default Trainers;