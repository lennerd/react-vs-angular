import { useMemo } from "react";
import { Heading, Stack, useToast } from "@chakra-ui/react";
import BetterButton from "./better-button.tsx";
import JSConfetti from "js-confetti";

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
      <Stack alignItems="center">
        <Heading>Great Button</Heading>
        <BetterButton
          onClick={onClick}
          colorScheme={isDisabled ? "pink" : undefined}
        >
          Click me!
        </BetterButton>
        <div>
          This is a <strong> Button </strong> that is sometimes working and
          sometimes not, it should tell you why.
        </div>
      </Stack>
    </>
  );
}
