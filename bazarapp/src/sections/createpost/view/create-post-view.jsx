import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function BlogView() {
  const [amount, setAmount] = useState('');
  const [phone, setPhone] = useState('');
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState('');
  const [error, setError] = useState('');

  const handleAmountChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && /^\d*$/.test(value)) {
      setAmount(value);
    }
  };

  const handlePhoneChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && /^\d*$/.test(value) && value.length <= 9) {
      setPhone(value);
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const fileType = selectedFile.type;
      if (!fileType.startsWith('image/')) {
        setError('Please upload a valid image file');
        setFile(null);
        setFilePreview('');
      } else {
        setError('');
        setFile(selectedFile);
        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePreview(reader.result);
        };
        reader.readAsDataURL(selectedFile);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Zde můžete přidat logiku pro odeslání formuláře
    console.log('Form submitted');
    console.log('Selected file:', file);
  };

  return (
    <>
      <Container fixed>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid xs={12} md={8}>
              <Box sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <TextField label="Jméno" sx={{ marginBottom: 2 }} required fullWidth />
                <TextField 
                  label="Telefon" 
                  type="text" 
                  value={phone}
                  onChange={handlePhoneChange}
                  inputProps={{ maxLength: 9 }}
                  sx={{ marginBottom: 2 }} 
                  required 
                  fullWidth 
                />
                <TextField label="Adresa" sx={{ marginBottom: 2 }} required fullWidth />

                <FormControl required fullWidth>
                  <InputLabel htmlFor="outlined-adornment-amount">Cena</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start">Kč</InputAdornment>}
                    label="Cena"
                    value={amount}
                    onChange={handleAmountChange}
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                  />
                </FormControl>

                <TextField 
                  label="Přiložit soubor"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  sx={{marginTop: 5}}
                />
                {error && <Typography color="error">{error}</Typography>}
              </Box>

              <Box sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <TextField label="Popis" fullWidth />
              </Box>
              
            </Grid>
            <Grid xs={12} md={4} display="flex" justifyContent="center" alignItems="center" sx={{p: 2}}>
              {filePreview ? (
                <img src={filePreview} alt="Uploaded Preview" style={{ maxWidth: '100%', maxHeight: '50vh'}} />
              ) : (
                <Box height={"50vh"}
                width={"100vh"}
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ border: '2px solid grey' }}>
                  <div>Obrázek</div>
                </Box>
              )}
            </Grid>
          </Grid>
          <Button variant='contained' type='submit' size='large' fullWidth>
                Vytvořit inzerát
          </Button>
        </form>
      </Container>
    </>
  );
}