import { Heading, ListItem, Slide, UnorderedList } from "spectacle";

export default function ServiceSlides() {
  return (
    <>
      <Slide>
        <Heading>React-Hook vs. Angular-Service</Heading>
      </Slide>

      <Slide>TODO Stackblitz: React-Komponente mit Online-Status</Slide>
      <Slide>TODO Stackblitz: Angular-Komponente mit Online-Status</Slide>

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
