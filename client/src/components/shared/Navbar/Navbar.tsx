import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container>
      <Stack py={2} direction="row" justifyContent="space-between" alignItems={"center"}>
        <Typography variant="h4" component="h1" fontWeight={600}>
          P
          <Box component="span" color="primary.main">
            H
          </Box>
          Health Care
        </Typography>
        <Stack direction={"row"} gap={4} justifyContent={"space-between"}> 

          <Typography component={Link} href={'/consultation'}>Consultation</Typography>
          <Typography>Health Plans</Typography>
          <Typography>Medicine</Typography>
          <Typography>Diagnostics</Typography>
          <Typography>NGOs</Typography>
        </Stack>
        <Button component={Link} href="/login">LOGIN</Button>
      </Stack>
    </Container>
  );
};

export default Navbar;
