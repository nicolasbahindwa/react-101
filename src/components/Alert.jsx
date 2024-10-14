import React from "react";
import "./Alert.css";

export const Alert = ({ children, variant = "default" }) => {
  return <div className={`alert alert-${variant}`}>{children}</div>;
};

export const AlertTitle = ({ children }) => (
  <h3 className="alert-title">{children}</h3>
);

export const AlertDescription = ({ children }) => (
  <div className="alert-description">{children}</div>
);
