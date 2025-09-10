import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function ReliefButtonCollapse({
  href,
  width = 30,
  height = 30,
  className = "",
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
      <span className="pointer-events-none absolute inset-0 translate-x-[4px] translate-y-[4px] rounded-lg border-2 border-black bg-white" />
      <button
        href={href}
        className="
          relative z-10 flex h-full w-full items-center justify-center
          rounded-lg border-2 border-black
          text-black font-semibold
          hover:rotate-[90deg]
          transition-transform duration-200 ease-out
          hover:translate-x-[4px] hover:translate-y-[4px]
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black
        "
        style={linkStyle}
      >
        <FontAwesomeIcon icon={faArrowRight} />

      </button>
    </span>
  );
}
