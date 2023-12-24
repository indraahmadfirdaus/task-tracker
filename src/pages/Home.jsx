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
import axios from "axios";
import { DB } from "../db/firebase";
import { collection, getDocs } from "firebase/firestore";

const Home = () => {
  const [todos, setTodos] = useState([])

  // async function fetchTodos() {
  //   try {
  //     const { data }  = await axios.get('http://localhost:3004/todos')
  //     setTodos(data)
  //   } catch (error) {
  //     // handling error disini
  //     console.log(error);
  //   }
  // }

  const fetchPost = async () => {
    const querySnapshot = await getDocs(collection(DB, "todos"));
    const dataRes = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setTodos(dataRes);
  }

  useEffect(() => {
    fetchPost()
    // fetchTodos()
  },[])

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
        <Form setTodos={setTodos} todos={todos} fetchTodos={fetchPost} />
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
          todos.map((todo, index) => (
            <List key={index} todo={todo} fetchPost={fetchPost} />
          )
          )
        }
      </Flex>
      <Flex justify="center">
        {/* {
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
        } */}
      </Flex>
    </Box>
  );
};

export default Home;
