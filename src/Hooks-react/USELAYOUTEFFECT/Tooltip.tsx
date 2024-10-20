import React, { useState, useRef, useLayoutEffect } from "react";

interface TooltipProps {
  text: string;
  targetRef: React.RefObject<HTMLButtonElement>;
}

const Tooltip: React.FC<TooltipProps> = ({ text, targetRef }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (targetRef.current && tooltipRef.current) {
      const targetRect = targetRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      const top = targetRect.top - tooltipRect.height - 8; // 8px gap
      const left =
        targetRect.left + targetRect.width / 2 - tooltipRect.width / 2;

      // Set tooltip position based on button's position
      setPosition({ top, left });
    }
  }, [targetRef]);

  return (
    <div
      ref={tooltipRef}
      style={{
        position: "absolute",
        top: `${position.top}px`,
        left: `${position.left}px`,
        padding: "8px",
        backgroundColor: "black",
        color: "white",
        borderRadius: "4px",
        whiteSpace: "nowrap",
      }}
    >
      {text}
    </div>
  );
};

export default Tooltip;
