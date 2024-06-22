import { useLocation } from "react-router-dom";
import { Typography, Box } from "@mui/material";

const Summary = () => {
  const location = useLocation();
  const { firstName, lastName, email, age, guest, guestName } =
    location.state || {};

  return (
    <Box
      sx={{
        maxWidth: 750,
        padding: 3,
        backgroundColor: "#14c276",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        border: "1px solid #ddd",
        borderRadius: 3,
        color: "#FBF9F1",
        lineHeight: 1.5,
      }}
    >
      <Typography variant="h3" fontWeight={"500"}>
        Event Registration Confirmation
      </Typography>

      <Typography variant="body1" marginTop={2}>
        Dear {firstName} {lastName},
      </Typography>
      <Typography variant="body1">
        Thank you for registering for our event. We are pleased to confirm your
        registration with the following details:
      </Typography>
      <Typography variant="subtitle1" fontWeight={"bold"}>
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
