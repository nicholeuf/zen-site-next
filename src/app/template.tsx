'use client';
import RouterTransition from '@/components/RouterTransition';

interface TemplateProps {
  children: React.ReactNode;
}

const Template: React.FC<TemplateProps> = ({ children }) => {
  return <RouterTransition>{children}</RouterTransition>;
};

export default Template;
