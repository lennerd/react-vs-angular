import { Button, ButtonProps } from "@chakra-ui/react";
import * as React from "react";

interface BetterButtonProps extends ButtonProps {
  message: string;
}

export default function BetterButton({
  message,
  onClick,
  ...props
}: BetterButtonProps) {
  const counter = React.useRef<number>(0);

  const onBetterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    counter.current = counter.current + 1;
    if (counter.current % 10 === 0) {
      alert(message);
    } else {
      onClick?.(event);
    }
  };

  return <Button onClick={onBetterClick} {...props} />;
}
