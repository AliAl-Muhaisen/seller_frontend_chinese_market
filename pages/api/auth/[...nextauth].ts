import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { LoginForm, AuthResponse } from "types/types";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 60 * 60,
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as LoginForm;

        const body = { email, password };
        const url = process.env.BACKEND_URL + "/api/auth/login";
        const response = await axios.post(url, body, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        console.log("log in response \n", response.data);
        const user: AuthResponse = response.data;
        if (!user) {
          return null;
        }

        return user;
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
      console.log("callbacks user", user);
      if (user) {
        token.data = user;
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
};

export default NextAuth(authOptions);
//
