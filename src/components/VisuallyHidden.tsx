interface VisuallyHidden {
  children?: React.ReactNode;
}

const VisuallyHidden = ({ children }: VisuallyHidden) => {
  return <span className="sr-only">{children}</span>;
};

export default VisuallyHidden;
