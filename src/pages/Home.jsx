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
import List from "../components/List";

const Home = (props) => {
  const [task, setTask] = useState([]);
  const [formValue, setFormValue] = useState("");
  const [count, setCount] = useState(0);

  const handleClickAddTodo = () => {
    // setState <- one way data binding
    // [1,2,3] <- 4

    // yang terjadi
    // bukan [1,2,3] terus di push 4

    // tapi yang terjadi
    // [1,2,3] dibuang
    // assign value baru [1,2,3,4]
    const newTodo = {
      id: task.length + 1,
      title: formValue,
      isComplete: false,
    };

    const newTasks = [...task, newTodo];

    setTask(newTasks);
    setFormValue("");
  };

  const onUpdateTask = (id) => {
    // [
    //   { id: 1, title: "jajan", isComplete: false },
    //   { id: 2, title: "beli sate", isComplete: false },
    // ];

    // 1. temukan item yang mau kita ubah
    // 2. item tersebut ubah jadi complete
    // 3. return sisanya

    const updatedTask = task.map((each) => {
      if (each.id === id) {
        // step 1
        return {
          ...each,
          isComplete: true, // step 2
        };
      }
      return each; // step 3
    });

    setTask(updatedTask);
  };

  const onDeleteTask = (id) => {
    // [
    //   { id: 1, title: "jajan", isComplete: false },
    //   { id: 2, title: "beli sate", isComplete: false },
    // ];
    const filteredTask = task.filter((each) => each.id !== id);
    setTask(filteredTask);
  };

  // USE EFFECT DAN LIFECYCLE
  useEffect(() => {
    setCount(task.length);
  }, [task]);
  // kalo kosong, dia masuk component did mount
  // kalo ada isinya, dia akan dengarkan perubahan dari state tersebut, jika ada perubahan maka dia akan terus menjalankan (component did update)

  return (
    <Box
      w={{ base: "80%", md: "60%", lg: "60%" }}
      bg="white"
      h="80%"
      borderRadius="xl"
      shadow="xl"
      pb="4"
    >
      {/* {JSON.stringify(task)} */}
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
        <Input
          variant="filled"
          placeholder="add task here ..."
          w="60%"
          mr="4"
          onChange={(event) => {
            setFormValue(event.target.value);
          }}
          value={formValue}
        />
        <Button
          bgColor="orange.200"
          color="orange.500"
          onClick={handleClickAddTodo}
        >
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
        <p>Anda mempunyai {count} pekerjaan</p>
        {/* LIST - START*/}
        {task.map((each) => {
          return (
            <List
              key={each.id}
              task={each}
              onDeleteTask={onDeleteTask}
              onUpdateTask={onUpdateTask}
            />
          );
        })}
        {/* LIST -  END */}
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
