import Header from "components/Header";
import Footer from 'components/Footer'
import React, { ReactElement } from "react";
import { Outlet } from 'react-router-dom';

const Default = ():ReactElement => {
  return (
    <>
    <Header />
      <Outlet />
    <Footer />
    </>
  );
};

export default Default;