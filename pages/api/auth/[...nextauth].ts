import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { LoginForm, AuthResponse } from "types/types";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 1,
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        try {
          const { email, password } = credentials as LoginForm;

          const body = { email, password };
          const url = process.env.BACKEND_URL + "/auth/login";
          const response = await axios.post(url, body, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          });
          console.log("log in response \n", response.data);
          const user: AuthResponse = response.data;
          if (!user) {
            throw new Error(
              "Email or Password is incorrect, Please try again."
            );
          }

          return user;
        } catch (err: any) {
          console.error(err);
          //! error
          //! validation or server failed
          throw new Error(
            err?.data?.message ||
              "Email or Password is incorrect, Please try again."
          );
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    newUser: "/signup",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      console.log("callbacks token", token);
      // console.log("callbacks user", user);
      if (user) {
        token.data = user;
      }
      console.log(Date.now());
      console.log(Date.now()+1000);
      
      if(Date.now()+1000 < Date.now()) {
        console.log("Token expired");
        
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token.data) {
        console.log("callbacks token.data", token.data);

        session.user = token.data;
      }
      return session;
    },
  },
  // secret:process.e nv.
};

export default NextAuth(authOptions);
//
