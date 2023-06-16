import { Box, Divider, Typography } from "@mui/material";
import LoginForm from "../Components/LoginForm";

export default function LoginUser() {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Box>
        <Typography
          variant="h1"
          component={"h2"}
          align="center"
          py={5}
          sx={{ textShadow: "4px 4px 4px #0E2954" }}
        >
          Iniciar Sesion
        </Typography>
      </Box>
      <Box>
        <Divider sx={{ margin: "0" }} variant="middle" />
        <LoginForm />
      </Box>
    </Box>
  );
}
