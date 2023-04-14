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
            This is a <strong> Button </strong> that is sometimes working and
            sometimes not, it should tell you why.
          </>
        }
      >
        <DisableReason
          isDisabled={isDisabled}
          onClick={() =>
            toast({
              title: "You clicked me!",
              status: "success",
            })
          }
        >
          Click me!
        </DisableReason>
      </Container>
    </>
  );
}
