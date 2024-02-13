'use client';

import Container from '@mui/material/Container';

import { constants } from '@/app/styles/theme';

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <Container
      maxWidth='lg'
      component='main'
      sx={{
        mt: constants.header.height,
        minHeight: `calc(100vh - ${constants.header.height} - ${constants.footer.height})`,
      }}
    >
      {children}
    </Container>
  );
};

export default MainContainer;
