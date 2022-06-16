import React from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuDivider,
  MenuList,
  Button,
  Badge,
  Text,
  Spacer,
  IconButton,
  Link,
  Icon,
  Stack,
  useMediaQuery,
} from "@chakra-ui/react";
import { ChevronDownIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { AiOutlineAppstore } from "react-icons/ai";

function DappsDropdown() {
  return (
    <>
      <Menu>
        <MenuButton
          mr={1}
          variant="ghost"
          as={Button}
          transition="all 0.2s"
          borderRadius="md"
          borderWidth="1px"
          _hover={{ bg: "#f47904" }}
          _focus={{ boxShadow: "outline" }}
          rightIcon={<ChevronDownIcon />}
          leftIcon={<AiOutlineAppstore />}
          fontSize="14px"
          className='HeaderDApps'
        >
          DApps
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Stack direction={'column'} spacing={0} >
              <Text>FireSwap</Text>
              <Text color={'gray.500'}>  Swap tokens directly.</Text>
            </Stack>

          </MenuItem>
          
         
         
        </MenuList>
      </Menu>
    </>
  );
}

export default DappsDropdown;
