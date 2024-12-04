const variantStyles = {
    primary: "bg-primary hover:bg-primary-hover focus:ring-primary text-gray-900",
    secondary: "bg-black focus:ring-primary text-gray-300 border border-gray-500 hover:bg-primary hover:text-black hover:border-transparent",
    danger: "bg-red-500 text-white focus:ring-red-500 hover:bg-white hover:text-red-500",
};

const sizeStyles = {
    'xs': 'text-sm px-2',
    'sm': 'text-sm px-4',
    'md': 'text-base px-4',
}

const Button = ({
                    children,
                    type,
                    className = "",
                    onClick,
                    variant = "primary",
                    disabled,
                    size
                }) => {
    const baseStyle = "focus:ring-1 focus:outline-none rounded-lg sm:w-auto py-2.5 text-center transition-all duration-200";
    const variantClasses = variantStyles[variant] || variantStyles["primary"];
    const sizeClasses = sizeStyles[size] || sizeStyles["xs"];

    return (
        <button
            type={type}
            className={`${baseStyle} ${variantClasses} ${sizeClasses} ${className} `}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
