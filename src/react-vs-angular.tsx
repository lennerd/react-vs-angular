import {
  Appear,
  Deck,
  Grid,
  Heading,
  Link,
  SlideLayout,
  Text,
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
          <div
            style={{
              gridArea: "1 / 1",
              alignSelf: "center",
              position: "relative",
              paddingTop: "2rem",
              zIndex: 2,
              textAlign: "center",
            }}
          >
            <Heading
              style={{
                padding: 0,
                margin: 0,
                marginBottom: "0rem",
              }}
            >
              React vs Angular
            </Heading>

            <Link
              fontSize="1.25rem"
              href="https://react-vs-angular-wps.vercel.app/"
            >
              react-vs-angular-wps.vercel.app
            </Link>
          </div>
        </Grid>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Intro</Heading>

        <Appear>
          <Text textAlign="center">
            Erfahrungen aus BIS 2.0, SaubereLuft, TARS,
            <br />
            Roads Web und BerlinalX
          </Text>
        </Appear>

        <Appear>
          <Text textAlign="center">Team arbeitet gerne mit React</Text>
        </Appear>

        <Appear>
          <Text textAlign="center">
            Hohe Geschwindigkeit durch React und UI-Library
          </Text>
        </Appear>

        <Appear>
          <Text textAlign="center">
            <strong>Wir lieben React und wollen nicht mehr zurück!</strong>
          </Text>
        </Appear>
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

        <Appear>
          <Text textAlign="center">
            <strong>TypeScript verstehen</strong> vs{" "}
            <strong>Angular verstehen</strong>
          </Text>
        </Appear>

        <Appear>
          <Text textAlign="center">
            <strong>Eher funktional (Komposition)</strong>
            <br />
            vs
            <br />
            <strong>
              Eher objektorientiert (DIP = “Dependency Injection Programming”)
            </strong>
          </Text>
        </Appear>

        <Appear>
          <Text textAlign="center">
            <strong>Explizit</strong> vs <strong>Implizit</strong>
          </Text>
        </Appear>
      </SlideLayout.Center>

      <SlideLayout.Center>
        <Heading>Überzeugt?</Heading>

        <Text textAlign="center">Wenn ja, warum?</Text>

        <Text textAlign="center">Wenn nein, warum nicht?</Text>
      </SlideLayout.Center>

      <SlideLayout.Center backgroundColor="black">
        <div style={{ textAlign: "center" }}>
          <Heading margin={0} padding={0}>
            Danke!
          </Heading>

          <Link
            fontSize="1.25rem"
            href="https://react-vs-angular-wps.vercel.app/"
          >
            react-vs-angular-wps.vercel.app
          </Link>
        </div>
      </SlideLayout.Center>
    </Deck>
  );
}
