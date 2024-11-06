const Input = ({ onChange, placeholder, type, name, required, className, disabled, value }) => {
  const baseSyle =
    "bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 ";

  return (
    <input
      onChange={onChange}
      name={name}
      type={type}
      className={baseSyle + className}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      value={value}
    />
  );
};

export default Input;
