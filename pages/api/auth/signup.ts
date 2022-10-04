// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosResponse, AxiosError } from "axios";
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("method", req.method);
  // if (req.method === "POST") {
  const body = req.body;
  console.log("booooooody", body);
  console.log("BACKEND_URL", process.env.BACKEND_URL);
  const url = process.env.BACKEND_URL + "/api/auth/signup";
  let response: AxiosResponse;
  try {
    response = await axios.post(url, body, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    console.log("\n\n\n\nn\n\nALLLLLLLLLI");
  } catch (error: AxiosError | any) {
    // res.status(error.status ?? 444).json(error.data);
    // console.log("errrrrrrror", error);
    if(axios.isAxiosError(error))
    {
    console.log("herrrrrrrrrrrrrrrrrrrrrrrrrrrrr");

    }
    // console.log("herrrrrrrrrrrrrrrrrrrrrrrrrrrrr",axios.isAxiosError(error));
    // const err=axios.isAxiosError(error);
  // err.valueOf()

  }
  // console.log("response", response.data);

  // }

  res.status(404).json({ error: "something went wrong" });
}
