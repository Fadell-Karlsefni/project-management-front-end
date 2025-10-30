import { colors, Paper, Typography } from '@mui/material';

import SideBarLayout from '@/components/Layout/SideBarLayout';

const DetailProject = () => {
  return (
    <SideBarLayout
      pageTitle="Detail Project"
      breadcrumbs={[
        {
          label: 'Projects',
          href: '/projects',
        },
        {
          label: 'Agency Software Engineering',
        },
      ]}
    >
      <Paper
        sx={{
          padding: 2,
          background: colors.lightBlue[100],
        }}
      >
        <Typography>Menampilkan Detail Project di sini</Typography>
      </Paper>
    </SideBarLayout>
  );
};

export default DetailProject;
