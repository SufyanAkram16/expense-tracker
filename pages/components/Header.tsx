import useTracker from "@/context/useTracker";
import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

function Header() {

    const {balance} = useTracker()
  return (
    <Flex direction={'column'}>
      <Heading  m={16}>Expense Tracker</Heading>
      <Heading mt={2} size={'md'} fontWeight={'bold'}>Your Balance</Heading>
      <Heading>${balance}</Heading>
    </Flex>
  );
}

export default Header;
