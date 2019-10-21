import { object, string} from "yup";

export const loginValidationSchema = object().required().shape({
    login: string().required().min(6),
    password: string().required().min(6),
});
