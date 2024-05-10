import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ShowAllSpecialists = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialties } = await res.json();
  //   console.log(specialties);
  return (
    <Container
      sx={{
        mt: 10,
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {specialties.map((specialty: any) => (
          <Grid item key={specialty.id} xs={12} sm={6} md={4} lg={3}>
            <Box
              sx={{
                width: "100%",
                backgroundColor: "rgba(245, 245, 245,1)",
                border: "1px solid rgba(250, 250, 250, 1)",
                borderRadius: "10px",
                textAlign: "center",
                padding: "20px",
                "& img": {
                  width: "50px",
                  height: "50px",
                  margin: "0 auto",
                },
                "&:hover": {
                  border: "1px solid rgba(36, 153, 239, 1)",
                  borderRadius: "10px",
                  cursor: "pointer",
                  transition: "all 0.5s",
                },
              }}
            >
              <Image
                src={specialty.icon}
                width={100}
                height={100}
                alt="specialty icon"
              />
              <Box>
                <Typography component="p" fontWeight={600} fontSize={18} mt={2}>
                  {specialty.title}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ShowAllSpecialists;
