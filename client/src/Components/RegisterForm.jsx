import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { useSoftJobsContext } from "../Context/softJobs.Context";
import { useState } from "react";

export default function RegisterForm() {
  const {
    email,
    password,
    rol,
    setRol,
    lenguaje,
    setLenguaje,
    emailError,
    passwordError,
    validateEmail,
    validatePassword,
  } = useSoftJobsContext();

  const [registerState, setRegisterState] = useState("");
  const [registerOk, setRegisterOk] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/usuarios`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, rol, lenguaje }),
      });
      const data = await res.json();
      if (data.status == 409) {
        throw data.message;
      }
      setRegisterOk(true);
      setRegisterState(data.message);
    } catch (error) {
      setRegisterOk(false);
      setRegisterState(error);
    }
  };

  return (
    <Box
      margin={2}
      height={"40em"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-around"}
      bgcolor={"#84A7A1"}
      borderRadius={"10px"}
      boxShadow={"0 1px 4px black"}
      component={"form"}
      onSubmit={handleSubmit}
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
      <Box px={3}>
        <Typography
          variant="h4"
          pb={2}
          sx={{ textShadow: "2px 2px 2px black" }}
        >
          Rol:
        </Typography>

        <TextField
          id="outlined-select-currency"
          fullWidth
          select
          required
          label="seleccione un rol"
          defaultValue=""
          onChange={(e) => {
            setRol(e.target.value);
          }}
        >
          <MenuItem value="Admin">Admin</MenuItem>
          <MenuItem value="User">User</MenuItem>
        </TextField>
      </Box>
      <Box px={3}>
        <Typography
          variant="h4"
          py={2}
          sx={{ textShadow: "2px 2px 2px black" }}
        >
          Lenguaje:
        </Typography>
        <TextField
          id="outlined-select-currency"
          fullWidth
          select
          required
          label="seleccione un lenguaje"
          defaultValue=""
          onChange={(e) => {
            setLenguaje(e.target.value);
          }}
        >
          <MenuItem value="ESP">Español</MenuItem>
          <MenuItem value="PRT">Portugues</MenuItem>
          <MenuItem value="ENG">Ingles</MenuItem>
        </TextField>
      </Box>
      <Box height={"1em"}>
        <Typography
          align="center"
          sx={{
            color: `${registerOk ? "green" : "red"}`,
            textShadow: "1px 1px 2px black",
          }}
        >
          {registerState}
        </Typography>
      </Box>
      {emailError.error || passwordError || rol == "" || lenguaje == "" ? (
        <Button variant="contained" disabled sx={{ margin: "1em" }}>
          Registrar
        </Button>
      ) : (
        <Button type="submit" variant="contained" sx={{ margin: "1em" }}>
          Registrar
        </Button>
      )}
    </Box>
  );
}
