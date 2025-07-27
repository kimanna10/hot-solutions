export default function Input({
  id,
  name,
  label,
  type = "text",
  required = false,
  autoComplete,
  ...props
}) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block font-medium mb-1 sr-only">
        {label}
      </label>

      <input
        type={type}
        id={id}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="w-full px-5 py-3 text-base bg-white text-grey-87 placeholder:font-medium placeholder-grey-light focus:outline-grey-light"
        {...props}
      />
    </div>
  );
}
