const variantStyles = {
  primary: "bg-primary hover:bg-primaryHover focus:ring-primary",
  secondary: "bg-black border border-primary focus:ring-primary text-primary",
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
    "text-gray-900 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center ";
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
