import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import useTracker from "@/context/useTracker";
import React from "react";


export const AddTransaction = () => {

    const { textInput,numInput,setNumInput,setTextInput,addTransaction} = useTracker()

  return (
    <Flex minW={"450px"} direction={"column"} mt={6}>
      <Heading
        borderBottom={"1px solid #bbb"}
        pb={"10px"}
        size={"md"}
        m={"20px 0 10px"}
      >
        Add New Transaction
      </Heading>

      <FormControl>
        <FormLabel>Text</FormLabel>
        <Input
          mb={4}
          focusBorderColor="black"
          type={"text"}
          placeholder="Enter Text ..."
          value={textInput}
          onChange={(e) => setTextInput(e.target.value as string)}
          
        />

        <FormLabel fontWeight={"medium"}>
          Amount <br /> (negative - expense, positive - income)
        </FormLabel>
        <Input
          type={"number"}
          focusBorderColor="black"
          placeholder="Enter Amount ..."
          value={numInput}
          onChange={(e)=>setNumInput(e.target.value as unknown as number)}
        />
        <Button
          mt={4}
          size="md"
          height="38px"
          width="100%"
          colorScheme="purple"
          onClick={()=>addTransaction()}
        >
          Add Transaction
        </Button>
      </FormControl>
    </Flex>
  );
};
