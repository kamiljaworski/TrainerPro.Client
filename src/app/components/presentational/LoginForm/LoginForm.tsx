import React from 'react';
import styles from './LoginForm.module.scss';
import { LoginFormProps } from './LoginFormProps';
import { Formik } from 'formik';
import { loginValidationSchema } from '../../../../shared-js/validationSchemas/loginValidationSchema';
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import ILoginForm from '../../../models/authorization/dto/ILoginDto';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm: React.FC<LoginFormProps> = ({ loginUser }) => {
    const initialValues = { login: '', password: '' } as ILoginForm;

    async function handleSubmit(values: any) {
        const isSuccess = await loginUser(values.login, values.password);
        if(isSuccess) {
            //redirect
        }
    }

    return (
        <React.Fragment>
            <Formik
                initialValues={initialValues}
                onSubmit={async (values) => {
                    handleSubmit(values);
                }}
                enableReinitialize={true}
                validateOnChange={true}
                validationSchema={loginValidationSchema}
            >
                {({
                    values,
                    errors,
                    handleChange,
                    handleSubmit,
                }) => (
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2} alignItems="center" alignContent="center">
                                <Grid item xs={12}>
                                    <TextField
                                        label="Login*"
                                        helperText={errors.login}
                                        name="login"
                                        margin="normal"
                                        variant="outlined"
                                        value={values.login}
                                        onChange={handleChange}
                                        error={values.login === '' ? undefined : Boolean(errors.login)}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Password*"
                                        helperText={errors.password}
                                        name="password"
                                        margin="normal"
                                        variant="outlined"
                                        type="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        error={values.password === '' ? undefined : Boolean(errors.password)}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} className={styles.loginButtonContainer}>
                                    <Button variant="contained" color="secondary" className={styles.loginButton} type="submit">
                                        Log in
                                </Button>
                                </Grid>
                            </Grid>
                        </form>
                    )}
            </Formik>
            <ToastContainer autoClose={2000} />
        </React.Fragment>
    );
}

export default LoginForm;
