"use client";

import { Heading, type HeadingProps } from "@chakra-ui/react";

export function SectionTitle({ children, ...props }: HeadingProps) {
  return (
    <Heading
      as="h2"
      className="lp-section-title"
      fontSize={{ base: "1.75rem", md: "2.25rem" }}
      mb={{ base: "60px", md: "100px" }}
      textAlign="center"
      {...props}
    >
      {children}
    </Heading>
  );
}
