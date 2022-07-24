import { createContext, useContext, useEffect, useState } from "react";
import { getData } from "../services/data-service";

const DataContext = createContext(null);
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleData() {
    setLoading(true);
    try {
      const response = await getData();
      setData(response.results);
      console.log(response.results);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    handleData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        loading,
        setData,
        setLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
