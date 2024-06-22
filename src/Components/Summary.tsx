import { useLocation } from "react-router-dom";
import { Typography, Box } from "@mui/material";

const Summary = () => {
    const location = useLocation();
  const { firstName, lastName, email, age, guest, guestName } =
    location.state || {};

  return (
    <Box
      sx={{
        maxWidth: {
          xs: 400, // Maximum width on extra small screens (viewport width < 600px)
          sm: 450, // Maximum width on small screens (viewport width >= 600px)
          md: 550, // Maximum width on medium screens (viewport width >= 960px)
          lg: 650, // Maximum width on large screens (viewport width >= 1280px)
          xl: 750, // Maximum width on extra large screens (viewport width >= 1920px)
        },
        minHeight: {
          xs: 530, // Maximum width on extra small screens (viewport width < 600px)
          sm: 470, // Maximum width on small screens (viewport width >= 600px)
          md: 490, // Maximum width on medium screens (viewport width >= 960px)
          lg: 400, // Maximum width on large screens (viewport width >= 1280px)
          xl: 420, // Maximum width on extra large screens (viewport width >= 1920px)
        },
        boxSizing: "border-box",
        padding: 2,
        backgroundColor: "#14c276",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        border: "1px solid #ddd",
        borderRadius: 3,
        color: "#FBF9F1",
        lineHeight: 4,
      }}
    >
      <Typography
      variant="h4"
        fontWeight={"bold"} 
        marginTop={2} 
        align="center"
      >
        Event Registration Confirmation
      </Typography>

      <Typography variant="body1" marginTop={2}>
        Dear {firstName} {lastName},
      </Typography>
      <Typography variant="body1">
        Thank you for registering for our event. We are pleased to confirm your
        registration with the following details:
      </Typography>
      <Typography variant="subtitle1" fontWeight="bold" color="#FEFFD2">
        - Email: {email}
        <br />- Age: {age}
        <br />- Attending with Guest: {guest === "Yes" ? "Yes" : "No"}
        {guest === "Yes" && <>, Guest Name: {guestName}</>}
      </Typography>
      <Typography variant="body1" gutterBottom>
        We look forward to your participation in the event. Should you have any
        questions or need further assistance, please do not hesitate to contact
        us.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Best regards,
        <br />
        Event Management Team
      </Typography>
    </Box>
  );
};

export default Summary;
