import GlobalStyle from "./theme/globalStyles.js";
import Init from "./components/Init.js";
import Cadastro from "./components/Cadastro.js";
import Habitos from "./components/Habitos.js";
import Hoje from "./components/Hoje.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./contexts/UserContext.js";

const App = () => {
  const [user, setUser] = useState([]);
  const contextValue = { user, setUser };
  return (
    <>
      <UserContext.Provider value={contextValue}>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Init />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/habitos" element={<Habitos />} />
            <Route path="/hoje" element={<Hoje />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
};

export default App;
