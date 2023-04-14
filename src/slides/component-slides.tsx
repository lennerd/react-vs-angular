import { Heading, Slide, SlideLayout } from "spectacle";
import StackBlitz from "../components/stack-blitz.tsx";

export default function ComponentSlides() {
  return (
    <>
      <SlideLayout.Center>
        <Heading>React- vs. Angular-Komponenten</Heading>
      </SlideLayout.Center>
      <Slide>
        <StackBlitz
          id="github/lennerd/react-vs-angular/tree/main/examples/component/react-0"
          file="src/app.tsx"
        />
      </Slide>
      <Slide>
        <StackBlitz
          id="github/lennerd/react-vs-angular/tree/main/examples/component/react-1"
          file="src/app.tsx"
        />
      </Slide>
      <Slide>
        <StackBlitz
          id="github/lennerd/react-vs-angular/tree/main/examples/component/angular-0"
          file="src/app/app.component.ts"
        />
      </Slide>
      <Slide>
        <StackBlitz
          id="github/lennerd/react-vs-angular/tree/main/examples/component/angular-1"
          file="src/app/app.component.ts"
        />
      </Slide>
      <Slide>
        <StackBlitz
          id="github/lennerd/react-vs-angular/tree/main/examples/component/react-2"
          file="src/app.tsx"
        />
      </Slide>
      <Slide>
        <StackBlitz
          id="github/lennerd/react-vs-angular/tree/main/examples/component/angular-2"
          file="src/app/app.component.ts"
        />
      </Slide>
      <Slide>
        <StackBlitz
          id="github/lennerd/react-vs-angular/tree/main/examples/component/react-3"
          file="src/app.tsx"
        />
      </Slide>
      <Slide>
        <StackBlitz
          id="github/lennerd/react-vs-angular/tree/main/examples/component/angular-3"
          file="src/app/app.component.ts"
        />
      </Slide>
    </>
  );
}
