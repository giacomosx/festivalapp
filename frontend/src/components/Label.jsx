const Label = ({ children, className, htmlFor }) => {
  const baseStyle = "block mb-2 text-base font-medium ";
  return (
    <label htmlFor={htmlFor} className={baseStyle + className}>
      {children}
    </label>
  );
};

export default Label;
