export function ReliefButtonSm({
  width = 30,
  height = 30,
  className = "",
  children,
  type = "button",
  onClick,
  "aria-label": ariaLabel,
}) {
  const wrapperStyle = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  };

  return (
    <span className={`relative inline-block select-none ${className}`} style={wrapperStyle}>
      {/* shadow */}
      <span className="pointer-events-none absolute inset-0 translate-x-[4px] translate-y-[4px] rounded-lg border-2 border-black bg-white" />
      {/* bouton */}
      <button
        type={type}
        onClick={onClick}
        aria-label={ariaLabel}
        className="
          relative z-10 flex h-full w-full items-center justify-center
          rounded-lg border-2 border-black
          text-black font-semibold
          transition-transform duration-200 ease-out
          hover:translate-x-[4px] hover:translate-y-[4px]
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black
        "
        style={{ background: "var(--primary-color)" }}
      >
        {children}
      </button>
    </span>
  );
}
