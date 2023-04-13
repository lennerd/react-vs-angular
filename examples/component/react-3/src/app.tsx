import { useMemo } from "react";
import Container from "./container.tsx";
import DisableReason from "./disable-reason.tsx";
import JSConfetti from "js-confetti";
import { useToast } from "@chakra-ui/react";

export const jsConfetti = new JSConfetti();

export default function App() {
  const isDisabled = useMemo(() => Math.random() > 0.5, []);
  const toast = useToast();

  return (
    <>
      <Container
        heading="Great Button"
        info={
          <>
            If you are <em> lucky </em> you can click me
            <strong> 2 times </strong> and something will happen. If you are not
            you are informed about it.
          </>
        }
      >
        <DisableReason
          isDisabled={isDisabled}
          onClick={() =>
            toast({
              title: "You clicked me!",
              status: "success",
              position: "top-right",
            })
          }
        >
          Click me!
        </DisableReason>
      </Container>
    </>
  );
}
