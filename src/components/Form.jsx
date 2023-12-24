import { Button, Input } from '@chakra-ui/react'
import axios from 'axios'
import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { DB } from '../db/firebase'

const Form = ({ todos, fetchTodos }) => {
  const [task, setTask] = useState('')
  async function onHandleAddTodo() {
    try {
      const payload = {
        task: task,
        isComplete: false
      }
      await addDoc(collection(DB, "todos"), payload);
      setTask('')
      fetchTodos()
    } catch (error) {
      // handling error disini
      console.log(error);
    }

  }

  return (
    <>
      <Input
        variant="filled"
        placeholder="add task here ..."
        w="60%"
        mr="4"
        value={task}
        onChange={(ev) => {
          setTask(ev.target.value)
        }}
      />
      <Button
      onClick={onHandleAddTodo}
      bgColor="orange.200"
      color="orange.500"
      >
        Add
      </Button>
    </>
  )
}

export default Form