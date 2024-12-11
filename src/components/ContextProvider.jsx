import { createContext, useState } from "react";

export const DataContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const data = {
    users,
    setUsers,
  };
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default ContextProvider;
