import { Button, Input } from "@chakra-ui/react";
import React from "react";

const Form = ({ handleOnChangeForm, handleSubmitForm }) => {
  return (
    <>
      <Input
        variant="filled"
        placeholder="add task here ..."
        w="60%"
        mr="4"
        onChange={handleOnChangeForm}
      />
      <Button
        bgColor="orange.200"
        color="orange.500"
        onClick={handleSubmitForm}
      >
        Add
      </Button>
    </>
  );
};

export default Form;
