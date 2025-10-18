import Container, { ContainerProps } from '@mui/material/Container';

export interface PageContainerProps extends ContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  maxWidth = 'lg',
  ...props
}) => {
  return (
    <Container {...props} maxWidth={maxWidth}>
      {children}
    </Container>
  );
};

export default PageContainer;
