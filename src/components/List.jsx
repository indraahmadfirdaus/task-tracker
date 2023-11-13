import { HStack, IconButton, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { FaCheck, FaTrash } from 'react-icons/fa'

const List = ({ todo, handleDeleteTodoById, handleUpdateTodoById }) => {
  return (
    <HStack
      bgColor={todo.isComplete ? "green.200" : "orange.200"}
      color={todo.isComplete ? "green.500" : "orange.500"}
      w="90%"
      px={4}
      py={2}
      borderRadius="xl"
      my="1"
    >
      <Text fontWeight="bold">{todo.task}</Text>
      <Spacer />
      <IconButton onClick={() => {
        handleUpdateTodoById(todo.id)
      }} bgColor="white" icon={<FaCheck />} />
      <IconButton onClick={() => {
        handleDeleteTodoById(todo.id)
      }} bgColor="white" icon={<FaTrash />} />
    </HStack>
  )
}

export default List