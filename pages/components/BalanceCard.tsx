import useTracker from "@/context/useTracker";
import { Center, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";


function BalanceCard() {

  const {income, expense} = useTracker()
  return (
    <Flex
      bg={"#fff"}
      p={"20px"}
      m={"20px auto"}
      justifyContent={"space-between"}
      boxShadow={"0 1px 3px rgba(0, 0, 0, 0.55)"}
      w={"450px"}
    >
      <Flex direction={"column"} textAlign={"center"}>
        <Heading size={"md"}>Income</Heading>
        <Text fontSize={'2xl'} color={'#50CC71'}>${income}</Text>
      </Flex>
      <Center height="50px">
        <Divider orientation="vertical" colorScheme={'black'} />
      </Center>
      <Flex direction={"column"} textAlign={"center"}>
        <Heading size={"md"}>Expense</Heading>
        <Text fontSize={'2xl'} color={'#DA552B'}>${expense}</Text>
      </Flex>
    </Flex>
  );
}

export default BalanceCard;
