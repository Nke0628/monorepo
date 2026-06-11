"use client";

import { Box, Flex, Heading, Link, List } from "@chakra-ui/react";
import { useCallback, useRef } from "react";

export function Header() {
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const naviRef = useRef<HTMLDivElement>(null);

  const toggleMenu = useCallback(() => {
    hamburgerRef.current?.classList.toggle("active");
    naviRef.current?.classList.toggle("active");
  }, []);

  return (
    <Box as="header" h="100px" pt={{ base: "25px", md: "40px" }} pl={{ base: "25px", md: "50px" }}>
      <Heading as="h1" fontSize="1.5rem" fontWeight="bold" color="#ff2a2a" lineHeight="1">
        <Link href="#">BBB英会話スクール</Link>
      </Heading>

      {/* ナビメニュー（全画面オーバーレイ） */}
      <Box
        ref={naviRef}
        position="fixed"
        top={0}
        left={0}
        w="100%"
        h="100vh"
        bg="#ff2a2a"
        color="white"
        zIndex={20}
        opacity={0}
        visibility="hidden"
        textAlign="center"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        transition="opacity 0.6s ease, visibility 0.6s ease"
        css={{ "&.active": { opacity: 1, visibility: "visible" } }}
      >
        <Box position="absolute" top="40px" left="50px" fontSize="1.5rem" fontWeight="bold">
          BBB英会話
        </Box>
        <List.Root mb="40px" listStyle="none" p={0}>
          <List.Item mb="20px">
            <Link href="#lp-reason" onClick={toggleMenu} color="white" fontWeight="bold" fontSize="1.125rem">
              BBBが選ばれる理由
            </Link>
          </List.Item>
          <List.Item mb="20px">
            <Link href="#lp-voice" onClick={toggleMenu} color="white" fontWeight="bold" fontSize="1.125rem">
              受講生の声
            </Link>
          </List.Item>
          <List.Item mb="20px">
            <Link href="#lp-summary" onClick={toggleMenu} color="white" fontWeight="bold" fontSize="1.125rem">
              スクールの概要
            </Link>
          </List.Item>
        </List.Root>
        <Link
          className="lp-navi-btn"
          href="#"
          onClick={toggleMenu}
          w="250px"
          border="solid 1px white"
          color="white"
          display="block"
          fontWeight="bold"
          py="15px"
          mx="auto"
          position="relative"
          transition="0.3s ease-in-out"
          textAlign="center"
          _hover={{ bg: "white", color: "#ff2a2a" }}
        >
          無料体験に申し込む
        </Link>
      </Box>

      {/* ハンバーガーボタン */}
      <Flex
        as="button"
        ref={hamburgerRef}
        onClick={toggleMenu}
        position="fixed"
        top={0}
        right={0}
        zIndex={30}
        w={{ base: "75px", md: "100px" }}
        h={{ base: "75px", md: "100px" }}
        bg="#ff2a2a"
        border="none"
        cursor="pointer"
        direction="column"
        align="center"
        justify="center"
        gap="12px"
        transition="0.3s"
        _hover={{ opacity: 0.7 }}
        css={{
          "& span": {
            width: "50px",
            height: "2px",
            background: "#fff",
            display: "block",
            transition: "0.3s ease-in-out",
          },
          "&.active span:nth-child(1)": {
            transform: "rotate(-45deg) translate(-10px, 10px)",
          },
          "&.active span:nth-child(2)": {
            opacity: 0,
          },
          "&.active span:nth-child(3)": {
            transform: "rotate(45deg) translate(-10px, -10px)",
          },
        }}
      >
        <span />
        <span />
        <span />
      </Flex>
    </Box>
  );
}
