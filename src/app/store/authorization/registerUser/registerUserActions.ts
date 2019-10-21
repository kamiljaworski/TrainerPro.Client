import { Dispatch } from 'redux';
import { AuthorizationState } from '../authorizationState';
import { RegisterUserActions } from './registerUserTypes';
import { REGISTER_USER_SUCCESS} from '../authorizationTypes';
import { toast } from "react-toastify";
import * as authorizationService from '../../../services/authorizationService';


const registerUserSuccess = (newState: AuthorizationState): RegisterUserActions => ({
    type: REGISTER_USER_SUCCESS,
    payload: newState
});


export const registerUser = (login: string, password: string) =>
    async (dispatch: Dispatch<RegisterUserActions>): Promise<boolean> => {
        
        const result = await authorizationService.registerUser(login, password);

        if(result.status !== 200) {
            toast.error("Spadaj!", {
                position: toast.POSITION.TOP_RIGHT
            });
            return false;
        }

        const authState = {
            loggedIn: true,
            token: "ASD",
            username: login
        }
        
        dispatch(registerUserSuccess(authState));
        return true;
    }
