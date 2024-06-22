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
import "./EventForm.css"; 
import useFormValidation, { Data } from "../components/userFormValidation";
import EventRegistrationImage from "../../public/event.png"
export const Form = () => {
  const { register, handleSubmit, errors, watch } = useFormValidation();
  const navigate = useNavigate();
  const guest = watch("guest");

  const onSubmit = (data: Data) => {
    toast.success("Registration successful! Redirecting...");
    setTimeout(() => navigate("/summary", { state: data }), 4000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ToastContainer autoClose={4000} position="top-center" newestOnTop />

      <Box
        sx={{
          maxWidth: {
            xs: 290,   // Maximum width on extra small screens (viewport width < 600px)
            sm: 400,   // Maximum width on small screens (viewport width >= 600px)
            md: 600,   // Maximum width on medium screens (viewport width >= 960px)
            lg: 800,   // Maximum width on large screens (viewport width >= 1280px)
            xl: 1000,  // Maximum width on extra large screens (viewport width >= 1920px)
          },
          margin: "0 auto", 
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: 0.1,
          borderColor: "grey.400",
          borderRadius: 2,
          gap: 2,
          boxSizing:"border-box",
          padding: 2,
          color: "black",
          backgroundColor: "rgb(255, 255, 255)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >

       <Box sx={{
          display: "flex",
          flexDirection: "column",
          gap:1,
          justifyContent: "center",
          alignItems: "center",
        }}>

         <img src={EventRegistrationImage} alt="Job Registration" style={{ width:"80px" }} />

         <Typography variant={"h4"} fontWeight="bold"  align="center" style={{color:"#151515"}} >
          Event Registration Form 
        </Typography>
        <Typography style={{fontSize:16, color: "#5b5b5b"}}  marginBottom={2} >
       Let's get started. Are you ready to be part of 
       <br></br>
       something new? Then boldly move forward with us.
        </Typography>
     
        </Box>
      
        <Box
          sx={{
            display: "flex",
            flexDirection:{
            xs:"column",
            sm:"row"
            },
            width: "100%",
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

        <div style={{width: '100%'}}   className={`guest-name-box ${guest === "Yes"  ? "show" : ""}`}>
          <TextField
            fullWidth
            label="GuestName"
            {...register("guestName", { required: false })}
            defaultValue={"  "}
            error={!!errors.guestName}
            helperText={errors.guestName?.message}
          />
        </div>

        <Button variant="contained" type="submit" style={{maxWidth: '300px', maxHeight: '35px', minWidth: '250px', minHeight: '30px',backgroundColor:"#FFDC00",fontSize:"17px",fontWeight:"bold",color:"black"}} >
          Submit
        </Button>
      </Box>
    </form>
  );
};
