import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Img,
  Link,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import SocialMedia from "./SocialMedia";
import DappsDropdown from "./DappsDropdown";
import WalletConnection from "./WalletConnection";
import SwapDropdown from "./SwapDropdown";
import LightLogo from "./../../assets/logo/fireswap.png";
import DarkLogo from "./../../assets/logo/fireswaplight.png";
import MobileNavDrawer from "./MobileNavDrawer";
import NetworkConnector from "../NetworkConnector";
import EarnDropdown from "./EarnDropdown";

export const Nav = ({ to, label, active }: { to: string; label: string, active?:boolean }) => {
  const mobileNavColor = useColorModeValue("#FFFFFF", "#191919");
  return (

  <NavLink
    to={to}
    activeStyle={{
      color: "#319EF6",
    }}
    color={active ? "#319EF6" : mobileNavColor}
    style={active ? {color:"#319EF6"}: {color:""}}
  >
    {label}
  </NavLink>
)};

const Index = () => {
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");
  const location = useLocation().pathname;
  const Logo = useColorModeValue(LightLogo, DarkLogo);
  const mobileNavColor = useColorModeValue("#FFFFFF", "#191919");
  const mobileNavBorderColor = useColorModeValue("#999999", "#f47904");

  return (
    <>
      {location === "/" ? null : (
        <Flex px={6} py={2} boxShadow="sm">
          {isMobileDevice ? (
            <>
            
              <Flex w="100%" justifyContent="space-between" h="10">
                <Box mr={6}>
                  <NavLink to="/">
                    {" "}
                    <Img src={Logo} />
                  </NavLink>
                </Box>
                <MobileNavDrawer />
              </Flex>
              <Flex
                h="70px"
                zIndex="200"
                position="fixed"
                left={0}
                bottom={0}
                justify="space-between"
                alignItems="center"
                borderTop="1px"
                borderColor={mobileNavBorderColor}
                w="100%"
                bgColor={mobileNavColor}
                mr={4}
              >
                <Flex ml={4}>
                  <WalletConnection />
                </Flex>
                <Flex mr={4}>
                  <NetworkConnector />
                  <ColorModeSwitcher />
                  <SocialMedia />
                </Flex>
              </Flex>
            </>
          ) : (
            <>
              <Flex h="10">
                <Box mr={4}>
                  <NavLink to="/">
                    {" "}
                    <Img src={Logo} />{" "}
                  </NavLink>
                </Box>
                

                <Flex
                  mr="4px"
                  w="400px"
                  h="10"
                  align="center"
                  justify="space-around"
                  fontSize="14px"
                  className="HeaderRide"
                >
                  <SwapDropdown />
                  <EarnDropdown />
                  {/* <Nav label="Liquidity" to="/pool" active={location === '/add' || location === '/remove' ? true : false} />
                  <Nav label="Farming" to="/farming-v2"  /> */}
                  
                </Flex>
              </Flex>
              <Spacer />

              <Flex h="8" justify="flex-end">
                <NetworkConnector />
                <Flex h="8" justify="flex-end" className="Wallet">
                  <WalletConnection />
                </Flex>
                <SocialMedia />
                <ColorModeSwitcher />
              </Flex>
            </>
          )}
        </Flex>
      )}
    </>
  );
};

export default Index;
