import { redirect } from 'react-router';

import session from '@/utils/session';

export default function sideBarLoader() {
  const isAuthenticated = session.isAuthenticated();

  if (!isAuthenticated) {
    return redirect('/login');
  }
  return null;
}
