export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  loading = false,
  disabled = false,
  onClick,
  type = "button",
  className = "",
}) {
  const isIconOnly = !children && icon;

  let variantClass = "";
  if (variant === "primary")
    variantClass =
      "bg-secondary text-white hover:shadow-[0_0_8px_4px_rgba(0,0,0,0.25)] ";
  if (variant === "secondary")
    variantClass =
      "bg-transparent text-primary outline-2 outline-secondary outline-offset-[-2px] hover:text-white hover:bg-secondary hover:outline-primary hover:shadow-[0_4px_4px_0_rgba(0,0,0,0.3)]";
  //   if (variant === "danger")
  //     variantClass = "bg-red-600 text-white hover:bg-red-700";
  //   if (variant === "icon")
  //     variantClass = "bg-transparent text-gray-600 hover:text-gray-900";

  let sizeClass = "";
  //   if (size === "sm") sizeClass = "text-sm px-3 py-1.5";
  //   if (size === "md") sizeClass = "px-5 py-3";

  if (size === "lg") sizeClass = "px-5 py-3";

  const disabledClass =
    disabled || loading ? "opacity-50 cursor-not-allowed" : "";
  const iconOnlyClass = isIconOnly ? "p-2" : "";
  const gapClass = icon && children ? "gap-2" : "";

  const finalClass = `inline-flex items-center justify-center text-base font-semibold transition-all cursor-pointer duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${variantClass} ${sizeClass} ${disabledClass} ${iconOnlyClass} ${gapClass} ${className}`;

  return (
    <button
      className={finalClass}
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
    >
      {loading ? (
        <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
      ) : (
        <>
          {icon && iconPosition === "left" && <span>{icon}</span>}
          {children && <span>{children}</span>}
          {icon && iconPosition === "right" && <span>{icon}</span>}
        </>
      )}
    </button>
  );
}
