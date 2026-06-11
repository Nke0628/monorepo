"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { SectionTitle } from "./section-title";

const ITEMS = [
  { ja: "レッスン内容", en: "LESSON" },
  { ja: "料金プラン", en: "PRICE" },
  { ja: "講師のご紹介", en: "TEACHER" },
  { ja: "BBBのQ&A", en: "Q&A" },
];

export function SummarySection() {
  return (
    <Box
      as="section"
      id="lp-summary"
      className="lp-fall-bg"
      backgroundImage="url(/lp/bg.gif)"
      backgroundRepeat="repeat"
      py="60px"
      mb={{ base: "80px", md: "120px" }}
    >
      <Box maxW="860px" mx="auto" px={{ base: "16px", md: 0 }}>
        <SectionTitle>スクールの概要</SectionTitle>
        <Flex flexWrap="wrap" justifyContent="space-between" gap={0}>
          {ITEMS.map((item, i) => (
            <Box
              key={i}
              w={{ base: "100%", md: "48%" }}
              bg="white"
              borderRadius="20px"
              p={{ base: "30px", md: "60px" }}
              mb={i < 2 ? "32px" : { base: i === 2 ? "32px" : 0, md: 0 }}
            >
              <Heading fontWeight="bold" lineHeight={1} textAlign="center">
                <Text as="span" display="block" fontSize={{ base: "1.5rem", md: "1.75rem" }} mb="15px">
                  {item.ja}
                </Text>
                <Text as="span" display="block" fontSize={{ base: "1rem", md: "1.125rem" }} mb="30px">
                  {item.en}
                </Text>
              </Heading>
              <Text>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
