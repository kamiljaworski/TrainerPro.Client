import { Button, Grid, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { CSSTransition } from 'react-transition-group';
import RouterPaths from '../../../../shared-js/enums/RouterPaths';
import UserRoles from '../../../../shared-js/enums/UserRoles';
import { loginValidationSchema } from '../../../../shared-js/validationSchemas/loginValidationSchema';
import ILoginDto from '../../../models/authorization/dto/ILoginDto';
import Loader from '../../common/Loader/Loader';
import '../RegisterForm/LoginRegister.css';
import styles from './LoginForm.module.scss';
import LoginFormProps from './LoginFormProps';

const LoginForm: React.FC<LoginFormProps> = ({ loginUser, userRoles }) => {
    const [isLoading, setIsloading] = useState(false);
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        } as ILoginDto,
        onSubmit: async values => handleSubmit(values),
        enableReinitialize: true,
        validateOnChange: true,
        validationSchema: loginValidationSchema
    });

    async function handleSubmit(values: ILoginDto) {
        setIsloading(true);
        const isSuccess = await loginUser(values);
        setIsloading(false);
        if (isSuccess) {
            if (userRoles) {
                if (userRoles.findIndex(x => x === UserRoles.Trainer)) {
                    history.push(RouterPaths.UserProfile);
                    return;
                }
                if (userRoles.findIndex(x => x === UserRoles.User)) {
                    history.push(RouterPaths.UserProfile);
                    return;
                }
            }
            history.push(RouterPaths.Home);
        }
    }

    return (
        <React.Fragment>
            <Loader isLoading={isLoading} />
            <CSSTransition timeout={0} appear={true} in={true} classNames="my-node">
                <Grid item xs={12}>
                    <form onSubmit={formik.handleSubmit}>
                        <Grid container spacing={2} alignItems="center" alignContent="center" className={styles.smoothAppear}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Login*"
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
                            <Grid item xs={12} className={styles.loginButtonContainer}>
                                <Button variant="contained" color="secondary" className={styles.loginButton} type="submit">
                                    Log in
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </CSSTransition>
        </React.Fragment>
    );
}

export default LoginForm;