import Container, { ContainerProps } from '@mui/material/Container';

interface PageContainerProps extends ContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  maxWidth = 'lg',
  ...props
}) => {
  return (
    <Container
      {...props}
      sx={{
        py: 2,
      }}
      maxWidth={maxWidth}
    >
      {children}
    </Container>
  );
};

export default PageContainer;
