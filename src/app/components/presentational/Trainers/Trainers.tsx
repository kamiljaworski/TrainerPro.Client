import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Person } from '@material-ui/icons';
import { Container, Paper } from '@material-ui/core';
import styles from './Trainers.module.scss';
import Axios from 'axios';
import IGetTrainersDto from '../../../models/trainer/IUserDto';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '100%'
    },
}));

const Trainers: React.FC = () => {
    const classes = useStyles();
    const [trainers, settrainers] = useState<IGetTrainersDto[]>([]);

    useEffect(() => {
        async function getTrainers() {
            var _trainers = await Axios.get<IGetTrainersDto[]>("http://localhost:56093/api/trainer");
            settrainers(_trainers.data);
        }
        getTrainers();
    }, [])

    return (
        <div className={classes.root}>
            <Container maxWidth="md" className={styles.container}>
                <Paper className={styles.smartCenter}>
                    <List component="nav" aria-label="main mailbox folders">
                        {!trainers || trainers.length === 0 &&
                            <ListItem>
                                <ListItemText primary="No trainers found" />
                            </ListItem>}
                        {trainers && trainers.map(x =>
                            <React.Fragment key={x.id}>
                                <ListItem button >
                                    <ListItemIcon>
                                        <Person />
                                    </ListItemIcon>
                                    <ListItemText primary={x.username} secondary={x.email} />
                                </ListItem>
                                <Divider />
                            </React.Fragment>
                        )}
                    </List>
                </Paper>
            </Container>
        </div>
    );
}

export default Trainers;