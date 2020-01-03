import { connect } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "../../../store";
import { registerUser } from "../../../store/authorization/registerUser/registerUserActions";
import RegisterForm from "./RegisterForm";
import { DispatchFromProps, OwnProps, StateFromProps } from "./RegisterFormProps";

const mapStateToProps = (state: AppState, ownProps: OwnProps) => ({
    onSuccessSubmitCallback: ownProps.onSuccessSubmitCallback
})

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) : DispatchFromProps =>  ({
    registerUser: (registerDto) => dispatch(registerUser(registerDto))
});

export default connect<StateFromProps, DispatchFromProps, OwnProps, AppState>(
    mapStateToProps,
    mapDispatchToProps
)(RegisterForm);