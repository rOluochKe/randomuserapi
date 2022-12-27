import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Users from './Users';
import SingleUser from "./components/SingleUser";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/user-details/:id" element={<SingleUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
