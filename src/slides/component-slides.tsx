import { Heading, Slide, SlideLayout } from "spectacle";
import StackBlitz from "../components/stack-blitz.tsx";

export default function ComponentSlides() {
  return (
    <>
      <SlideLayout.Center>
        <Heading>React- vs. Angular-Komponenten</Heading>
      </SlideLayout.Center>
      <Slide>
        <StackBlitz id="spreading-1nzp7g" />
      </Slide>
      <Slide>
        <StackBlitz id="github/lennerd/react-vs-angular/tree/main/spreading/angular" />
      </Slide>
      <Slide>TODO Beispiel Props vs. @Input() (Typsicherheit)</Slide>
      <Slide>TODO Beispiel: TSX vs. Compiler (Typsicherheit)</Slide>
      <Slide>TODO Beispiel: Enum im Template verwenden</Slide>
      <Slide>TODO Beispiel: Controlled vs. Uncontrolled</Slide>
      <Slide>
        TODO Beispiel: Value-UI? Form-Control-Beispiel mit React.Nodes?
      </Slide>
    </>
  );
}
