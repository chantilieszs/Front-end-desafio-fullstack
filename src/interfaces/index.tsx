import { ReactNode } from "react";

export interface iUserContext {
  userRegister: (data: iUserRequest) => void;
  userLogin: (data: iUserLogin) => void;
  user: iUser | null;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  loading: boolean;
  userLogout: () => void;
  userContact: iContactResponse[];
  setUserContact: React.Dispatch<React.SetStateAction<iContactResponse[]>>;
  getContacts: () => void;
}

export interface iProviderProps {
  children: ReactNode;
}

export interface iUser {
  name: string;
  email: string;
  password: string;
  phone: string;
  registered: Date;
}

export interface iUserRequest {
  name: string;
  email: string;
  password: string;
  phone: string;
}

export interface iUserLogin {
  email: string;
  password: string;
}
export interface iContactResponse {
  id:string;
  name: string;
  email: string;
  phone: string;
  registered:Date;
}
