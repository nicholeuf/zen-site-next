import Container, { type ContainerProps } from '@mui/material/Container';

export interface PageContainerProps extends ContainerProps {
  children: React.ReactNode;
  hasPadding?: boolean;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  maxWidth = 'lg',
  hasPadding = true,
  sx,
  ...props
}) => {
  return (
    <Container
      {...props}
      sx={{
        ...sx,
        ...(hasPadding && { py: 2 }),
      }}
      maxWidth={maxWidth}
    >
      {children}
    </Container>
  );
};

export default PageContainer;
