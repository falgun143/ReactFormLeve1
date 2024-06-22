import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Form.css"; // Import the CSS file
import useFormValidation, { Data } from "../Components/userFormValidation";

export const Form = () => {
  const { register, handleSubmit, errors, watch } = useFormValidation();
  const navigate = useNavigate();

  const onSubmit = (data: Data) => {
    console.log(data);
    toast.success("Registration successful! Redirecting...");
    setTimeout(() => navigate("/summary", { state: data }), 4000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ToastContainer autoClose={4000} position="top-center" newestOnTop />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: 0.1,
          borderColor: "grey.400",
          borderRadius: 5,
          gap: 2,
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
            fullWidth
            required
            label="First Name"
            {...register("firstName")}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />

          <TextField
            fullWidth
            required
            label="Last Name"
            {...register("lastName")}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />
        </Box>
        <TextField
          fullWidth
          required
          label="Email"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          fullWidth
          required
          label="Age"
          {...register("age", { valueAsNumber: true })}
          error={!!errors.age}
          helperText={errors.age?.message}
        />
        <FormControl fullWidth>
          <InputLabel id="guest-label">
            Are you attending with a guest?
          </InputLabel>
          <Select
            labelId="guest-label"
            {...register("guest")}
            label="Are you attending with a guest?"
            defaultValue=""
            required
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </Select>
        </FormControl>

        {watch("guest") === "Yes" && (
          <TextField
            fullWidth
            required
            className={`guest-name-box ${
              watch("guest") === "Yes" ? "show" : ""
            }`}
            label="Guest Name"
            {...register("guestName")}
            error={!!errors.guestName}
            helperText={errors.guestName?.message}
          />
        )}

        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </form>
  );
};
