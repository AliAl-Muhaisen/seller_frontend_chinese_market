// import { DateSchema, DateSchemaConstructor } from "yup";
// declare module "next-auth/client";
// interface CountryType {
//     code: string;
//     label: string;
//     phone: string;
//     suggested?: boolean;
//   }
// import axios, { AxiosResponse, AxiosError } from "axios";

export type navItemsType = {
  name: string;
  href: string;
  BtnVar: "contained" | "text" | "outlined" | undefined;
};
export interface AxiosErrorMessage {
  error: { response: { data: { message: string } }; status: number };
}
export interface DialogModalData {
  open: boolean;
  title: string;
  body: string;
  onClose: () => void;
}
// declare module "yup" {
//  export interface DateSchema {
//       withoutNumbers(withoutNumbers: string): DateSchema;
//   }
// }

// export const string: DateSchemaConstructor;
