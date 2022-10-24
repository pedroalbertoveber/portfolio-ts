import Default from "components/Default";
import Home from "pages/Home";
import React, { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;