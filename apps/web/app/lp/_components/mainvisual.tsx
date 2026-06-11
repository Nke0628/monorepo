"use client";

import { Box, Link, List, Text } from "@chakra-ui/react";

const SLIDE_GRADIENTS = [
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
];

export function MainVisual() {
  return (
    <Box position="relative" h={{ base: "490px", md: "720px" }} mb={{ base: "80px", md: "120px" }}>
      {/* テキスト */}
      <Box
        position="absolute"
        top={{ base: "310px", md: "280px" }}
        left={{ base: "16px", md: "10%" }}
        w={{ base: "calc(100% - 32px)", md: "auto" }}
        zIndex={10}
      >
        <Text
          fontSize={{ base: "1.75rem", md: "2.875rem" }}
          fontWeight="bold"
          mb={{ base: "10px", md: "30px" }}
          textShadow="0 4px 6px #fff"
        >
          話して学ぼう！<br />BBB英会話スクール
        </Text>
        <Link
          className="lp-mv-btn"
          href="#"
          bg="#ff2a2a"
          borderBottom="6px solid #9a0413"
          borderRadius="10px"
          color="white"
          fontSize="1.5rem"
          display="block"
          py="15px"
          px="35px"
          textAlign="center"
          transition="0.3s"
          position="relative"
          w={{ base: "100%", md: "auto" }}
          _hover={{ opacity: 0.9, transform: "scale(1.05)" }}
        >
          無料体験はこちら
        </Link>
      </Box>

      {/* フェードスライド */}
      <List.Root p={0} m={0} listStyle="none">
        {SLIDE_GRADIENTS.map((gradient, i) => (
          <List.Item
            key={i}
            className="lp-fade-item"
            w={{ base: "100%", md: "75%" }}
            position="absolute"
            top={0}
            right={0}
            opacity={0}
          >
            <Box
              w="100%"
              h={{ base: "300px", md: "720px" }}
              style={{ background: gradient }}
            />
          </List.Item>
        ))}
      </List.Root>
    </Box>
  );
}
