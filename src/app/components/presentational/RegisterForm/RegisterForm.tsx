import { Button, FormControl, Grid, InputLabel, MenuItem, Select } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { ToastContainer } from "react-toastify";
import AccountType from '../../../../shared-js/enums/AccountType';
import { registerValidationSchema } from '../../../../shared-js/validationSchemas/registerValidationSchema';
import IRegisterDto from '../../../models/authorization/dto/IRegisterDto';
import Loader from '../../common/Loader/Loader';
import styles from './RegisterForm.module.scss';
import { RegisterFormProps } from './RegisterFormProps';

const RegisterForm: React.FC<RegisterFormProps> = ({ registerUser, onSuccessSubmitCallback }) => {
    const [isLoading, setIsLoading] = useState(false);

    const initialValues: IRegisterDto = {
        username: '',
        password: '',
        repeatPassword: '',
        firstName: '',
        lastName: '',
        email: '',
        accountTypeId: AccountType.Client,
    };

    async function handleSubmit(values: IRegisterDto) {
        setIsLoading(true);
        const isSuccess = await registerUser(values);
        setIsLoading(false);
      
        if (isSuccess) {
           if(onSuccessSubmitCallback) onSuccessSubmitCallback();
        }
    }

    return (
        <React.Fragment>
            <Loader isLoading={isLoading} />
            <Grid item xs={12}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={async (values) => {
                        handleSubmit(values);
                    }}
                    enableReinitialize={true}
                    validateOnChange={true}
                    validationSchema={registerValidationSchema}
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
                                            label="Username*"
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
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Repeat password*"
                                            helperText={errors.repeatPassword}
                                            name="repeatPassword"
                                            margin="normal"
                                            variant="outlined"
                                            type="password"
                                            value={values.repeatPassword}
                                            onChange={handleChange}
                                            error={values.repeatPassword === '' ? undefined : Boolean(errors.repeatPassword)}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Email*"
                                            helperText={errors.email}
                                            name="email"
                                            margin="normal"
                                            variant="outlined"
                                            type="text"
                                            value={values.email}
                                            onChange={handleChange}
                                            error={values.email === '' ? undefined : Boolean(errors.email)}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="First name"
                                            helperText={errors.firstName}
                                            name="firstName"
                                            margin="normal"
                                            variant="outlined"
                                            type="text"
                                            value={values.firstName}
                                            onChange={handleChange}
                                            error={values.firstName === '' ? undefined : Boolean(errors.firstName)}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Last name"
                                            helperText={errors.lastName}
                                            name="lastName"
                                            margin="normal"
                                            variant="outlined"
                                            type="text"
                                            value={values.lastName}
                                            onChange={handleChange}
                                            error={values.lastName === '' ? undefined : Boolean(errors.lastName)}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} className={styles.selectUserTypeContainer}>
                                        <FormControl className={styles.selectUserType}>
                                            <InputLabel>User type</InputLabel>
                                            <Select                                               
                                                value={values.accountTypeId}
                                                onChange={handleChange}
                                                name="accountTypeId"
                                                fullWidth={true}
                                            >
                                                <MenuItem value={AccountType.Client}>Client</MenuItem>
                                                <MenuItem value={AccountType.Trainer}>Trainer</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} className={styles.loginButtonContainer}>
                                        <Button variant="contained" color="secondary" className={styles.loginButton} type="submit">
                                            Register
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        )}
                </Formik>
            </Grid>
            <ToastContainer autoClose={2000} />
        </React.Fragment>
    );
}

export default RegisterForm;
