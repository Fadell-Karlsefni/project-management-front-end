import { Settings } from '@mui/icons-material';
import { Stack } from '@mui/material';

import Dropdown from '../../../ui/Dropdown';

const DetailProject = () => {
  return (
    <Stack
      sx={{
        height: '100vh',
        width: '100%',
      }}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Dropdown
        icon={<Settings />}
        options={[
          {
            label: 'Tutup Proyek Ini',
            onClick: () => {
              console.log('Handle Close Project');
            },
          },
          {
            label: 'Ubah Deadline Proyek',
            onClick: () => {
              console.log('Handle Update Deadline Project');
            },
          },
        ]}
      />
    </Stack>
  );
};
export default DetailProject;
