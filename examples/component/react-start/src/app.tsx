import { useMemo, useRef } from "react";
import { Button, Heading, Stack } from "@chakra-ui/react";

export default function App() {
  const counter = useRef<number>(0);
  const isDisabled = useMemo(() => Math.random() > 0.5, []);

  const onClick = () => {
    if (isDisabled) {
      alert("You are not lucky enough to click me.");
      return;
    }

    counter.current = counter.current + 1;
    if (counter.current % 2 === 0) {
      alert("You clicked me twice!");
    } else {
      console.log("You clicked me!");
    }
  };

  return (
    <>
      <Stack alignItems="center">
        <Heading>Label</Heading>
        <Button onClick={onClick} colorScheme={isDisabled ? "pink" : undefined}>
          Click me!
        </Button>
        <div>
          If you are lucky you can click me 2 times and something will happen.
          If you are not you are informed about it.
        </div>
      </Stack>
    </>
  );
}
