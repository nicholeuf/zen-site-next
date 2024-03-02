'use client';
import Typography from '@mui/material/Typography';
import { usePathname } from 'next/navigation';

import NextLink from '@/components/NextLink';
import PageContainer from '@/components/PageContainer';

const NotFound = () => {
  const pathname = usePathname();
  return (
    <PageContainer>
      <Typography variant="h1" gutterBottom>
        Not Found
      </Typography>
      <Typography>
        Could not find page <strong>{pathname}</strong>. Would you like to go to
        the&nbsp;
        <NextLink href="/">Home Page</NextLink>?
      </Typography>
    </PageContainer>
  );
};

export default NotFound;
