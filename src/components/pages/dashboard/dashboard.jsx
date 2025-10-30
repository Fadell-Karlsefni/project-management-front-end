import { colors, Paper, Typography } from '@mui/material';

import SideBarLayout from '@/components/Layout/SideBarLayout';

const Dashboard = () => {
  return (
    <SideBarLayout pageTitle="Dashboard">
      <Paper
        sx={{
          padding: 2,
          background: colors.lightBlue[100],
        }}
      >
        <Typography>Menamilkan Dashboard Di sini</Typography>
      </Paper>
    </SideBarLayout>
  );
};

export default Dashboard;
