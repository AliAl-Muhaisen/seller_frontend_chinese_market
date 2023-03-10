import type { NextPage } from "next";
import { useState } from "react";
import { useFormik } from "formik";
import { loginValidationSchema } from "@/lib/yup";
import { LoginForm } from "types/types";
import { signIn } from "next-auth/react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { EmailInput, PasswordInput } from "@/components/formik/inputs";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Head from "next/head";
import AlertDialog from "components/ui/dialogModal";
import OverlayLoading from "@/components/loadingSpinner/overlayLoading";

const Login: NextPage = () => {
  // const session = useSession();
  // console.log("session", session.data);
  // console.log("loading", session.status);

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (values: LoginForm, actions: any) => {
    setIsFormSubmitted(true);
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    // console.log("response", res);
    if (!res?.ok) {
      setError(res?.error as string);
    }
    setIsFormSubmitted(false);
  };

  const { handleSubmit, getFieldMeta, getFieldProps, getFieldHelpers } =
    useFormik({
      initialValues: { email: "", password: "" },
      onSubmit,
      validationSchema: loginValidationSchema,
    });
  function onCloseModal() {
    setError(null);
  }

  return (
    <div>
      <div>
        <Head>
          <title>Login Page</title>
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
              <Paper elevation={3} color="primary">
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
      </div>
      <OverlayLoading open={isFormSubmitted} />
    </div>
  );
};
export default Login;
