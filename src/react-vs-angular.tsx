import { Deck, Slide, Heading } from "spectacle";
import CodeSandbox from "./components/code-sandbox.tsx";

export default function ReactVsAngular() {
  return (
    <Deck>
      <Slide>
        <Heading>React vs. Angular</Heading>
      </Slide>
      <Slide>
        <Heading>Intro</Heading>
      </Slide>

      <Slide>
        <Heading>React- vs. Angular-Komponenten</Heading>
      </Slide>
      <Slide>
        <CodeSandbox id="spreading-1nzp7g" />
      </Slide>
      <Slide>TODO Beispiel Props vs. @Input() (Typsicherheit)</Slide>
      <Slide>TODO Beispiel: TSX vs. Compiler (Typsicherheit)</Slide>
      <Slide>TODO Beispiel: Enum im Template verwenden</Slide>
      <Slide>TODO Beispiel: Controlled vs. Uncontrolled</Slide>
      <Slide>
        TODO Beispiel: Value-UI? Form-Control-Beispiel mit React.Nodes?
      </Slide>

      <Slide>
        <Heading>React-Hook vs. Angular-Service</Heading>
      </Slide>
      <Slide>TODO Beispiel, TODO Entwicklungsprozess</Slide>
      <Slide>TODO Beispiel: Change-Detection: setTimeout?</Slide>

      <Slide>
        <Heading>Fazit</Heading>
      </Slide>
    </Deck>
  );
}
