export const ReliefCard = ({
  img,
  hoverImg,
  title = "Relief card image",
  href,
  width = 380,
  height = 400,
  className = "",
  onClick, // <-- AJOUT ICI
}) => {
  const CardWrapper = href ? "a" : "div";

  const wrapperStyle = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  };

  return (
    <CardWrapper
      {...(href ? { href } : {})}
      onClick={onClick} // <-- AJOUT ICI
      className={`relative inline-block cursor-pointer select-none ${className}`}
      style={wrapperStyle}
    >
      {/* shadow */}
      <div
        aria-hidden
        className="bg-transparent pointer-events-none absolute inset-0 translate-x-[15px] translate-y-[15px] rounded-xl border-2 border-black"
      />

      {/* carte principale */}
      <div className="relative z-10 h-full w-full rounded-xl border-2 border-black bg-white p-4 flex flex-col">
        {/* cadre image */}
        <div className="group relative flex-1 w-full rounded-xl border-2 border-black overflow-hidden bg-white">
          {/* image par défaut */}
          <img
            src={img}
            alt={title}
            className="absolute inset-0 h-full w-full object-contain object-left-top transition-opacity duration-250 ease-linear opacity-100 group-hover:opacity-0"
            draggable={false}
          />

          {/* image hover */}
          {hoverImg && (
            <img
              src={hoverImg}
              alt={title}
              className="absolute inset-0 h-full w-full object-contain object-left-top transition-opacity duration-250 ease-linear opacity-0 group-hover:opacity-100"
              draggable={false}
            />
          )}
        </div>

        {/* titre */}
        {title && (
          <div className="flex justify-between pl-1 gap-8 mt-3 text-center">
            <h3 className="text-md font-extrabold uppercase">{title}</h3>
          </div>
        )}
      </div>
    </CardWrapper>
  );
};
