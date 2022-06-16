import React from "react";
import { Box, Text, useColorModeValue, VStack } from "@chakra-ui/react";

interface DetailBoxProps {
  details:any[],
  inputDetails: string | undefined
}

const DetailBox = ({details,inputDetails}:DetailBoxProps) => {
  const textColor = useColorModeValue("#333333", "#F1F5F8");
  const borderColor = useColorModeValue("#DEE5ED", "#f47904");
  const secondaryText = useColorModeValue("#666666", "#DCE6EF");
  const backgroundColor = useColorModeValue("#DEE5ED", "#171717");

  return (
    <Box
      border={`1px solid ${borderColor}`}
      borderRadius={"6px"}
      p={3}
      my={4}
      mx={3}
      textAlign={"center"}
      backgroundColor = {backgroundColor}
    >
      <VStack>
        <Box>
          <Text color={secondaryText} fontSize={"14px"} my={"4px"}>
            Token Name
          </Text>
          <Text
            fontSize={"16px"}
            fontWeight={"400"}
            color={textColor}
            my={"4px"}
          >
            {details.length >= 1 && inputDetails !== '' ? details[0].name : details.length <= 1 && inputDetails !== '' ? inputDetails  : ''}
          </Text>
        </Box>

        <Box my={"8px"}>
          <Text color={secondaryText} fontSize={"14px"} my={"4px"}>
            Token Amount
          </Text>
          <Text fontSize={"16px"} color={textColor} my={"4px"}>
            {details.length >= 1 && inputDetails !== '' ? details[0].supply : details.length <= 1 && inputDetails !== '' ? '' : ''}
          </Text>
        </Box>

        <Box my={"8px"}>
          <Text color={secondaryText} fontSize={"14px"} my={"4px"}>
            Description
          </Text>
          <Text fontSize={"16px"} color={textColor} my={"4px"}>
            {details.length >= 1 && inputDetails !== '' ? details[0].description : details.length <= 1 && inputDetails !== '' ? '' : ''}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default DetailBox;
