import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const softJobsContext = createContext();

export const Provider = ({ children }) => {
  const navigate = useNavigate();
  const [autenticated, setAutenticated] = useState(false);
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState({
    error: false,
    message: " ",
  });

  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (regex.test(email) || email.length == 0) {
      setEmailError({
        error: false,
        message: " ",
      });
    } else {
      setEmailError({
        error: true,
        message: "Formato Incorrecto",
      });
    }
    setEmail(email);
    return regex.test(email);
  };

  const validatePassword = (password) => {
    setPassword(password);
    if (password.length < 3 || password.length > 14) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  return (
    <softJobsContext.Provider
      value={{
        navigate,
        autenticated,
        token,
        email,
        password,
        rol,
        lenguaje,
        setAutenticated,
        setToken,
        setEmail,
        setPassword,
        setRol,
        setLenguaje,
        validateEmail,
        validatePassword,
        emailError,
        passwordError,
      }}
    >
      {children}
    </softJobsContext.Provider>
  );
};

export const useSoftJobsContext = () => useContext(softJobsContext);
