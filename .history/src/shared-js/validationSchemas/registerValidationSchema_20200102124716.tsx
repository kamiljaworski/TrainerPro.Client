import { object, string, ref } from "yup";

export const registerValidationSchema = object()
  .required()
  .shape({
    username: string()
      .required()
      .min(8),
    password: string()
      .required()
      .min(8),
    repeatPassword: string()
      .oneOf([ref("password"), ""], "Hasła nie są takie same")
      .min(6)
      .required(),
    email: string()
      .email()
      .required(),
    firstName: string()
      .notRequired()
      .min(6),
    lastName: string()
      .notRequired()
      .min(6)
  });
