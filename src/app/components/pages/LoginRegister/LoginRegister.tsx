import React, { useState } from 'react';
import styles from './LoginRegister.module.scss';
import { LoginRegisterProps } from './LoginRegisterProps';
import { Grid, Container, Paper, Tab, Tabs } from '@material-ui/core';
import LoginForm from '../../presentational/LoginForm/LoginFormContainer';
import RegisterForm from '../../presentational/RegisterForm/RegisterFormContainer';
import classnames from 'classnames';

const Login: React.FC<LoginRegisterProps> = () => {
  const [tab, setTab] = useState(0);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTab(newValue); 
  };

  const onRegisterSubmitSuccess = () => {
    setTab(0);
  }

  return (
    <Container className={classnames(styles.app, styles.mainContainer)} maxWidth="xl">
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
        direction="column"
        className={styles.app}
      >
        <Grid item md={4} >
          <Paper className={styles.paper}>
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
              <Grid item xs={12} className={styles.loginRegisterContainer}>
              {tab === 0 ? <LoginForm /> : <RegisterForm onSuccessSubmitCallback={onRegisterSubmitSuccess}/>}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
