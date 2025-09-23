import {
  Box,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';

import Table from './components/ui/table';

const theme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Box>
        <Table
          columns={[
            {
              id: 'tugas',
              label: 'tugas',
            },
            {
              id: 'status',
              label: 'status',
            },
          ]}
          data={[
            {
              id: 1,
              tugas: 'tugas 1',
              status: 'baru',
            },
            {
              id: 2,
              tugas: 'tugas 2',
              status: 'sedang di kerjakan',
            },
            {
              id: 3,
              tugas: 'tugas 3',
              status: 'selesai',
            },
          ]}
        />
      </Box>
    ),
  },
  {
    path: '/login',
    element: (
      <Box>
        <Typography variant="h1">Login</Typography>
        <Link to="/">Kembali ke Home</Link>
      </Box>
    ),
  },
]);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
