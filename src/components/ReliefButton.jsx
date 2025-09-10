export function ReliefButton({
  href,
  width = 280,
  height = 48,
  className = "",
  children,
}) {
  const wrapperStyle = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  };

  const linkStyle = {
    background: "var(--primary-color)",
  };

  return (
    <span className={`relative inline-block select-none ${className}`} style={wrapperStyle}>
      <span className="pointer-events-none absolute inset-0 translate-x-[6px] translate-y-[6px] rounded-xl border-3 border-black bg-white" />
      <a
        href={href}
        className="
          relative z-10 flex h-full w-full items-center justify-center
          rounded-xl border-3 border-black
          text-black font-semibold
          transition-transform duration-200 ease-out
          hover:translate-x-[6px] hover:translate-y-[6px]
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black
        "
        style={linkStyle}
      >
        {children}
      </a>
    </span>
  );
}
