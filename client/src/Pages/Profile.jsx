import { Box, Typography } from "@mui/material";
import { useSoftJobsContext } from "../Context/softJobs.Context";

export default function Profile() {
  const { email, rol } = useSoftJobsContext();
  return (
    <>
      <Box>
        <Typography py={3} variant="h1" component={"h2"} align="center">
          bienvenido
        </Typography>
      </Box>
      <Box
        py={3}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Typography py={3} variant="h2">
          <b>{email}</b>
        </Typography>
        <Typography pt={3} variant="h3">
          Tu cuenta es de tipo: <b>{rol}</b>
        </Typography>
      </Box>
    </>
  );
}
