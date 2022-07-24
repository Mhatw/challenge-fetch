import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      target={"_blank"}
      _hover={{
        bg: useColorModeValue("blackAlpha.300", "whiteAlpha.300"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      position="absolute"
      bottom={0}
      width="100%"
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Link
          href="https://mhatw.vercel.app/"
          isExternal
          fontStyle="normal"
          fontWeight=" 900"
          fontSize=" 20px"
          lineHeight=" 24px"
          cursor=" pointer"
          _hover={{
            textDecoration: "none",
            color: useColorModeValue("blue.700", "blue.200"),
          }}
        >
          Mhatw
        </Link>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Github"} href={"https://github.com/mhatw"}>
            <FaGithub />
          </SocialButton>
          <SocialButton
            label={"Linkedin"}
            href={"https://www.linkedin.com/in/mhatw/"}
          >
            <FaLinkedinIn />
          </SocialButton>
          <SocialButton label={"Website"} href={"https://mhatw.vercel.app/"}>
            <RiGlobalLine />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
