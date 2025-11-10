import { Button, Paper, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import AuthLayout from '@/components/Layout/AuthLayout';
import TextField from '@/components/ui/Forms/TextField';
import session from '@/utils/session';
import { useState } from 'react';
import services from '@/services';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm();

  const onSubmit = async (fromValues) => {
    setLoading(true);
    try {
      const response = await services.auth.login(fromValues);
      session.setSession(response.data.access_token) // response.data
      navigate('/');
    } catch (error) {
      console.error("Login Gagal", error);
    } finally {
      setLoading(false)
    }
  };

  return (
    <AuthLayout>
      <Paper
        sx={{
          padding: 2,
          width: 500,
        }}
      >
        <Typography
          variant="h5"
          component={'h1'}
          align="center"
          marginBottom={2}
        >
          Masuk
        </Typography>
        <Stack
          flexDirection={'column'}
          gap={1}
          component={'form'}
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField label={'Email'} control={control} name={'email'} />
          <TextField label={'Password'} control={control} name={'password'} />
          <Button type="submit" variant="contained" fullWidth>
            Masuk Ke Akun Anda
          </Button>
          <Button
            type="button"
            variant="text"
            onClick={() => navigate('/signup')}
            fullWidth
          >
            Daftar Baru
          </Button>
        </Stack>
      </Paper>
    </AuthLayout>
  );
};

export default Login;
