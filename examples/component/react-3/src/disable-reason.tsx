import BetterButton, { BetterButtonProps } from "./better-button.tsx";
import React from "react";
import { useToast } from "@chakra-ui/react";

interface DisableReasonProps extends BetterButtonProps {}

export default function DisableReason({
  onClick,
  isDisabled,
  colorScheme,
  ...props
}: DisableReasonProps) {
  const toast = useToast();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isDisabled) {
      toast({
        title: "You are not lucky enough to click me.",
        status: "error",
      });
      return;
    }

    onClick?.(event);
  };

  return (
    <BetterButton
      onClick={handleClick}
      colorScheme={isDisabled ? "pink" : colorScheme}
      {...props}
    />
  );
}
