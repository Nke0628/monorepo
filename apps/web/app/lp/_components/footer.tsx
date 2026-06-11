"use client";

import { Box, Flex, Link, List, Text } from "@chakra-ui/react";

const FOOTER_DATA = [
  {
    title: "コース一覧",
    links: ["スタンダードプラン", "プレミアムプラン", "短期集中プラン", "日常英会話コース", "ビジネス英会話コース"],
  },
  {
    title: "講師紹介",
    links: ["講師について", "講師一覧", "講師を探す"],
  },
  {
    title: "会社情報",
    links: ["会社概要", "採用情報"],
  },
  {
    title: "BBBについて",
    links: ["よくあるご質問", "ご利用規約", "プライバシーポリシー", "お問い合わせ"],
  },
];

export function Footer() {
  return (
    <Box as="footer" bg="#e8e8e8" pt="60px" pb="20px">
      <Flex
        maxW="860px"
        mx="auto"
        px={{ base: "16px", md: 0 }}
        justify="space-between"
        mb="60px"
        flexWrap="wrap"
      >
        {FOOTER_DATA.map((section, i) => (
          <Box
            key={i}
            w={{ base: "50%", md: "25%" }}
            mb={{ base: i < 2 ? "30px" : 0, md: 0 }}
          >
            <Text fontWeight="bold" fontSize={{ base: "0.9375rem", md: "inherit" }}>
              {section.title}
            </Text>
            <List.Root listStyle="none" pt="10px" pl="10px">
              {section.links.map((link) => (
                <List.Item key={link} mb="3px">
                  <Link
                    href="#"
                    fontSize={{ base: "0.75rem", md: "0.875rem" }}
                    transition="0.3s"
                    _hover={{ opacity: 0.7 }}
                  >
                    {link}
                  </Link>
                </List.Item>
              ))}
            </List.Root>
          </Box>
        ))}
      </Flex>
      <Text fontSize="0.625rem" textAlign="center">
        &copy; BBB English School
      </Text>
    </Box>
  );
}
