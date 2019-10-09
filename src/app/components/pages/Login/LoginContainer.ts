import { connect } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "../../../store";
import { loginUser } from "../../../store/authorization/loginUser/loginUserActions";
import Login from "./Login";
import { DispatchFromProps, OwnProps, StateFromProps } from "./LoginProps";


const mapStateToProps = (state: AppState, ownProps: OwnProps) => ({
    authorization: state.authorization,
    text: ownProps.text
})

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) : DispatchFromProps =>  ({
    loginUser: (login, password) => dispatch(loginUser(login, password))
});

export default connect<StateFromProps, DispatchFromProps, OwnProps, AppState>(
    mapStateToProps,
    mapDispatchToProps
)(Login)