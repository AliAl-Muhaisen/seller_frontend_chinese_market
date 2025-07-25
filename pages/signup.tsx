import type { NextPage } from "next";
import { useFormik } from "formik";
import { signupValidationSchema } from "@/lib/yup";
import { SignupForm } from "types/types";
import axios from "axios";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import AlertDialog from "components/ui/dialogModal";
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
  const [error, setError] = useState<string | null>(null);
  const onSubmit = async (values: SignupForm, actions: any) => {
    setIsFormSubmitted(true);

    try {
      const res = await axios.post("api/auth/signup", values);
    } catch (error: AxiosErrorMessage | any) {
      setError(error.response.data.message as string);
    }

    setIsFormSubmitted(false);
  };

  const { handleSubmit, getFieldMeta, getFieldProps, getFieldHelpers } =
    useFormik({
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

  function onCloseModal() {
    setError(null);
  }
  return (
    <>
      <Head>
        <title>Sign up Page</title>
      </Head>
      {error && (
        <AlertDialog
          body={`Invalid inputs : ${error.toString()}`}
          title="Error"
          open={true}
          key="Error Modal"
          onClose={onCloseModal}
        />
      )}

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
