
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

export interface User{
  email: string;
  userId: string;
}