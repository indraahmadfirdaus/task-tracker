import { Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

const Form = ({ todos, setTodos }) => {
  const [task, setTask] = useState('')
  function onHandleAddTodo() {
    const payload = {
      id: todos.length,
      task: task,
      isComplete: false
    }
    setTodos([...todos, payload])
    setTask('')
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