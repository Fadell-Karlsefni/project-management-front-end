import { colors, Paper, Typography } from '@mui/material';

import SideBarLayout from '@/components/Layout/SideBarLayout';

const Project = () => {
  return (
    <SideBarLayout
      pageTitle="Daftar Proyek"
      breadcrumbs={[{ label: 'Projects' }]}
    >
      <Paper
        sx={{
          padding: 2,
          background: colors.lightBlue[100],
        }}
      >
        <Typography>Menampilkan daftar proyek di sini.</Typography>
      </Paper>
    </SideBarLayout>
  );
};

export default Project;
