import React from 'react';
import NavigationBar from '../../layout/NavigationBar/NavigationBar';
import HomeProps from './HomeProps';
import UserProfile from '../../presentational/UserProfile.tsx/UserProfile';
import { Container, Paper } from '@material-ui/core';
import styles from './Home.module.scss';
import { Route, Switch } from 'react-router';
import RouterPaths from '../../../../shared-js/enums/RouterPaths';
import Trainers from '../../presentational/Trainers/Trainers';
import { Link } from 'react-router-dom';

const Home: React.FC<HomeProps> = ({ user }) => {
    return (
        <div style={{ height: '80%' }}>
            <NavigationBar />
            <Container maxWidth="md" className={styles.container}>
                <Paper className={styles.smartCenter}>
                    <Switch>
                        <Route path={RouterPaths.UserProfile}>
                            <UserProfile user={user} />
                        </Route>
                        <Route path={RouterPaths.Trainers}>
                            <Trainers />
                        </Route>
                    </Switch>
                </Paper>
            </Container>
        </div>
    );
}

export default Home;
