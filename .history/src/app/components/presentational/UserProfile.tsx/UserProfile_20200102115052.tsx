import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Fade
} from "@material-ui/core";
import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import Loader from "../../common/Loader/Loader";
import styles from "./UserProfile.module.scss";
import UserProfileProps from "./UserProfileProps";
import IUserDto from "../../../models/user/IUserDto";
import UserRoles from "../../../../shared-js/enums/UserRoles";
import { isUserInRole } from "../../../helpers/UserHelper";
import { client } from "../../../infrastructure/api/base/client";
import { toast } from "react-toastify";

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState<IUserDto>();
  const isTrainer = isUserInRole(user, UserRoles.Trainer);

  useEffect(() => {
    (async function getUser() {
      setIsLoading(true);
      var user = await client.get("/api/Accounts");
      setCurrentUser(user.data);
      setIsLoading(false);
    })();
  }, []);

  const formik = useFormik({
    initialValues: currentUser ? currentUser : ({} as any),
    onSubmit: async values => handleSubmit(values as any),
    enableReinitialize: true
  });

  async function handleSubmit(values: IUserDto) {
    setIsLoading(true);
    var response = await client.patch("/api/Accounts", {
      ...values,
      sex: "M",
      firstName: values.firstName,
      lastName: values.lastName
    });

    if (response.status === 200) {
      toast.success("Update successfull");
    }

    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <Loader isLoading={isLoading} />
      {currentUser && (
        <Fade in={true}>
          <Grid
            item
            xs={12}
            style={{ width: "70%", margin: "50px auto 0 auto" }}
          >
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
                    label="Imię"
                    helperText={formik.errors.firstName}
                    name="firstName"
                    margin="normal"
                    variant="outlined"
                    type="text"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Nazwisko"
                    helperText={formik.errors.lastName}
                    name="lastName"
                    margin="normal"
                    variant="outlined"
                    type="text"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    fullWidth
                  />
                </Grid>
                {isTrainer ? (
                  <TrainerDetails />
                ) : (
                  <UserDetails formik={formik} />
                )}
                <Grid item xs={12} className={styles.loginButtonContainer}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    className={styles.loginButton}
                    type="submit"
                  >
                    Uaktualnij profil
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Fade>
      )}
    </React.Fragment>
  );
};

interface UserDetailsProps {
  formik: any;
}
const UserDetails: React.FC<UserDetailsProps> = ({ formik }) => {
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <TextField
          label="Wzrost"
          helperText="Height cm."
          name="height"
          margin="normal"
          variant="outlined"
          type="number"
          value={formik.values.height}
          onChange={formik.handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Waga"
          helperText="Weight kg."
          name="weight"
          margin="normal"
          variant="outlined"
          type="number"
          value={formik.values.weight}
          onChange={formik.handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} className={styles.selectUserTypeContainer}>
        <FormControl className={styles.selectUserType}>
          <InputLabel>Płeć</InputLabel>
          <Select
            value={formik.values.sex}
            onChange={formik.handleChange}
            name="sex"
            fullWidth={true}
          >
            <MenuItem value="Man">Mężczyzna</MenuItem>
            <MenuItem value="Woman">Kobieta</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </React.Fragment>
  );
};

const TrainerDetails: React.FC = () => {
  return <div></div>;
};

export default UserProfile;
