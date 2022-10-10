// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosResponse, AxiosError } from "axios";
type Data = {
  name: string;
};

const errorMessage = { message: "Something went wrong, please try again" };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // console.log("method", req.method);
  if (req.method === "POST") {
    //# get data
    const body = req.body;

    //$ backend's url
    const url = (process.env.BACKEND_URL + "/auth/signup").toString();

    let response: AxiosResponse;
    try {
      //? call backend server
      response = await axios.post(url, body, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      //- backend response
      return res
        .status(response?.status || 404)
        .json(response?.data || { message: "something went wrong" });
    } catch (error: AxiosError | any) {
      //! error
      //! validation or server failed
      // if (axios.isAxiosError(error)) {
      // console.log(error.response?.data);
      return res
        .status(error?.response?.status || 404)
        .json(error.response?.data || errorMessage);
      // }
    }
  }
  return res.status(404).json(errorMessage);
}
