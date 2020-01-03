import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container, Paper, Fade, MenuItem, Select, FormControl, InputLabel,
    ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography
} from '@material-ui/core';
import styles from './TrainerClients.module.scss';
import { client } from '../../../infrastructure/api/base/client';
import IUserDto from '../../../models/user/IUserDto';
import EditUserTrainings from '../EditUserTrainings/EditUserTrainings';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditUserMeals from '../EditUserMeals/EditUserMeals';

const useStyles = makeStyles(theme => ({
    root: {
        width: '60%',
        height: '100%',
        margin: 'auto auto',
        padding: 15
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        width: '70%',
        marginBottom: 20
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

const TrainerClients: React.FC = () => {
    const classes = useStyles();
    const [clients, setClients] = useState<IUserDto[]>([]);
    const [selected, setSelected] = useState<IUserDto>();
    const [isExpandedTrainings, setIsExpandedTrainings] = useState(false);
    const [isExpandedMeals, setIsExpandedMeals] = useState(false);

    useEffect(() => {
        async function getTrainers() {
            var _trainers = await client.get("api/ClientsAssignedToTrainer");
            setClients(_trainers.data.result);
        }
        getTrainers();
    }, [])

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const selectedClient = clients.find(x => x.id === event.target.value);
        setSelected(selectedClient);
    }

    return (
        <div className={classes.root}>
            <Fade in={true}>
                <Container maxWidth="md" className={styles.container}>
                    <Paper className={styles.smartCenter}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">
                                {clients.length !== 0
                                    ? 'Please choose user'
                                    : 'No clients has signed to You yet'}
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selected}
                                onChange={handleChange}
                                fullWidth={true}
                                disabled={clients.length === 0}
                            >
                                {clients && clients.map(x =>
                                    <MenuItem key={x.id} value={x.id}>{x.name} {x.lastName}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                    </Paper>
                    {selected && (
                        <div style={{ marginTop: 50 }}>
                            <ExpansionPanel expanded={isExpandedTrainings} >
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                    style={{ backgroundColor: '#c51162' }}
                                    onClick={() => setIsExpandedTrainings(!isExpandedTrainings)}
                                >
                                    <Typography className={classes.heading}>Trainings</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <EditUserTrainings username={selected.username} />
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel expanded={isExpandedMeals}>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3a-content"
                                    id="panel3a-header"
                                    style={{ backgroundColor: '#303f9f' }}
                                    onClick={() => setIsExpandedMeals(!isExpandedMeals)}
                                >
                                    <Typography className={classes.heading}>Meals</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <EditUserMeals username={selected.username} />
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </div>
                    )}
                </Container>
            </Fade>
        </div>
    );
}

export default TrainerClients;