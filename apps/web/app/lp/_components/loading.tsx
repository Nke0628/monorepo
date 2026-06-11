"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import "./loading.css";

const LETTERS = ["L", "o", "a", "d", "i", "n", "g"];

export function Loading() {
  return (
    <Box h="100vh" w="100vw" bg="#222" position="relative" overflow="hidden">
      {/* 外側リング */}
      <Box
        className="loading-outer"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-51%, -50%)"
        w="240px"
        h="240px"
        borderWidth="5px"
        borderColor="#701B1B"
        borderRadius="120px"
        boxSizing="border-box"
      >
        {/* 中間リング */}
        <Box
          className="loading-middle"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          w="200px"
          h="200px"
          color="#888"
          textAlign="center"
          borderWidth="5px"
          borderColor="#803030"
          borderRadius="100px"
          zIndex={20}
          textTransform="uppercase"
        >
          {/* 内側リング */}
          <Flex
            className="loading-inner"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            w="140px"
            h="140px"
            borderWidth="5px"
            borderColor="#A04949"
            borderRadius="70px"
            zIndex={20}
            justify="center"
            align="center"
          >
            {LETTERS.map((letter, i) => (
              <Text
                as="span"
                key={i}
                fontSize="sm"
                fontWeight="bold"
                mx="0.5"
                color="#B36D6D"
                zIndex={100}
                style={{
                  animation: `loading-blur-text 1.5s ${i / 5}s infinite alternate`,
                }}
              >
                {letter}
              </Text>
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
