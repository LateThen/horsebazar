import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createHorse, getUploads } from "../../../models/Horse";
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
import { create } from "domain";

export default function BlogView() {
  const [info, setInfo] = useState();
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState("");
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const [nazev, setNazev] = useState("");
  const [popis, setPopis] = useState("");
  const navigate = useNavigate();
  const imgRef = useRef<HTMLInputElement>(null);

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
  
    const formDataToSend = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      formDataToSend.append(key, value);
    }
    formDataToSend.append("photo", imgRef.current.files[0]);
    const post = await createHorse(formDataToSend);
    if (post.status === 201) return navigate("/");
    //if (post.status === 400) return setInfo(getHorses.msg);
    if (post.status === 500) return navigate("/");
  };
  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Container fixed>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid xs={12} md={8}>
              <Box sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <TextField
                  id="name"
                  label="jméno"
                  name="name"
                  autoComplete="name"
                  sx={{ marginBottom: 2 }}
                  required
                  fullWidth
                  onChange={handleChange}
                />
                <TextField
                  id="phonenumber"
                  label="Telefon"
                  type="text"
                  name="phonenumber" 
                 onChange={handleChange}
                  inputProps={{ maxLength: 9 }}
                  sx={{ marginBottom: 2 }}
                  required
                  fullWidth
                />
                <TextField
                  label="Adresa"
                  sx={{ marginBottom: 2 }}
                  required
                  fullWidth
                  id="location"
                  name="location"
                  autoComplete="location"
                  onChange={handleChange}
                />

                <FormControl required fullWidth>
                  <InputLabel htmlFor="outlined-adornment-amount">
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
                    inputProps={{
                      inputMode: "numeric",
                      pattern: "[0-9]*",
                      maxLength: 9,
                    }}
                  />
                </FormControl>

                <input
                  ref={imgRef} type="file" 
                  name="photo" 
                  id="photo"   
                  accept="image/*"
                  onChange={handleFileChange} // Ensure this is correctly assigned
                />
                {error && <Typography color="error">{error}</Typography>}
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
                  style={{ maxWidth: "100%", maxHeight: "50vh" }}
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
                  onChange={handleChange}
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
              onChange={handleChange}
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
    </>
  );}
