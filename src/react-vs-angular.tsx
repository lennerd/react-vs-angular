import {
  Deck,
  Grid,
  Heading,
  ListItem,
  Slide,
  SlideLayout,
  UnorderedList,
} from "spectacle";
import ComponentSlides from "./slides/component-slides.tsx";
import ServiceSlides from "./slides/service-slides.tsx";

export default function ReactVsAngular() {
  return (
    <Deck>
      <SlideLayout.Center>
        <Grid>
          <img
            style={{
              gridArea: "1 / 1",
              justifySelf: "center",
              filter: "saturate(10%)",
              position: "relative",
              zIndex: 1,
            }}
            src="https://media.giphy.com/media/FOG3rc0p9UGI0/giphy-downsized-large.gif"
          />
          <Heading
            style={{
              gridArea: "1 / 1",
              alignSelf: "center",
              padding: 0,
              margin: 0,
              position: "relative",
              zIndex: 2,
            }}
          >
            React vs. Angular
          </Heading>
        </Grid>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Intro</Heading>
      </SlideLayout.Center>

      <ComponentSlides />

      <ServiceSlides />

      <SlideLayout.Center>
        <Heading>Fazit: React vs. Angular</Heading>
        <UnorderedList>
          <ListItem>
            <strong>TypeScript verstehen</strong> vs{" "}
            <strong>Angular verstehen</strong>
          </ListItem>
          <ListItem>
            <strong>Eher funktional (Komposition)</strong> vs{" "}
            <strong>
              eher objektorientiert (DIP = “Dependency Injection Programming”)
            </strong>
          </ListItem>
          <ListItem>
            <strong>Explizit</strong> vs <strong>Implizit</strong>
          </ListItem>
        </UnorderedList>
      </SlideLayout.Center>

      <SlideLayout.Center backgroundColor="black">
        <Heading>Danke!</Heading>
      </SlideLayout.Center>
    </Deck>
  );
}
