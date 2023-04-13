import { useMemo } from "react";
import Container from "./container.tsx";
import DisableReason from "./disable-reason.tsx";

export default function App() {
  const isDisabled = useMemo(() => Math.random() > 0.5, []);

  return (
    <>
      <Container
        heading="Label"
        info="If you are lucky you can click me 2 times and something will happen. If you are not you are informed about it."
      >
        <DisableReason
          isDisabled={isDisabled}
          onClick={() => console.log("You clicked me!")}
        >
          Click me!
        </DisableReason>
      </Container>
    </>
  );
}
