import { Deck, Heading, Slide } from "spectacle";
import ComponentSlides from "./slides/component-slides.tsx";
import ServiceSlides from "./slides/service-slides.tsx";

export default function ReactVsAngular() {
  return (
    <Deck>
      <Slide>
        <Heading>React vs. Angular</Heading>
      </Slide>
      <Slide>
        <Heading>Intro</Heading>
      </Slide>

      <ComponentSlides />

      <ServiceSlides />

      <Slide>
        <Heading>Fazit</Heading>
        <Slide>
          React: TypeScript verwenden vs. Angular: Angular verwenden
        </Slide>
        <Slide>
          React: TypeScript verstehen vs. Angular: Angular verstehen
        </Slide>
      </Slide>
    </Deck>
  );
}
