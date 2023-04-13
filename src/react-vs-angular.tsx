import {
  Deck,
  Grid,
  Heading,
  ListItem,
  Slide,
  SlideLayout,
  Text,
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

        <Text textAlign="center">
          Erfahrungen aus BIS 2.0, SaubereLuft, TARS und BerlinalX
        </Text>

        <Text textAlign="center">Team arbeitet gerne mit React</Text>

        <Text textAlign="center">
          Hohe Geschwindigkeit durch React und UI-Library
        </Text>

        <Text textAlign="center">
          <strong>Wir lieben React und wollen am liebsten nicht zurück!</strong>
        </Text>
      </SlideLayout.Center>

      <SlideLayout.Center>
        <Heading>Aber warum?</Heading>
      </SlideLayout.Center>

      <SlideLayout.Center>
        <Heading>Achtung!</Heading>
        <Text textAlign="center">Keine Einführung in React oder Angular</Text>
      </SlideLayout.Center>

      <ComponentSlides />

      <ServiceSlides />

      <SlideLayout.Center>
        <Heading>Fazit:</Heading>

        <Text textAlign="center">
          <strong>TypeScript verstehen</strong> vs{" "}
          <strong>Angular verstehen</strong>
        </Text>

        <Text textAlign="center">
          <strong>Eher funktional (Komposition)</strong>
          <br />
          vs
          <br />
          <strong>
            eher objektorientiert (DIP = “Dependency Injection Programming”)
          </strong>
        </Text>

        <Text textAlign="center">
          <strong>Explizit</strong> vs <strong>Implizit</strong>
        </Text>
      </SlideLayout.Center>

      <SlideLayout.Center>
        <Heading>Überzeugt?</Heading>

        <Text textAlign="center">Wenn ja, warum?</Text>

        <Text textAlign="center">Wenn nein, warum nicht?</Text>
      </SlideLayout.Center>

      <SlideLayout.Center backgroundColor="black">
        <Heading>Danke!</Heading>
      </SlideLayout.Center>
    </Deck>
  );
}
