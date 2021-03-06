import { Button, Grid, TextField, Fade } from "@material-ui/core";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useHistory } from "react-router";
import RouterPaths from "../../../../shared-js/enums/RouterPaths";
import { loginValidationSchema } from "../../../../shared-js/validationSchemas/loginValidationSchema";
import ILoginDto from "../../../models/authorization/dto/ILoginDto";
import Loader from "../../common/Loader/Loader";
import "../RegisterForm/LoginRegister.css";
import styles from "./LoginForm.module.scss";
import LoginFormProps from "./LoginFormProps";

const LoginForm: React.FC<LoginFormProps> = ({ loginUser, userRoles }) => {
  const [isLoading, setIsloading] = useState(false);
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
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
      history.push(RouterPaths.UserProfile);
    }
  }

  return (
    <React.Fragment>
      <Loader isLoading={isLoading} />
      <Fade in={true}>
        <Grid item xs={12}>
          <form onSubmit={formik.handleSubmit}>
            <Grid
              container
              spacing={2}
              alignItems="center"
              alignContent="center"
              className={styles.smoothAppear}
            >
              <Grid item xs={12}>
                <TextField
                  label="Login*"
                  helperText={formik.errors.username}
                  name="username"
                  margin="normal"
                  variant="outlined"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  error={
                    formik.values.username === ""
                      ? undefined
                      : Boolean(formik.errors.username)
                  }
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
                  error={
                    formik.values.password === ""
                      ? undefined
                      : Boolean(formik.errors.password)
                  }
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} className={styles.loginButtonContainer}>
                <Button
                  variant="contained"
                  color="secondary"
                  className={styles.loginButton}
                  type="submit"
                >
                  Zaloguj się
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Fade>
    </React.Fragment>
  );
};

export default LoginForm;
