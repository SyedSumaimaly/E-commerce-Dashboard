import { useState } from "react";
import "./App.css";
import Login from "./component/Login";
import DashboardLayout from "./layout/DashboardLayout";
import { Table } from 'flowbite-react';
import Users from "./component/Users";



function App() {

  return (
    <>
      {/* <Login /> */}
      <DashboardLayout>
        <Users/>
      </DashboardLayout>
    </>
  );
}

export default App;
