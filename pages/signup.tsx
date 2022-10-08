import type { NextPage } from "next";
import { useFormik } from "formik";
import { signupValidationSchema } from "@/lib/yup";
import { SignupForm } from "types/types";
import axios from "axios";
import { Paper, Grid, Button } from "@mui/material";
import {
  EmailInput,
  PasswordInput,
  FirstNameInput,
  LastNameInput,
  CountryInput,
  PhoneNumberInput,
} from "@/components/formik/inputs";

import ImageInput from "components/formik/imageInput";
import OverlayLoading from "@/components/loadingSpinner/overlayLoading";

import Head from "next/head";

import { useState } from "react";
import { AxiosErrorMessage } from "types/alltypes";

export const config = {
  unstable_runtimeJS: false,
};

const Signup: NextPage = (props) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleOnSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onSubmit = async (values: SignupForm, actions: any) => {
    // async(event: React.FormEvent<HTMLFormElement>) => {
    //   event.preventDefault();
    console.log("prevent");

    setIsFormSubmitted(true);

    console.log("from submit ");
    console.log("values", values);
    console.log("actions", actions);
    // actions.resetForm();

    try {
      const res = await axios.post("api/auth/signup", values);
      console.log("const res= await axios. ", res.data);
      console.log("const res= Status. ", res.status);
      // console.log("const res= Status. ", res.);
    } catch (error: AxiosErrorMessage | any) {
      console.log("error", error.response.data);
      console.log("error", error.status);
    }

    setIsFormSubmitted(false);
    // };
  };

  const {
    values,
    handleSubmit,
    getFieldMeta,
    getFieldProps,
    getFieldHelpers,
    errors,
  } = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      seller: {
        phoneNumber: "",
        country: null,
        image: undefined,
      },
    },

    validationSchema: signupValidationSchema,
    onSubmit,
  });
  // console.log("values",values);
  // console.log("errors",errors);

  return (
    <>
      <Head>
        <title>Sign up Page</title>
      </Head>
      <Grid container justifyContent={"center"} my={5} px={1}>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit} noValidate>
            <Paper elevation={3} color={"primary"}>
              <Grid
                container
                sx={{
                  py: {
                    sm: 4,
                    xs: 3,
                  },
                  px: {
                    sm: 4,
                    xs: 1.8,
                  },
                }}
                justifyContent={"space-between"}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  px={0.5}
                  my={0.5}
                  justifyContent={"space-around"}
                  display={"flex"}
                >
                  <ImageInput
                    {...getFieldMeta("seller.image")}
                    {...getFieldProps("seller.image")}
                    {...getFieldHelpers("seller.image")}
                  />
                </Grid>
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
                    {...getFieldHelpers("email")}
                  />
                </Grid>
                <Grid item xs={12} my={0.5}>
                  <PasswordInput
                    {...getFieldMeta("password")}
                    {...getFieldProps("password")}
                    {...getFieldHelpers("password")}
                  />
                </Grid>
                <Grid item xs={12} sm={6} px={0.5} my={0.5}>
                  <CountryInput
                    {...getFieldMeta("seller.country")}
                    {...getFieldProps("seller.country")}
                    {...getFieldHelpers("seller.country")}
                  />
                </Grid>

                <Grid item xs={12} sm={6} px={0.5} my={0.5}>
                  <PhoneNumberInput
                    {...getFieldMeta("seller.phoneNumber")}
                    {...getFieldProps("seller.phoneNumber")}
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
