import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link as ReactLink } from "react-router-dom";

// ----------------------------------------------------------------------

export default function AppView() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    setIsButtonVisible(true);
  }, []);

  return (
    <Box
      overflow="hidden"
      sx={{
        position: { lg: "absolute", sm: "none" },
        top: { lg: 80, sm: 0 }, // Výška horního navbaru
        left: { lg: 277, sm: 0 }, // Šířka levého navbaru
        width: { lg: "calc(100vw - 277px)", sm: "100vw" }, // Šířka viewportu mínus šířka levého navbaru
        height: {
          lg: "calc(100vh - 80px)",
          sm: "calc(100vh - 144px)",
          xs: "calc(100vh - 144px)",
        }, // Výška viewportu mínus výška horního navbaru
      }}
    >
      <img
        src="../../src/img/blackMarketeerIntro.png"
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <Box sx={{ position: "absolute", top: { lg: "98%", xs: "200px" } }} width="1">
        <Button
          sx={{
            position: "absolute",
            right: {xl: "5%", lg: "10px", xs: "10px"},
            bottom: "60px",
            opacity: isButtonVisible ? 1 : 0,
            transition: "opacity 2s",
          }}
        >
          <ReactLink to={"/products"}>
            <img src="../../src/img/buyHorseButton.png" alt="" />
          </ReactLink>
        </Button>
        <Button
          sx={{
            position: "absolute",
            right: {xl: "5%", lg: "10px", xs: "10px"},
            bottom: "0",
            opacity: isButtonVisible ? 1 : 0,
            transition: "opacity 2s",
          }}
        >
          <ReactLink to={"/createpost"}>
            <img src="../../src/img/sellHorseButton.png" alt="Prodat Koně" />
          </ReactLink>
        </Button>
      </Box>
    </Box>
  );
}