import Box from '@mui/material/Box';

// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Box
    overflow="hidden"
      sx={{
        position: {lg: "absolute", sm: "none"},
        top: { lg: 80, sm: 0 }, // Výška horního navbaru
        left: { lg: 277, sm: 0 }, // Šířka levého navbaru
        width: {lg: "calc(100vw - 277px)", sm: "100vw"}, // Šířka viewportu mínus šířka levého navbaru
        height: {lg: 'calc(100vh - 80px)', sm: 'calc(100vh - 144px)', xs: "calc(100vh - 144px)"}, // Výška viewportu mínus výška horního navbaru
      }}
    >
      <img
        src="../../src/img/blackMarketer.png"
        alt=""
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </Box>
  );
}