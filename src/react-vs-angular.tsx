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
        <Heading>Fazit: React vs. Angular</Heading>
        <UnorderedList>
          <ListItem>
            <strong>TypeScript verstehen</strong> vs.{" "}
            <strong>Angular verstehen</strong>
          </ListItem>
          <ListItem>
            <strong>Eher funktional (Komposition)</strong> vs.{" "}
            <strong>
              eher objektorientiert (DIP = “Dependency Injection Programming”)
            </strong>
          </ListItem>
        </UnorderedList>
      </Slide>
    </Deck>
  );
}
