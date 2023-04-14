import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";
import { jsConfetti } from "./app.tsx";

export interface BetterButtonProps extends ButtonProps {}

export default function BetterButton({ onClick, ...props }: BetterButtonProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    jsConfetti.addConfetti();
    onClick?.(event);
  };

  return <Button onClick={handleClick} {...props} />;
}
