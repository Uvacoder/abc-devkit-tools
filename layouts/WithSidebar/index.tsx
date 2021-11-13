import {
  IconButton,
  Box,
  Flex,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Heading,
  useDisclosure,
  useColorMode,
  useBreakpointValue,
} from "@chakra-ui/react";
import SidebarContent from "@/components/SidebarContent";
import { FiMenu, FiMoon, FiSun } from "react-icons/fi";

interface WithSidebarProps {
  title?: string;
  children: React.ReactNode;
}

const WithSidebar = ({ title, children }: WithSidebarProps): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      as="section"
      minH="100vh"
      mt={{ base: 2, md: 8 }}
      mr={{ base: 0, md: 4 }}
    >
      <SidebarContent
        display={{ base: "none", md: "unset" }}
        onClose={() => onClose}
      />
      <Drawer isOpen={isOpen} onClose={onClose} placement="left" size="full">
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          h="14"
        >
          <Heading display={{ base: "none", md: "block" }}>
            {title || ""}
          </Heading>
          <IconButton
            aria-label="Menu"
            display={{ base: "inline-flex", md: "none" }}
            onClick={onOpen}
            icon={<FiMenu />}
            size="sm"
          />

          <Flex align="center">
            <IconButton
              onClick={toggleColorMode}
              icon={colorMode === "light" ? <FiSun /> : <FiMoon />}
              aria-label={"Toggle Color Mode"}
              size={useBreakpointValue({ base: "sm", md: "md" })}
            />
          </Flex>
        </Flex>

        <Box as="main" p="4">
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default WithSidebar;
