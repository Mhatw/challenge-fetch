import { Box, Button, Center, Spinner } from "@chakra-ui/react";
import React from "react";
import { TableData } from "./components/Table";
import { useData } from "./context/DataContext";

export default function Home() {
  const dataContext = useData();

  return (
    <>
      {dataContext.loading && (
        <Center w={"100vw"} h={"100vh"} bg={"gray.100"}>
          <Spinner thickness="4px" color="blue.500" size="xl" />
        </Center>
      )}
      {!dataContext.loading && (
        <Center w={"100vw"} h={"100vh"} bg={"gray.100"} flexDirection="column">
          <Box>
            <TableData
              data={dataContext.data}
              isLoading={dataContext.loading}
            />
          </Box>
        </Center>
      )}
    </>
  );
}
