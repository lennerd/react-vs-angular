import { Deck, Heading, ListItem, Slide, UnorderedList } from "spectacle";
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
        <UnorderedList>
          <ListItem>
            React: Komposition vs. Angular: Dependency Injection
          </ListItem>
          <ListItem>
            React: TypeScript verstehen vs. Angular: Angular verstehen
          </ListItem>
        </UnorderedList>
      </Slide>
    </Deck>
  );
}
