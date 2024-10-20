import React, { useState, useRef } from "react";
import Tooltip from "./Tooltip";

const ButtonWithTooltip: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      style={{ position: "relative", marginTop: "100px", textAlign: "center" }}
    >
      <button
        ref={buttonRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          background: 'red'
        }}
      >
        Hover me
      </button>

      {isHovered && <Tooltip text="This is a tooltip!" targetRef={buttonRef} />}
    </div>
  );
};

export default ButtonWithTooltip;
