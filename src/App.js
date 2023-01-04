import React from "react";
import { Route, Routes } from "react-router-dom";

import Users from './Users';
import SingleUser from "./components/SingleUser";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/user-details/:id" element={<SingleUser />} />
    </Routes>
  );
}

export default App;
