import { Heading, ListItem, Slide, UnorderedList } from "spectacle";
import StackBlitz from "../components/stack-blitz.tsx";

export default function ServiceSlides() {
  return (
    <>
      <Slide>
        <Heading>React-Hook vs. Angular-Service</Heading>
      </Slide>

      <Slide>
        <StackBlitz
          id="github/lennerd/react-vs-angular/tree/main/examples/service/angular-component"
          file="src/app/app.component.ts"
        />
      </Slide>
      <Slide>
        <StackBlitz
          id="github/lennerd/react-vs-angular/tree/main/examples/service/angular-service"
          file="src/app/app.component.ts"
        />
      </Slide>
      <Slide>
        <StackBlitz
          id="github/lennerd/react-vs-angular/tree/main/examples/service/react-component"
          file="src/app.tsx"
        />
      </Slide>
      <Slide>
        <StackBlitz
          id="github/lennerd/react-vs-angular/tree/main/examples/service/react-hook"
          file="src/app.tsx"
        />
      </Slide>

      <Slide>TODO Stackblitz: UI-Logik aus React-Komponente herausziehen</Slide>
      <Slide>
        TODO Stackblitz: UI-Logik aus Angular-Komponente herausziehen
      </Slide>

      <Slide>
        <Heading>Probleme</Heading>

        <UnorderedList>
          <ListItem>Einfaches Rauskopieren</ListItem>
          <ListItem>Einklinken in den Life-Cycle</ListItem>
          <ListItem>Change-Detection</ListItem>
        </UnorderedList>
      </Slide>
    </>
  );
}
