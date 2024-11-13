const Input = ({ onChange, placeholder, type, name, required, className, disabled, value, defaultValue }) => {
  const baseSyle =
    "disabled:opacity-50 bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 ";

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
      defaultValue={defaultValue}
    />
  );
};

export default Input;
