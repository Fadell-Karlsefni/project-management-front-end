import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from './components/pages/auth/login';
import Dashboard from './components/pages/dashboard';
import DetailProject from './components/pages/Projects/DetailProject';
import Project from './components/pages/Projects/project';

const theme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'projects',
        element: <Project />,
      },
      {
        path: 'projects/:id',
        element: <DetailProject />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <RouterProvider router={router} />
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
