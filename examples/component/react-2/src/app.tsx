import { useMemo } from "react";
import BetterButton from "./better-button.tsx";
import Container from "./container.tsx";

export default function App() {
  const isDisabled = useMemo(() => Math.random() > 0.5, []);

  const onClick = () => {
    if (isDisabled) {
      alert("You are not lucky enough to click me.");
      return;
    }

    console.log("You clicked me!");
  };

  return (
    <>
      <Container
        heading="Label"
        info="If you are lucky you can click me 2 times and something will happen. If you are not you are informed about it."
      >
        <BetterButton
          onClick={onClick}
          colorScheme={isDisabled ? "pink" : undefined}
        >
          Click me!
        </BetterButton>
      </Container>
    </>
  );
}
