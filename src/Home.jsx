import { Box, Button, Center, Spinner } from "@chakra-ui/react";
import React from "react";
import { TableData } from "./components/Table";
import { useData } from "./context/DataContext";

export default function Home() {
  const dataContext = useData();

  function handlePage(number) {
    dataContext.setCurrentPage(dataContext.currentPage + number);
  }

  return (
    <>
      {dataContext.loadingView && (
        <Center w={"100vw"} h={"100vh"} bg={"gray.100"}>
          <Spinner thickness="4px" color="blue.500" size="xl" />
        </Center>
      )}
      {!dataContext.loadingView && (
        <Center w={"100vw"} h={"100vh"} bg={"gray.100"} flexDirection="column">
          <Box>
            <TableData data={dataContext.data} />
          </Box>
          <Center>
            <Button
              onClick={() => handlePage(-1)}
              isDisabled={dataContext.currentPage === 1 || dataContext.loading}
            >
              Anterior
            </Button>
            <Box
              borderRadius={"0.2rem"}
              display={"inline"}
              px="1rem"
              bg={"whiteAlpha.900"}
            >
              {dataContext.currentPage}
            </Box>
            <Button
              onClick={() => handlePage(1)}
              isDisabled={dataContext.loading}
            >
              Siguiente
            </Button>
          </Center>
        </Center>
      )}
    </>
  );
}
