import Container, { ContainerProps } from '@mui/material/Container';

export interface PageContainerProps extends ContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  maxWidth = 'lg',
  sx,
  ...props
}) => {
  return (
    <Container
      {...props}
      sx={{
        ...sx,
        py: 2,
      }}
      maxWidth={maxWidth}
    >
      {children}
    </Container>
  );
};

export default PageContainer;
