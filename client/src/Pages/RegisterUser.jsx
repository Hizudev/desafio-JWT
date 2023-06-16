import { Box, Divider, Typography } from "@mui/material";
import RegisterForm from "../Components/RegisterForm";

export default function RegisterUser() {
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
          Registrar Usuario
        </Typography>
      </Box>
      <Box>
        <Divider sx={{ margin: "0" }} variant="middle" />
        <RegisterForm />
      </Box>
    </Box>
  );
}
