import { ButtonProps, Button } from "@chakra-ui/react";
import React, { useRef } from "react";

interface BetterButtonProps extends ButtonProps {}

export default function BetterButton({ onClick, ...props }: BetterButtonProps) {
  const counter = useRef<number>(0);

  const onBetterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    counter.current = counter.current + 1;
    if (counter.current % 2 === 0) {
      alert("You clicked me twice!");
    } else {
      onClick?.(event);
    }
  };

  return <Button onClick={onBetterClick} {...props} />;
}
