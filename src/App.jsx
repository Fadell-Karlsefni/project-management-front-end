import { ThemeProvider, CssBaseline, createTheme, Button } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
});

const Home = () => {
  return (
    <Button variant="contained">Hallo, ini tombol MUI</Button>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
};

export default App;
