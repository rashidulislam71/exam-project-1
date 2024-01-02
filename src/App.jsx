import React from "react";
import MainLayout from "./Component/MainLayout/MainLayout/MainLayout";
import { GlobalProvider } from "./Component/GlobalContext/GlobalContext";


const App = () => {
  return (
    <div>
      <GlobalProvider>
        <MainLayout />
      </GlobalProvider>
    </div>
  );
};

export default App;
