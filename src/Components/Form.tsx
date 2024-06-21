import {
  Box,
  Button,
  TextField,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Form.css';

export const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [guest, setGuest] = useState(false);
  const [guestName, setGuestName] = useState("");
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("No");

  function handleSubmit(event: any) {
    event.preventDefault();
    toast.success("Registration successful! Redirecting...");

    setTimeout(() => navigate("/summary"), 4000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <ToastContainer autoClose={4000} position="top-center" newestOnTop />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: 0.1,
          borderColor: "grey.400",
          borderRadius: 5,
          gap: 1,
          padding: 2,
          color: "black",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant={"h4"} fontWeight="500" marginBottom={4}>
          Event Registration Form
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <TextField
            style={{ marginBottom: 10 }}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            fullWidth
            required
            label="First Name"
            name="firstname"
          />
          <TextField
            style={{ marginBottom: 10 }}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            fullWidth
            required
            label="Last Name"
            name="lastname"
          />
        </Box>
        <TextField
          style={{ marginBottom: 10 }}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          fullWidth
          required
          label="Email"
          name="email"
        />

        <TextField
          style={{ marginBottom: 10 }}
          onChange={(e) => {
            setAge(e.target.value);
          }}
          fullWidth
          required
          label="Age"
          name="age"
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Are you attending with a guest?</Typography>

          <RadioGroup
            value={selectedValue}
            onChange={(e) => {
              setSelectedValue(e.target.value);
              setGuest(e.target.value === "Yes");
            }}
            row
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </Box>

        <Box className={`guest-name-box ${guest ? 'show' : ''}`} >
          {guest && (
            <TextField
              style={{ marginBottom: 10 }}
              onChange={(e) => {
                setGuestName(e.target.value);
              }}
              fullWidth
              required
              label="Guest Name"
              name="guestname"
            />
          )}
        </Box>

        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </form>
  );
};
