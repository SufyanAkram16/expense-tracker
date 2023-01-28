import useTracker from "@/context/useTracker";
import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const History = () => {
  
  const {transaction} = useTracker()

  return (
    <Flex minW={"450px"} direction={"column"}>
      <Heading
        borderBottom={"1px solid #bbb"}
        pb={"10px"}
        size={"md"}
        m={"20px 0 10px"}
      >
        History
      </Heading>

      {transaction.map((trx, ind) => (
        <Flex
        key={ind}
          w={"100%"}
          backgroundColor={"white"}
          alignItems={"center"}
          justifyContent={"space-between"}
          mt={4}
          p={2}
          borderRight={"4px solid #2ED0A3"}
          boxShadow={"0 1px 3px rgba(0, 0, 0, 0.55)"}
        >
          <Text>{trx.text}</Text>
          <Text>{trx.amount}</Text>
        </Flex>
      ))}
    </Flex>
  );
};
