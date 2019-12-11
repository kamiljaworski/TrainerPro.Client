import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Fade } from '@material-ui/core';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import AccountType from '../../../../shared-js/enums/AccountType';
import { registerValidationSchema } from '../../../../shared-js/validationSchemas/registerValidationSchema';
import IRegisterDto from '../../../models/authorization/dto/IRegisterDto';
import Loader from '../../common/Loader/Loader';
import './LoginRegister.css';
import styles from './RegisterForm.module.scss';
import RegisterFormProps from './RegisterFormProps';

const RegisterForm: React.FC<RegisterFormProps> = ({ registerUser, onSuccessSubmitCallback }) => {
    const [isLoading, setIsLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            repeatPassword: '',
            firstName: '',
            lastName: '',
            email: '',
            accountTypeId: AccountType.Client,
        } as IRegisterDto,
        onSubmit: async values => handleSubmit(values),
        enableReinitialize: true,
        validateOnChange: true,
        validationSchema: registerValidationSchema
    });

    async function handleSubmit(values: IRegisterDto) {
        setIsLoading(true);
        const isSuccess = await registerUser(formik.values);
        setIsLoading(false);

        if (isSuccess) {
            if (onSuccessSubmitCallback) {
                onSuccessSubmitCallback();
            }
        }
    }

    return (
        <React.Fragment>
            <Loader isLoading={isLoading} />
           <Fade in={true}>
                <Grid item xs={12}>
                    <form onSubmit={formik.handleSubmit}>
                        <Grid container spacing={2} alignItems="center" alignContent="center" className={styles.smoothAppear}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Username*"
                                    helperText={formik.errors.username}
                                    name="username"
                                    margin="normal"
                                    variant="outlined"
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                    error={formik.values.username === '' ? undefined : Boolean(formik.errors.username)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Password*"
                                    helperText={formik.errors.password}
                                    name="password"
                                    margin="normal"
                                    variant="outlined"
                                    type="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    error={formik.values.password === '' ? undefined : Boolean(formik.errors.password)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Repeat password*"
                                    helperText={formik.errors.repeatPassword}
                                    name="repeatPassword"
                                    margin="normal"
                                    variant="outlined"
                                    type="password"
                                    value={formik.values.repeatPassword}
                                    onChange={formik.handleChange}
                                    error={formik.values.repeatPassword === '' ? undefined : Boolean(formik.errors.repeatPassword)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Email*"
                                    helperText={formik.errors.email}
                                    name="email"
                                    margin="normal"
                                    variant="outlined"
                                    type="text"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.values.email === '' ? undefined : Boolean(formik.errors.email)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="First name"
                                    helperText={formik.errors.firstName}
                                    name="firstName"
                                    margin="normal"
                                    variant="outlined"
                                    type="text"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    error={formik.values.firstName === '' ? undefined : Boolean(formik.errors.firstName)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Last name"
                                    helperText={formik.errors.lastName}
                                    name="lastName"
                                    margin="normal"
                                    variant="outlined"
                                    type="text"
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange}
                                    error={formik.values.lastName === '' ? undefined : Boolean(formik.errors.lastName)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} className={styles.selectUserTypeContainer}>
                                <FormControl className={styles.selectUserType}>
                                    <InputLabel>User type</InputLabel>
                                    <Select
                                        value={formik.values.accountTypeId}
                                        onChange={formik.handleChange}
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
                </Grid>
            </Fade >
        </React.Fragment >
    );
}

export default RegisterForm;
