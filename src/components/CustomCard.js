import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const CustomCard = ({ title, content, apiEndpoint, onCreateData, onCreatePlan }) => {
  const navigate = useNavigate();

  const handleFetchData = async () => {
    try {
      const response = await fetch(apiEndpoint, {
        headers: {
          Accept: "application/json",
          "ngrok-skip-browser-warning": "98547",
        },
      });
      const data = await response.json();
      navigate("/data", { state: { title, data, apiEndpoint } });
    } catch (error) {
      console.error(`Failed to fetch ${title} data:`, error);
    }
  };

  return (
    <Card style={{ backgroundColor: "#003366", color: "white", minWidth: "200px" }}>
      <CardContent>
        <Box style={{ backgroundColor: "#003366", color: "white", padding: "20px", borderRadius: "5px" }}>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body2">{content}</Typography>
          <Button variant="contained" color="primary" onClick={handleFetchData}>
            Fetch Data
          </Button>
          {onCreateData && title === "ProjectList" && (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate("/create")}
              style={{ marginTop: "10px" }}
            >
              Create Data
            </Button>
          )}
          {onCreatePlan && title === "Plan_Details" && (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate("/create")}
              style={{ marginTop: "10px" }}
            >
              Create Plan
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
