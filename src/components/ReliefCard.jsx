export const ReliefCard = ({
  img,
  hoverImg,
  title = "Relief card image",
  href,
  width = 280,
  height = 500,
  className = "",
}) => {
  const CardWrapper = href ? "a" : "div";

  const wrapperStyle = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  };

  return (
    <CardWrapper
      {...(href ? { href } : {})}
      className={`group relative inline-block cursor-pointer select-none ${className}`}
      style={wrapperStyle}
    >
      {/* shadow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 translate-x-[6px] translate-y-[6px] rounded-xl border-3 border-black bg-white"
      />

      {/* carte principale */}
      <div className="relative z-10 h-full w-full rounded-xl border-3 border-black bg-white p-4 flex flex-col">
        {/* cadre image */}
        <div className="relative flex-1 w-full rounded-xl border-3 border-black overflow-hidden bg-gray-100">
          {/* image par défaut */}
          <img
            src={img}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover rounded-xl transition-opacity duration-250 group-hover:opacity-0"
            draggable={false}
          />
          {/* image hover */}
          {hoverImg && (
            <img
              src={hoverImg}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover rounded-xl transition-opacity duration-250 opacity-0 group-hover:opacity-100"
              draggable={false}
            />
          )}
        </div>

        {/* titre optionnel */}
        {title && (
          <div className="mt-3 text-center">
            <h3 className="text-sm font-semibold tracking-wide uppercase">{title}</h3>
          </div>
        )}
      </div>
    </CardWrapper>
  );
};