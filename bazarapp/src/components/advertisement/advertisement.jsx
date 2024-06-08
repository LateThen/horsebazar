import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Link as ReactLink, useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";

export default function Advertisement() {
  const [randomImage, setRandomImage] = useState("");
  const [randomURL, setRandomURL] = useState("");
  const location = useLocation();

  useEffect(() => {
    const images = [
      "../../src/img/SaskaGoblin.png",
      "../../src/img/advertisement1.png",
      "../../src/img/advertisement2.png",
      "../../src/img/advertisement3.png",
    ];
    const urls = [
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/VojtaKdo",
      "https://github.com/LeDanos",
      "https://github.com/LateThen",
      "https://github.com/MisaKo1",
    ];

    const randomImageIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomImageIndex]);

    const randomUrlIndex = Math.floor(Math.random() * urls.length);
    setRandomURL(urls[randomUrlIndex]);
  }, [location]);

  return (
    <Box width="1" pt="40%" textAlign="center">
      <Typography variant="h3" fontFamily="Comic Sans MS" textAlign="center">
        Reklama
      </Typography>
      <ReactLink to={randomURL}>
        <img src={randomImage} alt="Advertisement" />
      </ReactLink>
    </Box>
  );
}