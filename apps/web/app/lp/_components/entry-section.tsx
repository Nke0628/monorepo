"use client";

import { Box, Link, Text } from "@chakra-ui/react";

export function EntrySection() {
  return (
    <Box
      maxW="860px"
      mx="auto"
      mb={{ base: "80px", md: "120px" }}
      textAlign="center"
      px={{ base: "16px", md: 0 }}
    >
      <Text fontSize={{ base: "1.5rem", md: "2rem" }} fontWeight="bold" mb="5px">
        まずは無料で、BBBの英会話を試してみませんか？
      </Text>
      <Text fontSize={{ base: "1rem", md: "1.125rem" }} mb="40px">
        今なら初月のレッスンを特別価格で受講できる割引クーポンをプレゼント！
      </Text>
      <Link
        href="#"
        bg="#ff2a2a"
        borderRadius="40px"
        border="solid 3px #ff2a2a"
        color="white"
        fontSize={{ base: "1.5rem", md: "1.75rem" }}
        fontWeight="bold"
        display="block"
        py="15px"
        textAlign="center"
        transition="0.3s"
        _hover={{ bg: "white", border: "solid 3px #ff2a2a", color: "#ff2a2a" }}
      >
        無料体験に申し込む
      </Link>
    </Box>
  );
}
