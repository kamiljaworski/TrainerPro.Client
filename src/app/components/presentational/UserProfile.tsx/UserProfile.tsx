import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import UserProfileProps from './UserProfileProps';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
    const classes = useStyles();
    const [expandedPanel, setexpandedPanel] = useState(0);

    function handleChange(number: number) {
        setexpandedPanel(number);
    }

    return (
        <div className={classes.root}>
            <ExpansionPanel expanded={expandedPanel === 0} onChange={() => handleChange(0)}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading} color="secondary">Username</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        {user.username}}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expandedPanel === 1} onChange={() => handleChange(1)}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography className={classes.heading} color="secondary">Email</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        {user.email}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expandedPanel === 2} onChange={() => handleChange(2)}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography className={classes.heading} color="secondary">Personal data</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography style={{width: '100%'}} display="block">
                        Name: {user.firstName}
                        <br />
                        Surname: {user.lastName}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

export default UserProfile;