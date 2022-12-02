import React from "react";
import { HStack, Text, Spacer, IconButton } from "@chakra-ui/react";
import { FaTrash, FaCheck } from "react-icons/fa";

const List = ({ task, onDeleteTask, onUpdateTask }) => {
  return (
    <HStack
      bgColor={task.isComplete ? "green.200" : "orange.200"}
      color={task.isComplete ? "green.500" : "orange.500"}
      w="90%"
      px={4}
      py={2}
      borderRadius="xl"
      my="1"
    >
      <Text fontWeight="bold">{task.title}</Text>
      <Spacer />
      <IconButton
        bgColor="white"
        icon={<FaCheck />}
        onClick={() => {
          onUpdateTask(task.id);
        }}
      />
      <IconButton
        bgColor="white"
        icon={<FaTrash />}
        onClick={() => {
          onDeleteTask(task.id);
        }}
      />
    </HStack>
  );
};

export default List;
