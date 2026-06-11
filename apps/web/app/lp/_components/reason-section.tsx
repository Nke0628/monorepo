"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { SectionTitle } from "./section-title";

export function ReasonSection() {
  return (
    <Box as="section" id="lp-reason" mb={{ base: "80px", md: "120px" }}>
      <SectionTitle>BBBが選ばれる理由</SectionTitle>
      <Box bg="#ff2a2a" py={{ base: "40px", md: "80px" }}>
        {/* スライド左 */}
        <Flex
          className="inview-slide-left"
          w={{ base: "calc(100% - 16px)", md: "50%" }}
          align="center"
          justify="center"
          bg="white"
          p="5%"
          opacity={0}
          borderTopRightRadius="20px"
          borderBottomRightRadius="20px"
          mb="40px"
        >
          <Box fontSize="3rem" h="60px" mr="30px" display="flex" alignItems="center">
            💻
          </Box>
          <Box>
            <Text
              as="span"
              display="block"
              color="#ff2a2a"
              fontSize={{ base: "1.5rem", md: "1.75rem" }}
              fontWeight="bold"
            >
              オンライン対応
            </Text>
            <Text as="span" display="block" fontSize="1.125rem">
              24時間いつでも受講できる！
            </Text>
          </Box>
        </Flex>

        {/* スライド右 */}
        <Flex
          className="inview-slide-right"
          w={{ base: "calc(100% - 16px)", md: "50%" }}
          align="center"
          justify="center"
          bg="white"
          p="5%"
          opacity={0}
          borderTopLeftRadius="20px"
          borderBottomLeftRadius="20px"
        >
          <Box fontSize="3rem" h="60px" mr="30px" display="flex" alignItems="center">
            👨‍🏫
          </Box>
          <Box>
            <Text
              as="span"
              display="block"
              color="#ff2a2a"
              fontSize={{ base: "1.5rem", md: "1.75rem" }}
              fontWeight="bold"
            >
              講師はネイティブ
            </Text>
            <Text as="span" display="block" fontSize="1.125rem">
              お気に入りの講師が自由に選べる！
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
