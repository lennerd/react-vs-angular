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
        position: "top-right",
      });
      return;
    }

    toast({
      title: "You clicked me!",
      status: "success",
      position: "top-right",
    });
  };

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
