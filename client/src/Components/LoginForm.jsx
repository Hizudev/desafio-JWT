import { Box, Button, TextField, Typography } from "@mui/material";
import { useSoftJobsContext } from "../Context/softJobs.Context";
import { useState } from "react";

export default function LoginForm() {
  const {
    navigate,
    email,
    password,
    setAutenticated,
    setEmail,
    setPassword,
    setRol,
    setLenguaje,
    validateEmail,
    validatePassword,
    emailError,
    passwordError,
  } = useSoftJobsContext();

  const [logInError, setLogInError] = useState(" ");

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const res = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    verifyToken(data.token);
  };

  const verifyToken = async (token) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/usuarios`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (data.status == 404) {
        throw data.message;
      }
      if (data.status == 401) {
        throw data.message;
      }
      setEmail(data.result.email);
      setPassword(data.result.password);
      setRol(data.result.rol);
      setLenguaje(data.result.lenguaje);
      setAutenticated(true);
      navigate("/profile");
    } catch (error) {
      setLogInError(error);
    }
  };

  return (
    <Box
      margin={2}
      height={"25em"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-around"}
      bgcolor={"#84A7A1"}
      borderRadius={"10px"}
      boxShadow={"0 1px 4px black"}
      component={"form"}
      onSubmit={handleSubmitLogin}
    >
      <Box px={3}>
        <Typography
          variant="h4"
          py={2}
          sx={{ textShadow: "2px 2px 2px black" }}
        >
          Email de usuario:
        </Typography>
        <TextField
          fullWidth
          required
          id="email"
          label="email"
          type="email"
          variant="outlined"
          helperText={emailError.message}
          error={email.length !== 0 && emailError.error}
          value={email}
          onChange={(e) => validateEmail(e.target.value)}
        />
      </Box>
      <Box px={3}>
        <Typography
          variant="h4"
          pb={2}
          sx={{ textShadow: "2px 2px 2px black" }}
        >
          Contraseña:
        </Typography>
        <TextField
          fullWidth
          required
          id="password"
          label="password"
          type="password"
          variant="outlined"
          helperText={"Extension: Min 3. Max 14."}
          error={password.length !== 0 && passwordError}
          value={password}
          onChange={(e) => validatePassword(e.target.value)}
        />
      </Box>
      <Box height={"1em"}>
        <Typography
          align="center"
          sx={{ color: "red", textShadow: "1px 1px 2px black" }}
        >
          {logInError}
        </Typography>
      </Box>
      <Box display={"flex"}>
        {emailError.error || passwordError ? (
          <Button fullWidth variant="contained" disabled sx={{ margin: "1em" }}>
            Ingresar
          </Button>
        ) : (
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ margin: "1em" }}
          >
            Ingresar
          </Button>
        )}
      </Box>
    </Box>
  );
}
