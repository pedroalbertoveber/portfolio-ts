import Default from "components/Default";
import About from "pages/About";
import Contact from "pages/Contact";
import Experiences from "pages/Experiences";
import Home from "pages/Home";
import Projects from "pages/Projects";
import React, { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Projects />} />
          <Route path="sobre" element={<About />} />
          <Route path="experiencias" element={<Experiences />} />
          <Route path="contato" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;