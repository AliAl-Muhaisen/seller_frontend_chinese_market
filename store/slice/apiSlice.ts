import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "./authSlice";
import { RootState } from "store/store";
import {
  BaseQueryApi,
  BaseQueryExtraOptions,
} from "@reduxjs/toolkit/dist/query/baseQueryTypes";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.BACKEND_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", token);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 403 || result?.error?.status === 401) {
    //# send refresh token to get new accessToken
    const refreshResult = await baseQuery(
      "/auth/refreshToken",
      api,
      extraOptions
    );
    console.log("refreshResult", refreshResult);

    if (refreshResult?.data) {
      const user = api.getState().auth.user;
      //$ store the new token
      api.dispatch(setCredentials({ ...refreshResult, user }));
      //# retry the original query with the new token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut);
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
