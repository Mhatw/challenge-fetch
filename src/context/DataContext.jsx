import { createContext, useContext, useEffect, useState } from "react";
import { getData } from "../services/data-service";

const DataContext = createContext(null);
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loadingView, setLoadingView] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  async function handleData(firstRequest, page) {
    if (firstRequest) setLoadingView(true);
    setLoading(true);
    console.log("handleData");
    try {
      const response = await getData(page);
      setData(response.results);
      console.log(response.results);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    console.log("handleData end");
    if (firstRequest) setLoadingView(false);
  }

  useEffect(() => {
    handleData(true);
  }, []);
  useEffect(() => {
    handleData(false, currentPage);
  }, [currentPage]);

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
