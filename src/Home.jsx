import { Box, Button, Center } from "@chakra-ui/react";
import React from "react";
import { TableData } from "./components/Table";
import { getData } from "./services/data-service";

export default function Home() {
  return (
    <Center w={"100vw"} h={"100vh"} border="1px">
      <Box border="1px">
        <TableData />
      </Box>
      <Button
        onClick={async () => {
          try {
            const data = await getData();
            console.log(data);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {" "}
        Click
      </Button>
    </Center>
  );
}
