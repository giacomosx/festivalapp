const variantStyles = {
  primary: "bg-primary hover:bg-primary-hover focus:ring-primary text-gray-900",
  secondary: "bg-black focus:ring-primary text-gray-300 border border-gray-500 hover:bg-primary hover:text-black hover:border-transparent",
  danger: "bg-red-500 text-white focus:ring-red-500 hover:bg-white hover:text-red-500",
};

const Button = ({
  children,
  type,
  className = "",
  onClick,
  variant = "primary",
  disabled,
}) => {
  const baseStye =
    "focus:ring-1 focus:outline-none rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center transition-all duration-200";
  const variantClasses = variantStyles[variant] || variantStyles["primary"];

  return (
    <button
      type={type}
      className={`${baseStye} ${variantClasses} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
