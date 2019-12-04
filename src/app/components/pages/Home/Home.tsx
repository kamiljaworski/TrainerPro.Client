import React from 'react';
import NavigationBar from '../../layout/NavigationBar/NavigationBar';
import HomeProps from './HomeProps';
import UserProfile from '../../presentational/UserProfile.tsx/UserProfile';
import { Container } from '@material-ui/core';
import styles from './Home.module.scss';
import { Route, Switch } from 'react-router';
import RouterPaths from '../../../../shared-js/enums/RouterPaths';
import Trainers from '../../presentational/Trainers/Trainers';
import Products from '../../presentational/Products/Products';

const Home: React.FC<HomeProps> = ({ user }) => {
    return (
        <div style={{ height: '80%' }}>
            <NavigationBar />
            <Container maxWidth="md" className={styles.container}>
                <Switch>
                    <Route exact path={RouterPaths.Home}>
                        <UserProfile user={user} />
                    </Route>
                    <Route exact path={RouterPaths.UserProfile}>
                        <UserProfile user={user} />
                    </Route>
                    <Route exact path={RouterPaths.Trainers}>
                        <Trainers />
                    </Route>
                    <Route exact path={RouterPaths.UserProducts}>
                        <Products />
                    </Route>
                </Switch>
            </Container>
        </div>
    );
}

export default Home;
