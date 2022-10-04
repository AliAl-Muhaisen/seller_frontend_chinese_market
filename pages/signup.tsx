import type { NextPage } from "next";
import { useFormik } from "formik";
import { signupValidationSchema } from "@/lib/yup";
import { SignupForm, CustomTextField, CountryType } from "types/types";
import axios from "axios";
import {
  Box,
  Paper,
  Grid,
  Button,
  TextField,
  InputAdornment,
  Autocomplete,
  Backdrop,
  CircularProgress,
} from "@mui/material";

import OverlayLoading from "@/components/loadingSpinner/overlayLoading";

import { flag } from "data/countries";
import { AlternateEmail, Password } from "@mui/icons-material";
import Head from "next/head";
import Image from "next/image";
import PhoneNumber from "@/components/form/phoneNumber";
import { countriesLabel } from "@data/countries";
import { useState } from "react";
const Signup: NextPage = (props) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const isInputError = (errorText: string, isTouched: Boolean) => {
    if (isTouched) {
      return errorText ? true : false;
    }
    return false;
  };

  const onSubmit = async (values: SignupForm, actions: any) => {
    setIsFormSubmitted(true);
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

  const CustomFormTextField = (params: CustomTextField) => {
    const { error } = params;
    return (
      <TextField
        fullWidth
        label={params.label}
        id={params.id}
        type={params.type}
        name={params.name}
        variant={params.variant || "filled"}
        required={params.required || false}
        error={params.touched && (error ? true : false)}
        helperText={error}
        onChange={params.onChange!}
        onBlur={params.onBlur!}
      />
    );
  };

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
                  <TextField
                    fullWidth
                    required
                    id="firstName"
                    type="text"
                    name="firstName"
                    label="First Name"
                    variant="standard"
                    value={values.firstName}
                    helperText={touched.firstName && errors.firstName!}
                    onChange={handleChange!}
                    onBlur={handleBlur}
                    error={
                      touched.firstName && (errors.firstName ? true : false)
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} px={0.5} my={0.5}>
                  <TextField
                    fullWidth
                    required
                    id="lastName"
                    key={"lastName"}
                    type="text"
                    name="lastName"
                    label="Last Name"
                    variant="standard"
                    value={values.lastName}
                    error={touched.lastName && (errors.lastName ? true : false)}
                    helperText={touched.lastName && errors.lastName!}
                    onChange={handleChange!}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid item xs={12} my={0.5}>
                  <TextField
                    fullWidth
                    required
                    key={"email"}
                    id={"email"}
                    type={"email"}
                    name={"email"}
                    label={"Email"}
                    variant={"filled"}
                    value={values.email}
                    error={touched.email && (errors.email ? true : false)}
                    onChange={handleChange!}
                    onBlur={handleBlur}
                    helperText={touched.email && errors.email!}
                  />
                </Grid>
                <Grid item xs={12} my={0.5}>
                  <TextField
                    fullWidth
                    required
                    key={"password"}
                    id={"password"}
                    type={"password"}
                    name={"password"}
                    label={"Password"}
                    variant={"filled"}
                    value={values.password}
                    error={touched.password && (errors.password ? true : false)}
                    onChange={handleChange!}
                    onBlur={handleBlur}
                    helperText={touched.password && errors.password!}
                  />
                </Grid>
                <Grid item xs={12} sm={6} px={0.5} my={0.5}>
                  {/* <PhoneNumber {...getFieldProps("country")}/> */}
                  <Autocomplete
                    autoHighlight
                    value={values.country}
                    // defaultValue={values.country}
                    onChange={(event: any, newValue: string | null) => {
                      setFieldValue("country", newValue);
                    }}
                    // getOptionLabel={(option) => option}
                    renderInput={(params) => (
                      <TextField
                        error={
                          touched.country && (errors.country ? true : false)
                        }
                        helperText={touched.country && errors.country!}
                        value={values.country}
                        onChange={handleChange!}
                        name={"country"}
                        {...params}
                        label="Choose a Country"
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "new-password",
                        }}
                        variant={"standard"}
                      />
                    )}
                    options={countriesLabel}
                  />
                </Grid>

                <Grid item xs={12} sm={6} px={0.5} my={0.5}>
                  <TextField
                    fullWidth
                    required
                    typeof="number"
                    key={"phoneNumber"}
                    id={"phoneNumber"}
                    type={"phoneNumber"}
                    name={"phoneNumber"}
                    label={"Phone Number"}
                    variant={"standard"}
                    value={values.phoneNumber}
                    error={
                      touched.phoneNumber && (errors.phoneNumber ? true : false)
                    }
                    onChange={handleChange!}
                    onBlur={handleBlur}
                    helperText={touched.phoneNumber && errors.phoneNumber!}
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
{
  /* <Image src={flag("jo")} width={30} height={30} alt={``}/> */
}
