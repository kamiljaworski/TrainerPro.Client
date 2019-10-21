import React, { useState } from 'react';
import styles from './RegisterForm.module.scss';
import { RegisterFormProps } from './RegisterFormProps';
import { Formik } from 'formik';
import { loginValidationSchema } from '../../../../shared-js/validationSchemas/loginValidationSchema';
import TextField from '@material-ui/core/TextField';
import { Button, Grid, CircularProgress } from '@material-ui/core';


const RegisterForm: React.FC<RegisterFormProps> = ({registerUser}) => {
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(values: any) {
        setIsLoading(true);
        const isSuccess = await registerUser(values.login, values.password);
        setIsLoading(false);
        if(isSuccess) {
            //redirect
            console.log('SUCCESS');
        }
    }

    return (
        <Grid item xs={12}>
            <Formik
                initialValues={{ login: '', password: '' }}
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
                                    {isLoading 
                                    ? <CircularProgress color="secondary" /> 
                                    : <Button variant="contained" color="secondary" className={styles.loginButton} type="submit">
                                        Register
                                      </Button>}
                                </Grid>
                            </Grid>
                        </form>
                    )}
            </Formik>
        </Grid>
    );
}

export default RegisterForm;
