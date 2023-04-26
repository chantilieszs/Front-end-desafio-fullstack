import { createContext, useEffect, useState } from "react";
import {
  iContactResponse,
  iProviderProps,
  iUser,
  iUserContext,
  iUserLogin,
  iUserRequest,
} from "../interfaces";
import { useNavigate } from "react-router-dom";
import { instance } from "../services/api";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [ userContact, setUserContact ] = useState([] as iContactResponse[]);

  const navigate = useNavigate();

  useEffect(() => {
    async function userLoad() {
      const token = localStorage.getItem("@UserToken");
      if (token) {
        try {
          const { data } = await instance.get("/customers");
          navigate("/deashboard", { replace: true });
          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }
      try {
        const {data} = await instance.get("/contact")
        setUserContact(data)
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    userLoad();
  }, [navigate]);

  const userRegister = async (data: iUserRequest) => {
    try {
      await instance.post("/customers", data);
      navigate("/")
      setLoading(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      userLogin(data);
    }
  };

  const userLogin = async (data: iUserLogin) => {
    try {
      const response = await instance.post("/login", data);
      setUser(response.data.user);
      localStorage.setItem("@UserToken", response.data.token);
      navigate("/deashboard", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@UserToken");
    navigate("/");
  };

  const getContacts = async () => {
    try {
      const { data } = await instance.get("/contact                                                                                                                                    ")
      setUserContact(data)
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <UserContext.Provider
      value={{
        userRegister,
        userLogin,
        user,
        setUser,
        loading,
        userLogout,
        userContact,
        setUserContact,
        getContacts
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
