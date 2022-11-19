import React, { useState, useEffect } from "react";
import {
  Text,
  Box,
  Divider,
  Flex,
  Input,
  Button,
  Spacer,
  HStack,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { FaTrash, FaCheck } from "react-icons/fa";

const Home = (props) => {
  return (
    <Box
      w={{ base: "80%", md: "60%", lg: "60%" }}
      bg="white"
      h="80%"
      borderRadius="xl"
      shadow="xl"
      pb="4"
    >
      <Flex direction="column" alignItems="center">
        <Text
          fontSize="3xl"
          fontWeight="bold"
          color="orange.500"
          textAlign="center"
          mt="4"
        >
          Task Tracker nya
        </Text>
        <Divider
          w="50%"
          borderWidth="medium"
          borderRadius="xl"
          mt="2"
          borderColor="orange.500"
        />
      </Flex>
      <Flex justify="center" mt="4">
        <Input
          variant="filled"
          placeholder="add task here ..."
          w="60%"
          mr="4"
        />
        <Button bgColor="orange.200" color="orange.500">
          Add
        </Button>
      </Flex>
      <Flex
        alignItems="center"
        mt={4}
        direction="column"
        overflow="auto"
        height="70%"
        overflowX="hidden"
      >
        <HStack
          bgColor={"orange.200"}
          color={"orange.500"}
          w="90%"
          px={4}
          py={2}
          borderRadius="xl"
          my="1"
        >
          <Text fontWeight="bold">{"dummy title"}</Text>
          <Spacer />
          <IconButton bgColor="white" icon={<FaCheck />} />
          <IconButton bgColor="white" icon={<FaTrash />} />
        </HStack>
      </Flex>
      <Flex justify="center">
        <Button bgColor="green.200" color="green.600">
          See Completed Only
        </Button>
        <Button bgColor="gray.200" color="gray.600">
          See All Tasks
        </Button>
      </Flex>
    </Box>
  );
};

export default Home;
