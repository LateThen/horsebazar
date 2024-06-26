import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createHorse } from "../../../models/Horse";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function BlogView() {
  const [info, setInfo] = useState();
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState("");
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const [nazev, setNazev] = useState("");
  const [popis, setPopis] = useState("");
  const navigate = useNavigate();
  const imgRef = useRef<HTMLInputElement>(null);
  const [category, setCategory] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const fileType = selectedFile.type;

      if (!fileType.startsWith("image/")) {
        setError("Please upload a valid image file");
        setFile(null);
        setFilePreview("");
      } else {
        setError("");
        setFile(selectedFile);
        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePreview(reader.result);
        };
        reader.readAsDataURL(selectedFile);
      }
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form data before submission:", formData);
    if (!file) {
      setError("Obrázek je povinný");
      return;
    }

    const formDataToSend = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      formDataToSend.append(key, value);
    }
    formDataToSend.append("photo", imgRef.current.files[0]);
    const post = await createHorse(formDataToSend);
    if (post.status === 201) return navigate("/");
    if (post.status === 500) return navigate("/");
  };
const handleChange = (e) => {
  if (e.target.name === "price" || e.target.name === "phonenumber") {
    const numericValue = e.target.value.replace(/[^\d]/g, '');
    setFormData({ ...formData, [e.target.name]: numericValue });
  } else {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  if (e.target.name === "postname") {
    setNazev(e.target.value);
  } else if (e.target.name === "description") {
    setPopis(e.target.value);
  } else if (e.target.name === "category") {
    setCategory(e.target.value);
  }
};

  const handleButtonClick = () => {
    imgRef.current.click();
  };

  return (
    <Container fixed>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid xs={12} md={8}>
            <Box sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <TextField
                id="name"
                label="Jméno"
                name="name"
                autoComplete="name"
                sx={{ marginBottom: 2 }}
                required
                fullWidth
                onChange={handleChange}
                color="secondary"
              />
              <FormControl required fullWidth>
                <InputLabel
                  htmlFor="outlined-adornment-amount"
                  color="secondary"
                >
                  Telefon
                </InputLabel>
                <OutlinedInput
                  id="phonenumber"
                  startAdornment={
                    <InputAdornment position="start">+420</InputAdornment>
                  }
                  label="Telefon"
                  placeholder="123456789"
                  name="phonenumber"
                  onChange={handleChange}
                  color="secondary"
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]{9}",
                    maxLength: 9,
                  }}
                  sx={{ marginBottom: 2 }}
                />
              </FormControl>
              <TextField
                label="Adresa"
                sx={{ marginBottom: 2 }}
                required
                fullWidth
                id="location"
                name="location"
                autoComplete="location"
                onChange={handleChange}
                color="secondary"
              />
              <FormControl required fullWidth>
                <InputLabel htmlFor="outlined-adornment-amount" color="secondary">
                  Cena
                </InputLabel>
                <OutlinedInput
                  id="price"
                  startAdornment={
                    <InputAdornment position="start">Kč</InputAdornment>
                  }
                  label="Cena"
                  name="price"
                  onChange={handleChange}
                  color="secondary"
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                    maxLength: 9,
                  }}
                />
              </FormControl>
              <Box mt="25px" mb="25px">
                <input
                  ref={imgRef}
                  type="file"
                  name="photo"
                  id="photo"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                <Button variant="contained" onClick={handleButtonClick}>
                  Vyberte obrázek inzerátu
                </Button>
                {error && <Typography color="error">{error}</Typography>}
              </Box>
              <TextField
                label="Heslo"
                type="password"
                sx={{ marginBottom: 2 }}
                required
                fullWidth
                id="password"
                name="password"
                autoComplete="password"
                onChange={handleChange}
                color="secondary"
              />

              <FormControl fullWidth required>
                <InputLabel id="demo-simple-select-label" color="secondary">
                  Kategorie
                </InputLabel>
                <Select
                  id="category"
                  name="category"
                  value={category}
                  label="category"
                  color="secondary"
                  onChange={handleChange}
                >
                  <MenuItem value={"Závodní kůň"}>Závodní kůň</MenuItem>
                  <MenuItem value={"Kůň na chov"}>Kůň na chov</MenuItem>
                  <MenuItem value={"Kůň ke konzumaci"}>Kůň ke konzumaci</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid
            xs={12}
            md={4}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{ p: 2 }}
          >
            {filePreview ? (
              <img
                src={filePreview}
                alt="Uploaded Preview"
                style={{ maxWidth: "100%", maxHeight: "45vh" }}
              />
            ) : (
              <Box
                height={"50vh"}
                width={"100%"}
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ border: "2px solid grey" }}
              >
                <div>Obrázek</div>
              </Box>
            )}
            <Box sx={{ position: "relative", width: "100%" }}>
              <TextField
                id="postname"
                label="Název"
                name="postname"
                sx={{ marginTop: 2 }}
                inputProps={{ maxLength: 64 }}
                fullWidth
                required
                multiline
                minRows={1}
                maxRows={3}
                value={nazev}
                onChange={handleChange}
                color="secondary"
              />
              <Typography
                variant="caption"
                color="textSecondary"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  padding: "0 10px 2px 0",
                }}
              >
                {nazev.length}/64
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "row",
            position: "relative",
          }}
        >
          <TextField
            label="Popis"
            fullWidth
            inputProps={{ maxLength: 1000 }}
            multiline
            minRows={4}
            maxRows={10}
            name="description"
            type="description"
            id="description"
            autoComplete="new-description"
            value={popis}
            onChange={handleChange}
            color="secondary"
            required
          />
          <Typography
            variant="caption"
            color="textSecondary"
            sx={{
              position: "absolute",
              bottom: 10,
              right: 10,
              padding: "0 15px 10px 0",
            }}
          >
            {popis.length}/1000
          </Typography>
        </Box>
        <Button variant="contained" type="submit" size="large" fullWidth>
          Vytvořit inzerát
        </Button>
      </form>
    </Container>
  );
}
