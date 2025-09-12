import React, { useState } from "react";

export function Toggle({ onLabel = "ON", offLabel = "OFF", width = 200, onToggle }) {
  const [enabled, setEnabled] = useState(false);

  const styleVars = {
    "--toggle-w": typeof width === "number" ? `${width}px` : width,
    "--knob": "2rem",
  };

  const handleClick = () => {
    const newValue = !enabled;
    setEnabled(newValue);
    if (onToggle) onToggle(newValue);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      style={styleVars}
      className={`
        relative inline-flex h-11 w-[var(--toggle-w)] items-center justify-center
        rounded-full overflow-hidden transition-colors duration-300 ease-in-out
        text-white font-semibold border-2 border-black
        ${enabled ? "bg-secondary" : "bg-primary"}
        cursor-pointer select-none
      `}
    >
      <span className="relative z-10 text-sm">
        {enabled ? onLabel : offLabel}
      </span>

      <span
        className={`
          absolute left-1 top-1 h-8 w-8 rounded-full bg-white shadow-md
          transition-transform duration-300 ease-in-out
          ${enabled
            ? "translate-x-[calc(var(--toggle-w)-var(--knob)-0.5rem-5px)]"
            : "translate-x-0"}
        `}
      />
    </button>
  );
}
