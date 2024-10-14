import React from "react";
import "./Button.css"; // Assuming you have CSS for the buttons

// Define allowed variants and sizes (JavaScript version, no TypeScript types)
const VARIANTS = ["primary", "secondary", "outline"];
const SIZES = ["default", "small", "large", "icon"];

// Utility function for generating class names based on variants and sizes
const buttonVariants = ({
  variant = "primary",
  size = "default",
  className = "",
}) => {
  const classes = ["button"];

  if (variant) classes.push(`button-${variant}`);
  if (size !== "default") classes.push(`button-${size}`);
  if (className) classes.push(className);

  return classes.join(" ");
};

// Button Component
 const Button = React.forwardRef(
  (
    { variant = "primary", size = "default", className, children, ...props },
    ref
  ) => {
    const classes = buttonVariants({ variant, size, className });
    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

// IconButton Component
 const IconButton = React.forwardRef(
  ({ icon: Icon, variant = "primary", size = "icon", ...props }, ref) => {
    const classes = buttonVariants({ variant, size });
    return (
      <button className={classes} ref={ref} {...props}>
        <Icon />
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

// LoadingButton Component
 const LoadingButton = React.forwardRef(
  (
    {
      loading,
      children,
      variant = "primary",
      size = "default",
      className,
      ...props
    },
    ref
  ) => {
    const classes = buttonVariants({ variant, size, className });
    return (
      <button className={classes} ref={ref} disabled={loading} {...props}>
        {loading && <span className="loader" />}
        {children}
      </button>
    );
  }
);

LoadingButton.displayName = "LoadingButton";

 // Export all components at once
export { Button, IconButton, LoadingButton };