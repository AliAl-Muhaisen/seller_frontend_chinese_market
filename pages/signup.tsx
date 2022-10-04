import type { NextPage } from "next";
import { useFormik } from "formik";
import { signupValidationSchema } from "@/lib/yup";
import { SignupForm } from "types/types";
import axios from "axios";
import {
  Paper,
  Grid,
  Button,
} from "@mui/material";
import {
  EmailInput,
  PasswordInput,
  FirstNameInput,
  LastNameInput,
  CountryInput,
  PhoneNumberInput
} from "@/components/formik/inputs";
import OverlayLoading from "@/components/loadingSpinner/overlayLoading";

import Head from "next/head";

import { useState } from "react";
const Signup: NextPage = (props) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const onSubmit = async (values: SignupForm, actions: any) => {
    // setIsFormSubmitted(true);
    console.log("from submit ");
    console.log("values", values);
    console.log("actions", actions);
    // actions.resetForm();

    // const res = await axios.post("api/auth/signup", values);
    // console.log("const res= await axios. ", res);

    // setIsFormSubmitted(false);
  };

  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    handleBlur,
    touched,
    setFieldValue,
    getFieldMeta,
    getFieldProps,
    getFieldHelpers,
  } = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      phoneNumber: "",
      country: null,
    },

    validationSchema: signupValidationSchema,

    onSubmit,
  });

  return (
    <>
      <Head>
        <title>Sign up Page</title>
      </Head>
      <Grid container justifyContent={"center"} my={5} px={1}>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit} noValidate>
            <Paper elevation={3} color={"primary"}>
              <Grid container p={4} justifyContent={"space-between"}>
                <Grid item xs={12} sm={6} px={0.5} my={0.5}>
                  <FirstNameInput
                  disabled={isFormSubmitted}
                    {...getFieldMeta("firstName")}
                    {...getFieldProps("firstName")}
                  />
                </Grid>
                <Grid item xs={12} sm={6} px={0.5} my={0.5}>
                  <LastNameInput
                    {...getFieldMeta("lastName")}
                    {...getFieldProps("lastName")}
                  />
                </Grid>
                <Grid item xs={12} my={0.5}>
                  <EmailInput
                    {...getFieldMeta("email")}
                    {...getFieldProps("email")}
                  />
                </Grid>
                <Grid item xs={12} my={0.5}>
                  <PasswordInput
                    {...getFieldMeta("password")}
                    {...getFieldProps("password")}
                  />
                </Grid>
                <Grid item xs={12} sm={6} px={0.5} my={0.5}>
                  <CountryInput
                    {...getFieldMeta("country")}
                    {...getFieldProps("country")}
                    {...getFieldHelpers("country")}
                  />
                </Grid>

                <Grid item xs={12} sm={6} px={0.5} my={0.5}>
                  <PhoneNumberInput
                    {...getFieldMeta("phoneNumber")}
                    {...getFieldProps("phoneNumber")}
                  />
                </Grid>

                <Grid item xs={12} my={2}>
                  <Button fullWidth variant="contained" type="submit">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </form>
        </Grid>
      </Grid>
      <OverlayLoading open={isFormSubmitted} />
    </>
  );
};
export default Signup;
