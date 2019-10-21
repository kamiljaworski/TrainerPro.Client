import React, { useState } from 'react';
import styles from './Login.module.scss';
import { LoginProps } from './LoginProps';
import { Grid, Container, Paper, Tab, Tabs } from '@material-ui/core';
import LoginForm from '../../presentational/LoginForm/LoginFormContainer';
import RegisterForm from '../../presentational/RegisterForm/RegisterFormContainer';
import classnames from 'classnames';

const Login: React.FC<LoginProps> = () => {
  const [tab, setTab] = useState(0);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Container className={styles.app} maxWidth="xl">
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
        direction="column"
        className={styles.app}
      >
        <Grid item md={4} >
          <Paper className={classnames(styles.paper, styles.loginRegisterContainer)}>
            <Tabs centered
              value={tab}
              indicatorColor="secondary"
              textColor="secondary"
              onChange={handleTabChange}
              aria-label="disabled tabs example"
            >
              <Tab label="Logowanie" />
              <Tab label="Rejestracja " />
            </Tabs>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              {tab === 0 ? <LoginForm /> : <RegisterForm />}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
