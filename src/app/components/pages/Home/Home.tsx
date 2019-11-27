import React from 'react';
import NavigationBar from '../../layout/NavigationBar/NavigationBar';
import HomeProps from './HomeProps';
import UserProfile from '../../presentational/UserProfile.tsx/UserProfile';
import { Container, Paper } from '@material-ui/core';
import styles from './Home.module.scss';

const Home: React.FC<HomeProps> = ({ user }) => {
    return (
        <div style={{height: '80%'}}>
            <NavigationBar />
            <Container maxWidth="md" className={styles.container}>
                <Paper className={styles.smartCenter}>
                    <UserProfile user={user} />
                </Paper>
            </Container>
        </div>
    );
}

export default Home;
