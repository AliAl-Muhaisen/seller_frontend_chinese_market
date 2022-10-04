import * as yup from "yup";
const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const signupValidationSchema = yup.object({
  email: yup
    .string()
    .email("Please, Enter a valid email")
    .required("Email is required!"),
  firstName: yup
    .string()
    .trim()
    .min(3, "Cannot be less than 3 characters")
    .max(15, "Cannot be more than 15 characters")
    .required("First Name is required"),
  lastName: yup
    .string()
    .trim()
    .min(3, "Cannot be less than 3 characters")
    .max(15, "Cannot be more than 15 characters")
    .required("Last Name is required"),
  password: yup
    .string()

    .min(8, "Must be more than 7 characters")
    .max(20, "Must be less than 21 characters")
    .matches(
      passwordPattern,
      "Must have a capital and small letter and at least one number"
    )
    .required("Password is required"),

  country: yup.string().required("Please, select a country").nullable(),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone number is required"), //.number().required("Phone number is required")
});

const loginValidationSchema = yup.object({
  email: yup
    .string()
    .email("Please, Enter a valid email")
    .required("Email is required!"),
});

export { loginValidationSchema, signupValidationSchema };
