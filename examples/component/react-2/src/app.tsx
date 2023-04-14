import { useMemo } from "react";
import BetterButton from "./better-button.tsx";
import Container from "./container.tsx";
import JSConfetti from "js-confetti";
import { useToast } from "@chakra-ui/react";

export const jsConfetti = new JSConfetti();

export default function App() {
  const isDisabled = useMemo(() => Math.random() > 0.5, []);
  const toast = useToast();

  const onClick = () => {
    if (isDisabled) {
      toast({
        title: "You are not lucky enough to click me.",
        status: "error",
      });
      return;
    }

    toast({
      title: "You clicked me!",
      status: "success",
    });
  };

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
