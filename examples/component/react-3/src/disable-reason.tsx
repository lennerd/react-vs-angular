import BetterButton, { BetterButtonProps } from "./better-button.tsx";
import React from "react";

interface DisableReasonProps extends BetterButtonProps {}

export default function DisableReason({
  onClick,
  isDisabled,
  colorScheme,
  ...props
}: DisableReasonProps) {
  const newOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isDisabled) {
      alert("You are not lucky enough to click me.");
      return;
    }
    onClick?.(event);
  };

  return (
    <BetterButton
      onClick={newOnClick}
      colorScheme={isDisabled ? "pink" : colorScheme}
      {...props}
    />
  );
}
