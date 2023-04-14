import { useMemo } from "react";
import { Button, Heading, Stack, useToast } from "@chakra-ui/react";
import JSConfetti from "js-confetti";

const jsConfetti = new JSConfetti();

export default function App() {
  const isDisabled = useMemo(() => Math.random() > 0.5, []);
  const toast = useToast();

  const onClick = () => {
    jsConfetti.addConfetti();

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
      <Stack alignItems="center">
        <Heading>Great Button</Heading>
        <Button onClick={onClick} colorScheme={isDisabled ? "pink" : undefined}>
          Click me!
        </Button>
        <div>
          This is a <strong> Button </strong> that is sometimes working and
          sometimes not, it should tell you why.
        </div>
      </Stack>
    </>
  );
}
