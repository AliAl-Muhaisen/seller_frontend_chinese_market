import { FieldAttributes } from "formik";
import { ChangeEventHandler, FocusEventHandler } from "react";

export type SignupForm = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  seller: {
    phoneNumber: string;
    country: string | null;
    image: any | File | string | undefined;
  };
};
export type LoginForm = {
  email: string;
  password: string;
};

export type AuthResponse = {
  email: string;
  userId: string;
  token: string;
};

export type CustomTextField = {
  id: string;
  type: string;
  name: string;
  label: string;
  variant: "outlined" | "filled" | "standard" | undefined;
  value: string | number | boolean;
  required: boolean | undefined;
  touched: boolean | undefined;
  error: string | undefined;
  helperText: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onBlur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

export interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}

// export type AxiosErrorMessage = {
//   message: string;
// };

export type CountryComponent = FieldAttributes<{}>;
