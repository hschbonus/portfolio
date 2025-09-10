import { useEffect, useState } from "react";

export const LoadingText = ({
  onComplete,
  showBar = false,           // barre de progression optionnelle
  className = "",            // styles externes
  startDelay = 0,            // délai avant de commencer (ms)
  speed = 100,               // vitesse de frappe (ms par caractère)
  text = "",                 // texte à taper
}) => {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let index = 0;
    let typingTimer;
    const start = () => {
      typingTimer = setInterval(() => {
        setTyped(text.substring(0, index));
        index++;
        if (index > text.length) {
          clearInterval(typingTimer);
          if (onComplete) {
            const t = setTimeout(onComplete, 800);
            return () => clearTimeout(t);
          }
        }
      }, speed);
    };

    const startTimeout = setTimeout(start, startDelay);
    return () => {
      clearInterval(typingTimer);
      clearTimeout(startTimeout);
    };
  }, [onComplete, speed, startDelay, text]);

  return (
    <div className={`w-full flex flex-col items-start ${className}`}>
      <h1 className="mb-3 text-4xl md:text-5xl font-mono font-bold text-black text-left">
        {typed}
        <span className="animate-blink ml-1">|</span>
      </h1>

      {showBar && (
        <div className="w-[200px] h-[2px] bg-gray-200 rounded relative overflow-hidden">
          <div className="w-[40%] h-full bg-orange-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
        </div>
      )}
    </div>
  );
};
