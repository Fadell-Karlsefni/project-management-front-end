import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import authLoader from './components/Layout/AuthLayout/authLayoutLoader';
import sidebarLoader from './components/Layout/SideBarLayout/sideBarLayoutLoader';
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
    loader: sidebarLoader,
    element: <Dashboard />,
  },
  {
    path: '/login',
    loader: authLoader,
    element: <Login />,
  },
  {
    path: '/projects',
    loader: sidebarLoader,
    element: <Project />,
  },
  {
    path: '/projects/:id',
    loader: sidebarLoader,
    element: <DetailProject />,
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
