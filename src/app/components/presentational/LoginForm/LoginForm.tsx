import React, { useState } from 'react';
import styles from './LoginForm.module.scss';
import { LoginFormProps } from './LoginFormProps';
import { Formik } from 'formik';
import { loginValidationSchema } from '../../../../shared-js/validationSchemas/loginValidationSchema';
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import ILoginDto from '../../../models/authorization/dto/ILoginDto';
import { ToastContainer } from "react-toastify";
import Loader from '../../common/Loader/Loader';
import "react-toastify/dist/ReactToastify.css";

const LoginForm: React.FC<LoginFormProps> = ({ loginUser }) => {
    const [isLoading, setIsloading] = useState(false);
    
    const initialValues: ILoginDto = {
        username: '',
        password: ''
    };

    async function handleSubmit(values: ILoginDto) {
        setIsloading(true);
        const isSuccess = await loginUser(values);
        setIsloading(false);
        if (isSuccess) {
            //redirect 
        }
    }

    return (
        <React.Fragment>
            <Loader isLoading={isLoading} />
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
                                        helperText={errors.username}
                                        name="username"
                                        margin="normal"
                                        variant="outlined"
                                        value={values.username}
                                        onChange={handleChange}
                                        error={values.username === '' ? undefined : Boolean(errors.username)}
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