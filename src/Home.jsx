import { Box, Button, Center, Flex, Spinner } from "@chakra-ui/react";
import Footer from "./components/Footer";
import { TableData } from "./components/Table";
import { useData } from "./context/DataContext";
import { downloadData } from "./services/data-service";

export default function Home() {
  const dataContext = useData();

  function handlePage(number) {
    dataContext.setCurrentPage(dataContext.currentPage + number);
    dataContext.handleData(
      false,
      dataContext.currentPage + number,
      dataContext.currentPage
    );
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
          <Flex
            alignItems={"flex-end"}
            flexDirection="column"
            overflow={"hidden"}
          >
            <Button
              colorScheme={"green"}
              size={"sm"}
              onClick={() => downloadData(dataContext.currentPage)}
            >
              Descargar CSV
            </Button>
            <TableData data={dataContext.data} />
          </Flex>
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
          <Footer />
        </Center>
      )}
    </>
  );
}
