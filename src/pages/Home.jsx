import React, { useState, useEffect } from "react";
import {
  Text,
  Box,
  Divider,
  Flex,
  Button,
} from "@chakra-ui/react";
import Form from "../components/Form";
import List from "../components/List";

const Home = () => {
  const [todos, setTodos] = useState([])
  const [toggleComplete, setToggleComplete] = useState(false)
  const [renderTodos, setRenderTodos] = useState([])

  function handleDeleteTodoById(id) {
    const filtered = todos.filter(todo => Number(todo.id) !== Number(id))
    setTodos(filtered)
  }

  function handleUpdateTodoById(id) {
    const newValue = todos.map(todo => {

      if (Number(todo.id) === Number(id)) {
        todo.isComplete = true
      }

      return todo
    })
    setTodos(newValue)
  }

  useEffect(() => {
    if(toggleComplete) {
      const completedTodos = todos.filter(todo => todo.isComplete)
      setRenderTodos(completedTodos)
    } else {
      setRenderTodos(todos)
    }
  },[toggleComplete, todos])

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
          Task Tracker
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
        <Form setTodos={setTodos} todos={todos} />
      </Flex>
      <Flex
        alignItems="center"
        mt={4}
        direction="column"
        overflow="auto"
        height="70%"
        overflowX="hidden"
      >
        {
          renderTodos.map((todo, index) => (
            <List key={index} todo={todo} handleDeleteTodoById={handleDeleteTodoById} handleUpdateTodoById={handleUpdateTodoById} />
          )
          )
        }
      </Flex>
      <Flex justify="center">
        {
          toggleComplete ?
            (
              <Button bgColor="gray.200" color="gray.600" onClick={() => { setToggleComplete(false)}}>
                See All Tasks
              </Button>
            )
            :
            (
              <Button bgColor="green.200" color="green.600" onClick={() => { setToggleComplete(true)}}>
                See Completed Only
              </Button>
            )
        }
      </Flex>
    </Box>
  );
};

export default Home;
