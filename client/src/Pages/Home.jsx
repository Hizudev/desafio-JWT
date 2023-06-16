import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Box
      height={"80vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      bgcolor={"#284B63"}
    >
      <Typography
        variant="h1"
        align="center"
        sx={{ textShadow: "4px 4px 4px #0E2954" }}
        mb={1}
      >
        Bienvenid@ a <b>Soft Jobs</b>
      </Typography>
      <Typography
        variant="h3"
        align="center"
        sx={{ textShadow: "4px 4px 4px #0E2954" }}
      >
        El lugar donde todos los Juniors Developer <br />
        podran obtener experiencia
      </Typography>
    </Box>
  );
}
