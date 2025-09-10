export function ReliefTitle({
  children,
  width = 320,
  height = "auto",
  className = "",
}) {
  const wrapperStyle = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  };

  return (
    <span
      className={`relative inline-block select-none ${className}`}
      style={wrapperStyle}
    >
      {/* shadow */}
      <span className="pointer-events-none absolute inset-0 translate-x-[6px] translate-y-[6px] rounded-2xl border-3 border-black bg-transparent" />

      {/* carte principale */}
      <div className="relative z-10 h-full w-full rounded-2xl border-3 border-black bg-white p-4 flex items-center justify-center text-center">
        {children}
      </div>
    </span>
  );
}
