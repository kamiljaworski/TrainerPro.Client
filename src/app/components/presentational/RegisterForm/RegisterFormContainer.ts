import { connect } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "../../../store";
import { registerUser } from "../../../store/authorization/registerUser/registerUserActions";
import RegisterForm from "./RegisterForm";
import { DispatchFromProps } from "./RegisterFormProps";

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) : DispatchFromProps =>  ({
    registerUser: (login, password) => dispatch(registerUser(login, password))
});

export default connect<null, DispatchFromProps, any, AppState>(
    null,
    mapDispatchToProps
)(RegisterForm)