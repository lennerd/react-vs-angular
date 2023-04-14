import { Heading, Slide, SlideLayout } from "spectacle";
import StackBlitz from "../components/stack-blitz.tsx";

export default function ServiceSlides() {
  return (
    <>
      <SlideLayout.Center>
        <Heading>React-Hook vs Angular-Service</Heading>
      </SlideLayout.Center>

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
    </>
  );
}
