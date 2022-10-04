import type { NextPage } from "next";
import { FormEvent, useState } from "react";
import { useFormik } from "formik";
import { loginValidationSchema } from "@/lib/yup";
import { LoginForm } from "types/types";
import { signIn } from "next-auth/react";
import axios from "axios";
import { useSession } from "next-auth/react";

const Login: NextPage = () => {
  const session = useSession();
  console.log("session", session.data);
  console.log("loading", session.status);
  const onSubmit = async (values: LoginForm, actions: any) => {
    console.log("from submoit ");
    console.log("values", values);
    console.log("actions", actions);
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    console.log("response", res);
    // await axios.post("api/auth/signup", values);
  };

  const { values, handleChange, handleSubmit, errors, handleBlur } = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit,
    validationSchema: loginValidationSchema,
  });
  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-md-6 col-sm-12 my-3">
        <div className="row bg-white border border-danger rounded p-3 mb-3">
          <section className="row mx-auto py-2">
            <div className="col text-center">
              <h4>Chinese Market</h4>
            </div>
          </section>
          <section className="row mx-auto">
            <form
              //   onSubmit={onSubmitHandle}
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              noValidate
            >
              <div className="row mx-auto gy-2">
                <div className="col-md-12">
                  <input
                    type="email"
                    name="email"
                    id=""
                    placeholder="Email"
                    className="form-control"
                    onChange={handleChange}
                    value={values.email}
                  />
                  {errors.email && (
                    <div className="text-danger">{errors.email}</div>
                  )}
                </div>
                <div className="col-md-12">
                  <input
                    type="password"
                    name="password"
                    id=""
                    placeholder="Password"
                    className="form-control"
                    onChange={handleChange}
                    value={values.password}
                  />
                </div>
                <div className="col-md-12">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block my-3 mx-auto w-100"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Login;
