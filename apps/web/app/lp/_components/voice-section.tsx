"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { SectionTitle } from "./section-title";

type VoiceItemProps = {
  direction: "left" | "right";
  avatar: string;
  name: string;
  role: string;
  comment: string;
  isLast?: boolean;
};

function VoiceItem({
  direction,
  avatar,
  name,
  role,
  comment,
  isLast,
}: VoiceItemProps) {
  const isLeft = direction === "left";

  const student = (
    <Box textAlign="center" flexShrink={0}>
      <Flex
        w="120px"
        h="120px"
        bg="#ccc"
        borderRadius="50%"
        mb="10px"
        align="center"
        justify="center"
        fontSize="3rem"
      >
        {avatar}
      </Flex>
      <Text fontSize="0.75rem" textAlign="center">
        {name}
        <br />
        {role}
      </Text>
    </Box>
  );

  const balloonClass = isLeft ? "lp-balloon-left" : "lp-balloon-right";

  const balloon = (
    <Box
      className={balloonClass}
      w={{ base: "100%", md: "60%" }}
      display="flex"
      justifyContent="center"
      bg="#e9f1fb"
      borderRadius="15px"
      p="20px"
      position="relative"
      ml={{ base: 0, md: isLeft ? "25px" : 0 }}
      mr={{ base: 0, md: isLeft ? 0 : "25px" }}
      mb={{ base: "30px", md: 0 }}
    >
      <Text>{comment}</Text>
    </Box>
  );

  return (
    <Flex
      className="inview-balloon"
      align={{ base: "center", md: "flex-start" }}
      opacity={0}
      mb={isLast ? 0 : { base: "40px", md: "60px" }}
      justify={isLeft ? "flex-start" : "flex-end"}
      direction={{
        base: isLeft ? "column-reverse" : "column",
        md: "row",
      }}
    >
      {isLeft ? (
        <>
          {student}
          {balloon}
        </>
      ) : (
        <>
          {balloon}
          {student}
        </>
      )}
    </Flex>
  );
}

export function VoiceSection() {
  return (
    <Box
      as="section"
      id="lp-voice"
      maxW="860px"
      mx="auto"
      mb={{ base: "80px", md: "120px" }}
      px={{ base: "16px", md: 0 }}
    >
      <SectionTitle>受講生の声</SectionTitle>

      <VoiceItem
        direction="left"
        avatar="👩"
        name="○○○さん"
        role="大学生"
        comment="テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト"
      />
      <VoiceItem
        direction="right"
        avatar="👨"
        name="○○○さん"
        role="会社員"
        comment="テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト"
      />
      <VoiceItem
        direction="left"
        avatar="👩‍🦰"
        name="○○○さん"
        role="自営業"
        comment="テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト"
        isLast
      />
    </Box>
  );
}
