import * as yup from "yup";
import { countriesCode } from "data/countries";

const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const minText = (number: number = 3) => {
  return "Must be more than " + number + " characters";
};
const maxText = (number: number = 15) => {
  return "Must be less than " + number + " characters";
};

const emailMess = {
  email: "Please, Enter a valid email",
  required: "Email is required!",
};
const firstNMess = {
  min: minText(),
  max: maxText(),
  required: "First Name is required",
};
const lastNMess = {
  min: minText(),
  max: maxText(),
  required: "Last Name is required",
};

const passwordMess = {
  min: minText(7),
  max: maxText(21),
  pattern: "Must have a capital and small letter and at least one number",
  required: "Password is required",
};

const countryMess = {
  required: "Please, select a country",
};

const phoneMess = {
  required: "Phone number is required",
  pattern: "Phone number is not valid",
};
const signupValidationSchema = yup.object().shape({
  email: yup.string().email(emailMess.email).required(emailMess.required),
  firstName: yup
    .string()
    .trim()
    .min(3, firstNMess.min)
    .max(15, firstNMess.max)
    .required(firstNMess.max),
  lastName: yup
    .string()
    .trim()
    .min(3, lastNMess.min)
    .max(15, lastNMess.max)
    .required(lastNMess.max),
  password: yup
    .string()
    .min(8, passwordMess.min)
    .max(20, passwordMess.max)
    .matches(passwordPattern, passwordMess.pattern)
    .required(passwordMess.required),
  seller: yup.object().shape({
    country: yup
      .string()
      .required(countryMess.required)
      .oneOf(countriesCode, countryMess.required)
      .nullable(),
    phoneNumber: yup
      .string()
      .matches(phoneRegExp, phoneMess.pattern)
      .required(phoneMess.required), //.number().required("Phone number is required")
  }),
});

const loginValidationSchema = yup.object({
  email: yup.string().email(emailMess.email).required(emailMess.required),
  password: yup
    .string()
    .min(8, passwordMess.min)
    .max(20, passwordMess.max)
    .matches(passwordPattern, passwordMess.pattern)
    .required(passwordMess.required),
});

export { loginValidationSchema, signupValidationSchema };
