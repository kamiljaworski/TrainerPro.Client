import React, { useEffect } from 'react';
import NavigationBar from '../../layout/NavigationBar/NavigationBar';
import HomeProps from './HomeProps';
import UserProfile from '../../presentational/UserProfile.tsx/UserProfile';
import { Container } from '@material-ui/core';
import styles from './Home.module.scss';
import { Route, Switch, useHistory, useLocation } from 'react-router';
import RouterPaths from '../../../../shared-js/enums/RouterPaths';
import Trainers from '../../presentational/Trainers/Trainers';
import Products from '../../presentational/Products/Products';
import UserTrainings from '../../presentational/UserTrainings/UserTrainings';

const Home: React.FC<HomeProps> = ({ user }) => {
    const history = useHistory();
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === RouterPaths.Base) {
            history.push(RouterPaths.Home);
        }
    }, [history, location.pathname]);

    return (
        <div style={{ height: '80%' }}>
            <NavigationBar />
            <Container maxWidth="lg" className={styles.container}>
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
                    <Route exact path={RouterPaths.UserTrainings}>
                        <UserTrainings user={user} />
                    </Route>
                </Switch>
            </Container>
        </div>
    );
}

export default Home;
