import React from "react";
import { PropertyForm } from "../components/PropertyForm";
import { CssBaseline, Container, Box } from "@mui/material";

export default function Home() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <PropertyForm />
      </Box>
    </Container>
  );
}