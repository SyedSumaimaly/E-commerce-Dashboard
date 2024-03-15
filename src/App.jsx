import "./App.css";
import DashboardLayout from "./layout/DashboardLayout";
import Order from "./component/Order"
import Products from "./component/Products"
import Login from "./component/Login"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



function App() {

  return (


    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<DashboardLayout><Order /></DashboardLayout>} />
        <Route path="/products" element={<DashboardLayout><Products /></DashboardLayout>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
