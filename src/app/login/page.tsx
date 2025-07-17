"use client";

import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Paper,
} from "@mui/material";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Email" name="email" margin="normal" value={formData.email} onChange={handleChange} />
          <TextField fullWidth label="Password" name="password" type="password" margin="normal" value={formData.password} onChange={handleChange} />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 3, py: 1.5 }}>
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
