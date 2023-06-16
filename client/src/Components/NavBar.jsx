import { Box, Button, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useSoftJobsContext } from "../Context/softJobs.Context";

export default function NavBar() {
  const {
    navigate,
    autenticated,
    setAutenticated,
    setToken,
    setEmail,
    setPassword,
    setRol,
    setLenguaje,
  } = useSoftJobsContext();

  const closeSession = () => {
    navigate("/");
    setAutenticated(false);
    setToken("");
    setEmail("");
    setPassword("");
    setRol("");
    setLenguaje("");
  };

  return (
    <Box
      display={"flex"}
      px={1}
      justifyContent={"space-between"}
      alignItems={"center"}
      boxShadow={"0 1px 4px black"}
      sx={{ backgroundColor: "#0E2954" }}
    >
      <Box>
        <Typography variant="h3" sx={{ textShadow: "4px 4px 4px #284B63" }}>
          <b>
            <i>SJ</i>
          </b>
        </Typography>
      </Box>
      <Box>
        <Button
          sx={{ margin: "0 .5em" }}
          color="inherit"
          variant="text"
          onClick={() => navigate("/")}
        >
          <HomeIcon /> Inicio
        </Button>
        {autenticated ? (
          <Button
            sx={{
              margin: "0 .5em",
              backgroundColor: "#84A7A1",
              textShadow: "1px 1px 1px black",
            }}
            variant="inherit"
            onClick={() => navigate("/profile")}
          >
            Mi Perfil
          </Button>
        ) : (
          <Button
            sx={{
              margin: "0 .5em",
              backgroundColor: "#84A7A1",
              textShadow: "1px 1px 1px black",
            }}
            variant="inherit"
            onClick={() => navigate("/register")}
          >
            Registrarme
          </Button>
        )}
        {autenticated ? (
          <Button
            sx={{
              margin: "0 .5em",
              backgroundColor: "red",
              textShadow: "1px 1px 2px black",
            }}
            variant="inherit"
            onClick={closeSession}
          >
            Cerrar Session
          </Button>
        ) : (
          <Button
            sx={{
              margin: "0 .5em",
              backgroundColor: "#D9D9D9",
              color: "black",
            }}
            variant="inherit"
            onClick={() => navigate("/login")}
          >
            Iniciar Session
          </Button>
        )}
      </Box>
    </Box>
  );
}
