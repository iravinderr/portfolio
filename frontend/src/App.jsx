import React from "react";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className='w-screen h-screen overflow-x-hidden overflow-y-auto scroll-smooth bg-[#F5F7FA] dark:bg-[#121E40]'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App;