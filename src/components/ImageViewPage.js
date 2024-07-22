import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const ImageViewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { imageUrl, name } = location.state || {};

  const fullImageUrl = `https://1a15-103-175-108-154.ngrok-free.app${imageUrl}`;

  return (
    <div>
      <h1>{name}</h1>
      <img
        src={fullImageUrl}
        alt={name}
        style={{ width: "100%", height: "auto" }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate(-1)}
        style={{ marginTop: "20px" }}
      >
        Back
      </Button>
    </div>
  );
};

export default ImageViewPage;
