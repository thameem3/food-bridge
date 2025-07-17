"use client";
import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Paper,
  Box,
} from "@mui/material";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    address: "",
    role: "donor",
    donorType: "individual",
    orgName: "",
    contactPerson: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submitted Form Data:", formData);

    if (formData.role === "donor") {
      window.location.href = "/donor";
    } else {
      window.location.href = "/ngo";
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={7} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Name" name="name" margin="normal" value={formData.name} onChange={handleChange} />
          <TextField fullWidth label="Email" name="email" margin="normal" value={formData.email} onChange={handleChange} />
          <TextField fullWidth label="Password" name="password" type="password" margin="normal" value={formData.password} onChange={handleChange} />
          <TextField fullWidth label="Mobile Number" name="mobile" margin="normal" value={formData.mobile} onChange={handleChange} />
          <TextField fullWidth label="Address" name="address" margin="normal" value={formData.address} onChange={handleChange} />

          <Box mt={2}>
            <FormLabel>Role</FormLabel>
            <RadioGroup row name="role" value={formData.role} onChange={handleChange}>
              <FormControlLabel value="donor" control={<Radio />} label="Donor" />
              <FormControlLabel value="ngo" control={<Radio />} label="NGO" />
            </RadioGroup>
          </Box>

          {formData.role === "donor" && (
            <Box mt={2}>
              <FormLabel>Donor Type</FormLabel>
              <RadioGroup row name="donorType" value={formData.donorType} onChange={handleChange}>
                <FormControlLabel value="individual" control={<Radio />} label="Individual" />
                <FormControlLabel value="organization" control={<Radio />} label="Organization" />
              </RadioGroup>
            </Box>
          )}

          {(formData.donorType === "organization" || formData.role === "ngo") && (
            <>
              <TextField fullWidth label="Organization Name" name="orgName" margin="normal" value={formData.orgName} onChange={handleChange} />
              <TextField fullWidth label="Contact Person Name" name="contactPerson" margin="normal" value={formData.contactPerson} onChange={handleChange} />
            </>
          )}

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 3, py: 1.5 }}>
            Register
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
