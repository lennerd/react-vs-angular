import { Deck, Slide, Heading } from "spectacle";
import CodeSandbox from "./components/code-sandbox.tsx";

export default function ReactVsAngular() {
  return (
    <Deck>
      <Slide>
        <Heading>React vs. Angular</Heading>
      </Slide>
      <Slide>
        <CodeSandbox id="spreading-1nzp7g" />
      </Slide>
    </Deck>
  );
}
