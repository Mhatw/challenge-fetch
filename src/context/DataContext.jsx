import { useToast } from "@chakra-ui/react";
import { createContext, useContext, useEffect, useState } from "react";
import { getData } from "../services/data-service";

const DataContext = createContext(null);
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loadingView, setLoadingView] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const toast = useToast();

  async function handleData(firstRequest, page, lastPage) {
    if (firstRequest) setLoadingView(true);
    setLoading(true);
    console.log("handleData");
    try {
      const response = await getData(page);
      response.results.sort((a, b) => a.dob.age - b.dob.age);
      setData(response.results);
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description:
          "Error al obtener los datos de la API por favor recarga la página",
        status: "error",
        duration: 6000,
        isClosable: true,
      });
      setCurrentPage(lastPage || 1);
    }
    setLoading(false);
    console.log("handleData end");
    if (firstRequest) setLoadingView(false);
  }

  useEffect(() => {
    handleData(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        loading,
        setLoading,
        currentPage,
        setCurrentPage,
        loadingView,
        setLoadingView,
        handleData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
