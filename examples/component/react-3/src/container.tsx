import { Heading, Stack } from "@chakra-ui/react";
import React from "react";

interface ContainerProps {
  heading: React.ReactNode;
  children: React.ReactNode;
  info?: React.ReactNode;
}

export default function Container({ children, heading, info }: ContainerProps) {
  return (
    <Stack alignItems="center">
      <Heading>{heading}</Heading>
      {children}
      {info != null && <div>{info}</div>}
    </Stack>
  );
}
